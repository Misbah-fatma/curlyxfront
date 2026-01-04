import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const order = state?.order;

  if (!order) {
    // Redirect if accessed directly
    navigate("/");
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <CheckCircleOutlineIcon
          sx={{ fontSize: 80, color: "success.main", mb: 2 }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Order Successful!
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Thank you for your purchase. Your order has been received and is now being processed.
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          mb={3}
        >
          <Typography fontWeight={600}>Order ID:</Typography>
          <Typography color="primary">{order._id}</Typography>
        </Stack>

        <Typography fontSize={14} color="text.secondary" mb={3}>
          You will receive a confirmation email with the details of your order.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
}
