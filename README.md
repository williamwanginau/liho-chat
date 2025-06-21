# LIHO Chat 💬

一個現代化的聊天應用程式，模仿LINE的介面設計，採用前後端分離架構。

## 🏗️ 專案架構

```
LIHO-CHAT/                    # 主專案目錄
├── frontend/                 # 前端React應用
│   ├── src/                 # 前端源碼
│   │   ├── components/      # React組件
│   │   ├── services/        # API服務層
│   │   └── hooks/           # 自定義Hooks
│   ├── public/              # 靜態資源
│   ├── package.json         # 前端依賴管理
│   └── vite.config.js       # Vite配置
├── backend/                  # 後端Express.js API
│   ├── routes/              # API路由
│   ├── data/                # JSON數據文件
│   ├── middleware/          # 中間件
│   ├── package.json         # 後端依賴管理
│   └── server.js            # Express主服務器
├── README.md                # 專案說明文件
└── .gitignore              # Git忽略文件
```

## 🚀 快速開始

### 前置條件
- Node.js (v16+)
- npm 或 yarn

### 1️⃣ 啟動後端服務器

```bash
# 進入後端目錄
cd backend

# 安裝依賴
npm install

# 啟動開發服務器
npm run dev
```

🟢 後端將在 `http://localhost:3001` 運行

### 2️⃣ 啟動前端應用

```bash
# 進入前端目錄（新開一個終端）
cd frontend

# 安裝依賴
npm install

# 啟動開發服務器
npm run dev
```

🟢 前端將在 `http://localhost:5173` 運行

### 3️⃣ 測試連接

- 🌐 前端應用：http://localhost:5173
- ⚡ 後端API：http://localhost:3001/api/health

## ✨ 功能特點

### ✅ 已實現
- 🎨 LINE風格的現代化UI/UX
- 👥 朋友列表管理與搜尋
- 👨‍👩‍👧‍👦 群組聊天功能
- 💬 即時聊天介面
- 📱 完全響應式設計
- 🔍 智能搜尋功能
- 🤖 AI自動回覆（模擬）
- 🌙 深色主題界面

### 🚧 開發中
- 🗄️ 資料庫整合 (MongoDB/PostgreSQL)
- 🔐 JWT用戶認證系統
- 🔄 WebSocket即時通訊
- 📁 檔案上傳與分享
- 🔔 即時推播通知

## 🔌 API文檔

### 健康檢查
- `GET /api/health` - 服務器狀態檢查

### 朋友管理
- `GET /api/friends` - 獲取所有朋友列表
- `GET /api/friends/:id` - 獲取特定朋友資訊

### 群組管理
- `GET /api/groups` - 獲取所有群組列表

### 訊息系統
- `GET /api/messages` - 獲取聊天記錄
- `POST /api/messages` - 發送新訊息

### 聊天功能
- `GET /api/chats` - 獲取所有聊天（朋友+群組）

### 認證系統（準備中）
- `POST /api/auth/login` - 用戶登入
- `POST /api/auth/logout` - 用戶登出

## 🛠️ 技術棧

### 前端技術
- **React 19** - 現代化UI框架
- **React Router DOM** - 客戶端路由
- **CSS3** - 響應式樣式設計
- **Material Icons** - 一致的圖標系統
- **Vite** - 高效能建置工具

### 後端技術
- **Node.js** - JavaScript運行環境
- **Express.js** - Web應用框架
- **CORS** - 跨域資源共享
- **Helmet** - 安全性中間件
- **Morgan** - HTTP請求日誌

### 計劃技術
- **MongoDB/PostgreSQL** - 數據持久化
- **JWT** - 安全認證
- **Socket.io** - 即時雙向通訊
- **Redis** - 高效能快取
- **Docker** - 容器化部署

## 📂 數據結構

### 朋友資料 (friends.json)
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

### 群組資料 (groups.json)
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

### 訊息資料 (messages.json)
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

## 🔄 開發流程

### 前端開發
1. 在 `frontend/src/` 目錄開發React組件
2. 透過 `services/api.js` 調用後端API
3. 使用React Hooks管理狀態

### 後端開發
1. 在 `backend/routes/` 建立API端點
2. 在 `backend/data/` 管理JSON數據
3. 透過Express中間件處理請求

### 全棧整合
1. 前端透過HTTP調用後端API
2. 後端提供RESTful API服務
3. 共享數據格式與介面規範

## 📈 開發路線圖

### 🎯 Phase 1 - 基礎功能 (已完成)
- [x] 前後端分離架構
- [x] 基本UI/UX設計
- [x] 朋友與群組管理
- [x] 模擬聊天功能

### 🎯 Phase 2 - 核心功能 (進行中)
- [ ] 資料庫整合
- [ ] 用戶認證系統
- [ ] 真實訊息發送
- [ ] 檔案上傳功能

### 🎯 Phase 3 - 進階功能 (計劃中)
- [ ] WebSocket即時通訊
- [ ] 訊息加密
- [ ] 推播通知
- [ ] 群組管理進階功能

### 🎯 Phase 4 - 擴展功能 (未來)
- [ ] 行動端應用 (React Native)
- [ ] 語音/視訊通話
- [ ] AI聊天機器人
- [ ] 多語言支援

## 🤝 貢獻指南

1. Fork此專案
2. 建立功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 建立Pull Request

## 📄 授權條款

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯絡資訊

如有問題或建議，歡迎建立Issue或聯繫開發團隊。

---

**LIHO Chat** - 讓溝通更簡單、更有趣！ 💬✨
