import { useState, useEffect } from "react";

export const useData = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const [friendsResponse, groupsResponse] = await Promise.all([
          fetch("/friends.json"),
          fetch("/groups.json"),
        ]);

        const friends = await friendsResponse.json();
        const groups = await groupsResponse.json();

        setFriendsData(friends);
        setGroupsData(groups);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { friendsData, groupsData, loading };
};
