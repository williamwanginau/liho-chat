import { useState } from "react";

const ItemList = ({
  items,
  onItemSelect,
  selectedItem,
  searchTerm,
  onSearchChange,
}) => {
  const [collapsedCategories, setCollapsedCategories] = useState(new Set());

  const toggleCategory = (categoryId) => {
    const newCollapsed = new Set(collapsedCategories);
    if (newCollapsed.has(categoryId)) {
      newCollapsed.delete(categoryId);
    } else {
      newCollapsed.add(categoryId);
    }
    setCollapsedCategories(newCollapsed);
  };

  const filteredList = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter out items that belong to collapsed categories
  const visibleList = filteredList.filter((item, index) => {
    if (item.type === "category") {
      return true; // Always show category headers
    }

    // Find the most recent category before this item
    let categoryId = null;
    for (let i = index - 1; i >= 0; i--) {
      if (filteredList[i].type === "category") {
        categoryId = filteredList[i].id;
        break;
      }
    }

    return !collapsedCategories.has(categoryId);
  });

  return (
    <>
      {/* Search bar */}
      <div className="search-bar">
        <span className="material-icons search-icon">search</span>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* List */}
      <div className="groups-list">
        {visibleList.map((item) =>
          item.type === "category" ? (
            <div
              key={item.id}
              className="category-header"
              onClick={() => toggleCategory(item.id)}
            >
              <span>
                {item.name} {item.count}
              </span>
              <span
                className={`material-icons chevron ${
                  collapsedCategories.has(item.id) ? "collapsed" : ""
                }`}
              >
                expand_more
              </span>
            </div>
          ) : (
            <div
              key={item.id}
              className={`group-item ${
                selectedItem?.id === item.id ? "active" : ""
              }`}
              onClick={() => onItemSelect(item)}
            >
              <div
                className="group-avatar"
                style={{ backgroundColor: item.color || "#444" }}
              >
                {item.avatarType === "icon" ? (
                  <span className="material-icons">{item.avatar}</span>
                ) : (
                  item.avatar
                )}
              </div>
              <div className="group-info">
                <div className="group-name">{item.name}</div>
                {item.status && (
                  <div className="friend-status">{item.status}</div>
                )}
                {item.members && (
                  <div className="group-members">({item.members})</div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ItemList;
