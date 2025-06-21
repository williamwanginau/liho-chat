import { useState, useMemo } from "react";
import { useData } from "../hooks/useData";
import ItemList from "./ItemList";

const Friends = ({ selectedItem, onItemSelect }) => {
  const { friendsData, loading } = useData();
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
