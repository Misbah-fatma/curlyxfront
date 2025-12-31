import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AddProduct from "./Dashboard/Addproduct";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddProductIcon from "@mui/icons-material/AddBox";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme } from "@mui/material/styles";
import ViewProductIcon from "@mui/icons-material/Inventory2";

import {
  AppProvider,
  DashboardLayout,
  ThemeSwitcher,
} from "@toolpad/core";

import {
  Account,
  AccountPreview,
  AccountPopoverFooter,
  SignOutButton,
} from "@toolpad/core/Account";
import Productdisplay from "./Dashboard/Productdisplay";
import DashboardChart from "./Dashboard/ChartPage";
import UsersTable from "./Dashboard/User";

/* ---------------- NAVIGATION ---------------- */

const NAVIGATION = [
  { kind: "header", title: "Main" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "products/add", title: "Add Product", icon: <AddProductIcon /> },
  { segment: "products/view", title: "View Products", icon: <ViewProductIcon /> },
    { segment: "users/view", title: "View Users", icon: <PersonIcon /> },
    
];

/* ---------------- THEME ---------------- */

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true, dark: true },
});

/* ---------------- TOOLBAR ---------------- */

function ToolbarActions() {
  return (
    <Stack direction="row" alignItems="center">
      <ThemeSwitcher />
    </Stack>
  );
}

/* ---------------- DASHBOARD CARDS ---------------- */

function DashboardCards() {
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [totalUsers, setTotalUsers] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total products
        const resProducts = await fetch("https://curlyxuuuu.onrender.com/api/products/count", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const dataProducts = await resProducts.json();
        if (resProducts.ok) setTotalProducts(dataProducts.count);

        // Fetch total users
        const resUsers = await fetch("https://curlyxuuuu.onrender.com/api/auth/count", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const dataUsers = await resUsers.json();
        if (resUsers.ok) setTotalUsers(dataUsers.count);
      } catch (err) {
        console.error("Failed to fetch counts:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3} mb={4}>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}
        >
          <ShoppingCartIcon fontSize="large" color="primary" />
          <Box>
            <Typography variant="h6">Total Products</Typography>
            <Typography variant="h4" fontWeight="bold">
              {totalProducts}
            </Typography>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}
        >
          <PersonIcon fontSize="large" color="secondary" />
          <Box>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4" fontWeight="bold">
              {totalUsers}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

/* ---------------- PAGE CONTENT ---------------- */

function PageContent({ pathname }) {
  return (
    <Box sx={{ p: 4 }}>
      {pathname === "/dashboard"}
      {pathname === "/products/add" && <AddProduct />}
      {pathname === "/products/view" && <Productdisplay />}
       {pathname === "/dashboard" && (
        <>
          <DashboardCards />
          <DashboardChart />
        </>
      )}
         {pathname === "/users/view" && <UsersTable />} 
    </Box>
  );
}

PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

/* ---------------- ACCOUNT SIDEBAR ---------------- */

function SidebarAccount({ user }) {
  return (
    <Account
      slots={{
        preview: (props) => (
          <>
            <Divider />
            <AccountPreview {...props} variant="expanded" />
          </>
        ),
      }}
      slotProps={{
        popover: {
          disableAutoFocus: true,
        },
      }}
    >
      <AccountPopoverFooter>
        <SignOutButton
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        />
      </AccountPopoverFooter>
    </Account>
  );
}

/* ---------------- MAIN DASHBOARD ---------------- */

export default function Dashboard() {
  const [pathname, setPathname] = React.useState("/dashboard");

  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const user = JSON.parse(atob(token.split(".")[1]));

  const router = {
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(path),
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      session={{
        user: {
          name: user.name || "User",
          email: user.email || "",
          image: "",
        },
      }}
    >
      <DashboardLayout
        slots={{
          toolbarActions: ToolbarActions,
          sidebarFooter: SidebarAccount,
        }}
      >
        <PageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
