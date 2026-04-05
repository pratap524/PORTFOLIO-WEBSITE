import { motion } from 'motion/react';
import { FileDown } from 'lucide-react';

export function ResumeDownload() {
  const resumeUrl = '/resume.pdf';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 rounded-2xl p-8 sm:p-12 shadow-xl text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <FileDown className="w-12 h-12 text-white" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Download My Full Resume</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Get detailed information about my education, projects, skills, and achievements
              </p>
            </div>

            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 dark:text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <FileDown className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
