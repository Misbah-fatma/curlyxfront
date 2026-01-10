import { FaWhatsapp, FaRobot } from "react-icons/fa";

const FloatingActions = () => {
  const openZohoChat = () => {
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.floatwindow.visible("show");
    }
  };

  return (
    <div style={styles.container}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919169849066"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.button, backgroundColor: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Bot */}
      <button
        onClick={openZohoChat}
        style={{ ...styles.button, backgroundColor: "#2563eb" }}
        title="Chat with Bot"
      >

      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 1000,
  },
  button: {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    border: "none",
  },
};

export default FloatingActions;
