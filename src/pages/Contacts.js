// Contacts.js
import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Save contact form data to localStorage (in real app, this would go to backend)
      const contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      contactSubmissions.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
        status: 'new'
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(contactSubmissions));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: 'Send us an email anytime',
      contact: 'support@resumebuildersa.com',
      link: 'mailto:support@resumebuildersa.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: 'Mon to Fri from 9am to 6pm',
      contact: '+27 676325942',
      link: 'tel:+27 676325924'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      details: 'Come say hello at our office',
      contact: '123 Business Ave, Suite 100\nCity, State 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Live Chat',
      details: 'Instant support during business hours',
      contact: 'Available 9am-6pm EST',
      link: '#chat'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.'
    },
    {
      question: 'Do you offer resume writing services?',
      answer: 'Yes! We have professional resume writers who can help you create a compelling resume from scratch or improve your existing one.'
    },
    {
      question: 'Can I get help with specific industry resumes?',
      answer: 'Absolutely! Our team has experience across various industries including tech, healthcare, finance, and more.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can create your first basic resume for free. Premium features are available with our subscription plans.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Resume Expert & Career Coach',
      bio: '10+ years experience in HR and career counseling',
      email: 'sarah@resumebuildersa.com'
    },
    {
      name: 'Mike Chen',
      role: 'Technical Resume Specialist',
      bio: 'Former tech recruiter with deep industry knowledge',
      email: 'mike@resumebuildersa.com'
    },
    {
      name: 'Emily Davis',
      role: 'Customer Success Manager',
      bio: 'Dedicated to ensuring your resume success',
      email: 'emily@resumebuildersa.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you build the perfect resume and advance your career. 
            Get in touch with our team of experts.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-100 hover:border-green-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600 mr-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">{method.details}</p>
              <p className="text-green-700 font-semibold whitespace-pre-line">{method.contact}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-900 mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="resume-help">Resume Help & Feedback</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="billing">Billing & Subscription</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Team Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-6">Meet Our Team</h2>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-green-700 hover:text-green-800 text-sm font-medium"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Ready to Improve Your Resume?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Start building your professional resume today with our easy-to-use tools and expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/maindash/builder"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
            >
              Start Building
            </a>
            <a
              href="/maindash/upload"
              className="bg-white hover:bg-gray-50 text-green-700 border border-green-600 px-8 py-3 rounded-lg font-semibold transition duration-200"
            >
              Upload & Improve
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;