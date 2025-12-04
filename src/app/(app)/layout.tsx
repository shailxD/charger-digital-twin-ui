import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex h-screen flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col gap-4 px-6 py-8">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
