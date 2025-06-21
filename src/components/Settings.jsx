const SETTINGS_OPTIONS = [
  { id: "profile", icon: "person", label: "Profile", color: "#10B981" },
  { id: "privacy", icon: "lock", label: "Privacy", color: "#6366F1" },
  {
    id: "notifications",
    icon: "notifications",
    label: "Notifications",
    color: "#F59E0B",
  },
  { id: "theme", icon: "palette", label: "Theme", color: "#EF4444" },
  { id: "language", icon: "language", label: "Language", color: "#8B5CF6" },
  { id: "storage", icon: "storage", label: "Storage", color: "#06B6D4" },
  { id: "help", icon: "help", label: "Help & Support", color: "#F97316" },
  { id: "about", icon: "info", label: "About", color: "#84CC16" },
];

const Settings = () => {
  const handleSettingClick = () => {
    // TODO: Implement actual functionality for each setting
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Manage your account and app preferences</p>
      </div>

      <div className="settings-options">
        {SETTINGS_OPTIONS.map((setting) => (
          <div
            key={setting.id}
            className="setting-option"
            onClick={() => handleSettingClick(setting)}
          >
            <div
              className="option-icon"
              style={{ backgroundColor: setting.color }}
            >
              <span className="material-icons">{setting.icon}</span>
            </div>
            <span className="option-label">{setting.label}</span>
            <span className="material-icons">chevron_right</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
