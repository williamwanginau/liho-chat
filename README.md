# LIHO Chat 📱

一個現代化的聊天應用程式介面，使用 React + Vite + React Router 構建，模仿 LINE 聊天應用程式的設計風格。

## ✨ 特色功能

- 🎨 **現代化 UI** - 深色主題，類似 LINE 的介面設計
- 👥 **好友管理** - 完整的好友列表和狀態顯示
- 💬 **群組聊天** - 支援群組管理和成員顯示
- 🔍 **搜尋功能** - 快速搜尋好友和群組
- 📱 **響應式設計** - 支援桌面和行動裝置
- 🎭 **多頁面路由** - 使用 React Router 進行頁面管理
- ⚙️ **設定頁面** - 完整的設定選項
- 🔧 **更多功能** - 額外的工具和選項

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 🏗️ 技術架構

### 核心技術
- **React 19** - 前端框架
- **Vite** - 建置工具
- **React Router DOM** - 路由管理
- **Material Icons** - 圖示庫

### 專案結構
```
src/
├── components/          # React 組件
│   ├── Friends.jsx     # 好友頁面
│   ├── Chats.jsx       # 聊天頁面
│   ├── AddFriends.jsx  # 加好友頁面
│   ├── Settings.jsx    # 設定頁面
│   ├── More.jsx        # 更多頁面
│   └── ItemList.jsx    # 共享列表組件
├── hooks/              # 自定義 Hooks
│   └── useData.js      # 資料管理 Hook
├── App.jsx             # 主應用程式
├── App.css             # 樣式表
└── main.jsx            # 入口點

public/
├── friends.json        # 好友資料
└── groups.json         # 群組資料
```

## 📱 頁面導覽

| 路由 | 頁面 | 功能 |
|------|------|------|
| `/` | 聊天 | 預設頁面，顯示好友和群組 |
| `/friends` | 好友 | 好友列表管理 |
| `/chats` | 聊天 | 聊天對話列表 |
| `/addfriends` | 加好友 | 多種加好友方式 |
| `/settings` | 設定 | 應用程式設定 |
| `/more` | 更多 | 額外功能和工具 |

## 🎨 設計特色

- **深色主題** - 舒適的深色介面
- **Material Design** - 使用 Google Material Icons
- **現代配色** - 翠綠色主題 (#10B981)
- **流暢動畫** - 平滑的過渡效果
- **一致性** - 統一的視覺語言

## 📊 資料管理

應用程式使用 JSON 檔案來管理資料：

- `public/friends.json` - 好友資料，包含姓名、狀態、頭像等
- `public/groups.json` - 群組資料，包含群組名稱、成員數量等

## 🔧 自定義配置

### 添加新好友
編輯 `public/friends.json`：

```json
{
  "id": 9,
  "name": "新朋友",
  "status": "在線上",
  "avatar": "person",
  "avatarType": "icon",
  "color": "#FF6B6B"
}
```

### 添加新群組
編輯 `public/groups.json`：

```json
{
  "id": 110,
  "name": "新群組",
  "members": 8,
  "avatar": "group",
  "avatarType": "icon",
  "color": "#4ECDC4"
}
```

## 🚀 未來功能

- [ ] 即時聊天功能
- [ ] 訊息歷史記錄
- [ ] 檔案分享
- [ ] 通話功能
- [ ] 推播通知
- [ ] 使用者認證
- [ ] 資料庫整合

## 📝 開發說明

此專案使用模組化架構：

1. **組件化** - 每個功能都是獨立的 React 組件
2. **Hook 化** - 使用自定義 Hook 管理狀態和副作用
3. **路由化** - 使用 React Router 進行單頁應用路由
4. **樣式化** - 統一的 CSS 樣式管理

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License
