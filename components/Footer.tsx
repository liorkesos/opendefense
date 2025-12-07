import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-4">
           <img 
            src="https://linnovate.net/wp-content/uploads/2024/07/logo.svg" 
            alt="Linnovate" 
            className="h-10 opacity-90 hover:opacity-100 transition-opacity"
          />
          <div className="text-center md:text-right">
             <p className="text-slate-500 text-sm">© כל הזכויות שמורות ל-Linnovate</p>
          </div>
        </div>

        <div className="flex gap-12">
           <a href="https://linnovate.net" className="text-slate-500 hover:text-white transition text-sm">linnovate</a>
           <a href="https://www.linkedin.com/company/linnovate-ltd" className="text-slate-500 hover:text-white transition text-sm">linkedin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;