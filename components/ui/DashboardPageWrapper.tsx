import { Search, Bell, Star } from 'lucide-react'

interface DashboardPageWrapperProps {
    title: string
    children: React.ReactNode
}

export default function DashboardPageWrapper({ title, children }: DashboardPageWrapperProps) {
    return (
        <main className="p-4 md:p-8 w-full overflow-x-hidden">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <h1 className="font-cinzel text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
                </div>
                <div className="flex gap-3 md:gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <button className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent-gold transition">
                        <Search className="w-5 h-5 text-text-secondary" />
                    </button>
                    <button className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent-gold transition relative">
                        <Bell className="w-5 h-5 text-text-secondary" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold">
                            3
                        </span>
                    </button>
                    <button className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent-gold transition">
                        <Star className="w-5 h-5 text-text-secondary" />
                    </button>
                </div>
            </div>

            {/* Page Content */}
            <div className="min-h-[60vh]">
                {children}
            </div>
        </main>
    )
}
