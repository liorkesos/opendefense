import React from 'react';
import { Mail, Globe, ArrowLeft, Lock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="reveal">
            <h2 className="text-3xl font-bold text-white mb-6">הצטרפו למהפכה הבאה</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              האירוע מיועד למוזמנים בלבד ועובר סינון קפדני. אם אתם מובילים טכנולוגיים, קצינים או בכירים בתעשייה הביטחונית, נשמח לשמוע מכם.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-700 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">אימייל ליצירת קשר</h4>
                  <a href="mailto:opendefense@linnovate.net" className="text-slate-400 hover:text-primary transition">
                    opendefense@linnovate.net
                  </a>
                  <p className="text-slate-500 text-sm mt-1">איתמר מי-רז, Linnovate</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-700 rounded-lg text-primary">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">אתר רשמי</h4>
                  <a 
                    href="https://linnovate.net/opendefense-2026/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition flex items-center gap-2"
                  >
                    linnovate.net/opendefense-2026
                    <ArrowLeft size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-red-900/20 border border-red-900/50 rounded-xl">
               <p className="text-red-200 text-sm font-medium flex items-center gap-2">
                 <Lock size={16} />
                 שימו לב: הרישום מותנה באישור גורמי ביטחון וצנזורה.
               </p>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 relative rounded-2xl overflow-hidden border border-slate-700 h-64 bg-slate-800 shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.886073163148!2d34.796246323565935!3d32.10087811818292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4916a4959119%3A0xc35476579227181f!2sEretz%20Israel%20Museum!5e0!3m2!1sen!2sil!4v1709472620163!5m2!1sen!2sil"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) opacity(0.6)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Conference Location"
                ></iframe>
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex items-center justify-center p-6 text-center">
                    <div className="bg-slate-900/95 p-4 rounded-xl border border-primary/40 shadow-2xl">
                        <MapPin className="mx-auto text-primary mb-2" size={32} />
                        <p className="text-white font-bold text-lg">מוז״א - מוזיאון ארץ ישראל, תל אביב</p>
                        <p className="text-slate-400 text-sm mt-1">המפה להמחשה בלבד. מיקום מדויק יישלח לנרשמים.</p>
                    </div>
                </div>
            </div>

          </div>

          {/* Form Side (Mockup) */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 reveal transition-delay-200">
            <h3 className="text-xl font-bold text-white mb-6">בקשת רישום ראשוני</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-400 mb-1">שם פרטי</label>
                  <input type="text" id="firstName" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-400 mb-1">שם משפחה</label>
                  <input type="text" id="lastName" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition" />
                </div>
              </div>

              <div>
                <label htmlFor="org" className="block text-sm font-medium text-slate-400 mb-1">ארגון / יחידה</label>
                <input type="text" id="org" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">אימייל ארגוני</label>
                <input type="email" id="email" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">הערות נוספות</label>
                <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-lime-400 text-slate-900 font-bold py-3 rounded-lg transition shadow-lg hover:shadow-primary/40 mt-2">
                שלח בקשה
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">
                פרטיך ישמרו במערכת לטובת יצירת קשר בלבד.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;