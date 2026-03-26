# Namaste Mart – MERN Scaffold

## Prereqs
- Node 18+
- MongoDB connection string
MONGO_URI=mongodb://127.0.0.1:27017/namasteMart


## Setup
```bash
notepad "C:\Users\a\Documents\Ignou project\server\.env"
cd "C:\Users\a\Documents\Ignou project\client"

MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster0.xxxxx.mongodb.net/namasteMart?retryWrites=true&w=majority
npm install
npm run dev

# server
cd server
cp .env.sample .env
# edit .env with MONGO_URI and JWT_SECRET
npm i
npm run dev

# client (in new terminal)
cd ../client
npm i
# optional: set API URL (default points to http://localhost:5000/api)
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
```
Open http://localhost:5173

### Admin user
Register first, then manually change `role` to `admin` in DB for your user (or add a dedicated route).
"dev-all": "concurrently \"npm run server\" \"npm run client\""
[nodemon] starting `node server.js`
🚀 Server running on port 5000
MongoDB connected successfully
VITE v7.x.x ready in ...
