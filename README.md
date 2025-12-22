# 🎬 Netflix-Clone — React + Firebase + TMDB API

Netflix-Clone is a modern, responsive web application that replicates the core UI and movie browsing experience of Netflix. Built as a demonstration project, it features user authentication, dynamic movie lists powered by The Movie Database (TMDB) API, and a sleek, engaging interface. Perfect for showcasing modern React and Firebase integration.

## 🚀 Live Demo

- [Live App](https://netflix-clone-1j0p.onrender.com/)

---

## 🖼️ Screenshots

<!-- Add your own screenshots here following this format -->
<!-- Example:
![Home page](https://github.com/your-username/assets/your-image-id)
![Movie details](https://github.com/your-username/assets/your-image-id)
-->
<img width="1919" height="972" alt="image" src="https://github.com/user-attachments/assets/1ad1ee2f-fb67-4ced-bfa5-4c4f362ec72f" />
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/0a0d09e2-c238-45d6-8c63-b783df27a4b9" />
<img width="1919" height="972" alt="image" src="https://github.com/user-attachments/assets/1079ec31-9662-4b4f-94fe-a09c7931fcb4" />
<img width="1919" height="962" alt="image" src="https://github.com/user-attachments/assets/4a8d81ff-ad9f-4fdf-9661-0d8593b8aa74" />
<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/8f2a2c4b-8387-4be2-bfae-ffec7a0a48da" />


---

## 🛠️ Tech Stack

| Layer         | Technology                                 |
| ------------- | ------------------------------------------ |
| Frontend      | React.js, React Router, Vite, CSS          |
| State/Auth    | Firebase, React Firebase Hooks             |
| API           | TMDB (The Movie DB) API                    |
| Notifications | react-hot-toast                            |
| Deployment    | Render.com                                 |

---

## ✨ Features

- Browse trending and popular movies/shows (powered by TMDB API)
- User authentication and account management (Firebase)
- Responsive UI inspired by Netflix
- Toast notifications for user feedback
- Fast performance with Vite bundler

---

## 🗂️ Folder Structure

```
Netflix-Clone/
├── public/
├── src/
│ ├── assets/ # Images and icons
│ ├── components/ # Navbar, Footer, TitleCards
│ ├── pages/ # Home, Login, Player
│ ├── firebase.js # Firebase config
│ ├── App.js # Main app + routes
│ └── main.jsx # React entry point
└── .env # Private keys (not pushed)
```
---

## ⚙️ Setup & Installation

**1. Clone the repository**
```bash
git clone https://github.com/SubhamSaha0/Netflix-Clone.git
cd Netflix-Clone
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure Firebase**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Add your Firebase config to `/src/firebase/config.js` (create if not exists):
  ```js
  export const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  ```

**4. Get a TMDB API Key**
- Register at [TMDB](https://www.themoviedb.org/) to get your API key.
- Add it to your environment variables or in the config file as needed:
  ```js
  export const TMDB_API_KEY = "YOUR_TMDB_API_KEY";
  ```

**5. Start the development server**
```bash
npm run dev
```

---

## 🧪 Main Packages/API

- **react**: UI library for building user interfaces
- **firebase**: Backend as a Service (Auth, Firestore, etc.)
- **react-router-dom**: Client-side routing
- **react-hot-toast**: Toast notifications
- **vite**: Fast development server and build tool
- **TMDB API**: Source for movies and TV shows data

---

## 📝 Contributing

Contributions welcome! Please fork the repo, create a branch, and submit a pull request.

---

## 📄 License

MIT © Subham Saha

---

## 👤 Contact

[LinkedIn](https://www.linkedin.com/in/subham-saha-277342202/) • [Email](mailto:subhamsaha2511@gmail.com)

---
