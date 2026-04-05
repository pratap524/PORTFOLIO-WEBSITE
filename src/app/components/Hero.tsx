import { Mail, Phone, MapPin, Github, Linkedin, FileDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const resumeUrl = '/resume.pdf';
  const profileImageUrl = '/profile.jpeg';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-wide">
                Major Pratap Singh Sisodiya
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400">
                B.Tech student specializing in Data Science
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="mailto:majorpratapsinghsisodiya@gmail.com"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="hover:underline">majorpratapsinghsisodiya@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+918742852739" className="hover:underline">
                  +91-8742852739
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/pratap524"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/major-pratap-singh-sisodiya-a8700a332"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-600 rounded-2xl rotate-6"></div>
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-2xl overflow-hidden">
                <img
                  src={profileImageUrl}
                  alt="Profile portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
