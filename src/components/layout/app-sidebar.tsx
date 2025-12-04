"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Icons, getSidebarIcon } from "@/assets/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import AvatarImg from "@/assets/avatar.png";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Graph",
      url: "/graph",
      icon: "graph",
    },
    {
      title: "Charger-management",
      url: "/charger-management",
      icon: "charger",
    },
    {
      title: "Alerts",
      url: "/alerts",
      icon: "notification_important",
    },
    {
      title: "Warnings",
      url: "/warnings",
      icon: "warning",
    },
    {
      title: "Account",
      url: "/account",
      icon: "account_circle",
    },
    {
      title: "Tickets",
      url: "/tickets",
      icon: "ticket",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center">
          <Icons.zynetic className="size-9" />
        </div>
      </SidebarHeader>
      <SidebarContent className="py-4">
        <SidebarMenu>
          {data.navMain.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className="w-fit cursor-pointer"
                  onClick={() => router.push(item.url)}
                  style={{
                    color: isActive ? "#87C445" : "currentColor",
                  }}
                >
                  {getSidebarIcon(item.icon)}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-center">
          <Image src={AvatarImg} alt="Avatar" height={40} width={40} />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
