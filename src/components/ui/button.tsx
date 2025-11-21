import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `
    cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium rounded-lg transition-colors
    focus-visible:outline-none focus:ring-3 focus:ring-primary-200
    disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed
    [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:pointer-events-none
  `,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-500",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-500",
        outline:
          "outline outline-neutral-300 text-foreground shadow-xs bg-white/10 hover:bg-black/5 hover:shadow-sm focus:outline-neutral-400",
        link: "text-neutral-700 hover:bg-black/5 focus:bg-transparent",
        destructive:
          "bg-destructive text-white focus:ring-ring",
        ghost: "outline outline-neutral-50 text-neutral-700 hover:text-foreground hover:bg-black/5 hover:outline-transparent focus:text-neutral-700 focus:bg-transparent",
      },
      size: {
        default: "px-4 py-2",
        xs: "px-2 py-1 text-xs font-normal gap-1.5",
        sm: "py-1.5 px-3 gap-1.5",
        lg: "px-6 py-2.5",
      },
      pill: {
        true: "rounded-full",
      },
      iconOnly: {
        true: 'aspect-square'
      }
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: 'xs',
        class: "[&_svg]:size-4 p-1"
      },
      {
        iconOnly: true,
        size: 'sm',
        class: "p-1.5"
      },
      {
        iconOnly: true,
        size: 'default',
        class: "p-2"
      },
      {
        iconOnly: true,
        size: 'lg',
        class: "p-2.5"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  pill?: boolean
  iconOnly?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, pill, iconOnly, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, pill, iconOnly, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
