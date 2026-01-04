import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

/* ---------------- PAYMENT INFO ---------------- */

const paymentDetails = {
  zelle: {
    label: "Zelle",
    icon: <AccountBalanceIcon />,
    info: "zelle@email.com",
  },
  venmo: {
    label: "Venmo",
    icon: <PaymentsIcon />,
    info: "@yourVenmo",
  },
  cashapp: {
    label: "Cash App",
    icon: <PaymentsIcon />,
    info: "$YourCashTag",
  },
  crypto: {
    label: "Crypto",
    icon: <CurrencyBitcoinIcon />,
    info: "BTC: bc1qxyz...",
    warning: "Send exact amount only",
  },
};

/* ---------------- CHECKOUT PAGE ---------------- */

export default function CheckoutPage() {
        console.log(localStorage.getItem('token'))
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state?.cart) navigate("/cart");
  }, [state, navigate]);

  if (!state?.cart) return null;

  const { cart, totalPrice } = state;

  const submitOrder = async () => {
    try {
      setLoading(true);

const token = localStorage.getItem("token");

const res = await fetch("https://curlxbackend.onrender.com/api/orders/checkout", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // ✅ pass the token
  },
  body: JSON.stringify({
    items: cart,
    amount: totalPrice,
    paymentMethod,
  }),
});

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      navigate("/order-success", { state: { order: data } });
    } catch (err) {
      alert(err.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Secure Checkout
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* 🛒 ORDER SUMMARY */}
          <Paper
            sx={{
              flex: 1,
              p: 3,
              position: "sticky",
              top: 100,
              height: "fit-content",
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={2}>
              Order Summary
            </Typography>

            {cart.map((item) => (
              <Box key={item._id} mb={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={500}>
                    {item.name} × {item.qty}
                  </Typography>
                  <Typography>
                    ${(item.price * item.qty).toFixed(2)}
                  </Typography>
                </Stack>
                <Typography fontSize={13} color="text.secondary">
                  {item.category}
                </Typography>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={700}>Total</Typography>
              <Typography fontWeight={700}>
                ${totalPrice.toFixed(2)}
              </Typography>
            </Stack>
          </Paper>

          {/* 💳 PAYMENT SECTION */}
          <Paper sx={{ flex: 1.2, p: 4 }}>
            <Typography variant="h6" fontWeight={600} mb={3}>
              Choose Payment Method
            </Typography>

            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              {Object.entries(paymentDetails).map(
                ([key, method]) => (
                  <Paper
                    key={key}
                    variant="outlined"
                    sx={{
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      borderColor:
                        paymentMethod === key
                          ? "primary.main"
                          : "divider",
                    }}
                  >
                    <FormControlLabel
                      value={key}
                      control={<Radio />}
                      label={
                        <Stack direction="row" spacing={2} alignItems="center">
                          {method.icon}
                          <Typography fontWeight={600}>
                            {method.label}
                          </Typography>
                        </Stack>
                      }
                    />

                    {paymentMethod === key && (
                      <Box sx={{ ml: 4, mt: 1 }}>
                        <Chip
                          label={method.info}
                          color="primary"
                          variant="outlined"
                        />
                        {method.warning && (
                          <Typography
                            fontSize={12}
                            color="error"
                            mt={1}
                          >
                            ⚠ {method.warning}
                          </Typography>
                        )}
                      </Box>
                    )}
                  </Paper>
                )
              )}
            </RadioGroup>

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 4, py: 1.5 }}
              disabled={!paymentMethod || loading}
              onClick={submitOrder}
            >
              {loading ? "Submitting Order..." : "I Have Completed Payment"}
            </Button>

            <Typography
              fontSize={12}
              color="text.secondary"
              mt={2}
              textAlign="center"
            >
              Payments are verified manually. You’ll be notified once confirmed.
            </Typography>
          </Paper>
        </Stack>
      </Box>

      <Footer />
    </>
  );
}
