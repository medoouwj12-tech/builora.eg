import React, { useEffect, useRef, useState } from 'react';
import {
  Truck, Package, MapPin, Search, ShoppingBag, Heart, Star, CalendarCheck, Stethoscope, Clock, CheckCircle2,
  QrCode, Utensils, Activity, TrendingUp, Users, Building2, CreditCard, Lock, Boxes, Barcode, AlertTriangle,
  LayoutDashboard, Bell, Wallet
} from 'lucide-react';

/* ---------- shared frames ---------- */
function Browser({ className = '', url = 'buildora.net', dark = false, children }) {
  return (
    <div className={`absolute rounded-lg overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.55)] ${dark ? 'bg-ink-900' : 'bg-white'} ${className}`}>
      <div className={`flex items-center gap-1 px-2 py-1 ${dark ? 'bg-ink-950' : 'bg-slate-100'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className={`ml-2 flex-1 h-2.5 rounded text-[6px] leading-[10px] px-1.5 truncate ${dark ? 'bg-white/5 text-white/40' : 'bg-white text-slate-400'}`}>{url}</span>
      </div>
      {children}
    </div>
  );
}

function Phone({ className = '', children }) {
  return (
    <div className={`absolute rounded-[14px] bg-ink-950 p-[3px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] ${className}`}>
      <div className="relative w-full h-full rounded-[11px] overflow-hidden bg-white">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-ink-950 z-10" />
        {children}
      </div>
    </div>
  );
}

const Bars = ({ values, className = 'bg-brand-500' }) => (
  <div className="flex items-end gap-[3px] h-full">
    {values.map((v, i) => (
      <div key={i} className={`flex-1 rounded-t-sm ${className}`} style={{ height: `${v}%` }} />
    ))}
  </div>
);

/* ---------- 1. Logistics ERP ---------- */
function LogisticsScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-850 to-brand-800">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(77,134,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(77,134,255,.4)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <Browser dark url="erp.apex-logistics.com" className="left-[6%] top-[10%] w-[78%] h-[72%]">
        <div className="flex h-full">
          <div className="w-[18%] bg-ink-950 p-1.5 space-y-1.5">
            {[LayoutDashboard, Truck, Package, MapPin, Users].map((I, i) => (
              <div key={i} className={`h-4 rounded flex items-center justify-center ${i === 1 ? 'bg-brand-500' : ''}`}>
                <I className="w-2.5 h-2.5 text-white/70" />
              </div>
            ))}
          </div>
          <div className="flex-1 p-2 space-y-1.5">
            <div className="grid grid-cols-3 gap-1">
              {[['Shipments', 'text-brand-300'], ['On-time', 'text-emerald-300'], ['Fleet', 'text-amber-300']].map(([l, c]) => (
                <div key={l} className="rounded bg-white/5 p-1">
                  <div className="text-[5px] text-white/40">{l}</div>
                  <div className={`h-1.5 w-2/3 mt-0.5 rounded ${c.replace('text', 'bg')}`} />
                </div>
              ))}
            </div>
            {/* route map */}
            <div className="relative h-[46%] rounded bg-[#0b1a33] overflow-hidden">
              <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M5 40 C25 10, 45 45, 60 20 S 90 10, 95 8" fill="none" stroke="#4D86FF" strokeWidth="1.2" strokeDasharray="3 2" />
                <path d="M8 12 C30 30, 50 5, 92 38" fill="none" stroke="#22D3EE" strokeWidth="0.8" opacity="0.6" />
                {[[5, 40], [60, 20], [95, 8], [8, 12], [92, 38]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="1.8" fill={i < 3 ? '#4D86FF' : '#22D3EE'} />
                ))}
              </svg>
              <div className="absolute left-[55%] top-[18%] flex items-center gap-0.5 bg-white rounded px-1 py-[1px] text-[5px] font-bold text-ink-900">
                <Truck className="w-2 h-2 text-brand-500" /> TRK-204
              </div>
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1 rounded bg-white/5 px-1 py-0.5">
                <Package className="w-2 h-2 text-brand-300" />
                <div className="h-1 flex-1 rounded bg-white/15" />
                <span className={`text-[5px] px-1 rounded ${i === 1 ? 'bg-amber-400/20 text-amber-300' : 'bg-emerald-400/20 text-emerald-300'}`}>{i === 1 ? 'Transit' : 'Delivered'}</span>
              </div>
            ))}
          </div>
        </div>
      </Browser>
      <Phone className="right-[5%] bottom-[7%] w-[23%] h-[56%]">
        <div className="h-full bg-slate-50 pt-3 px-1.5">
          <div className="text-[6px] font-extrabold text-ink-900">Track shipment</div>
          <div className="mt-1 rounded bg-gradient-to-br from-brand-500 to-brand-cyan h-[30%] flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          {['Picked up', 'In transit', 'Out for delivery'].map((s, i) => (
            <div key={s} className="flex items-center gap-1 mt-1.5">
              <span className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-brand-500' : 'bg-slate-300'}`} />
              <span className="text-[5px] text-slate-600">{s}</span>
            </div>
          ))}
        </div>
      </Phone>
    </div>
  );
}

/* ---------- 2. Fashion store ---------- */
function FashionScene() {
  const products = [
    ['from-rose-200 to-pink-100', '👗'],
    ['from-amber-100 to-orange-50', '👜'],
    ['from-slate-200 to-slate-100', '🧥'],
    ['from-sky-100 to-indigo-100', '👠']
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#f6efe9] via-[#efe4dc] to-brand-200">
      <Browser url="lumina-store.com" className="left-[5%] top-[9%] w-[72%] h-[76%]">
        <div className="flex items-center justify-between px-2 py-1 border-b border-slate-100">
          <span className="text-[7px] font-extrabold tracking-[0.2em] text-ink-900">LUMINA</span>
          <div className="flex gap-1.5 text-[5px] text-slate-500"><span>NEW</span><span>WOMEN</span><span>MEN</span></div>
          <div className="flex gap-1"><Search className="w-2 h-2 text-slate-500" /><ShoppingBag className="w-2 h-2 text-slate-800" /></div>
        </div>
        <div className="relative h-[36%] bg-gradient-to-r from-ink-900 to-brand-700 flex items-center px-3 overflow-hidden">
          <div>
            <div className="text-[5px] tracking-widest text-brand-200">AUTUMN 2026</div>
            <div className="text-[10px] font-extrabold text-white leading-tight">The Luxe<br />Collection</div>
            <div className="mt-1 inline-block bg-white text-ink-900 text-[5px] font-bold px-1.5 py-0.5 rounded-full">Shop now</div>
          </div>
          <div className="absolute right-2 bottom-0 text-[38px] leading-none">🧥</div>
        </div>
        <div className="grid grid-cols-4 gap-1.5 p-2">
          {products.map(([c, e], i) => (
            <div key={i}>
              <div className={`relative aspect-[3/4] rounded bg-gradient-to-b ${c} flex items-center justify-center text-lg`}>
                {e}
                <Heart className={`absolute top-0.5 right-0.5 w-1.5 h-1.5 ${i === 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
              </div>
              <div className="h-1 w-3/4 rounded bg-slate-200 mt-1" />
              <div className="h-1 w-1/2 rounded bg-slate-300 mt-0.5" />
            </div>
          ))}
        </div>
      </Browser>
      <Phone className="right-[5%] bottom-[6%] w-[24%] h-[60%]">
        <div className="h-full bg-white pt-3">
          <div className="mx-1.5 aspect-square rounded bg-gradient-to-b from-rose-200 to-pink-100 flex items-center justify-center text-2xl">👗</div>
          <div className="px-1.5 mt-1 text-[6px] font-extrabold text-ink-900">Silk Dress</div>
          <div className="px-1.5 flex gap-0.5 mt-0.5">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-1.5 h-1.5 fill-amber-400 text-amber-400" />)}</div>
          <div className="px-1.5 flex gap-1 mt-1">{['S', 'M', 'L'].map((s, i) => <span key={s} className={`text-[5px] w-3 h-3 rounded-full flex items-center justify-center border ${i === 1 ? 'bg-ink-900 text-white border-ink-900' : 'border-slate-300'}`}>{s}</span>)}</div>
          <div className="mx-1.5 mt-1.5 rounded-full bg-brand-500 text-white text-[5px] font-bold text-center py-1">Add to bag</div>
        </div>
      </Phone>
    </div>
  );
}

/* ---------- 3. Clinic booking ---------- */
function ClinicScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-500 to-brand-600">
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/15" />
      <Browser url="medcare-clinics.com/booking" className="left-[5%] top-[10%] w-[70%] h-[74%]">
        <div className="p-2 flex gap-2 h-full">
          <div className="w-[42%] space-y-1">
            <div className="text-[6px] font-extrabold text-ink-900 flex items-center gap-0.5"><Stethoscope className="w-2 h-2 text-brand-500" /> Our doctors</div>
            {[['👩‍⚕️', 'from-sky-200 to-brand-200'], ['👨‍⚕️', 'from-emerald-100 to-teal-200'], ['🧑‍⚕️', 'from-indigo-100 to-brand-200']].map(([e, c], i) => (
              <div key={i} className={`flex items-center gap-1 rounded p-1 ${i === 0 ? 'bg-brand-50 ring-1 ring-brand-200' : 'bg-slate-50'}`}>
                <span className={`w-4 h-4 rounded bg-gradient-to-br ${c} flex items-center justify-center text-[8px]`}>{e}</span>
                <div className="flex-1"><div className="h-1 w-3/4 rounded bg-slate-300" /><div className="h-1 w-1/2 rounded bg-slate-200 mt-0.5" /></div>
                <Star className="w-1.5 h-1.5 fill-amber-400 text-amber-400" />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[6px] font-extrabold text-ink-900">November 2026</span>
              <CalendarCheck className="w-2 h-2 text-brand-500" />
            </div>
            <div className="grid grid-cols-7 gap-[2px] mt-1">
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} className={`aspect-square rounded-[2px] text-[4px] flex items-center justify-center ${
                  i === 17 ? 'bg-brand-500 text-white' : [3, 9, 12, 22].includes(i) ? 'bg-slate-100 text-slate-300' : 'bg-slate-50 text-slate-500'
                }`}>{i + 1}</div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-[2px] mt-1">
              {['10:00', '11:30', '13:00'].map((s, i) => (
                <div key={s} className={`text-[4.5px] text-center rounded py-[1px] ${i === 1 ? 'bg-ink-900 text-white' : 'bg-slate-100 text-slate-500'}`}>{s}</div>
              ))}
            </div>
          </div>
        </div>
      </Browser>
      <Phone className="right-[5%] bottom-[7%] w-[23%] h-[58%]">
        <div className="h-full bg-slate-50 pt-3 px-1.5">
          <div className="rounded bg-emerald-500 p-1 text-white text-center">
            <CheckCircle2 className="w-3 h-3 mx-auto" />
            <div className="text-[5px] font-bold mt-0.5">Booking confirmed</div>
          </div>
          <div className="mt-1 rounded bg-white p-1 border border-slate-100">
            <div className="flex items-center gap-0.5 text-[5px] text-slate-600"><Clock className="w-1.5 h-1.5" /> Tue 18 · 11:30</div>
            <div className="flex items-center gap-0.5 text-[5px] text-slate-600 mt-0.5"><MapPin className="w-1.5 h-1.5" /> Cairo branch</div>
          </div>
          <div className="mt-1 rounded bg-[#25D366]/15 text-[5px] text-emerald-700 font-semibold p-1">WhatsApp reminder ✓</div>
        </div>
      </Phone>
    </div>
  );
}

/* ---------- 4. Restaurant QR menu ---------- */
function MenuScene() {
  const dishes = [['🍔', 'Burger'], ['🍕', 'Pizza'], ['🥗', 'Salad'], ['🍝', 'Pasta']];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] via-[#3b1d10] to-brand-700">
      <div className="absolute left-[8%] top-[14%] w-[30%] aspect-square rounded-xl bg-white p-2 shadow-2xl rotate-[-6deg]">
        <svg viewBox="0 0 21 21" className="w-full h-full" shapeRendering="crispEdges">
          {[[0, 0], [14, 0], [0, 14]].map(([x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width="7" height="7" fill="#070A12" />
              <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
              <rect x={x + 2} y={y + 2} width="3" height="3" fill="#1F63FF" />
            </g>
          ))}
          {Array.from({ length: 21 * 21 }).map((_, k) => {
            const x = k % 21, y = Math.floor(k / 21);
            const inFinder = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
            return !inFinder && (x * 7 + y * 13 + x * y) % 3 === 0 ? <rect key={k} x={x} y={y} width="1" height="1" fill="#070A12" /> : null;
          })}
        </svg>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[6px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-0.5">
          <QrCode className="w-2 h-2" /> Scan menu
        </div>
      </div>
      <div className="absolute left-[10%] bottom-[10%] text-[34px] drop-shadow-xl">🍽️</div>
      <Phone className="left-[44%] top-[7%] w-[28%] h-[86%]">
        <div className="h-full bg-white pt-3">
          <div className="mx-1.5 rounded bg-gradient-to-r from-orange-500 to-rose-500 p-1.5 text-white">
            <div className="text-[5px] opacity-80">Today's special</div>
            <div className="text-[7px] font-extrabold">DineQR Kitchen</div>
          </div>
          <div className="flex gap-0.5 px-1.5 mt-1">{['All', 'Mains', 'Drinks'].map((c, i) => <span key={c} className={`text-[4.5px] px-1 py-[1px] rounded-full ${i === 0 ? 'bg-ink-900 text-white' : 'bg-slate-100 text-slate-500'}`}>{c}</span>)}</div>
          <div className="grid grid-cols-2 gap-1 p-1.5">
            {dishes.map(([e, n]) => (
              <div key={n} className="rounded bg-orange-50 p-1">
                <div className="text-base text-center">{e}</div>
                <div className="text-[5px] font-bold text-ink-900 text-center">{n}</div>
                <div className="mt-0.5 mx-auto w-2.5 h-2.5 rounded-full bg-brand-500 text-white text-[5px] flex items-center justify-center">+</div>
              </div>
            ))}
          </div>
        </div>
      </Phone>
      <div className="absolute right-[5%] top-[18%] w-[22%] rounded-lg bg-white/95 p-1.5 shadow-xl">
        <div className="flex items-center gap-0.5 text-[6px] font-extrabold text-ink-900"><Utensils className="w-2 h-2 text-orange-500" /> New order</div>
        {['Table 4', 'Table 9', 'Takeaway'].map((t, i) => (
          <div key={t} className="flex items-center justify-between mt-1 text-[5px]">
            <span className="text-slate-600">{t}</span>
            <span className={`px-1 rounded ${i === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{i === 0 ? 'Ready' : 'Cooking'}</span>
          </div>
        ))}
      </div>
      <div className="absolute right-[7%] bottom-[14%] w-[20%] rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur p-1.5 text-white">
        <div className="text-[5px] opacity-70">Orders today</div>
        <div className="h-6 mt-1"><Bars values={[30, 50, 40, 70, 90, 60, 80]} className="bg-orange-400" /></div>
      </div>
    </div>
  );
}

/* ---------- 5. Analytics SaaS ---------- */
function AnalyticsScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-ink-900 to-brand-700">
      <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-brand-cyan/20 blur-3xl" />
      <Browser dark url="app.nexus-analytics.io" className="left-[6%] top-[9%] w-[88%] h-[80%]">
        <div className="p-2 h-[calc(100%-14px)] grid grid-cols-3 grid-rows-[auto_1fr_1fr] gap-1.5">
          {[['Users', Users, 'text-brand-300'], ['Revenue', Wallet, 'text-emerald-300'], ['Growth', TrendingUp, 'text-brand-cyan']].map(([l, I, c]) => (
            <div key={l} className="rounded bg-white/5 ring-1 ring-white/10 p-1 flex items-center gap-1">
              <I className={`w-2.5 h-2.5 ${c}`} />
              <div className="flex-1"><div className="text-[5px] text-white/40">{l}</div><div className="h-1 w-2/3 rounded bg-white/30 mt-0.5" /></div>
            </div>
          ))}
          <div className="col-span-2 rounded bg-white/5 ring-1 ring-white/10 p-1 relative">
            <div className="text-[5px] text-white/50 flex items-center gap-0.5"><Activity className="w-2 h-2" /> Live traffic</div>
            <svg viewBox="0 0 100 40" className="absolute inset-x-1 bottom-1 h-[70%] w-[calc(100%-8px)]" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#4D86FF" stopOpacity=".6" /><stop offset="1" stopColor="#4D86FF" stopOpacity="0" /></linearGradient>
              </defs>
              <path d="M0 32 L10 28 L20 30 L30 20 L40 24 L50 14 L60 18 L70 8 L80 12 L90 5 L100 9 L100 40 L0 40Z" fill="url(#ag)" />
              <path d="M0 32 L10 28 L20 30 L30 20 L40 24 L50 14 L60 18 L70 8 L80 12 L90 5 L100 9" fill="none" stroke="#4D86FF" strokeWidth="1" />
              <path d="M0 36 L15 33 L30 34 L45 27 L60 29 L75 22 L90 24 L100 18" fill="none" stroke="#22D3EE" strokeWidth="0.7" strokeDasharray="2 1.5" />
            </svg>
          </div>
          <div className="row-span-2 rounded bg-white/5 ring-1 ring-white/10 p-1 flex flex-col items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-[70%]">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="5" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#4D86FF" strokeWidth="5" strokeDasharray="44 88" transform="rotate(-90 18 18)" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#22D3EE" strokeWidth="5" strokeDasharray="26 88" strokeDashoffset="-44" transform="rotate(-90 18 18)" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#818CF8" strokeWidth="5" strokeDasharray="14 88" strokeDashoffset="-70" transform="rotate(-90 18 18)" />
            </svg>
            <div className="mt-1 space-y-0.5 w-full">
              {['bg-brand-400', 'bg-brand-cyan', 'bg-indigo-400'].map((c) => (
                <div key={c} className="flex items-center gap-0.5"><span className={`w-1 h-1 rounded-full ${c}`} /><div className="h-0.5 flex-1 rounded bg-white/20" /></div>
              ))}
            </div>
          </div>
          <div className="col-span-2 rounded bg-white/5 ring-1 ring-white/10 p-1">
            <div className="h-full"><Bars values={[40, 60, 35, 80, 55, 95, 70, 85, 50, 75, 90, 65]} className="bg-gradient-to-t from-brand-600 to-brand-cyan" /></div>
          </div>
        </div>
      </Browser>
    </div>
  );
}

/* ---------- 6. Corporate portal ---------- */
function CorporateScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-brand-200">
      <Browser url="quantum-group.com" className="left-[5%] top-[8%] w-[90%] h-[82%]">
        <div className="relative h-[58%] bg-gradient-to-br from-ink-950 via-ink-800 to-brand-700 overflow-hidden">
          <div className="absolute top-1.5 inset-x-2 flex items-center justify-between">
            <span className="flex items-center gap-0.5 text-[7px] font-extrabold text-white"><Building2 className="w-2.5 h-2.5 text-brand-cyan" /> QUANTUM</span>
            <div className="flex gap-2 text-[5px] text-white/60"><span>About</span><span>Sectors</span><span>Investors</span><span>Careers</span></div>
          </div>
          {/* skyline */}
          <svg viewBox="0 0 200 60" className="absolute bottom-0 right-0 w-[60%] h-[80%]" preserveAspectRatio="none">
            {[[10, 30], [28, 18], [46, 40], [64, 8], [84, 26], [102, 14], [122, 36], [140, 4], [160, 22], [180, 30]].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="16" height={60 - y} fill={i % 3 === 0 ? '#1F63FF' : i % 3 === 1 ? '#162036' : '#0E3596'} opacity=".9" />
                {Array.from({ length: Math.floor((60 - y) / 8) }).map((_, j) => (
                  <rect key={j} x={x + 3} y={y + 4 + j * 8} width="3" height="3" fill="#86B0FF" opacity={(i + j) % 3 ? 0.25 : 0.8} />
                ))}
              </g>
            ))}
          </svg>
          <div className="absolute left-3 top-[32%]">
            <div className="text-[5px] tracking-widest text-brand-300">SINCE 1998</div>
            <div className="text-[11px] font-extrabold text-white leading-tight">Building a<br />better tomorrow</div>
            <div className="mt-1 flex gap-1">
              <span className="bg-brand-500 text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full">Explore</span>
              <span className="ring-1 ring-white/30 text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full">Contact</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1.5 p-2">
          {[['Energy', '⚡'], ['Real Estate', '🏢'], ['Logistics', '🚢'], ['Tech', '💡']].map(([t, e]) => (
            <div key={t} className="rounded bg-slate-50 border border-slate-100 p-1 text-center">
              <div className="text-sm">{e}</div>
              <div className="text-[5px] font-bold text-ink-900">{t}</div>
              <div className="h-0.5 w-2/3 mx-auto rounded bg-slate-200 mt-0.5" />
            </div>
          ))}
        </div>
      </Browser>
    </div>
  );
}

/* ---------- 7. Payments ---------- */
function PaymentsScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-indigo-600 to-ink-900">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_80%_20%,#22D3EE,transparent_45%)]" />
      {/* card */}
      <div className="absolute left-[7%] top-[12%] w-[42%] aspect-[1.6] rounded-xl bg-gradient-to-br from-ink-950 to-ink-700 p-2.5 text-white shadow-2xl rotate-[-8deg] ring-1 ring-white/10">
        <div className="flex justify-between items-start">
          <span className="text-[8px] font-extrabold tracking-wider">FlowPay</span>
          <div className="w-5 h-3.5 rounded-sm bg-gradient-to-br from-amber-200 to-amber-400" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 right-2.5">
          <div className="text-[7px] tracking-[0.25em] text-white/80">•••• •••• •••• 4821</div>
          <div className="flex justify-between mt-1 text-[5px] text-white/50"><span>MERCHANT</span><span>12/29</span></div>
        </div>
      </div>
      {/* checkout */}
      <Browser url="checkout.flowpay.io" className="right-[6%] top-[14%] w-[44%] h-[64%]">
        <div className="p-2 space-y-1">
          <div className="text-[7px] font-extrabold text-ink-900 flex items-center gap-0.5"><Lock className="w-2 h-2 text-emerald-500" /> Secure checkout</div>
          {['Card number', 'Name on card'].map((l) => (
            <div key={l}><div className="text-[5px] text-slate-400">{l}</div><div className="h-2.5 rounded border border-slate-200 bg-slate-50" /></div>
          ))}
          <div className="grid grid-cols-2 gap-1">
            <div className="h-2.5 rounded border border-slate-200 bg-slate-50" />
            <div className="h-2.5 rounded border border-slate-200 bg-slate-50" />
          </div>
          <div className="flex gap-1 pt-0.5">
            {['VISA', 'MC', 'Pay'].map((b) => <span key={b} className="text-[5px] font-bold px-1 py-0.5 rounded bg-slate-100 text-slate-600">{b}</span>)}
          </div>
          <div className="rounded bg-brand-500 text-white text-[6px] font-bold text-center py-1 flex items-center justify-center gap-0.5">
            <CreditCard className="w-2 h-2" /> Pay securely
          </div>
        </div>
      </Browser>
      {/* code */}
      <div className="absolute left-[8%] bottom-[8%] w-[46%] rounded-lg bg-ink-950/90 ring-1 ring-white/10 p-2 font-mono text-[5.5px] leading-[9px] shadow-xl">
        <div><span className="text-pink-400">const</span> <span className="text-sky-300">payment</span> = <span className="text-pink-400">await</span> flowpay.<span className="text-amber-300">charge</span>({'{'}</div>
        <div className="pl-2"><span className="text-brand-300">method</span>: <span className="text-emerald-300">'card'</span>,</div>
        <div className="pl-2"><span className="text-brand-300">currency</span>: <span className="text-emerald-300">'EGP'</span>,</div>
        <div>{'}'});</div>
      </div>
      <div className="absolute right-[8%] bottom-[8%] flex items-center gap-1 bg-white rounded-full px-2 py-1 shadow-xl text-[6px] font-bold text-emerald-600">
        <CheckCircle2 className="w-2.5 h-2.5" /> Payment successful
      </div>
    </div>
  );
}

/* ---------- 8. Inventory & POS ---------- */
function InventoryScene() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-600 to-ink-900">
      <Browser url="vault-inventory.app" className="left-[5%] top-[9%] w-[66%] h-[80%]">
        <div className="p-2 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-extrabold text-ink-900 flex items-center gap-0.5"><Boxes className="w-2.5 h-2.5 text-brand-500" /> Warehouse A</span>
            <Bell className="w-2 h-2 text-slate-400" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[['In stock', 'bg-emerald-500'], ['Low', 'bg-amber-500'], ['Orders', 'bg-brand-500']].map(([l, c]) => (
              <div key={l} className="rounded bg-slate-50 border border-slate-100 p-1">
                <div className="text-[5px] text-slate-400">{l}</div>
                <div className={`h-1 mt-0.5 rounded ${c}`} style={{ width: l === 'Low' ? '35%' : '80%' }} />
              </div>
            ))}
          </div>
          <div className="rounded border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-1 bg-slate-50 px-1 py-0.5 text-[5px] font-bold text-slate-500"><span>Item</span><span>SKU</span><span>Stock</span></div>
            {[['📦', 72, 'bg-emerald-500'], ['🧴', 18, 'bg-amber-500'], ['🔋', 90, 'bg-emerald-500'], ['🧃', 8, 'bg-rose-500']].map(([e, v, c], i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-1 items-center px-1 py-0.5 border-t border-slate-100">
                <span className="flex items-center gap-0.5 text-[7px]">{e}<span className="h-1 w-8 rounded bg-slate-200" /></span>
                <Barcode className="w-3 h-2 text-slate-400" />
                <span className="w-8 h-1 rounded bg-slate-100 overflow-hidden"><span className={`block h-full ${c}`} style={{ width: `${v}%` }} /></span>
              </div>
            ))}
          </div>
        </div>
      </Browser>
      <div className="absolute right-[5%] top-[12%] w-[25%] rounded-xl bg-white p-1.5 shadow-2xl">
        <div className="rounded bg-ink-900 h-10 flex items-center justify-center">
          <div className="w-[70%] h-[2px] bg-rose-500 shadow-[0_0_6px_#f43f5e] animate-pulse" />
        </div>
        <div className="text-[5px] text-center text-slate-500 mt-1">Scan barcode</div>
        <div className="mt-1 grid grid-cols-3 gap-0.5">
          {Array.from({ length: 9 }).map((_, i) => <div key={i} className="h-2.5 rounded bg-slate-100 text-[5px] text-slate-500 flex items-center justify-center">{i + 1}</div>)}
        </div>
        <div className="mt-1 rounded bg-brand-500 text-white text-[5px] font-bold text-center py-0.5">Checkout</div>
      </div>
      <div className="absolute right-[5%] bottom-[12%] w-[25%] rounded-lg bg-amber-50 ring-1 ring-amber-200 p-1.5 shadow-xl flex items-start gap-1">
        <AlertTriangle className="w-2.5 h-2.5 text-amber-500 shrink-0" />
        <div className="text-[5px] text-amber-800 font-semibold leading-tight">Low stock alert sent to manager</div>
      </div>
    </div>
  );
}

const scenes = {
  'apex-logistics-erp': LogisticsScene,
  'lumina-luxury-ecommerce': FashionScene,
  'medcare-specialty-clinics': ClinicScene,
  'dineqr-smart-menu': MenuScene,
  'nexus-saas-analytics': AnalyticsScene,
  'quantum-holding-corporate': CorporateScene,
  'flowpay-merchant-platform': PaymentsScene,
  'vault-warehouse-inventory': InventoryScene
};

const fallbackByCategory = {
  Software: LogisticsScene,
  'E-Commerce': FashionScene,
  'Booking Systems': ClinicScene,
  'Restaurant Systems': MenuScene,
  Dashboards: AnalyticsScene,
  'Business Websites': CorporateScene,
  'Web Applications': PaymentsScene
};

/**
 * Project cover. If a project has `coverImage` (e.g. "/projects/my-project.jpg" in /public),
 * that real image is shown; otherwise a designed mockup scene for the project's system type.
 */
export default function ProjectScene({ project, className = 'aspect-[4/3]' }) {
  // Scenes are drawn on a fixed 400px-wide canvas and scaled to the card width,
  // so they look identical on phones, tablets and wide screens.
  const ref = useRef(null);
  const [box, setBox] = useState({ w: 400, h: 300 });

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width) setBox({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (project.coverImage) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img src={project.coverImage} alt={project.projectTitle} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    );
  }

  const Scene = scenes[project.id] || fallbackByCategory[project.category] || CorporateScene;
  const scale = box.w / 400;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} dir="ltr">
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: 400, height: box.h / scale, transform: `scale(${scale})` }}
      >
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
          <Scene />
        </div>
      </div>
    </div>
  );
}
