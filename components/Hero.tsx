import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://linnovate.net/wp-content/uploads/2025/01/image-1285.png" 
          alt="Cyber Security Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block animate-fade-in">
             <span className="py-1 px-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            הכנס השנתי לקוד פתוח במגזר הביטחוני
          </span>
        </div>
       
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-2xl animate-fade-in">
          <span className="block">OpenDefense 2026</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary mt-2">
חדשנות פתוחה במגזר הביטחוני          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed animate-fade-in delay-100">
          המקום בו טכנולוגיה פוגשת מבצעיות. הכנס המוביל המחבר בין קהילת הקוד הפתוח, מומחי AI ובכירי התעשיות הביטחוניות.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium text-slate-300 animate-fade-in delay-200">
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 backdrop-blur-sm">
            <Calendar className="text-primary" size={20} />
            <span>12 למרץ, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 backdrop-blur-sm">
            <MapPin className="text-primary" size={20} />
            <span>מיקום יימסר לנרשמים</span>
          </div>
        </div>

        <div className="mt-12 animate-fade-in delay-300">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-slate-900 bg-gradient-to-r from-primary to-lime-500 hover:from-lime-400 hover:to-primary transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] transform hover:-translate-y-1"
          >
            להרשמה ופרטים נוספים
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;