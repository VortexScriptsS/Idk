import React from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Flame, Beaker, Gem, CubeTransparentIcon, Eye } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export interface Script {
  id: string;
  name: string;
  code: string;
  description: string[];
  type: 'popular' | 'beta' | 'new';
  icon: 'gem' | 'cube' | 'eye';
  color: 'green' | 'purple' | 'blue' | 'yellow';
}

interface ScriptCardProps {
  script: Script;
}

export const ScriptCard: React.FC<ScriptCardProps> = ({ script }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(script.code);
      setCopied(true);
      toast.success(`${script.name} copied to clipboard!`);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy script');
    }
  };

  const getIcon = () => {
    switch (script.icon) {
      case 'gem': return <Gem className="w-5 h-5" />;
      case 'cube': return <div className="w-5 h-5 flex items-center justify-center">📦</div>;
      case 'eye': return <Eye className="w-5 h-5" />;
      default: return <Gem className="w-5 h-5" />;
    }
  };

  const colorClasses = {
    green: "border-emerald-500/20 hover:shadow-emerald-500/20 from-emerald-600 to-teal-700 bg-emerald-500/10",
    purple: "border-purple-500/20 hover:shadow-purple-500/20 from-purple-600 to-indigo-700 bg-purple-500/10",
    blue: "border-blue-500/20 hover:shadow-blue-500/20 from-blue-600 to-cyan-700 bg-blue-500/10",
    yellow: "border-yellow-500/20 hover:shadow-yellow-500/20 from-yellow-600 to-orange-700 bg-yellow-500/10",
  };

  const textColors = {
    green: "text-emerald-400",
    purple: "text-purple-400",
    blue: "text-blue-400",
    yellow: "text-yellow-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group overflow-hidden bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border ${colorClasses[script.color].split(' ')[0]} transition-all duration-300 shadow-xl`}
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        {script.type === 'popular' && (
          <div className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-1 rounded-full border border-orange-500/30 flex items-center gap-1 uppercase tracking-wider">
            <Flame className="w-3 h-3" /> Popular
          </div>
        )}
        {script.type === 'beta' && (
          <div className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-500/30 flex items-center gap-1 uppercase tracking-wider">
            <Beaker className="w-3 h-3" /> Beta
          </div>
        )}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[script.color].split(' ').slice(2, 4).join(' ')} shadow-lg`}>
            {getIcon()}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
              {script.name}
            </h3>
            <span className={`text-xs ${textColors[script.color]} font-medium uppercase tracking-widest`}>
              Keyless Script
            </span>
          </div>
        </div>

        {/* Script Box */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-black/40 rounded-lg -z-10" />
          <pre className="p-4 pr-12 rounded-lg text-white/70 text-xs overflow-x-auto font-mono scrollbar-hide border border-white/5">
            {script.code}
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/50 hover:text-white transition-all border border-white/10"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {script.description.map((desc, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
              <div className={`w-1.5 h-1.5 rounded-full ${textColors[script.color].replace('text-', 'bg-')}`} />
              {desc}
            </div>
          ))}
        </div>

        <button
          onClick={copyToClipboard}
          className={`mt-8 w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 group-hover:border-white/20
            ${copied ? 'bg-emerald-500 text-white' : `bg-white/5 hover:bg-white/10 text-white shadow-lg shadow-black/20`}
          `}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Copied!' : 'Copy Hub Loader'}
        </button>
      </div>

      {/* Glow Effect */}
      <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${colorClasses[script.color].split(' ')[4]}`} />
    </motion.div>
  );
};
