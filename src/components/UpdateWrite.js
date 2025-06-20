import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, get } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function UpdateWrite() {
    const navigate = useNavigate();
    const { firebaseId } = useParams();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "library/books/" + firebaseId);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const targetObject = snapshot.val();
                setTitle(targetObject.title);
                setAuthor(targetObject.author);
            } else {
                alert("Error fetching data");
            }
        };
        fetchData();
    }, [firebaseId]);

    const overwriteData = async () => {
        const db = getDatabase(app);
        const newDocRef = ref(db, "library/books/" + firebaseId);
        set(newDocRef, {
            title: title,
            author: author,
        })
            .then(() => {
                alert("Data updated successfully");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Update Book</h1>

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

                <button onClick={overwriteData} style={styles.updateButton}>
                    Update
                </button>
            </div>

            <div style={styles.navigation}>
                <button
                    style={styles.navButton}
                    onClick={() => navigate("/updateread")}
                >
                    Go to Update Read
                </button>
                <button
                    style={styles.navButton}
                    onClick={() => navigate("/read")}
                >
                    Go to Read Page
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
    form: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
    updateButton: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
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

export default UpdateWrite;
