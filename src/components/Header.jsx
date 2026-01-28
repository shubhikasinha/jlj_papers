import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    const navLinks = [
        { name: 'PUBLICATIONS', path: '/publications' },
        { name: 'EXPLORE', path: '/explore', hasDropdown: true },
        { name: 'STUDENT WRITING', path: '/student-writing', hasDropdown: true },
        { name: 'SUPREME COURT', path: '/supreme-court', hasDropdown: true },
        { name: 'FELLOWSHIP', path: '/fellowship', hasDropdown: true },
        { name: 'ABOUT', path: '/about', hasDropdown: true },
        { name: 'SYMPOSIUM', path: '/symposium' },
    ]

    return (
        <header style={{ backgroundColor: '#771313' }}>
            <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
                    {/* Logo */}
                    <Link to="/" style={{ flexShrink: 0 }}>
                        <img src="/logo.png" alt="Journal for Law and Justice" style={{ height: '48px' }} />
                    </Link>

                    {/* Center Title Box */}
                    <div style={{ display: 'none' }} className="md:block">
                        <div style={{ border: '1px solid white', padding: '6px 16px' }}>
                            <div style={{ color: 'white', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textAlign: 'center' }}>
                                JOURNAL FOR LAW<br />AND JUSTICE
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div style={{ display: 'none' }} className="md:flex items-center gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{ color: 'white', fontSize: '9px', fontWeight: '500', letterSpacing: '0.05em', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px' }}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <svg style={{ width: '8px', height: '8px', marginLeft: '2px' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 10l5 5 5-5z" />
                                    </svg>
                                )}
                            </Link>
                        ))}
                        {/* Search Icon */}
                        <button style={{ color: 'white', marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }} className="md:hidden">
                        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Breadcrumb for inner pages */}
            {location.pathname !== '/' && (
                <div style={{ backgroundColor: '#5a0f0f', color: 'white', fontSize: '10px', padding: '6px 16px' }}>
                    <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Link to="/" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Home</Link>
                        <span style={{ opacity: 0.6 }}>/</span>
                        {location.pathname === '/submissions' && <span>Submissions</span>}
                        {location.pathname === '/submit' && (
                            <>
                                <Link to="/submissions" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Submissions</Link>
                                <span style={{ opacity: 0.6 }}>/</span>
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
