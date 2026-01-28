import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#771313] text-white">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="grid grid-cols-3 gap-8">
                    {/* Archives */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Archives</h3>
                        <ul className="space-y-1.5 text-[10px] text-white/80">
                            <li><Link to="/print" className="hover:text-white">PRINT</Link></li>
                            <li><Link to="/forum" className="hover:text-white">FORUM</Link></li>
                            <li><Link to="/blog" className="hover:text-white">BLOG</Link></li>
                            <li><Link to="/subscribe" className="text-white hover:underline">SUBSCRIBE →</Link></li>
                        </ul>
                    </div>

                    {/* Fellowship */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Fellowship</h3>
                        <ul className="space-y-1.5 text-[10px] text-white/80">
                            <li><Link to="/about-fellowship" className="hover:text-white">ABOUT</Link></li>
                            <li><Link to="/fellowship-essays" className="hover:text-white">FELLOWSHIP ESSAYS</Link></li>
                            <li><Link to="/fellows" className="hover:text-white">MEET THE FELLOWS</Link></li>
                            <li><Link to="/apply" className="text-white hover:underline">APPLY →</Link></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">About</h3>
                        <ul className="space-y-1.5 text-[10px] text-white/80">
                            <li><Link to="/board" className="hover:text-white underline">BOARD OF EDITORS</Link></li>
                            <li><Link to="/history" className="hover:text-white">ORGANIZATION & HISTORY</Link></li>
                            <li><Link to="/submit" className="hover:text-white underline">SUBMIT</Link></li>
                            <li><Link to="/writing-competition" className="text-white hover:underline">WRITING COMPETITION →</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 py-4">
                <div className="max-w-5xl mx-auto px-4 text-center text-[10px] text-white/70">
                    Copyright © 1887-2026 Harvard Law Review. All Rights Reserved. <span className="underline cursor-pointer">Accessibility</span>.
                </div>
            </div>
        </footer>
    )
}

export default Footer
