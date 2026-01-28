import { Link } from 'react-router-dom'

const HomePage = () => {
    // Appendix Articles
    const appendixArticles = [
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
    ]

    // Recent Cases
    const recentCases = [
        { category: 'ANTITRUST', type: 'RECENT CASE', title: 'Cangrejeros de Santurce Baseball Club, LLC v. Liga de Béisbol Profesional de Puerto Rico, Inc.', description: 'baseball isn\'t unique only for being "America\'s pastime." It is also unique because activities involving the "business . . . of baseball" are exempt from federal antitrust laws on the ground that they are not interstate commerce. This "business of...' },
        { category: 'CONSTITUTIONAL LAW', type: 'RECENT CASE', title: 'United States v. Duarte', description: 'After New York State Rifle & Pistol Ass\'n v. Bruen, 825032 challenges proliferate. Enacted as the "centerpiece" of the Gun Control Act of 1968, 18 U.S.C. § 922(g) categorically bars certain classes of individuals from possessing firearms...' },
        { category: 'FEDERAL COMMON LAW', type: 'RECENT CASE', title: 'Elam v. Early', description: 'Courts often consult extrajudicial, preinflation sources such as Blackstone\'s Commentaries and The Spirit of Justinian when rendering decisions in common law actions. These authorities can help guide courts in cases where a state\'s common law may...' },
        { category: 'ANTITRUST', type: 'RECENT CASE', title: 'Cangrejeros de Santurce Baseball Club, LLC v. Liga de Béisbol Profesional de Puerto Rico, Inc.', description: 'baseball isn\'t unique only for being "America\'s pastime." It is also unique because activities involving the "business . . . of baseball" are exempt from federal antitrust laws on the ground that they are not interstate commerce. This "business of...' },
    ]

    // Forum Articles
    const forumArticles = [
        { category: 'CRIMINAL JUSTICE', type: 'FELLOWSHIP ESSAY', title: 'Qualified Immunity for "Just Following Orders"', author: 'SIMONE WALLER' },
        { category: 'FIRST AMENDMENT/SPEECH', type: 'ESSAY', title: '"Our Money or Your Life!" Higher Education and the First Amendment', author: 'CASS R. SUNSTEIN' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
    ]

    // Blog Articles
    const blogArticles = [
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 15, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 17, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 17, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 17, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 15, 2026', author: 'J. B. BRANCH' },
    ]

    // Explore Topics
    const exploreTopics = ['CONSTITUTIONAL LAW', 'CRIMINAL LAW', 'ABORTION', 'FOURTEENTH AMENDMENT', 'FAMILY LAW']

    // Archive Articles
    const archiveArticles = [
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
    ]

    const essays = [
        { category: 'ARTICLE III', type: 'ESSAY', title: 'Interim Orders, the Presidency, and Judicial Supremacy', author: 'JACK GOLDSMITH' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ESSAY', title: 'Originalism\'s Age of Ironies', author: 'SHERIF GIRGIS' },
    ]

    const bookReviews = [
        { category: 'ABORTION LAW', type: 'BOOK REVIEW', title: 'How to Get Free in a Time of Retrenchment', author: 'KIMBERLY MUTCHERSON' },
        { category: 'BANKRUPTCY', type: 'BOOK REVIEW', title: 'Who\'s Afraid of Bankruptcy', author: 'ABBYE ATKINSON' },
    ]

    const tributes = [
        { category: 'IN MEMORIAM', type: 'TRIBUTE', title: 'In Memoriam: Justice David H. Souter', authors: '' },
        { category: 'IN MEMORIAM', type: 'TRIBUTE', title: 'In Memoriam: Professor Charles Fried', authors: 'STEPHEN BREYER • JOHN C.P. GOLDBERG • RICHARD J. LAZARUS • MARTHA MINOW • STEPHEN E. SACHS' },
    ]

    const recentlyCited = [
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
    ]

    return (
        <div className="bg-white">
            {/* Hero Section - Featured Article */}
            <section className="bg-[#e8e4db] py-8">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white border border-gray-300 p-6">
                        {/* Diamond Icon */}
                        <div className="flex justify-center mb-3">
                            <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l4 8-4 8-4-8z" />
                            </svg>
                        </div>
                        <p className="text-[#771313] text-[10px] font-bold tracking-widest text-center mb-2">SUPREME COURT</p>
                        <h1 className="text-xl font-serif text-[#4b3342] text-center mb-3">
                            Practical Consequences in Statutory Interpretation
                        </h1>
                        <p className="text-[#949494] text-xs text-center leading-relaxed">
                            Modern textualism has long criticized the use of practical, or consequentialist,
                            reasoning when construing statutes. And yet in practice, textualist jurists long
                            have invoked practical consequences arguments to help justify their statutory
                            constructions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Appendix Articles Grid */}
            <section className="py-8 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                        {appendixArticles.map((article, index) => (
                            <div key={index} className="border-t-2 border-gray-200 pt-4">
                                <p className="text-[#949494] text-[9px] font-medium tracking-widest mb-2">{article.category}</p>
                                <h3 className="text-base font-serif text-[#4b3342] mb-2 leading-snug hover:text-[#771313] cursor-pointer">
                                    {article.title}
                                </h3>
                                <p className="text-[#949494] text-[9px] leading-relaxed">
                                    {article.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Cases */}
            <section className="py-8 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                        {recentCases.map((item, index) => (
                            <div key={index}>
                                <p className="text-[9px] mb-1">
                                    <span className="text-[#771313] font-bold tracking-wide">{item.category}</span>
                                    <span className="text-[#949494]"> • </span>
                                    <span className="text-[#949494] tracking-wide">{item.type}</span>
                                </p>
                                <h3 className="text-sm font-serif text-[#4b3342] mb-1 leading-snug hover:text-[#771313] cursor-pointer font-medium">
                                    {item.title}
                                </h3>
                                <p className="text-[#949494] text-[9px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the JLJ Call For Paper Review */}
            <section className="py-10 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-serif text-[#4b3342] text-center mb-4">
                        About the <span className="italic text-[#771313]">JLJ</span> Call For Paper Review
                    </h2>
                    <p className="text-[#949494] text-xs text-center leading-relaxed mb-6 max-w-3xl mx-auto">
                        The JLJ is a student-run journal of legal scholarship. The <span className="italic">Review</span> is independent from
                        the Delhi University and a <span className="text-[#771313] underline cursor-pointer">board of student editors</span> selected through an anonymous annual writing competition
                        make all editorial decisions. The print <span className="italic">Review</span> and its online companion, the <span className="italic">Forum</span>, are published monthly from
                        November through June. The <span className="italic text-[#771313]">Review</span>, the <span className="italic text-[#771313]">Forum</span>, and online<span className="italic text-[#771313]">Blog</span> welcome submissions throughout the year.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-2 mb-6">
                        <Link to="/submissions" className="bg-[#4b3342] text-white px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-[#3a2835]">
                            SUBMISSIONS
                        </Link>
                        <button className="border border-[#4b3342] text-[#4b3342] px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                            SUBSCRIPTIONS
                        </button>
                        <button className="border border-[#4b3342] text-[#4b3342] px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                            FELLOWSHIPS
                        </button>
                        <button className="border border-[#4b3342] text-[#4b3342] px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                            WRITING COMPETITION
                        </button>
                        <button className="border border-[#4b3342] text-[#4b3342] px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                            THE BLUEBOOK®
                        </button>
                    </div>

                    {/* Email Signup */}
                    <div className="flex max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Join our mailing list"
                            className="flex-1 px-3 py-2 border border-gray-300 text-xs focus:outline-none focus:border-[#771313]"
                        />
                        <button className="bg-[#4b3342] text-white px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-[#3a2835]">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </section>

            {/* Forum & Blog Section */}
            <section className="py-10 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-16">
                        {/* Forum Column */}
                        <div>
                            <h2 className="text-2xl font-serif text-[#4b3342] mb-6 border-t-2 border-[#771313] pt-2 inline-block">Forum</h2>
                            <div className="space-y-5">
                                {forumArticles.map((article, index) => (
                                    <div key={index}>
                                        <p className="text-[9px] mb-0.5">
                                            <span className="text-[#771313] font-bold tracking-wide">{article.category}</span>
                                            <span className="text-[#949494]"> • </span>
                                            <span className="text-[#949494] tracking-wide">{article.type}</span>
                                        </p>
                                        <h3 className="text-sm font-serif text-[#4b3342] font-medium hover:text-[#771313] cursor-pointer">
                                            {article.title}
                                        </h3>
                                        {article.subtitle && (
                                            <p className="text-[9px] text-[#949494] italic">{article.subtitle}</p>
                                        )}
                                        <p className="text-[#771313] text-[9px] font-medium tracking-wide mt-0.5">{article.author}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#771313] text-[10px] font-bold tracking-wider mt-6 cursor-pointer hover:underline">
                                MORE FROM THE FORUM →
                            </p>
                        </div>

                        {/* Blog Column */}
                        <div>
                            <h2 className="text-2xl font-serif text-[#771313] mb-6 border-t-2 border-[#771313] pt-2 inline-block">Blog</h2>
                            <div className="space-y-5">
                                {blogArticles.map((article, index) => (
                                    <div key={index}>
                                        <p className="text-[9px] mb-0.5">
                                            <span className="text-[#771313] font-bold tracking-wide">{article.category}</span>
                                            <span className="text-[#949494]"> • </span>
                                            <span className="text-[#949494] tracking-wide">{article.type}</span>
                                        </p>
                                        <h3 className="text-sm font-serif text-[#4b3342] font-medium hover:text-[#771313] cursor-pointer">
                                            {article.title}
                                        </h3>
                                        <p className="text-[9px] text-[#949494] mt-0.5">{article.date}</p>
                                        <p className="text-[#771313] text-[9px] font-medium tracking-wide">{article.author}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#771313] text-[10px] font-bold tracking-wider mt-6 cursor-pointer hover:underline">
                                MORE FROM THE BLOG →
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Section */}
            <section className="py-10 bg-[#f6f3ee]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-serif text-[#4b3342] mb-5">Explore</h2>
                    <div className="flex justify-center flex-wrap gap-2 mb-4">
                        {exploreTopics.map((topic, index) => (
                            <button
                                key={index}
                                className="px-4 py-1.5 border border-[#4b3342] text-[10px] text-[#4b3342] font-bold tracking-wider hover:bg-[#4b3342] hover:text-white transition-colors"
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4">
                        <span className="text-[#771313] text-[10px] font-bold tracking-wider cursor-pointer hover:underline">ALL TOPICS →</span>
                        <span className="text-[#771313] text-[10px] font-bold tracking-wider cursor-pointer hover:underline">ALL AUTHORS →</span>
                    </div>
                </div>
            </section>

            {/* More from the Archives */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-serif text-[#4b3342] text-center mb-8">More from the Archives</h2>

                    {/* Articles */}
                    <div className="mb-8">
                        <h3 className="text-lg font-serif text-[#4b3342] italic mb-4">Articles</h3>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                            {archiveArticles.map((article, index) => (
                                <div key={index}>
                                    <p className="text-[9px] mb-0.5">
                                        <span className="text-[#771313] font-bold tracking-wide">{article.category}</span>
                                        <span className="text-[#949494]"> • </span>
                                        <span className="text-[#949494] tracking-wide">{article.type}</span>
                                    </p>
                                    <h4 className="text-sm font-serif text-[#4b3342] font-medium hover:text-[#771313] cursor-pointer">{article.title}</h4>
                                    <p className="text-[#949494] text-[9px] tracking-wide">{article.author}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#771313] text-[10px] font-bold tracking-wider mt-3 cursor-pointer hover:underline">MORE ARTICLES →</p>
                    </div>

                    {/* Essays */}
                    <div className="mb-8">
                        <h3 className="text-lg font-serif text-[#4b3342] italic mb-4">Essays</h3>
                        <div className="grid grid-cols-2 gap-x-10">
                            {essays.map((article, index) => (
                                <div key={index}>
                                    <p className="text-[9px] mb-0.5">
                                        <span className="text-[#771313] font-bold tracking-wide">{article.category}</span>
                                        <span className="text-[#949494]"> • </span>
                                        <span className="text-[#949494] tracking-wide">{article.type}</span>
                                    </p>
                                    <h4 className="text-sm font-serif text-[#4b3342] font-medium hover:text-[#771313] cursor-pointer">{article.title}</h4>
                                    <p className="text-[#949494] text-[9px] tracking-wide">{article.author}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#771313] text-[10px] font-bold tracking-wider mt-3 cursor-pointer hover:underline">MORE ESSAYS →</p>
                    </div>

                    {/* Book Reviews */}
                    <div className="mb-8">
                        <h3 className="text-lg font-serif text-[#4b3342] italic mb-4">Book Reviews</h3>
                        <div className="grid grid-cols-2 gap-x-10">
                            {bookReviews.map((article, index) => (
                                <div key={index}>
                                    <p className="text-[9px] mb-0.5">
                                        <span className="text-[#771313] font-bold tracking-wide">{article.category}</span>
                                        <span className="text-[#949494]"> • </span>
                                        <span className="text-[#949494] tracking-wide">{article.type}</span>
                                    </p>
                                    <h4 className="text-sm font-serif text-[#4b3342] font-medium hover:text-[#771313] cursor-pointer">{article.title}</h4>
                                    <p className="text-[#949494] text-[9px] tracking-wide">{article.author}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#771313] text-[10px] font-bold tracking-wider mt-3 cursor-pointer hover:underline">MORE BOOK REVIEWS →</p>
                    </div>

                    {/* Tributes */}
                    <div className="mb-8">
                        <h3 className="text-lg font-serif text-[#4b3342] italic mb-4">Tributes</h3>
                        <div className="grid grid-cols-2 gap-x-10">
                            {tributes.map((article, index) => (
                                <div key={index}>
                                    <p className="text-[9px] mb-0.5">
                                        <span className="text-[#771313] font-bold tracking-wide">{article.category}</span>
                                        <span className="text-[#949494]"> • </span>
                                        <span className="text-[#949494] tracking-wide">{article.type}</span>
                                    </p>
                                    <h4 className="text-sm font-serif text-[#4b3342] font-medium hover:text-[#771313] cursor-pointer">{article.title}</h4>
                                    {article.authors && <p className="text-[#771313] text-[8px] tracking-wide">{article.authors}</p>}
                                </div>
                            ))}
                        </div>
                        <p className="text-[#771313] text-[10px] font-bold tracking-wider mt-3 cursor-pointer hover:underline">MORE TRIBUTES →</p>
                    </div>
                </div>
            </section>

            {/* Fellowships Section */}
            <section className="py-10 bg-[#e8e4db]">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white border border-gray-300 p-6">
                        {/* Diamond Icon */}
                        <div className="flex justify-center mb-3">
                            <svg className="w-3 h-3 text-[#b8860b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l4 8-4 8-4-8z" />
                            </svg>
                        </div>
                        <p className="text-[#771313] text-[10px] font-bold tracking-widest text-center mb-3">FELLOWSHIPS</p>
                        <p className="text-[#949494] text-xs text-center leading-relaxed mb-4">
                            The Journal for Law and Justice (JLJ) is the flagship student-run publication of Law
                            Centre-II, Faculty of Law, University of Delhi. It is an open-access, double blind peer
                            reviewed academic journal dedicated to publishing original and high-quality research in
                            the field of law and justice. The journal seeks to foster dialogue on pressing legal issues,
                            encourage critical engagement with doctrines and practices, and contribute to the
                            evolving discourse on justice, governance, and rights in India and beyond.
                        </p>
                        <div className="flex justify-center gap-2">
                            <button className="border border-[#4b3342] text-[#4b3342] px-4 py-1.5 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                                LEARN MORE
                            </button>
                            <button className="border border-[#4b3342] text-[#4b3342] px-4 py-1.5 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                                CURRENT & PAST FELLOWS
                            </button>
                            <button className="border border-[#4b3342] text-[#4b3342] px-4 py-1.5 text-[10px] font-bold tracking-wider hover:bg-gray-50">
                                FELLOWSHIP ESSAYS
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recently Cited Section */}
            <section className="py-10 bg-[#f6f3ee]">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex gap-10">
                        {/* Logo Image */}
                        <div className="w-48 flex-shrink-0">
                            <img src="/logo.png" alt="Law Centre - II" className="w-full" />
                        </div>

                        {/* Recently Cited Content */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-serif text-[#4b3342] mb-2">Recently Cited</h2>
                            <p className="text-[#949494] text-xs mb-6">
                                The student pieces featured below have been recently cited in
                                judicial opinions and legal scholarship.
                            </p>

                            <div className="space-y-4">
                                {recentlyCited.map((item, index) => (
                                    <div key={index} className="flex">
                                        <div className="bg-[#771313] px-3 py-2 flex-shrink-0">
                                            <p className="text-white text-[8px] font-bold tracking-wide">{item.category}</p>
                                            <p className="text-white text-[8px]">LEADING CASE</p>
                                            <p className="text-white text-xs font-serif italic mt-1">{item.title}</p>
                                        </div>
                                        <div className="bg-gray-100 flex-1"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
