import { Outlet } from "react-router";
import { SidebarProvider } from '@/components/ui/sidebar';
import MySidebar from '@/components/MySidebar';
import Header from '@/components/Header';

export default function DefaultLayout () {
  return (
    <SidebarProvider 
      style={
        {
          "--sidebar-width": "13.5rem",
          "--sidebar-width-mobile": "13.5rem",
        } as React.CSSProperties
      }
    >
      <MySidebar />

      <div className="w-full">
        <Header />
        <main className="max-h-svh flex-1 flex flex-col overflow-x-hidden overflow-y-auto pb-32 md:pb-10 md:pt-20">
          <div className="flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
