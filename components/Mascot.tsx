import React from 'react';

export type Emotion = 'happy' | 'thinking' | 'waiting' | 'alert' | 'success' | 'shh';

interface MascotProps {
  emotion?: Emotion;
  className?: string;
}

const Mascot: React.FC<MascotProps> = ({ emotion = 'happy', className = '' }) => {
  // Brand Color Logic
  const getColors = () => {
    switch (emotion) {
      case 'alert': return { primary: '#F43F5E', secondary: '#FDA4AF', glow: '#FECDD3', face: '#1E293B' }; // Rose
      case 'thinking': return { primary: '#3B82F6', secondary: '#93C5FD', glow: '#DBEAFE', face: '#1E293B' }; // Blue
      case 'success': return { primary: '#10B981', secondary: '#6EE7B7', glow: '#D1FAE5', face: '#1E293B' }; // Emerald
      case 'shh': return { primary: '#94A3B8', secondary: '#CBD5E1', glow: '#F1F5F9', face: '#1E293B' }; // Slate
      default: return { primary: '#10B981', secondary: '#6EE7B7', glow: '#D1FAE5', face: '#1E293B' }; // Emerald default
    }
  };

  const colors = getColors();
  
  // Animation classes
  const blinkAnim = emotion === 'happy' || emotion === 'waiting' ? 'animate-blink' : '';
  const bounceAnim = emotion === 'thinking' ? 'animate-bounce' : '';
  const floatAnim = 'animate-bounce-gentle';

  return (
    <div className={`relative ${className} ${floatAnim}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        {/* Aura/Glow */}
        <circle cx="100" cy="100" r="90" fill={colors.glow} fillOpacity="0.5" className="animate-pulse" />

        {/* Torso */}
        <path d="M60 130 C 60 130, 140 130, 140 130 L 140 180 C 140 190, 130 200, 120 200 L 80 200 C 70 200, 60 190, 60 180 Z" fill="white" />
        {/* Medical Cross Detail on Torso */}
        <rect x="92" y="150" width="16" height="40" rx="2" fill="#E2E8F0" />
        <rect x="80" y="162" width="40" height="16" rx="2" fill="#E2E8F0" />

        {/* Neck */}
        <rect x="85" y="110" width="30" height="25" fill="#CBD5E1" rx="5" />

        {/* Head Shape */}
        <rect x="40" y="30" width="120" height="90" rx="40" fill="white" stroke={colors.secondary} strokeWidth="4" />
        
        {/* Screen/Face Area */}
        <rect x="52" y="45" width="96" height="60" rx="25" fill={colors.face} />

        {/* --- Expressions --- */}

        {/* Happy / Default */}
        {emotion === 'happy' && (
          <g className={blinkAnim} transform-origin="100 75">
             <circle cx="75" cy="70" r="7" fill={colors.primary} />
             <circle cx="125" cy="70" r="7" fill={colors.primary} />
             <path d="M85 85 Q100 95 115 85" stroke={colors.primary} strokeWidth="4" strokeLinecap="round" />
          </g>
        )}

        {/* Success / Winking/Happy */}
        {emotion === 'success' && (
          <g>
             {/* Left Eye Winking */}
             <path d="M70 75 L85 75" stroke={colors.primary} strokeWidth="4" strokeLinecap="round" />
             {/* Right Eye Open */}
             <circle cx="125" cy="70" r="7" fill={colors.primary} />
             <path d="M85 85 Q100 95 115 85" stroke={colors.primary} strokeWidth="4" strokeLinecap="round" />
             {/* Sparkles */}
             <path d="M150 40 L155 50 L160 40 L155 30 Z" fill={colors.primary} className="animate-pulse" />
          </g>
        )}

        {/* Thinking / Loading */}
        {emotion === 'thinking' && (
          <g>
            <circle cx="70" cy="75" r="6" fill={colors.primary} className={bounceAnim} style={{animationDelay: '0ms'}}/>
            <circle cx="100" cy="75" r="6" fill={colors.primary} className={bounceAnim} style={{animationDelay: '150ms'}}/>
            <circle cx="130" cy="75" r="6" fill={colors.primary} className={bounceAnim} style={{animationDelay: '300ms'}}/>
          </g>
        )}

        {/* Alert / Worried */}
        {emotion === 'alert' && (
           <g>
              <circle cx="75" cy="75" r="6" fill={colors.primary} />
              <circle cx="125" cy="75" r="6" fill={colors.primary} />
              {/* Mouth Frown */}
              <path d="M85 95 Q100 85 115 95" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" />
              {/* Sweat drop */}
              <path d="M135 50 Q135 60 140 60 Q145 60 145 50 Q140 40 135 50" fill="#3B82F6" opacity="0.8" />
           </g>
        )}
        
        {/* Waiting / Idle */}
        {emotion === 'waiting' && (
           <g className={blinkAnim}>
              <circle cx="75" cy="75" r="6" fill={colors.primary} />
              <circle cx="125" cy="75" r="6" fill={colors.primary} />
              <line x1="90" y1="90" x2="110" y2="90" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" />
           </g>
        )}

        {/* Shh / Privacy */}
        {emotion === 'shh' && (
           <g>
              {/* Happy eyes closed/curved */}
              <path d="M70 75 Q75 70 80 75" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" />
              <path d="M120 75 Q125 70 130 75" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" />
              {/* Finger (capsule) */}
              <rect x="94" y="80" width="12" height="25" rx="6" fill={colors.primary} />
           </g>
        )}

        {/* Antenna */}
        <line x1="100" y1="30" x2="100" y2="10" stroke={colors.secondary} strokeWidth="4" />
        <circle cx="100" cy="10" r="8" fill={colors.primary} className="animate-pulse" />
      </svg>
    </div>
  );
};

export default Mascot;