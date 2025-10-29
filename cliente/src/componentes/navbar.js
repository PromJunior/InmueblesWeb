import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 🎨 Estilos directamente dentro del componente
    const styles = {
        navbarContainer: {
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1000,
        },
        toggleButton: {
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "10px 15px",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.3s",
        },
        sidebar: {
            position: "fixed",
            top: 0,
            left: isOpen ? 0 : "-260px",
            width: "260px",
            height: "100%",
            background: "linear-gradient(180deg, #0d6efd 0%, #007bff 100%)",
            color: "white",
            transition: "0.4s ease",
            padding: "60px 20px",
            boxShadow: isOpen ? "2px 0 10px rgba(0,0,0,0.3)" : "none",
        },
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            zIndex: 500,
        },
        link: {
            display: "block",
            color: "white",
            textDecoration: "none",
            fontSize: "1.2rem",
            margin: "15px 0",
            transition: "0.3s",
        },
        linkHover: {
            color: "#ffc107",
            transform: "translateX(8px)",
        },
        closeBtn: {
            position: "absolute",
            top: "15px",
            right: "20px",
            fontSize: "30px",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
        },
    };

    return (
        <>
            {/* Botón de menú */}
            <div style={styles.navbarContainer}>
                <button
                    onClick={() => setIsOpen(true)}
                    style={styles.toggleButton}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#0b5ed7")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
                >
                    ☰ Menú
                </button>
            </div>

            {/* Fondo oscuro cuando se abre el menú */}
            <div style={styles.overlay} onClick={() => setIsOpen(false)}></div>

            {/* Menú deslizable */}
            <div style={styles.sidebar}>
                <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>
                    ×
                </button>
                <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>
                    🏠 InmobiliariaApp
                </h3>

                <Link
                    to="/"
                    style={styles.link}
                    onClick={() => setIsOpen(false)}
                    onMouseOver={(e) => {
                        e.target.style.color = styles.linkHover.color;
                        e.target.style.transform = styles.linkHover.transform;
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = styles.link.color;
                        e.target.style.transform = "translateX(0)";
                    }}
                >
                    Inicio de Sesión
                </Link>

                <Link
                    to="/inmobiliaria"
                    style={styles.link}
                    onClick={() => setIsOpen(false)}
                    onMouseOver={(e) => {
                        e.target.style.color = styles.linkHover.color;
                        e.target.style.transform = styles.linkHover.transform;
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = styles.link.color;
                        e.target.style.transform = "translateX(0)";
                    }}
                >
                    Inmobiliaria
                </Link>
            </div>
        </>
    );
};

export default Navbar;
