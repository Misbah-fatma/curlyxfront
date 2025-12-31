import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function DashboardChart() {
  const [data, setData] = useState([
    { name: "Users", count: 0 },
    { name: "Products", count: 0 },
  ]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = localStorage.getItem("token");

        const resProducts = await fetch("https://curlyxuuuu.onrender.com/api/products/count", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const dataProducts = await resProducts.json();

        const resUsers = await fetch("https://curlyxuuuu.onrender.com/api/auth/count", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const dataUsers = await resUsers.json();

        setData([
          { name: "Users", count: dataUsers.count },
          { name: "Products", count: dataProducts.count },
        ]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCounts();
  }, []);

  // Gradient colors for bars
  const colors = ["#4facfe", "#00f2fe"];

  return (
    <Paper
      elevation={6}
      sx={{
        p: 3,
        mt: 4,
        borderRadius: 3,
        backgroundColor: "#f9fafd",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 600, color: "#1e293b" }}
      >
        Dashboard Overview
      </Typography>
      <Box sx={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 14, fill: "#334155", fontWeight: 500 }}
              axisLine={{ stroke: "#cbd5e1" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 14, fill: "#334155", fontWeight: 500 }}
              axisLine={{ stroke: "#cbd5e1" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontSize: "14px",
              }}
            />
            <Bar
              dataKey="count"
              barSize={50}
              radius={[10, 10, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#colorGradient${index})`}
                />
              ))}
            </Bar>
            {/* Define gradients */}
            <defs>
              {data.map((entry, index) => (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`colorGradient${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={colors[index % colors.length]} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={colors[index % colors.length]} stopOpacity={0.6} />
                </linearGradient>
              ))}
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
