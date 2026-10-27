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
- Die Karte zeigt gezoomt nur die Umgebung des aktiven Schritts; die Lektions-Leiste (L1, L2 …) und „ganze Karte“ zeigen mehr.
- `added:'JJJJ-MM-TTTHH:MM'` zeigt 24 Stunden lang „E RE“ (neu).

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
- `SPICK`: Abschnitte im Folienformat plus `id` und `chip` (Sprungleiste). **Schlank halten**: nur das Wichtigste, lieber eine Zeile in einem bestehenden Abschnitt ergänzen als einen neuen anlegen.

## Ablauf: Mimi schickt neues Material

1. **Neueste Version holen** (siehe Git unten).
2. Fotos/PDF genau lesen: Was war gefragt? Was hat Mimi geschrieben, was war falsch? (Lösungsfelder verschmelzen oft mit der Aufgabe.)
3. Einordnen:
   - **Hausaufgabe / Test** → neues Set am Ende von `homework.js` (Buch-Stil, `seq:true`, „Kujdes! 👀“ mit ihren Fehlern, „Bravo“ für Richtiges).
   - **Neuer Stoff aus dem Kursbuch** → neue Kapitel in `data.js` bei ihrer Lektion (`lek`, `band`, `added`). Neue Lektion = `unit` am ersten Kapitel.
   - Bei Bedarf beides: Hausaufgabe genau wie das Blatt, die Reise mit weiteren Übungen dazu.
4. **Neue Wörter** in `words.js` eintragen (`node tools/validate.js` zeigt fehlende Wörter aus neuen Kapiteln).
5. **Spickzettel** nur ergänzen, wenn neue Grammatik dazukommt, und schlank halten.
6. Neue Grammatikthemen bei Bedarf in `TOPICS` (`app.js`) ergänzen.
7. Prüfen (siehe unten), dann dem Benutzer zusammenfassen.

## Regeln

- **Bestehende Aufgaben nie verändern oder löschen**, außer der Benutzer verlangt es ausdrücklich. Inhalte nur ergänzen. Nach Änderungen gegen den letzten Commit vergleichen.
- **Ids nie umbenennen**: Fortschritt, Fehler und Sterne hängen an den Ids.
- Unsichere Lesarten (unleserliche Handschrift, fehlende Hördatei) nicht als Mimis Fehler darstellen, sondern als „Kujdes nga kurthet“ (typische Fallen) oder weglassen und es dem Benutzer sagen.
- Heller Modus ist Standard.
- **Erst pushen, wenn der Benutzer es sagt.** Lokal ändern ist immer okay.

## Prüfen

- `node --check <datei>.js` für jede geänderte Datei.
- `node tools/validate.js`: Antworten in den Optionen, `parts` ergeben `de`, Buchstabensalat, `tr`-Größen, doppelte Ids, fehlende Wörter.
- Für Bildschirm und Spielbarkeit: headless Chrome (`C:/Program Files/Google/Chrome/Application/chrome.exe --headless=new --allow-file-access-from-files --dump-dom` bzw. `--screenshot`). Eine Test-HTML lädt die fünf Skripte, ruft z. B. `start('chapter', id)` und löst jede Frage über die App-Funktionen (`pick`, `wcheck`, `ocheck`, `ccheck`, `scheck`, `mtap`).

## Git

- Lokal: `C:\Users\bjashari\Project\MimiLerntDeutsch`, Branch `main`, deployt von GitHub (`besarti96/MimiLerntDeutsch`).
- Auf diesem Rechner ist Git standardmäßig mit dem Arbeitskonto angemeldet, das **keine Rechte** auf das Repo hat. Deshalb immer mit der Adresse samt Benutzer:
  - holen: `git fetch https://besarti96@github.com/besarti96/MimiLerntDeutsch.git main` und dann `git merge --ff-only FETCH_HEAD`
  - pushen: `git push https://besarti96@github.com/besarti96/MimiLerntDeutsch.git main`
- Commit-Nachrichten auf Deutsch, kurz, was sich für Mimi ändert.
