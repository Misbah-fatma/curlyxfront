import React, { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const res = await fetch("https://curlyxuuuu.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Login failed");
        return;
      }

      localStorage.setItem("token", result.token);
      setSuccess("Login successful! Redirecting...");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1200);
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5" style={{ minHeight: "70vh" }}>

          {/* Left side text */}
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)", lineHeight: 1.2 }}
            >
              Welcome Back <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>to Medcare Pharmacy</span>
            </h1>
            <p
              className="mb-4"
              style={{ color: "hsl(218, 81%, 85%)", opacity: 0.7, fontSize: "1.1rem" }}
            >
              Enter your credentials below to access your account and manage your orders.
            </p>
          </div>

          {/* Login form */}
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit}>

                  <div className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                    />
                
                  </div>

                  <div className="form-outline mb-4">
                     <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      required
                    />
                   
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Login
                  </button>

                  <div className="text-center">
                    <p>Or login with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
