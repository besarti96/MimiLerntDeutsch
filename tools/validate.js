/* =====================================================================
   Datenprüfung für alle Inhalte (wird von der App nicht geladen).
   Aufruf im Projektordner:  node tools/validate.js
   Prüft data.js, homework.js, words.js, spick.js auf typische Fehler
   und listet Kapitel-Wörter, die im Wörter-Training (words.js) fehlen.
   ===================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..'), ctx = {};
vm.createContext(ctx);
vm.runInContext(['data.js', 'homework.js', 'words.js', 'spick.js'].map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n')
  + ';this.C = CHAPTERS; this.H = HOMEWORK; this.W = WORDS; this.S = SPICK;', ctx);

const bad = [], err = (where, msg) => bad.push(`✗ ${where}: ${msg}`);
const parts = ctx.H.flatMap(h => h.parts.map(p => ({...p, hw: h.id})));
const all = [...ctx.C, ...parts];
const ids = new Set();
[...all, ...ctx.W, ...ctx.H].forEach(c => { if (ids.has(c.id)) err(c.id, 'id doppelt'); ids.add(c.id); });

const slideCheck = (where, s) => {
  if (s.tr && s.table && (s.tr.length !== s.table.length || s.tr.some((r, i) => r.length > s.table[i].length))) err(where, `tr passt nicht zur Tabelle (${s.t})`);
};
all.forEach(c => {
  (c.lesson || []).forEach(s => slideCheck(c.id, s));
  if (c.hw && !c.book) err(c.id, 'Hausaufgaben-Teil ohne book:[sq, de]');
  if (c.from && !all.some(x => x.id === c.from)) err(c.id, `from:'${c.from}' gibt es nicht`);
  (c.items || []).forEach((q, k) => {
    const at = `${c.id} #${k} ${q.type}`;
    if (q.o && !q.o.includes(q.a)) err(at, `Antwort „${q.a}“ fehlt in den Optionen`);
    if (q.o && new Set(q.o).size !== q.o.length) err(at, 'Option doppelt');
    if ((q.type === 'gap' || q.type === 'letters') && !q.s.includes('___')) err(at, 'Satz ohne ___');
    if (q.type === 'match' && (new Set(q.pairs.map(p => p[0])).size !== q.pairs.length || new Set(q.pairs.map(p => p[1])).size !== q.pairs.length)) err(at, 'Paar-Seite doppelt');
    if (q.type === 'order' && q.parts && q.parts.join(' ') !== q.de) err(at, `parts ergeben nicht de: „${q.parts.join(' ')}“`);
    if (q.type === 'letters' && [...q.mix].sort().join('') !== [...q.a].sort().join('')) err(at, 'mix hat andere Buchstaben als a');
    if (q.type === 'sort' && q.items.some(i => !q.cats.includes(i[1]))) err(at, 'sort: Kategorie fehlt in cats');
    if (q.type === 'cloze' && !/\[\[/.test(q.text)) err(at, 'cloze ohne [[Lücke]]');
    if (q.read === true && !c.read) err(at, 'read:true, aber das Kapitel hat kein read');
  });
});
ctx.S.forEach(s => slideCheck('spick ' + s.id, s));
ctx.W.forEach(w => {
  w.nouns.forEach(n => { if (n.length !== 3 || !['der', 'die', 'das'].includes(n[0])) err(w.id, `Nomen falsch: ${n.join(',')}`); });
  w.words.forEach(x => { if (x.length !== 2) err(w.id, `Wort falsch: ${x.join(',')}`); });
});

/* Info: Kapitel-Wörter, die im Wörter-Training fehlen (nur Hinweis, kein Fehler) */
const have = new Set(ctx.W.flatMap(w => [...w.nouns.map(n => n[1].toLowerCase()), ...w.words.map(x => x[0].toLowerCase())]));
const recent = all.filter(c => c.added && Date.now() - Date.parse(c.added) < 14 * 864e5);
const miss = recent.flatMap(c => [...c.nouns.map(n => n[1]), ...c.words.map(w => w[0])].filter(x => !have.has(x.toLowerCase())).map(x => `${c.id}: ${x}`));

console.log(`Kapitel ${ctx.C.length} · Hausaufgaben-Sets ${ctx.H.length} (${parts.length} Teile) · Wortthemen ${ctx.W.length} · Spickzettel ${ctx.S.length}`);
if (miss.length) console.log(`ℹ Wörter aus neuen Kapiteln (14 Tage), die in words.js fehlen:\n  ${miss.join('\n  ')}`);
console.log(bad.length ? bad.join('\n') : '✓ alle Daten in Ordnung');
process.exit(bad.length ? 1 : 0);
