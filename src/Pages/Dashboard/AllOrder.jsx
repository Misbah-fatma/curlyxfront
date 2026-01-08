import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Stack,
  Chip,
} from "@mui/material";

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/orders/allOrders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (res.ok) {
          setOrders(data.orders || []); // fallback to empty array
        } else {
          console.error("Failed to fetch orders:", data.message);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING_VERIFICATION":
        return "warning";
      case "COMPLETED":
        return "success";
      case "CANCELLED":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        All Orders
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : orders.length === 0 ? (
        <Typography>No orders found.</Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Total ($)</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>
                    {order.userId?.name || "Unknown"} <br />
                    <Typography variant="body2" color="text.secondary">
                      {order.userId?.email || "-"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {(order.items ?? []).map((item) => (
                      <Stack key={item._id || item.name} spacing={0.5}>
                        <Typography fontSize={14}>
                          {item.name} × {item.qty}
                        </Typography>
                      </Stack>
                    ))}
                  </TableCell>
                  <TableCell>{order.amount?.toFixed(2) ?? "0.00"}</TableCell>
                  <TableCell>{order.paymentMethod || "-"}</TableCell>
                  <TableCell>
                    <Chip
                      label={(order.status ?? "UNKNOWN").replace("_", " ")}
                      color={getStatusColor(order.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString()
                      : "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}
