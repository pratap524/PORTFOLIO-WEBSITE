import { motion } from 'motion/react';
import { Lightbulb, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Motivated and articulate B.Tech student specializing in Data Science with a strong
              foundation in software development.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Seeking internships to apply technical skills in a practical environment while further
              exploring Data Science and Full Stack Development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start p-4 bg-blue-50 dark:bg-slate-800 rounded-lg border border-blue-100 dark:border-slate-700">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Exceptional Communication</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Strong verbal and written communication skills with ability to collaborate
                  effectively in team environments
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-blue-50 dark:bg-slate-800 rounded-lg border border-blue-100 dark:border-slate-700">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Problem-Solving & Algorithms</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Analytical mindset with strong foundation in data structures, algorithms, and
                  logical thinking
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
