# Node.js Demo App 🚀

## 📌 What is this project?
This is a simple Node.js Express app that prints "Hello from Yunus Sharif" on the homepage.

## ⚙️ CI/CD Configuration
CI/CD is configured using **GitHub Actions**. On every push to the `main` branch:
- Dependencies are installed
- Docker image is built and pushed to DockerHub

DockerHub credentials are stored as GitHub Secrets:
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

## 💻 Technologies Used
- Node.js
- Express.js
- Docker
- GitHub Actions

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone <repo-url>
cd nodejs-demo-app

# Install dependencies
npm install

# Run the app
npm start

# Open in browser
http://localhost:5000
