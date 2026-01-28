import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#771313', color: 'white', marginTop: 'auto' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                    {/* Archives */}
                    <div>
                        <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>Archives</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li><Link to="/print" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">PRINT</Link></li>
                            <li><Link to="/forum" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">FORUM</Link></li>
                            <li><Link to="/blog" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">BLOG</Link></li>
                            <li><Link to="/subscribe" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">SUBSCRIBE →</Link></li>
                        </ul>
                    </div>

                    {/* Fellowship */}
                    <div>
                        <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>Fellowship</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li><Link to="/about-fellowship" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">ABOUT</Link></li>
                            <li><Link to="/fellowship-essays" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">FELLOWSHIP ESSAYS</Link></li>
                            <li><Link to="/fellows" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">MEET THE FELLOWS</Link></li>
                            <li><Link to="/apply" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">APPLY →</Link></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>About</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li><Link to="/board" style={{ color: 'white', fontSize: '10px', textDecoration: 'underline' }} className="hover:text-opacity-80">BOARD OF EDITORS</Link></li>
                            <li><Link to="/history" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">ORGANIZATION & HISTORY</Link></li>
                            <li><Link to="/submit" style={{ color: 'white', fontSize: '10px', textDecoration: 'underline' }} className="hover:text-opacity-80">SUBMIT</Link></li>
                            <li><Link to="/writing-competition" style={{ color: 'white', fontSize: '10px', textDecoration: 'none' }} className="hover:underline">WRITING COMPETITION →</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', padding: '1rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center', fontSize: '10px', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Copyright © 1887-2026 Harvard Law Review. All Rights Reserved. <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Accessibility</span>.
                </div>
            </div>
        </footer>
    )
}

export default Footer
