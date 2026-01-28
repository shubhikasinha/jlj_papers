import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'PUBLICATIONS', path: '/publications' },
        { name: 'EXPLORE', path: '/explore' },
        { name: 'STUDENT WRITING', path: '/student-writing' },
        { name: 'SUPREME COURT', path: '/supreme-court' },
        { name: 'FELLOWSHIP', path: '/fellowship' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SYMPOSIUM', path: '/symposium' },
    ]

    return (
        <header className="bg-[#771313]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main navbar */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src="/logo.png" alt="Journal for Law and Justice" className="h-12" />
                    </Link>

                    {/* Center Title Box - Hidden on mobile */}
                    <div className="hidden md:flex">
                        <div className="border border-white px-4 py-1.5">
                            <div className="text-white text-xs font-bold tracking-widest text-center">
                                JOURNAL FOR LAW<br />AND JUSTICE
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white text-xs font-medium tracking-wide hover:text-yellow-100 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Search Icon */}
                        <button className="text-white hover:text-yellow-100 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white hover:text-yellow-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-white text-sm font-medium px-3 py-2 rounded hover:bg-[#5a0f0f] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full text-left text-white text-sm font-medium px-3 py-2 rounded hover:bg-[#5a0f0f] transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                    </div>
                )}
            </div>

            {/* Breadcrumb for inner pages */}
            {location.pathname !== '/' && (
                <div className="bg-[#5a0f0f]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2 text-white text-xs">
                        <Link to="/" className="opacity-80 hover:opacity-100">Home</Link>
                        <span className="opacity-60">/</span>
                        {location.pathname === '/submissions' && <span>Submissions</span>}
                        {location.pathname === '/submit' && (
                            <>
                                <Link to="/submissions" className="opacity-80 hover:opacity-100">Submissions</Link>
                                <span className="opacity-60">/</span>
                                <span>Submit Now</span>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
