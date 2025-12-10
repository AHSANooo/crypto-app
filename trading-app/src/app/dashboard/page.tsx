"use client"

import DashboardLayout from "@/components/dashboard-layout"

export default function Home() {
    return (
        <DashboardLayout userName="Sarah Mitchell">
            <div className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Balance Card */}
                    <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6 hover:border-yellow-500/30 transition">
                        <p className="text-gray-400 text-sm mb-2">Total Balance</p>
                        <h3 className="text-2xl font-bold text-white">$24,580.50</h3>
                        <p className="text-yellow-400 text-sm mt-2">+5.2% this week</p>
                    </div>

                    {/* Portfolio Card */}
                    <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6 hover:border-yellow-500/30 transition">
                        <p className="text-gray-400 text-sm mb-2">Portfolio Value</p>
                        <h3 className="text-2xl font-bold text-white">$156,420.00</h3>
                        <p className="text-red-400 text-sm mt-2">-2.1% this month</p>
                    </div>

                    {/* Active Trades Card */}
                    <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6 hover:border-yellow-500/30 transition">
                        <p className="text-gray-400 text-sm mb-2">Active Trades</p>
                        <h3 className="text-2xl font-bold text-white">8</h3>
                        <p className="text-gray-400 text-sm mt-2">All positions healthy</p>
                    </div>

                    {/* Available Funds Card */}
                    <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6 hover:border-yellow-500/30 transition">
                        <p className="text-gray-400 text-sm mb-2">Available Funds</p>
                        <h3 className="text-2xl font-bold text-white">$12,350.75</h3>
                        <p className="text-gray-400 text-sm mt-2">Ready to invest</p>
                    </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-3">
                        {[
                            { type: "Buy", asset: "Bitcoin (BTC)", amount: "+0.25 BTC", price: "$10,250.00", time: "2 hours ago" },
                            { type: "Sell", asset: "Ethereum (ETH)", amount: "-5 ETH", price: "$18,750.00", time: "5 hours ago" },
                            { type: "Deposit", asset: "USD Wallet", amount: "+$5,000.00", price: "Confirmed", time: "1 day ago" },
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700/30"
                            >
                                <div className="flex-1">
                                    <p className="font-medium text-white">
                                        {activity.type}: {activity.asset}
                                    </p>
                                    <p className="text-gray-400 text-sm">{activity.amount}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-yellow-400">{activity.price}</p>
                                    <p className="text-gray-400 text-sm">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
