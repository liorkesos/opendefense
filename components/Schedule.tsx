import React from 'react';
import { Clock, Coffee, Mic, Users, Play, Shield, Code, Cpu, Plane, Ship, Radio, Target, Navigation } from 'lucide-react';

const scheduleData = [
  { time: '08:00', title: 'רישום וקפה', description: '', icon: Users, type: 'break' },
  { time: '09:05', title: 'דברי פתיחה', description: 'עמי שלזינגר, ליאור קיסוס', icon: Play, type: 'keynote' },
  { time: '09:25', title: 'פיתוח AI מתקדם בסביבה נתיקה', description: 'LLM , Bigdata , MCP | נציג רפאל, רפאל', icon: Shield, type: 'tech' },
  { time: '09:45', title: 'הנגשת AI ו-MLOPS - ממר״ם', description: 'אריאל פולק (מנהל מוצר AI הענן המבצעי), דין פלסן (מנכ"ל Dagshub)', icon: Cpu, type: 'tech' },
  { time: '10:05', title: 'Building Developer Ecosystems in Mobility', description: 'גל עוז-ארי, קלע מערכות', icon: Navigation, type: 'tech' },
  { time: '10:25', title: 'שימוש בקוד פתוח למערכת הביטחון', description: 'הזדמנות ל-RISC-V | אל״מ (מיל), פרופ׳ עודד מרגלית - מדען ראשי Next Silicon', icon: Code, type: 'tech' },
  { time: '10:45', title: 'הפסקה', description: '', icon: Coffee, type: 'break' },
  { time: '11:00', title: 'עבירות מבוססת AI', description: 'רס״ן ר׳ (רמ״ד עבירות ב-9900), עומר שלף (ראש תחום מיפוי, אלביט)', icon: Target, type: 'tech' },
  { time: '11:20', title: 'זיהוי איומים באמצעות סיבים אופטיים', description: 'איתן אלקין, Prisma Photonics', icon: Radio, type: 'tech' },
  { time: '11:40', title: 'Multi Edge to Multi Cloud and AI', description: 'Opensource to drive innovation | מני צרפתי, מלמ דיפנס', icon: Cpu, type: 'tech' },
  { time: '12:00', title: 'פאנל אמל״ח ואתגרים טאקטיים', description: '', icon: Users, type: 'keynote' },
  { time: '12:30', title: 'ארוחת צהריים', description: '', icon: Coffee, type: 'break' },
  { time: '13:20', title: 'מו״פ ביטורנט טאקטי', description: 'גיא מנור (ראש צוות GetApp, אלביט) / שי סעדה (לינווייט)', icon: Shield, type: 'tech' },
  { time: '13:40', title: 'ה-AAIF: קוד פתוח בעולם ה-AI', description: 'עמי שלזינגר', icon: Radio, type: 'keynote' },
  { time: '14:00', title: 'פאנל תעשיות ביטחוניות', description: '', icon: Users, type: 'keynote' },
  { time: '14:20', title: 'לגלוש על צונאמי עם נושאת מטוסים', description: 'ארז שרון, ארכיטקט AI, אלתא', icon: Plane, type: 'tech' },
  { time: '15:00', title: 'סיום', description: '', icon: Clock, type: 'general' },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white relative overflow-hidden">
      {/* Dynamic Defense Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Tactical Radar Grid - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] reveal reveal-scale">
           <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="none">
             <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.05" />
             <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.05" />
             <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.05" />
             <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.02" />
             <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.02" />
           </svg>
        </div>

        {/* Illustrations with reduced opacity */}
        <div className="absolute top-10 right-10 opacity-[0.015] text-slate-900 reveal reveal-right delay-300">
           <Plane size={250} strokeWidth={0.5} className="rotate-[-15deg]" />
        </div>
        <div className="absolute bottom-10 left-[-5%] opacity-[0.015] text-slate-900 reveal reveal-left delay-500">
           <Ship size={300} strokeWidth={0.3} />
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 reveal">
          <h2 className="text-xs text-primary font-black tracking-widest uppercase mb-1">SCHEDULE</h2>
          <p className="text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">תוכנית הכנס</p>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-2">
          {scheduleData.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-500 hover:translate-x-1 backdrop-blur-[2px] reveal delay-${Math.min((index % 6 + 1) * 100, 700)} ${
                item.type === 'break' 
                  ? 'bg-slate-100 border-slate-300 shadow-sm py-3' 
                  : 'bg-white/80 border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              {/* Time Column */}
              <div className="flex-shrink-0 w-16 text-center">
                <span className={`text-lg font-black block leading-none ${
                  item.type === 'break' ? 'text-slate-900 underline decoration-primary/50' : 'text-slate-900'
                }`}>{item.time}</span>
              </div>
              
              <div className={`w-px h-8 ${item.type === 'break' ? 'bg-slate-300' : 'bg-slate-200'}`}></div>

              {/* Icon Container */}
              <div className={`flex-shrink-0 p-2 rounded-xl transition-all duration-500 ${
                item.type === 'break'
                  ? 'bg-white text-secondary shadow-inner'
                  : 'bg-slate-50 text-slate-500 group-hover:bg-primary/10'
              }`}>
                <item.icon size={18} strokeWidth={2.5} />
              </div>

              {/* Content Column */}
              <div className="flex-grow text-right pr-1">
                <h4 className={`text-sm md:text-base font-black leading-snug ${
                  item.type === 'break' ? 'text-slate-900' : 'text-slate-800'
                }`}>
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-[11px] md:text-xs text-slate-500 font-bold mt-0.5 leading-tight">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Break Indicator Line */}
              {item.type === 'break' && (
                <div className="hidden sm:block w-8 h-px bg-slate-300 opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-100 px-5 py-2 rounded-full shadow-sm backdrop-blur-md">
             <Clock size={14} className="text-primary" />
             <p className="text-slate-600 text-[10px] md:text-xs font-bold">
               * התוכנית כפופה לשינויים בהתאם להנחיות גורמי הביטחון והפקה.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;