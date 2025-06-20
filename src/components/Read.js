import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Read() {
    const [books, setBooks] = useState([]);
    const [bookDetails, setBookDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const db = getDatabase(app);
        const booksRef = ref(db, "library/books");

        const unsubscribe = onValue(
            booksRef,
            (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const booksArray = Object.entries(data).map(([id, book]) => ({
                        id,
                        ...book,
                    }));
                    setBooks(booksArray);
                }
            },
            (error) => {
                console.error("Error fetching data:", error);
            }
        );

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const details = await Promise.all(
                books.map(async (book) => {
                    try {
                        const response = await fetch(
                            `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}`
                        );
                        const data = await response.json();
                        if (data.docs && data.docs.length > 0) {
                            const firstResult = data.docs[0];
                            return {
                                id: book.id,
                                title: firstResult.title,
                                author: firstResult.author_name?.[0] || "Author Unknown",
                                coverImage: firstResult.cover_i
                                    ? `https://covers.openlibrary.org/b/id/${firstResult.cover_i}-L.jpg`
                                    : null,
                            };
                        }
                        return {
                            id: book.id,
                            title: book.title,
                            author: "Author Unknown",
                            coverImage: null,
                        };
                    } catch (error) {
                        console.error("Error fetching book details:", error);
                        return {
                            id: book.id,
                            title: book.title,
                            author: "Author Unknown",
                            coverImage: null,
                        };
                    }
                })
            );
            setBookDetails(details);
        };

        if (books.length > 0) fetchBookDetails();
    }, [books]);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Books List</h1>
            {bookDetails.length > 0 ? (
                <div style={styles.grid}>
                    {bookDetails.map((book) => (
                        <div key={book.id} style={styles.card}>
                            {book.coverImage && (
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    style={styles.image}
                                />
                            )}
                            <div style={styles.cardContent}>
                                <h2 style={styles.bookTitle}>{book.title}</h2>
                                <p style={styles.author}>
                                    <strong>Author:</strong> {book.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={styles.loadingText}>Loading book details...</p>
            )}
            <button onClick={() => navigate("/")} style={styles.button}>
                Go to Home
            </button>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        minHeight: "100vh",
    },
    header: {
        fontSize: "2rem",
        color: "#333",
        marginBottom: "20px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "10px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        textAlign: "center",
        transition: "transform 0.2s",
    },
    cardContent: {
        padding: "15px",
    },
    bookTitle: {
        fontSize: "1.2rem",
        margin: "10px 0",
        color: "#333",
    },
    author: {
        fontSize: "1rem",
        color: "#555",
    },
    image: {
        width: "100%",
        height: "300px",
        objectFit: "cover",
    },
    loadingText: {
        fontSize: "1.2rem",
        color: "#666",
        marginTop: "20px",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Read;
