import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl text-white">Get In Touch</h1>
            <div className="w-20 h-1 bg-purple-600"></div>
            <p className="text-gray-400 max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up-delay-1">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <Mail className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="text-white">mohithramn@outlook.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <Phone className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p className="text-white">425-588-9636</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500">Location</p>
                      <p className="text-white">Redmond, WA | Berkeley, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/mohithna12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600/20 border border-purple-900/30 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohithna12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600/20 border border-purple-900/30 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:mohithramn@outlook.com"
                    className="p-3 bg-purple-600/20 border border-purple-900/30 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-900/30 rounded-lg text-white focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-900/30 rounded-lg text-white focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-900/30 rounded-lg text-white focus:outline-none focus:border-purple-600 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
