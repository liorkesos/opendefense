import React from 'react';
import { Clock, Coffee, Mic, Users, Play, Shield, Code, Cpu, Plane, Ship, Radio, Target, Navigation } from 'lucide-react';

const scheduleData = [
  { time: '08:00', title: 'רישום וקפה', description: '', icon: Users, type: 'general' },
  { time: '09:00', title: 'דברי פתיחה', description: 'עמי שלזינגר, ליאור קיסוס', icon: Play, type: 'keynote' },
  { time: '09:15', title: 'פיתוח AI מתקדם בסביבה נתיקה', description: 'נציג רפאל, רפאל - LLM, Bigdata, MCP', icon: Shield, type: 'tech' },
  { time: '09:45', title: 'הנגשת AI ו-MLOPS - ממר״ם', description: 'אריאל פולק (מנהל מוצר AI הענן המבצעי), דין פלסן (מנכ"ל Dagshub)', icon: Cpu, type: 'tech' },
  { time: '10:05', title: 'Building Developer Ecosystems in Mobility', description: 'גל עוז-ארי, קלע מערכות', icon: Navigation, type: 'tech' },
  { time: '10:25', title: 'CodeGuru Xtreme', description: 'אל״מ (מיל) עודד מרגלית - מדען ראשי Next Silicon', icon: Code, type: 'tech' },
  { time: '10:45', title: 'הפסקה', description: '', icon: Coffee, type: 'break' },
  { time: '11:00', title: 'עבירות מבוססת AI', description: 'רס״ן ר׳ (רמ״ד עבירות ב-9900), עומר שלף (ראש תחום מיפוי, אלביט)', icon: Target, type: 'tech' },
  { time: '11:20', title: 'שימושי AI לזיהוי איומים', description: 'איתן אלקין, Prisma Photonics - באמצעות סיבים אופטיים', icon: Radio, type: 'tech' },
  { time: '11:40', title: 'Multi Edge to Multi Cloud and AI', description: 'מני צרפתי, מלמ דיפנס - Opensource to drive innovation', icon: Cpu, type: 'tech' },
  { time: '12:00', title: 'מו״פ ביטורנט טאקטי', description: 'גיא מנור (ראש צוות GetApp, אלביט), שי סעדה (לינווייט)', icon: Shield, type: 'tech' },
  { time: '12:30', title: 'הפסקה', description: '', icon: Coffee, type: 'break' },
  { time: '12:50', title: 'ה-AAIF: התאגדות ותקינה פתוחה', description: 'עמי שלזינגר - בעולם ה-AI', icon: Radio, type: 'keynote' },
  { time: '13:10', title: 'פאנל תעשיות ביטחוניות', description: '', icon: Users, type: 'keynote' },
  { time: '13:30', title: 'לגלוש על צונאמי עם נושאת מטוסים', description: 'ארז שרון, ארכיטקט AI, אלתא', icon: Plane, type: 'tech' },
  { time: '14:00', title: 'ארוחת צהריים', description: '', icon: Coffee, type: 'break' },
  { time: '15:00', title: 'סיום', description: '', icon: Clock, type: 'general' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Defense Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Tactical Radar Grid - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] reveal reveal-scale">
           <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="none">
             <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.05" />
             <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.05" />
             <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.05" />
             <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.02" />
             <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.02" />
           </svg>
        </div>

        {/* Fighter Jet - Top Right, slides in from top-right */}
        <div className="absolute top-10 right-10 opacity-[0.04] text-slate-900 reveal reveal-right delay-300">
           <Plane size={300} strokeWidth={0.5} className="rotate-[-15deg]" />
        </div>

        {/* Naval Ship (Stil) - Bottom Left, slides in from bottom-left */}
        <div className="absolute bottom-20 left-[-5%] opacity-[0.04] text-slate-900 reveal reveal-left delay-500">
           <Ship size={400} strokeWidth={0.3} />
        </div>

        {/* Tank Illustration (Custom Path) - Mid Right */}
        <div className="absolute top-1/3 right-[-5%] opacity-[0.03] text-slate-900 reveal reveal-right delay-700">
           <svg width="400" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
             <path d="M4 11h16v4H4zM6 15v2h12v-2M10 8h4v3h-4zM12 4v4M14 6h4" />
           </svg>
        </div>

        {/* Command & Control (C2) / Radio Elements - Scattered */}
        <div className="absolute top-1/4 left-10 opacity-[0.05] text-slate-900 reveal reveal-scale delay-100">
           <Radio size={120} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-[0.03] text-slate-900 reveal reveal-scale delay-400">
           <Target size={180} strokeWidth={0.2} />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-[0.04] text-slate-900 reveal reveal-scale delay-600">
           <Navigation size={150} strokeWidth={0.3} className="rotate-45" />
        </div>

      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-base text-primary font-black tracking-widest uppercase mb-2">SCHEDULE</h2>
          <p className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tight">תוכנית הכנס</p>
          <div className="mt-6 w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 p-5 rounded-3xl border transition-all duration-700 hover:scale-[1.01] backdrop-blur-[4px] reveal delay-${Math.min((index % 6 + 1) * 100, 700)} ${
                item.type === 'break' 
                  ? 'bg-slate-50/70 border-slate-100 opacity-80 italic' 
                  : 'bg-white/80 border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300'
              }`}
            >
              {/* Time Column */}
              <div className="flex-shrink-0 w-24 text-center">
                <span className="text-2xl font-black text-slate-900 block leading-none">{item.time}</span>
              </div>
              
              <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>

              {/* Icon Container */}
              <div className={`flex-shrink-0 p-4 rounded-2xl transition-all duration-500 ${
                item.type === 'break'
                  ? 'bg-slate-200 text-slate-500 scale-90'
                  : 'bg-slate-100 text-slate-600 group-hover:bg-primary/20 transition-colors'
              }`}>
                <item.icon size={28} strokeWidth={2.5} />
              </div>

              {/* Content Column */}
              <div className="flex-grow text-right pr-2">
                <h4 className="text-xl font-black leading-tight text-slate-800">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-sm text-slate-500 font-bold mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center gap-3 bg-white/90 border border-slate-200 px-8 py-4 rounded-3xl shadow-xl backdrop-blur-md">
             <Clock size={20} className="text-primary animate-pulse" />
             <p className="text-slate-700 text-sm font-bold">
               * התוכנית כפופה לשינויים בהתאם להנחיות גורמי הביטחון והפקה.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;