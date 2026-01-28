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
        <div className="bg-white min-h-screen">
            {/* Page Title */}
            <section className="py-5 text-center">
                <h1 className="text-xl font-serif text-[#4b3342]">Submit Now</h1>
            </section>

            {/* Instructions Box */}
            <section className="pb-5">
                <div className="max-w-xl mx-auto px-4">
                    <div className="bg-[#fef9e7] border border-[#f0e6c8] p-3 text-[10px]">
                        <p className="text-[#4b3342] leading-relaxed">
                            Please use the form below to submit your Paper to Symposium. To learn more,
                            please refer to the guidelines and information on our{' '}
                            <a href="/submissions" className="text-[#771313] underline">submission-Guidelines-page</a>. If you'd like to
                            preview, just click preview button before form press below.
                        </p>
                        <p className="text-[#949494] mt-1.5 text-[9px]">
                            Note: Blog submissions should be sent directly to{' '}
                            <a href="mailto:blog@JLJforum.org" className="text-[#771313] underline">blog@JLJforum.org</a>.
                        </p>
                    </div>
                </div>
            </section>

            <form onSubmit={handleSubmit}>
                <div className="max-w-xl mx-auto px-4">

                    {/* Primary Contact Section */}
                    <section className="pb-6">
                        <h2 className="text-sm font-serif text-[#4b3342] mb-4 text-center">Primary Contact</h2>

                        {/* First Name */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                First Name <span className="text-[#771313]">*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Last Name <span className="text-[#771313]">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Title */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Title <span className="text-[#771313]">*</span>
                            </label>
                            <select
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313] bg-white"
                                required
                            >
                                <option value="">Please Select...</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Prof.">Prof.</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Email <span className="text-[#771313]">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@example.com"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Position */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Position <span className="text-[#771313]">*</span>
                            </label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="Position"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Affiliation */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Affiliation <span className="text-[#771313]">*</span>
                            </label>
                            <input
                                type="text"
                                name="affiliation"
                                value={formData.affiliation}
                                onChange={handleChange}
                                placeholder="Affiliation"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Co-Author Email */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Co-Author Email
                            </label>
                            <input
                                type="email"
                                name="coAuthorEmail"
                                value={formData.coAuthorEmail}
                                onChange={handleChange}
                                placeholder="Co-author email (if applicable)"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Optional Co-Author */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Optional Co-Author
                            </label>
                            <select
                                name="optionalCoAuthor"
                                value={formData.optionalCoAuthor}
                                onChange={handleChange}
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313] bg-white"
                            >
                                <option value="">Please Select...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </section>

                    {/* Article Information Section */}
                    <section className="pb-6">
                        <h2 className="text-sm font-serif text-[#4b3342] mb-4 text-center">Article Information</h2>

                        {/* Author Count */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                How many Authors (individual and/or institutions) wrote this submission?
                            </label>
                            <select
                                name="authorCount"
                                value={formData.authorCount}
                                onChange={handleChange}
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313] bg-white"
                            >
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5+">5+</option>
                            </select>
                        </div>

                        {/* Article Title */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Article Title <span className="text-[#771313]">*</span>
                            </label>
                            <input
                                type="text"
                                name="articleTitle"
                                value={formData.articleTitle}
                                onChange={handleChange}
                                placeholder="Article Title"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                                required
                            />
                        </div>

                        {/* Name of Article */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Name of Article
                            </label>
                            <input
                                type="text"
                                name="nameOfArticle"
                                value={formData.nameOfArticle}
                                onChange={handleChange}
                                placeholder="Name of Article"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Indian End-Tier */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Indian End-Tier (5 footnotes)
                            </label>
                            <input
                                type="text"
                                name="indianEndTier"
                                value={formData.indianEndTier}
                                onChange={handleChange}
                                placeholder="Indian End-Tier (5 footnotes)"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-2 mb-3 py-1.5">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mt-0.5"
                                required
                            />
                            <label className="text-[9px] text-[#949494] leading-relaxed">
                                BY SUBMITTING I CONFIRM THAT MY WORK IS AN ORIGINAL ARTICLE BY THE AUTHOR. THE ARTICLE HAS NOT BEEN PUBLISHED OR SUBMITTED ELSEWHERE FOR PUBLICATION. <span className="text-[#771313]">*</span>
                            </label>
                        </div>

                        {/* Article Category */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Article Category <span className="text-[#771313]">*</span>
                            </label>
                            <select
                                name="articleCategory"
                                value={formData.articleCategory}
                                onChange={handleChange}
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313] bg-white"
                                required
                            >
                                <option value="">Please Select...</option>
                                <option value="Research Article">Research Article</option>
                                <option value="Case Comment">Case Comment</option>
                                <option value="Book Review">Book Review</option>
                                <option value="Essay">Essay</option>
                            </select>
                        </div>

                        {/* Is Original Work */}
                        <div className="mb-3">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1.5">
                                Is it your/authors' original work:
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1 text-[10px] text-[#949494]">
                                    <input
                                        type="radio"
                                        name="isOriginalWork"
                                        value="yes"
                                        checked={formData.isOriginalWork === 'yes'}
                                        onChange={handleChange}
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-1 text-[10px] text-[#949494]">
                                    <input
                                        type="radio"
                                        name="isOriginalWork"
                                        value="no"
                                        checked={formData.isOriginalWork === 'no'}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        {/* Cover Letter */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Cover Letter (if any) / would you like to add something?
                            </label>
                            <input
                                type="text"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                placeholder="(optional field...) Ex: Message"
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Additional Info 1 */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Additional Information 1 (if required)
                            </label>
                            <input
                                type="text"
                                name="additionalInfo1"
                                value={formData.additionalInfo1}
                                onChange={handleChange}
                                placeholder="(optional field...) Ex: I am a faculty..."
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Additional Info 2 */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Additional Information 2
                            </label>
                            <input
                                type="text"
                                name="additionalInfo2"
                                value={formData.additionalInfo2}
                                onChange={handleChange}
                                placeholder="(optional field...) Ex: I am a faculty..."
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>

                        {/* Additional Info 3 */}
                        <div className="mb-2.5">
                            <label className="block text-[9px] text-[#949494] uppercase tracking-wide mb-1">
                                Additional Information 3 (bio sketch)
                            </label>
                            <input
                                type="text"
                                name="additionalInfo3"
                                value={formData.additionalInfo3}
                                onChange={handleChange}
                                placeholder="(optional field...) Ex: I am a faculty..."
                                className="w-full px-2.5 py-1.5 border border-[#e8e4db] text-[10px] focus:outline-none focus:border-[#771313]"
                            />
                        </div>
                    </section>

                    {/* Submit Button */}
                    <div className="text-center pb-8">
                        <button
                            type="submit"
                            className="bg-[#4b3342] text-white px-6 py-1.5 text-[10px] font-medium hover:bg-[#3a2835] transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SubmitPage
