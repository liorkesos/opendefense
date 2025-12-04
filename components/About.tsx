import React from 'react';
import { Target, Share2, Lock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">על הכנס</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            לחבר את המוחות המבריקים ביותר בביטחון ובטכנולוגיה
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            OpenDefense-AI הוא כנס מקצועי המתקיים אחת לשנה ומציע הזדמנות ייחודית לחבר בין מומחי קוד פתוח, מובילי חדשנות בבינה מלאכותית, מהנדסים, קציני צה״ל בכירים ובכירי התעשיות הביטחוניות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition duration-300 reveal">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                    <Share2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">שיתוף ידע</h3>
                <p className="text-slate-400 leading-relaxed">
                    הזדמנות נדירה לשיתוף ידע בין היחידות הטכנולוגיות והתעשיות הצבאיות, לגבי טכנולוגיות חדשניות, סיפורי הצלחה ומגמות טכנולוגיות.
                </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition duration-300 reveal transition-delay-100">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6">
                    <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">חיבורים עסקיים ומבצעיים</h3>
                <p className="text-slate-400 leading-relaxed">
                    אנחנו מזמינים אתכם לפגוש את האנשים שמובילים את פיתוח היכולות המבצעיות של ישראל וליצור חיבורים שיכולים להפוך לפרויקטים משותפים.
                </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition duration-300 reveal transition-delay-200">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 mb-6">
                    <Lock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">אקסקלוסיביות</h3>
                <p className="text-slate-400 leading-relaxed">
                    האירוע מתקיים במתכונת סגורה למוזמנים בלבד, בליווי גורמי צנזורה וביטחון מידע, ומציג תכנים שלא נחשפים בשום מקום אחר.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;