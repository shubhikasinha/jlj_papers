import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
// REMOVED: import { BlocksRenderer } ... (This was causing the crash)

const HomePage = ({ papers }) => {
    
    // --- STATIC DATA ---
    const appendixArticles = [
        { category: 'APPENDIX', title: 'Appendix to Practical Consequences...', description: '...' },
        { category: 'APPENDIX', title: 'Appendix to Practical Consequences...', description: '...' },
    ]
    const recentCases = [
        { category: 'ANTITRUST', type: 'RECENT CASE', title: 'Cangrejeros de Santurce...', description: '...' },
        { category: 'CONSTITUTIONAL LAW', type: 'RECENT CASE', title: 'United States v. Duarte', description: '...' },
    ]
    const forumArticles = [
        { category: 'CRIMINAL JUSTICE', type: 'FELLOWSHIP ESSAY', title: 'Qualified Immunity...', author: 'SIMONE WALLER' },
        { category: 'FIRST AMENDMENT/SPEECH', type: 'ESSAY', title: '"Our Money or Your Life!"...', author: 'CASS R. SUNSTEIN' },
    ]
    const blogArticles = [
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption...', date: 'January 15, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption...', date: 'January 17, 2026', author: 'J. B. BRANCH' },
    ]
    const exploreTopics = ['CONSTITUTIONAL LAW', 'CRIMINAL LAW', 'ABORTION', 'FOURTEENTH AMENDMENT', 'FAMILY LAW']
    const archiveArticles = [
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
    ]
    const essays = [
        { category: 'ARTICLE III', type: 'ESSAY', title: 'Interim Orders...', author: 'JACK GOLDSMITH' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ESSAY', title: 'Originalism\'s Age...', author: 'SHERIF GIRGIS' },
    ]
    const bookReviews = [
        { category: 'ABORTION LAW', type: 'BOOK REVIEW', title: 'How to Get Free...', author: 'KIMBERLY MUTCHERSON' },
        { category: 'BANKRUPTCY', type: 'BOOK REVIEW', title: 'Who\'s Afraid of Bankruptcy', author: 'ABBYE ATKINSON' },
    ]
    const tributes = [
        { category: 'IN MEMORIAM', type: 'TRIBUTE', title: 'In Memoriam: Justice David H. Souter', authors: '' },
        { category: 'IN MEMORIAM', type: 'TRIBUTE', title: 'In Memoriam: Professor Charles Fried', authors: 'STEPHEN...' },
    ]
    const recentlyCited = [
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section style={{ backgroundColor: '#e8e4db', padding: '2rem 1rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'white', border: '1px solid #ddd', padding: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                            <svg style={{ width: '12px', height: '12px', color: '#999', margin: '0 auto' }} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l4 8-4 8-4-8z" />
                            </svg>
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '8px' }}>SUPREME COURT</p>
                        <h1 style={{ fontSize: '20px', fontFamily: 'serif', color: '#4b3342', textAlign: 'center', marginBottom: '12px' }}>
                            Practical Consequences in Statutory Interpretation
                        </h1>
                        <p style={{ color: '#949494', fontSize: '12px', textAlign: 'center', lineHeight: '1.6' }}>
                            Modern textualism has long criticized the use of practical, or consequentialist, reasoning when construing statutes. And yet in practice, textualist jurists long have invoked practical consequences arguments to help justify their statutory constructions.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- LATEST PUBLICATIONS (CRASH FREE VERSION) --- */}
            <section style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ width: '4px', height: '24px', backgroundColor: '#771313', marginRight: '12px' }}></div>
                        <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', margin: 0 }}>
                            Latest Publications (Live)
                        </h2>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        {papers && papers.length > 0 ? (
                            papers.map((paper) => {
                                const title = paper.Title || paper.title || "Untitled Paper";
                                const author = paper.Author || paper.author || "Unknown Author";
                                // Fallback to content or description
                                const content = paper.Content || paper.content || paper.Description || paper.description || "No content available";

                                return (
                                    <div key={paper.id} style={{ backgroundColor: 'white', padding: '2rem', border: '1px solid #eee', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                                        <p style={{ fontSize: '9px', marginBottom: '6px' }}>
                                            <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>NEW ARTICLE</span>
                                        </p>
                                        
                                        <h3 style={{ fontSize: '20px', fontFamily: 'serif', color: '#4b3342', marginBottom: '12px', fontWeight: '500' }}>
                                            {title}
                                        </h3>

                                        {/* --- SIMPLE TEXT RENDERER --- */}
                                        <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', marginBottom: '16px', whiteSpace: 'pre-wrap' }}>
                                            {/* We just display the text directly. No BlocksRenderer. */}
                                            {typeof content === 'string' ? content : "Content format not supported"}
                                        </div>
                                        {/* --------------------------- */}
                                        <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', marginBottom: '16px' }}>
    {/* This turns "## Title" into a real Heading automatically */}
    <Markdown>{content}</Markdown>
</div>

                                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                                            By {author}
                                        </p>
                                    </div>
                                );
                            })
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#949494', fontStyle: 'italic' }}>
                                Loading papers...
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Appendix Articles Grid */}
            <section style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {appendixArticles.map((article, index) => (
                            <div key={index} style={{ borderTop: '2px solid #ddd', paddingTop: '1rem' }}>
                                <p style={{ color: '#949494', fontSize: '9px', fontWeight: '500', letterSpacing: '0.1em', marginBottom: '8px' }}>{article.category}</p>
                                <h3 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '8px', cursor: 'pointer', fontWeight: '500' }} className="hover:text-[#771313]">
                                    {article.title}
                                </h3>
                                <p style={{ color: '#949494', fontSize: '9px', lineHeight: '1.5' }}>
                                    {article.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {recentCases.map((item, index) => (
                            <div key={index}>
                                <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                    <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{item.category}</span>
                                    <span style={{ color: '#949494' }}> • </span>
                                    <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{item.type}</span>
                                </p>
                                <h3 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', marginBottom: '4px', cursor: 'pointer', fontWeight: '500' }} className="hover:text-[#771313]">
                                    {item.title}
                                </h3>
                                <p style={{ color: '#949494', fontSize: '9px', lineHeight: '1.5' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
             <section style={{ padding: '2.5rem 1rem', backgroundColor: '#f5f5f5' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', textAlign: 'center', marginBottom: '1rem' }}>
                        About the <span style={{ fontStyle: 'italic', color: '#771313' }}>JLJ</span> Call For Paper Review
                    </h2>
                    <p style={{ color: '#949494', fontSize: '12px', textAlign: 'center', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        The JLJ is a student-run journal of legal scholarship...
                    </p>
                </div>
            </section>
        </div>
    )
}

export default HomePage