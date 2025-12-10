"use client"

import { useState } from 'react'
import { Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react'

export function SignupForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | null>(null)

    // Simple password strength calculator
    const calculatePasswordStrength = (pwd: string) => {
        if (pwd.length < 6) return null
        if (pwd.length < 8) return 'weak'
        if (pwd.length >= 12 || /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return 'strong'
        return 'medium'
    }

    const handlePasswordChange = (pwd: string) => {
        setPassword(pwd)
        setPasswordStrength(calculatePasswordStrength(pwd))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!fullName || !email || !password || !confirmPassword) {
            setError('Please fill in all fields')
            return
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters')
            return
        }

        setError('')
        // Mock submission
        console.log('Signup:', { fullName, email, password })
    }

    const strengthColor = {
        weak: 'bg-red-500',
        medium: 'bg-yellow-500',
        strong: 'bg-green-500'
    }

    const strengthLabel = {
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong'
    }

    return (
        <div className="w-full max-w-md mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
                <p className="text-gray-400">Join our premium financial platform</p>
            </div>

            {/* Form Card - Glassmorphism */}
            <form
                onSubmit={handleSubmit}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-700/50 rounded-2xl p-8 space-y-5"
            >
                {/* Error Message */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <p className="text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {/* Full Name Field */}
                <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-white">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                        <input
                            id="fullName"
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all"
                        />
                    </div>
                </div>

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
                            onChange={(e) => handlePasswordChange(e.target.value)}
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

                    {/* Password Strength Indicator */}
                    {passwordStrength && (
                        <div className="space-y-1">
                            <div className="flex gap-1">
                                <div className={`h-1 flex-1 rounded-full ${passwordStrength === 'weak' || passwordStrength === 'medium' || passwordStrength === 'strong' ? strengthColor[passwordStrength] : 'bg-gray-700'}`}></div>
                                <div className={`h-1 flex-1 rounded-full ${passwordStrength === 'medium' || passwordStrength === 'strong' ? strengthColor[passwordStrength] : 'bg-gray-700'}`}></div>
                                <div className={`h-1 flex-1 rounded-full ${passwordStrength === 'strong' ? strengthColor[passwordStrength] : 'bg-gray-700'}`}></div>
                            </div>
                            <p className={`text-xs font-medium ${strengthColor[passwordStrength].replace('bg-', 'text-')}`}>
                                {strengthLabel[passwordStrength]} password
                            </p>
                        </div>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/20 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3.5 text-gray-500 hover:text-yellow-500 transition-colors"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                        {confirmPassword && password === confirmPassword && (
                            <Check className="absolute right-12 top-3.5 w-5 h-5 text-green-500" />
                        )}
                    </div>
                </div>

                {/* Sign Up Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-yellow-500/30 active:scale-95"
                >
                    Create Account
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-700"></div>
                    <span className="text-xs text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-700"></div>
                </div>

                {/* Switch to Login */}
                <p className="text-center text-gray-400">
                    Already have an account?{' '}
                    <button
                        type="button"
                        onClick={onSwitchToLogin}
                        className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
                    >
                        Sign In
                    </button>
                </p>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-gray-600 mt-6">
                By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
        </div>
    )
}
