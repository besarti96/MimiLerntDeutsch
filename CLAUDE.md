# Mimi lernt Deutsch

Lern-App (PWA) von Besart für **Mimoza („Mimi“)**. Sie spricht Albanisch und lernt Deutsch mit dem Kursbuch **Schritte plus Neu** (A1.1 = Buch 1, Lektion 1–7; A1.2 = Buch 2, ab Lektion 8). Die Inhalte kommen meist als **Fotos oder PDFs** aus ihrem Buch, ihren Tests und Hausaufgaben (oft mit ihren handschriftlichen Lösungen und albanischen Notizen).

Kein Build, kein Server: reines HTML/CSS/JS. Der Fortschritt liegt in `localStorage` (`mimi-deutsch-v2`).

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | lädt der Reihe nach `data.js`, `homework.js`, `words.js`, `spick.js`, `app.js` |
| `data.js` | `BOOKS` (Bücher) und `CHAPTERS`: die **Reise**, alle Kapitel in Buch-Reihenfolge |
| `homework.js` | `HOMEWORK`: Hausaufgaben-Sets und der Block „Fletorja e ushtrimeve“ (Arbeitsbuch-Seiten) |
| `words.js` | `WORDS`: **🔤 Fjalët** (Wörter-Training), Wörter nach Thema |
| `spick.js` | `SPICK`: **📒 Fletë ndihme** (Spickzettel), schlank, nur das Wichtigste |
| `app.js` | die ganze Logik (Bildschirme, Fragen, Sprachausgabe, Fortschritt) |
| `style.css` | Design, hell (Standard) und dunkel |
| `tools/validate.js` | Datenprüfung: `node tools/validate.js` (wird von der App nicht geladen) |

## Sprache und Ton (wichtig)

- **Albanisch zuerst, Deutsch als zweite Zeile**: `sq`/`de`, `psq`/`pde`, Knöpfe „Vazhdo / Weiter“.
- Mimi wird mit „ti“ und mit Namen angesprochen, weibliche Formen (e mrekullueshme, Fillestare).
- Warm, ermutigend, Emojis. Fehler freundlich: „Shumicën e ke bërë mirë! Vetëm …“.
- Erklärungen `e` und Hinweise `h` kurz, auf Albanisch, mit `→` und `=`.
- **Erklärfolien bekommen Übersetzungen** (`tr` in Tabellen, `<i class="tr">(…)</i>` in Tipps). **Aufgaben bekommen keine** Übersetzung, Mimi soll selbst denken.
- Vorgelesen (Sprachausgabe de-DE) wird nur Deutsch. Text in Klammern, `…` und `___` werden nicht gesprochen.

## Die Reise (`data.js`)

- Jedes Kapitel hat `lek` (Lektion) und optional `band` (Buch; ohne `band` = Buch 1).
- Das **erste Kapitel einer Lektion** hat `unit:['Mësimi 8: …','Lektion 8: …']`, das erzeugt den Lektionsbalken.
- Ein neues `band` erzeugt auf Reise und in „Kapitujt“ einen großen Buch-Balken (Texte in `BOOKS`).
- Die Reise ist **linear**: genau ein aktiver Schritt (das erste nicht bestandene Kapitel). Gesperrte Kapitel kann man trotzdem antippen und üben.
- Jedes Buch hat ein `final:true`-Kapitel am Ende (testet nur sein eigenes Buch). Kapitel eines neuen Buches kommen **hinter** das Finale des alten.
- Die Karte rendert immer die ganze Reise, sichtbar sind aber nur die letzten 2 und nächsten 3 Schritte um den aktiven Schritt (hervorgehoben mit „📍 Je këtu“). Davor und danach liegen Faltbereiche (`#fold-up`, `#fold-down`), die an Ort und Stelle aufgehen, ohne dass der aktive Schritt verrutscht (`mapFold`). Die Lektions-Leiste (L1, L2 …) gleitet zu einer Lektion (`mapJump`). Kein Karten-/Karussell-Design: Es soll eine Reise bleiben.

### Kapitel-Felder

```
id (nie ändern!), band?, lek, unit?, emoji, color, added?, sq, de, desc, tip,
lesson:[Folien], nouns:[[Artikel, Wort, Albanisch]], words:[[Deutsch, Albanisch]], items:[Aufgaben]
optional: read (Lesetext), clocks:true, writeWords:true, mix:{vocab, write, order}, n (Fragen pro Runde), noGen, final
```

Aus `nouns`/`words` erzeugt die App automatisch Wortfragen (der/die/das, Schreiben, Bedeutung, Hören).

### Folien (`lesson`)

```
{ t, d, p, th, table, say, tr, ex:[[de, sq]], clocks:[[h, m, text]], fix:[[falsch, richtig, Erklärung]], tip }
```
- `say`: welche Tabellenspalte beim Antippen gesprochen wird (Zahl, `-1` = nichts, `'join'` = ganze Zeile).
- `tr`: albanische Übersetzung pro Tabellenzelle, gleiche Form wie `table` (leere Zellen `''`).
- `fix`: „Kujdes! 👀“-Folie mit **Mimis echten Fehlern** aus Buch/Test.

### Aufgaben (`items`)

| type | Felder |
|---|---|
| `gap` | `s:'… ___ …', o:[], a, h?, e, full?, row?` |
| `mc` | `q, o:[], a, e, say?, speakQ?, row?, h?, read?` |
| `order` | `de, sq` (Wörter) oder `parts:[…], cue:'a – b – c'` (Bausteine wie im Buch) |
| `match` | `pairs:[[links, rechts]]` (beide Seiten eindeutig) |
| `cloze` | `text:'Ich [[bin|b]] …'`, `bank?:[]`; Varianten mit `;`, Hinweis nach `|` |
| `table` | `th, rows:[[Person, Form, gegeben?]]` |
| `letters` | `s:'… ___', a, mix` (Buchstabensalat, `mix` = gleiche Buchstaben) |
| `sort` | `cats:[], items:[[Wort, Kategorie]]` |

Gemeinsam: `psq`/`pde` (Überschrift), `topic` (für „Pikat e dobëta“: z. B. `satz`, `artikel`, `ein`, `modal`, `perfekt`, `zeit`, `wfragen`, `subjekt`, `trennbar`, `zahlen`, `lesen`, siehe `TOPICS` in `app.js`), `read:true` (zeigt den `read`-Text des Kapitels über der Frage), `row:true` (Optionen nebeneinander, nicht gemischt).

## Hausaufgaben (`homework.js`)

- Ein Set: `{ id, date, emoji, sq, de, badge?:[sq, de], parts:[…] }`. Die Teile haben das Kapitelformat plus `book:['faqe 75 · ushtrimi 1','S. 75 · Üb. 1']`.
- **Das neueste Set ohne `shelf` ist die aktuelle Hausaufgabe** (Karte „📝 Detyrat e shtëpisë“).
- Ältere Sets wandern automatisch nach „Kapitujt“: Teile mit `lek` + `pg` erscheinen als Arbeitsbuch-Seite bei ihrer Lektion, die anderen unter „Të tjera“.
- `shelf:true` = nie aktuelle Hausaufgabe (z. B. der Block „📖 Fletorja e ushtrimeve“).
- `seq:true` = Fragen in Buch-Reihenfolge. Test-Teil: `test:true, pass:80, n:20, from:'id'` (ein Versuch, kein 💡).

## Wörter (`words.js`) und Spickzettel (`spick.js`)

- `WORDS`: Themen `{ id, emoji, color, added?, sq, de, nouns, words }`. Neue Wörter ins **passende Thema**, sonst ein neues Thema.
- **Neue Wörter bekommen ihr Datum als letztes Element**: `['der','Bus','autobusi','2026-10-30']` bzw. `['mieten','marr me qira','2026-10-30']` (siehe „E RE“ unten).
- `SPICK`: Abschnitte im Folienformat plus `id` und `chip` (Sprungleiste). **Schlank halten**: nur das Wichtigste, lieber eine Zeile in einem bestehenden Abschnitt ergänzen als einen neuen anlegen.

## „E RE“: alles Neue wird 24 Stunden markiert

Mimi soll sofort sehen, was neu ist. Darum bekommt **alles Neue** eine Markierung, die nach 24 Stunden verschwindet:

| Was | Wie markieren | Wo Mimi „E RE“ sieht |
|---|---|---|
| Kapitel | `added:'JJJJ-MM-TTTHH:MM'` | Reise, „Kapitujt“, Kapitelblatt, Weiter-Knopf |
| Hausaufgaben-Set | `date` und `added` | Karte „Detyrat e shtëpisë“, Hausaufgabenliste |
| Wortthema (neu) | `added` am Thema | Themenliste |
| **einzelnes neues Wort** | Datum als letztes Element (`'2026-10-30'`) | am Wort in seiner normalen Liste (nur das Schild, keine eigene Liste, kein Farbblock), Anzahl beim Thema („E RE · 8“), Knopf „🔤 Fjalët“ |

Immer **Datum mit Uhrzeit von jetzt** setzen (z. B. `'2026-10-30T16:20'`, Wörter genauso). Ein reines Datum zählt ab Mitternacht, dann ist die Markierung womöglich schon weg, wenn Mimi die App öffnet.

## Ablauf: Mimi schickt neues Material

1. **Neueste Version holen** (siehe Git unten).
2. Fotos/PDF genau lesen: Welche Seite, welche Lektion? Was war gefragt? Was hat Mimi geschrieben, was war falsch? (Lösungsfelder verschmelzen oft mit der Aufgabe; ihre albanischen Notizen am Rand zeigen, welche Wörter neu für sie waren.) Prüfen, was es schon gibt (z. B. `grep` nach Seite oder Thema), damit nichts doppelt entsteht.
3. Einordnen:
   - **Hausaufgabe / Test** → neues Set am Ende von `homework.js` (Buch-Stil, `seq:true`, „Kujdes! 👀“ mit ihren Fehlern, „Bravo“ für Richtiges).
   - **Neuer Stoff aus dem Kursbuch** → neue Kapitel in `data.js` bei ihrer Lektion (`lek`, `band`, `added`). Neue Lektion = `unit` am ersten Kapitel.
   - Meist beides: die **Hausaufgabe genau wie die Buchseiten** (eine Seite = ein Teil, `book` mit Seite/Übung), und auf der **Reise neue Kapitel**, die den Stoff erklären (Folien mit Übersetzung) und mit weiteren, eigenen Übungen festigen.
   - Lesetexte des Buches kommen als `read` ins Kapitel, Fragen dazu mit `read:true`.
   - **Hörübungen ohne Audio weglassen** (die Antworten lassen sich nicht sicher prüfen) und das dem Benutzer sagen.
   - Was Mimi richtig hatte: Folie „Bravo, Mimoza! 🌟“. Ihre sicheren Fehler: Folie „Kujdes! 👀“ (`fix`).
4. **Neue Wörter** in `words.js` eintragen, jedes mit heutigem Datum (`node tools/validate.js` zeigt fehlende Wörter aus neuen Kapiteln; am Ende soll die Liste leer sein, bis auf Wörter, die in kein Thema passen).
5. **Spickzettel** nur ergänzen, wenn neue Grammatik dazukommt, und schlank halten.
6. Neue Grammatikthemen bei Bedarf in `TOPICS` (`app.js`) ergänzen.
7. Prüfen (siehe unten): bestehende Inhalte unverändert, alles lösbar, Screenshots der neuen Bildschirme.
8. Dem Benutzer zusammenfassen: eine Tabelle Seite → Inhalt → Mimis Einträge, was neu ist (Kapitel, Hausaufgabe, Wörter pro Thema, Spickzettel), was bewusst weggelassen wurde.

## Regeln

- **Bestehende Aufgaben nie verändern oder löschen**, außer der Benutzer verlangt es ausdrücklich. Inhalte nur ergänzen. Nach Änderungen gegen den letzten Commit vergleichen.
- **Ids nie umbenennen**: Fortschritt, Fehler und Sterne hängen an den Ids.
- Unsichere Lesarten (unleserliche Handschrift, fehlende Hördatei) nicht als Mimis Fehler darstellen, sondern als „Kujdes nga kurthet“ (typische Fallen) oder weglassen und es dem Benutzer sagen.
- Heller Modus ist Standard.
- **Erst pushen, wenn der Benutzer es sagt** (oft: „wenn du dir sicher bist, push“ → nach bestandener Prüfung pushen). Lokal ändern ist immer okay.
- Design-Wünsche erst lokal zeigen (Screenshots), pushen erst nach seinem Okay. Was ihm nicht gefällt, sauber zurücksetzen (`git checkout -- datei`) statt zu flicken.

## Prüfen

- `node --check <datei>.js` für jede geänderte Datei.
- `node tools/validate.js`: Antworten in den Optionen, `parts` ergeben `de`, Buchstabensalat, `tr`-Größen, doppelte Ids, fehlende Wörter.
- Für Bildschirm und Spielbarkeit: headless Chrome (`C:/Program Files/Google/Chrome/Application/chrome.exe --headless=new --allow-file-access-from-files --dump-dom` bzw. `--screenshot`). Eine Test-HTML lädt die fünf Skripte, ruft z. B. `start('chapter', id)` und löst jede Frage über die App-Funktionen (`pick`, `wcheck`, `ocheck`, `ccheck`, `scheck`, `mtap`).

### Stolperfallen

- Die Dateien haben teils **Windows-Zeilenenden (CRLF)**. Skripte, die Text suchen/ersetzen, zuerst auf `
` normalisieren und beim Schreiben das Original-Format beibehalten. Sonst greifen Anker nicht oder Dateien werden doppelt geschrieben. Zeilenenden sind für die App egal.
- Headless Chrome hat eine Mindestbreite: Screenshots mit `--window-size=500,…`, sonst wirkt das Layout fälschlich abgeschnitten. Test-Seiten müssen `style.css` laden, sonst gibt es kein Layout zum Messen.
- In Test-Skripten keine Namen verwenden, die die App global belegt (z. B. `cur`, `G`, `S`).
- Größe: Stand Ende Oktober ~525 KB (~143 KB komprimiert). Erst ab etwa 2–3 MB lohnt es sich, die Inhalte pro Buch aufzuteilen.

## Git

- Lokal: `C:\Users\bjashari\Project\MimiLerntDeutsch`, Branch `main`, deployt von GitHub (`besarti96/MimiLerntDeutsch`).
- Auf diesem Rechner ist Git standardmäßig mit dem Arbeitskonto angemeldet, das **keine Rechte** auf das Repo hat. Deshalb immer mit der Adresse samt Benutzer:
  - holen: `git fetch https://besarti96@github.com/besarti96/MimiLerntDeutsch.git main` und dann `git merge --ff-only FETCH_HEAD`
  - pushen: `git push https://besarti96@github.com/besarti96/MimiLerntDeutsch.git main`
- Commit-Nachrichten auf Deutsch, kurz, was sich für Mimi ändert.
