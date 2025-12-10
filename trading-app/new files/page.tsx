"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Wallet, ArrowUpRight, TrendingUp, Pickaxe } from "lucide-react"

const marketData = [
    { symbol: "Gold (XAU/USD)", price: "$2,045.30", change: "+0.32%" },
    { symbol: "Bitcoin (BTC)", price: "$42,150.75", change: "+2.15%" },
]

const transactions = [
    { type: "Deposit", amount: "$500.00", status: "Pending" },
    { type: "Deposit", amount: "$1,200.00", status: "Approved" },
    { type: "Withdrawal", amount: "$300.00", status: "Approved" },
]

export default function Home() {
    return (
        <DashboardLayout userName="Sarah Mitchell">
            <div className="p-6 md:p-8 space-y-6">
                <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-8 hover:border-yellow-500/30 transition">
                    <p className="text-gray-400 text-sm mb-2">Total Balance</p>
                    <h2 className="text-5xl font-bold text-yellow-400">$0.00</h2>
                    <p className="text-gray-400 text-sm mt-4">Wallet Ready to Trade</p>
                </div>

                <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                    <button className="w-20 h-20 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex flex-col items-center justify-center hover:bg-yellow-500/30 transition-all duration-200 group">
                        <Wallet size={24} className="text-yellow-400 group-hover:text-yellow-300" />
                        <span className="text-xs text-gray-400 mt-1 group-hover:text-yellow-400">Deposit</span>
                    </button>
                    <button className="w-20 h-20 rounded-full bg-gray-700/50 border border-gray-600/50 flex flex-col items-center justify-center hover:bg-gray-700/70 transition-all duration-200 group">
                        <ArrowUpRight size={24} className="text-gray-400 group-hover:text-white" />
                        <span className="text-xs text-gray-400 mt-1 group-hover:text-white">Withdraw</span>
                    </button>
                    <button className="w-20 h-20 rounded-full bg-gray-700/50 border border-gray-600/50 flex flex-col items-center justify-center hover:bg-gray-700/70 transition-all duration-200 group">
                        <TrendingUp size={24} className="text-gray-400 group-hover:text-white" />
                        <span className="text-xs text-gray-400 mt-1 group-hover:text-white">Trade</span>
                    </button>
                    <button className="w-20 h-20 rounded-full bg-gray-700/50 border border-gray-600/50 flex flex-col items-center justify-center hover:bg-gray-700/70 transition-all duration-200 group">
                        <Pickaxe size={24} className="text-gray-400 group-hover:text-white" />
                        <span className="text-xs text-gray-400 mt-1 group-hover:text-white">Mining</span>
                    </button>
                </div>

                <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Market Ticker</h3>
                    <div className="space-y-3">
                        {marketData.map((market, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/30"
                            >
                                <span className="font-medium text-white">{market.symbol}</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-yellow-400 font-semibold">{market.price}</span>
                                    <span className="text-green-400 text-sm">{market.change}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-700/30">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-400 text-sm">Type</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-400 text-sm">Amount</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-400 text-sm">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((tx, index) => (
                                    <tr key={index} className="border-b border-gray-700/20 hover:bg-gray-700/20 transition">
                                        <td className="py-3 px-4 text-white">{tx.type}</td>
                                        <td className="py-3 px-4 text-yellow-400 font-semibold">{tx.amount}</td>
                                        <td className="py-3 px-4">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tx.status === "Pending"
                                                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                                                        : "bg-green-500/20 text-green-400 border border-green-500/50"
                                                    }`}
                                            >
                                                {tx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
