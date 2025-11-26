import { Settings, History, LogOut } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

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

export default function Header() {
  return (
    <header className="fixed z-50 w-full top-0 px-4 py-3 border-b border-border bg-background md:w-[calc(100%-var(--sidebar-width))]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden" />
              {/* this should be dynamic somehow */}
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
  )
}
