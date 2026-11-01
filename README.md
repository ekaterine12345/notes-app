# 📝 Note Taking Web App

A lightweight, responsive note-taking web application built with **HTML5**, **CSS3**, and **Vanilla TypeScript**, powered by **Vite**. Notes persist automatically in your browser's local storage so your content is always saved.

---

## ✨ Features

* ➕ **Add Notes:** Instantly create new notes with a single click.
* ✏️ **Edit Notes:** Direct content editing in the browser with seamless line-break support (`Enter` key).
* 🗑️ **Delete Notes:** Remove any note instantly by clicking the trash icon next to it.
* 💾 **Persistent Storage:** Automatically synchronizes and retains all notes using `localStorage`.
* 📱 **Responsive Design:** Adaptive layout tailored for desktop, tablet, and mobile displays.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla TypeScript
* **Build Tool & Dev Server:** [Vite](https://vitejs.dev/)

---

## 📁 Project Structure

```text
note-app/
├── public/
│   └── images/
│       └── delete.png      # Delete icon asset
├── index.html              # Main HTML document
├── src/
│   ├── main.ts             # TypeScript logic
│   └── style.css           # Global and responsive styles
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md
