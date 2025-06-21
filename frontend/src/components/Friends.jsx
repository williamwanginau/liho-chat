import { useState, useMemo } from "react";
import { useData } from "../hooks/useData";
import ItemList from "./ItemList";

const Friends = ({ selectedItem, onItemSelect }) => {
  const { friendsData, loading, error } = useData();
  const [searchTerm, setSearchTerm] = useState("");

  const friendsList = useMemo(() => {
    if (!friendsData.length) return [];

    return [
      {
        id: "friends-header",
        type: "category",
        name: "Friends",
        count: `(${friendsData.length})`,
      },
      ...friendsData,
    ];
  }, [friendsData]);

  if (loading) {
    return <div className="loading">Loading friends...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ {error}</p>
        <p>Please make sure the backend server is running on port 3001</p>
      </div>
    );
  }

  return (
    <ItemList
      items={friendsList}
      onItemSelect={onItemSelect}
      selectedItem={selectedItem}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
    />
  );
};

export default Friends;
