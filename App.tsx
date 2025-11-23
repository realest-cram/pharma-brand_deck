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
  AlertTriangle,
  Camera,
  Scan,
  Settings,
  Wifi,
  Lock,
  X,
  HelpCircle,
  Ruler
} from 'lucide-react';

type MascotExpression = {
  emotion: 'happy' | 'thinking' | 'success' | 'alert';
  label: string;
  desc: string;
};

const Tablet = ({ children, className = '' }: { children?: React.ReactNode, className?: string }) => (
  <div className={`w-[380px] h-[270px] xl:w-[440px] xl:h-[310px] bg-white border-[12px] border-slate-800 rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col ${className}`}>
      {/* Sensor Array (Top Bezel - Landscape) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-b-xl z-20 flex items-center justify-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-slate-900/50 border border-slate-700"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50 border border-slate-700"></div>
      </div>
      {children}
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'identity' | 'system' | 'ui' | 'screens'>('identity');

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
                ].map((item: MascotExpression) => (
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

        {/* === SCREENS TAB (NEW) === */}
        {activeTab === 'screens' && (
          <div className="space-y-12 animate-fade-in">
             <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Landscape Kiosk Flow</h2>
              <p className="text-slate-500">
                A walkthrough of the 9 key states in the PharmaAID tablet experience, optimized for landscape interaction.
              </p>
            </div>

            {/* Grid Layout for Tablet Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 justify-items-center">
              
              {/* 1. Presence Detected */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">01. Presence Detected!</span>
                <Tablet className="bg-gradient-to-br from-emerald-50 to-white">
                  <div className="flex flex-row items-center h-full p-6 gap-6">
                    <div className="w-1/3 flex justify-center">
                      <div className="w-24 h-24">
                        <Mascot emotion="happy" />
                      </div>
                    </div>
                    <div className="w-2/3 text-left">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Hi there!</h3>
                      <p className="text-slate-600 text-xs mb-6 leading-relaxed">
                        I noticed you have a prescription. <br/>Shall we scan it together?
                      </p>
                      <Button className="py-2 px-6 text-sm shadow-lg shadow-emerald-200">Start Scanning</Button>
                    </div>
                  </div>
                  {/* Help Icon */}
                  <div className="absolute bottom-3 right-4 text-emerald-600/50">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                </Tablet>
              </div>

              {/* 2. PharmAID Info */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">02. PharmAID Info</span>
                <Tablet className="bg-white">
                  <div className="flex justify-between items-center px-5 py-3 border-b border-slate-100">
                     <span className="font-bold text-slate-900 text-sm">About</span>
                     <div className="p-1.5 bg-slate-100 rounded-full"><X className="w-3 h-3 text-slate-500" /></div>
                  </div>
                  <div className="p-5 flex gap-5 h-full">
                     <div className="w-1/3 flex flex-col items-center">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-3">
                           <Smile className="w-8 h-8" />
                        </div>
                        <div className="flex flex-wrap gap-1 justify-center">
                           <div className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-bold rounded">Private</div>
                           <div className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-bold rounded">Fast</div>
                        </div>
                     </div>
                     <div className="w-2/3">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">I am PharmaAID</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-2">
                          My goal is to help you understand your medication safely. I use advanced AI to read handwriting and check for safety interactions.
                        </p>
                     </div>
                  </div>
                </Tablet>
              </div>

              {/* 3. Shh! (Privacy) */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">03. Shh! (Privacy)</span>
                <Tablet className="bg-slate-900 text-white">
                  <div className="flex-1 flex flex-row items-center justify-center p-6 gap-6">
                     <div className="w-1/3">
                        <div className="w-24 h-24 opacity-90 mx-auto">
                          <Mascot emotion="shh" />
                        </div>
                     </div>
                     <div className="w-2/3 text-left">
                        <div className="flex items-center gap-2 mb-1 text-slate-400">
                           <Lock className="w-3 h-3" />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Strictly Confidential</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Your Privacy Matters</h3>
                        <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                          I process your prescription locally. No personal health data is sent to the cloud.
                        </p>
                        <button className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-xs hover:bg-slate-200 transition-colors">
                          I Understand
                        </button>
                     </div>
                  </div>
                </Tablet>
              </div>

              {/* 4. Click, Align, Snap! (Tutorial) */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">04. Click, Align, Snap!</span>
                <Tablet className="bg-white">
                  <div className="p-5 h-full flex flex-col">
                     <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">How to Scan</h3>
                     
                     <div className="grid grid-cols-3 gap-3 flex-1">
                        <div className="flex flex-col items-center text-center p-2 bg-slate-50 rounded-xl">
                           <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm mb-2">1</div>
                           <p className="text-xs text-slate-600">Place prescription flat on tray.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-2 bg-slate-50 rounded-xl">
                           <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-sm mb-2">2</div>
                           <p className="text-xs text-slate-600">Align corners with guides.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-2 bg-slate-50 rounded-xl">
                           <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center font-bold text-sm mb-2">3</div>
                           <p className="text-xs text-slate-600">Press capture button.</p>
                        </div>
                     </div>

                     <div className="mt-4 flex justify-center">
                        <Button className="py-2 px-8 text-sm">I'm Ready</Button>
                     </div>
                  </div>
                </Tablet>
              </div>

              {/* 5. Align, Snap! (Scanning) */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">05. Align, Snap!</span>
                <Tablet className="bg-slate-800">
                   <div className="h-full flex relative">
                      {/* Fake Camera Feed */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>
                      
                      <div className="flex-1 relative p-4">
                        {/* Corner Brackets */}
                        <div className="w-full h-full border-2 border-white/20 rounded-xl relative">
                           <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg"></div>
                           <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg"></div>
                           <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg"></div>
                           <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg"></div>
                           
                           <div className="absolute inset-0 flex items-center justify-center">
                             <p className="bg-black/50 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm">Hold Steady</p>
                           </div>
                        </div>
                      </div>

                      {/* Side Controls */}
                      <div className="w-24 bg-slate-900/80 backdrop-blur flex flex-col items-center justify-center gap-6 z-10 border-l border-white/10">
                        <button className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 transition-transform">
                          <div className="w-12 h-12 bg-white rounded-full"></div>
                        </button>
                        <button className="text-white/50 hover:text-white"><X className="w-6 h-6" /></button>
                      </div>
                   </div>
                </Tablet>
              </div>

              {/* 6. Waiting Room */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">06. Waiting Room</span>
                <Tablet className="bg-emerald-50">
                   <div className="flex-1 flex flex-row items-center justify-center p-6 gap-8">
                     <div className="w-24 h-24">
                       <Mascot emotion="thinking" />
                     </div>
                     <div className="flex flex-col items-start">
                       <h3 className="text-xl font-bold text-slate-800 mb-2">Reading...</h3>
                       <p className="text-slate-500 text-xs animate-pulse mb-4">
                         Identifying medications & dosages
                       </p>
                       
                       <div className="flex gap-2">
                         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
                       </div>
                     </div>
                   </div>
                </Tablet>
              </div>

              {/* 7. Found! (Results) */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">07. Found!</span>
                <Tablet className="bg-slate-50">
                   <div className="flex h-full">
                      <div className="w-1/3 bg-white border-r border-slate-100 p-4 flex flex-col items-center justify-center text-center z-10">
                         <div className="w-16 h-16 mb-3">
                            <Mascot emotion="success" />
                         </div>
                         <h3 className="font-bold text-slate-900 text-sm mb-1">Analysis Complete</h3>
                         <span className="text-xs text-emerald-600 font-medium">2 Items Found</span>
                      </div>
                      
                      <div className="w-2/3 flex flex-col h-full">
                         <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                            {/* Card 1 */}
                            <div className="bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                               <div className="flex justify-between mb-1">
                                  <span className="font-bold text-emerald-800 text-sm">Amoxicillin</span>
                                  <Check className="w-3 h-3 text-emerald-500" />
                               </div>
                               <div className="text-[10px] text-slate-500">500mg • 3x Daily</div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm opacity-60">
                               <div className="flex justify-between mb-1">
                                  <span className="font-bold text-slate-700 text-sm">Ibuprofen</span>
                                  <Check className="w-3 h-3 text-emerald-500" />
                               </div>
                               <div className="text-[10px] text-slate-500">400mg • As needed</div>
                            </div>
                         </div>

                         <div className="p-3 bg-white border-t border-slate-200 flex justify-between gap-2">
                            <Button className="flex-1 py-1.5 text-xs">Print</Button>
                            <Button variant="secondary" className="px-3 py-1.5"><Scan className="w-3 h-3" /></Button>
                         </div>
                      </div>
                   </div>
                </Tablet>
              </div>

              {/* 8. I need to setup! */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">08. I need to setup!</span>
                <Tablet className="bg-slate-100">
                   <div className="p-5 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-slate-200 rounded-lg"><Settings className="w-4 h-4 text-slate-600" /></div>
                        <h3 className="font-bold text-slate-900 text-sm">System Setup</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-3 flex-1 content-start">
                         <div className="bg-white p-3 rounded-xl flex flex-col justify-between border border-slate-200 h-24">
                            <div className="flex items-center gap-2 mb-2">
                               <Camera className="w-4 h-4 text-slate-400" />
                               <span className="text-xs font-medium text-slate-700">Camera</span>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">Connected</span>
                         </div>
                         
                         <div className="bg-white p-3 rounded-xl flex flex-col justify-between border border-slate-200 h-24">
                            <div className="flex items-center gap-2 mb-2">
                               <Ruler className="w-4 h-4 text-slate-400" />
                               <span className="text-xs font-medium text-slate-700">Distance Sensor</span>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">Active (45cm)</span>
                         </div>

                         <div className="bg-white p-3 rounded-xl flex flex-col justify-between border border-slate-200 h-24">
                            <div className="flex items-center gap-2 mb-2">
                               <Wifi className="w-4 h-4 text-slate-400" />
                               <span className="text-xs font-medium text-slate-700">Network</span>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">Online</span>
                         </div>
                      </div>

                      <div className="text-right text-[10px] text-slate-400 mt-2">v1.2.0</div>
                   </div>
                </Tablet>
              </div>

              {/* 9. I need help :< */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">09. I need help :&lt;</span>
                <Tablet className="bg-rose-50 border-rose-900/10">
                   <div className="flex-1 flex flex-row items-center justify-center p-6 gap-6">
                     <div className="w-1/3 flex justify-center">
                       <div className="w-24 h-24">
                         <Mascot emotion="alert" />
                       </div>
                     </div>
                     <div className="w-2/3">
                       <h3 className="text-lg font-bold text-rose-900 mb-1">Connection Error</h3>
                       <p className="text-rose-800/60 text-xs mb-4">
                         I lost connection to the camera service. Please check the cable connection.
                       </p>
                       
                       <div className="flex gap-2">
                          <Button variant="danger" className="text-xs py-2 flex-1">Retry</Button>
                          <Button variant="secondary" className="text-xs py-2 border-rose-200 text-rose-700 bg-white">Admin</Button>
                       </div>
                     </div>
                   </div>
                </Tablet>
              </div>

            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default App;