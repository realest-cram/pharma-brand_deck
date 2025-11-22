import React, { useState } from 'react';
import Layout from './components/Layout';
import Mascot from './components/Mascot';
import Button from './components/Button';
import { 
  Heart, 
  Shield, 
  Zap, 
  Type, 
  Palette, 
  Layout as LayoutIcon, 
  Smile,
  Check,
  AlertTriangle
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'identity' | 'system' | 'ui'>('identity');

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      
      {/* HERO SECTION */}
      <section className="text-center py-16 space-y-6 animate-fade-in relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -z-10" />
        
        <div className="w-48 h-48 mx-auto hover:scale-105 transition-transform duration-500">
          <Mascot emotion="happy" />
        </div>
        
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Meet <span className="text-emerald-600">Pharmi</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            The friendly face of AI prescription safety. Designed to build trust, reduce anxiety, and guide patients through complex medical data with a smile.
          </p>
        </div>
      </section>

      {/* TABS CONTENT */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        
        {/* === IDENTITY TAB === */}
        {activeTab === 'identity' && (
          <div className="space-y-16 animate-fade-in">
            
            {/* Personality Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Heart className="w-6 h-6" />, title: 'Empathetic', desc: "Pharmi isn't just a machine. It uses soft animations and warm colors to reassure patients." },
                { icon: <Shield className="w-6 h-6" />, title: 'Trustworthy', desc: "Built with clinical precision. The visual language balances friendliness with medical authority." },
                { icon: <Zap className="w-6 h-6" />, title: 'Efficient', desc: "Quick to read, easy to understand. Pharmi simplifies the complex world of pharmacology." }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Mascot Expression Sheet */}
            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Emotional Intelligence</h2>
                <p className="text-slate-500 mt-2">Pharmi adapts to the situation to provide the right feedback.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { emotion: 'happy', label: 'Greeting', desc: 'Onboarding & Idle' },
                  { emotion: 'thinking', label: 'Processing', desc: 'Analyzing Image' },
                  { emotion: 'success', label: 'Success', desc: 'Prescription Valid' },
                  { emotion: 'alert', label: 'Concern', desc: 'Error or Warning' },
                ].map((item: any) => (
                  <div key={item.label} className="flex flex-col items-center group">
                    <div className="w-32 h-32 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-24 h-24">
                        <Mascot emotion={item.emotion} />
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-800">{item.label}</h4>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === SYSTEM TAB === */}
        {activeTab === 'system' && (
          <div className="space-y-16 animate-fade-in">
            
            {/* Color Palette */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Palette className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold">Color System</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Primary Emerald */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Primary Brand</h3>
                  <div className="space-y-2">
                    <div className="h-24 bg-emerald-600 rounded-2xl flex items-center justify-between px-6 text-white shadow-lg shadow-emerald-200">
                      <span className="font-bold">Emerald 600</span>
                      <span className="font-mono opacity-80">#059669</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-emerald-500 rounded-xl"></div>
                      <div className="h-12 bg-emerald-400 rounded-xl"></div>
                      <div className="h-12 bg-emerald-100 rounded-xl"></div>
                    </div>
                    <p className="text-sm text-slate-500 pt-2">Used for: Primary actions, success states, mascot accents. Symbolizes health and growth.</p>
                  </div>
                </div>

                {/* Signal Colors */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Functional Signals</h3>
                  <div className="grid gap-3">
                    <div className="h-16 bg-rose-500 rounded-2xl flex items-center justify-between px-6 text-white">
                      <span className="font-bold">Rose 500</span>
                      <span className="font-mono opacity-80">Error / Stop</span>
                    </div>
                    <div className="h-16 bg-amber-400 rounded-2xl flex items-center justify-between px-6 text-white">
                      <span className="font-bold">Amber 400</span>
                      <span className="font-mono opacity-80">Warning</span>
                    </div>
                    <div className="h-16 bg-slate-900 rounded-2xl flex items-center justify-between px-6 text-white">
                      <span className="font-bold">Slate 900</span>
                      <span className="font-mono opacity-80">Text / UI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Type className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold">Typography</h2>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
                <div className="p-8 border-b border-slate-100">
                  <span className="text-6xl font-bold text-slate-900">Aa</span>
                  <span className="text-4xl ml-4 font-light text-slate-400">Outfit</span>
                  <p className="mt-4 text-slate-500 max-w-lg">
                    A geometric sans-serif that balances modern minimalism with friendly, rounded characters. Perfect for readability on digital screens.
                  </p>
                </div>
                <div className="p-8 space-y-6 bg-slate-50">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Heading 1 / Bold / 32px</p>
                    <h1 className="text-4xl font-bold text-slate-900">Medical Intelligence</h1>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Heading 2 / Semibold / 24px</p>
                    <h2 className="text-2xl font-semibold text-slate-900">Prescription Analysis</h2>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Body / Regular / 16px</p>
                    <p className="text-base text-slate-600">
                      PharmaAID interprets handwritten prescriptions using advanced multimodal AI, ensuring patients understand their medication dosage and frequency without confusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === UI LIBRARY TAB === */}
        {activeTab === 'ui' && (
          <div className="space-y-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Atomic Components</h2>
              <p className="text-slate-500">
                A library of reusable UI elements designed for high contrast, large touch targets, and accessibility.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Buttons Section */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <LayoutIcon className="w-5 h-5 text-emerald-500" /> Controls
                </h3>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
                  <Button fullWidth>Primary Action</Button>
                  <Button fullWidth variant="secondary">Secondary Action</Button>
                  <Button fullWidth variant="ghost">Ghost Button</Button>
                  <Button fullWidth variant="danger">Critical Alert</Button>
                </div>
              </div>

              {/* Cards Section */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <LayoutIcon className="w-5 h-5 text-emerald-500" /> Data Cards
                </h3>
                
                {/* Result Card Mockup */}
                <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200 border border-slate-100">
                   <div className="flex justify-between items-start mb-4">
                     <div>
                       <h4 className="font-bold text-xl text-emerald-800">Amoxicillin</h4>
                       <span className="text-sm font-medium text-slate-400">Antibiotic</span>
                     </div>
                     <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full">
                       <Check className="w-5 h-5" />
                     </div>
                   </div>
                   
                   <div className="inline-block px-3 py-1 rounded-lg text-sm font-bold mb-4 bg-slate-100 text-slate-600">
                      500mg • 3x Daily
                   </div>

                   <div className="p-4 rounded-2xl bg-slate-50">
                      <p className="text-sm font-bold mb-1 text-slate-400 uppercase tracking-wide">Instructions</p>
                      <p className="text-slate-700">Take with food. Complete full course.</p>
                   </div>
                </div>

                {/* Alert Card Mockup */}
                <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
                   <div className="flex items-center gap-3 text-rose-700 font-bold mb-2">
                     <AlertTriangle className="w-5 h-5" />
                     <h4>Interaction Alert</h4>
                   </div>
                   <p className="text-rose-900 text-sm leading-relaxed">
                     This medication may interact with <strong>Aspirin</strong>. Please consult your pharmacist.
                   </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default App;