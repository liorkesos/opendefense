import React from 'react';
import { Mail, Lock, MapPin, Ticket, ShieldCheck, ExternalLink, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Registration Side */}
          <div className="reveal">
            <h2 className="text-4xl font-black text-white mb-6 underline decoration-primary/30 decoration-4 underline-offset-8">רישום לכנס לחיילי סדיר/קבע</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              הצטרפו למפגש הפסגה של הקוד הפתוח והבינה המלאכותית במגזר הביטחוני. האירוע מיועד למובילים טכנולוגיים, קצינים ובכירי התעשייה.
            </p>
            
            <div className="flex flex-col gap-8 mb-12">
              {/* Soldier Registration Button */}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe932AJxdxHV295LHFPpkim0IwmH0E5sXaU60Bn62vgACP1SA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between bg-slate-800 border-4 border-slate-700/50 hover:border-primary p-7 rounded-[2rem] transition-all duration-500 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 active:scale-95"
              >
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all group-hover:rotate-6">
                    <ShieldCheck size={40} className="text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-black text-2xl text-white mb-1">רישום לכנס לחיילי סדיר/קבע</h3>
                    <p className="text-sm text-slate-400 font-bold">הכניסה ללא עלות בהצגת תעודה מזהה</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-primary text-slate-950 px-6 py-3 rounded-xl font-black shadow-lg transform transition-transform group-hover:scale-110">
                  <span>להרשמה</span>
                  <ArrowLeft size={20} />
                </div>
              </a>

              {/* General Registration Button */}
              <a 
                href="https://www.eventbrite.com/e/opendefense-2026-tickets-1978896443533"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between bg-white p-7 rounded-[2rem] transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-primary/40 hover:-translate-y-2 active:scale-95 overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                
                <div className="flex items-center gap-6 relative z-10">
                  <div className="p-5 bg-slate-900 rounded-2xl group-hover:bg-primary transition-all group-hover:-rotate-6">
                    <Ticket size={40} className="text-white group-hover:text-slate-900" />
                  </div>
                  <div className="text-right text-slate-900">
                    <h3 className="font-black text-2xl mb-1">רכישת כרטיסים</h3>
                    <p className="text-sm text-slate-600 font-bold">לקהל הרחב, תעשיות ומגזר פרטי</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl font-black shadow-lg transform transition-transform group-hover:scale-110 relative z-10">
                  <span>שריינו מקום</span>
                  <ExternalLink size={20} />
                </div>
              </a>
            </div>

            <div className="p-5 bg-red-950/30 border-2 border-red-500/30 rounded-2xl mb-10 backdrop-blur-sm">
               <p className="text-red-200 text-sm font-black flex items-center gap-4 leading-relaxed">
                 <Lock size={24} className="shrink-0 text-red-400" />
                 <span>חשוב: הרישום וההשתתפות מותנים באישור גורמי ביטחון וצנזורה. האירוע מאובטח וסגור לקהל הרחב ללא רישום מאושר.</span>
               </p>
            </div>

            <div className="flex items-center gap-6 p-6 bg-slate-800/40 rounded-3xl border border-slate-700/50">
              <div className="p-4 bg-slate-700 rounded-2xl text-primary shadow-inner">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-white text-lg font-black">צריכים עזרה או רישום קבוצתי?</h4>
                <a href="mailto:opendefense@linnovate.net" className="text-primary hover:text-white transition-colors font-black text-xl underline decoration-2 underline-offset-4">
                  opendefense@linnovate.net
                </a>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="reveal flex flex-col h-full">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-700 h-full min-h-[550px] bg-slate-800 shadow-2xl group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.886073163148!2d34.796246323565935!3d32.10087811818292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4916a4959119%3A0xc35476579227181f!2sEretz%20Israel%20Museum!5e0!3m2!1sen!2sil!4v1709472620163!5m2!1sen!2sil"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) opacity(0.3)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Conference Location"
                ></iframe>
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center p-8 text-center group-hover:backdrop-blur-none transition-all duration-700">
                    <div className="bg-slate-900/95 p-10 rounded-[2rem] border-2 border-primary/40 shadow-2xl max-w-sm transform group-hover:scale-105 transition-all duration-500">
                        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                           <MapPin className="text-primary" size={48} />
                        </div>
                        <h4 className="text-white font-black text-2xl mb-3 leading-tight">מוז״א - מוזיאון ארץ ישראל</h4>
                        <p className="text-primary font-bold text-xl mb-4">תל אביב</p>
                        <p className="text-slate-400 font-medium mb-6">חיים לבנון 2, רמת אביב</p>
                        <div className="h-px bg-slate-700 w-full mb-6"></div>
                        <p className="text-slate-500 text-sm leading-relaxed italic">הנחיות הגעה ודגשי ביטחון יישלחו במייל לנרשמים שאושרו בלבד.</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;