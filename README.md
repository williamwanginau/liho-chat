# LIHO Chat 💬

A modern chat application with clean and intuitive interface design, built with a separated frontend and backend architecture.

## 🏗️ Project Architecture

```
LIHO-CHAT/                    # Main project directory
├── frontend/                 # Frontend React application
│   ├── src/                 # Frontend source code
│   │   ├── components/      # React components
│   │   ├── services/        # API service layer
│   │   └── hooks/           # Custom hooks
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependency management
│   └── vite.config.js       # Vite configuration
├── backend/                  # Backend Express.js API
│   ├── routes/              # API routes
│   ├── data/                # JSON data files
│   ├── middleware/          # Middleware
│   ├── package.json         # Backend dependency management
│   └── server.js            # Express main server
├── README.md                # Project documentation
└── .gitignore              # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### 🎯 One-Click Start (Recommended)

```bash
# Install all dependencies
npm run install:all

# Start both frontend and backend services
npm run dev
```

🟢 This will start both:
- Frontend application: http://localhost:5173 (or next available port)
- Backend API: http://localhost:3001

### 🔧 Running Services Separately

If you prefer to control frontend and backend services separately:

#### 1️⃣ Start Backend Server

```bash
npm run dev:backend
```

#### 2️⃣ Start Frontend Application

```bash
npm run dev:frontend
```

### 📋 Available Commands

- `npm run dev` - Start both frontend and backend
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only
- `npm run install:all` - Install all dependencies
- `npm run build` - Build frontend for production
- `npm run start` - Start production services

### 3️⃣ Test Connection

- 🌐 Frontend application: http://localhost:5173
- ⚡ Backend API: http://localhost:3001/api/health

## ✨ Features

### ✅ Implemented
- 🎨 Modern and elegant UI/UX design
- 👥 Friends list management and search
- 👨‍👩‍👧‍👦 Group chat functionality
- 💬 Real-time chat interface
- 📱 Fully responsive design
- 🔍 Smart search functionality
- 🤖 AI auto-reply (simulated)
- 🌙 Dark theme interface

### 🚧 In Development
- 🗄️ Database integration (MongoDB/PostgreSQL)
- 🔐 JWT user authentication system
- 🔄 WebSocket real-time communication
- 📁 File upload and sharing
- 🔔 Real-time push notifications

## 🔌 API Documentation

### Health Check
- `GET /api/health` - Server status check

### Friends Management
- `GET /api/friends` - Get all friends list
- `GET /api/friends/:id` - Get specific friend information

### Group Management
- `GET /api/groups` - Get all groups list

### Messaging System
- `GET /api/messages` - Get chat history
- `POST /api/messages` - Send new message

### Chat Functionality
- `GET /api/chats` - Get all chats (friends + groups)

### Authentication System (Coming Soon)
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

## 🛠️ Technology Stack

### Frontend Technologies
- **React 19** - Modern UI framework
- **React Router DOM** - Client-side routing
- **CSS3** - Responsive styling
- **Material Icons** - Consistent icon system
- **Vite** - High-performance build tool

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logging

### Planned Technologies
- **MongoDB/PostgreSQL** - Data persistence
- **JWT** - Secure authentication
- **Socket.io** - Real-time bidirectional communication
- **Redis** - High-performance caching
- **Docker** - Containerized deployment

## 📂 Data Structure

### Friends Data (friends.json)
```json
{
  "id": 1,
  "name": "Alice",
  "status": "Available",
  "avatar": "👩",
  "avatarType": "emoji",
  "color": "#5B8C5A"
}
```

### Groups Data (groups.json)
```json
{
  "id": 101,
  "name": "Gaming Group",
  "members": 5,
  "avatar": "🎮",
  "avatarType": "emoji",
  "color": "#9B59B6"
}
```

### Messages Data (messages.json)
```json
{
  "id": 1,
  "text": "Hello there!",
  "sender": "me",
  "timestamp": "2:30 PM",
  "status": "read",
  "avatar": "👤"
}
```

## 🔄 Development Workflow

### Frontend Development
1. Develop React components in `frontend/src/` directory
2. Call backend APIs through `services/api.js`
3. Manage state using React Hooks

### Backend Development
1. Create API endpoints in `backend/routes/`
2. Manage JSON data in `backend/data/`
3. Handle requests through Express middleware

### Full-Stack Integration
1. Frontend calls backend APIs via HTTP
2. Backend provides RESTful API services
3. Shared data formats and interface specifications

## 📈 Development Roadmap

### 🎯 Phase 1 - Basic Features (Completed)
- [x] Frontend-backend separated architecture
- [x] Basic UI/UX design
- [x] Friends and groups management
- [x] Simulated chat functionality

### 🎯 Phase 2 - Core Features (In Progress)
- [ ] Database integration
- [ ] User authentication system
- [ ] Real message sending
- [ ] File upload functionality

### 🎯 Phase 3 - Advanced Features (Planned)
- [ ] WebSocket real-time communication
- [ ] Message encryption
- [ ] Push notifications
- [ ] Advanced group management features

### 🎯 Phase 4 - Extended Features (Future)
- [ ] Mobile application (React Native)
- [ ] Voice/video calls
- [ ] AI chatbot
- [ ] Multi-language support

## 🤝 Contributing Guidelines

1. Fork this project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 📞 Contact Information

For questions or suggestions, feel free to create an Issue or contact the development team.

---

**LIHO Chat** - Making communication simpler and more fun! 💬✨
