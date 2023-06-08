import { Skeleton } from "@/components/ui/skeleton"

export const BadgesSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-24 w-24 rounded-full bg-branding-sand" />
      <Skeleton className="mt-1 h-5 bg-branding-sand" />
    </div>
  )
}
