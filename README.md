# 📚 CRUD Book Management System

A modern, React-based book management application with Firebase Realtime Database integration and Open Library API for book cover images.

## ✨ Features

- ✅ **Create** - Add new books with title and author
- 📖 **Read** - View all books with cover images from Open Library
- ✏️ **Update** - Edit existing book information
- 🗑️ **Delete** - Remove books from the collection
- 🔥 **Real-time Database** - Firebase Realtime Database for instant data sync
- 🎨 **Responsive Design** - Clean, modern UI that works on all devices
- 🖼️ **Book Covers** - Automatic cover image fetching from Open Library API

## 🚀 Live Demo

[View Live Demo](https://OfteaHeat1997.github.io/CRUD-Book-managements/)

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Firebase** - Realtime Database
- **Open Library API** - Book cover images and metadata
- **React Router** - Navigation and routing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Firebase account
- Git

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/OfteaHeat1997/CRUD-Book-managements.git
cd CRUD-Book-managements
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Firebase

a. Go to [Firebase Console](https://console.firebase.google.com/)

b. Create a new project or select an existing one

c. Enable **Realtime Database**:
   - Navigate to Build → Realtime Database
   - Click "Create Database"
   - Start in test mode (for development)

d. Get your Firebase configuration:
   - Click the gear icon ⚙️ → Project settings
   - Scroll to "Your apps" → Web app
   - Copy your Firebase configuration

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

⚠️ **Important:** Do NOT use quotes around the values in the `.env` file!

### 5. Start the development server
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deploy to GitHub Pages

### 1. Update `package.json`
The homepage is already configured:
```json
"homepage": "https://OfteaHeat1997.github.io/CRUD-Book-managements"
```

### 2. Deploy
```bash
npm run deploy
```

Your app will be live at `https://OfteaHeat1997.github.io/CRUD-Book-managements`

## 📁 Project Structure

```
CRUD-Book-managements/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Read.js          # Display all books
│   │   ├── Write.js         # Add new books
│   │   ├── UpdateRead.js    # Select book to update
│   │   ├── UpdateWrite.js   # Update book form
│   │   ├── Navigation.js    # Navigation component
│   │   └── FirebaseSetup.js # Firebase setup guide
│   ├── firebaseConfig.js    # Firebase configuration
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── .env                    # Environment variables (not in repo)
├── package.json
└── README.md
```

## 🔥 Firebase Database Rules

For development, use these rules (⚠️ Not for production!):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## 🐛 Troubleshooting

### Images not loading on localhost

**Issue:** Book cover images show CORS errors on localhost

**Solution:** This is normal! Open Library API blocks localhost requests. Images will work when you deploy to production (GitHub Pages, Netlify, etc.)

**Workaround:** You'll see book icon placeholders (📚) on localhost, but real images when deployed.

### Firebase connection errors

**Solutions:**
- Verify your `.env` file has correct credentials (without quotes!)
- Check Firebase Realtime Database rules allow read/write
- Ensure you've enabled Realtime Database in Firebase Console
- Restart development server after changing `.env`

### Build fails

```bash
# Clear cache and rebuild
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

- GitHub: [@OfteaHeat1997](https://github.com/OfteaHeat1997)

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) - For book cover images and metadata
- [Firebase](https://firebase.google.com/) - For Realtime Database
- [React](https://reactjs.org/) - For the amazing framework

---

⭐ Star this repo if you found it helpful!

Made with ❤️ and React
