import { motion } from 'motion/react';
import { Code2, Database, FileJson, GitBranch, TrendingUp, FileCode, Braces, Binary, Box, Server, Layers, Palette, Leaf } from 'lucide-react';

const pythonSkills = [
  { name: 'Pandas', level: 85 },
  { name: 'NumPy', level: 80 },
  { name: 'Matplotlib', level: 75 },
  { name: 'TensorFlow', level: 70 },
  { name: 'scikit-learn', level: 75 },
];

const techStack = [
  { name: 'Python', icon: Code2, color: 'bg-blue-100 text-blue-600' },
  { name: 'C++', icon: Box, color: 'bg-blue-100 text-blue-600' },
  { name: 'C', icon: Binary, color: 'bg-gray-100 text-gray-600' },
  { name: 'R', icon: TrendingUp, color: 'bg-blue-100 text-blue-600' },
  { name: 'Java', icon: Braces, color: 'bg-orange-100 text-orange-600' },
  { name: 'NodeJS', icon: Leaf, color: 'bg-green-100 text-green-600' },
  { name: 'React', icon: Layers, color: 'bg-blue-100 text-blue-600' },
  { name: 'JavaScript', icon: FileCode, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'HTML5', icon: FileJson, color: 'bg-red-100 text-red-600' },
  { name: 'CSS3', icon: Palette, color: 'bg-blue-100 text-blue-600' },
  { name: 'PHP', icon: Server, color: 'bg-purple-100 text-purple-600' },
  { name: 'MySQL', icon: Database, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'MongoDB', icon: Database, color: 'bg-green-100 text-green-600' },
  { name: 'Git/GitHub', icon: GitBranch, color: 'bg-slate-100 text-slate-600' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {/* Python & Data Science Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Python & Data Science</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {pythonSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/80 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Additional Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-slate-200 dark:border-slate-600"
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className={`w-12 h-12 ${tech.color} dark:opacity-90 rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{tech.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
