# 🚀 Daily Quotes — Full-Stack CI/CD App

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

### 🌍 Live Demo

### 🌍 Live Demo
🔗 **https://quotes-demo-latest.onrender.com**

---

## 🧠 Overview

Daily Quotes is a **full-stack web app** that serves motivational quotes through a sleek React frontend and a Node.js/Express backend.  
The project is fully **containerized using Docker** and deployed through an automated **CI/CD pipeline** with **GitHub Actions**, **Docker Hub**, and **Render**.

---

## 🧩 Features

- 🖥️ **React Frontend** — Fetches and displays random quotes  
- ⚙️ **Express Backend** — API serving quotes from a JSON file  
- 🔁 **CI/CD Automation** — Push to GitHub = auto build + deploy  
- 🐳 **Dockerized Infrastructure** — Same environment everywhere  
- 🌐 **Live Hosting** — Deployed on Render via Docker Hub

---

## 🏗️ Project Structure

```bash
📦 DailyQuotes
├── .github/
│   └── workflows/
│       └── docker.yml         # GitHub Actions workflow (CI)
│
├── backend/
│   ├── Dockerfile             # Multi-stage backend + frontend build
│   ├── server.js              # Express server
│   ├── quotes.json            # Quote data
│   ├── package.json
│   └── package-lock.json
│
├── src/
│   ├── App.js                 # Main React component
│   ├── App.css
│   ├── index.js
│   └── components/
│       └── QuoteCard.js       # Handles API calls + displays quotes
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── docker-compose.yml         # Local dev setup
├── Dockerfile                 # (optional root build)


├── package.json               # React dependencies
└── README.md

```
## How It Works
1️⃣ User opens the web app
2️⃣ React renders the interface
3️⃣ Clicking "Get Today's Quote" triggers /api/quote
4️⃣ Express returns a random quote from quotes.json
5️⃣ App displays quote + author dynamically

## Run Locally

# Clone repository
git clone https://github.com/AdeelH12/DailyQuotes.git
cd DailyQuotes

# Build and start the containers
docker compose up --build

# Open in browser
http://localhost:5000

## CI/CD Pipeline

# Continuous Integration (CI)
- Triggered on every push to main branch
- GitHub Actions builds Docker image
- Pushes image to Docker Hub

# Continuous Deployment (CD)
- Render monitors Docker Hub for updates
- Automatically redeploys latest image
- Live site updates instantly
