"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"

export const tabsListVariants = cva(
  "bg-accent text-foreground inline-flex w-fit items-center justify-center font-medium leading-normal",
  {
    variants: {
      size: {
        default: "min-h-9 text-sm p-[0.188rem]",
        sm: "min-h-6 font-normal text-xs p-0.5",
        lg: "min-h-10 text-sm p-1"
      },
      shape: {
        rectangle: "rounded-[0.625rem]",
        circle: "rounded-full"
      }
    },
    defaultVariants: {
      size: "default",
      shape: "rectangle"
    },
  }
)


const tabTriggerVariants = cva(
  `
    text-foreground inline-flex h-full flex-1 items-center rounded-[inherit] justify-center gap-1.5 whitespace-nowrap transition-[color,box-shadow] dark:text-muted-foreground
    data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30
    focus-visible:ring-3 focus-visible:outline-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-5
  `,
  {
    variants: {
      size: {
        default: "px-2 py-1",
        sm: "px-1.5 py-px [&_svg]:size-4",
        lg: "px-2.5 py-1.5"
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  size,
  shape,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ size, shape, className }))}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  size,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabTriggerVariants({ size, className }))}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger }
