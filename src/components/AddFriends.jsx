const ADD_FRIENDS_OPTIONS = [
  { id: "qr-code", icon: "qr_code_2", label: "QR Code", color: "#10B981" },
  { id: "search-id", icon: "search", label: "Search by ID", color: "#6366F1" },
  {
    id: "contacts",
    icon: "contacts",
    label: "From Contacts",
    color: "#F59E0B",
  },
  { id: "nearby", icon: "near_me", label: "Nearby", color: "#EF4444" },
];

const AddFriends = () => {
  const handleOptionClick = (option) => {
    console.log(`Clicked: ${option.label}`);
    // Add functionality here for each option
  };

  return (
    <div className="add-friends-container">
      <div className="add-friends-header">
        <h2>Add Friends</h2>
        <p>Choose how you'd like to add new friends</p>
      </div>

      <div className="add-friends-options">
        {ADD_FRIENDS_OPTIONS.map((option) => (
          <div
            key={option.id}
            className="add-friends-option"
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

export default AddFriends;
