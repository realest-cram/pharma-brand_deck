import React from 'react';
import { Smile, Palette, Layout as LayoutIcon, Smartphone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'identity' | 'system' | 'ui' | 'screens';
  onTabChange: (tab: 'identity' | 'system' | 'ui' | 'screens') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Brand Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">PharmaAID <span className="text-slate-400 font-normal text-sm ml-2">Brand Identity</span></span>
          </div>
          
          <nav className="flex gap-1 bg-slate-100/50 p-1 rounded-full overflow-x-auto no-scrollbar">
            {[
              { id: 'identity', label: 'Identity', icon: Smile },
              { id: 'system', label: 'System', icon: Palette },
              { id: 'ui', label: 'Components', icon: LayoutIcon },
              { id: 'screens', label: 'Screens', icon: Smartphone }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-20 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
           <p className="text-sm">© 2024 PharmaAID Design System</p>
           <p className="text-sm flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
             v1.0.0 Alpha
           </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;