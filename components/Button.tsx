import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-base transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20 focus:ring-emerald-500/50",
    secondary: "bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 focus:ring-slate-200 shadow-sm",
    danger: "bg-rose-50 text-rose-700 border border-rose-100 hover:bg-rose-100 focus:ring-rose-500/50",
    ghost: "bg-transparent text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500/30 shadow-none"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;