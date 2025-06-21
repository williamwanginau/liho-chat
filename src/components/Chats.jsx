import { useState, useMemo } from "react";
import { useData } from "../hooks/useData";
import ItemList from "./ItemList";

const Chats = ({ selectedItem, onItemSelect }) => {
  const { friendsData, groupsData, loading } = useData();
  const [searchTerm, setSearchTerm] = useState("");

  const chatsList = useMemo(() => {
    if (!friendsData.length && !groupsData.length) return [];

    return [
      {
        id: "friends-header",
        type: "category",
        name: "Friends",
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
  }, [friendsData, groupsData]);

  if (loading) {
    return <div className="loading">Loading chats...</div>;
  }

  return (
    <ItemList
      items={chatsList}
      onItemSelect={onItemSelect}
      selectedItem={selectedItem}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
    />
  );
};

export default Chats;
