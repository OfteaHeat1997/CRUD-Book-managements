import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-brand">
                    📚 BookShelf
                </div>
                <div className="navbar-links">
                    <button
                        className={`nav-link ${isActive("/") ? "active" : ""}`}
                        onClick={() => navigate("/")}
                    >
                        ➕ Add Book
                    </button>
                    <button
                        className={`nav-link ${isActive("/read") ? "active" : ""}`}
                        onClick={() => navigate("/read")}
                    >
                        📖 View Books
                    </button>
                    <button
                        className={`nav-link ${isActive("/updateread") ? "active" : ""}`}
                        onClick={() => navigate("/updateread")}
                    >
                        ✏️ Manage Books
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
