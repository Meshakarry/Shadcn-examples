import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const fileInputVariants = cva(
  `
    flex items-center w-full rounded-lg outline outline-border cursor-pointer text-sm bg-transparent text-foreground
    focus-within:ring-3 focus-within:ring-primary-200
  `,
  {
    variants: {
      size: {
        xs: 'py-1 px-3 text-xs [&>span]:font-normal',
        sm: 'px-2 py-1.5',
        default: 'px-3 py-2',
        lg: 'px-4 py-2.5'
      },
      pill: {
        true: "rounded-full"
      },
      error: {
        true: "outline-destructive focus-within:ring-ring",
      }
    },
    defaultVariants: {
      size: "default",
    },
  }
) 

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof fileInputVariants> {
  onValueChange?: (file: File | null) => void;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(({ className, pill, size, value, onValueChange, ...props }, ref) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onValueChange?.(file);
  };

  return (
    <label htmlFor="file-input" className={cn(fileInputVariants({ size, pill, error: !value && props.required, className }))} tabIndex={0}>
      <span className="font-semibold">Choose File</span>
      <span className="ml-2" id="file-name">{ value ?? 'No file chosen' }</span>
      <input
        type="file"
        id="file-input"
        ref={ref}
        className="hidden"
        onChange={handleChange}
        { ...props }
      />
    </label>
  )
})

export default FileInput;
