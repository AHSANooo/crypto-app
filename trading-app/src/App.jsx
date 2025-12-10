import { useState } from 'react'
import { LoginForm } from './pages/login-form'
import { SignupForm } from './pages/signup-form'

function App() {
    const [currentPage, setCurrentPage] = useState('login')

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-yellow-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="w-full relative z-10">
                {currentPage === 'login' ? (
                    <LoginForm onSwitchToSignup={() => setCurrentPage('signup')} />
                ) : (
                    <SignupForm onSwitchToLogin={() => setCurrentPage('login')} />
                )}
            </div>
        </div>
    )
}

export default App
