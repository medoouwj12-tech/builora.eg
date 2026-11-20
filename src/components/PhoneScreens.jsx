import React, { useEffect, useState } from 'react';
import {
  Globe, ShoppingBag, LayoutDashboard, Smartphone, Bell, Search, Home, Grid3x3, User, Heart, Star,
  CalendarCheck, CheckCircle2, Sparkles, Rocket, Clock
} from 'lucide-react';

/* Screen 1 — BUILDORA app home */
function HomeScreen() {
  const tiles = [
    { i: Globe, t: 'Websites', c: 'from-brand-500 to-brand-cyan' },
    { i: ShoppingBag, t: 'E-Stores', c: 'from-indigo-500 to-brand-500' },
    { i: LayoutDashboard, t: 'Systems', c: 'from-ink-800 to-brand-600' },
    { i: Smartphone, t: 'Apps', c: 'from-sky-500 to-indigo-500' }
  ];
  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="px-4 pt-9 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="" className="w-8 h-8 rounded-lg object-cover" />
          <div>
            <div className="text-[9px] text-slate-400">Welcome to</div>
            <div className="text-[13px] font-extrabold text-ink-900 tracking-wide">BUILDORA</div>
          </div>
        </div>
        <div className="relative w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
          <Bell className="w-4 h-4 text-ink-900" />
          <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-brand-500" />
        </div>
      </div>

      <div className="mx-4 relative rounded-2xl overflow-hidden bg-gradient-to-br from-ink-900 via-brand-700 to-brand-500 p-4 text-white">
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-brand-cyan/30 blur-xl" />
        <div className="absolute right-3 bottom-3 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur rotate-12 flex items-center justify-center ring-1 ring-white/20">
          <Rocket className="w-7 h-7 text-brand-cyan -rotate-12" />
        </div>
        <div className="inline-flex items-center gap-1 text-[8px] font-bold bg-white/15 rounded-full px-2 py-0.5">
          <Sparkles className="w-2.5 h-2.5" /> NEW PROJECT
        </div>
        <div className="mt-2 text-[15px] font-extrabold leading-tight max-w-[65%]">Build your next big idea</div>
        <div className="mt-3 inline-block text-[9px] font-bold bg-white text-brand-700 rounded-full px-3 py-1">Start now</div>
      </div>

      <div className="px-4 mt-4 text-[11px] font-extrabold text-ink-900">Services</div>
      <div className="px-4 mt-2 grid grid-cols-4 gap-2">
        {tiles.map((t, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.c} flex items-center justify-center shadow-md`}>
              <t.i className="w-5 h-5 text-white" />
            </div>
            <span className="text-[8px] font-semibold text-slate-600">{t.t}</span>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold text-ink-900">Your project</span>
          <span className="text-[8px] font-bold text-brand-600 bg-brand-50 rounded-full px-2 py-0.5">In progress</span>
        </div>
        {[
          ['Design', 100],
          ['Development', 72],
          ['Launch', 20]
        ].map(([l, v]) => (
          <div key={l} className="mt-2">
            <div className="flex justify-between text-[8px] text-slate-500 mb-1">
              <span>{l}</span>
              {v === 100 ? <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" /> : <span>{v}%</span>}
            </div>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-cyan" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <TabBar />
    </div>
  );
}

/* Screen 2 — online store */
function StoreScreen() {
  const items = [
    { c: 'from-rose-200 to-orange-100', e: '👟', n: 'Sneakers' },
    { c: 'from-sky-200 to-indigo-100', e: '⌚', n: 'Smart Watch' },
    { c: 'from-amber-100 to-yellow-50', e: '🎧', n: 'Headphones' },
    { c: 'from-emerald-100 to-teal-50', e: '🕶️', n: 'Sunglasses' }
  ];
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-4 pt-9 flex items-center gap-2">
        <div className="flex-1 flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-2">
          <Search className="w-3 h-3 text-slate-400" />
          <span className="text-[9px] text-slate-400">Search products</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-ink-900 flex items-center justify-center">
          <ShoppingBag className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
      <div className="mx-4 mt-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-cyan p-3 text-white flex items-center justify-between">
        <div>
          <div className="text-[8px] font-bold opacity-80">SUMMER DROP</div>
          <div className="text-[13px] font-extrabold leading-tight">New Collection</div>
        </div>
        <div className="text-3xl">🛍️</div>
      </div>
      <div className="px-4 mt-3 flex gap-1.5">
        {['All', 'Shoes', 'Watches', 'Audio'].map((c, i) => (
          <span key={c} className={`text-[8px] font-bold px-2.5 py-1 rounded-full ${i === 0 ? 'bg-ink-900 text-white' : 'bg-slate-100 text-slate-500'}`}>{c}</span>
        ))}
      </div>
      <div className="px-4 mt-3 grid grid-cols-2 gap-2 flex-1">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl bg-slate-50 p-2 border border-slate-100">
            <div className={`relative h-[62px] rounded-xl bg-gradient-to-br ${it.c} flex items-center justify-center text-3xl`}>
              {it.e}
              <Heart className={`absolute top-1.5 right-1.5 w-3 h-3 ${i === 1 ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
            </div>
            <div className="mt-1.5 text-[9px] font-extrabold text-ink-900">{it.n}</div>
            <div className="flex items-center justify-between mt-0.5">
              <span className="flex items-center gap-0.5 text-[7px] text-slate-500">
                <Star className="w-2 h-2 fill-amber-400 text-amber-400" /> 4.9
              </span>
              <span className="w-4 h-4 rounded-full bg-brand-500 text-white text-[9px] font-bold flex items-center justify-center">+</span>
            </div>
          </div>
        ))}
      </div>
      <TabBar />
    </div>
  );
}

/* Screen 3 — booking */
function BookingScreen() {
  const days = [['Sat', 12], ['Sun', 13], ['Mon', 14], ['Tue', 15], ['Wed', 16]];
  const slots = ['10:00', '11:30', '13:00', '15:30', '17:00', '18:30'];
  return (
    <div className="h-full flex flex-col bg-slate-50">
      <div className="bg-gradient-to-br from-ink-900 to-brand-700 px-4 pt-9 pb-4 text-white rounded-b-3xl">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-brand-cyan" />
          <span className="text-[12px] font-extrabold">Book an appointment</span>
        </div>
        <div className="mt-3 flex items-center gap-2 bg-white/10 rounded-2xl p-2 ring-1 ring-white/15">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-300 to-brand-500 flex items-center justify-center text-lg">👩‍⚕️</div>
          <div className="flex-1">
            <div className="text-[10px] font-extrabold">Dr. Sara Adel</div>
            <div className="text-[8px] opacity-70">Dermatology · Cairo</div>
          </div>
          <div className="flex items-center gap-0.5 text-[8px] font-bold">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />5.0
          </div>
        </div>
      </div>
      <div className="px-4 mt-3 flex gap-1.5">
        {days.map(([d, n], i) => (
          <div key={d} className={`flex-1 rounded-xl py-1.5 text-center ${i === 2 ? 'bg-brand-500 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-100'}`}>
            <div className="text-[7px] font-semibold opacity-80">{d}</div>
            <div className="text-[11px] font-extrabold">{n}</div>
          </div>
        ))}
      </div>
      <div className="px-4 mt-3 text-[10px] font-extrabold text-ink-900 flex items-center gap-1">
        <Clock className="w-3 h-3 text-brand-500" /> Available times
      </div>
      <div className="px-4 mt-2 grid grid-cols-3 gap-1.5">
        {slots.map((s, i) => (
          <div key={s} className={`rounded-lg py-1.5 text-center text-[9px] font-bold ${
            i === 1 ? 'bg-ink-900 text-white' : i === 3 ? 'bg-slate-100 text-slate-300 line-through' : 'bg-white text-slate-600 border border-slate-100'
          }`}>{s}</div>
        ))}
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-emerald-50 border border-emerald-100 p-2 flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        <span className="text-[8px] font-semibold text-emerald-700">Confirmation sent on WhatsApp</span>
      </div>
      <div className="mx-4 mt-auto mb-2 rounded-full bg-brand-500 text-white text-[10px] font-bold text-center py-2">Confirm booking</div>
      <TabBar />
    </div>
  );
}

function TabBar() {
  const icons = [Home, Grid3x3, Heart, User];
  return (
    <div className="mt-auto mx-3 mb-3 rounded-2xl bg-ink-900 px-4 py-2.5 flex items-center justify-between">
      {icons.map((I, i) => (
        <I key={i} className={`w-4 h-4 ${i === 0 ? 'text-brand-cyan' : 'text-white/50'}`} />
      ))}
    </div>
  );
}

const screens = [HomeScreen, StoreScreen, BookingScreen];

export default function PhoneScreens() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % screens.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full" dir="ltr">
      {screens.map((S, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ${
            i === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 pointer-events-none'
          }`}
        >
          <S />
        </div>
      ))}
    </div>
  );
}
