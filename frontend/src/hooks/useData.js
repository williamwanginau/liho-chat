import { useState, useEffect, useMemo, useCallback } from "react";
import { api } from "../services/api";

export const useData = (mockMode = false, mockData = null) => {
  const [friendsData, setFriendsData] = useState([]);
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize mockData to prevent infinite re-renders
  // Only re-compute when mockData content actually changes
  const memoizedMockData = useMemo(() => {
    return mockData ? JSON.stringify(mockData) : null;
  }, [mockData]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        if (mockMode && mockData) {
          // Use mock data for development/testing
          console.log("🤖 Using mock data mode");
          setFriendsData(mockData);
          setGroupsData([]); // Empty groups for mock mode
          setLoading(false);
          return;
        }

        // Use backend API for real data
        console.log("🌐 Loading data from backend API");
        const [friendsResult, groupsResult] = await Promise.all([
          api.friends.getAll(),
          api.groups.getAll(),
        ]);

        // Check if API calls were successful
        if (friendsResult.success) {
          setFriendsData(friendsResult.data || []);
        } else {
          console.error("Failed to load friends:", friendsResult.error);
          setError("Failed to load friends data");
        }

        if (groupsResult.success) {
          setGroupsData(groupsResult.data || []);
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
  }, [mockMode, memoizedMockData]); // Use memoized version instead of raw mockData

  // Function to manually refresh data - using useCallback to prevent infinite re-renders
  const refreshData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (mockMode && mockData) {
        console.log("🤖 Refreshing with mock data");
        setFriendsData(mockData);
        setGroupsData([]);
        setLoading(false);
        return;
      }

      // Use backend API for real data
      console.log("🌐 Refreshing data from backend API");
      const [friendsResult, groupsResult] = await Promise.all([
        api.friends.getAll(),
        api.groups.getAll(),
      ]);

      if (friendsResult.success) {
        setFriendsData(friendsResult.data || []);
      } else {
        setError("Failed to load friends data");
      }

      if (groupsResult.success) {
        setGroupsData(groupsResult.data || []);
      } else {
        setError("Failed to load groups data");
      }
    } catch (error) {
      console.error("Error refreshing data:", error);
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  }, [mockMode, memoizedMockData]); // Stable dependencies only

  return {
    friendsData,
    groupsData,
    loading,
    error,
    refreshData,
  };
};
