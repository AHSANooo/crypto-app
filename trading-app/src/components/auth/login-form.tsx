"use client"

import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

import { useRouter } from 'next/navigation'

export function LoginForm({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Please fill in all fields')
            return
        }
        setError('')
        // Mock submission
        console.log('Login:', { email, password })
        router.push('/dashboard')
    }

    return (
        <div className="w-full max-w-md mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-gray-400">Sign in to your premium account</p>
            </div>

            {/* Form Card - Glassmorphism */}
            <form
                onSubmit={handleSubmit}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-700/50 rounded-2xl p-8 space-y-6"
            >
                {/* Error Message */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <p className="text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5 text-gray-500 hover:text-yellow-500 transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                    <a
                        href="#"
                        className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                        Forgot Password?
                    </a>
                </div>

                {/* Sign In Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-yellow-500/30 active:scale-95"
                >
                    Sign In
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-700"></div>
                    <span className="text-xs text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-700"></div>
                </div>

                {/* Switch to Signup */}
                <p className="text-center text-gray-400">
                    Don't have an account?{' '}
                    <button
                        type="button"
                        onClick={onSwitchToSignup}
                        className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
                    >
                        Sign Up
                    </button>
                </p>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-gray-600 mt-6">
                By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
        </div>
    )
}
