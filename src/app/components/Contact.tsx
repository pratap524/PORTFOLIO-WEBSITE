import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const gmailComposeUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=majorpratapsinghsisodiya%40gmail.com';

  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formspreeEndpoint =
        import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xaqlawgk';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          subject: 'New portfolio contact message',
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const errorMessage = data?.errors?.[0]?.message || data?.error || 'Failed to send message.';
        throw new Error(errorMessage);
      }

      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities. Let's connect and discuss how I can
            contribute to your team!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-accent dark:hover:border-accent transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                  <span className="text-slate-600 dark:text-slate-400 hover:text-accent transition-colors">
                    majorpratapsinghsisodiya@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-accent dark:hover:border-accent transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                  <a
                    href="tel:+918742852739"
                    className="text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                  >
                    +91-8742852739
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-accent dark:hover:border-accent transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-2">Available for Internships</h3>
              <p className="text-blue-100">
                Expected graduation: 2028 • Open to full-time and part-time opportunities in Data
                Science and Full Stack Development
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600">
              <div>
                <label htmlFor="email" className="block text-slate-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none text-slate-900 dark:text-white"
                  placeholder="Tell me about your internship opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
