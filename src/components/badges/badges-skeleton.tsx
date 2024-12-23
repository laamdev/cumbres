import { Skeleton } from "@/components/ui/skeleton"

export const BadgesSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton className="h-24 w-24 rounded-full bg-branding-yellow" />
      <Skeleton className="mt-2 h-4 w-16 bg-branding-yellow" />
    </div>
  )
}
