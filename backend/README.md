# LIHO Chat Backend

後端API服務器，使用Express.js構建。

## 🚀 快速開始

### 1. 安裝依賴
```bash
cd backend
npm install
```

### 2. 啟動開發服務器
```bash
npm run dev
```

服務器將在 `http://localhost:3001` 啟動

### 3. 測試API
訪問健康檢查端點：
```
http://localhost:3001/api/health
```

## 📁 專案結構

```
backend/
├── server.js          # 主服務器文件
├── config.js          # 配置文件
├── package.json       # 依賴管理
├── routes/            # API路由
│   ├── auth.js        # 認證路由
│   ├── friends.js     # 朋友API
│   ├── groups.js      # 群組API
│   ├── messages.js    # 訊息API
│   └── chats.js       # 聊天API
└── data/              # JSON數據文件
    ├── friends.json
    ├── groups.json
    └── messages.json
```

## 🔌 API端點

### 健康檢查
- `GET /api/health` - 服務器狀態

### 朋友
- `GET /api/friends` - 獲取所有朋友
- `GET /api/friends/:id` - 獲取特定朋友

### 群組
- `GET /api/groups` - 獲取所有群組

### 訊息
- `GET /api/messages` - 獲取所有訊息
- `POST /api/messages` - 發送訊息

### 聊天
- `GET /api/chats` - 獲取所有聊天（朋友+群組）

### 認證（準備中）
- `POST /api/auth/login` - 登入
- `POST /api/auth/logout` - 登出

## 🔧 環境變數

在 `backend/` 目錄建立 `.env` 文件：

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## 📈 下一步計劃

- [ ] 連接資料庫 (MongoDB/PostgreSQL)
- [ ] 實現JWT認證
- [ ] WebSocket即時聊天
- [ ] 檔案上傳功能
- [ ] 訊息加密
- [ ] API限流
- [ ] 單元測試 