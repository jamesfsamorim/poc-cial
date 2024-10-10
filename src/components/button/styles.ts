import { cva, type VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border rounded-full",
    {
      variants: {
        variant: {
          default: "bg-blue-500 text-neutral-100 hover:bg-blue-600 dark:bg-blue-700 dark:text-neutral-100 dark:hover:bg-blue-800",
          destructive: "bg-red-500 text-neutral-100 hover:bg-red-600 dark:bg-red-700 dark:text-neutral-100 dark:hover:bg-red-800",
          outline: "border-sm border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
          secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
          ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
          link: "text-blue-500 underline-offset-4 hover:underline dark:text-blue-400",
        },
        size: {
          default: "h-10 p-button text-base",
          sm: "h-9 p-button text-sm",
          lg: "h-11 p-button text-lg",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

  export type ButtonVariants = VariantProps<typeof buttonVariants>