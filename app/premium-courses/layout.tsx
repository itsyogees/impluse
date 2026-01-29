import PremiumCoursesHeader from "@/components/ui/PremiumCoursesHeader"


export default function PremiumCoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <PremiumCoursesHeader />
      {children}
    </div>
  )
}
