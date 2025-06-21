import { useState, useEffect } from "react";
import { api } from "../services/api";

export const useData = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use backend API instead of local JSON files
        const [friendsResult, groupsResult] = await Promise.all([
          api.friends.getAll(),
          api.groups.getAll(),
        ]);

        // Check if API calls were successful
        if (friendsResult.success) {
          setFriendsData(friendsResult.data);
        } else {
          console.error("Failed to load friends:", friendsResult.error);
          setError("Failed to load friends data");
        }

        if (groupsResult.success) {
          setGroupsData(groupsResult.data);
        } else {
          console.error("Failed to load groups:", groupsResult.error);
          setError("Failed to load groups data");
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setError("Failed to connect to server");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { friendsData, groupsData, loading, error };
};
