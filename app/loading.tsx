import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <Spinner size={56} className="text-black/80" />
      </div>
    </div>
  )
}
