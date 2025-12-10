"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Home, Wallet, ArrowUpRight, TrendingUp, Pickaxe, User, LogOut, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "deposit", label: "Deposit", icon: Wallet },
    { id: "withdraw", label: "Withdraw", icon: ArrowUpRight },
    { id: "trade", label: "Trade", icon: TrendingUp },
    { id: "mining", label: "LUM Mining", icon: Pickaxe },
    { id: "profile", label: "Profile", icon: User },
]

interface DashboardLayoutProps {
    children: React.ReactNode
    userName?: string
}

export default function DashboardLayout({ children, userName = "John Trader" }: DashboardLayoutProps) {
    const [activeTab, setActiveTab] = useState("dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [notificationCount, setNotificationCount] = useState(3)

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <aside
                className={cn(
                    "fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700/50 transition-transform duration-300 ease-out z-40",
                    "md:relative md:translate-x-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
                )}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-gray-900">
                            F
                        </div>
                        <span className="text-lg font-bold text-white">FinTrade</span>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white transition">
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navigationItems.map((item) => {
                        const Icon = item.icon
                        const isActive = activeTab === item.id

                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id)
                                    setSidebarOpen(false)
                                }}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                                    isActive
                                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                                        : "text-gray-400 hover:text-white hover:bg-gray-700/50",
                                )}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        )
                    })}
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-700/50">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur border-b border-gray-700/50 px-4 md:px-8 py-4 flex items-center justify-between">
                    {/* Hamburger Menu for Mobile */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden text-yellow-400 hover:text-yellow-300 transition"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo/Branding for Mobile */}
                    <div className="md:hidden flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-xs text-gray-900">
                            F
                        </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block" />

                    {/* User Info and Notifications */}
                    <div className="flex items-center gap-6">
                        {/* Notification Bell */}
                        <button className="relative text-gray-400 hover:text-yellow-400 transition">
                            <Bell size={24} />
                            {notificationCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {notificationCount}
                                </span>
                            )}
                        </button>

                        {/* User Name */}
                        <span className="hidden sm:inline text-gray-300 font-medium">{userName}</span>

                        {/* User Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-gray-900">
                            {userName.charAt(0)}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto bg-gray-900">{children}</main>
            </div>
        </div>
    )
}
