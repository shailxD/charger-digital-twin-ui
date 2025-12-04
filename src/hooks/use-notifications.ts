import { useState, useEffect, useCallback } from "react";
import { Notification } from "@/components/charger-management/tabs/components/digital-twin/panels/types";
import { notifications as mockNotifications } from "@/components/charger-management/tabs/components/digital-twin/panels/data";

interface UseNotificationsResult {
  notifications: Notification[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook to fetch live notifications for a charger
 * Simulates: GET /api/charger/:id/notifications
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useNotifications(chargerId?: string): UseNotificationsResult {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call: GET /api/charger/:id/notifications
      await new Promise((resolve) => setTimeout(resolve, 500));

      // In a real implementation, this would be:
      // const response = await fetch(`/api/charger/${chargerId}/notifications`);
      // const data = await response.json();

      setNotifications(mockNotifications);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch notifications"
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return {
    notifications,
    isLoading,
    error,
    refetch: fetchNotifications,
  };
}
