import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Profile = () => {
  const token = localStorage.getItem("token");

  const [activeTab, setActiveTab] = useState("profile");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addresses: [],
  });

const [newAddress, setNewAddress] = useState({
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
});


  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASEURL}/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok) {
          setFormData({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            addresses: data.addresses || [],
          });
        }
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, [token]);

  /* ================= INPUT HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

const addAddress = async () => {
  if (!newAddress.addressLine1) return;

  const updatedAddresses = [...formData.addresses, newAddress];

  // Update UI immediately
  setFormData((prev) => ({
    ...prev,
    addresses: updatedAddresses,
  }));

  try {
    await fetch(`${process.env.REACT_APP_BASEURL}/auth/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...formData,
        addresses: updatedAddresses,
      }),
    });

    // reset form after successful save
  setNewAddress({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  } catch (err) {
    console.error("Failed to save address", err);
  }
};

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();
      setFormData(data); // includes addresses
    } catch (err) {
      console.error("Failed to fetch profile", err);
    }
  };

  fetchProfile();
}, []);



  /* ================= SAVE PROFILE (SINGLE API) ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Profile update failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
<section className="blog_area single-post-area area-padding bg-light">
  <div className="container bg-light mt-4">

    {/* HEADER */}
    <div className="row">
      <div className="col-sm-10">
        <h1>{formData.name || "User Profile"}</h1>
      </div>
      <div className="col-sm-2">
        <img
          className="img-circle img-responsive"
          src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="avatar"
          width="100"
        />
      </div>
    </div>

    {/* SUCCESS ALERT */}
    {success && (
      <div className="alert alert-success mt-3">
        Profile updated successfully 🎉
      </div>
    )}

    <div className="row mt-3">

      {/* LEFT PANEL */}
      <div className="col-sm-3">
        <div className="text-center">
          <img
            src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
            className="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6 className="mt-2">Upload a different photo...</h6>
          <input type="file" className="form-control" />
        </div>
        <hr />
      </div>

      {/* RIGHT PANEL */}
      <div className="col-sm-9">

        {/* TABS */}
      <ul className="nav nav-tabs profile-tabs">
  <li className={activeTab === "profile" ? "active" : ""}>
    <a href="#" onClick={() => setActiveTab("profile")}>
      👤 User Details
    </a>
  </li>
  <li className={activeTab === "address" ? "active" : ""}>
    <a href="#" onClick={() => setActiveTab("address")}>
      📍 Addresses
    </a>
  </li>
</ul>


        <div className="tab-content">

          {/* ================= USER DETAILS TAB ================= */}
          {activeTab === "profile" && (
            <div className="tab-pane active">
              <hr />
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-xs-6">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-xs-6">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-xs-6 mt-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="col-xs-12 mt-4">
                  <button className="btn btn-success btn-lg">
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          )}
{activeTab === "address" && (
  <div className="tab-pane active">
    <hr />

    {/* SAVED ADDRESSES */}
{formData.addresses.length > 0 && (
  <div className="mb-4">
    <h4 className="mb-3">Saved Addresses</h4>

    <div className="row">
      {formData.addresses.map((addr, index) => (
        <div key={index} className="col-md-6 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="mb-1 fw-semibold">
                {addr.addressLine1}
                {addr.addressLine2 && `, ${addr.addressLine2}`}
              </p>

              <p className="mb-1 text-muted">
                {addr.city}, {addr.state}
              </p>

              <p className="mb-0 text-muted">
                {addr.country} – {addr.zipCode}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


    {/* ADD NEW ADDRESS FORM */}
    <form className="form">
      <h4 className="mb-3">Add New Address</h4>

      <div className="row">
        <div className="col-xs-12 mt-3">
          <label>Address Line 1</label>
          <input
            className="form-control"
            name="addressLine1"
            value={newAddress.addressLine1}
            onChange={handleNewAddressChange}
          />
        </div>

        <div className="col-xs-12 mt-3">
          <label>Address Line 2</label>
          <input
            className="form-control"
            name="addressLine2"
            value={newAddress.addressLine2}
            onChange={handleNewAddressChange}
          />
        </div>

        <div className="col-xs-6 mt-3">
          <label>City</label>
          <input
            className="form-control"
            name="city"
            value={newAddress.city}
            onChange={handleNewAddressChange}
          />
        </div>

        <div className="col-xs-6 mt-3">
          <label>State</label>
          <input
            className="form-control"
            name="state"
            value={newAddress.state}
            onChange={handleNewAddressChange}
          />
        </div>

        <div className="col-xs-6 mt-3">
          <label>Country</label>
          <input
            className="form-control"
            name="country"
            value={newAddress.country}
            onChange={handleNewAddressChange}
          />
        </div>

        <div className="col-xs-6 mt-3">
          <label>ZIP / Postal Code</label>
          <input
            className="form-control"
            name="zipCode"
            value={newAddress.zipCode}
            onChange={handleNewAddressChange}
            type="number"
          />
        </div>
      </div>

      <div className="col-xs-12 mt-4">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={addAddress}
        >
          + Add Address
        </button>
      </div>
    </form>
  </div>
)}



        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default Profile;
