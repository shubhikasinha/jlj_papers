import { Link } from 'react-router-dom'

const SubmissionsPage = () => {
    const submissionGuidelines = [
        'If you have submitted articles to the Review before, your file is already in our system. You may send your new submission in an email.',
        'First-time submissions are preferred submitted through the online portal. Please complete all required fields.',
        'By submitting, you confirm that the article is original and has not been published or submitted elsewhere.',
        'The submission and review process typically takes 6-8 weeks. You will be notified of decisions via email.',
        'Your submission should be in PDF or Word format. Please include all supplementary materials.',
        'Authors must provide accurate contact information and institutional affiliations.',
        'Students should indicate their law school and expected graduation date.',
        'The Review reserves the right to edit submissions for clarity and style consistency.',
        'Submissions should generally be between 8,000-25,000 words including footnotes.',
        'Please include an abstract of no more than 300 words summarizing your main arguments.',
    ]

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            {/* Page Title */}
            <section style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '28px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500' }}>Submissions</h1>
            </section>

            {/* Print & Forum Submissions */}
            <section style={{ paddingBottom: '1.5rem' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '12px', fontWeight: '500' }}>Print & Forum Submissions</h2>
                    <p style={{ color: '#949494', fontSize: '12px', lineHeight: '1.6' }}>
                        Submissions to the Journal of Law and Justice follow a rigorous peer review process. We welcome articles that contribute to legal scholarship across diverse fields including constitutional law, international law, criminal justice, and emerging areas of legal study.
                    </p>
                </div>
            </section>

            {/* Submission Guidelines */}
            <section style={{ padding: '1.5rem 1rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '1rem', textAlign: 'center', fontWeight: '500' }}>Submission Guidelines</h2>
                    <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {submissionGuidelines.map((guideline, index) => (
                            <li key={index} style={{ display: 'flex', gap: '8px', fontSize: '12px' }}>
                                <span style={{ color: '#771313', fontWeight: '500', minWidth: '20px', flexShrink: 0 }}>{index + 1}.</span>
                                <span style={{ color: '#949494', lineHeight: '1.6' }}>{guideline}</span>
                            </li>
                        ))}
                    </ol>

                    {/* Submit Now Button */}
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <Link
                            to="/submit"
                            style={{ display: 'inline-block', backgroundColor: '#4b3342', color: 'white', padding: '8px 20px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', textDecoration: 'none' }}
                            className="hover:bg-[#3a2835]"
                        >
                            SUBMIT NOW
                        </Link>
                    </div>
                </div>
            </section>

            {/* Formatting Guidelines */}
            <section style={{ padding: '1.5rem 1rem', borderTop: '1px solid #e8e4db' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '1rem', textAlign: 'center', fontWeight: '500' }}>Formatting Guidelines</h2>

                    <div style={{ fontSize: '12px', color: '#949494', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            'All citations should follow The Bluebook: A Uniform System of Citation (21st edition). Use footnotes rather than endnotes.',
                            'Text should be double-spaced in 12-point Times New Roman font with one-inch margins. Footnotes may be single-spaced.',
                            'Please do not include headers, footers, or page numbers in your submission.',
                            'Tables, figures, and appendices should be submitted as separate files when possible.',
                            'The title page should include: title, author name(s), institutional affiliation(s), and contact information.',
                            'Use American English spelling and punctuation conventions.',
                            'Section headings should follow a consistent hierarchy: Roman numerals for main sections.',
                            'Authors are responsible for obtaining permission to reproduce any copyrighted material.',
                        ].map((guideline, index) => (
                            <p key={index}>
                                <span style={{ color: '#771313', fontWeight: '500', marginRight: '8px' }}>{index + 1}.</span>
                                {guideline}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SubmissionsPage
