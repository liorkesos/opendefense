import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg text-white">OpenDefense-AI 2026</span>
          <p className="text-slate-500 text-sm">© כל הזכויות שמורות ל-Linnovate</p>
        </div>
        <div className="flex gap-6">
           <a href="#" className="text-slate-500 hover:text-white transition text-sm">תקנון</a>
           <a href="#" className="text-slate-500 hover:text-white transition text-sm">נגישות</a>
           <a href="#" className="text-slate-500 hover:text-white transition text-sm">פרטיות</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
