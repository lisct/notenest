# NoteNest

*A cozy place for all your notes.*

---

## 🚀 Project Overview

**NoteNest** is a simple yet effective note-taking application that allows users to create, edit, and delete notes. The app uses **local storage** for authentication and data persistence. The backend is **mocked**, making it easy to run and test.

---

## 📋 Features

- 🔒 **User authentication** using local storage.
- 📝 **Create, edit, and delete notes** easily.
- ⚛️ **State management** using React hooks.
- 🎨 **Styled with Chakra UI** for a clean and modern UI.
- ✅ **Fully tested** with React Testing Library and Jest.

---

## 🛠️ Technologies Used

- ⚛️ **React + Vite** – Faster development and better performance.
- 🏗️ **TypeScript** – Ensures type safety and better maintainability.
- 🎨 **UI Library:**
  - Chakra UI
  - Phosphoricons
- 🚏 **React Router** – Handles navigation.
- 📜 **React Hook Forms + Validations** – Manages forms and validation.
- 🛠️ **ESLint & Prettier** – Enforces code consistency and style.
- ✅ **Jest** – For unit and integration testing.
- 🔄 **CI/CD** – Automates testing and deployment.

---

## 🛠️ Setup & Installation

### 1️⃣ Prerequisites

Make sure you have the following installed:

- **Node.js** (>= 16.x)
- **Yarn** (recommended) or npm
- **Git**

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/lisct/notenest.git
cd notenest
```

### 3️⃣ Install Dependencies

Using **Yarn**:

```sh
yarn install
```

Or using **npm**:

```sh
npm install
```

### 4️⃣ Start the Development Server

```sh
yarn dev
```

This will start the app on `http://localhost:5173/`.

---

## 🧪 Running Tests

To run the test suite:

```sh
yarn test
```

For interactive watch mode:

```sh
yarn test --watch
```

---

## 📝 Notes on Authentication

- 🔒 The app **mocks authentication** using local storage.
- 🔄 Login data is stored and retrieved via `getLoginData()` from `lib/loginStorage.ts`.
- 🚫 If a user is not logged in, the **Details Page** will show a `"No Permission"` message.

---

## ➕ Add-ons / Extras or TODOs

- 🔍 **Search functionality** for notes.
- 📅 **Sort by date** to arrange notes chronologically.
- 🔗 **Notes should be links** that navigate to their respective detail pages.
- ⚠️ **Add a "Page Not Found" (404) page** for non-existent routes.
- ⛔ **Create an error-handling page** for unexpected errors.
- 🔒 **Restrict authentication routes** in the routing configuration to prevent unauthorized access.
- 👀 **Hide "Details" from the header** if a user is not logged in.
- ⚙️ **Build a backend API** to replace the mocked backend.

---

## 🐟 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by **Lisbel**

