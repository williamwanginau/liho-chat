import { useState, useMemo, useEffect } from "react";
import { useData } from "../hooks/useData";
import ItemList from "./ItemList";

const Chats = ({
  selectedItem,
  onItemSelect,
  mockMode = false,
  mockData = null,
  refreshTrigger = 0,
}) => {
  const { friendsData, groupsData, loading, error, refreshData } = useData(
    mockMode,
    mockData
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Handle refresh trigger from parent
  useEffect(() => {
    if (refreshTrigger > 0) {
      refreshData();
    }
  }, [refreshTrigger]); // Remove refreshData from dependencies to prevent infinite loop

  const chatsList = useMemo(() => {
    if (!friendsData.length && !groupsData.length) return [];

    return [
      {
        id: "friends-header",
        type: "category",
        name: mockMode ? "Mock Friends" : "Friends",
        count: `(${friendsData.length})`,
      },
      ...friendsData,
      {
        id: "groups-header",
        type: "category",
        name: "Groups",
        count: `(${groupsData.length})`,
      },
      ...groupsData,
    ];
  }, [friendsData, groupsData, mockMode]);

  if (loading) {
    return (
      <div className="loading">
        <span className="loading-icon">🔄</span>
        <p>Loading {mockMode ? "mock" : "chat"} data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ {error}</p>
        {!mockMode && (
          <p>Please make sure the backend server is running on port 3001</p>
        )}
        <button onClick={refreshData} className="retry-button">
          🔄 Retry
        </button>
      </div>
    );
  }

  if (!mockMode && friendsData.length === 0 && groupsData.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">💬</div>
        <h3>No chats yet</h3>
        <p>Start a conversation with your friends!</p>
      </div>
    );
  }

  return (
    <div className="chats-container">
      {mockMode && (
        <div className="mock-mode-banner">
          🤖 Mock Mode Active - Showing test data
        </div>
      )}
      <ItemList
        items={chatsList}
        onItemSelect={onItemSelect}
        selectedItem={selectedItem}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
};

export default Chats;
