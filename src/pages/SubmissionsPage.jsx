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
        <div className="bg-white min-h-screen">
            {/* Page Title */}
            <section className="py-6 text-center">
                <h1 className="text-xl font-serif text-[#4b3342]">Submissions</h1>
            </section>

            {/* Print & Forum Submissions */}
            <section className="pb-5">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-sm font-serif text-[#4b3342] mb-2">Print & Forum Submissions</h2>
                    <p className="text-[#949494] text-[10px] leading-relaxed">
                        Submissions to the Journal of Law and Justice follow a rigorous peer review process.
                        We welcome articles that contribute to legal scholarship across diverse fields including
                        constitutional law, international law, criminal justice, and emerging areas of legal study.
                    </p>
                </div>
            </section>

            {/* Submission Guidelines */}
            <section className="py-5">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-sm font-serif text-[#4b3342] mb-4 text-center">Submission Guidelines</h2>
                    <ol className="space-y-1.5">
                        {submissionGuidelines.map((guideline, index) => (
                            <li key={index} className="flex gap-2 text-[10px]">
                                <span className="text-[#771313] font-medium min-w-[14px]">{index + 1}.</span>
                                <span className="text-[#949494] leading-relaxed">{guideline}</span>
                            </li>
                        ))}
                    </ol>

                    {/* Submit Now Button */}
                    <div className="text-center mt-6">
                        <Link
                            to="/submit"
                            className="inline-block bg-[#4b3342] text-white px-5 py-1.5 text-[10px] font-medium hover:bg-[#3a2835] transition-colors"
                        >
                            Submit Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Formatting Guidelines */}
            <section className="py-5 border-t border-[#e8e4db]">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-sm font-serif text-[#4b3342] mb-4 text-center">Formatting Guidelines</h2>

                    <div className="text-[10px] text-[#949494] leading-relaxed space-y-3">
                        <p>
                            <span className="text-[#771313] font-medium">1.</span> All citations should follow The Bluebook: A Uniform System of Citation (21st edition).
                            Use footnotes rather than endnotes.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">2.</span> Text should be double-spaced in 12-point Times New Roman font with one-inch margins.
                            Footnotes may be single-spaced.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">3.</span> Please do not include headers, footers, or page numbers in your submission.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">4.</span> Tables, figures, and appendices should be submitted as separate files when possible.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">5.</span> The title page should include: title, author name(s), institutional affiliation(s), and contact information.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">6.</span> Use American English spelling and punctuation conventions.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">7.</span> Section headings should follow a consistent hierarchy: Roman numerals for main sections.
                        </p>

                        <p>
                            <span className="text-[#771313] font-medium">8.</span> Authors are responsible for obtaining permission to reproduce any copyrighted material.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="mt-6 text-[10px] text-[#949494]">
                        Questions? Contact: <a href="mailto:submissions@jlj.org" className="text-[#771313] hover:underline">submissions@jlj.org</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SubmissionsPage
