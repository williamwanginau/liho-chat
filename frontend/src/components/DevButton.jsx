import { useState, useRef, useEffect } from "react";
import { api } from "../services/api";
import "./DevButton.css";

const DevButton = ({ onMockModeChange, mockMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAction = async (actionType) => {
    if (isLoading) return;

    setIsLoading(true);
    setActiveAction(actionType);

    try {
      switch (actionType) {
        case "toggle-friends":
          if (mockMode) {
            onMockModeChange?.(false, []);
            console.log("🌐 Live mode");
          } else {
            const result = await api.dev.getMockFriends();
            if (result.success) {
              onMockModeChange?.(true, result.data);
              console.log("🤖 Mock friends enabled");
            }
          }
          break;

        case "clear-friends":
          const clearResult = await api.dev.clearFriends();
          if (clearResult.success) {
            console.log("🗑️ Friends cleared");
            onMockModeChange?.(false, []);
          }
          break;

        case "reset-friends":
          const resetResult = await api.dev.resetFriends();
          if (resetResult.success) {
            console.log("🔄 Friends reset to default");
            onMockModeChange?.(false, []);
          }
          break;

        case "backup-friends":
          const backupResult = await api.dev.backupFriends();
          if (backupResult.success) {
            console.log("💾 Friends backed up");
          }
          break;

        case "dev-status":
          const statusResult = await api.dev.getStatus();
          if (statusResult.success) {
            console.log("📊 Dev Status:", statusResult.data);
          }
          break;

        default:
          console.log("Unknown action:", actionType);
      }
    } catch (error) {
      console.error(`Error executing ${actionType}:`, error);
    } finally {
      setIsLoading(false);
      setActiveAction(null);
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      id: "toggle-friends",
      icon: mockMode ? "🌐" : "🤖",
      label: mockMode ? "Live Mode" : "Mock Friends",
      description: mockMode ? "Switch to live data" : "Use test friends data",
    },
    {
      id: "clear-friends",
      icon: "🗑️",
      label: "Clear Friends",
      description: "Remove all friends data",
    },
    {
      id: "reset-friends",
      icon: "🔄",
      label: "Reset Friends",
      description: "Restore default friends",
    },
    {
      id: "backup-friends",
      icon: "💾",
      label: "Backup Friends",
      description: "Save current friends data",
    },
    {
      id: "dev-status",
      icon: "📊",
      label: "Dev Status",
      description: "Show development info",
    },
  ];

  return (
    <div className="dev-container" ref={menuRef}>
      {/* Main Dev Button */}
      <button
        className={`dev-btn ${mockMode ? "active" : ""} ${
          isOpen ? "menu-open" : ""
        }`}
        onClick={handleMenuToggle}
        title="Developer Tools"
      >
        {isLoading ? "⏳" : isOpen ? "✕" : mockMode ? "🤖" : "⚙️"}
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="dev-menu">
          <div className="dev-menu-header">
            <h3>Developer Tools</h3>
            <span className="dev-menu-subtitle">
              {mockMode ? "🤖 Mock Mode Active" : "🌐 Live Mode"}
            </span>
          </div>

          <div className="dev-menu-items">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`dev-menu-item ${
                  activeAction === item.id ? "loading" : ""
                }`}
                onClick={() => handleAction(item.id)}
                disabled={isLoading}
              >
                <div className="dev-menu-item-icon">
                  {activeAction === item.id ? "⏳" : item.icon}
                </div>
                <div className="dev-menu-item-content">
                  <div className="dev-menu-item-label">{item.label}</div>
                  <div className="dev-menu-item-description">
                    {item.description}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="dev-menu-footer">
            <small>Development Mode Only</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevButton;
