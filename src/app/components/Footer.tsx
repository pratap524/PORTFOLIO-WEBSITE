import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Major Pratap Singh Sisodiya</h3>
            <p className="text-slate-400">
              B.Tech Data Science Student seeking internship opportunities to apply and grow technical skills.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/pratap524"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/major-pratap-singh-sisodiya-a8700a332"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:majorpratapsinghsisodiya@gmail.com"
                className="p-3 bg-slate-800 dark:bg-slate-900 rounded-lg hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 dark:border-slate-900 text-center text-slate-400">
          <p>&copy; {currentYear} Major Pratap Singh Sisodiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
