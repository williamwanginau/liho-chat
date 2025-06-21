const MORE_OPTIONS = [
  {
    id: "stickers",
    icon: "emoji_emotions",
    label: "Stickers & Emojis",
    color: "#F59E0B",
  },
  { id: "themes", icon: "brush", label: "Chat Themes", color: "#8B5CF6" },
  { id: "backup", icon: "backup", label: "Backup & Restore", color: "#06B6D4" },
  {
    id: "data-usage",
    icon: "data_usage",
    label: "Data Usage",
    color: "#EF4444",
  },
  { id: "share-app", icon: "share", label: "Share LIHO", color: "#10B981" },
  { id: "rate-app", icon: "star", label: "Rate App", color: "#F97316" },
  {
    id: "feedback",
    icon: "feedback",
    label: "Send Feedback",
    color: "#6366F1",
  },
  { id: "logout", icon: "logout", label: "Logout", color: "#9CA3AF" },
];

const More = () => {
  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option.label}`);

    if (option.id === "logout") {
      if (confirm("Are you sure you want to logout?")) {
        // Handle logout
        console.log("User logged out");
      }
    }
    // Add functionality here for each option
  };

  return (
    <div className="more-container">
      <div className="more-header">
        <h2>More</h2>
        <p>Additional features and options</p>
      </div>

      <div className="more-options">
        {MORE_OPTIONS.map((option) => (
          <div
            key={option.id}
            className={`more-option ${
              option.id === "logout" ? "logout-option" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <div
              className="option-icon"
              style={{ backgroundColor: option.color }}
            >
              <span className="material-icons">{option.icon}</span>
            </div>
            <span className="option-label">{option.label}</span>
            <span className="material-icons">chevron_right</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
