import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl border border-[color:var(--wedding-rsvp-field-border)] bg-[color:var(--wedding-rsvp-field)] px-4 py-3 text-sm text-[color:var(--wedding-rsvp-field-foreground)] ring-offset-white placeholder:text-[color:var(--wedding-rsvp-field-placeholder)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--wedding-focus-ring)]/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
