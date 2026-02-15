import React from 'react';
import { Users, Shield, Cpu } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'משתתפים', value: '450+', icon: Users, desc: 'קצינים, מהנדסים ומקבלי החלטות' },
    { label: 'בתי תוכנה צה״ליים', value: '15+', icon: Cpu, desc: 'יחידות פיתוח וטכנולוגיה מובילות' },
    { label: 'תעשיות ביטחוניות וסטארטאפים', value: '10+', icon: Shield, desc: 'חברות ענק ומיזמים חדשניים' },
  ];

  const partners = [
    { name: 'Rafael', src: 'https://linnovate.net/wp-content/uploads/2025/01/Refael-Logo-scaled.jpg' },
    { name: 'Elbit Systems', src: 'https://linnovate.net/wp-content/uploads/2025/01/Elbit-Logo.png' },
    { name: 'IAI', src: 'https://linnovate.net/wp-content/uploads/2025/01/IAI-Logo.png' },
    { name: 'Hossted', src: 'https://linnovate.net/wp-content/uploads/2025/01/logo-dark.png' },
    { name: 'Modelyo', src: 'https://drive.google.com/thumbnail?id=1fDcwkofhPVD9Iw3O-jq77QOhdNUtJJaQ&sz=w1000' },
    { name: 'Kela', src: 'https://drive.google.com/thumbnail?id=1H_nz-BZ1-atNHkPX58M3YtBHZaeYARNL&sz=w1000' },
    { name: 'Energy Team', src: 'https://drive.google.com/thumbnail?id=1pReKmfPfIDuUc7-EBaOFzPZARNSyycAd&sz=w1000' },
    { name: 'Malam Defense', src: 'https://drive.google.com/thumbnail?id=1bw48a4FdbEORzvo4fjJwFkm8cx5xiI1q&sz=w1000' },
    { name: 'Linnovate', src: 'https://linnovate.net/wp-content/uploads/2024/11/Linnovate_black.png' },
  ];

  return (
    <section id="recap" className="py-24 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">מה היה לנו ב-2025?</h2>
          <p className="mt-4 text-xl text-slate-400">
            הצלחה מסחררת שחיברה את כל קצוות התעשייה
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden reveal delay-${(index + 1) * 100}`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon size={100} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-5 group-hover:scale-110 transition-transform">
                  <stat.icon size={32} />
                </div>
                <dd className="text-4xl font-black text-white mb-2">{stat.value}</dd>
                <dt className="text-lg font-bold text-slate-300">{stat.label}</dt>
                <p className="mt-2 text-sm text-slate-500">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 rounded-2xl p-8 lg:p-12 relative overflow-hidden reveal reveal-scale delay-200">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-800 via-transparent to-slate-800 z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20 items-center">
            <div className="reveal-left active:translate-x-0">
              <h3 className="text-2xl font-bold text-white mb-4">חוויה מקצועית יוצאת דופן</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                המשתתפים נהנו מהרצאות מעשירות, פאנלים מקצועיים והזדמנות ללמוד מהידע המצטבר בין היחידות ולשתף בפרוייקטים חדשניים. האירוע סיפק הצצה נדירה אל מאחורי הקלעים של העשייה הטכנולוגית-ביטחונית.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  הרצאות מומחים מהתעשייה והצבא
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  נטוורקינג עם בכירים ומקבלי החלטות
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  חשיפה לטכנולוגיות Dual-Use מתקדמות
                </li>
              </ul>
            </div>
            <div className="relative reveal-right active:translate-x-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30"></div>
                <img 
                  src="https://drive.google.com/thumbnail?id=1r_rdkWIeeHzR14OVawQhRvXkTX8hlJV_&sz=w1200" 
                  alt="OpenDefense Conference Audience" 
                  className="relative rounded-xl shadow-2xl border border-slate-700 w-full h-auto object-cover transform hover:scale-[1.02] transition duration-500" 
                />
            </div>
          </div>
        </div>

        {/* Partners / Organizers Section */}
        <div className="mt-24 reveal">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-black text-white">הכנס מופק באדיבות:</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className={`bg-white p-4 md:p-6 rounded-2xl flex items-center justify-center h-28 md:h-36 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-200 reveal delay-${(index % 4 + 1) * 100}`}>
                {partner.src ? (
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    className={`max-h-full max-w-full object-contain transition-transform duration-300 ${partner.name === 'Malam Defense' ? 'scale-125 p-0' : 'p-2'}`} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = 'none';
                        if (!parent.querySelector('.partner-text-fallback')) {
                          const text = document.createElement('span');
                          text.innerText = partner.name;
                          text.className = 'partner-text-fallback font-black text-slate-900 text-center text-sm md:text-base px-2';
                          parent.appendChild(text);
                        }
                      }
                    }}
                  />
                ) : (
                  <span className="font-black text-slate-900 text-center text-sm md:text-base px-2">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;