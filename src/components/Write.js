import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Write() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state for feedback

    const saveData = async () => {
        if (!title || !author) {
            alert("Please fill out both fields.");
            return;
        }

        setIsLoading(true);
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "library/books"));
        set(newDocRef, {
            title: title,
            author: author,
        })
            .then(() => {
                alert("Data saved successfully");
                setTitle("");
                setAuthor("");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Books Management Application</h1>

            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Book Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={styles.input}
                />
                <button
                    onClick={saveData}
                    style={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? "Saving..." : "Save Data"}
                </button>
            </div>

            <div style={styles.navigation}>
                <button
                    onClick={() => navigate("/updateread")}
                    style={styles.navButton}
                >
                    Go to Update Read
                </button>
                <button
                    onClick={() => navigate("/read")}
                    style={styles.navButton}
                >
                    Go to Read Page
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333",
    },
    form: {
        marginBottom: "20px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        boxSizing: "border-box",
    },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
        opacity: "1",
        transition: "opacity 0.2s",
    },
    buttonDisabled: {
        opacity: "0.7",
    },
    navigation: {
        marginTop: "20px",
    },
    navButton: {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        margin: "5px",
    },
};

export default Write;
