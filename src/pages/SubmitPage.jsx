import { useState } from 'react'

const SubmitPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        position: '',
        affiliation: '',
        coAuthorEmail: '',
        optionalCoAuthor: '',
        authorCount: '',
        articleTitle: '',
        nameOfArticle: '',
        indianEndTier: '',
        agreeToTerms: false,
        articleCategory: '',
        isOriginalWork: '',
        coverLetter: '',
        additionalInfo1: '',
        additionalInfo2: '',
        additionalInfo3: '',
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your submission!')
    }

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            {/* Page Title */}
            <section style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '28px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500' }}>Submit Now</h1>
            </section>

            {/* Instructions Box */}
            <section style={{ paddingBottom: '1.5rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ backgroundColor: '#fef9e7', border: '1px solid #f0e6c8', padding: '12px', fontSize: '10px' }}>
                        <p style={{ color: '#4b3342', lineHeight: '1.6', margin: 0, marginBottom: '8px' }}>
                            Please use the form below to submit your Paper to Symposium. To learn more,
                            please refer to the guidelines and information on our{' '}
                            <a href="/submissions" style={{ color: '#771313', textDecoration: 'underline', cursor: 'pointer' }}>submission-Guidelines-page</a>. If you'd like to
                            preview, just click preview button before form press below.
                        </p>
                        <p style={{ color: '#949494', marginTop: '8px', fontSize: '9px', margin: 0 }}>
                            Note: Blog submissions should be sent directly to{' '}
                            <a href="mailto:blog@JLJforum.org" style={{ color: '#771313', textDecoration: 'underline', cursor: 'pointer' }}>blog@JLJforum.org</a>.
                        </p>
                    </div>
                </div>
            </section>

            <form onSubmit={handleSubmit}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>

                    {/* Primary Contact Section */}
                    <section style={{ paddingBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '1rem', textAlign: 'center', fontWeight: '500' }}>Primary Contact</h2>

                        {/* First Name */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                First Name <span style={{ color: '#771313' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Last Name <span style={{ color: '#771313' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Email <span style={{ color: '#771313' }}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Position */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Position/Title
                            </label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="Professor, Student, etc."
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Affiliation */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Institutional Affiliation
                            </label>
                            <input
                                type="text"
                                name="affiliation"
                                value={formData.affiliation}
                                onChange={handleChange}
                                placeholder="University, Law School, etc."
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                            />
                        </div>
                    </section>

                    {/* Article Information Section */}
                    <section style={{ paddingBottom: '1.5rem', borderTop: '1px solid #e8e4db', paddingTop: '1.5rem' }}>
                        <h2 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '1rem', textAlign: 'center', fontWeight: '500' }}>Article Information</h2>

                        {/* Article Title */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Article Title <span style={{ color: '#771313' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="articleTitle"
                                value={formData.articleTitle}
                                onChange={handleChange}
                                placeholder="Enter your article title"
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Article Category */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Article Category
                            </label>
                            <select
                                name="articleCategory"
                                value={formData.articleCategory}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box' }}
                                className="focus:outline-none focus:border-[#771313]"
                            >
                                <option value="">Select a category</option>
                                <option value="constitutional">Constitutional Law</option>
                                <option value="criminal">Criminal Law</option>
                                <option value="civil">Civil Rights</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Cover Letter */}
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', fontSize: '9px', color: '#949494', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                Cover Letter
                            </label>
                            <textarea
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                placeholder="Brief cover letter or submission note"
                                style={{ width: '100%', padding: '8px 10px', border: '1px solid #e8e4db', fontSize: '10px', boxSizing: 'border-box', minHeight: '100px', fontFamily: 'Inter, sans-serif' }}
                                className="focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Original Work Checkbox */}
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                style={{ marginTop: '2px' }}
                            />
                            <label style={{ fontSize: '10px', color: '#949494', lineHeight: '1.5' }}>
                                I confirm that this article is original, has not been previously published, and is not under consideration elsewhere.
                            </label>
                        </div>
                    </section>

                    {/* Submit Button */}
                    <section style={{ paddingBottom: '2rem', textAlign: 'center' }}>
                        <button
                            type="submit"
                            style={{ backgroundColor: '#4b3342', color: 'white', padding: '10px 24px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', border: 'none', cursor: 'pointer' }}
                            className="hover:bg-[#3a2835]"
                        >
                            SUBMIT ARTICLE
                        </button>
                    </section>
                </div>
            </form>
        </div>
    )
}

export default SubmitPage
