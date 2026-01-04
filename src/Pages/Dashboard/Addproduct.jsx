import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Alert,
  MenuItem,
  Divider,
} from "@mui/material";

export default function AddProduct() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [medicineType, setMedicineType] = useState("");
  const [sections, setSections] = useState([]);

  // ================= FILE =================
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  // ================= SECTIONS =================
const addSection = (type) => {
  if (type === "table") {
    setSections([
      ...sections,
      {
        type: "table",
        content: {
          weight: "",
          dimensions: "",
          quantityOfPills: ""
        }
      }
    ]);
  } else {
    setSections([...sections, { type, content: "" }]);
  }
};


  const updateSection = (index, value) => {
    const updated = [...sections];
    updated[index].content = value;
    setSections(updated);
  };

  const removeSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const data = new FormData(e.currentTarget);

    if (!medicineType) {
      setError("Please select medicine type");
      return;
    }

    if (!data.get("image")) {
      setError("Please upload an image");
      return;
    }

    data.append("medicineType", medicineType);
    data.append("sections", JSON.stringify(sections));

    try {
      const res = await fetch("http://localhost:5009/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Failed to add product");
        return;
      }

      setSuccess("Product added successfully!");
      e.target.reset();
      setFileName("No file chosen");
      setMedicineType("");
      setSections([]);
    } catch {
      setError("Server error. Try again later.");
    }
  };

  // ================= UI =================
  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Add New Product
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Box component="form" onSubmit={handleSubmit}>
        {/* ================= MEDICINE TYPE ================= */}
        <Grid container spacing={2} mb={2}>
          <Grid size={12}>
            <TextField
              select
              fullWidth
              label="Medicine Type"
              value={medicineType}
              onChange={(e) => setMedicineType(e.target.value)}
              required
            >
              <MenuItem value="Anxiety Care">Anxiety Care</MenuItem>
              <MenuItem value="Depression Care">Depression Care</MenuItem>
              <MenuItem value="Pain Relief">Pain Relief</MenuItem>
              <MenuItem value="Sleep & Insomnia">Sleep & Insomnia</MenuItem>
              <MenuItem value="General Wellness">General Wellness</MenuItem>
              <MenuItem value="Prescription">Prescription</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* ================= BASIC DETAILS ================= */}
        {medicineType && (
          <>
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField fullWidth label="Product Name" name="name" required />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Category" name="category" required />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Quantity" name="quantity" type="number" required />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Price" name="price" type="number" required />
              </Grid>
            </Grid>

            {/* ================= IMAGE ================= */}
            <Grid container spacing={2} mt={1}>
                <Grid size={6}>
                <TextField fullWidth label="Description" name="description" required />
              </Grid>
              <Grid size={6} sx={{ display: "flex", gap: 2 }}>
                <label
                  htmlFor="file-upload"
                  style={{
                    padding: "12px 16px",
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Upload Image
                </label>
                <span>{fileName}</span>
                <input
                  id="file-upload"
                  type="file"
                  name="image"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Grid>
            </Grid>

            {/* ================= SECTIONS ================= */}
            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" mb={1}>
              Product Details
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
              <Button onClick={() => addSection("description")} variant="outlined">
                + Description
              </Button>
              <Button onClick={() => addSection("additional_info")} variant="outlined">
                + Additional Info
              </Button>
              <Button onClick={() => addSection("table")} variant="outlined">
                + Table Data
              </Button>
              <Button onClick={() => addSection("review")} variant="outlined">
                + Review
              </Button>
            </Box>

            {sections.map((section, index) => (
              <Box key={index} sx={{ mb: 2 }}>
              {section.type !== "table" ? (
  <TextField
    fullWidth
    multiline
    rows={3}
    label={section.type.replace("_", " ").toUpperCase()}
    value={section.content}
    onChange={(e) => updateSection(index, e.target.value)}
  />
) : (
  <Grid container spacing={2}>
    <Grid size={4} md={4}>
      <TextField
        fullWidth
        label="Weight"
        value={section.content.weight}
        onChange={(e) =>
          updateSection(index, {
            ...section.content,
            weight: e.target.value,
          })
        }
      />
    </Grid>

    <Grid size={4} md={4}>
      <TextField
        fullWidth
        label="Dimensions"
        value={section.content.dimensions}
        onChange={(e) =>
          updateSection(index, {
            ...section.content,
            dimensions: e.target.value,
          })
        }
      />
    </Grid>

    <Grid size={4} md={4}>
      <TextField
        fullWidth
        label="Quantity of Pills"
        type="number"
        value={section.content.quantityOfPills}
        onChange={(e) =>
          updateSection(index, {
            ...section.content,
            quantityOfPills: e.target.value,
          })
        }
      />
    </Grid>
  </Grid>
)}

                <Button
                  size="small"
                  color="error"
                  onClick={() => removeSection(index)}
                >
                  Remove
                </Button>
              </Box>
            ))}

            {/* ================= SUBMIT ================= */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, py: 1.5, fontWeight: "bold" }}
            >
              Add Product
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
