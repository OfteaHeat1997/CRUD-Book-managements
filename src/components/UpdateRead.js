import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

function UpdateRead() {
    const navigate = useNavigate();
    const [bookArray, setBookArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "library/books");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const myData = snapshot.val();
            const temporaryArray = Object.keys(myData).map((myFireId) => {
                return {
                    ...myData[myFireId],
                    bookId: myFireId,
                };
            });
            setBookArray(temporaryArray);
        } else {
            alert("No books found.");
        }
    };

    const deleteBook = async (bookIdParam) => {
        const db = getDatabase(app);
        const dbRef = ref(db, "library/books/" + bookIdParam);
        await remove(dbRef);
        setBookArray((prev) => prev.filter((book) => book.bookId !== bookIdParam));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Update Books</h1>
            <button onClick={fetchData} style={styles.button}>
                Display Books
            </button>

            <div style={styles.grid}>
                {bookArray.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h2 style={styles.title}>{item.title}</h2>
                        <p style={styles.text}>
                            <strong>Author:</strong> {item.author}
                        </p>
                        <p style={styles.text}>
                            <strong>ID:</strong> {item.bookId}
                        </p>
                        <div style={styles.buttonGroup}>
                            <button
                                style={styles.updateButton}
                                onClick={() => navigate(`/updatewrite/${item.bookId}`)}
                            >
                                Update
                            </button>
                            <button
                                style={styles.deleteButton}
                                onClick={() => deleteBook(item.bookId)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.navigation}>
                <button
                    style={styles.navButton}
                    onClick={() => navigate("/")}
                >
                    Go Homepage
                </button>
                <button
                    style={styles.navButton}
                    onClick={() => navigate("/read")}
                >
                    Go Read Page
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        minHeight: "100vh",
        padding: "20px",
    },
    header: {
        fontSize: "2rem",
        color: "#333",
        marginBottom: "20px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "10px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "left",
        transition: "transform 0.2s",
    },
    title: {
        fontSize: "1.5rem",
        color: "#333",
        marginBottom: "10px",
    },
    text: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "5px",
    },
    buttonGroup: {
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-between",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px",
    },
    updateButton: {
        padding: "10px 15px",
        fontSize: "14px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    deleteButton: {
        padding: "10px 15px",
        fontSize: "14px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    navigation: {
        marginTop: "20px",
    },
    navButton: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px",
    },
};

export default UpdateRead;
