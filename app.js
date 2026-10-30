'use strict';
/* ================= Basics ================= */
const $ = s => document.querySelector(s);
const app = $('#app'), sheet = $('#sheet'), toastEl = $('#toast'), scrim = $('#scrim');
const KEY = 'mimi-deutsch-v2', OLD_KEY = 'mimi-deutsch-v1';
const ROUND = 10, FINAL_ROUND = 15, PASS = 70, XP_LVL = 100, GOAL = 50;
const LEVELS = [
  ['Fillestare','Anfängerin'], ['Eksploruese','Entdeckerin'], ['Gjuetare fjalësh','Wortjägerin'],
  ['Ndërtuese fjalish','Satzbauerin'], ['Heroinë e gramatikës','Grammatik-Heldin'], ['Mbretëresha e gjermanishtes','Deutsch-Königin']
];
const PRAISE = [
  ['Saktë!','Richtig!'], ['Bravo, Mimoza!','Super gemacht!'], ['Shumë mirë!','Sehr gut!'],
  ['E shkëlqyer!','Toll!'], ['Je yll!','Du bist ein Star!'], ['Perfekt!','Perfekt!'], ['Wow!','Klasse!']
];
const LOVE = ['Ich liebe dich Mimi - besarti', 'Te dua shume shume', 'Zemra jem'];
const LOVE_RARE = ['bmj - pyetem n chat', 'Love uu'];
const OFF = [0, -62, -92, -62, 0, 62, 92, 62];

const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const strip = s => String(s ?? '').replace(/<[^>]+>/g, '');
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const rnd = a => a[Math.random() * a.length | 0];
const HW = typeof HOMEWORK !== 'undefined' ? HOMEWORK : [];
HW.forEach(h => h.parts.forEach(p => p.hw = h.id));
const HWP = HW.flatMap(h => h.parts);
const WD = typeof WORDS !== 'undefined' ? WORDS : [];
WD.forEach(c => c.wd = true);
const chIdx = id => CHAPTERS.findIndex(c => c.id === id);
const chById = id => CHAPTERS.find(c => c.id === id) || HWP.find(c => c.id === id) || WD.find(c => c.id === id);
const hwById = id => HW.find(h => h.id === id);
const fmtDate = d => d.split('-').reverse().slice(0, 2).join('.') + '.';
/* "E RE" badge: shown for 24 h after `added` (or a homework set's `date`), fading out over that time */
const NEW_MS = 864e5;
const ageOf = x => { const a = x && (x.added || x.date); return a ? Date.now() - Date.parse(a) : -1; };
const isNew = x => { const t = ageOf(x); return t >= 0 && t < NEW_MS; };
const newTag = x => isNew(x) ? `<span class="newtag" style="opacity:${(1 - .55 * ageOf(x) / NEW_MS).toFixed(2)}">E RE</span>` : '';

/* ================= Saved progress ================= */
const fresh = () => ({ xp:0, streak:0, lastDay:null, day:null, dayXp:0, rounds:0, perfect:0, bestCombo:0,
  ch:{}, hw:{}, w:{}, mistakes:{}, miss:{}, okRun:{}, hist:{}, badges:[], sound:true, cleared:false });
let S = fresh();
try {
  const d = JSON.parse(localStorage.getItem(KEY));
  if (d) S = Object.assign(fresh(), d);
  else {
    const o = JSON.parse(localStorage.getItem(OLD_KEY));
    if (o) ['xp','streak','lastDay','day','dayXp','rounds','perfect','bestCombo','sound'].forEach(k => { if (o[k] != null) S[k] = o[k]; });
  }
} catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const today = () => new Date().toLocaleDateString('sv');
const dayDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);
function rollDay(){ if (S.day !== today()) { S.day = today(); S.dayXp = 0; } }
function streakNow(){ return S.lastDay && dayDiff(S.lastDay, today()) <= 1 ? S.streak : 0; }
function bumpStreak(){
  const t = today(); if (S.lastDay === t) return false;
  S.streak = S.lastDay && dayDiff(S.lastDay, t) === 1 ? S.streak + 1 : 1; S.lastDay = t; return true;
}
/* light mode by default; dark only when picked in the settings */
const isDark = () => S.dark ?? false;
const themeLabel = () => isDark() ? '☀️ E çelët / Hell' : '🌙 E errët / Dunkel';
function applyTheme(){
  document.documentElement.dataset.theme = isDark() ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark() ? '#15131F' : '#F3F0FF');
}
const level = (xp = S.xp) => Math.floor(xp / XP_LVL) + 1;
const lvlName = l => LEVELS[Math.min(l - 1, LEVELS.length - 1)];

/* journey state */
const best = i => S.ch[CHAPTERS[i].id]?.best || 0;
const passOf = c => (c && c.pass) || PASS;
const isDone = i => best(i) >= passOf(CHAPTERS[i]);
/* books: chapters carry band (1 = A1.1, 2 = A1.2 …); the newest book is the one the class is in now */
const bandOf = c => c.band || 1;
const BAND_NOW = Math.max(...CHAPTERS.map(bandOf));
const bandInfo = b => (typeof BOOKS !== 'undefined' && BOOKS[b]) || ['Libri ' + b, 'Buch ' + b, '📘'];
/* one journey, one active step: books follow each other (locked chapters can still be practised from their sheet) */
const unlocked = i => i === 0 || isDone(i - 1);
const seen = i => unlocked(i) || !!S.ch[CHAPTERS[i].id]?.lesson;
const curIdx = () => { const i = CHAPTERS.findIndex((c, k) => !isDone(k)); return i < 0 ? CHAPTERS.length : i; };
/* big divider where a new book starts (map and chapter list) */
const bookDiv = (c, prev) => BAND_NOW > 1 && (!prev || bandOf(prev) !== bandOf(c))
  ? (([sq, de, e]) => `<div class="bookdiv"><span class="bk-e">${e}</span><span><b>${esc(sq)}</b><small>${esc(de)}</small></span></div>`)(bandInfo(bandOf(c))) : '';
const doneCount = () => CHAPTERS.filter((c, i) => isDone(i)).length;
/* stars split the range from the pass mark to 100 in thirds: 70 -> 70/80/90 */
const starsOf = (b, p = PASS) => { const st = (100 - p) / 3; return b >= p + 2 * st ? 3 : b >= p + st ? 2 : b >= p ? 1 : 0; };
/* progress record of a journey chapter or a homework part */
const rec = (c, make) => { const box = c.hw ? S.hw : c.wd ? S.w : S.ch; return box[c.id] || (make ? (box[c.id] = {}) : {}); };
const hwDone = p => (S.hw[p.id]?.best || 0) >= passOf(p);
const hwCount = h => h.parts.filter(hwDone).length;

const BADGES = [
  {id:'first',  e:'🎉', sq:'Raundi i parë',    de:'Erste Runde',        ok:() => S.rounds >= 1},
  {id:'chap1',  e:'🚀', sq:'Kapitulli i parë', de:'Erstes Kapitel',     ok:() => doneCount() >= 1},
  {id:'perfect',e:'💯', sq:'Pa asnjë gabim',    de:'Perfekte Runde',     ok:() => S.perfect >= 1},
  {id:'combo5', e:'🔥', sq:'5 me radhë',        de:'5 in Folge',         ok:() => S.bestCombo >= 5},
  {id:'combo10',e:'☄️', sq:'10 me radhë',       de:'10 in Folge',        ok:() => S.bestCombo >= 10},
  {id:'streak3',e:'📅', sq:'3 ditë rresht',     de:'3 Tage am Stück',    ok:() => S.streak >= 3},
  {id:'streak7',e:'🗓️', sq:'7 ditë rresht',     de:'7 Tage am Stück',    ok:() => S.streak >= 7},
  {id:'clock',  e:'⏰', sq:'Mjeshtre e orës',   de:'Uhrzeit-Profi',      ok:() => (S.ch.uhrzeit?.best || 0) >= 90},
  {id:'half',   e:'🧭', sq:'Gjysma e rrugës',   de:'Halbzeit',           ok:() => doneCount() >= Math.ceil(CHAPTERS.length / 2)},
  {id:'xp500',  e:'⭐', sq:'500 XP',            de:'500 XP',             ok:() => S.xp >= 500},
  {id:'xp1000', e:'🌟', sq:'1000 XP',           de:'1000 XP',            ok:() => S.xp >= 1000},
  {id:'clean',  e:'🧹', sq:'Gabimet zero',      de:'Fehler aufgeräumt',  ok:() => S.cleared},
  {id:'stars',  e:'✨', sq:'3 yje kudo',        de:'Überall 3 Sterne',   ok:() => CHAPTERS.every((c, i) => best(i) >= 90)},
  {id:'journey',e:'🏆', sq:'Udhëtimi i plotë',  de:'Reise geschafft',    ok:() => doneCount() === CHAPTERS.length},
  {id:'hw',     e:'📝', sq:'Detyrat gati',      de:'Hausaufgaben erledigt', ok:() => HW.some(h => hwCount(h) === h.parts.length)},
  {id:'love',   e:'💌', sq:'Sekreti',           de:'Das Geheimnis',      ok:() => S.egg}
];
function checkBadges(){
  const got = [];
  BADGES.forEach(b => { if (!S.badges.includes(b.id) && b.ok()) { S.badges.push(b.id); got.push(b); } });
  return got;
}

/* ================= Sound, vibration, speech ================= */
let ac;
function tone(seq){
  if (!S.sound) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
    const t0 = ac.currentTime;
    seq.forEach(([f, st, du, type = 'sine', vol = .16]) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0, t0 + st);
      g.gain.linearRampToValueAtTime(vol, t0 + st + .015);
      g.gain.exponentialRampToValueAtTime(.001, t0 + st + du);
      o.connect(g).connect(ac.destination); o.start(t0 + st); o.stop(t0 + st + du + .05);
    });
  } catch (e) {}
}
const SND = {
  ok:   () => tone([[660,0,.12],[990,.09,.25]]),
  try:  () => tone([[330,0,.18,'triangle',.14]]),
  bad:  () => tone([[220,0,.18,'triangle',.18],[165,.14,.3,'triangle',.18]]),
  tap:  () => tone([[600,0,.05,'sine',.06]]),
  page: () => tone([[520,0,.06,'sine',.07],[700,.05,.08,'sine',.07]]),
  combo:() => tone([[784,0,.1],[988,.08,.1],[1319,.16,.3]]),
  win:  () => tone([[523,0,.15],[659,.12,.15],[784,.24,.15],[1047,.36,.45]]),
  love: () => tone([[659,0,.18],[784,.15,.18],[988,.3,.18],[1319,.45,.5,'triangle',.14]]),
  level:() => tone([[392,0,.12],[523,.1,.12],[659,.2,.12],[784,.3,.12],[1047,.42,.6,'triangle',.18]])
};
const buzz = p => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} };

const canSpeak = 'speechSynthesis' in window;
let deVoice = null;
function pickVoice(){
  try { const v = speechSynthesis.getVoices(); deVoice = v.find(x => /^de[-_]DE/i.test(x.lang)) || v.find(x => /^de/i.test(x.lang)) || null; } catch (e) {}
}
if (canSpeak) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(t, slow){
  if (!canSpeak || !t) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(strip(t).replace(/…/g, '').replace(/\(.*?\)/g, '').replace(/___/g, ''));
    u.lang = 'de-DE'; if (deVoice) u.voice = deVoice; u.rate = slow ? .55 : .9;
    speechSynthesis.speak(u);
  } catch (e) {}
}
/* automatic speech respects the sound switch; tapping a 🔊 button always speaks */
const autoSay = t => { if (S.sound) say(t); };

/* ================= Toast, XP pop, confetti, hearts ================= */
let toastT;
function toast(msg, ms = 2600){
  toastEl.style.transform = toastEl.style.opacity = '';
  toastEl.innerHTML = msg; toastEl.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), ms);
}
/* toasts can be tapped, swiped up or swiped sideways away */
function hideToast(dx = 0){
  clearTimeout(toastT);
  if (!dx) { toastEl.style.transform = ''; toastEl.classList.remove('show'); return; }
  toastEl.style.transition = 'transform .25s, opacity .25s';
  toastEl.style.transform = `translate(calc(-50% + ${dx > 0 ? 100 : -100}vw), 0)`; toastEl.style.opacity = '0';
  setTimeout(() => {
    toastEl.style.transition = 'none'; toastEl.classList.remove('show'); toastEl.style.transform = toastEl.style.opacity = '';
    void toastEl.offsetWidth; toastEl.style.transition = '';
  }, 250);
}
let tdrag = null;
toastEl.addEventListener('pointerdown', e => {
  tdrag = {x: e.clientX, y: e.clientY, dx: 0, dy: 0}; toastEl.style.transition = 'none';
  try { toastEl.setPointerCapture(e.pointerId); } catch (err) {}
});
toastEl.addEventListener('pointermove', e => {
  if (!tdrag) return;
  tdrag.dx = e.clientX - tdrag.x; tdrag.dy = Math.min(0, e.clientY - tdrag.y);
  toastEl.style.transform = `translate(calc(-50% + ${tdrag.dx}px), ${tdrag.dy}px)`;
});
function toastUp(){
  if (!tdrag) return;
  const {dx, dy} = tdrag; tdrag = null; toastEl.style.transition = '';
  if (Math.abs(dx) > 60) hideToast(dx);
  else if (dy < -20 || (Math.abs(dx) < 8 && dy > -8)) hideToast();
  else toastEl.style.transform = '';
}
toastEl.addEventListener('pointerup', toastUp);
toastEl.addEventListener('pointercancel', toastUp);
function xpPop(n){
  const el = document.createElement('div'); el.className = 'xpop'; el.textContent = '+' + n + ' XP';
  document.body.appendChild(el); setTimeout(() => el.remove(), 1100);
}
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function confetti(){
  if (reduced()) return;
  const c = $('#confetti'), x = c.getContext('2d'), d = devicePixelRatio || 1;
  const W = c.width = innerWidth * d, H = c.height = innerHeight * d;
  const cols = ['#5B3DF5','#FFC53D','#F2545B','#0E9F8E','#EE7A0C','#7650F0','#16A34A','#D6409F'];
  const P = Array.from({length:150}, () => ({
    x: W / 2 + (Math.random() - .5) * W * .4, y: H * .38,
    vx: (Math.random() - .5) * W * .028, vy: -Math.random() * H * .028 - H * .01,
    s: (7 + Math.random() * 8) * d, r: Math.random() * 6, vr: (Math.random() - .5) * .35, c: rnd(cols)
  }));
  let f = 0;
  (function loop(){
    x.clearRect(0, 0, W, H);
    P.forEach(p => { p.vy += H * .0009; p.x += p.vx; p.y += p.vy; p.vx *= .985; p.r += p.vr;
      x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore(); });
    if (++f < 200) requestAnimationFrame(loop); else x.clearRect(0, 0, W, H);
  })();
}
/* love notes: max one per day (except the A1 egg and the finale), rare ones even rarer */
const loveMsg = () => Math.random() < .15 ? rnd(LOVE_RARE) : rnd(LOVE);
const loveOk = () => S.loveDay !== today();
function loveUsed(){ S.loveDay = today(); save(); }
function loveNote(msg){
  const el = document.createElement('div'); el.className = 'lovenote'; el.textContent = '💗 ' + msg;
  document.body.appendChild(el); setTimeout(() => el.remove(), 3600);
  hearts(4); SND.love();
}
function hearts(n = 18){
  if (reduced()) return;
  for (let i = 0; i < n; i++) {
    const h = document.createElement('span');
    h.className = 'heart'; h.textContent = rnd(['❤️','💕','💖','💗','🥰']);
    h.style.left = (5 + Math.random() * 90) + 'vw';
    h.style.fontSize = (20 + Math.random() * 26) + 'px';
    h.style.animationDuration = (2.2 + Math.random() * 1.8) + 's';
    h.style.animationDelay = (Math.random() * .9) + 's';
    document.body.appendChild(h); setTimeout(() => h.remove(), 5000);
  }
}

/* ================= Clocks ================= */
const NUM = ['','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf'];
const SQN = ['','një','dy','tre','katër','pesë','gjashtë','shtatë','tetë','nëntë','dhjetë','njëmbëdhjetë','dymbëdhjetë'];
const nx = h => h % 12 + 1, pv = h => h === 1 ? 12 : h - 1;
function timeDe(h, m){
  if (m === 0) return (h === 1 ? 'ein' : NUM[h]) + ' Uhr';
  if (m === 15) return 'Viertel nach ' + NUM[h];
  if (m === 30) return 'halb ' + NUM[nx(h)];
  return 'Viertel vor ' + NUM[nx(h)];
}
function timeSq(h, m){
  if (m === 0) return 'ora ' + SQN[h];
  if (m === 15) return SQN[h] + ' e një çerek';
  if (m === 30) return SQN[h] + ' e gjysmë';
  return SQN[nx(h)] + ' pa një çerek';
}
const digital = (h, m) => `${h}:${String(m).padStart(2, '0')}`;
function clockSVG(h, m, size = 150){
  const ha = ((h % 12) + m / 60) * 30, ma = m * 6;
  let ticks = '';
  for (let i = 0; i < 12; i++) ticks += `<line x1="50" y1="${i % 3 ? 9 : 8}" x2="50" y2="${i % 3 ? 13 : 16}" stroke="${i % 3 ? '#C9C2EA' : '#1E1B3A'}" stroke-width="${i % 3 ? 2 : 3.2}" stroke-linecap="round" transform="rotate(${i * 30} 50 50)"/>`;
  const num = (n, x, y) => `<text x="${x}" y="${y}" font-size="10" font-weight="800" text-anchor="middle" dominant-baseline="central" fill="#1E1B3A" font-family="system-ui,sans-serif">${n}</text>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" role="img" aria-label="${digital(h, m)}">
    <circle cx="50" cy="50" r="46" fill="#fff" stroke="var(--tc)" stroke-width="5"/>${ticks}
    ${num(12,50,24)}${num(3,77,50)}${num(6,50,77)}${num(9,23,50)}
    <line x1="50" y1="50" x2="50" y2="29" stroke="#1E1B3A" stroke-width="5.5" stroke-linecap="round" transform="rotate(${ha} 50 50)"/>
    <line x1="50" y1="50" x2="50" y2="15" stroke="var(--tc)" stroke-width="3.5" stroke-linecap="round" transform="rotate(${ma} 50 50)"/>
    <circle cx="50" cy="50" r="4.5" fill="#1E1B3A"/></svg>`;
}
function genClocks(n){
  const out = [];
  for (let i = 0; i < n; i++) {
    const h = 1 + (Math.random() * 12 | 0), m = rnd([0, 15, 30, 30, 45]);
    const k = c => timeDe(c[0], c[1]), seen = new Set([k([h, m])]), alt = [];
    if (m === 30) { alt.push([pv(h), 30]); seen.add(k([pv(h), 30])); }
    shuffle([[h,0],[h,15],[h,30],[h,45],[pv(h),30],[nx(h),0],[pv(h),45]]).forEach(c => { if (!seen.has(k(c))) { seen.add(k(c)); alt.push(c); } });
    const opts = [[h, m], ...alt.slice(0, 3)], txt = 'Es ist ' + k([h, m]) + '.';
    const e = `${digital(h, m)} = ${k([h, m])} (${timeSq(h, m)}).${m === 30 ? ' Kujto: halb + ora tjetër!' : ''}`;
    if (i % 2 === 0) out.push({type:'clock', psq:'Sa është ora?', pde:'Wie spät ist es?', hm:[h, m], o:opts.map(c => 'Es ist ' + k(c) + '.'), a:txt, say:txt, e});
    else out.push({type:'clockpick', psq:'Gjej orën e saktë', pde:'Finde die richtige Uhr', q:txt, speakQ:true, o:opts.map(c => c.join(':')), a:h + ':' + m, say:txt, e});
  }
  return out;
}

/* ================= Question generation ================= */
/* a word entry may end with the date it was added ('2026-10-30'): then it shows "E RE" for 24 hours, like everything new */
const NEW_WORD_MS = NEW_MS;
const wordIsNew = e => { const d = e[e.length - 1]; return /^\d{4}-\d\d-\d\d/.test(d) && Date.now() - Date.parse(d) < NEW_WORD_MS; };
function vocabPool(c){ return c.nouns.map(n => ({de: n[0] + ' ' + n[1], sq: n[2], nw: wordIsNew(n)})).concat(c.words.map(w => ({de: w[0], sq: w[1], nw: wordIsNew(w)}))); }
const newWordCount = c => vocabPool(c).filter(w => w.nw).length;
const newWordTag = n => n ? `<span class="newtag">E RE${n > 1 ? ' · ' + n : ''}</span>` : '';
const distract = (pool, item, f) => shuffle(pool.filter(p => p[f] !== item[f])).slice(0, 3).map(p => p[f]);
function genVocab(c){
  if (c.noGen) return [];
  const pool = vocabPool(c), out = [];
  c.nouns.forEach(n => {
    out.push({type:'mc', row:true, psq:'der, die apo das?', pde:'Welcher Artikel passt?', q:'___ ' + n[1], h:n[2],
      o:['der','die','das'], a:n[0], say:n[0] + ' ' + n[1], e:`${n[0]} ${n[1]} = ${n[2]}`});
    out.push({type:'write', psq:'Shkruaje gjermanisht', pde:'Schreib das Wort auf Deutsch', q:n[2], art:n[0], a:n[1],
      say:n[0] + ' ' + n[1], e:`${n[2]} = ${n[0]} ${n[1]}`});
  });
  if (c.writeWords) c.words.forEach(w => out.push({type:'write', psq:'Shkruaje gjermanisht', pde:'Schreib das Wort auf Deutsch', q:w[1], art:'', a:w[0],
    say:w[0], e:`${w[1]} = ${w[0]}`}));
  if (pool.length >= 4) pool.forEach(w => {
    out.push({type:'mc', psq:'Çfarë do të thotë?', pde:'Was bedeutet das?', q:w.de, speakQ:true,
      o:[w.sq, ...distract(pool, w, 'sq')], a:w.sq, say:w.de, e:`${w.de} = ${w.sq}`});
    out.push({type:'mc', psq:'Si thuhet gjermanisht?', pde:'Wie sagt man das auf Deutsch?', q:w.sq,
      o:[w.de, ...distract(pool, w, 'de')], a:w.de, say:w.de, e:`${w.sq} = ${w.de}`});
    if (canSpeak && S.sound) out.push({type:'listen', psq:'Dëgjo dhe zgjidh', pde:'Hör zu und wähle',
      o:[w.de, ...distract(pool, w, 'de')], a:w.de, say:w.de, e:`${w.de} = ${w.sq}`});
  });
  return out;
}
/* word training: single words only, every word once per round, directions and question kinds mixed */
const WKINDS = ['de2sq', 'sq2de', 'write', 'listen', 'art', 'sq2de', 'de2sq'];
function wordQ(c, w, pool, kind){
  const n = c.nouns.find(x => x[0] + ' ' + x[1] === w.de);
  if (kind === 'art' && !n) kind = 'sq2de';
  if (kind === 'listen' && !(canSpeak && S.sound)) kind = 'de2sq';
  if (kind === 'write' && /[!?.,]/.test(w.de)) kind = 'sq2de';
  const e = `${w.de} = ${w.sq}`;
  if (kind === 'de2sq') return {type:'mc', psq:'Çfarë do të thotë?', pde:'Was bedeutet das?', q:w.de, speakQ:true, o:[w.sq, ...distract(pool, w, 'sq')], a:w.sq, say:w.de, e};
  if (kind === 'sq2de') return {type:'mc', psq:'Si thuhet gjermanisht?', pde:'Wie sagt man das auf Deutsch?', q:w.sq, o:[w.de, ...distract(pool, w, 'de')], a:w.de, say:w.de, e};
  if (kind === 'listen') return {type:'listen', psq:'Dëgjo dhe zgjidh', pde:'Hör zu und wähle', o:[w.de, ...distract(pool, w, 'de')], a:w.de, say:w.de, e};
  if (kind === 'art') return {type:'mc', row:true, psq:'der, die apo das?', pde:'Welcher Artikel passt?', q:'___ ' + n[1], h:n[2], o:['der','die','das'], a:n[0], say:w.de, e};
  return {type:'write', psq:'Shkruaje gjermanisht', pde:'Schreib das Wort auf Deutsch', q:w.sq, art:n ? n[0] : '', a:n ? n[1] : w.de, say:w.de, e};
}
function genWords(id){
  const cats = id === 'w-all' ? WD : [chById(id)], seenDe = new Set(), items = [];
  cats.forEach(c => vocabPool(c).forEach(w => { if (!seenDe.has(w.de)) { seenDe.add(w.de); items.push({c, w}); } }));
  const n = id === 'w-all' ? 15 : 12, pick = shuffle(items).slice(0, n - 1);
  const kinds = shuffle(pick.map((x, k) => WKINDS[k % WKINDS.length]));
  const qs = pick.map(({c, w}, k) => ({...wordQ(c, w, vocabPool(c), kinds[k]), tid: c.id}));
  const rest = items.filter(x => !pick.includes(x)), sqs = new Set();
  const src = (rest.length >= 4 ? shuffle(rest) : shuffle(pick)).filter(x => !sqs.has(x.w.sq) && sqs.add(x.w.sq)).slice(0, 5);
  if (src.length >= 4) qs.splice(1 + (Math.random() * (qs.length - 1) | 0), 0, {type:'match', pairs:src.map(x => [x.w.de, x.w.sq]), tid:src[0].c.id});
  return qs;
}
function pickVaried(list, n){
  const out = [], perType = {}, used = new Set();
  for (const strict of [true, false]) for (const q of list) {
    if (out.length >= n) return out;
    if (out.includes(q) || used.has(q.say)) continue;
    const k = q.type + q.psq;
    if (strict && (perType[k] || 0) >= 1) continue;
    perType[k] = (perType[k] || 0) + 1; used.add(q.say); out.push(q);
  }
  return out;
}
const tagged = (c, list) => list.map(q => ({...q, tid: c.id}));
function poolOf(c){ return { gen: tagged(c, genVocab(c)), its: tagged(c, [...c.items, ...(c.clocks ? genClocks(6) : [])]) }; }
/* mix: how many vocab questions (of them writing ones) and sentence orders a round gets */
function compose(gen, its, n, {vocab = 3, write = 0, order = 2} = {}){
  gen = shuffle(gen);
  const match = rnd(its.filter(q => q.type === 'match'));
  const orders = shuffle(its.filter(q => q.type === 'order'));
  const rest = shuffle(its.filter(q => q.type !== 'match' && q.type !== 'order'));
  const need = n - (match ? 1 : 0);
  const writes = gen.filter(q => q.type === 'write').slice(0, write);
  const other = gen.filter(q => !writes.some(w => w.say === q.say));
  let qs = [...writes, ...pickVaried(other, Math.max(0, Math.min(vocab - writes.length, other.length))), ...orders.slice(0, order)];
  qs.push(...rest.slice(0, Math.max(0, need - qs.length)));
  if (qs.length < need) qs.push(...pickVaried(other.filter(q => !qs.includes(q)), need - qs.length));
  if (qs.length < need) qs.push(...orders.slice(order, order + need - qs.length));
  qs = shuffle(qs);
  if (match) qs.splice(1 + (Math.random() * Math.max(1, qs.length - 1) | 0), 0, match);
  return qs;
}
const keyOf = q => [q.type, q.tid, q.s || q.q || q.de || q.text || (q.rows && (q.th || []).join(',') + ':' + q.rows.map(r => r[0]).join(',')) || (q.cats && q.items.map(i => i[0]).join(','))
  || (q.hm && q.hm.join(':')) || (q.pairs && q.pairs[0].join('=')) || '', q.a || ''].join('|');
/* per-question UI state lives in keys starting with _ and is never stored */
const clean = q => { Object.keys(q).forEach(k => k[0] === '_' && delete q[k]); return q; };

function buildRound(mode, id){
  let qs = [];
  if (mode === 'mistakes') qs = weakRound();
  else if (mode === 'words') qs = genWords(id);
  else if (mode === 'chapter' && chById(id).seq) qs = tagged(chById(id), chById(id).items);
  else if (mode === 'chapter' && chById(id).final) {
    const book = CHAPTERS.filter(c => !c.final && bandOf(c) === bandOf(chById(id)));   /* a finale only tests its own book */
    book.forEach(c => {
      const p = poolOf(c), cand = p.its.filter(q => q.type !== 'match');
      if (cand.length) qs.push(rnd(cand));
    });
    const gen = shuffle(book.flatMap(c => tagged(c, genVocab(c))));
    qs = shuffle([...qs, ...pickVaried(gen, FINAL_ROUND - qs.length)]).slice(0, FINAL_ROUND);
  } else {
    const c = mode === 'chapter' ? chById(id) : null, n = (c && c.n) || ROUND;
    const list = c ? [...(c.from ? [chById(c.from)] : []), c] : CHAPTERS.filter((c, i) => !c.final && seen(i));
    const pools = list.map(poolOf);
    qs = compose(pools.flatMap(p => p.gen), pools.flatMap(p => p.its), n, c ? c.mix : undefined).slice(0, n);
  }
  return qs.map(q => {
    q.key = q.key || keyOf(q);
    if (q.o && !q.row && q.type !== 'listen') q.o = shuffle(q.o);
    if (q.type === 'listen') q.o = shuffle(q.o);
    return clean(q);
  });
}

/* ================= Home ================= */
let G = null, L = null, eggTaps = 0, eggT;
function home(){
  G = null; L = null; closeSheet(); rollDay();
  const lv = level(), into = S.xp % XP_LVL, st = streakNow(), mc = Object.keys(S.mistakes).length;
  const [lsq, lde] = lvlName(lv), goal = Math.min(S.dayXp / GOAL, 1), C = 2 * Math.PI * 27;
  const cur = curIdx(), done = doneCount();
  const next = CHAPTERS[cur], band = next ? bandOf(next) : BAND_NOW;   /* progress of the book she is in now */
  const bk = CHAPTERS.filter(c => bandOf(c) === band), total = bk.length, bdone = bk.filter(c => isDone(chIdx(c.id))).length, jp = Math.round(bdone / total * 100);
  app.style.setProperty('--tc', 'var(--brand)');
  app.innerHTML = `
  <header class="hb">
    <button class="lvchip" data-act="profile" aria-label="Profili im"><span class="lvnum">${lv}</span>Profili</button>
    <div class="hb-r">
      <span class="pill ${st ? 'fire' : ''}" title="Ditë rresht">🔥 ${st}</span>
      <button class="pill" data-act="sound" aria-label="Zëri">${S.sound ? '🔊' : '🔇'}</button>
    </div>
  </header>
  <section class="hero">
    <button class="sticker" data-act="egg" aria-label="A1">A1</button>
    <h1>Hallo,<br>Mimoza!</h1>
    <p>Mirë se erdhe! Sot mësojmë bashkë.</p>
    <p class="de">Willkommen! Heute lernen wir zusammen.</p>
    <div class="journey">
      <div class="j-top"><b>Udhëtimi yt${BAND_NOW > 1 ? ' · ' + esc(bandInfo(band)[0]) : ''}</b><span>${bdone} / ${total}</span></div>
      <div class="jbar"><i style="width:${jp}%"></i></div>
      <small>Deine Reise: ${jp}% geschafft</small>
    </div>
    ${next ? `<button class="go" data-act="go" data-id="${next.id}">
        <span class="go-e">${next.emoji}</span>
        <span><small>${done ? 'Vazhdo / Weiter' : 'Fillo udhëtimin / Los geht’s'}</small><b>${cur + 1}. ${esc(next.sq)} ${newTag(next)}</b></span><span class="go-arr">▶</span>
      </button>`
      : `<div class="go done-all">🏆 <span><b>Udhëtimi u krye!</b><small>Reise geschafft! Je e mrekullueshme.</small></span></div>`}
  </section>
  <section class="status">
    <div class="ring">
      <svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="27" fill="none" style="stroke:var(--line)" stroke-width="7"/>
      <circle cx="32" cy="32" r="27" fill="none" stroke="${goal >= 1 ? '#16A34A' : '#FFC53D'}" stroke-width="7" stroke-linecap="round"
        stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - goal)}"/></svg>
      <b>${goal >= 1 ? '✓' : Math.min(S.dayXp, GOAL) + '<br>/' + GOAL}</b>
    </div>
    <div class="st-main">
      <div class="st-title">Niveli ${lv}: ${lsq}<small>${lde}</small></div>
      <div class="xpbar"><i style="width:${into}%"></i></div>
      <div class="st-xp">${goal >= 1 ? 'Qëllimi i sotëm u arrit! 🎉' : `Qëllimi sot: ${GOAL} XP / Tagesziel`}</div>
    </div>
  </section>
  <h2 class="sec" id="mapsec">Harta e udhëtimit<span>Die Reisekarte</span></h2>
  ${mapHTML(cur)}
  <h2 class="sec">Ushtrim i lirë<span>Freies Üben</span></h2>
  <div class="free">
    <button class="fbtn" data-act="chapters"><span class="em">📋</span><span><b>Zgjidh kapitullin</b><small>Kapitel selbst wählen</small></span></button>
    ${WD.length ? `<button class="fbtn" data-act="words"><span class="em">🔤</span><span><b>Fjalët${newWordTag(WD.reduce((s, c) => s + newWordCount(c), 0))}</b><small>Wörter-Training: nur Wörter, nach Thema</small></span></button>` : ''}
    <button class="fbtn ${mc ? 'mist' : ''}" data-act="weak"><span class="em">💪</span><span><b>Pikat e dobëta${mc ? ` (${mc})` : ''}</b><small>Meine Schwächen: verstehen & üben</small></span></button>
    <button class="fbtn" data-act="mix"><span class="em">⚡</span><span><b>Përzierje</b><small>Mix aus allen offenen Kapiteln</small></span></button>
    <button class="fbtn" data-act="dict"><span class="em">📒</span><span><b>Fletë ndihme</b><small>Spickzettel: das Wichtigste auf einen Blick</small></span></button>
  </div>
  <p class="foot">Gemacht mit ❤️ für Mimoza</p>`;
  const chip = app.querySelector('.lekchip.here');   /* keep the current lesson in view in the chip row */
  if (chip) chip.parentElement.scrollLeft = chip.offsetLeft - (chip.parentElement.clientWidth - chip.clientWidth) / 2;
  window.scrollTo(0, 0);
}
/* ================= Journey map: the whole journey, folded around the current step ================= */
/* all nodes are always rendered; the steps before and after the visible part sit in folds that open in place */
const MAP_BEFORE = 2, MAP_AFTER = 3;
function mapGroups(){
  const gs = [];
  CHAPTERS.forEach((c, i) => { if (c.unit || !gs.length) gs.push({unit:c.unit || ['', ''], band:bandOf(c), idx:[]}); gs[gs.length - 1].idx.push(i); });
  return gs;
}
/* one chip per lesson: progress ring, the current lesson filled; tap = glide to that lesson */
function lekChips(gs, cur){
  return `<div class="lekchips" id="lekchips">${gs.map((g, k) => {
    const c0 = CHAPTERS[g.idx[0]], n = g.idx.length, d = g.idx.filter(isDone).length;
    const book = k && g.band !== gs[k - 1].band ? `<span class="lc-book" aria-hidden="true">${bandInfo(g.band)[2]}</span>` : '';
    return `${book}<button class="lekchip ${d === n ? 'done' : ''} ${g.idx.includes(cur) ? 'here' : ''}"
      style="--tc:${c0.color};--p:${Math.round(d / n * 100)}%" data-act="mapjump" data-id="${c0.id}" aria-label="${esc(g.unit[0])}">
      <b>${c0.final ? '🏆' : c0.lek ? 'L' + c0.lek : k + 1}</b><small>${d === n ? '✓' : `${d}/${n}`}</small></button>`; }).join('')}</div>`;
}
function mapHTML(cur){
  const gs = mapGroups(), N = CHAPTERS.length, c = Math.min(cur, N - 1);
  const from = Math.max(0, c - MAP_BEFORE), to = Math.min(N - 1, c + MAP_AFTER);
  const nodes = (a, b) => CHAPTERS.slice(a, b + 1).map((ch, k) => nodeHTML(ch, a + k)).join('');
  /* while the earlier steps are folded, still show which book and lesson the visible part belongs to */
  const g0 = gs.find(g => g.idx.includes(from)), c0 = CHAPTERS[from];
  const ctx = from && !c0.unit ? `<div class="mapctx">${bookDiv(c0)}<div class="unit"><b>${esc(g0.unit[0])}</b><span>${esc(g0.unit[1])}</span></div></div>` : '';
  const btn = (dir, n) => `<button class="mapmore ${dir}" data-act="mapfold" data-id="${dir}" aria-expanded="false">
    <span class="l-open">${dir === 'up' ? '▲' : '▼'} ${n} ${n > 1 ? 'hapa' : 'hap'} ${dir === 'up' ? 'më parë' : 'më tej'}<small>${dir === 'up' ? 'Frühere' : 'Weitere'} Schritte anzeigen</small></span>
    <span class="l-close">${dir === 'up' ? '▼' : '▲'} Mbyll<small>Zuklappen</small></span></button>`;
  return `${lekChips(gs, cur)}
  <div class="map" id="map">
    ${from ? `${btn('up', from)}<div class="mapfold" id="fold-up">${nodes(0, from - 1)}</div>${ctx}` : ''}
    ${nodes(from, to)}
    ${to < N - 1 ? `<div class="mapfold" id="fold-down">${nodes(to + 1, N - 1)}</div>${btn('down', N - 1 - to)}` : ''}
  </div>`;
}
/* open or close a fold; the current step stays exactly where it is on the screen */
function mapFold(dir, open, quiet){
  const map = $('#map'), fold = $('#fold-' + dir); if (!map || !fold) return;
  const cls = dir + 'open', now = open ?? !map.classList.contains(cls);
  if (now === map.classList.contains(cls)) return;
  if (!quiet) SND.tap();
  const anchor = map.querySelector('.nrow.here') || fold.nextElementSibling || map;
  const y0 = anchor.getBoundingClientRect().top;
  map.classList.toggle(cls, now);
  map.querySelector('.mapmore.' + dir)?.setAttribute('aria-expanded', now);
  if (dir === 'up') {
    window.scrollBy(0, anchor.getBoundingClientRect().top - y0);
    /* peek a little upwards, so she sees what opened (only when not jumping somewhere else) */
    if (now && !quiet) window.scrollBy({top: -Math.min(280, fold.offsetHeight), behavior: reduced() ? 'auto' : 'smooth'});
  }
}
/* lesson chip: open what is needed and glide to that lesson's banner */
function mapJump(id){
  const t = $('#map')?.querySelector(`[data-u="${id}"]`); if (!t) return;
  SND.tap();
  ['up', 'down'].forEach(d => { if ($('#fold-' + d)?.contains(t)) mapFold(d, true, true); });
  const y = t.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({top: y, behavior: reduced() ? 'auto' : 'smooth'});
}
function nodeHTML(c, i){
  const d = isDone(i), u = unlocked(i), cur = i === curIdx(), s = starsOf(best(i), passOf(c));
  return `${bookDiv(c, CHAPTERS[i - 1])}${c.unit ? `<div class="unit" data-u="${c.id}"><b>${esc(c.unit[0])}</b><span>${esc(c.unit[1])}</span></div>` : ''}
  <div class="nrow ${cur ? 'here' : ''}" style="--off:${OFF[i % OFF.length]}px"><div class="nwrap">
    ${cur ? '<span class="bubble">📍 Je këtu · Du bist hier</span>' : ''}
    <button class="node ${d ? 'done' : u ? 'open' : 'lock'} ${cur ? 'cur' : ''} ${c.final ? 'final' : ''}" style="--tc:${c.color}" data-act="chap" data-id="${c.id}" aria-label="${esc(c.sq)}">
      <span>${c.emoji}</span></button>
    <div class="nlbl"><b>${i + 1}. ${esc(c.sq)}${newTag(c)}</b><small>${esc(c.de)}</small>
      ${d ? `<span class="nst">${[1,2,3].map(k => `<i class="${k <= s ? 'on' : ''}">★</i>`).join('')}</span>` : ''}
      ${cur ? `<button class="herego" data-act="go" data-id="${c.id}">▶ Fillo / Start</button>` : ''}</div>
  </div></div>`;
}

/* ================= Homework ================= */
/* only the newest set is the current homework */
const hwNow = () => HW.filter(h => !h.shelf).pop();
const hwCur = h => h === hwNow();
const hwTag = c => { const h = hwById(c.hw); return hwCur(h) ? ['📝 Detyrë', 'Hausaufgabe'] : [(h.icon || '📘') + ' ' + h.sq.split(':')[0], h.de.split(' · ')[0]]; };
function hwCard(){
  const h = hwNow(); if (!h) return '';
  const n = h.parts.length, d = hwCount(h);
  return `<button class="hwcard" data-act="hw" aria-label="Detyrat e shtëpisë">
    <span class="hw-tape" aria-hidden="true"></span>
    <span class="hw-top"><span class="hw-tag">${h.date === today() ? 'SOT · HEUTE' : '📅 ' + fmtDate(h.date)}</span>
      ${d === n ? '<span class="hw-ok">✓ Gati</span>' : isNew(h) ? '<span class="hw-new">E RE · NEU</span>' : ''}</span>
    <b>📝 Detyrat e shtëpisë${h.badge ? ` <span class="hw-test">${esc(h.badge[0])}</span>` : ''}</b><small>Hausaufgaben · ${esc(h.de)}</small>
    <span class="hw-prog"><i style="width:${d / n * 100}%"></i></span>
    <small>${d}/${n} ushtrime gati · Übungen erledigt</small>
  </button>`;
}
/* older homework sets stay as their own block in the chapter list */
function hwBlock(h){
  const n = h.parts.length, d = hwCount(h);
  return `<button class="topic" style="--tc:${h.parts[0].color}" data-act="hw" data-id="${h.id}">
    <span class="t-ico">${h.icon || '📘'}</span>
    <span class="t-txt"><b>${esc(h.sq)}${newTag(h)}</b><span class="de">${esc(h.de)}</span></span>
    <span class="t-stars"><b>${d === n ? '✓' : `${d}/${n}`}</b><small>ushtrime</small></span>
  </button>`;
}
function hwList(id){
  closeSheet(); G = null; L = null;
  const h = hwById(id) || hwNow(), now = hwCur(h);
  app.style.setProperty('--tc', 'var(--brand)');
  app.innerHTML = `<div class="game">
    <div class="gbar"><button class="x" data-act="chapters" aria-label="Kthehu">✕</button><h2 class="dict-h">${now ? '📝 Detyrat e shtëpisë<span>Hausaufgaben</span>' : `${h.icon || '📘'} ${esc(h.sq)}<span>${esc(h.de)}</span>`}</h2></div>
    <p class="de" style="margin:0 0 6px">Këto janë ushtrimet nga libri yt. Bëji me radhë! 💪<br>Das sind die Übungen aus deinem Buch.</p>
    ${[h].map(h => `<section class="hwset">
      <div class="hw-head"><b>${esc(h.sq)}${h.badge ? ` <span class="hw-test">${esc(h.badge[0])}</span>` : ''}</b><small>${h.date === today() ? 'Sot / Heute' : fmtDate(h.date)} · ${esc(h.de)}</small></div>
      <div class="topics">${h.parts.map((p, k) => { const b = S.hw[p.id]?.best, d = hwDone(p);
        return `<button class="topic hwrow ${d ? 'done' : ''}" style="--tc:${p.color}" data-act="chap" data-id="${p.id}">
          <span class="hw-chk">${d ? '✓' : k + 1}</span>
          <span class="t-txt"><b>${p.emoji} ${esc(p.sq)}${newTag(p.added ? p : hwById(p.hw))}</b><span class="de">${esc(p.de)}</span><small class="hw-book">📖 ${esc(p.book[0])}</small></span>
          <span class="t-stars">${[1,2,3].map(s => `<span class="${s <= starsOf(b || 0, passOf(p)) ? 'on' : ''}">★</span>`).join('')}
            <small>${b == null ? 'Ende jo / Offen' : b + '%'}</small></span>
        </button>`; }).join('')}</div>
    </section>`).join('')}
  </div>`;
  window.scrollTo(0, 0);
}

/* ================= Chapter sheet ================= */
function chapSheet(id){
  const i = chIdx(id), c = chById(id);
  SND.tap();
  const st = rec(c), b = st.best;
  let btns;
  if (c.final) btns = `<button class="cta" data-act="play" data-id="${c.id}">🏆 Fillo testin / Prüfung starten</button>`;
  else if (c.test) btns = `<button class="cta" data-act="play" data-id="${c.id}">🎓 Fillo testin / Test starten</button>`;
  else if (!st.lesson) btns = `<button class="cta" data-act="lesson" data-id="${c.id}">📖 Fillo me mësimin / Zur Lektion</button>`;
  else btns = `<button class="cta" data-act="play" data-id="${c.id}">🎯 Ushtro / Üben</button>
    <button class="cta light" data-act="lesson" data-id="${c.id}">📖 Përsërit mësimin / Lektion</button>`;
  sheet.className = 'sheet plain';
  sheet.style.setProperty('--tc', c.color);
  sheet.innerHTML = `<div class="sh-in">
    <div class="sh-top"><div class="grab"></div><div class="prof-h"><span class="cs-ico">${c.emoji}</span><button class="x" data-act="closesheet" aria-label="Mbyll">✕</button></div></div>
    <p class="cs-num">${c.hw ? `${hwCur(hwById(c.hw)) ? '📝 Detyrë shtëpie' : hwTag(c)[0]} · ${esc(c.book[0])}<br><span style="font-weight:400">${hwTag(c)[1]} · ${esc(c.book[1])}</span>` : `Kapitulli ${i + 1} / Kapitel ${i + 1}`}${newTag(c)}</p>
    <h2 class="cs-t">${esc(c.sq)}</h2><p class="de" style="margin:0">${esc(c.de)}</p>
    <p class="cs-d">${esc(c.desc)}</p>
    ${!c.hw && !unlocked(i) && b == null ? `<p class="cs-best">🧭 Në udhëtim vjen më vonë, por mund ta provosh!<br><small>Kommt später auf der Reise – du darfst es trotzdem schon üben.</small></p>` : ''}
    ${b != null ? `<p class="cs-best">Rezultati më i mirë: <b>${b}%</b> ${'★'.repeat(starsOf(b, passOf(c)))}${b < passOf(c) ? `<br><small>Të duhen ${passOf(c)}% për ta kaluar. Du brauchst ${passOf(c)}%.</small>` : ''}</p>` : ''}
    ${btns}
  </div>`;
  openSheetEl();
}
/* chapter list in book order: per lesson its chapters, then its workbook pages by page number */
const lekOf = p => p.lek || hwById(p.hw).lek;
function chapRow(c, i){
  const b = S.ch[c.id]?.best, s = starsOf(b || 0, passOf(c));
  return `<button class="topic" style="--tc:${c.color}" data-act="chap" data-id="${c.id}">
    <span class="t-ico">${c.emoji}</span>
    <span class="t-txt"><b>${i + 1}. ${esc(c.sq)}${newTag(c)}</b><span class="de">${esc(c.de)}</span></span>
    <span class="t-stars">${[1,2,3].map(k => `<span class="${k <= s ? 'on' : ''}">★</span>`).join('')}
      <small>${b == null ? 'Ende jo / Offen' : b + '%'}</small></span>
  </button>`;
}
function pageRow(p){
  const b = S.hw[p.id]?.best, s = starsOf(b || 0, passOf(p));
  return `<button class="topic pagerow ${hwDone(p) ? 'done' : ''}" style="--tc:${p.color}" data-act="chap" data-id="${p.id}">
    <span class="t-ico">${p.emoji}</span>
    <span class="t-txt"><b>${esc(p.sq)}${newTag(p.added ? p : hwById(p.hw))}</b><span class="de">📖 Arbeitsbuch ${esc(p.book[1])}</span></span>
    <span class="t-stars">${[1,2,3].map(k => `<span class="${k <= s ? 'on' : ''}">★</span>`).join('')}
      <small>${b == null ? 'Ende jo / Offen' : b + '%'}</small></span>
  </button>`;
}
function chapters(){
  closeSheet(); G = null; L = null;
  app.style.setProperty('--tc', 'var(--brand)');
  const pages = HWP.filter(p => !hwCur(hwById(p.hw)) && lekOf(p));
  const groups = [];
  CHAPTERS.forEach((c, i) => { if (c.unit || !groups.length) groups.push({unit:c.unit, lek:c.lek, band:bandOf(c), rows:[]}); groups[groups.length - 1].rows.push(chapRow(c, i)); });
  const rest = HW.filter(h => !hwCur(h) && h.parts.some(p => !lekOf(p)));
  app.innerHTML = `<div class="game">
    <div class="gbar"><button class="x" data-act="home" aria-label="Kthehu">✕</button><h2 class="dict-h">📋 Kapitujt<span>Alle Kapitel</span></h2></div>
    <p class="de" style="margin:0 0 14px">Sipas mësimeve të librit: kapitujt dhe faqet e fletores. 📖<br>Nach Lektionen wie im Buch: Kapitel und Arbeitsbuch-Seiten.</p>
    ${hwCard()}
    ${groups.map((g, k) => { const pg = g.lek ? pages.filter(p => lekOf(p) === g.lek).sort((a, b) => a.pg - b.pg) : [];
      return `${bookDiv(g, groups[k - 1])}${g.unit ? `<div class="unit"><b>${esc(g.unit[0])}</b><span>${esc(g.unit[1])}</span></div>` : ''}
      <div class="topics">${g.rows.join('')}
        ${pg.length ? `<p class="pagehead">📖 Fletorja e ushtrimeve · Arbeitsbuch</p>${pg.map(pageRow).join('')}` : ''}</div>`; }).join('')}
    ${rest.length ? `<div class="unit"><b>Të tjera</b><span>Weitere Übungen</span></div><div class="topics">${rest.map(hwBlock).join('')}</div>` : ''}
  </div>`;
  window.scrollTo(0, 0);
}
/* ================= Word training ================= */
function wordsPage(){
  closeSheet(); G = null; L = null;
  app.style.setProperty('--tc', 'var(--brand)');
  const all = new Set(WD.flatMap(c => vocabPool(c).map(w => w.de))).size, ab = S.w['w-all']?.best;
  app.innerHTML = `<div class="game">
    <div class="gbar"><button class="x" data-act="home" aria-label="Kthehu">✕</button><h2 class="dict-h">🔤 Fjalët<span>Wörter-Training</span></h2></div>
    <p class="de" style="margin:0 0 14px">Vetëm fjalë, pa fjali. Zgjidh një temë! 💪<br>Nur Wörter, keine Sätze. Wähle ein Thema!</p>
    <button class="fbtn" data-act="wplay" data-id="w-all"><span class="em">🎲</span><span><b>Të gjitha fjalët</b><small>Alle Wörter gemischt · ${all} fjalë${ab != null ? ` · ${ab}%` : ''}</small></span></button>
    <div class="topics" style="margin-top:14px">${WD.map(c => { const b = S.w[c.id]?.best, s = starsOf(b || 0);
      return `<button class="topic" style="--tc:${c.color}" data-act="wsheet" data-id="${c.id}">
        <span class="t-ico">${c.emoji}</span>
        <span class="t-txt"><b>${esc(c.sq)}${isNew(c) ? newTag(c) : newWordTag(newWordCount(c))}</b><span class="de">${esc(c.de)} · ${vocabPool(c).length} fjalë</span></span>
        <span class="t-stars">${[1,2,3].map(k => `<span class="${k <= s ? 'on' : ''}">★</span>`).join('')}
          <small>${b == null ? 'Ende jo / Offen' : b + '%'}</small></span>
      </button>`; }).join('')}</div>
  </div>`;
  window.scrollTo(0, 0);
}
function wordSheet(id){
  const c = chById(id); SND.tap();
  sheet.className = 'sheet plain';
  sheet.style.setProperty('--tc', c.color);
  sheet.innerHTML = `<div class="sh-in">
    <div class="sh-top"><div class="grab"></div><div class="prof-h"><span class="cs-ico">${c.emoji}</span><button class="x" data-act="closesheet" aria-label="Mbyll">✕</button></div></div>
    <h2 class="cs-t" style="margin-top:12px">${esc(c.sq)}</h2><p class="de" style="margin:0">${esc(c.de)}</p>
    <button class="cta" data-act="wplay" data-id="${c.id}">🎯 Ushtro fjalët / Wörter üben</button>
    <p class="de" style="margin:18px 0 8px">Prek një fjalë për ta dëgjuar. Tippe ein Wort an, um es zu hören.</p>
    ${vocabPool(c).map(w => `<button class="drow" data-act="say" data-t="${esc(w.de)}"><b>${esc(w.de)}${w.nw ? '<span class="newtag">E RE</span>' : ''}</b><span>${esc(w.sq)}</span></button>`).join('')}
  </div>`;
  openSheetEl();
}
function go(id){
  const c = chById(id);
  if (c.final || c.test) return start('chapter', id);
  if (!rec(c).lesson) return lesson(id);
  start('chapter', id);
}

/* ================= Lesson ================= */
function lesson(id){
  closeSheet(); const c = chById(id);
  L = {id, i:0}; G = null;
  app.style.setProperty('--tc', c.color);
  renderLesson();
}
function renderLesson(){
  const c = chById(L.id), s = c.lesson[L.i], n = c.lesson.length, last = L.i === n - 1;
  app.innerHTML = `<div class="game">
    <div class="gbar"><button class="x" data-act="${c.hw ? (hwCur(hwById(c.hw)) ? 'hw' : 'chapters') : 'home'}" data-id="${c.hw || ''}" aria-label="Kthehu">✕</button>
      <div class="dots">${c.lesson.map((x, k) => `<i class="${k <= L.i ? 'on' : ''}"></i>`).join('')}</div>
      <span class="lnum">${L.i + 1}/${n}</span></div>
    <p class="l-kicker">${c.emoji} ${c.hw ? `${hwTag(c)[0].slice(3)} · ${esc(c.book[0])}` : 'Mësimi / Lektion'}</p>
    ${slideHTML(s)}
    <div class="actions lnav">
      ${L.i > 0 ? '<button class="cta light" data-act="lprev">‹ Prapa</button>' : ''}
      <button class="cta" data-act="${last ? 'lstart' : 'lnext'}">${last ? '🎯 Fillo ushtrimin! Los geht’s!' : 'Më tej / Weiter ›'}</button>
    </div></div>`;
  window.scrollTo(0, 0);
}
function slideHTML(s){
  let h = `<div class="slide"><h2>${s.t}</h2>${s.d ? `<p class="de sd">${s.d}</p>` : ''}`;
  if (s.p) h += `<p class="sp">${s.p}</p>`;
  if (s.clocks) h += `<div class="sclocks">${s.clocks.map(([hh, mm, t]) =>
    `<button class="sclock" data-act="say" data-t="Es ist ${esc(t)}.">${clockSVG(hh, mm, 112)}<b>${esc(t)}</b><small class="tr">${timeSq(hh, mm)}</small><small>${digital(hh, mm)}</small></button>`).join('')}</div>`;
  if (s.table) {
    const col = s.say ?? 0;
    const sayRow = r => col === -1 ? '' : col === 'join' ? r.map(strip).join(' ') : strip(r[col]);
    h += `<div class="tw"><table class="lt">${s.th ? `<thead><tr>${s.th.map(x => `<th>${x}</th>`).join('')}</tr></thead>` : ''}<tbody>
      ${s.table.map((r, ri) => { const t = sayRow(r); return `<tr ${t ? `data-act="say" data-t="${esc(t)}" class="sayable"` : ''}>${r.map((x, ci) => {
        const tr = s.tr && s.tr[ri] && s.tr[ri][ci];   /* tr: Albanian translation per cell, shown small under the German */
        return `<td>${x}${tr ? `<small class="tr">${esc(tr)}</small>` : ''}</td>`; }).join('')}</tr>`; }).join('')}
      </tbody></table></div>`;
  }
  if (s.ex) h += `<div class="exs">${s.ex.map(([de, sq]) =>
    `<button class="ex" data-act="say" data-t="${esc(de)}"><span class="ex-s">🔊</span><span><b>${esc(de)}</b><small>${esc(sq)}</small></span></button>`).join('')}</div>`;
  if (s.fix) h += `<div class="fixes">${s.fix.map(([w, r, n]) =>
    `<button class="fix" data-act="say" data-t="${esc(r)}"><span class="fx-w">✗ ${esc(w)}</span><span class="fx-r">✓ ${esc(r)}</span>${n ? `<small>${esc(n)}</small>` : ''}</button>`).join('')}</div>`;
  if (s.tip) h += `<div class="tipbox">💡 ${s.tip}</div>`;
  return h + '</div>';
}

/* ================= Game ================= */
function start(mode, id){
  closeSheet();
  if (mode === 'chapter') { rec(chById(id), true).lesson = true; save(); }
  const qs = buildRound(mode, id);
  if (!qs.length) return home();
  G = {mode, id, qs, i:0, ok:0, first:0, xp:0, combo:0, maxCombo:0, tries:0, locked:false, hint:false, love:false, lvBefore:level(),
    test: mode === 'chapter' && !!chById(id).test};
  SND.page(); renderQ();
}
const cur = () => G.qs[G.i];
/* a test gives one try per question, practice gives two */
const maxTries = () => G.test ? 1 : 2;
function topbar(){
  const p = G.i / G.qs.length * 100;
  return `<div class="gbar">
    <button class="x" data-act="home" aria-label="Kthehu">✕</button>
    <div class="prog"><i style="width:${p}%"></i></div>
    <div class="combo ${G.combo >= 2 ? 'on' : ''}">🔥${G.combo}</div>
  </div>`;
}
function head(sq, de){
  return `<div class="qhead"><div><p class="sq">${esc(sq)}</p><p class="de">${esc(de)}</p></div>
    ${G && G.test ? '' : '<button class="hintbtn" data-act="hint" aria-label="Ndihmë">💡</button>'}</div>`;
}
const blank = s => esc(s).replace('___', '<span class="blank" id="blank">&nbsp;</span>');
const spk = t => canSpeak ? `<button class="say" data-act="say" data-t="${esc(t)}" aria-label="Dëgjo">🔊</button>` : '';

function renderQ(){
  const q = cur(); G.tries = 0; G.locked = false; G.hint = false;
  const c = chById(q.tid);
  app.style.setProperty('--tc', c ? c.color : 'var(--brand)');
  const R = {gap:rChoice, mc:rChoice, listen:rListen, write:rWrite, order:rOrder, letters:rOrder, match:rMatch, clock:rClock, clockpick:rClockPick,
    cloze:rCloze, table:rTable, sort:rSort};
  G.chip = null;
  app.innerHTML = `<div class="game">${topbar()}${c && c.hw ? `<p class="hwtag">${hwTag(c)[0]} · ${esc(c.book[0])}</p>` : ''}${(R[q.type] || rChoice)(q)}</div>`;
  if (q.type === 'listen') setTimeout(() => autoSay(q.say), 350);
  window.scrollTo(0, 0);
}
function hint(){
  const q = cur(); if (!q) return;
  const c = chById(q.tid);
  G.hint = true; SND.tap();
  toast(`💡 ${q.t || (c && c.tip) || 'Lexo me kujdes!'}`, 6500);
}

/* --- choice types --- */
/* reading questions: read:true shows the chapter's text (c.read) above the question */
const readOf = q => q.read === true ? chById(q.tid)?.read : q.read;
function rChoice(q){
  const rd = readOf(q);
  return `${head(q.psq || (q.type === 'gap' ? 'Plotëso zbrazëtirën' : 'Zgjidh përgjigjen'), q.pde || (q.type === 'gap' ? 'Ergänze die Lücke' : 'Wähle die richtige Antwort'))}
  ${rd ? `<div class="readbox">${rd}</div>` : ''}
  <div class="qcard ${q.speakQ ? 'has-say' : ''}">
    <div class="qtext">${blank(q.s || q.q)}</div>
    ${q.h ? `<div class="qhint">💭 ${esc(q.h)}</div>` : ''}
    ${q.speakQ ? spk(q.q) : ''}
  </div>${opts(q)}`;
}
function rListen(q){
  return `${head(q.psq, q.pde)}
  <div class="listen">
    <button class="bigplay" data-act="say" data-t="${esc(q.say)}" aria-label="Dëgjo">🔊</button>
    <button class="slow" data-act="slow" data-t="${esc(q.say)}">🐢 Ngadalë / Langsam</button>
  </div>${opts(q)}`;
}
function rClock(q){
  return `${head(q.psq, q.pde)}<div class="qcard clockcard">${clockSVG(q.hm[0], q.hm[1], 176)}</div>${opts(q)}`;
}
function rClockPick(q){
  return `${head(q.psq, q.pde)}
  <div class="qcard has-say"><div class="qtext">${esc(q.q)}</div>${spk(q.q)}</div>
  <div class="opts clocks">${q.o.map((o, k) => { const [h, m] = o.split(':').map(Number);
    return `<button class="opt" data-act="pick" data-k="${k}" aria-label="${digital(h, m)}">${clockSVG(h, m, 120)}</button>`; }).join('')}</div>`;
}
const opts = q => `<div class="opts ${q.row ? 'row' : ''}">${q.o.map((o, k) =>
  `<button class="opt" data-act="pick" data-k="${k}">${esc(o)}</button>`).join('')}</div>`;

function pick(k){
  const q = cur(); if (G.locked) return;
  const btns = app.querySelectorAll('.opt');
  if (q.o[k] === q.a) {
    G.locked = true;
    btns.forEach(b => b.disabled = true); btns[k].classList.add('ok');
    const bl = $('#blank'); if (bl) { bl.textContent = q.a === 'pa nyjë' ? '∅' : q.a; bl.classList.add('filled'); }
    correct();
  } else {
    btns[k].classList.add('bad'); btns[k].disabled = true; G.tries++;
    if (G.tries < maxTries() && q.o.length - G.tries > 1) tryAgain(q.t || hintFor(q));
    else {
      G.locked = true;
      btns.forEach((b, j) => { b.disabled = true; if (q.o[j] === q.a) b.classList.add('ok'); });
      wrong();
    }
  }
}
function hintFor(q){
  if (q.h && q.type !== 'listen') return 'Shiko edhe një herë ndihmën: ' + q.h;
  if (q.type === 'clock' || q.type === 'clockpick') return 'Shiko akrepin e shkurtër (ora) dhe të gjatin (minutat).';
  return 'Versuch es nochmal!';
}

/* --- write --- */
function rWrite(q){
  return `${head(q.psq, q.pde)}
  <div class="qcard"><div class="qtext">${esc(q.q)}</div></div>
  <div class="wrow" id="wrow"><span class="art">${esc(q.art)}</span>
    <input id="w" type="text" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="done" placeholder="…" aria-label="Fjala gjermanisht"></div>
  <div class="uml">${['ä','ö','ü','ß','Ä','Ö','Ü'].map(c => `<button data-act="uml" data-c="${c}">${c}</button>`).join('')}</div>
  <div class="actions"><button class="cta" data-act="wcheck">Kontrollo / Prüfen</button></div>`;
}
function wcheck(){
  const q = cur(); if (G.locked) return;
  const inp = $('#w'), row = $('#wrow'), raw = inp.value.trim();
  if (!raw) { inp.focus(); return; }
  const norm = s => s.toLowerCase().replace(/^(der|die|das)\s+/, '').replace(/ß/g, 'ss').trim();
  const flat = s => s.replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u');
  const v = norm(raw), target = norm(q.a);
  row.classList.remove('bad'); void row.offsetWidth;
  if (v === target) {
    G.locked = true; inp.disabled = true; row.classList.add('ok'); inp.blur();
    const typed = raw.replace(/^(der|die|das)\s+/i, '');
    correct(q.art && typed[0] !== q.a[0] ? 'Kujdes: emrat në gjermanisht shkruhen gjithmonë me shkronjë të madhe! Nomen schreibt man groß.' : '');
  } else {
    G.tries++; row.classList.add('bad');
    if (G.tries < maxTries()) tryAgain(flat(v) === flat(target) ? 'Pothuajse! Kujdes me ä, ö, ü 😉' : `Fillon me „${q.a[0]}“ dhe ka ${q.a.length} shkronja.`);
    else { G.locked = true; inp.disabled = true; wrong(); }
  }
}

/* --- sentence order: words, chunks (q.parts, book-style "a – b – c") or a letter salad (type letters) --- */
const orderTarget = q => q.type === 'letters' ? [...q.a] : q.parts || q.de.split(' ');
function rOrder(q){
  const lt = q.type === 'letters', target = orderTarget(q), sep = lt ? '' : ' ';
  if (!q._pool) {
    const toks = (lt ? [...q.mix] : target).map((w, id) => ({w, id}));
    let s = lt ? toks : shuffle(toks), n = 0;
    while (!lt && s.map(t => t.w).join(sep) === target.join(sep) && n++ < 10) s = shuffle(toks);
    q._pool = s; q._picked = [];
  }
  const top = lt
    ? `${head(q.psq || 'Rendit shkronjat', q.pde || 'Ordne die Buchstaben')}
      <div class="qcard"><div class="qtext">${blank(q.s)}</div>${q.h ? `<div class="qhint">💭 ${esc(q.h)}</div>` : ''}</div>`
    : `${head(q.psq || 'Rendit fjalinë', q.pde || 'Bilde den Satz')}
      <div class="qcard">${q.cue ? `<div class="qhint" style="margin:0 0 8px">📖 ${esc(q.cue)}</div>` : '<div class="qhint" style="margin:0 0 8px">🇦🇱 Shqip</div>'}
      <div class="qtext" style="font-size:22px">${esc(q.sq)}</div></div>`;
  return `${top}
  <div id="orderArea" class="${lt ? 'letters' : ''}">${orderInner(q)}</div>
  <div class="actions"><button class="cta" data-act="ocheck" id="ocheck" ${q._picked.length < q._pool.length ? 'disabled' : ''}>Kontrollo / Prüfen</button></div>`;
}
function orderInner(q){
  const picked = new Set(q._picked.map(t => t.id));
  return `<div class="slot" id="slot">${q._picked.map(t => `<button class="tok ${t.wrong ? 'wrong' : ''}" data-act="un" data-id="${t.id}">${esc(t.w)}</button>`).join('')}</div>
  <div class="pool">${q._pool.map(t => `<button class="tok ${picked.has(t.id) ? 'ghost' : ''}" data-act="tp" data-id="${t.id}" ${picked.has(t.id) ? 'tabindex="-1"' : ''}>${esc(t.w)}</button>`).join('')}</div>`;
}
function otap(act, id){
  const q = cur(); if (G.locked) return; id = +id; SND.tap();
  if (act === 'tp') { const t = q._pool.find(x => x.id === id); if (!q._picked.includes(t)) q._picked.push(t); }
  else q._picked = q._picked.filter(t => t.id !== id);
  q._pool.forEach(t => delete t.wrong);
  $('#orderArea').innerHTML = orderInner(q);
  $('#ocheck').disabled = q._picked.length < q._pool.length;
}
function ocheck(){
  const q = cur(); if (G.locked) return;
  const lt = q.type === 'letters', target = orderTarget(q), sep = lt ? '' : ' ';
  if (q._picked.map(t => t.w).join(sep) === target.join(sep)) {
    G.locked = true; $('#orderArea').innerHTML = orderInner(q); $('#slot').classList.add('ok');
    const bl = $('#blank'); if (bl) { bl.textContent = q.a; bl.classList.add('filled'); }
    correct(lt ? 'Fjala është e saktë!' : 'Folja është në vendin e duhur. Perfekt!');
  } else {
    G.tries++;
    if (G.tries < maxTries()) {
      q._picked.forEach((t, i) => { t.wrong = t.w !== target[i]; });
      $('#orderArea').innerHTML = orderInner(q);
      tryAgain(lt ? 'Shkronjat e kuqe nuk janë në vend.' : 'Fjalët e kuqe nuk janë në vend. Kujto: folja në vendin e dytë!');
    } else { G.locked = true; q._picked.forEach(t => delete t.wrong); wrong(lt ? '' : 'Kujto: folja qëndron në vendin e dytë.'); }
  }
}

/* --- book-style writing: cloze texts ([[answer|hint]], alternatives with ;) and tables (rows [label, answer, given?]) --- */
const czParts = q => q.text.split(/\[\[(.+?)\]\]/);
const czGaps = q => q.type === 'table' ? q.rows.filter(r => !r[2]).map(r => [r[1], '']) : czParts(q).filter((x, i) => i % 2).map(g => g.split('|'));
const czNorm = s => String(s).trim().toLowerCase().replace(/ß/g, 'ss').replace(/\s+/g, ' ');
const umlRow = () => `<div class="uml">${['ä','ö','ü','ß'].map(c => `<button data-act="uml" data-c="${c}">${c}</button>`).join('')}</div>`;
const czInput = (k, ans, hint) => `<input class="cz" data-k="${k}" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="next"
  style="width:${Math.max(3, ans.split(';')[0].length + 1.5)}ch" placeholder="${esc(hint ? hint + '…' : '')}" aria-label="Plotëso">`;
function rCloze(q){
  let k = 0;
  const html = czParts(q).map((x, i) => i % 2 ? czInput(k++, ...x.split('|')) : esc(x).replace(/\n/g, '<br>')).join('');
  return `${head(q.psq || 'Plotëso', q.pde || 'Ergänzen Sie')}
  ${q.bank ? `<div class="czbank">${q.bank.map(w => `<span>${esc(w)}</span>`).join('')}</div>` : ''}
  ${q.h ? `<div class="qhint" style="margin:0 0 10px">💭 ${esc(q.h)}</div>` : ''}
  <div class="qcard czcard">${html}</div>${umlRow()}
  <div class="actions"><button class="cta" data-act="ccheck">Kontrollo / Prüfen</button></div>`;
}
function rTable(q){
  let k = 0;
  return `${head(q.psq || 'Plotëso tabelën', q.pde || 'Ergänzen Sie die Tabelle')}
  ${q.h ? `<div class="qhint" style="margin:0 0 10px">💭 ${esc(q.h)}</div>` : ''}
  <div class="tw"><table class="lt cztab">${q.th ? `<thead><tr>${q.th.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead>` : ''}<tbody>
    ${q.rows.map(r => `<tr><td>${esc(r[0])}</td><td>${r[2] ? `<span class="czgiven">${esc(r[1])}</span>` : czInput(k++, r[1], '')}</td></tr>`).join('')}
  </tbody></table></div>${umlRow()}
  <div class="actions"><button class="cta" data-act="ccheck">Kontrollo / Prüfen</button></div>`;
}
function ccheck(){
  const q = cur(); if (G.locked) return;
  const ins = [...app.querySelectorAll('.cz')], gaps = czGaps(q);
  const empty = ins.find(i => !i.disabled && !i.value.trim());
  if (empty) { empty.focus(); return toast('✏️ Plotëso të gjitha fushat.<br><span style="font-weight:400">Füll alle Lücken aus.</span>', 2200); }
  let bad = 0;
  ins.forEach((inp, k) => {
    if (inp.disabled) return;
    const ok = gaps[k][0].split(';').some(a => czNorm(a) === czNorm(inp.value));
    inp.classList.remove('bad'); void inp.offsetWidth;
    if (ok) { inp.classList.add('ok'); inp.disabled = true; } else { inp.classList.add('bad'); bad++; }
  });
  if (!bad) { G.locked = true; return correct(); }
  G.tries++;
  if (G.tries < maxTries()) tryAgain(`${bad === 1 ? '1 fushë e kuqe' : bad + ' fusha të kuqe'}: provo edhe një herë! Die roten Felder nochmal.`);
  else { G.locked = true; ins.forEach((inp, k) => { if (!inp.disabled) { inp.value = gaps[k][0].split(';')[0]; inp.classList.add('shown'); inp.disabled = true; } }); wrong(); }
}

/* --- book-style sorting: tap a word, then its box (q.cats, q.items [word, cat]) --- */
function rSort(q){
  if (!q._place) { q._place = {}; q._order = shuffle(q.items.map((x, i) => i)); q._bad = []; }
  return `${head(q.psq || 'Rendit sipas grupeve', q.pde || 'Ordnen Sie zu')}
  <p class="szhint" style="margin:-4px 0 10px">👆 Prek një fjalë, pastaj kutinë. Tippe ein Wort, dann die Box.</p>
  <div id="sArea">${sortInner(q)}</div>
  <div class="actions"><button class="cta" data-act="scheck" id="scheck" ${Object.keys(q._place).length < q.items.length ? 'disabled' : ''}>Kontrollo / Prüfen</button></div>`;
}
function sortInner(q){
  const chip = i => `<button class="tok ${G.chip === i ? 'sel' : ''} ${q._bad.includes(i) ? 'wrong' : ''}" data-act="sc" data-id="${i}">${esc(q.items[i][0])}</button>`;
  return `<div class="sbins">${q.cats.map((c, ci) => `<div class="sbin ${G.chip != null ? 'ready' : ''}" data-act="sb" data-id="${ci}" role="button"><b>${esc(c)}</b>
    <span class="sbin-in">${q._order.filter(i => q._place[i] === ci).map(chip).join('')}</span></div>`).join('')}</div>
  <div class="pool">${q._order.filter(i => q._place[i] == null).map(chip).join('')}</div>`;
}
function stap(act, id){
  const q = cur(); if (G.locked) return; id = +id; SND.tap();
  if (act === 'sc') {
    if (q._place[id] != null && G.chip == null) { delete q._place[id]; q._bad = q._bad.filter(i => i !== id); }
    else G.chip = G.chip === id ? null : id;
  } else if (G.chip != null) { q._place[G.chip] = id; q._bad = q._bad.filter(i => i !== G.chip); G.chip = null; }
  $('#sArea').innerHTML = sortInner(q);
  $('#scheck').disabled = Object.keys(q._place).length < q.items.length;
}
function scheck(){
  const q = cur(); if (G.locked) return;
  const bad = q._order.filter(i => q.cats[q._place[i]] !== q.items[i][1]);
  G.chip = null;
  if (!bad.length) { G.locked = true; q._bad = []; $('#sArea').innerHTML = sortInner(q); return correct(); }
  G.tries++; q._bad = bad;
  if (G.tries < maxTries()) { $('#sArea').innerHTML = sortInner(q); tryAgain('Fjalët e kuqe janë në kutinë e gabuar. Die roten Wörter sind falsch.'); }
  else { G.locked = true; q._bad = []; q.items.forEach((x, i) => { q._place[i] = q.cats.indexOf(x[1]); }); $('#sArea').innerHTML = sortInner(q); wrong(); }
}

/* --- match pairs --- */
function rMatch(q){
  if (!q._done) { q._L = shuffle(q.pairs.map(p => p[0])); q._R = shuffle(q.pairs.map(p => p[1])); q._done = []; q._mist = 0; G.sl = G.sr = null; G.wrongPair = null; }
  return `${head('Gjej çiftet', 'Finde die Paare')}<div id="mArea">${matchInner(q)}</div>`;
}
function matchInner(q){
  const doneR = q._done.map(l => q.pairs.find(p => p[0] === l)[1]);
  const cls = (side, v) => {
    if (side === 'l' ? q._done.includes(v) : doneR.includes(v)) return 'done';
    if (G.wrongPair && G.wrongPair[side] === v) return 'wrong';
    if ((side === 'l' && G.sl === v) || (side === 'r' && G.sr === v)) return 'sel';
    return '';
  };
  const col = (side, arr) => `<div class="mcol">${arr.map(v => { const c = cls(side, v);
    return `<button class="m ${c}" data-act="m${side}" data-v="${esc(v)}" ${c === 'done' ? 'disabled' : ''}>${esc(v)}</button>`; }).join('')}</div>`;
  return `<div class="mgrid">${col('l', q._L)}${col('r', q._R)}</div>`;
}
function mtap(side, v){
  const q = cur(); if (G.locked || G.wrongPair) return;
  if (side === 'l') { G.sl = v; autoSay(v); } else G.sr = v;
  SND.tap();
  if (G.sl && G.sr) {
    const p = q.pairs.find(x => x[0] === G.sl);
    if (p[1] === G.sr) { q._done.push(G.sl); buzz(20); tone([[700 + q._done.length * 80, 0, .12]]); }
    else {
      q._mist++; G.wrongPair = {l: G.sl, r: G.sr}; SND.try(); buzz([40, 30, 40]);
      G.sl = G.sr = null; $('#mArea').innerHTML = matchInner(q);
      return setTimeout(() => { G && (G.wrongPair = null); if (G && cur() === q) $('#mArea').innerHTML = matchInner(q); }, 700);
    }
    G.sl = G.sr = null;
  }
  $('#mArea').innerHTML = matchInner(q);
  if (q._done.length === q.pairs.length) {
    G.locked = true; G.tries = q._mist ? 1 : 0;
    setTimeout(() => correct(q._mist ? `${q._mist} gabim${q._mist > 1 ? 'e' : ''} gjatë rrugës. Herën tjetër pa asnjë! 💪` : 'Pa asnjë gabim! Ohne Fehler!',
      'Të gjitha çiftet! Alle Paare!'), 350);
  }
}

/* ================= Feedback ================= */
function tryAgain(msg){
  SND.try(); buzz([50, 40, 50]);
  toast(`💪 Provo edhe një herë!<br><span style="font-weight:400">${esc(msg || 'Versuch es nochmal!')}</span>`, 3200);
}
function correct(note, title){
  const q = cur(), first = G.tries === 0;
  G.ok++;
  if (first) { G.first++; G.combo++; G.maxCombo = Math.max(G.maxCombo, G.combo); } else G.combo = 0;
  const gain = !first ? 5 : G.hint ? 6 : 10 + Math.min(G.combo - 1, 5) * 2;
  G.xp += gain; S.xp += gain; rollDay(); S.dayXp += gain;
  S.bestCombo = Math.max(S.bestCombo, G.combo);
  /* weak spots: one point per day for a first-try answer (also via a sibling question), three points and it is gone */
  let weak = '';
  const wk = q.wk || q.key;
  if (S.mistakes[wk]) {
    const r = runOf(wk), sm = s => `<br><span style="font-weight:400">${s}</span>`;
    if (!first) { S.okRun[wk] = {n:0, d:null}; weak = `💪 Pikë e dobët ${dots(0)} 0/${WEAK_OK}${sm('Nur beim 1. Versuch gibt es einen Punkt.')}`; }
    else if (r.d === today()) weak = `💪 ${dots(r.n)} Saktë! Pika tjetër vjen nesër.${sm('Heute schon gezählt, morgen gibt es den nächsten Punkt.')}`;
    else if (r.n + 1 >= WEAK_OK) { delete S.mistakes[wk]; delete S.okRun[wk]; G.out = (G.out || 0) + 1; weak = `🎉 ${dots(WEAK_OK)} Doli nga pikat e dobëta!${sm('3 Tage richtig: keine Schwäche mehr!')}`; }
    else { S.okRun[wk] = {n:r.n + 1, d:today()}; weak = `💪 Pikë e dobët ${dots(r.n + 1)} ${r.n + 1}/${WEAK_OK}. Nesër pika tjetër!${sm(`Noch ${WEAK_OK - r.n - 1} Tag${WEAK_OK - r.n - 1 > 1 ? 'e' : ''} richtig, dann ist sie weg.`)}`; }
  }
  save(); xpPop(gain);
  const milestone = first && [3, 5, 7, 10, 15].includes(G.combo);
  let love = null, note2 = null;
  if (!G.love && first && loveOk()) {
    if (milestone && G.combo >= 7 && Math.random() < .5) love = loveMsg();   // big streak -> in the sheet
    else if (Math.random() < .01) note2 = loveMsg();                      // random -> small note
    if (love || note2) { G.love = true; loveUsed(); }
  }
  if (love) { SND.love(); hearts(10); buzz([30, 40, 30, 40, 80]); }
  else if (note2) { loveNote(note2); buzz(25); }
  else if (milestone) { SND.combo(); buzz([30, 30, 60]); }
  else { SND.ok(); buzz(25); }
  const p = rnd(PRAISE);
  const t = love || title || (milestone ? `${G.combo} me radhë! 🔥 ${G.combo} in Folge!` : first ? `${p[0]} ${p[1]}` : 'Saktë në provën e dytë! Richtig!');
  const body = [note || (first ? '' : esc(q.e)), weak && `<span class="weaknote">${weak}</span>`].filter(Boolean).join('<br>');
  const sayT = sayOf(q);
  openSheet(true, t, body, sayT, !!love);
}
/* the correct answer of a question as one readable line */
function ansOf(q){
  if (q.type === 'clockpick') return q.say;
  if (q.type === 'cloze') return czParts(q).map((x, i) => i % 2 ? x.split('|')[0].split(';')[0] : x).join('').replace(/\s*\n\s*/g, ' ');
  if (q.type === 'table') return q.rows.map(r => `${r[0]} ${r[1].split(';')[0]}`).join(', ');
  if (q.type === 'sort') return q.cats.map(c => `${c}: ${q.items.filter(x => x[1] === c).map(x => x[0]).join(', ')}`).join(' · ');
  if (q.type === 'match') return q.pairs.map(p => p.join(' = ')).join(' · ');
  if (q.type === 'order') return q.de;
  if (q.type === 'write') return `${q.art ? q.art + ' ' : ''}${q.a}`;
  if (q.q && q.q.includes('___')) return q.q.replace('___', q.a);
  return q.full || (q.s ? q.s.replace('___', q.a) : q.a);
}
/* what the feedback sheet reads out */
const sayOf = q => q.type === 'order' ? q.de : q.type === 'match' || q.type === 'sort' ? '' : q.type === 'cloze' || q.type === 'table' ? ansOf(q)
  : q.full || (q.s ? q.s.replace('___', q.a) : q.say || '');
function wrong(note){
  const q = cur();
  G.combo = 0;
  const store = clean({...q}); delete store.wk;
  S.mistakes[q.key] = store; S.miss[q.key] = (S.miss[q.key] || 0) + 1; S.okRun[q.key] = {n:0, d:null};
  if (q.wk) S.okRun[q.wk] = {n:0, d:null};
  histAdd(q); save();
  SND.bad(); buzz([80, 50, 80]);
  const body = `${note ? esc(note) + '<br>' : ''}${esc(q.e || '')}<br><b>E saktë / Richtig:</b> ${esc(ansOf(q))}`;
  openSheet(false, 'Jo krejt. Nicht ganz.', body, sayOf(q));
}
function openSheet(ok, title, body, sayT, love){
  const last = G.i >= G.qs.length - 1;
  sheet.className = 'sheet ' + (ok ? 'ok' : 'bad') + (love ? ' love' : '');
  sheet.style.removeProperty('--tc');
  sheet.innerHTML = `<div class="sh-in">
    <div class="sh-title">${love ? '💖' : ok ? '✅' : '💡'} ${esc(title)}</div>
    ${body ? `<p class="sh-body">${body}</p>` : ''}
    ${sayT && canSpeak ? `<button class="sh-say" data-act="say" data-t="${esc(sayT)}"><span>🔊</span><span>${esc(sayT)}</span></button>` : ''}
    <button class="cta ${ok ? 'ok' : 'bad'}" data-act="next">${last ? 'Shiko rezultatin / Ergebnis' : 'Vazhdo / Weiter'}</button>
  </div>`;
  openSheetEl();
  if (sayT) setTimeout(() => autoSay(sayT), 300);
  setTimeout(() => sheet.querySelector('[data-act="next"]')?.focus({preventScroll: true}), 320);
}
function openSheetEl(){
  sheet.style.transform = ''; sheet.scrollTop = 0;
  scrim.classList.toggle('on', sheet.classList.contains('plain'));
  document.body.classList.add('sheet-open'); requestAnimationFrame(() => sheet.classList.add('open'));
}
function closeSheet(){ sheet.style.transform = ''; sheet.classList.remove('open'); scrim.classList.remove('on'); document.body.classList.remove('sheet-open'); }
/* settings/chapter sheets: drag down to close (from the top bar always, elsewhere when scrolled to the top) */
let sdrag = null;
sheet.addEventListener('touchstart', e => {
  if (!sheet.classList.contains('plain')) return;
  sdrag = {y: e.touches[0].clientY, dy: 0, bar: !!e.target.closest('.sh-top')};
}, {passive: true});
sheet.addEventListener('touchmove', e => {
  if (!sdrag || (!sdrag.bar && sheet.scrollTop > 0)) return;
  sdrag.dy = e.touches[0].clientY - sdrag.y;
  if (sdrag.dy <= 0) { sheet.style.transform = ''; return; }
  e.preventDefault();
  sheet.style.transition = 'none'; sheet.style.transform = `translateY(${sdrag.dy}px)`;
}, {passive: false});
sheet.addEventListener('touchend', () => {
  if (!sdrag) return;
  const dy = sdrag.dy; sdrag = null; sheet.style.transition = '';
  if (dy > 90) closeSheet(); else sheet.style.transform = '';
});
function next(){
  closeSheet(); G.i++;
  if (G.i >= G.qs.length) return setTimeout(finish, 120);
  setTimeout(renderQ, 120);
}

/* ================= Result ================= */
function finish(){
  const total = G.qs.length, pct = Math.round(G.ok / total * 100);
  S.rounds++; if (G.first === total) S.perfect++;
  const streakUp = bumpStreak();
  let c = null, newlyDone = false, nextC = null;
  if (G.mode === 'chapter') {
    c = chById(G.id);
    const st = rec(c, true);
    const was = (st.best || 0) >= passOf(c);
    st.best = Math.max(st.best || 0, pct); st.plays = (st.plays || 0) + 1; st.lesson = true;
    newlyDone = !was && pct >= passOf(c);
    if (c.hw) { const ps = hwById(c.hw).parts; nextC = ps[ps.indexOf(c) + 1]; }
    else nextC = CHAPTERS[chIdx(c.id) + 1];
  }
  const hwSet = c && c.hw ? hwById(c.hw) : null;
  if (G.mode === 'mistakes' && !Object.keys(S.mistakes).length) S.cleared = true;
  const wc = G.mode === 'words' ? chById(G.id) : null;
  if (G.mode === 'words') { const st = S.w[G.id] || (S.w[G.id] = {}); st.best = Math.max(st.best || 0, pct); st.plays = (st.plays || 0) + 1; }
  const newB = checkBadges(); save();
  const pass = passOf(c), lvNow = level(), up = lvNow > G.lvBefore, passed = !c || pct >= pass;
  const finale = c && c.final && passed;

  let love = null;
  if (finale) love = LOVE[0];
  else if (!G.love && loveOk() && streakUp && S.streak >= 3 && Math.random() < .4) love = loveMsg();
  else if (!G.love && loveOk() && (newlyDone || up) && Math.random() < .2) love = loveMsg();
  if (love && !finale) loveUsed();

  const [e, msq, mde] = !passed ? ['💪', `Pothuajse! Të duhen ${pass}% për ta kaluar.`, 'Fast! Versuch es nochmal, du schaffst das!']
    : finale ? ['👑', 'Mbretëresha e gjermanishtes!', 'Du hast die ganze Reise geschafft!']
    : c && c.test ? ['🎓', `Testi u kalua me ${pct}%, Mimoza!`, 'Test bestanden! Du bist bereit!']
    : G.first === total ? ['🏆', 'Perfekt! Asnjë gabim!', 'Keine Fehler! Wahnsinn!']
    : pct >= 80 ? ['🌟', 'Fantastike, Mimoza!', 'Du bist super!']
    : ['🎉', 'Shumë mirë! Edhe pak ushtrim.', 'Sehr gut, weiter so!'];
  const done = doneCount(), jp = Math.round(done / CHAPTERS.length * 100);
  app.style.setProperty('--tc', c ? c.color : wc ? wc.color : 'var(--brand)');
  app.innerHTML = `<section class="res">
    <div class="big-e">${e}</div>
    <h1>${G.ok}/${total}</h1>
    <p class="msg">${msq}</p><p class="de">${mde}</p>
    <div class="tiles">
      <div class="tile xp"><b id="xpc">+0</b><small>XP</small></div>
      <div class="tile"><b>${G.first}</b><small>Herën e parë<br>Beim 1. Mal</small></div>
      <div class="tile fire"><b>🔥${G.maxCombo}</b><small>Me radhë<br>In Folge</small></div>
    </div>
    ${love ? `<div class="lovecard">💌 ${esc(love)}</div>` : ''}
    ${G.out ? `<div class="unlock">🎉 ${G.out} ${G.out > 1 ? 'pika të dobëta dolën' : 'pikë e dobët doli'} nga lista!<small>${G.out} Schwäche${G.out > 1 ? 'n' : ''} weniger. Noch ${Object.keys(S.mistakes).length} offen.</small></div>` : ''}
    ${hwSet && newlyDone ? (hwCur(hwSet)
      ? `<div class="unlock">📝 Detyra u krye! ${nextC ? `Tjetra: <b>${esc(nextC.sq)}</b>` : 'Të gjitha detyrat janë gati! 🎉'}<small>Hausaufgabe erledigt!</small></div>`
      : `<div class="unlock">📘 Ushtrimi u krye! ${nextC ? `Tjetri: <b>${esc(nextC.sq)}</b>` : 'Të gjitha ushtrimet janë gati! 🎉'}<small>Übung erledigt!</small></div>`) : ''}
    ${!hwSet && newlyDone && nextC ? `<div class="unlock">🔓 U hap kapitulli ${chIdx(nextC.id) + 1}: <b>${esc(nextC.sq)}</b><small>Nächstes Kapitel freigeschaltet!</small></div>` : ''}
    ${streakUp && S.streak >= 2 ? `<div class="streakcard">🔥 ${S.streak} ditë rresht! <small>${S.streak} Tage am Stück!</small></div>` : ''}
    ${up ? `<div class="lvup">🎊 Niveli ${lvNow}: ${lvlName(lvNow)[0]}!<small>Level ${lvNow}: ${lvlName(lvNow)[1]}</small></div>` : ''}
    ${newB.length ? `<div class="newb">${newB.map(b => `<span>${b.e} ${esc(b.sq)}</span>`).join('')}</div>` : ''}
    ${hwSet ? `<div class="res-j"><div class="j-top"><b>${hwCur(hwSet) ? '📝 Detyrat / Hausaufgaben' : (hwSet.icon || '📘') + ' ' + esc(hwSet.sq)}</b><span>${hwCount(hwSet)}/${hwSet.parts.length}</span></div><div class="jbar"><i style="width:${hwCount(hwSet) / hwSet.parts.length * 100}%"></i></div></div>`
      : c ? `<div class="res-j"><div class="j-top"><b>Udhëtimi / Reise</b><span>${done}/${CHAPTERS.length}</span></div><div class="jbar"><i style="width:${jp}%"></i></div></div>` : ''}
    <div class="actions">
      ${newlyDone && nextC ? `<button class="cta" data-act="go" data-id="${nextC.id}">${hwSet ? (hwCur(hwSet) ? 'Detyra tjetër' : 'Ushtrimi tjetër') : 'Kapitulli tjetër'} ▶ / Weiter</button>`
        : `<button class="cta" data-act="again">${passed ? 'Luaj përsëri / Nochmal' : '💪 Provo përsëri / Nochmal'}</button>`}
      ${!passed && c && !c.final ? `<button class="cta light" data-act="lesson" data-id="${c.from || c.id}">📖 Përsërit mësimin / Lektion</button>` : ''}
      ${hwSet ? (hwCur(hwSet) ? `<button class="cta light" data-act="hw" data-id="${hwSet.id}">📝 Detyrat / Hausaufgaben</button>` : '<button class="cta light" data-act="chapters">📋 Kapitujt / Kapitel</button>') : ''}
      ${G.mode === 'words' ? '<button class="cta light" data-act="words">🔤 Fjalët / Wörter</button>' : ''}
      ${G.mode === 'mistakes' ? '<button class="cta light" data-act="weak">💪 Pikat e dobëta / Schwächen</button>' : ''}
      <button class="cta light" data-act="home">Harta / Zur Karte</button>
    </div>
  </section>`;
  window.scrollTo(0, 0);
  let n = 0; const step = Math.max(1, Math.ceil(G.xp / 30));
  const tick = setInterval(() => { n = Math.min(G.xp, n + step); const el = $('#xpc'); if (el) el.textContent = '+' + n; if (n >= G.xp) clearInterval(tick); }, 30);
  if (love) { SND.love(); hearts(finale ? 40 : 12); }
  if (finale || up) { SND.level(); confetti(); buzz([60, 40, 60, 40, 120]); }
  else if (passed && pct >= 70) { if (!love) SND.win(); confetti(); }
  else SND.try();
}

/* ================= Weak spots (Pikat e dobëta) ================= */
/* a wrong question stays a weak spot until it is answered right on the first try WEAK_OK times in a row */
const WEAK_OK = 3;
const dots = r => '●'.repeat(r) + '○'.repeat(WEAK_OK - r);
const WORD_PSQ = new Set(['Çfarë do të thotë?', 'Si thuhet gjermanisht?', 'Dëgjo dhe zgjidh', 'der, die apo das?', 'Shkruaje gjermanisht']);
/* grammar topics: [Albanian name, German name, the rule in one line] */
const TOPICS = {
  satz:     ['Rendi i fjalisë', 'Satzstellung', 'Folja në vendin 2, folja e dytë në fund. Pyetje pa W: folja del e para.'],
  artikel:  ['der, die apo das', 'Artikel', 'Mësoje çdo emër bashkë me nyjën: der Tisch, die Lampe, das Bett.'],
  ein:      ['ein, einen, kein', 'ein / kein · Akkusativ', 'Pas foljes (nehmen, kaufen, haben, möchten) ndryshon vetëm der: den, einen, keinen.'],
  possessiv:['mein, dein, Ihr', 'Possessivartikel', 'der/das → mein, dein, Ihr. die/shumës → meine, deine, Ihre.'],
  zeit:     ['am, um, im', 'Zeitangaben', 'am + ditë, um + orë, im + muaj ose stinë.'],
  perfekt:  ['E kaluara', 'Perfekt', 'haben në vendin 2, Partizip në fund: ge…t (gemacht) ose ge…en (gegessen).'],
  modal:    ['können, wollen, möchten, mögen', 'Modalverben', 'ich dhe er pa mbaresë (ich kann, er will). Folja tjetër shkon në fund.'],
  seinhaben:['sein dhe haben', 'sein & haben', 'ich bin, du bist, er ist · ich habe, du hast, er hat.'],
  praeteritum:['war dhe hatte', 'Präteritum: sein & haben', 'ich war (isha), du warst, er war, wir waren · ich hatte (kisha), du hattest, er hatte, wir hatten.'],
  verben:   ['Zgjedhimi i foljeve', 'Verben konjugieren', 'ich -e, du -st, er -t, wir -en, ihr -t. Rebelët: du fährst, er isst.'],
  wfragen:  ['Fjalët pyetëse', 'W-Fragen', 'wer kush, was çfarë, wo ku, wann kur, wie si.'],
  jnd:      ['Ja, Nein apo Doch', 'Ja / Nein / Doch', 'Doch = po, por vetëm kur pyetja ka nicht ose kein.'],
  pronomen: ['Përemrat', 'Pronomen', 'der → er, die → sie, das → es.'],
  uhrzeit:  ['Ora', 'Uhrzeit', 'halb + ora tjetër: 8:30 = halb neun. Viertel nach, Viertel vor.'],
  dialog:   ['Përgjigjet në bisedë', 'Antworten im Gespräch', 'Lexo me kujdes: çfarë pyet ose çfarë do personi?'],
  subjekt:  ['Subjekti dhe mbaresa', 'Subjekt & Verbendung', 'Sabine = sie → -t (schwimmt). Meine Freunde = sie → -en (leben). ihr → -t (wohnt).'],
  trennbar: ['Foljet e ndashme', 'Trennbare Verben', 'Folja në vendin 2, parashtesa në fund: Ich stehe um 7 Uhr auf.'],
  zahlen:   ['Numrat', 'Zahlen', 'Së pari njëshja, pastaj dhjetëshja: 35 = fünfunddreißig. 30 = dreißig.'],
  lesen:    ['Leximi', 'Leseverstehen', 'Lexo pyetjen, gjej fjalën kyçe dhe kërkoje në tekst.'],
  imperativ:['Urdhërorja', 'Imperativ', 'du kommst → Komm! (pa du, pa -st). ihr kommt → Kommt! sein: Sei! / Seid!']
};
const HABEN = /^(habe|hast|hat|haben|habt)$/, MODAL = /^(kann|könn|will|woll|möcht|mag|mög|muss|müss)/;
/* finds the grammar topic of a question from what it asks; q.topic in the data wins */
function topicOf(q){
  if (q.topic) return q.topic;
  if (q.type === 'order') return 'satz';
  if (q.type === 'clock' || q.type === 'clockpick') return 'uhrzeit';
  if (!q.o) return null;
  const lo = q.o.map(o => String(o).toLowerCase()), only = (...w) => lo.every(o => w.includes(o));
  const s = (q.s || q.q || '').replace('___', '');
  if (only('der', 'die', 'das')) return 'artikel';
  if (only('mein', 'meine', 'meinen', 'dein', 'deine', 'deinen', 'ihr', 'ihre', 'ihren')) return 'possessiv';
  if (only('der', 'die', 'das', 'den', 'dem', 'ein', 'eine', 'einen', 'einem', 'einer', 'kein', 'keine', 'keinen', 'keinem', 'nicht')) return 'ein';
  if (only('am', 'um', 'im', 'in', 'an')) return 'zeit';
  if (only('ja', 'nein', 'doch')) return 'jnd';
  if (only('wer', 'was', 'wo', 'wann', 'wie', 'woher', 'wohin', 'warum', 'wie viel')) return 'wfragen';
  if (only('ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr')) return 'pronomen';
  if (lo.filter(o => /^ge\S+(t|en)$/.test(o)).length >= 2) return 'perfekt';
  if (lo.every(o => /^(war|warst|waren|wart|hatte|hattest|hatten|hattet)$/.test(o))) return 'praeteritum';
  if (lo.every(o => HABEN.test(o))) return /\bge\w+(t|en)\b/.test(s) ? 'perfekt' : 'seinhaben';
  if (lo.every(o => /^(bin|bist|ist|sind|seid)$/.test(o))) return 'seinhaben';
  if (lo.every(o => MODAL.test(o))) return 'modal';
  if (q.pde && /antwort|passt|sagst/i.test(q.pde)) return 'dialog';
  if (q.a === q.say && String(q.a).split(' ').length >= 3) return 'satz';
  /* conjugation: single-word options where several are forms of the same verb (heiße, heißt …) */
  const stem = o => o.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').slice(0, 4);
  if (lo.every(o => /^[a-zäöüß]+$/.test(o) && /(e|st|t|en|n)$/.test(o)) && lo.filter(o => stem(o) === stem(String(q.a).toLowerCase())).length >= 2) return 'verben';
  return null;
}
const isWordQ = q => WORD_PSQ.has(q.psq) && q.say && q.say.split(' ').length <= 3;
/* mistakes are summed up per word (das Brot) or per grammar topic (Satzstellung, Perfekt …) */
function groupOf(q){
  if (isWordQ(q)) return {id:'w:' + q.say, k:'w', l:q.say, s:(q.e || '').split(' = ').find(p => p !== q.say) || ''};
  const t = topicOf(q), c = chById(q.tid);
  if (t) return {id:'t:' + t, k:'g', l:TOPICS[t][0], s:TOPICS[t][1], e:TOPICS[t][2]};
  return {id:'c:' + (c ? c.id : 'x'), k:'g', l:c ? c.sq : 'Të tjera', s:c ? c.de : 'Sonstiges', e:q.e || ''};
}
/* progress of a weak spot: n points, at most one per day (d = day of the last point) */
const runOf = k => { const r = S.okRun[k]; return r && typeof r === 'object' ? r : {n:r || 0, d:null}; };
/* a different question that trains the same thing: same word in another kind, or same grammar topic */
let QIDX = null;
function qIndex(){
  if (QIDX) return QIDX;
  QIDX = {};
  [...CHAPTERS.filter(c => !c.final), ...HWP.filter(p => !p.test)].forEach(c =>
    tagged(c, [...c.items, ...(c.clocks ? genClocks(4) : [])]).forEach(q => {
      const t = q.type !== 'match' && !isWordQ(q) && topicOf(q);
      if (t) (QIDX[t] ||= []).push({...q, key:keyOf(q)});
    }));
  return QIDX;
}
const KIND_PSQ = {de2sq:'Çfarë do të thotë?', sq2de:'Si thuhet gjermanisht?', listen:'Dëgjo dhe zgjidh', art:'der, die apo das?', write:'Shkruaje gjermanisht'};
function sibling(q){
  if (isWordQ(q)) {
    for (const c of [...WD, ...CHAPTERS, ...HWP]) {
      const pool = vocabPool(c), w = pool.find(x => x.de === q.say);
      if (!w || pool.length < 4) continue;
      for (const k of shuffle(Object.keys(KIND_PSQ))) { const s = wordQ(c, w, pool, k); if (s.psq !== q.psq) return {...s, tid:c.id}; }
    }
    return null;
  }
  const t = topicOf(q), cands = t ? (qIndex()[t] || []).filter(x => x.key !== q.key && (S.sound || x.type !== 'listen')) : [];
  return cands.length ? {...rnd(cands)} : null;
}
/* weak-spot round: questions without today's point first; about half are asked as a sibling question */
function weakRound(){
  const t = today();
  const list = shuffle(Object.values(S.mistakes).filter(q => S.sound || q.type !== 'listen'))
    .sort((a, b) => (runOf(a.key).d === t) - (runOf(b.key).d === t)).slice(0, ROUND);
  return list.map(q => {
    const s = Math.random() < .5 ? sibling(q) : null;
    return s ? {...s, key:s.key || keyOf(s), wk:q.key} : {...q};
  });
}
function histAdd(q, n = 1){
  const g = groupOf(q), h = S.hist[g.id] || (S.hist[g.id] = {l:g.l, s:g.s, k:g.k, n:0});
  h.n += n; h.e = g.e || ''; h.ex = ansOf(q);
}
function weakPage(){
  closeSheet(); G = null; L = null;
  app.style.setProperty('--tc', 'var(--brand)');
  const open = Object.values(S.mistakes), openBy = {};
  open.forEach(q => (openBy[groupOf(q).id] ||= []).push(q));
  const groups = Object.entries(S.hist).map(([id, h]) => ({...h, open:openBy[id] || []})).sort((a, b) => b.open.length - a.open.length || b.n - a.n);
  const learned = groups.filter(g => !g.open.length).length;
  const todo = open.filter(q => runOf(q.key).d !== today()).length;
  const row = g => { const o = g.open.length, r = o ? Math.min(...g.open.map(q => runOf(q.key).n)) : WEAK_OK;
    return `<button class="wk ${o ? '' : 'ok'}" data-act="say" data-t="${esc(g.k === 'w' ? g.l : g.ex || '')}">
      <span class="wk-top"><b>${esc(g.l)}</b><i class="misscount">✗ ${g.n}×</i></span>
      ${g.s ? `<span class="wk-s">${esc(g.s)}</span>` : ''}
      ${g.e ? `<small>💡 ${esc(strip(g.e))}</small>` : ''}
      ${g.k !== 'w' && g.ex ? `<small class="wk-ex">✓ ${esc(g.ex)}</small>` : ''}
      <span class="wk-st">${o ? `<span class="wk-dots">${dots(r)}</span> ${o} ${o > 1 ? 'pyetje të hapura' : 'pyetje e hapur'} · ${o} offen` : '✓ E mësuar · gelernt'}</span>
    </button>`; };
  const list = (gs, more) => gs.length ? `<div class="fixes">${gs.slice(0, 8).map(row).join('')}</div>
    ${gs.length > 8 ? `<details class="szmore"><summary>${more} (${gs.length})</summary><div class="fixes">${gs.slice(8).map(row).join('')}</div></details>` : ''}`
    : '<p class="szhint">Asnjë gabim këtu. Bravo! 🎉 Keine Fehler.</p>';
  const book = [...HW].reverse().flatMap(h => h.parts.flatMap(p => p.lesson.flatMap(s => s.fix || [])));
  const fixBtn = ([w, r, n]) => `<button class="fix" data-act="say" data-t="${esc(r)}"><span class="fx-w">✗ ${esc(w)}</span><span class="fx-r">✓ ${esc(r)}</span>${n ? `<small>${esc(n)}</small>` : ''}</button>`;
  app.innerHTML = `<div class="game">
    <div class="gbar"><button class="x" data-act="home" aria-label="Kthehu">✕</button><h2 class="dict-h">💪 Pikat e dobëta<span>Meine Schwächen</span></h2></div>
    <section class="wkhero">
      <b>🎯 Testo dobësitë</b><span class="de">Teste deine Schwächen</span>
      <p>${!open.length ? 'Tani nuk ke asnjë pikë të dobët! 🎉 Kur gabon diçka, ajo shfaqet këtu.'
        : todo ? `Ke <b>${open.length}</b> pika të dobëta. Çdo ditë që e bën saktë merr një pikë. Me <b>3 pikë</b> ●●● del nga lista. Nëse gabon përsëri, kthehet.`
        : `Për sot i ke bërë të gjitha! ✓ Kthehu <b>nesër</b> për pikën tjetër. 😊`}</p>
      <small>${!open.length ? 'Wenn du etwas falsch machst, erscheint es hier.'
        : todo ? 'Jeden Tag richtig = 1 Punkt. 3 Punkte ●●● → die Schwäche ist weg. Wieder falsch → sie kommt zurück. Manchmal kommt eine ähnliche Frage zur gleichen Regel.'
        : 'Für heute alles erledigt! Morgen gibt es die nächsten Punkte.'}</small>
      ${open.length ? `<button class="cta" data-act="mistakes">${todo ? `🎯 Fillo / Starten (${Math.min(open.length, ROUND)} pyetje)` : '🔁 Ushtro përsëri / Nochmal üben'}</button>` : ''}
      ${groups.length ? `<div class="wkstats"><span><b>${groups.length - learned}</b> për të ushtruar<br><i>zu üben</i></span><span><b>${learned}</b> të mësuara<br><i>gelernt</i></span><span><b>${groups.reduce((s, g) => s + g.n, 0)}</b> gabime gjithsej<br><i>Fehler gesamt</i></span></div>` : ''}
    </section>
    <section class="szsec"><div class="slide"><h2>📝 Fjalët</h2><p class="de sd">Wörter, die du oft falsch hast</p>
      ${list(groups.filter(g => g.k === 'w'), 'Shfaq të gjitha · Alle zeigen')}</div></section>
    <section class="szsec"><div class="slide"><h2>🧩 Gramatika & rendi</h2><p class="de sd">Grammatik & Satzstellung</p>
      ${list(groups.filter(g => g.k !== 'w'), 'Shfaq të gjitha · Alle zeigen')}</div></section>
    ${book.length ? `<section class="szsec"><div class="slide"><h2>📖 Nga libri yt</h2><p class="de sd">Fehler aus deinem Buch</p>
      <div class="fixes">${book.slice(0, 5).map(fixBtn).join('')}</div>
      ${book.length > 5 ? `<details class="szmore"><summary>Shfaq të gjitha · Alle zeigen (${book.length})</summary><div class="fixes">${book.slice(5).map(fixBtn).join('')}</div></details>` : ''}
    </div></section>` : ''}
  </div>`;
  window.scrollTo(0, 0);
}

/* ================= Spickzettel (cheat sheet) ================= */
function dict(){
  closeSheet(); G = null; L = null;
  app.style.setProperty('--tc', 'var(--brand)');
  const secs = typeof SPICK !== 'undefined' ? SPICK : [];
  app.innerHTML = `<div class="game">
    <div class="gbar"><button class="x" data-act="home" aria-label="Kthehu">✕</button><h2 class="dict-h">📒 Fletë ndihme<span>Spickzettel</span></h2></div>
    <p class="de" style="margin:0 0 10px">Gjithçka më e rëndësishme në një vend. Prek për ta dëgjuar. 🔊<br>Das Wichtigste auf einen Blick. Tippe, um es zu hören.</p>
    <nav class="sznav">${secs.map(s => `<button class="szchip" data-act="jump" data-id="${s.id}">${esc(s.chip)}</button>`).join('')}</nav>
    ${secs.map(s => `<section class="szsec" id="${s.id}">${slideHTML(s)}</section>`).join('')}
    <p class="foot">Fjalët sipas temave i gjen te 🔤 Fjalët. Wortlisten findest du unter 🔤 Fjalët.</p>
  </div>`;
  window.scrollTo(0, 0);
}

/* ================= Profile ================= */
function profile(){
  const lv = level(), [lsq, lde] = lvlName(lv);
  sheet.className = 'sheet plain'; sheet.style.removeProperty('--tc');
  sheet.innerHTML = `<div class="sh-in">
    <div class="sh-top"><div class="grab"></div><div class="prof-h"><h2>Mimoza ✨</h2><button class="x" data-act="closesheet" aria-label="Mbyll">✕</button></div></div>
    <p class="de" style="margin:2px 0 0">Niveli ${lv}: ${lsq} / ${lde}</p>
    <div class="stats">
      <div class="stat"><b>${S.xp}</b><small>XP gjithsej<br>XP gesamt</small></div>
      <div class="stat"><b>${doneCount()}/${CHAPTERS.length}</b><small>Kapituj<br>Kapitel</small></div>
      <div class="stat"><b>🔥${S.bestCombo}</b><small>Rekordi<br>Rekord</small></div>
    </div>
    <h2 class="sec" style="margin-top:6px">Medaljet<span>Abzeichen</span></h2>
    <div class="badges">${BADGES.map(b => { const on = S.badges.includes(b.id), secret = b.id === 'love' && !on;
      return `<div class="badge ${on ? '' : 'off'}"><span class="e">${secret ? '❓' : b.e}</span><b>${secret ? '???' : esc(b.sq)}</b><i>${secret ? 'Geheim' : esc(b.de)}</i></div>`; }).join('')}</div>
    <h2 class="sec" style="margin-top:22px">Cilësimet<span>Einstellungen</span></h2>
    <div class="prof-row" style="margin-top:0">
      <button class="cta light" data-act="sound">${S.sound ? '🔊 Zëri: po' : '🔇 Zëri: jo'}</button>
      <button class="cta light" data-act="theme">${themeLabel()}</button>
    </div>
    <div class="prof-row">
      <button class="cta light" data-act="reset">🗑️ Fillo nga e para / Alles löschen</button>
    </div>
  </div>`;
  openSheetEl();
}

/* ================= Easter egg ================= */
function egg(){
  SND.tap(); eggTaps++;
  clearTimeout(eggT); eggT = setTimeout(() => eggTaps = 0, 2500);
  if (eggTaps >= 5) {
    eggTaps = 0; hearts(40); SND.love(); buzz([40, 40, 40, 40, 120]);
    toast('💖 ' + esc(loveMsg()), 4500);
    if (!S.egg) { S.egg = true; checkBadges(); save(); }
  }
}

/* ================= Events ================= */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, id = b.dataset.id;
  switch (a) {
    case 'chap': return chapSheet(id);
    case 'go': return go(id);
    case 'play': return start('chapter', id);
    case 'lesson': return lesson(id);
    case 'lnext': L.i++; SND.page(); return renderLesson();
    case 'lprev': L.i--; SND.page(); return renderLesson();
    case 'lstart': return start('chapter', L.id);
    case 'mix': return start('mix');
    case 'mistakes': return start('mistakes');
    case 'again': return start(G.mode, G.id);
    case 'dict': return dict();
    case 'weak': return weakPage();
    case 'jump': return document.getElementById(id)?.scrollIntoView({behavior: reduced() ? 'auto' : 'smooth', block: 'start'});
    case 'chapters': return chapters();
    case 'words': return wordsPage();
    case 'wsheet': return wordSheet(id);
    case 'wplay': return start('words', id);
    case 'hw': return hwList(id);
    case 'home': return home();
    case 'mapfold': return mapFold(id);
    case 'mapjump': return mapJump(id);
    case 'hint': return hint();
    case 'pick': return pick(+b.dataset.k);
    case 'say': return say(b.dataset.t);
    case 'slow': return say(b.dataset.t, true);
    case 'wcheck': return wcheck();
    case 'uml': { const i = lastInp && document.body.contains(lastInp) ? lastInp : $('#w'); if (i && !i.disabled) { const s = i.selectionStart ?? i.value.length; i.value = i.value.slice(0, s) + b.dataset.c + i.value.slice(i.selectionEnd ?? s); i.focus(); i.setSelectionRange(s + 1, s + 1); } return; }
    case 'tp': case 'un': return otap(a, id);
    case 'ocheck': return ocheck();
    case 'ccheck': return ccheck();
    case 'sc': case 'sb': return stap(a, id);
    case 'scheck': return scheck();
    case 'ml': return mtap('l', b.dataset.v);
    case 'mr': return mtap('r', b.dataset.v);
    case 'next': return next();
    case 'profile': return profile();
    case 'closesheet': return closeSheet();
    case 'egg': return egg();
    case 'sound':
      S.sound = !S.sound; save(); if (S.sound) SND.ok(); else if (canSpeak) speechSynthesis.cancel();
      if (sheet.classList.contains('plain') && sheet.classList.contains('open')) { home(); profile(); } else home();
      return;
    case 'theme':
      S.dark = !isDark(); save(); applyTheme(); SND.tap(); b.textContent = themeLabel();
      return;
    case 'reset':
      if (confirm('Të fshihen të gjitha pikët dhe medaljet? Alles löschen?')) { S = fresh(); save(); home(); }
      return;
  }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (e.target.id === 'w') { e.preventDefault(); wcheck(); }
  else if (e.target.classList?.contains('cz')) {
    e.preventDefault();
    const next = [...app.querySelectorAll('.cz')].find(i => !i.disabled && !i.value.trim() && i !== e.target);
    next ? next.focus() : ccheck();
  }
});
let lastInp = null;
document.addEventListener('focusin', e => { if (e.target.tagName === 'INPUT') lastInp = e.target; });

/* workbook pages 76, 77, 79 were merged into the lesson-7 homework: carry over best scores and mistakes */
const MOVED = {'bk-s76':'hw7-hobbys', 'bk-s77':'hw7-wollen', 'bk-s79':'hw7-perfekt'};
Object.entries(MOVED).forEach(([from, to]) => {
  if (S.hw[from]) { const t = S.hw[to] || (S.hw[to] = {}); t.best = Math.max(t.best || 0, S.hw[from].best || 0); t.lesson = true; delete S.hw[from]; }
  Object.values(S.mistakes).forEach(q => { if (q.tid === from) q.tid = to; });
});
/* older saves: build the weak-spot history once from the open mistakes */
if (!Object.keys(S.hist).length && Object.keys(S.mistakes).length) { Object.values(S.mistakes).forEach(q => histAdd(q, S.miss[q.key] || 1)); save(); }
applyTheme();
home();
