import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Import page components
import Friends from "./components/Friends";
import Chats from "./components/Chats";
import AddFriends from "./components/AddFriends";
import Settings from "./components/Settings";
import More from "./components/More";
import ChatRoom from "./components/ChatRoom";

// Main App component that contains the layout
function AppContent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current tab from pathname
  const currentPath = location.pathname.slice(1) || "chats"; // Remove leading slash, default to 'chats'

  // Tab configuration
  const TAB_CONFIG = {
    friends: { title: "Friends", icon: "people" },
    chats: { title: "Chats", icon: "chat" },
    addfriends: { title: "Add Friends", icon: "person_add" },
    settings: { title: "Settings", icon: "settings" },
    more: { title: "More", icon: "more_horiz" },
  };

  const handleNavigation = (path) => {
    navigate(`/${path}`);
    // Clear selected item when switching tabs
    setSelectedItem(null);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app">
      {/* Left navigation bar */}
      <div className="nav-bar">
        {/* User avatar at top */}
        <div className="nav-user">
          <span className="material-icons nav-user-avatar">account_circle</span>
          <div className="user-status">Available</div>
        </div>

        {/* Navigation icons */}
        <div className="nav-icons">
          <div
            className={`nav-icon ${currentPath === "friends" ? "active" : ""}`}
            onClick={() => handleNavigation("friends")}
            title="Friends"
          >
            <span className="material-icons">people</span>
          </div>
          <div
            className={`nav-icon ${currentPath === "chats" ? "active" : ""}`}
            onClick={() => handleNavigation("chats")}
            title="Chats"
          >
            <span className="material-icons">chat</span>
          </div>
          <div
            className={`nav-icon ${
              currentPath === "addfriends" ? "active" : ""
            }`}
            onClick={() => handleNavigation("addfriends")}
            title="Add Friends"
          >
            <span className="material-icons">person_add</span>
          </div>
        </div>

        {/* Bottom navigation icons */}
        <div className="nav-bottom">
          <div
            className={`nav-icon ${currentPath === "settings" ? "active" : ""}`}
            onClick={() => handleNavigation("settings")}
            title="Settings"
          >
            <span className="material-icons">settings</span>
          </div>
          <div
            className={`nav-icon ${currentPath === "more" ? "active" : ""}`}
            onClick={() => handleNavigation("more")}
            title="More"
          >
            <span className="material-icons">more_horiz</span>
          </div>
        </div>
      </div>

      {/* Sidebar with list */}
      <div className="sidebar">
        {/* Tab title */}
        <div className="sidebar-header">
          <h2>{TAB_CONFIG[currentPath]?.title || "LIHO"}</h2>
        </div>

        {/* Routes for sidebar content */}
        <Routes>
          <Route
            path="/friends"
            element={
              <Friends
                selectedItem={selectedItem}
                onItemSelect={handleItemSelect}
              />
            }
          />
          <Route
            path="/chats"
            element={
              <Chats
                selectedItem={selectedItem}
                onItemSelect={handleItemSelect}
              />
            }
          />
          <Route path="/addfriends" element={<AddFriends />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/more" element={<More />} />
          <Route
            path="/"
            element={
              <Chats
                selectedItem={selectedItem}
                onItemSelect={handleItemSelect}
              />
            }
          />
        </Routes>
      </div>

      {/* Chat area */}
      <ChatRoom selectedItem={selectedItem} />
    </div>
  );
}

// Root App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
