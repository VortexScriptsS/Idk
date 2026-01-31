import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, LayoutGrid, MessageSquare, Zap, Copy, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between backdrop-blur-xl border-b border-white/5 bg-black/10">
      <div className="flex items-center gap-3">
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 rounded-lg blur group-hover:blur-md transition-all opacity-40" />
          <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-white shadow-xl">
            V
          </div>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-black tracking-tight text-white">VORTEX <span className="text-blue-500">HUB</span></h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none">The Ultimate Loader</p>
        </div>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#scripts" className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <LayoutGrid className="w-4 h-4" />
          Scripts
        </a>
        <a href="#community" className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Discord
        </a>
        <div className="h-4 w-[1px] bg-white/10" />
        <a 
          href="https://discord.gg/Hub2ZEwsE4" 
          target="_blank" 
          className="px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all shadow-lg"
        >
          Join Now
        </a>
      </nav>
    </header>
  );
};

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const LOADER_CODE = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexScriptsS/Vortex-Scripts/refs/heads/main/loader"))()';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LOADER_CODE);
      setCopied(true);
      toast.success('Hub Loader copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  return (
    <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest"
      >
        <Zap className="w-4 h-4 fill-current" />
        Version 2.0.4 Live
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
      >
        Your Premium <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
          Scripting Experience
        </span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12"
      >
        High-performance, keyless, and safe scripts for your favorite Roblox games. 
        Engineered for speed and security.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transition-all border border-blue-400/30"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'COPIED LOADER!' : 'COPY HUB LOADER'}
        </motion.button>
        <a 
          href="#scripts"
          className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all"
        >
          View Modules
        </a>
      </div>

      {/* Beta Note UI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto p-1 rounded-2xl bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-yellow-500/30 border border-yellow-500/20"
      >
        <div className="bg-[#0a0a0c]/80 backdrop-blur-md px-8 py-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/40">
              <Shield className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold">Experimental Testing</h4>
              <p className="text-sm text-gray-400">Some scripts may contain bugs. Report them in Discord.</p>
            </div>
          </div>
          <a href="https://discord.gg/Hub2ZEwsE4" target="_blank" className="whitespace-nowrap px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors">
            Report Bugs
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Join the <br />
            <span className="text-blue-500">Vortex Community</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Be the first to get script updates, request new features, and chat with 
            thousands of other active members. We're building the future of scripting together.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Zap className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold">Instant Updates</h4>
                <p className="text-sm text-gray-400">Real-time notifications when we push new features.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <MessageSquare className="text-indigo-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold">Direct Support</h4>
                <p className="text-sm text-gray-400">Our team and community are here to help you 24/7.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />
          <div className="bg-[#1a1c22]/80 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
            <iframe 
              src="https://discord.com/widget?id=1391547833168957605&theme=dark" 
              width="100%" 
              height="500"
              allowtransparency="true" 
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
