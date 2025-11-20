import React from "react";
import Navigation from "./Navigation";

function FirebaseSetup() {
    return (
        <div>
            <Navigation />
            <div className="page-container">
                <div className="text-center mb-4">
                    <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>
                        🔧
                    </div>
                    <h1>Firebase Setup Required</h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
                        Your application needs to be connected to Firebase to store and retrieve data.
                    </p>
                </div>

                <div className="form-container" style={{ maxWidth: "800px" }}>
                    <div style={{
                        padding: "1.5rem",
                        background: "var(--bg-tertiary)",
                        borderRadius: "var(--radius-md)",
                        marginBottom: "2rem",
                        borderLeft: "4px solid var(--accent-orange)",
                    }}>
                        <h3 style={{ marginTop: 0, color: "var(--accent-orange)" }}>⚠️ Configuration Missing</h3>
                        <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                            Firebase credentials are not configured. Please follow the steps below to set up your Firebase connection.
                        </p>
                    </div>

                    <h2 style={{ marginBottom: "1rem" }}>Setup Steps:</h2>

                    <div style={{ textAlign: "left" }}>
                        <div style={{
                            padding: "1.5rem",
                            background: "var(--bg-secondary)",
                            border: "2px solid var(--border-color)",
                            borderRadius: "var(--radius-md)",
                            marginBottom: "1rem",
                        }}>
                            <h3 style={{ marginTop: 0 }}>1. Create a Firebase Project</h3>
                            <p style={{ color: "var(--text-secondary)" }}>
                                Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-dark)" }}>Firebase Console</a> and create a new project or select an existing one.
                            </p>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            background: "var(--bg-secondary)",
                            border: "2px solid var(--border-color)",
                            borderRadius: "var(--radius-md)",
                            marginBottom: "1rem",
                        }}>
                            <h3 style={{ marginTop: 0 }}>2. Enable Realtime Database</h3>
                            <p style={{ color: "var(--text-secondary)" }}>
                                In your Firebase project, go to <strong>Build → Realtime Database</strong> and click <strong>Create Database</strong>. Start in test mode for development.
                            </p>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            background: "var(--bg-secondary)",
                            border: "2px solid var(--border-color)",
                            borderRadius: "var(--radius-md)",
                            marginBottom: "1rem",
                        }}>
                            <h3 style={{ marginTop: 0 }}>3. Get Your Firebase Configuration</h3>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                                In Firebase Console:
                            </p>
                            <ul style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                                <li>Click the gear icon ⚙️ next to "Project Overview"</li>
                                <li>Select "Project settings"</li>
                                <li>Scroll to "Your apps" and click the web icon &lt;/&gt;</li>
                                <li>Copy your Firebase configuration values</li>
                            </ul>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            background: "var(--bg-secondary)",
                            border: "2px solid var(--border-color)",
                            borderRadius: "var(--radius-md)",
                            marginBottom: "1rem",
                        }}>
                            <h3 style={{ marginTop: 0 }}>4. Update .env File</h3>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                                Open the <code style={{ background: "var(--bg-tertiary)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>.env</code> file in your project root and replace the placeholder values with your actual Firebase credentials:
                            </p>
                            <pre style={{
                                background: "var(--bg-tertiary)",
                                padding: "1rem",
                                borderRadius: "var(--radius-md)",
                                overflow: "auto",
                                fontSize: "0.875rem",
                                color: "var(--text-primary)",
                            }}>
{`REACT_APP_FIREBASE_API_KEY=your-actual-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123
REACT_APP_FIREBASE_MEASUREMENT_ID=G-ABC123`}
                            </pre>
                        </div>

                        <div style={{
                            padding: "1.5rem",
                            background: "var(--bg-secondary)",
                            border: "2px solid var(--border-color)",
                            borderRadius: "var(--radius-md)",
                        }}>
                            <h3 style={{ marginTop: 0 }}>5. Restart Development Server</h3>
                            <p style={{ color: "var(--text-secondary)", margin: 0 }}>
                                After updating the .env file, stop the development server (Ctrl+C) and run <code style={{ background: "var(--bg-tertiary)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>npm start</code> again.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <button
                            onClick={() => window.location.reload()}
                            className="btn btn-primary"
                        >
                            🔄 Refresh Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirebaseSetup;
