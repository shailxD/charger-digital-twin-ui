import { getIcon, getStatusIcon } from "@/assets/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notifications } from "../data";
import { Notification } from "../types";
import { formatNotificationTimestamp } from "@/lib/utils/format-timestamp";
import { cn } from "@/lib/utils";

export function RightPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col gap-4",
        "rounded-sm bg-[#0D111D]",
        "px-5 py-4",
        className
      )}
    >
      <Header />
      <ScrollArea className="min-h-0 flex-1">
        <div className="flex flex-col gap-3">
          {notifications.map((notification, index) => (
            <NotificationCard key={index} notification={notification} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

const Header = () => (
  <header className="flex items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      {getIcon("view_object_track", "size-5")}
      <h3 className="text-sm">Live Notifications</h3>
    </div>
    <button className="flex items-center gap-1 text-xs text-[#4C8AF0]">
      <p>More</p>
      {getIcon("expand_more", "size-2.5")}
    </button>
  </header>
);

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const { type, statusID, message, timestamp } = notification;

  const getStatusColor = (type: string) => {
    switch (type) {
      case "error":
        return "text-[#E74739] bg-[#E74739]/20 border-[#E74739]/20";
      case "warning":
        return "text-[#FF9500] bg-[#FF9500]/20 border-[#FF9500]/20";
      case "info":
        return "text-[#4C8AF0] bg-[#4C8AF0]/20 border-[#4C8AF0]/20";
      default:
        return "text-gray-500 bg-gray-500/20 border-gray-500/20";
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        "rounded-sm bg-[#101625] px-3 py-2",
        "cursor-pointer hover:bg-[#1A2238]",
        "transition-colors duration-200 ease-in-out",
        "[&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2"
      )}
    >
      <div>
        <p className="text-[10px] text-[#ADB7D2]">
          {formatNotificationTimestamp(timestamp)}
        </p>
        <div
          className={cn(
            "flex items-center gap-1",
            "rounded-xs border px-1 py-0.5",
            getStatusColor(type)
          )}
        >
          {getStatusIcon(type, "size-3")}
          <p className="text-[10px]">{statusID}</p>
        </div>
      </div>
      <div>
        <p className="text-xs font-normal">{message}</p>
        {getIcon("forward_arrow", "size-3")}
      </div>
    </div>
  );
};
