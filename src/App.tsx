import React, { useState } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { Search, Filter } from 'lucide-react';
import { Background } from './components/Background';
import { Header, Hero, Community } from './components/Layout';
import { ScriptCard, Script } from './components/ScriptCard';

const SCRIPTS: Script[] = [
  {
    id: 'vortex-hub',
    name: 'Vortex Hub (Official)',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexScriptsS/Vortex-Scripts/refs/heads/main/loader"))()',
    description: ['All-in-One Loader', 'Universal ESP & Aimbot', 'Auto-Updates Enabled', 'Keyless Forever'],
    type: 'popular',
    icon: 'gem',
    color: 'blue'
  },
  {
    id: 'prospecting',
    name: 'Prospecting Module',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexScriptsS/Vortex-Scripts/refs/heads/main/loader"))()',
    description: ['Auto Shake', 'Auto Collect Deposit', 'Integrated in Hub'],
    type: 'popular',
    icon: 'gem',
    color: 'green'
  },
  {
    id: 'luckyblock',
    name: 'Lucky Block Module',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexScriptsS/Vortex-Scripts/refs/heads/main/loader"))()',
    description: ['Spawn Items', 'Teleports', 'Integrated in Hub'],
    type: 'popular',
    icon: 'cube',
    color: 'purple'
  },
  {
    id: 'inhuman',
    name: 'Inhuman Module',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexScriptsS/Vortex-Scripts/refs/heads/main/loader"))()',
    description: ['ESP for All Teams', 'Quarantine Tools', 'Integrated in Hub'],
    type: 'beta',
    icon: 'eye',
    color: 'blue'
  }
];

export default function App() {
  const [search, setSearch] = useState('');

  const filteredScripts = SCRIPTS.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.description.some(d => d.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30">
      <Background imageUrl="https://images.unsplash.com/photo-1759178461733-f31f557b17cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwYWNlJTIwdm9ydGV4JTIwZGFyayUyMGJsdWUlMjBwdXJwbGV8ZW58MXx8fHwxNzY5ODg4MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080" />
      <Toaster position="bottom-right" theme="dark" />
      
      <Header />
      
      <main className="max-w-7xl mx-auto px-6">
        <Hero />

        {/* Search & Filter Bar */}
        <div id="scripts" className="mb-32 mt-20 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Official Loader</h3>
            <p className="text-gray-400">Copy the universal loader below to access all Vortex Hub modules.</p>
          </div>
          <ScriptCard 
            script={{
              id: 'vortex-hub',
              name: 'Vortex Hub (Official)',
              code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexScriptsS/Vortex-Scripts/refs/heads/main/loader"))()',
              description: [
                'All-in-One Universal Loader', 
                'Integrated ESP & Aimbot', 
                'Safe & Keyless Experience',
                'Auto-Updates on Execution'
              ],
              type: 'popular',
              icon: 'gem',
              color: 'blue'
            }} 
          />
        </div>

        <Community />
      </main>

      <footer className="mt-20 border-t border-white/5 bg-black/40 backdrop-blur-lg py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-[10px]">V</div>
              <span className="font-black text-lg">VORTEX <span className="text-blue-500">HUB</span></span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Vortex Hub. The best keyless script loader.</p>
          </div>

          <div className="flex gap-8">
            <a href="https://discord.gg/Hub2ZEwsE4" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Discord</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy</a>
          </div>

          <p className="text-gray-600 text-[10px] font-medium tracking-widest uppercase">
            Made by quantum__being_06970
          </p>
        </div>
      </footer>
    </div>
  );
}
