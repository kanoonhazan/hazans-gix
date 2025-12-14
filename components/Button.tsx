import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-richBlack disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Vibrant gradient matching the Hero Text "Building intelligent systems"
    primary: "bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow text-richBlack font-bold hover:brightness-110 shadow-lg shadow-caribbeanGreen/20 hover:shadow-caribbeanGreen/40 border-0",
    
    // Secondary: Subtle "Glass" gradient using the same colors at low opacity
    secondary: "bg-gradient-to-r from-caribbeanGreen/10 to-mountainMeadow/10 text-antiFlashWhite border border-caribbeanGreen/20 hover:from-caribbeanGreen/20 hover:to-mountainMeadow/20 hover:border-caribbeanGreen/40 focus:ring-caribbeanGreen",
    
    // Outline: Kept for specific wireframe use cases, but aligned with the palette
    outline: "border border-mountainMeadow text-mountainMeadow hover:bg-mountainMeadow/10 focus:ring-mountainMeadow",
    
    // Text: Simple text link
    text: "text-antiFlashWhite hover:text-caribbeanGreen px-0 py-2",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;