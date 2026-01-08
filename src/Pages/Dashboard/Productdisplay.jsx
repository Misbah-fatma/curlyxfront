import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const columns = [
  { id: "image", label: "Image", minWidth: 100 },
  { id: "name", label: "Product Name", minWidth: 150 },
  { id: "category", label: "Category", minWidth: 120 },
  { id: "price", label: "Price", minWidth: 80, align: "right" },
  { id: "quantity", label: "Qty", minWidth: 80, align: "right" },
  { id: "description", label: "Description", minWidth: 200 },
  { id: "actions", label: "Actions", minWidth: 120 },
];

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
const [openDelete, setOpenDelete] = useState(false);
const [deleteId, setDeleteId] = useState(null);

const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMsg, setSnackbarMsg] = useState("");
const [snackbarSeverity, setSnackbarSeverity] = useState("success");



  /* ================= FETCH PRODUCTS ================= */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASEURL}/products`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(products)

  /* ================= PAGINATION ================= */
  const handleChangePage = (e, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  /* ================= EDIT ================= */
  const handleEditOpen = (product) => {
    setSelectedProduct(product);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
    setSelectedProduct(null);
  };

  const handleDeleteClick = (id) => {
  setDeleteId(id);
  setOpenDelete(true);
};


const handleUpdateProduct = async () => {
  const res = await fetch(
    `${process.env.REACT_APP_BASEURL}/products/update/${selectedProduct._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(selectedProduct),
    }
  );

  if (res.ok) {
    const updated = await res.json();

    setProducts((prev) =>
      prev.map((p) => (p._id === updated._id ? updated : p))
    );

    handleEditClose();
    setSnackbarMsg("Product updated successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  } else {
    setSnackbarMsg("Failed to update product");
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
  }
};


  /* ================= DELETE ================= */
const confirmDelete = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASEURL}/products/delete/${deleteId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p._id !== deleteId));

      setSnackbarMsg("Product deleted successfully");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } else {
      setSnackbarMsg("Failed to delete product");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  } catch (err) {
    setSnackbarMsg("Something went wrong");
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
  } finally {
    setOpenDelete(false);
    setDeleteId(null);
  }
};


  return (
    <Paper sx={{ width: "100%", p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Product Management
      </Typography>

      {/* ================= TABLE ================= */}
      <TableContainer sx={{ maxHeight: 520 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ fontWeight: 600 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow hover key={product._id}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === "image" ? (
                        product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{
                              width: 60,
                              height: 60,
                              objectFit: "cover",
                              borderRadius: 6,
                            }}
                          />
                        ) : (
                          "—"
                        )
                      ) : column.id === "actions" ? (
                        <Stack direction="row" spacing={1}>
                          <IconButton
                            color="primary"
                            onClick={() => handleEditOpen(product)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDeleteClick(product._id)}>
  <DeleteIcon />
</IconButton>

                        </Stack>
                      ) : (
                        product[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
<Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
  <DialogTitle>Delete Product</DialogTitle>

  <DialogContent>
    Are you sure you want to delete this product?
    This action cannot be undone.
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
    <Button color="error" variant="contained" onClick={confirmDelete}>
      Delete
    </Button>
  </DialogActions>
</Dialog>

      {/* ================= EDIT DIALOG ================= */}
      <Dialog open={openEdit} onClose={handleEditClose} fullWidth>
        <DialogTitle>Edit Product</DialogTitle>

        <DialogContent sx={{ display: "grid", gap: 2, mt: 1 }}>
          <TextField
            label="Product Name"
            value={selectedProduct?.name || ""}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, name: e.target.value })
            }
          />
          <TextField
            label="Category"
            value={selectedProduct?.category || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                category: e.target.value,
              })
            }
          />
          <TextField
            label="Price"
            type="number"
            value={selectedProduct?.price || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                price: e.target.value,
              })
            }
          />
          <TextField
            label="Quantity"
            type="number"
            value={selectedProduct?.quantity || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                quantity: e.target.value,
              })
            }
          />
          <TextField
            label="Description"
            multiline
            rows={3}
            value={selectedProduct?.description || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                description: e.target.value,
              })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateProduct}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
>
  <Alert
    onClose={() => setSnackbarOpen(false)}
    severity={snackbarSeverity}
    variant="filled"
    sx={{ width: "100%" }}
  >
    {snackbarMsg}
  </Alert>
</Snackbar>

    </Paper>
  );
}
