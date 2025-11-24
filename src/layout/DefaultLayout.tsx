import { Outlet } from "react-router";
import { Settings, History, LogOut } from 'lucide-react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import MySidebar from '@/components/MySidebar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

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
        <header className="px-4 py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <SidebarTrigger className="md:hidden" />
              <h4>Dashboard</h4>
            </div>

            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">HAZIDEX catalogue</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-60" align="start">
                  <DropdownMenuItem>
                    <Settings />
                    User Settings
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <History />
                    Request History
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <Outlet />
      </div>


      {/* <SidebarInset >
        <main className="max-h-svh flex-1 flex flex-col overflow-x-hidden overflow-y-auto pb-32 md:pb-10">
          <SidebarTrigger />

          <div className="flex-1">
            <Outlet />
          </div>
        </main>
      </SidebarInset> */}
    </SidebarProvider>
  )
}
