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
hear:[[Satz, richtige Bedeutung, falsch, …]] (🎧 Pflicht, siehe „Hören“)
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

Gemeinsam: `psq`/`pde` (Überschrift), `topic` (für „Pikat e dobëta“: z. B. `satz`, `artikel`, `ein`, `modal`, `perfekt`, `zeit`, `wfragen`, `subjekt`, `trennbar`, `zahlen`, `lesen`, `hoeren`, siehe `TOPICS` in `app.js`), `read:true` (zeigt den `read`-Text des Kapitels über der Frage), `row:true` (Optionen nebeneinander, nicht gemischt).

## 🎧 Hören: Höraufgaben gehören immer dazu

Mimi soll Deutsch nicht nur lesen, sondern **verstehen, was sie hört, und darauf antworten**. Darum hat **jede Runde Höraufgaben**: Sie hört nur Deutsch (der Text ist nicht sichtbar) und tippt an, was gesagt wurde, **mal auf Deutsch, mal auf Albanisch**.

- **So sieht es aus:** farbige Karte „🎧 Dëgjim · Höraufgabe“ mit großem ▶-Knopf, Schallwellen, solange gesprochen wird, und den Knöpfen „🔁 Nochmal“ und „🐢 Langsam“. Die Aufgabe spielt beim Öffnen automatisch ab. Nach der Antwort zeigt die App immer, was gesagt wurde und was es heißt. 💡 rät: noch einmal langsam hören.
- **Die Arten** (`lk` an der `listen`-Aufgabe):

| `lk` | Mimi hört | sie tippt an | entsteht automatisch aus |
|---|---|---|---|
| `wde` | ein Wort | das deutsche Wort | `nouns`/`words` |
| `wsq` | ein Wort | die albanische Bedeutung | `nouns`/`words` |
| `sde` | einen Satz | den deutschen Satz | `order`-Aufgaben (`de`) und Beispielen `ex` der Folien |
| `ssq` | einen Satz | die albanische Bedeutung | `order`-Aufgaben mit `sq` |
| `ans` | eine Frage | die passende Antwort | `mc` mit `speakQ:true, topic:'dialog'` |
| `sinn` | einen Satz | **was er bedeutet**, in anderen Worten (Deutsch oder Albanisch) | `hear` am Kapitel (von Hand geschrieben) |

- **`sinn` ist die wichtigste Art**: Mimi muss verstehen, nicht nur wiedererkennen. Beispiel: 🎧 „Anna hat gegessen.“ → ● „Anna ist schon satt.“ ○ „Anna will essen.“ ○ „Anna hat geduscht.“ ○ „Anna kocht gerade.“
  Format am Kapitel: `hear:[['Gehörter Satz.', 'richtige Bedeutung', 'falsch', 'falsch', 'falsch'], …]`
  - Die richtige Antwort ist **eine Umschreibung oder Erklärung**, keine Wort-für-Wort-Übersetzung (dafür gibt es `ssq`). Etwa die Hälfte auf Deutsch, die andere Hälfte auf Albanisch.
  - Die falschen Antworten sind **nah dran**: gleiche Wörter, aber eine andere Zeit (will essen ↔ hat gegessen), Person (ich ↔ er), Richtung (Wo ↔ Wohin), Zahl (halb acht ↔ 8:30), Rolle (den Mann ↔ der Mann) oder ein ähnliches Verb. Genau eine Antwort darf passen.
  - Nur Wörter und Grammatik, die Mimi bis zu diesem Kapitel kennt. Im Satz kein `…`, keine Klammern. Albanisch mit „Personi …“ oder ohne Pronomen, wenn das Geschlecht offen ist.
- **Automatisch überall** (`withListening` in `app.js`): Jede Kapitel-, Übungs-, Finale- und Hausaufgabenrunde bekommt **mindestens 2 Höraufgaben: eine `sinn`, einen ganzen Satz (`sde`/`ssq`/`ans`) und Wörter, falls es noch zu wenige sind**. In gemischten Runden ersetzen sie einfache Wortfragen (die Runde bleibt gleich lang), bei Buch-Reihenfolge (`seq`) kommen sie ans Ende. Hat ein Kapitel oder Hausaufgaben-Teil zu wenig Material, nimmt die App die Kapitel derselben Lektion, bei Teilen ohne `lek` die letzten Kapitel, die Mimi auf der Reise erreicht hat. Im Wörter-Training sind `listen` (Deutsch) und `lsq` (Albanisch) feste Fragearten.
- **Höraufgaben sind Pflicht, auch bei Ton aus (🔇).** Der Schalter stoppt nur das automatische Vorlesen; in der Hörkarte steht dann „🔇 Shtyp ▶ … · Tippe auf ▶“ und Mimi startet den Ton selbst. Nur ein Browser ganz ohne Sprachausgabe bekommt keine Höraufgaben. Fehler bei Wort-Höraufgaben zählen beim Wort, bei Satz-Höraufgaben unter dem Thema `hoeren` („Dëgjimi“).

**Pflicht für neue Inhalte**, damit Hören und Antworten immer im Aufgabenset ist:

- Jedes **neue Kapitel** bekommt **3–4 `hear`-Sätze** zum Stoff des Kapitels (siehe `sinn` oben).
- Jedes **neue Kapitel** hat `nouns`/`words` und **mindestens 3 `order`-Sätze mit `sq`**, kurz und alltagsnah (höchstens 64 Zeichen, ohne `/`, `…`, ` – ` und lange Zahlen; sonst nimmt die App sie nicht zum Hören). Daraus entstehen die Satz-Höraufgaben. `node tools/validate.js` meldet neue Kapitel mit weniger als 2 solchen Sätzen oder weniger als 3 `hear`.
- **Dialoge** aus dem Buch („Was antwortest du?“) als `mc` mit `speakQ:true, topic:'dialog'` anlegen, dann werden sie auch zu „Hör die Frage und antworte“. Nur eine Antwort darf passen, sonst ein `h` (es erscheint in der Hörkarte).
- **Beispielsätze** in Folien (`ex`) liefern zusätzliche deutsche Hörsätze.
- **Hausaufgaben-Teile** bleiben wie im Buch; ihre Höraufgaben kommen automatisch am Ende dazu (aus dem Set oder der Lektion).
- **Neue Wörter** brauchen nichts extra: Wort-Höraufgaben entstehen aus ihnen von selbst.
- Eine **feste** Höraufgabe nur, wenn etwas Bestimmtes gehört werden soll (z. B. ein Hörtext, der im Buch abgedruckt ist): `{type:'listen', lk:'ssq', psq, pde, say:'deutscher Satz', o:[…], a, e}`. `say` wird nur vorgelesen, nie angezeigt; `o`/`a` auf Deutsch (`wde`/`sde`/`ans`) oder Albanisch (`wsq`/`ssq`).
- Prüfen: In der Testrunde muss jede neue Runde mindestens 2 Höraufgaben haben, davon eine `sinn` und mindestens 1 Satz; alle mit Antwort in den Optionen und ohne doppelte Optionen.

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
   - **Hörübungen aus dem Buch ohne Audio weglassen** (die Antworten lassen sich nicht sicher prüfen) und das dem Benutzer sagen. Eigene Höraufgaben entstehen trotzdem immer (siehe „🎧 Hören“): jedes neue Kapitel bekommt dafür genug kurze `order`-Sätze mit `sq`.
   - **Jede Aufgabe muss ohne Buch lösbar sein.** Was im Buch aus einem Bild, einer Karte, einem Text oder einer Hördatei kommt, braucht Kontext in der App: `read` (Text über der Aufgabe, funktioniert bei allen Aufgabentypen), `h` (z. B. die Karte als „Hamburg ☀️ 0° · …“), `bank` (Wortkasten) oder das Verb in Klammern. Ein Wortkasten (`bank`) nur, wenn ihn auch das Buch hat; sonst reicht der Text als Kontext, und freie Eingaben bekommen großzügige Varianten (`[[sehr gut;gut]]`), damit sinngemäß Richtiges zählt.
   - Was Mimi richtig hatte: Folie „Bravo, Mimoza! 🌟“. Ihre sicheren Fehler: Folie „Kujdes! 👀“ (`fix`).
4. **Neue Wörter** in `words.js` eintragen, jedes mit heutigem Datum (`node tools/validate.js` zeigt fehlende Wörter aus neuen Kapiteln; am Ende soll die Liste leer sein, bis auf Wörter, die in kein Thema passen).
5. **Spickzettel** nur ergänzen, wenn neue Grammatik dazukommt, und schlank halten.
6. Neue Grammatikthemen bei Bedarf in `TOPICS` (`app.js`) ergänzen.
7. Prüfen (siehe unten): bestehende Inhalte unverändert, alles lösbar, Screenshots der neuen Bildschirme.
8. Dem Benutzer zusammenfassen: eine Tabelle Seite → Inhalt → Mimis Einträge, was neu ist (Kapitel, Hausaufgabe, Wörter pro Thema, Spickzettel), was bewusst weggelassen wurde.

## Regeln

- **Bestehende Aufgaben nie verändern oder löschen**, außer der Benutzer verlangt es ausdrücklich. Inhalte nur ergänzen. Nach Änderungen gegen den letzten Commit vergleichen.
- **Ids nie umbenennen**: Fortschritt, Fehler und Sterne hängen an den Ids.
- **Eindeutig fragen**: Bei Dialog-Fragen („Was antwortet …?“) darf nur eine Antwort logisch passen; wenn die Lösung von der Reihenfolge in der Geschichte abhängt, gehört ein Hinweis `h` dazu (z. B. „Hera e dytë: vajza nervozohet 😤“). Gleiche albanische Übersetzung für zwei Wörter (tani = jetzt / nun) regelt die App selbst: kein solcher Ablenker, beim Schreiben zählen beide.
- Unsichere Lesarten (unleserliche Handschrift, fehlende Hördatei) nicht als Mimis Fehler darstellen, sondern als „Kujdes nga kurthet“ (typische Fallen) oder weglassen und es dem Benutzer sagen.
- Heller Modus ist Standard.
- **Erst pushen, wenn der Benutzer es sagt** (oft: „wenn du dir sicher bist, push“ → nach bestandener Prüfung pushen). Lokal ändern ist immer okay.
- Design-Wünsche erst lokal zeigen (Screenshots), pushen erst nach seinem Okay. Was ihm nicht gefällt, sauber zurücksetzen (`git checkout -- datei`) statt zu flicken.

## Prüfen

- `node --check <datei>.js` für jede geänderte Datei.
- `node tools/validate.js`: Antworten in den Optionen, `parts` ergeben `de`, Buchstabensalat, `tr`-Größen, doppelte Ids, fehlende Wörter, neue Kapitel mit zu wenig Hör-Sätzen (🎧).
- Für Bildschirm und Spielbarkeit: headless Chrome (`C:/Program Files/Google/Chrome/Application/chrome.exe --headless=new --allow-file-access-from-files --dump-dom` bzw. `--screenshot`). Eine Test-HTML lädt die fünf Skripte, ruft z. B. `start('chapter', id)` und löst jede Frage über die App-Funktionen (`pick`, `wcheck`, `ocheck`, `ccheck`, `scheck`, `mtap`).

### Stolperfallen

- Die Dateien haben teils **Windows-Zeilenenden (CRLF)**. Skripte, die Text suchen/ersetzen, zuerst auf `
` normalisieren und beim Schreiben das Original-Format beibehalten. Sonst greifen Anker nicht oder Dateien werden doppelt geschrieben. Zeilenenden sind für die App egal.
- Ohne Chrome geht auch Edge (`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`, gleiche Schalter). Kommt aus der Bash nichts zurück, den Browser über PowerShell starten (`Start-Process … -RedirectStandardOutput datei -Wait`) und mit eigenem `--user-data-dir`. Test-Dateien (`_s.html`, `_inj.js`) danach löschen, nie committen.
- Nach dem Ändern von `app.js` im Browser mit Strg + F5 neu laden, sonst läuft die alte Version.
- Headless Chrome hat eine Mindestbreite: Screenshots mit `--window-size=500,…`, sonst wirkt das Layout fälschlich abgeschnitten. Test-Seiten müssen `style.css` laden, sonst gibt es kein Layout zum Messen.
- In Test-Skripten keine Namen verwenden, die die App global belegt (z. B. `cur`, `G`, `S`).
- Größe: Stand Ende Oktober ~525 KB (~143 KB komprimiert). Erst ab etwa 2–3 MB lohnt es sich, die Inhalte pro Buch aufzuteilen.

## Git

- Repo: GitHub `besarti96/MimiLerntDeutsch`, Branch `main`, deployt über GitHub Pages (`besarti96.github.io/MimiLerntDeutsch`). Der lokale Ordner ist auf jedem Rechner anders (z. B. `C:\Users\bjashari\Project\MimiLerntDeutsch` oder `C:\Users\b-e-s\projekte\mimi-deutsch`).
- **Neuer Rechner:** `git clone https://besarti96@github.com/besarti96/MimiLerntDeutsch.git`, dann diese Datei lesen, `node tools/validate.js` laufen lassen und `index.html` im Browser öffnen. Mehr braucht es nicht (kein Build, keine Pakete, nur Node für die Prüfung).
- Auf diesem Rechner ist Git standardmäßig mit dem Arbeitskonto angemeldet, das **keine Rechte** auf das Repo hat. Deshalb immer mit der Adresse samt Benutzer:
  - holen: `git fetch https://besarti96@github.com/besarti96/MimiLerntDeutsch.git main` und dann `git merge --ff-only FETCH_HEAD`
  - pushen: `git push https://besarti96@github.com/besarti96/MimiLerntDeutsch.git main`
- Commit-Nachrichten auf Deutsch, kurz, was sich für Mimi ändert.
