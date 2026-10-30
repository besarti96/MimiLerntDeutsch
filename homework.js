/* =====================================================================
   Hausaufgaben aus Mimis Arbeitsbuch.
   Ein Set = ein Tag/eine Lektion, parts = Unterkapitel (gleiches Format
   wie CHAPTERS in data.js, plus book:[sq, de] = Seite/Übung im Buch).
   Extra-Folientyp:  fix:[[falsch, richtig, Erklärung]]  -> „Kujdes! 👀“
   Test-Teil:  test:true, pass:80, n:20, from:'id'  -> Fragen aus dem Teil 'id',
               nur ein Versuch pro Frage, kein 💡, bestanden ab pass %.
   n = Anzahl Fragen pro Runde (sonst 10).
   mix:{vocab, write, order} = so viele Wortfragen (davon Schreiben) und Satzbau
   pro Runde (sonst 3/0/2). writeWords:true = auch words[] schreiben lassen.
   Set-Feld badge:[sq, de] = kleines Label neben „Detyrat e shtëpisë“.
   Neue Hausaufgaben? Einfach ein neues Set unten anhängen (neuestes zuletzt).
   Nur das neueste Set ist „Detyrat e shtëpisë“; ältere Sets erscheinen
   automatisch als eigener Block (mit ihrem Namen sq/de) unter „Kapitujt“.
   ===================================================================== */

const HOMEWORK = [
{
  id:'l7', date:'2026-10-21', emoji:'📝',
  sq:'Mësimi 7: Lernen – ein Leben lang', de:'Lektion 7 · Arbeitsbuch S. 75–79',
  parts:[

/* ---------- Üb. 1 + 2: Gespräche mit können ---------- */
{
  id:'hw7-koennen', lek:7, pg:75, emoji:'🤹', color:'#7650F0', book:['faqe 75 · ushtrimi 1 + 2','S. 75 · Üb. 1 + 2'],
  sq:'Biseda me können', de:'Gespräche mit können',
  desc:'Rendit fjalitë te bisedat (a–e) dhe mëso foljen können.',
  tip:'können në vendin 2, folja tjetër në fund. Pyetje: Kannst du …? Könnt ihr …? Können Sie …?',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 75, <b>ushtrimi 1</b>: Rendit fjalitë te bisedat a–e.<br><b>Ushtrimi 2</b>: Plotëso tabelën e foljes <b>können</b>.'},
    {t:'können', d:'Das Verb können', say:'join', th:['','können'],
     tr:[['unë','mund'],['ti','mund'],['ai / ajo','mund'],['ne','mundemi'],['ju','mundeni'],['ata / Ju','mundin / mundeni']],
     table:[['ich','<b>kann</b>'],['du','kannst'],['er / sie / es','<b>kann</b>'],['wir','können'],['ihr','könnt'],['sie / Sie','können']],
     tip:'<b>ich kann</b> dhe <b>er kann</b>: pa mbaresë!'},
    {t:'Bisedat e sakta', d:'Die Lösungen', ex:[
      ['Kannst du mir bitte helfen? – Ja, gern. Was kann ich machen?','A mund të më ndihmosh? – Po, me qejf. Çfarë mund të bëj?'],
      ['Jonas und Max, könnt ihr Tennis spielen? – Nein, wir können nicht Tennis spielen. Aber wir spielen Fußball.','Jonas dhe Max, dini të luani tenis? – Jo, nuk dimë. Por luajmë futboll.'],
      ['Janina kann super tanzen! – Ja, stimmt. Das sieht toll aus.','Janina kërcen shkëlqyer! – Po, e vërtetë. Duket shumë bukur.'],
      ['Frau Zeiler, wir haben keinen Kaffee. Können Sie bitte Kaffee kaufen? – Ja, gern.','Zonja Zeiler, nuk kemi kafe. A mund të blini kafe? – Po, me qejf.'],
      ['Wir gehen am Samstag klettern. Kommst du auch? – Nein, ich kann nicht klettern! Das weißt du doch!','Të shtunën shkojmë për ngjitje. Vjen edhe ti? – Jo, nuk di të ngjitem! Këtë e di ti!']]},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'Shumicën e ke bërë mirë! Vetëm dy gjëra të vogla nga libri yt:',
     fix:[
      ['b: Jonas und Max, wir können nicht Tennis spielen. – Nein, könnt ihr Tennis spielen.',
       'b: Jonas und Max, könnt ihr Tennis spielen? – Nein, wir können nicht Tennis spielen.',
       'Pyetja vjen e para (könnt ihr …?), përgjigjja pas saj (Nein, wir …).'],
      ['c: Janina kann super klettern!','c: Janina kann super tanzen!',
       '„Das sieht toll aus“ (duket bukur) shkon me kërcimin. „Ich kann nicht klettern“ është te e.']]}
  ],
  nouns:[['der','Kaffee','kafeja']],
  words:[['helfen','ndihmoj'],['klettern','ngjitem'],['Tennis spielen','luaj tenis'],['kaufen','blej'],['Ja, stimmt.','Po, e vërtetë.'],
    ['Das sieht toll aus.','Duket shumë bukur.'],['Das weißt du doch!','Këtë e di ti!']],
  items:[
    {type:'match', pairs:[['ich','kann'],['du','kannst'],['wir','können'],['ihr','könnt']]},
    {type:'mc', psq:'Çfarë përgjigjet?', pde:'Was passt?', q:'Kannst du mir bitte helfen?', speakQ:true,
     o:['Ja, gern. Was kann ich machen?','Nein, wir können nicht Tennis spielen.','Ja, stimmt. Das sieht toll aus.','Nein, ich kann nicht klettern!'],
     a:'Ja, gern. Was kann ich machen?', say:'Ja, gern. Was kann ich machen?', e:'Biseda a.'},
    {type:'mc', psq:'Çfarë përgjigjet?', pde:'Was passt?', q:'Jonas und Max, könnt ihr Tennis spielen?', speakQ:true,
     o:['Nein, wir können nicht Tennis spielen.','Ja, gern. Was kann ich machen?','Ja, stimmt. Das sieht toll aus.','Können Sie bitte Kaffee kaufen?'],
     a:'Nein, wir können nicht Tennis spielen.', say:'Nein, wir können nicht Tennis spielen. Aber wir spielen Fußball.', e:'Biseda b: pyetja me „könnt ihr“, përgjigjja me „wir können“.'},
    {type:'mc', psq:'Çfarë përgjigjet?', pde:'Was passt?', q:'Janina kann super tanzen!', speakQ:true,
     o:['Ja, stimmt. Das sieht toll aus.','Nein, ich kann nicht klettern!','Ja, gern. Was kann ich machen?','Nein, wir können nicht Tennis spielen.'],
     a:'Ja, stimmt. Das sieht toll aus.', say:'Ja, stimmt. Das sieht toll aus.', e:'Biseda c.'},
    {type:'mc', psq:'Çfarë përgjigjet?', pde:'Was passt?', q:'Wir gehen am Samstag klettern. Kommst du auch?', speakQ:true,
     o:['Nein, ich kann nicht klettern!','Ja, stimmt. Das sieht toll aus.','Können Sie bitte Kaffee kaufen?','Nein, wir können nicht Tennis spielen.'],
     a:'Nein, ich kann nicht klettern!', say:'Nein, ich kann nicht klettern! Das weißt du doch!', e:'Biseda e.'},
    {type:'mc', psq:'Çfarë i thua?', pde:'Was sagst du?', q:'Frau Zeiler, wir haben keinen Kaffee.', h:'I kërkon të blejë kafe.',
     o:['Können Sie bitte Kaffee kaufen?','Kannst du mir bitte helfen?','Könnt ihr Tennis spielen?','Was kann ich machen?'],
     a:'Können Sie bitte Kaffee kaufen?', say:'Können Sie bitte Kaffee kaufen?', e:'Me „Sie“ (ju, me respekt) → Können Sie …?'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'Jonas und Max, ___ ihr Tennis spielen?', h:'ihr', o:['kann','kannst','können','könnt'], a:'könnt', e:'ihr könnt.'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'Nein, wir ___ nicht Tennis spielen.', h:'wir', o:['kann','kannst','können','könnt'], a:'können', e:'wir können.'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'Ja, gern. Was ___ ich machen?', h:'ich', o:['kann','kannst','können','könnt'], a:'kann', e:'ich kann, pa mbaresë.'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'Nein, ich ___ nicht klettern! Das weißt du doch!', h:'ich', o:['kann','kannst','können','könnt'], a:'kann', e:'ich kann.'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'___ du mir bitte helfen?', h:'du', o:['Kann','Kannst','Können','Könnt'], a:'Kannst', e:'du kannst.'},
    {type:'gap', row:true, psq:'Folja në fund', pde:'Das Verb am Ende', s:'Janina kann super ___!', h:'tanzen', o:['tanzen','tanzt','tanze'], a:'tanzen', e:'Pas können, folja në fund mbetet e pandryshuar: tanzen.'},
    {type:'order', de:'Kannst du mir bitte helfen?', sq:'A mund të më ndihmosh, të lutem?'},
    {type:'order', de:'Jonas und Max, könnt ihr Tennis spielen?', sq:'Jonas dhe Max, a dini të luani tenis?'},
    {type:'order', de:'Wir können nicht Tennis spielen.', sq:'Ne nuk dimë të luajmë tenis.'},
    {type:'order', de:'Können Sie bitte Kaffee kaufen?', sq:'A mund të blini kafe, ju lutem?'}
  ]
},

/* ---------- Üb. 5–7: Freizeit, wer kann was? ---------- */
{
  id:'hw7-hobbys', lek:7, pg:76, emoji:'🎨', color:'#0E9F8E', book:['faqe 76 · ushtrimi 5–8','S. 76 · Üb. 5–8'],
  sq:'Kush di çfarë?', de:'Freizeit: Wer kann was?',
  desc:'reiten, singen, malen, surfen – dhe sa mirë i di njerëzit.',
  tip:'Foljet shkruhen me shkronjë të vogël. können në vendin 2: Muriel kann sehr gut reiten.',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 76: <b>5</b> Çfarë bëjnë njerëzit? Sa mirë? <b>6</b> Shkruaj fjali me <b>können</b>. <b>7</b> Shkruaj biseda me <b>können</b>.'},
    {t:'Çfarë bëjnë?', d:'Was machen die Personen?', ex:[['Muriel reitet.','Muriel kalëron.'],['Karie und Jeany singen.','Karie dhe Jeany këndojnë.'],['Alba malt.','Alba pikturon.'],['Jason surft.','Jason bën surf.']],
     tip:'Foljet shkruhen me shkronjë të <b>vogël</b>: reiten, singen, malen, surfen. Vetëm emrat me të madhe!'},
    {t:'Sa mirë?', d:'Wie gut?', say:1, th:['','Deutsch','Shqip'],
     table:[['😊😊','sehr gut','shumë mirë'],['😊','gut','mirë'],['😐','nicht so gut','jo aq mirë'],['☹️','nicht gut','jo mirë'],['☹️☹️','gar nicht gut','aspak mirë']],
     tip:'Muriel <b>kann</b> sehr gut <b>reiten</b>. <i class="tr">(Muriel kalëron shumë mirë.)</i> → können në vendin 2, folja në fund.'},
    {t:'Zgjidhjet 6 + 7', d:'Lösungen Übung 6 + 7', ex:[
      ['Ricardo und Lea können sehr gut Tango tanzen.','Ricardo dhe Lea kërcejnë tango shumë mirë.'],
      ['Ludmilla kann nicht so gut reiten.','Ludmilla nuk kalëron aq mirë.'],
      ['Ivan kann nicht gut Ski fahren.','Ivani nuk bën mirë ski.'],
      ['Kannst du auch Gitarre spielen?','A di edhe ti të luash kitarë?'],
      ['Nein, aber ich kann gut Klavier spielen.','Jo, por di të luaj mirë piano.'],
      ['Ich kann leider gar nicht gut kochen.','Fatkeqësisht nuk di aspak të gatuaj.'],
      ['Aber Sie können sehr gut Kuchen backen.','Por ju dini të piqni shumë mirë ëmbëlsira.']]},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'Disa gjëra të vogla nga libri yt:',
     fix:[
      ['Singer','singen','Singer = këngëtar (emër). Këtu duhet folja: singen = këndoj.'],
      ['Mural','malen → Alba malt.','malen = pikturoj.'],
      ['Reiten','reiten','Foljet me shkronjë të vogël, emrat me të madhe.'],
      ['Karie und Jeany nicet singer','Karie und Jeany können … singen.','nicht (jo nicet) dhe mos harro können në vendin 2!'],
      ['7b: Kannst du kochen? – … aber ich kann sehr gut kochen.','7b: Ich kann leider gar nicht gut kochen. – Aber Sie können sehr gut Kuchen backen.',
       'Lexo fjalët te 7b: „ich – kochen – leider gar nicht gut“ dhe „Sie – Kuchen backen – sehr gut“.']]},
    {t:'Bravo! 🌟', d:'Selbst korrigiert', p:'Në libër e ke korrigjuar vetë: <b>malt</b> ✓ (jo Mural). Super!',
     fix:[['Kannst du kochen? – … aber ich kann sehr gut kochen.','Ich kann leider gar nicht gut kochen. – Aber Sie können sehr gut Kuchen backen.','Te 7b ndiqi fjalët: „ich – kochen – leider gar nicht gut“.']]}
  ],
  nouns:[['die','Gitarre','kitara'],['das','Klavier','pianoja'],['der','Kuchen','ëmbëlsira']],
  words:[['reiten','kalëroj'],['singen','këndoj'],['malen','pikturoj'],['surfen','bëj surf'],['Ski fahren','bëj ski'],['kochen','gatuaj'],
    ['Kuchen backen','pjek ëmbëlsira'],['sehr gut','shumë mirë'],['nicht so gut','jo aq mirë'],['gar nicht gut','aspak mirë'],['leider','fatkeqësisht']],
  items:[
    {type:'match', pairs:[['reiten','kalëroj'],['singen','këndoj'],['malen','pikturoj'],['surfen','bëj surf'],['backen','pjek']]},
    {type:'gap', psq:'Çfarë bëjnë?', pde:'Was machen sie?', s:'Muriel ___.', h:'reiten = kalëroj', o:['reitet','reiten','Reiter','reitest'], a:'reitet', e:'sie reitet.'},
    {type:'gap', psq:'Çfarë bëjnë?', pde:'Was machen sie?', s:'Karie und Jeany ___.', h:'singen = këndoj', o:['singen','singt','Singer','singst'], a:'singen', e:'Janë dy → singen. (Singer = këngëtar)'},
    {type:'gap', psq:'Çfarë bëjnë?', pde:'Was machen sie?', s:'Alba ___.', h:'malen = pikturoj', o:['malt','malen','Mural','malst'], a:'malt', e:'sie malt.'},
    {type:'gap', psq:'Çfarë bëjnë?', pde:'Was machen sie?', s:'Jason ___.', h:'surfen', o:['surft','surfen','surfst','Surfer'], a:'surft', e:'er surft.'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'Karie und Jeany ___ singen.', h:'ato (dy)', o:['können','kann','könnt','kannst'], a:'können', e:'sie (ato) können.'},
    {type:'gap', psq:'Folja können', pde:'Das Verb können', s:'Ludmilla ___ nicht so gut reiten.', h:'ajo', o:['kann','können','kannst','könnt'], a:'kann', e:'sie kann.'},
    {type:'gap', row:true, psq:'Folja në fund', pde:'Das Verb am Ende', s:'Muriel kann sehr gut ___.', h:'reiten', o:['reiten','reitet','Reiten'], a:'reiten', e:'Pas können: folja në fund, e pandryshuar dhe me shkronjë të vogël.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Ricardo dhe Lea kërcejnë tango shumë mirë.',
     o:['Ricardo und Lea können sehr gut Tango tanzen.','Ricardo und Lea kann sehr gut Tango tanzen.','Ricardo und Lea können tanzen sehr gut Tango.','Ricardo und Lea können sehr gut Tango tanzt.'],
     a:'Ricardo und Lea können sehr gut Tango tanzen.', say:'Ricardo und Lea können sehr gut Tango tanzen.', e:'können në vendin 2, tanzen në fund.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Ivani nuk bën mirë ski.',
     o:['Ivan kann nicht gut Ski fahren.','Ivan kann Ski fahren nicht gut.','Ivan nicht gut kann Ski fahren.','Ivan können nicht gut Ski fahren.'],
     a:'Ivan kann nicht gut Ski fahren.', say:'Ivan kann nicht gut Ski fahren.', e:'kann në vendin 2, Ski fahren në fund.'},
    {type:'mc', psq:'Çfarë përgjigjesh?', pde:'Was antwortest du?', q:'Kannst du auch Gitarre spielen?', speakQ:true, h:'Jo, por piano po.',
     o:['Nein, aber ich kann gut Klavier spielen.','Nein, aber ich kannst gut Klavier spielen.','Ja, ich kann nicht Gitarre spielen.','Nein, aber ich kann gut Klavier spielt.'],
     a:'Nein, aber ich kann gut Klavier spielen.', say:'Nein, aber ich kann gut Klavier spielen.', e:'ich kann … spielen.'},
    {type:'mc', psq:'Bëj fjalinë (7b)', pde:'Bilde den Satz', q:'leider gar nicht gut – ich – kochen',
     o:['Ich kann leider gar nicht gut kochen.','Kannst du kochen?','Ich kann sehr gut kochen.','Ich kochen leider gar nicht gut.'],
     a:'Ich kann leider gar nicht gut kochen.', say:'Ich kann leider gar nicht gut kochen.', e:'ich kann + … + kochen në fund.'},
    {type:'mc', psq:'Bëj fjalinë (7b)', pde:'Bilde den Satz', q:'sehr gut – aber Sie – Kuchen backen',
     o:['Aber Sie können sehr gut Kuchen backen.','Aber Sie kann sehr gut Kuchen backen.','Aber Sie können Kuchen backen sehr gut.','Ich kann sehr gut kochen.'],
     a:'Aber Sie können sehr gut Kuchen backen.', say:'Aber Sie können sehr gut Kuchen backen.', e:'Sie können … backen.'},
    {type:'cloze', topic:'verben', psq:'5a Çfarë bëjnë?', pde:'5a Was machen die Personen?', h:'reiten · singen · malen · surfen',
     text:'1  Muriel [[reitet]]. (reiten)\n2  Karie und Jeany [[singen]]. (singen)\n3  Alba [[malt]]. (malen)\n4  Jason [[surft]]. (surfen)', e:'sie reitet, sie singen, sie malt, er surft.'},
    {type:'order', topic:'satz', psq:'5b Sa mirë?', pde:'5b Wie gut können sie das?', cue:'😊😊 Muriel – reiten', parts:['Muriel','kann','sehr gut','reiten.'], de:'Muriel kann sehr gut reiten.', sq:'Muriel kalëron shumë mirë.'},
    {type:'order', topic:'satz', psq:'6 Fjali me können', pde:'6 Schreiben Sie Sätze', cue:'sehr gut – Ricardo und Lea – Tango tanzen', parts:['Ricardo und Lea','können','sehr gut','Tango tanzen.'], de:'Ricardo und Lea können sehr gut Tango tanzen.', sq:'Ricardo dhe Lea kërcejnë tango shumë mirë.'},
    {type:'order', topic:'satz', psq:'6 Fjali me können', pde:'6 Schreiben Sie Sätze', cue:'Ludmilla – reiten – nicht so gut', parts:['Ludmilla','kann','nicht so gut','reiten.'], de:'Ludmilla kann nicht so gut reiten.', sq:'Ludmilla nuk kalëron aq mirë.'},
    {type:'order', topic:'satz', psq:'6 Fjali me können', pde:'6 Schreiben Sie Sätze', cue:'Ski fahren – Ivan – nicht gut', parts:['Ivan','kann','nicht gut','Ski fahren.'], de:'Ivan kann nicht gut Ski fahren.', sq:'Ivani nuk bën mirë ski.'},
    {type:'order', topic:'satz', psq:'7a Bisedë', pde:'7a Gespräch', cue:'du – Gitarre spielen – auch – ?', parts:['Kannst','du','auch','Gitarre spielen?'], de:'Kannst du auch Gitarre spielen?', sq:'A di edhe ti të luash kitarë?'},
    {type:'order', topic:'satz', psq:'7a Bisedë', pde:'7a Gespräch', cue:'aber ich – nein, – Klavier spielen – gut', parts:['Nein,','aber ich','kann','gut','Klavier spielen.'], de:'Nein, aber ich kann gut Klavier spielen.', sq:'Jo, por di të luaj mirë piano.'},
    {type:'order', topic:'satz', psq:'7b Bisedë', pde:'7b Gespräch', cue:'leider gar nicht gut – ich – kochen', parts:['Ich','kann','leider gar nicht gut','kochen.'], de:'Ich kann leider gar nicht gut kochen.', sq:'Fatkeqësisht nuk di aspak të gatuaj.'},
    {type:'order', topic:'satz', psq:'7b Bisedë', pde:'7b Gespräch', cue:'sehr gut – aber Sie – Kuchen backen', parts:['Aber Sie','können','sehr gut','Kuchen backen.'], de:'Aber Sie können sehr gut Kuchen backen.', sq:'Por ju dini të piqni shumë mirë ëmbëlsira.'},
    {type:'cloze', psq:'8c sch apo s?', pde:'8c sch oder s?', h:'sp dhe st në fillim lexohen „shp“, „sht“, por shkruhen me s.',
     text:'1  Gehen wir [[s]]pazieren?\n2  Wie [[s]]pät ist es?\n3  Buch[[s]]tabieren Sie, bitte.\n4  Das [[sch]]meckt gut.\n5  Er ist Fußball[[s]]pieler.\n6  [[S]]prichst du [[S]]panisch?',
     e:'spazieren, spät, buchstabieren, Spieler, sprichst, Spanisch me s. Vetëm schmeckt me sch.'}
  ]
},

/* ---------- Üb. 9–11: wollen ---------- */
{
  id:'hw7-wollen', lek:7, pg:77, emoji:'🌴', color:'#EE7A0C', book:['faqe 77 · ushtrimi 9–11','S. 77 · Üb. 9–11'],
  sq:'wollen: dua të …', de:'Das Verb wollen',
  desc:'Çfarë duan të bëjnë Jakobi dhe Alina në pushime?',
  tip:'ich will, du willst, er will, wir wollen, ihr wollt, sie wollen. Folja tjetër në fund!',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 77: <b>9</b> Plotëso tabelën e foljes <b>wollen</b>. <b>10</b> Shkruaj fjali me wollen. <b>11</b> Plotëso wollen në formën e saktë.'},
    {t:'wollen = dua (të bëj)', d:'Das Verb wollen', say:'join', th:['','wollen'],
     tr:[['unë','dua'],['ti','do'],['ai / ajo','do'],['ne','duam'],['ju','doni'],['ata / Ju','duan / doni']],
     table:[['ich','<b>will</b>'],['du','willst'],['er / sie / es','<b>will</b>'],['wir','wollen'],['ihr','wollt'],['sie / Sie','wollen']],
     tip:'Si te können: <b>ich will</b> dhe <b>er will</b> pa mbaresë!'},
    {t:'Folja në fund! 🔚', d:'Die Satzklammer', p:'<b>wollen</b> në vendin 2, folja tjetër <b>në fund</b>, edhe kur fjalia është e gjatë.',
     ex:[['Alina will in der Natur zeichnen und fotografieren.','Alina do të vizatojë dhe fotografojë në natyrë.'],
       ['In den Ferien will Jakob keinen Kurs machen.','Në pushime Jakobi nuk do të bëjë asnjë kurs.']]},
    {t:'Zgjidhjet: ushtrimi 10', d:'Lösungen Übung 10', ex:[
      ['In den Ferien will Jakob keinen Kurs machen.','Në pushime Jakobi nuk do të bëjë asnjë kurs.'],
      ['In den Semesterferien wollen Jakob und Alina keinen Stress haben.','Në pushimet e semestrit Jakobi dhe Alina nuk duan stres.'],
      ['Alina will in der Natur zeichnen und fotografieren.','Alina do të vizatojë dhe fotografojë në natyrë.'],
      ['Jakob will jeden Tag Fußball spielen.','Jakobi do të luajë futboll çdo ditë.'],
      ['Sie wollen ein bisschen Englisch lernen.','Ju doni të mësoni pak anglisht.'],
      ['Jakob und Alina wollen im Urlaub viel Freizeit haben.','Jakobi dhe Alina duan shumë kohë të lirë në pushime.']]},
    {t:'Zgjidhjet: ushtrimi 11', d:'Lösungen Übung 11', ex:[
      ['Die Pizza schmeckt super. Willst du noch etwas?','Pica është shumë e mirë. Do edhe diçka?'],
      ['Bringst du bitte Struppi in den Flur? – Er will aber nicht.','E çon Struppin në korridor? – Por ai nuk do.'],
      ['Wollen Sie schon gehen?','Doni të shkoni tashmë?'],
      ['Ich will aber noch nicht ins Bett.','Por unë nuk dua të fle ende.'],
      ['Und ihr? Was wollt ihr im Urlaub machen?','Po ju? Çfarë doni të bëni në pushime?'],
      ['Wir wollen im August nach Marokko fahren.','Në gusht duam të shkojmë në Marok.']]},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'Shumë mirë e ke bërë! Vetëm pak gjëra:',
     fix:[
      ['beinen Stress','keinen Stress','kein → keinen (der Stress). Me k!'],
      ['Alina will zeichnen und fotografieren in der Natur.','Alina will in der Natur zeichnen und fotografieren.','Foljet (zeichnen, fotografieren) shkojnë gjithmonë në fund.'],
      ['ein bischen','ein bisschen','bisschen shkruhet me ss.']]},
    {t:'Tabela e wollen 👀', d:'Übung 9 + 11', p:'Te tabela e ushtrimit 9 dy gjëra të vogla:',
     fix:[['ich wil','ich will','will me dy l.'],['du wellst','du willst','willst me i.']],
     tip:'Ushtrimin 11 e ke bërë mirë: Wollen Sie, Was wollt ihr, Wir wollen ✓'}
  ],
  nouns:[['die','Ferien','pushimet'],['der','Urlaub','pushimet (nga puna)'],['der','Stress','stresi'],['die','Natur','natyra'],['der','Sprachkurs','kursi i gjuhës']],
  words:[['wollen','dua (të bëj)'],['zeichnen','vizatoj'],['fotografieren','fotografoj'],['ein bisschen','pak'],['jeden Tag','çdo ditë'],['vielleicht','ndoshta'],['noch nicht','ende jo']],
  items:[
    {type:'match', pairs:[['ich','will'],['du','willst'],['wir','wollen'],['ihr','wollt']]},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'Die Pizza schmeckt super. ___ du noch etwas?', h:'du', o:['Willst','Will','Wollt','Wollen'], a:'Willst', e:'du willst.'},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'Bringst du bitte Struppi in den Flur? – Er ___ aber nicht.', h:'er (qeni)', o:['will','willt','wollt','willst'], a:'will', e:'er will, pa mbaresë.'},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'___ Sie schon gehen?', h:'Sie = Ju', o:['Wollen','Will','Willst','Wollt'], a:'Wollen', e:'Sie wollen.'},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'Ich ___ aber noch nicht ins Bett.', h:'ich', o:['will','wille','willst','wollen'], a:'will', e:'ich will.'},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'Und ihr? Was ___ ihr im Urlaub machen?', h:'ihr', o:['wollt','wollen','willst','will'], a:'wollt', e:'ihr wollt.'},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'Wir ___ im August nach Marokko fahren.', h:'wir', o:['wollen','wollt','will','willst'], a:'wollen', e:'wir wollen.'},
    {type:'gap', psq:'Plotëso wollen', pde:'Ergänze wollen', s:'Tanja ___ dort einen Sprachkurs machen.', h:'ajo', o:['will','wollt','willst','wollen'], a:'will', e:'sie will.'},
    {type:'gap', row:true, psq:'kein apo nicht?', pde:'kein oder nicht?', s:'Jakob und Alina wollen ___ Stress haben.', h:'der Stress', o:['keinen','kein','nicht'], a:'keinen', e:'der Stress → keinen Stress.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Alina do të vizatojë dhe fotografojë në natyrë.',
     o:['Alina will in der Natur zeichnen und fotografieren.','Alina will zeichnen und fotografieren in der Natur.','Alina in der Natur will zeichnen und fotografieren.','Alina will in der Natur zeichnet und fotografiert.'],
     a:'Alina will in der Natur zeichnen und fotografieren.', say:'Alina will in der Natur zeichnen und fotografieren.', e:'Foljet zeichnen und fotografieren në fund.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Jakobi do të luajë futboll çdo ditë.',
     o:['Jakob will jeden Tag Fußball spielen.','Jakob will Fußball spielen jeden Tag.','Jakob wollen jeden Tag Fußball spielen.','Jakob will jeden Tag Fußball spielt.'],
     a:'Jakob will jeden Tag Fußball spielen.', say:'Jakob will jeden Tag Fußball spielen.', e:'will në vendin 2, spielen në fund.'},
    {type:'order', de:'Wir wollen im August nach Marokko fahren.', sq:'Në gusht duam të shkojmë në Marok.'},
    {type:'order', de:'Ich will aber noch nicht ins Bett.', sq:'Por unë nuk dua të fle ende.'},
    {type:'table', topic:'modal', psq:'9 Tabela: wollen', pde:'9 Ergänzen Sie: wollen', th:['','wollen'],
     rows:[['ich','will'],['du','willst'],['er / sie','will'],['wir','wollen'],['ihr','wollt',1],['sie / Sie','wollen',1]], e:'ich will, er will: pa mbaresë.'},
    {type:'order', topic:'satz', psq:'10 Fjali me wollen', pde:'10 Schreiben Sie Sätze', cue:'In den Ferien – keinen Kurs – machen – Jakob', parts:['In den Ferien','will','Jakob','keinen Kurs','machen.'], de:'In den Ferien will Jakob keinen Kurs machen.', sq:'Në pushime Jakobi nuk do të bëjë asnjë kurs.'},
    {type:'order', topic:'satz', psq:'10 Fjali me wollen', pde:'10 Schreiben Sie Sätze', cue:'keinen Stress – haben – in den Semesterferien – Jakob und Alina', parts:['In den Semesterferien','wollen','Jakob und Alina','keinen Stress','haben.'], de:'In den Semesterferien wollen Jakob und Alina keinen Stress haben.', sq:'Në pushimet e semestrit Jakobi dhe Alina nuk duan stres.'},
    {type:'order', topic:'satz', psq:'10 Fjali me wollen', pde:'10 Schreiben Sie Sätze', cue:'zeichnen und fotografieren – Alina – in der Natur', parts:['Alina','will','in der Natur','zeichnen und fotografieren.'], de:'Alina will in der Natur zeichnen und fotografieren.', sq:'Alina do të vizatojë dhe fotografojë në natyrë.'},
    {type:'order', topic:'satz', psq:'10 Fjali me wollen', pde:'10 Schreiben Sie Sätze', cue:'jeden Tag – Fußball spielen – Jakob', parts:['Jakob','will','jeden Tag','Fußball spielen.'], de:'Jakob will jeden Tag Fußball spielen.', sq:'Jakobi do të luajë futboll çdo ditë.'},
    {type:'order', topic:'satz', psq:'10 Fjali me wollen', pde:'10 Schreiben Sie Sätze', cue:'Englisch – ein bisschen – Sie – lernen', parts:['Sie','wollen','ein bisschen','Englisch','lernen.'], de:'Sie wollen ein bisschen Englisch lernen.', sq:'Ju doni të mësoni pak anglisht.'},
    {type:'order', topic:'satz', psq:'10 Fjali me wollen', pde:'10 Schreiben Sie Sätze', cue:'im Urlaub – viel Freizeit – Jakob und Alina – haben', parts:['Jakob und Alina','wollen','im Urlaub','viel Freizeit','haben.'], de:'Jakob und Alina wollen im Urlaub viel Freizeit haben.', sq:'Jakobi dhe Alina duan shumë kohë të lirë në pushime.'},
    {type:'cloze', topic:'modal', psq:'11 Plotëso wollen', pde:'11 Ergänzen Sie wollen',
     text:'A  Die Pizza schmeckt super. [[Willst]] du noch etwas?\nB  Bringst du bitte Struppi in den Flur? – Er [[will]] aber nicht.\nC  [[Wollen]] Sie schon gehen? – Ja, wir stehen morgen früh auf. – Ich [[will]] aber noch nicht ins Bett.\nD  Und ihr? Was [[wollt]] ihr im Urlaub machen? – Wir [[wollen]] im August nach Marokko fahren.',
     e:'du willst, er will, Sie wollen, ich will, ihr wollt, wir wollen.'}
  ]
},

/* ---------- Üb. 13: möchte oder will? ---------- */
{
  id:'hw7-moechte', lek:7, pg:78, emoji:'😤', color:'#D6409F', book:['faqe 78 · ushtrimi 13','S. 78 · Üb. 13'],
  sq:'möchte apo will?', de:'möchten oder wollen?',
  desc:'Vajza e vogël fillon e sjellshme … pastaj nervozohet! 😤',
  tip:'möchte = e butë, e sjellshme 🙂. will = e fortë 😤.',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 78, <b>ushtrimi 13</b>: Rendit fjalitë. Vajza e vogël fillon e sjellshme… pastaj nervozohet! 😤'},
    {t:'möchte 🙂 apo will 😤', d:'möchten oder wollen?', say:0, th:['Deutsch','Shqip',''],
     table:[['Ich möchte fernsehen.','Do të doja të shikoja TV.','🙂 e butë'],['Ich will fernsehen!','Dua të shikoj TV!','😤 e fortë']],
     tip:'Te kamarieri, te mjeku, me njerëz që nuk i njeh → gjithmonë <b>möchte</b>. 😉'},
    {t:'möchten', d:'Das Verb möchten', say:'join', th:['','möchten'],
     tr:[['unë','do të doja'],['ti','do të doje'],['ai / ajo','do të donte'],['ne','do të donim'],['ju','do të donit'],['ata / Ju','do të donin / do të donit']],
     table:[['ich','möchte'],['du','möchtest'],['er / sie / es','möchte'],['wir','möchten'],['ihr','möchtet'],['sie / Sie','möchten']]},
    {t:'Bisedat', d:'Die Gespräche', ex:[
      ['Gehen wir ein bisschen spazieren?','Shkojmë pak shëtitje?'],
      ['Jetzt nicht. Ich möchte gern fernsehen.','Jo tani. Do të doja të shikoja televizor.'],
      ['Nur kurz. Bitte!','Vetëm pak. Të lutem!'],
      ['Nein! Ich will jetzt wirklich fernsehen!','Jo! Dua vërtet të shikoj televizor tani!'],
      ['Kommst du bitte? Wir essen jetzt das Gemüse.','Vjen të lutem? Tani hamë perimet.'],
      ['Ich möchte kein Gemüse essen.','Nuk do të doja të haja perime.'],
      ['Kommst du jetzt? Wir essen!','Vjen tani? Po hamë!'],
      ['Ich will aber kein Gemüse essen!','Por unë nuk dua të ha perime!']]},
    {t:'Bravo, Mimoza! 🌟', d:'Super gemacht!', p:'Këtë ushtrim e ke bërë <b>krejt saktë</b> në libër! Tani ushtroje edhe këtu. 💪'}
  ],
  nouns:[['das','Gemüse','perimet'],['das','Wasser','uji']],
  words:[['fernsehen','shikoj televizor'],['spazieren gehen','shëtis'],['jetzt','tani'],['wirklich','vërtet'],['Nur kurz.','Vetëm pak.'],['bezahlen','paguaj'],['Ich komme sofort.','Vij menjëherë.']],
  items:[
    {type:'match', pairs:[['ich','möchte'],['du','möchtest'],['wir','möchten'],['ihr','möchtet']]},
    {type:'gap', psq:'möchte apo will?', pde:'möchte oder will?', s:'Jetzt nicht. Ich ___ gern fernsehen.', h:'e sjellshme 🙂', o:['möchte','will','möchtest','wollen'], a:'möchte', e:'Hera e parë: e sjellshme → möchte.'},
    {type:'gap', psq:'möchte apo will?', pde:'möchte oder will?', s:'Nein! Ich ___ jetzt wirklich fernsehen!', h:'e fortë 😤', o:['will','möchte','willst','wollt'], a:'will', e:'Hera e dytë: e nervozuar → will.'},
    {type:'gap', psq:'möchte apo will?', pde:'möchte oder will?', s:'Ich ___ kein Gemüse essen.', h:'e sjellshme 🙂 (hera e parë)', o:['möchte','will','möchtest','möchten'], a:'möchte', e:'möchte = e butë.'},
    {type:'gap', psq:'möchte apo will?', pde:'möchte oder will?', s:'Ich ___ aber kein Gemüse essen!', h:'e fortë 😤 (hera e dytë)', o:['will','möchte','willst','wollen'], a:'will', e:'will = e fortë.'},
    {type:'gap', psq:'Në restorant', pde:'Im Restaurant', s:'Guten Tag. Was ___ Sie?', h:'kamarieri, i sjellshëm', o:['möchten','möchte','möchtest','möchtet'], a:'möchten', e:'Sie möchten.'},
    {type:'gap', psq:'Në restorant', pde:'Im Restaurant', s:'Ich ___ gern eine Pizza.', h:'ich', o:['möchte','möchtest','möchten','will'], a:'möchte', e:'Në restorant: ich möchte gern … 🍕'},
    {type:'gap', psq:'Në restorant', pde:'Im Restaurant', s:'___ du ein Wasser?', h:'du', o:['Möchtest','Möchte','Möchten','Möchtet'], a:'Möchtest', e:'du möchtest.'},
    {type:'gap', psq:'Në restorant', pde:'Im Restaurant', s:'Ich ___ bitte bezahlen.', h:'paguaj, me mirësjellje', o:['möchte','möchtest','will','möchten'], a:'möchte', e:'Ich möchte bitte bezahlen. – Ich komme sofort.'},
    {type:'gap', row:true, psq:'kein apo nicht?', pde:'kein oder nicht?', s:'Ich möchte ___ Gemüse essen.', h:'das Gemüse', o:['kein','nicht','keine'], a:'kein', e:'das Gemüse → kein Gemüse.'},
    {type:'mc', psq:'Çfarë përgjigjet vajza?', pde:'Was antwortet das Mädchen?', q:'Gehen wir ein bisschen spazieren?', speakQ:true,
     o:['Jetzt nicht. Ich möchte gern fernsehen.','Ich will aber kein Gemüse essen!','Kommst du jetzt? Wir essen!','Nur kurz. Bitte!'],
     a:'Jetzt nicht. Ich möchte gern fernsehen.', say:'Jetzt nicht. Ich möchte gern fernsehen.', e:'Hera e parë: e sjellshme.'},
    {type:'mc', psq:'Çfarë përgjigjet vajza?', pde:'Was antwortet das Mädchen?', q:'Nur kurz. Bitte!', speakQ:true,
     o:['Nein! Ich will jetzt wirklich fernsehen!','Jetzt nicht. Ich möchte gern fernsehen.','Kommst du jetzt? Wir essen!','Gehen wir ein bisschen spazieren?'],
     a:'Nein! Ich will jetzt wirklich fernsehen!', say:'Nein! Ich will jetzt wirklich fernsehen!', e:'Hera e dytë: e nervozuar 😤.'},
    {type:'mc', psq:'Çfarë përgjigjet vajza?', pde:'Was antwortet das Mädchen?', q:'Kommst du jetzt? Wir essen!', speakQ:true,
     o:['Ich will aber kein Gemüse essen!','Jetzt nicht. Ich möchte gern fernsehen.','Nur kurz. Bitte!','Gehen wir ein bisschen spazieren?'],
     a:'Ich will aber kein Gemüse essen!', say:'Ich will aber kein Gemüse essen!', e:'Biseda b, hera e dytë.'},
    {type:'order', de:'Ich möchte gern fernsehen.', sq:'Do të doja të shikoja televizor.'},
    {type:'order', de:'Nein! Ich will jetzt wirklich fernsehen!', sq:'Jo! Dua vërtet të shikoj televizor tani!'},
    {type:'order', de:'Ich will aber kein Gemüse essen!', sq:'Por unë nuk dua të ha perime!'},
    {type:'order', de:'Guten Tag. Was möchten Sie?', sq:'Mirëdita. Çfarë dëshironi?'}
  ]
},

/* ---------- Üb. 15 (+16): Perfekt mit haben ---------- */
{
  id:'hw7-perfekt', lek:7, pg:79, emoji:'🕰️', color:'#2E86DE', book:['faqe 79 · ushtrimi 15–17','S. 79 · Üb. 15–17'],
  sq:'E kaluara: hat … gemacht', de:'Perfekt mit haben',
  desc:'Gjë e re: si tregon çfarë ke bërë dje! Das hat Spaß gemacht. 🎉',
  tip:'haben në vendin 2, Partizip në fund: Ich habe Deutsch geübt. Shumica: ge…t. Rebelët: ge…en.',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 79, <b>ushtrimi 15</b>: Plotëso me <b>haben</b> dhe foljen. <b>16</b>: Lidh foljen me formën e kaluar.<br>Kjo është gjë e re: <b>e kaluara</b>! 🕰️'},
    {t:'Das hat Spaß gemacht!', d:'Perfekt = e kaluara', p:'Për të treguar çfarë <b>ke bërë</b>, përdor <b>haben</b> + një formë të veçantë të foljes (<b>Partizip</b>) në fund.',
     ex:[['Ich habe Deutsch geübt.','Kam ushtruar gjermanisht.'],['Das hat Spaß gemacht.','Ishte shumë argëtuese.'],['Wir haben Pizza gegessen.','Kemi ngrënë pica.']],
     tip:'Si te können: <b>habe</b> në vendin 2, <b>geübt</b> në fund. 🔚'},
    {t:'haben', d:'Das Verb haben', say:'join', th:['','haben'],
     tr:[['unë','kam'],['ti','ke'],['ai / ajo','ka'],['ne','kemi'],['ju','keni'],['ata / Ju','kanë / keni']],
     table:[['ich','habe'],['du','hast'],['er / sie / es','hat'],['wir','haben'],['ihr','habt'],['sie / Sie','haben']]},
    {t:'ge … t', d:'Regelmäßige Verben', p:'Shumica e foljeve: <b>ge</b> + folja pa -en + <b>t</b>.', say:1, th:['Folja','Partizip','Shqip'],
     table:[['machen','<b>ge</b>mach<b>t</b>','bërë'],['kaufen','<b>ge</b>kauf<b>t</b>','blerë'],['üben','<b>ge</b>üb<b>t</b>','ushtruar'],['lieben','<b>ge</b>lieb<b>t</b>','dashur'],['sagen','<b>ge</b>sag<b>t</b>','thënë'],['kochen','<b>ge</b>koch<b>t</b>','gatuar']],
     tip:'kosten → <b>ge</b>kost<b>et</b> (me -et). frühstücken → <b>ge</b>frühstück<b>t</b>.'},
    {t:'ge … en', d:'Unregelmäßige Verben', p:'Disa folje janë „rebele“: <b>ge</b> + … + <b>en</b>, shpesh me zanore tjetër. Këto mësohen përmendsh. 💪', say:1, th:['Folja','Partizip','Shqip'],
     table:[['essen','<b>ge</b>gess<b>en</b>','ngrënë'],['schreiben','<b>ge</b>schrieb<b>en</b>','shkruar'],['sprechen','<b>ge</b>sproch<b>en</b>','folur'],['finden','<b>ge</b>fund<b>en</b>','gjetur'],
       ['lesen','<b>ge</b>les<b>en</b>','lexuar'],['trinken','<b>ge</b>trunk<b>en</b>','pirë'],['sehen','<b>ge</b>seh<b>en</b>','parë'],['treffen','<b>ge</b>troff<b>en</b>','takuar']]},
    {t:'Zgjidhjet: ushtrimi 15', d:'Lösungen Übung 15', ex:[
      ['Ich habe gestern viel Deutsch geübt.','Dje kam ushtruar shumë gjermanisht.'],
      ['Die Kinder haben schon gegessen.','Fëmijët kanë ngrënë tashmë.'],
      ['Er hat die E-Mail schon geschrieben.','Ai e ka shkruar tashmë email-in.'],
      ['Habt ihr auch in Italien Urlaub gemacht?','A keni bërë edhe ju pushime në Itali?'],
      ['Haben Sie mit Frau Kindl gesprochen?','A keni folur me zonjën Kindl?'],
      ['Elena hat Blumen für Oma gekauft.','Elena ka blerë lule për gjyshen.'],
      ['Wir haben Opa sehr geliebt.','Ne e kemi dashur shumë gjyshin.'],
      ['Hast du dein Buch gefunden?','A e ke gjetur librin tënd?'],
      ['Habt ihr den Text schon gelesen?','A e keni lexuar tashmë tekstin?']]},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'Shumë mirë që e provove, është temë e re! 😊 Disa gjëra të vogla:',
     fix:[
      ['gekauft → taufen','gekauft → kaufen','kaufen = blej. (taufen = pagëzoj 😄)'],
      ['geliebt → liben','geliebt → lieben','lieben shkruhet me ie.'],
      ['gefunden → funden','gefunden → finden','finden = gjej. Te Partizip zanorja ndryshon: i → u.'],
      ['Wir haben Opa sehr liebt.','Wir haben Opa sehr geliebt.','Mos harro ge- në fillim!'],
      ['Hast du dein Buch gelesen?','Hast du dein Buch gefunden?','Çdo fjalë përdoret vetëm një herë. „gelesen“ shkon te teksti.']]},
    {t:'Bravo! 🌟', d:'Selbst korrigiert', p:'Në libër i ke korrigjuar vetë: <b>geliebt</b> ✓ dhe <b>gefunden</b> ✓. Shumë mirë!',
     fix:[['gekauft → taufen','gekauft → kaufen','taufen = pagëzoj 😄'],['gefunden → funden','gefunden → finden','finden = gjej.']]}
  ],
  nouns:[['die','E-Mail','email-i'],['die','Blume','lulja'],['der','Text','teksti'],['das','Buch','libri']],
  words:[['gestern','dje'],['schon','tashmë'],['Das hat Spaß gemacht.','Ishte argëtuese.'],['geübt','ushtruar'],['gegessen','ngrënë'],['geschrieben','shkruar'],
    ['gemacht','bërë'],['gekauft','blerë'],['gefunden','gjetur'],['gelesen','lexuar'],['gesprochen','folur']],
  items:[
    {type:'match', pairs:[['essen','gegessen'],['schreiben','geschrieben'],['finden','gefunden'],['lieben','geliebt'],['kaufen','gekauft']]},
    {type:'match', pairs:[['trinken','getrunken'],['sehen','gesehen'],['treffen','getroffen'],['frühstücken','gefrühstückt'],['wohnen','gewohnt']]},
    {type:'match', pairs:[['kochen','gekocht'],['kosten','gekostet'],['grillen','gegrillt'],['suchen','gesucht'],['leben','gelebt']]},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'Ich ___ gestern viel Deutsch geübt.', h:'ich', o:['habe','hast','hat','haben'], a:'habe', e:'ich habe.'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'Die Kinder ___ schon gegessen.', h:'ata', o:['haben','hat','habt','hast'], a:'haben', e:'sie (ata) haben.'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'Er ___ die E-Mail schon geschrieben.', h:'er', o:['hat','habt','hast','haben'], a:'hat', e:'er hat.'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'___ ihr auch in Italien Urlaub gemacht?', h:'ihr', o:['Habt','Hast','Hat','Haben'], a:'Habt', e:'ihr habt.'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'___ Sie mit Frau Kindl gesprochen?', h:'Sie = Ju', o:['Haben','Habt','Hat','Hast'], a:'Haben', e:'Sie haben.'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'___ du dein Buch gefunden?', h:'du', o:['Hast','Hat','Habt','Haben'], a:'Hast', e:'du hast.'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Elena hat Blumen für Oma ___.', h:'kaufen = blej', o:['gekauft','kauft','gekaufen','kaufen'], a:'gekauft', e:'kaufen → gekauft.'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Wir haben Opa sehr ___.', h:'lieben = dua', o:['geliebt','liebt','gelieben','lieben'], a:'geliebt', e:'lieben → geliebt. Mos harro ge-!'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Hast du dein Buch ___?', h:'finden = gjej', o:['gefunden','gefindet','gefinden','funden'], a:'gefunden', e:'finden → gefunden (i → u).'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Habt ihr den Text schon ___?', h:'lesen = lexoj', o:['gelesen','gelest','geliesen','lesen'], a:'gelesen', e:'lesen → gelesen.'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Die Kinder haben schon ___.', h:'essen = ha', o:['gegessen','geesst','gegesst','essen'], a:'gegessen', e:'essen → gegessen.'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Das hat richtig Spaß ___!', h:'machen = bëj', o:['gemacht','gemachen','macht','machen'], a:'gemacht', e:'machen → gemacht. Das hat Spaß gemacht = ishte argëtuese! 🎉'},
    {type:'mc', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', q:'sprechen', speakQ:true, o:['gesprochen','gesprecht','gesprochent','sprechen'], a:'gesprochen', say:'gesprochen', e:'sprechen → gesprochen (rebele: ge…en).'},
    {type:'mc', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', q:'schreiben', speakQ:true, o:['geschrieben','geschreibt','geschriebt','schreiben'], a:'geschrieben', say:'geschrieben', e:'schreiben → geschrieben (rebele: ge…en).'},
    {type:'order', de:'Ich habe gestern viel Deutsch geübt.', sq:'Dje kam ushtruar shumë gjermanisht.'},
    {type:'order', de:'Er hat die E-Mail schon geschrieben.', sq:'Ai e ka shkruar tashmë email-in.'},
    {type:'order', de:'Habt ihr den Text schon gelesen?', sq:'A e keni lexuar tashmë tekstin?'},
    {type:'order', de:'Elena hat Blumen für Oma gekauft.', sq:'Elena ka blerë lule për gjyshen.'},
    {type:'order', de:'Das hat richtig Spaß gemacht.', sq:'Kjo ishte vërtet argëtuese.'},
    {type:'table', topic:'perfekt', psq:'15 Partizip → folja', pde:'15 Wie heißt das Verb?', th:['Partizip','Folja'],
     rows:[['geübt','üben',1],['gegessen','essen'],['geschrieben','schreiben'],['gemacht','machen'],['gesprochen','sprechen'],['gekauft','kaufen'],['geliebt','lieben'],['gefunden','finden'],['gelesen','lesen']],
     e:'gekauft → kaufen, geliebt → lieben (me ie), gefunden → finden.'},
    {type:'cloze', topic:'perfekt', psq:'15 Plotëso', pde:'15 Ergänzen Sie', bank:['geübt','gegessen','geschrieben','gemacht','gesprochen','gekauft','geliebt','gefunden','gelesen'],
     text:'Ich [[habe]] gestern viel Deutsch [[geübt]].\nDie Kinder [[haben]] schon [[gegessen]].\nEr [[hat]] die E-Mail schon [[geschrieben]].',
     e:'ich habe, sie haben, er hat.'},
    {type:'cloze', topic:'perfekt', psq:'15 Plotëso', pde:'15 Ergänzen Sie', bank:['geübt','gegessen','geschrieben','gemacht','gesprochen','gekauft','geliebt','gefunden','gelesen'],
     text:'[[Habt]] ihr auch in Italien Urlaub [[gemacht]]?\n[[Haben]] Sie mit Frau Kindl [[gesprochen]]?\nElena [[hat]] Blumen für Oma [[gekauft]].',
     e:'ihr habt, Sie haben, sie hat.'},
    {type:'cloze', topic:'perfekt', psq:'15 Plotëso', pde:'15 Ergänzen Sie', bank:['geübt','gegessen','geschrieben','gemacht','gesprochen','gekauft','geliebt','gefunden','gelesen'],
     text:'Wir [[haben]] Opa sehr [[geliebt]].\n[[Hast]] du dein Buch [[gefunden]]?\n[[Habt]] ihr den Text schon [[gelesen]]?',
     e:'wir haben, du hast, ihr habt.'},
    {type:'sort', topic:'perfekt', psq:'17 Dy tabela', pde:'17 Machen Sie zwei Tabellen', cats:['ge … (e)t','ge … en'],
     items:[['gefrühstückt','ge … (e)t'],['gesagt','ge … (e)t'],['gekocht','ge … (e)t'],['geübt','ge … (e)t'],['gelebt','ge … (e)t'],['gekauft','ge … (e)t'],
       ['gekostet','ge … (e)t'],['gegrillt','ge … (e)t'],['gesucht','ge … (e)t'],['gewohnt','ge … (e)t'],
       ['getrunken','ge … en'],['gesehen','ge … en'],['getroffen','ge … en'],['gesprochen','ge … en']],
     e:'Normale → ge…t. Rebele → ge…en: getrunken, gesehen, getroffen, gesprochen.'}
  ]
}
  ]
},

{
  id:'l8', date:'2026-10-22', emoji:'🎯', badge:['TEST të premten','Test am Freitag'],
  sq:'Përgatitja për testin', de:'Testvorbereitung · alles bis jetzt',
  parts:[

/* ---------- Übung: alles wiederholen ---------- */
{
  id:'hw8-uebung', emoji:'💪', color:'#0E9F8E', book:['ushtrim · 15 pyetje','Übung · 15 Fragen'], clocks:true, n:15,
  writeWords:true, mix:{vocab:5, write:2},
  sq:'Ushtrimi për testin', de:'Übung für den Test',
  desc:'Ora, porosia, foljet, e kaluara dhe banesa: përsërit gjithçka para testit!',
  tip:'der → einen, das → ein, die → eine. Folja në vendin 2, Partizip në fund. 15:30 = fünfzehn Uhr dreißig = halb vier.',
  lesson:[
    {t:'Testi po vjen! 📝', d:'Bald ist der Test', p:'Sot përsërisim <b>gjithçka</b>: nga ora deri te porosia në restorant. Ushtro këtu, pastaj bëj <b>testin e provës</b>.<br>Për ta kaluar të duhen <b>80%</b>. Ti mundesh! 💪',
     tip:'Në test ke vetëm <b>një provë</b> për çdo pyetje dhe nuk ka 💡 ndihmë. Këtu në ushtrim po!'},
    {t:'Numrat 13 deri 45', d:'Die Zahlen', p:'Kujdes: <b>sechzehn</b> (jo sechszehn) dhe <b>siebzehn</b> (jo siebenzehn).', say:1, th:['','Gjermanisht'],
     table:[['13','dreizehn'],['14','vierzehn'],['15','fünfzehn'],['16','sechzehn'],['17','siebzehn'],['18','achtzehn'],['19','neunzehn'],['20','zwanzig'],['30','dreißig'],['45','fünfundvierzig']],
     tip:'45 = fünf<b>und</b>vierzig: gjermanishtja thotë së pari <b>5</b>, pastaj <b>40</b>!'},
    {t:'Ora zyrtare', d:'Die offizielle Uhrzeit', p:'Në tren, në radio ose në punë ora thuhet me numrat <b>0 deri 24</b>: ora + <b>Uhr</b> + minutat.', say:1, th:['','Gjermanisht'],
     table:[['7:00','sieben Uhr'],['8:15','acht Uhr fünfzehn'],['13:30','dreizehn Uhr dreißig'],['15:30','fünfzehn Uhr dreißig'],['20:45','zwanzig Uhr fünfundvierzig']],
     tip:'15:30 = <b>fünfzehn Uhr dreißig</b> = <b>halb vier</b>. Të dyja janë të sakta!'},
    {t:'Ora në bisedë', d:'Die Uhrzeit im Alltag', clocks:[[8,15,'Viertel nach acht'],[8,30,'halb neun'],[8,45,'Viertel vor neun'],[3,30,'halb vier']],
     tip:'halb + ora <b>TJETËR</b>: 8:30 = halb neun.'},
    {t:'Koha në fillim', d:'Zeit zuerst, Verb auf Platz 2', p:'Kur fjalia fillon me kohën, folja mbetet <b>e dyta</b>. Folja <b>aufstehen</b> (ngrihem) ndahet: <b>stehe</b> … <b>auf</b>.',
     ex:[['Um fünfzehn Uhr dreißig stehe ich auf.','Në orën 15:30 ngrihem. 😄'],['Ich stehe um sieben Uhr auf.','Ngrihem në orën shtatë.'],['Am Montag geht Hans Hula-Hoop üben.','Të hënën Hansi shkon të ushtrojë hula hoop.']],
     tip:'<b>am</b> + ditë, <b>um</b> + orë. <b>geht</b> në vendin 2, <b>üben</b> në fund, si te können!'},
    {t:'Porosia', d:'Bestellen', p:'Me <b>nehmen</b>, <b>möchten</b> dhe <b>hätte gern</b> ndryshon vetëm <b>der</b>: ein → <b>einen</b>.', say:2, th:['','Nyja','Porosia'],
     tr:[['','molla','Do të doja një mollë.'],['','kafeja','Do të doja një kafe.'],['','portokalli','Marr një portokall.'],['','buka','Marr një bukë.'],['','uji','Për të pirë një ujë, ju lutem.']],
     table:[['der','der Apfel','Ich möchte <b>einen</b> Apfel.'],['der','der Kaffee','Ich hätte gern <b>einen</b> Kaffee.'],['die','die Orange','Ich nehme <b>eine</b> Orange.'],['das','das Brot','Ich nehme <b>ein</b> Brot.'],['das','das Wasser','Zu trinken <b>ein</b> Wasser, bitte.']],
     ex:[['Ich nehme ein Brot und zu trinken ein Wasser.','Marr një bukë dhe për të pirë një ujë.']],
     tip:'das Brot → <b>ein</b> Brot (jo „eine Brot“!).'},
    {t:'mögen = më pëlqen', d:'Das Verb mögen', say:'join', th:['','mögen'],
     tr:[['unë','më pëlqen'],['ti','të pëlqen'],['ai / ajo','i pëlqen'],['ne','na pëlqen'],['ju','ju pëlqen'],['ata / Ju','u pëlqen / ju pëlqen']],
     table:[['ich','<b>mag</b>'],['du','magst'],['er / sie / es','<b>mag</b>'],['wir','mögen'],['ihr','mögt'],['sie / Sie','mögen']],
     ex:[['Ich mag Kaffee.','Më pëlqen kafeja.'],['Magst du Orangen?','A të pëlqejnë portokallet?'],['Ich liebe dich!','Të dua! ❤️']],
     tip:'Si te können: <b>ich mag</b> dhe <b>er mag</b> pa mbaresë!'},
    {t:'Folje të rëndësishme', d:'Wichtige Verben', th:['Folja','er / sie','Shqip'],
     tr:[['','ai ha'],['','ai fle'],['','ai pi'],['','ai luan'],['','ai shkon'],['','ai vrapon'],['','ai ecën'],['','ai ushtron']],
     table:[['essen','<b>isst</b>','ha'],['schlafen','<b>schläft</b>','fle'],['trinken','trinkt','pi'],['spielen','spielt','luaj'],['gehen','geht','shkoj (në këmbë)'],['rennen','rennt','vrapoj'],['wandern','wandert','eci në natyrë'],['üben','übt','ushtroj']],
     ex:[['Lara wandert zum Bahnhof.','Lara ecën deri te stacioni i trenit.']],
     tip:'Rebelët: essen → <b>isst</b>, schlafen → <b>schläft</b>.'},
    {t:'E kaluara', d:'Das Perfekt', p:'<b>haben</b> në vendin 2, Partizip <b>në fund</b>.', say:1, th:['Folja','Partizip','Shqip'],
     table:[['essen','<b>ge</b>gess<b>en</b>','ngrënë'],['schlafen','<b>ge</b>schlaf<b>en</b>','fjetur'],['trinken','<b>ge</b>trunk<b>en</b>','pirë'],['spielen','<b>ge</b>spiel<b>t</b>','luajtur'],['üben','<b>ge</b>üb<b>t</b>','ushtruar'],['lieben','<b>ge</b>lieb<b>t</b>','dashur']],
     ex:[['Ich habe gut geschlafen.','Kam fjetur mirë.'],['Wir haben Fußball gespielt.','Kemi luajtur futboll.']],
     tip:'ge…t = foljet normale. ge…en = rebelët, këto mësohen përmendsh.'},
    {t:'Banesa ime', d:'Meine Wohnung', th:['Gjermanisht','Shqip'],
     table:[['das Zimmer','dhoma'],['das Regal','rafti'],['der Schrank','dollapi'],['der Teppich','qilimi'],['der Arbeitstisch','tavolina e punës'],['der Tisch','tavolina'],['der Stuhl','karrigia'],['das Sofa','divani'],['das Bett','shtrati'],['die Waschmaschine','lavatriçja']],
     tip:'das Zimmer → die Zimmer: shumësi është njësoj!'},
    {t:'Përshkruaj banesën', d:'Die Wohnung beschreiben',
     ex:[['Hans wohnt in einer 3,5-Zimmer-Wohnung.','Hansi banon në një banesë me 3,5 dhoma.'],['Die kleine Wohnung ist möbliert.','Banesa e vogël është e mobiluar.'],['Meine Wohnung hat ein Sofa.','Banesa ime ka një divan.'],['Im Zimmer gibt es einen Teppich.','Në dhomë ka një qilim.']],
     tip:'<b>möbliert</b> = me mobilje (die Möbel).'},
    {t:'Kujdes nga kurthet! 👀', d:'Achtung, Fallen!', p:'Këto gabime bëhen shpesh në test. Lexoji një herë me kujdes:',
     fix:[
      ['eine Brot','ein Brot','das Brot → ein, pa -e.'],
      ['sechszehn / siebenzehn','sechzehn / siebzehn','Te 16 dhe 17 bie një copë e fjalës.'],
      ['15:30 = halb drei','15:30 = halb vier','halb + ora TJETËR.'],
      ['Am sieben Uhr','Um sieben Uhr','um + orë, am + ditë.'],
      ['Ich aufstehe um sieben Uhr.','Ich stehe um sieben Uhr auf.','aufstehen ndahet: stehe … auf.'],
      ['Am Montag Hans geht Hula-Hoop üben.','Am Montag geht Hans Hula-Hoop üben.','Folja është gjithmonë e dyta.'],
      ['geschlaft / gespielen','geschlafen / gespielt','schlafen → ge…en (rebele), spielen → ge…t.'],
      ['Ich mage Kaffee.','Ich mag Kaffee.','ich mag, pa mbaresë.']]}
  ],
  nouns:[['der','Apfel','molla'],['die','Orange','portokalli'],['das','Brot','buka'],['das','Wasser','uji'],['der','Kaffee','kafeja'],
    ['das','Zimmer','dhoma'],['das','Regal','rafti'],['der','Schrank','dollapi'],['der','Teppich','qilimi'],['der','Arbeitstisch','tavolina e punës'],
    ['der','Tisch','tavolina'],['der','Stuhl','karrigia'],['das','Sofa','divani'],['das','Bett','shtrati'],['die','Waschmaschine','lavatriçja'],
    ['die','Wohnung','banesa'],['das','Foto','fotoja'],['der','Bahnhof','stacioni i trenit'],
    ['die','Küche','kuzhina'],['das','Bad','banjoja'],['das','Wohnzimmer','dhoma e ndenjjes'],['das','Schlafzimmer','dhoma e gjumit'],['die','Lampe','llamba'],
    ['der','Fernseher','televizori'],['das','Brötchen','simitja'],['das','Ei','veza'],['die','Milch','qumështi'],['die','Rechnung','llogaria']],
  words:[['essen','ha'],['schlafen','fle'],['spielen','luaj'],['lieben','dua (dashuroj)'],['mögen','më pëlqen'],['trinken','pi'],['gehen','shkoj'],
    ['rennen','vrapoj'],['üben','ushtroj'],['wandern','eci në natyrë'],['aufstehen','ngrihem'],['möbliert','e mobiluar'],
    ['gegessen','ngrënë'],['geschlafen','fjetur'],['gespielt','luajtur'],['fünfzehn','pesëmbëdhjetë'],['dreißig','tridhjetë'],['zwanzig','njëzet'],
    ['nehmen','marr'],['kaufen','blej'],['können','di, mund'],['wollen','dua (të bëj)'],['heute','sot'],['morgen','nesër'],['gestern','dje'],['jetzt','tani']],
  items:[
    /* Uhrzeit */
    {type:'match', pairs:[['dreizehn','13'],['fünfzehn','15'],['zwanzig','20'],['dreißig','30'],['fünfundvierzig','45']]},
    {type:'match', pairs:[['15:30','fünfzehn Uhr dreißig'],['20:15','zwanzig Uhr fünfzehn'],['7:45','sieben Uhr fünfundvierzig'],['13:00','dreizehn Uhr'],['18:30','achtzehn Uhr dreißig']]},
    {type:'mc', psq:'Ora zyrtare', pde:'Die offizielle Uhrzeit', q:'15:30', o:['fünfzehn Uhr dreißig','fünf Uhr dreißig','fünfzehn Uhr dreizehn','dreißig Uhr fünfzehn'], a:'fünfzehn Uhr dreißig', say:'Es ist fünfzehn Uhr dreißig.', e:'15 = fünfzehn, 30 = dreißig: ora + Uhr + minutat.'},
    {type:'mc', psq:'Ora zyrtare', pde:'Die offizielle Uhrzeit', q:'7:45', o:['sieben Uhr fünfundvierzig','sieben Uhr vierundfünfzig','siebzehn Uhr fünfundvierzig','acht Uhr fünfundvierzig'], a:'sieben Uhr fünfundvierzig', say:'Es ist sieben Uhr fünfundvierzig.', e:'45 = fünfundvierzig (5 + 40).'},
    {type:'mc', psq:'Sa është ora?', pde:'Wie spät ist es?', q:'Es ist zwanzig Uhr fünfzehn.', speakQ:true, o:['20:15','12:15','20:50','2:15'], a:'20:15', say:'Es ist zwanzig Uhr fünfzehn.', e:'zwanzig = 20, fünfzehn = 15.'},
    {type:'mc', psq:'Sa është ora?', pde:'Wie spät ist es?', q:'Es ist dreizehn Uhr dreißig.', speakQ:true, o:['13:30','3:30','13:13','12:30'], a:'13:30', say:'Es ist dreizehn Uhr dreißig.', e:'dreizehn = 13, dreißig = 30.'},
    {type:'mc', psq:'Dy mënyra', pde:'Zwei Möglichkeiten', q:'fünfzehn Uhr dreißig = …', o:['halb vier','halb drei','Viertel nach drei','drei Uhr'], a:'halb vier', say:'Es ist halb vier.', e:'15:30 = 3:30 pasdite → halb vier (halb + ora tjetër!).'},
    {type:'mc', psq:'Kujdes kurthin!', pde:'Achtung, Falle!', q:'6:30', o:['halb sieben','halb sechs','sechs halb','Viertel nach sechs'], a:'halb sieben', say:'Es ist halb sieben.', e:'halb + ora tjetër: 6:30 = halb sieben.'},
    {type:'gap', s:'Ich stehe ___ sieben Uhr auf.', h:'në orën shtatë', o:['um','am','in'], a:'um', row:true, e:'Orë → um.'},
    {type:'gap', s:'Um fünfzehn Uhr dreißig ___ ich auf.', h:'aufstehen = ngrihem', o:['stehe','stehst','steht','aufstehe'], a:'stehe', e:'ich stehe … auf. „auf“ shkon në fund.'},
    {type:'gap', s:'Ich stehe um sieben Uhr ___.', h:'aufstehen', o:['auf','an','um'], a:'auf', row:true, e:'aufstehen ndahet: ich stehe … auf.'},
    {type:'gap', s:'___ Montag geht Hans Hula-Hoop üben.', h:'ditë', o:['Am','Um','Im'], a:'Am', row:true, e:'Ditë → am.'},
    {type:'gap', s:'Am Montag ___ Hans Hula-Hoop üben.', h:'gehen; folja e dyta', o:['geht','gehe','gehen','gehst'], a:'geht', e:'Am Montag (1) geht (2) Hans (3) … üben (në fund).'},
    {type:'gap', s:'___ stehst du auf? Um sieben Uhr.', h:'pyet për kohën', o:['Wann','Wo','Wer','Was'], a:'Wann', e:'Kohë → Wann.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Të hënën Hansi shkon të ushtrojë hula hoop.',
     o:['Am Montag geht Hans Hula-Hoop üben.','Am Montag Hans geht Hula-Hoop üben.','Am Montag geht Hans üben Hula-Hoop.','Um Montag geht Hans Hula-Hoop üben.'],
     a:'Am Montag geht Hans Hula-Hoop üben.', say:'Am Montag geht Hans Hula-Hoop üben.', e:'Koha (1), folja (2), subjekti (3), üben në fund.'},
    {type:'order', de:'Um fünfzehn Uhr dreißig stehe ich auf.', sq:'Në orën 15:30 ngrihem.'},
    {type:'order', de:'Am Montag geht Hans Hula-Hoop üben.', sq:'Të hënën Hansi shkon të ushtrojë hula hoop.'},
    {type:'order', de:'Der Bus kommt um acht Uhr fünfzehn.', sq:'Autobusi vjen në orën 8:15.'},

    /* Bestellen */
    {type:'match', pairs:[['der Apfel','molla'],['die Orange','portokalli'],['das Brot','buka'],['das Wasser','uji'],['der Kaffee','kafeja']]},
    {type:'gap', psq:'Porosia', pde:'Bestellen', s:'Ich nehme ___ Brot.', h:'das Brot', o:['ein','eine','einen'], a:'ein', row:true, e:'das Brot → ein Brot.'},
    {type:'gap', psq:'Porosia', pde:'Bestellen', s:'Und zu trinken ___ Wasser, bitte.', h:'das Wasser', o:['ein','eine','einen'], a:'ein', row:true, e:'das Wasser → ein Wasser.'},
    {type:'gap', psq:'Porosia', pde:'Bestellen', s:'Ich möchte ___ Apfel.', h:'der Apfel', o:['ein','eine','einen'], a:'einen', row:true, e:'der + objekt → einen.'},
    {type:'gap', psq:'Porosia', pde:'Bestellen', s:'Ich nehme ___ Orange.', h:'die Orange', o:['ein','eine','einen'], a:'eine', row:true, e:'die nuk ndryshon → eine.'},
    {type:'gap', psq:'Porosia', pde:'Bestellen', s:'Ich hätte gern ___ Kaffee.', h:'der Kaffee', o:['ein','eine','einen'], a:'einen', row:true, e:'der Kaffee → einen Kaffee.'},
    {type:'gap', psq:'Në restorant', pde:'Im Restaurant', s:'Was ___ du?', h:'nehmen = marr', o:['nimmst','nehmst','nimmt','nehmt'], a:'nimmst', e:'du nimmst (e → i).'},
    {type:'gap', psq:'Në restorant', pde:'Im Restaurant', s:'Was ___ Sie trinken?', h:'möchten; Sie = Ju', o:['möchten','möchtest','möchte','möchtet'], a:'möchten', e:'Sie möchten.'},
    {type:'mc', psq:'Si thuhet gjermanisht?', pde:'Wie sagt man das?', q:'Marr një bukë dhe për të pirë një ujë.',
     o:['Ich nehme ein Brot und zu trinken ein Wasser.','Ich nehme eine Brot und zu trinken ein Wasser.','Ich nehme ein Brot und zu trinken einen Wasser.','Ich nehmen ein Brot und zu trinken ein Wasser.'],
     a:'Ich nehme ein Brot und zu trinken ein Wasser.', say:'Ich nehme ein Brot und zu trinken ein Wasser.', e:'das Brot → ein Brot, das Wasser → ein Wasser.'},
    {type:'mc', psq:'Në restorant', pde:'Im Restaurant', q:'Was möchten Sie?', speakQ:true, h:'Kamarieri pyet. Ti do një kafe.',
     o:['Ich hätte gern einen Kaffee.','Die Rechnung, bitte.','Guten Appetit!','Ich bin Kaffee.'],
     a:'Ich hätte gern einen Kaffee.', say:'Ich hätte gern einen Kaffee.', e:'Ich hätte gern … = do të doja …'},
    {type:'order', de:'Ich nehme ein Brot und zu trinken ein Wasser.', sq:'Marr një bukë dhe për të pirë një ujë.'},
    {type:'order', de:'Ich möchte einen Apfel und eine Orange.', sq:'Dëshiroj një mollë dhe një portokall.'},

    /* Verben */
    {type:'match', pairs:[['essen','ha'],['schlafen','fle'],['trinken','pi'],['rennen','vrapoj'],['üben','ushtroj']]},
    {type:'match', pairs:[['lieben','dua (dashuroj)'],['mögen','më pëlqen'],['spielen','luaj'],['gehen','shkoj'],['wandern','eci në natyrë']]},
    {type:'match', pairs:[['ich','mag'],['du','magst'],['wir','mögen'],['ihr','mögt']]},
    {type:'gap', psq:'Folja mögen', pde:'Das Verb mögen', s:'Ich ___ Kaffee.', h:'mögen = më pëlqen', o:['mag','magst','mögen','möge'], a:'mag', e:'ich mag, pa mbaresë (si ich kann).'},
    {type:'gap', psq:'Folja mögen', pde:'Das Verb mögen', s:'___ du Orangen?', h:'mögen', o:['Magst','Mag','Mögt','Mögen'], a:'Magst', e:'du magst.'},
    {type:'gap', psq:'Folja mögen', pde:'Das Verb mögen', s:'Wir ___ Pizza.', h:'mögen', o:['mögen','mögt','mag','magst'], a:'mögen', e:'wir mögen.'},
    {type:'gap', s:'Lara ___ zum Bahnhof.', h:'wandern', o:['wandert','wandere','wanderst','wandern'], a:'wandert', e:'sie wandert.'},
    {type:'gap', s:'Du ___ sehr schnell!', h:'rennen = vrapoj', o:['rennst','rennt','renne','rennen'], a:'rennst', e:'du rennst.'},
    {type:'gap', s:'Das Kind ___ viel.', h:'schlafen', o:['schläft','schlaft','schläfst','schlafe'], a:'schläft', e:'es schläft (a → ä).'},
    {type:'gap', s:'Er ___ einen Apfel.', h:'essen', o:['isst','esst','esse','essen'], a:'isst', e:'er isst (e → i).'},
    {type:'gap', s:'Ich ___ dich!', h:'lieben', o:['liebe','liebst','liebt','lieben'], a:'liebe', e:'ich liebe. ❤️'},
    {type:'gap', s:'Was ___ du gern?', h:'trinken', o:['trinkst','trinkt','trinke','trinken'], a:'trinkst', e:'du trinkst.'},
    {type:'gap', s:'Hans ___ gut Hula-Hoop.', h:'können', o:['kann','kannst','können','könnt'], a:'kann', e:'er kann, pa mbaresë.'},
    {type:'gap', s:'Wir ___ am Samstag wandern.', h:'wollen', o:['wollen','wollt','will','willst'], a:'wollen', e:'wir wollen.'},
    {type:'mc', row:true, psq:'Ja, Nein apo Doch?', pde:'Ja, Nein oder Doch?', q:'Magst du keinen Kaffee?', h:'Do të thuash: Po, më pëlqen.', o:['Ja','Nein','Doch'], a:'Doch', say:'Doch, ich mag Kaffee.', e:'Pyetja ka kein dhe ti thua PO → Doch.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Lara ecën deri te stacioni i trenit.',
     o:['Lara wandert zum Bahnhof.','Lara wandern zum Bahnhof.','Lara zum Bahnhof wandert.','Lara wanderst zum Bahnhof.'],
     a:'Lara wandert zum Bahnhof.', say:'Lara wandert zum Bahnhof.', e:'sie wandert, folja në vendin 2.'},
    {type:'order', de:'Lara wandert zum Bahnhof.', sq:'Lara ecën deri te stacioni i trenit.'},
    {type:'order', de:'Magst du Orangen?', sq:'A të pëlqejnë portokallet?'},

    /* Perfekt */
    {type:'match', pairs:[['essen','gegessen'],['schlafen','geschlafen'],['spielen','gespielt'],['trinken','getrunken'],['üben','geübt']]},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Ich habe gut ___.', h:'schlafen', o:['geschlafen','geschlaft','geschläft','schlafen'], a:'geschlafen', e:'schlafen → geschlafen (ge…en).'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Wir haben Fußball ___.', h:'spielen', o:['gespielt','gespielen','spielt','gespiel'], a:'gespielt', e:'spielen → gespielt (ge…t).'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Hast du schon ___?', h:'essen', o:['gegessen','geesst','gegesst','gessen'], a:'gegessen', e:'essen → gegessen.'},
    {type:'gap', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', s:'Hans hat Hula-Hoop ___.', h:'üben', o:['geübt','geüben','übt','geübst'], a:'geübt', e:'üben → geübt (ge…t).'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'Ich ___ Pizza gegessen.', h:'ich', o:['habe','hat','hast','haben'], a:'habe', e:'ich habe … gegessen.'},
    {type:'gap', psq:'Plotëso haben', pde:'Ergänze haben', s:'Lara ___ viel Wasser getrunken.', h:'ajo', o:['hat','habe','hast','haben'], a:'hat', e:'sie hat … getrunken.'},
    {type:'mc', psq:'Si është e kaluara?', pde:'Wie heißt das Partizip?', q:'trinken', speakQ:true, o:['getrunken','getrinkt','getrinken','getrunkt'], a:'getrunken', say:'getrunken', e:'trinken → getrunken (rebele: i → u).'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Kam ngrënë një mollë.',
     o:['Ich habe einen Apfel gegessen.','Ich habe gegessen einen Apfel.','Ich bin einen Apfel gegessen.','Ich habe einen Apfel essen.'],
     a:'Ich habe einen Apfel gegessen.', say:'Ich habe einen Apfel gegessen.', e:'habe në vendin 2, gegessen në fund.'},
    {type:'order', de:'Ich habe gut geschlafen.', sq:'Kam fjetur mirë.'},
    {type:'order', de:'Wir haben Fußball gespielt.', sq:'Kemi luajtur futboll.'},
    {type:'order', de:'Hast du schon gegessen?', sq:'A ke ngrënë tashmë?'},

    /* Wohnung */
    {type:'match', pairs:[['das Regal','rafti'],['der Schrank','dollapi'],['der Teppich','qilimi'],['der Arbeitstisch','tavolina e punës'],['die Waschmaschine','lavatriçja']]},
    {type:'match', pairs:[['das Zimmer','dhoma'],['das Sofa','divani'],['das Bett','shtrati'],['der Stuhl','karrigia'],['der Tisch','tavolina']]},
    {type:'gap', psq:'Përshkruaj banesën', pde:'Die Wohnung beschreiben', s:'Meine Wohnung ___ ein Sofa.', h:'haben', o:['hat','habe','hast','ist'], a:'hat', e:'die Wohnung = sie → hat.'},
    {type:'gap', psq:'Përshkruaj banesën', pde:'Die Wohnung beschreiben', s:'Die kleine Wohnung ist ___.', h:'me mobilje', o:['möbliert','Möbel','möbeliert','möblieren'], a:'möbliert', e:'möbliert = e mobiluar.'},
    {type:'gap', psq:'Përshkruaj banesën', pde:'Die Wohnung beschreiben', s:'Die Wohnung hat drei ___.', h:'dhoma (shumës)', o:['Zimmer','Zimmers','Zimmern'], a:'Zimmer', row:true, e:'das Zimmer → die Zimmer: shumësi njësoj!'},
    {type:'gap', psq:'Përshkruaj banesën', pde:'Die Wohnung beschreiben', s:'Im Zimmer gibt es ___ Teppich.', h:'der Teppich', o:['ein','eine','einen'], a:'einen', row:true, e:'es gibt + der → einen.'},
    {type:'gap', psq:'Përshkruaj banesën', pde:'Die Wohnung beschreiben', s:'Meine Wohnung hat ___ Regal.', h:'das Regal', o:['ein','eine','einen'], a:'ein', row:true, e:'das Regal → ein Regal.'},
    {type:'gap', psq:'Përshkruaj banesën', pde:'Die Wohnung beschreiben', s:'Ich habe ___ Arbeitstisch.', h:'der Arbeitstisch, mohim', o:['kein','keine','keinen'], a:'keinen', row:true, e:'der + mohim → keinen.'},
    {type:'gap', s:'___ Waschmaschine ist neu.', h:'die Waschmaschine', o:['Der','Die','Das'], a:'Die', row:true, e:'die Waschmaschine.'},
    {type:'mc', row:true, psq:'Zëvendëso me përemër', pde:'Ersetze durch ein Pronomen', q:'Der Schrank ist alt. → ___ ist alt.', o:['Er','Sie','Es'], a:'Er', e:'der → er.'},
    {type:'mc', psq:'Cila fjali është e saktë?', pde:'Welcher Satz ist richtig?', q:'Banesa ime ka një divan.',
     o:['Meine Wohnung hat ein Sofa.','Meine Wohnung hat einen Sofa.','Meine Wohnung ist ein Sofa.','Mein Wohnung hat ein Sofa.'],
     a:'Meine Wohnung hat ein Sofa.', say:'Meine Wohnung hat ein Sofa.', e:'die Wohnung → meine Wohnung. das Sofa → ein Sofa.'},
    {type:'mc', psq:'Çfarë do të thotë?', pde:'Was bedeutet das?', q:'Hans wohnt in einer 3,5-Zimmer-Wohnung.', speakQ:true,
     o:['Hansi banon në një banesë me 3,5 dhoma.','Hansi ka 3,5 banesa.','Hansi banon në dhomën 3,5.','Hansi kërkon një banesë me 3,5 dhoma.'],
     a:'Hansi banon në një banesë me 3,5 dhoma.', say:'Hans wohnt in einer 3,5-Zimmer-Wohnung.', e:'3,5-Zimmer-Wohnung = banesë me 3,5 dhoma.'},
    {type:'order', de:'Hans wohnt in einer 3,5-Zimmer-Wohnung.', sq:'Hansi banon në një banesë me 3,5 dhoma.'},
    {type:'order', de:'Die kleine Wohnung ist möbliert.', sq:'Banesa e vogël është e mobiluar.'},
    {type:'order', de:'Meine Wohnung hat ein Sofa.', sq:'Banesa ime ka një divan.'}
  ]
},

/* ---------- Probetest: 20 Fragen, 80 % ---------- */
{
  id:'hw8-test', emoji:'🎓', color:'#E3A008', book:['test · 20 pyetje · 80%','Test · 20 Fragen · 80 %'],
  test:true, pass:80, n:20, from:'hw8-uebung', mix:{vocab:8, write:3, order:3},
  sq:'Testi i provës', de:'Der Probetest',
  desc:'20 pyetje nga gjithçka që ke mësuar. Për ta kaluar të duhen 80%. Vetëm një provë për pyetje, pa 💡. Ti mundesh! 💪',
  tip:'Lexo me kujdes dhe merr frymë thellë!',
  lesson:[], nouns:[], words:[], items:[]
}
  ]
},

/* =====================================================================
   📖 Arbeitsbuch: Buchseiten als Übungen in der Reihenfolge des Buchs.
   lek/pg = Lektion und Seite: so erscheinen sie unter „Kapitujt“ bei ihrer Lektion.
   shelf:true = nicht die aktuelle Hausaufgabe, eigener Block unter Kapitujt.
   seq:true   = Fragen in Buch-Reihenfolge, nicht gemischt.
   Aufgabenarten wie im Buch:
     cloze  { text:'Ich [[bin|b]] …', bank?:[] }  [[Antwort|Anfang]], Varianten mit ;
     table  { th:[], rows:[[Person, Form, gegeben?]] }
     letters{ s:'… ___ …', a:'Wetter', mix:'tetWer' }  Buchstabensalat
     sort   { cats:['im','am'], items:[[Wort, Kategorie]] }
     order  { de, sq, parts:[…], cue:'a – b – c' }   Satz aus Bausteinen
   ===================================================================== */
{
  id:'book', shelf:true, icon:'📖', date:'2026-10-22', added:'2026-10-22T19:10',
  sq:'Fletorja e ushtrimeve', de:'Arbeitsbuch · Test L1, S. 21–65',
  parts:[

/* ---------- Test Lektion 1 ---------- */
{
  id:'bk-test1', lek:1, pg:13, emoji:'🙋‍♀️', color:'#F2545B', seq:true, book:['Testi i mësimit 1','Test Lektion 1'],
  sq:'Testi i mësimit 1', de:'Test Lektion 1',
  desc:'të dhënat e Alinës, fjalët pyetëse dhe bisedat me heißen, kommen, sprechen.',
  tip:'Wer = kush (njeri), Was = çfarë, Wie = si, Woher = nga. du sprichst, er spricht.',
  lesson:[
    {t:'Testi i mësimit 1 📖', d:'Test Lektion 1', p:'Këtu i bën ushtrimet <b>si në libër</b>: shkruan vetë fjalët në vijat bosh. 2, 3, 4a dhe 4b.',
     tip:'Te fushat me shkronjën e parë (b…) shkruaj <b>gjithë fjalën</b>: b… → <b>bin</b>.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', psq:'2 Rendit', pde:'2 Ordnen Sie zu', pairs:[['Alina','Vorname'],['Egger','Familienname'],['Bändelgasse','Straße'],['1','Hausnummer'],['4057','Postleitzahl']]},
    {type:'match', psq:'2 Rendit', pde:'2 Ordnen Sie zu', pairs:[['Basel','Stadt'],['Schweiz','Land'],['+41 61 822 94 33','Telefon'],['alina@egger.ch','E-Mail']]},
    {type:'cloze', topic:'wfragen', psq:'3 Plotëso', pde:'3 Ergänzen Sie',
     text:'[[Wie]] heißen Sie? – Alina Egger.\n[[Woher]] kommen Sie? – Aus der Schweiz.\nUnd [[was]] sprechen Sie? – Deutsch und Italienisch.\n[[Wer]] ist das? – Das ist Dario Egger.',
     e:'Gjuhët → was. Njeri → wer.'},
    {type:'cloze', topic:'verben', psq:'4a Plotëso', pde:'4a Ergänzen Sie',
     text:'Hallo. Ich [[bin|b]] Mercy. Wie [[heißt|h]] du?\n– Ich [[heiße|h]] Kim und [[komme|k]] aus China.\n– Du [[sprichst|s]] gut Deutsch.\n– Nein, nur ein bisschen. Ich [[spreche|s]] gut Englisch.',
     e:'du sprichst (e → i). heißen: ich heiße, du heißt.'},
    {type:'cloze', topic:'verben', psq:'4b Plotëso', pde:'4b Ergänzen Sie',
     text:'Guten Morgen. Mein Name [[ist|i]] Hinata Numajiri.\n– Entschuldigung, wie [[heißen|h]] Sie?\n– Hinata Numajiri.\n– Ah, ja. Guten Morgen, Herr Numajiri. Ich [[bin|b]] John Winterfield und das [[ist|i]] Frau Bianchi.',
     e:'Sie heißen. ich bin, das ist.'}
  ]
},

/* ---------- AB Lektion 2, S. 21 ---------- */
{
  id:'bk-s21', lek:2, pg:21, emoji:'👨‍👩‍👧', color:'#D6409F', seq:true, book:['faqe 21 · ushtrimi 10–14','S. 21 · Üb. 10–14'],
  sq:'mein, dein, Ihr', de:'Seite 21: Familie',
  desc:'kryqëzo, plotëso dhe shkruaj pyetje me mein, dein, Ihr dhe bin, ist, sind.',
  tip:'der/das → mein, dein, Ihr. die/shumës → meine, deine, Ihre. Një → ist, shumë → sind.',
  lesson:[
    {t:'Faqe 21 📖', d:'Seite 21', p:'<b>10</b> Kryqëzo të saktën. <b>11–13</b> Plotëso. <b>14</b> Shkruaj pyetjet e intervistës.',
     tip:'der Vorname → <b>mein</b> Vorname <i class="tr">(emri im)</i>. Kinder → das <b>sind</b> meine Kinder. <i class="tr">(Këta janë fëmijët e mi.)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'gap', row:true, psq:'10a Kryqëzo', pde:'10a Kreuzen Sie an', s:'Das sind ___ Kinder.', o:['mein','meine'], a:'meine', e:'Shumës → meine.'},
    {type:'gap', row:true, psq:'10a Kryqëzo', pde:'10a Kreuzen Sie an', s:'Aha. Und das ist ___ Mann?', o:['dein','deine'], a:'dein', e:'der Mann → dein.'},
    {type:'gap', row:true, psq:'10a Kryqëzo', pde:'10a Kreuzen Sie an', s:'Nein. Das ist ___ Bruder.', o:['mein','meine'], a:'mein', e:'der Bruder → mein.'},
    {type:'gap', row:true, psq:'10a Kryqëzo', pde:'10a Kreuzen Sie an', s:'Das sind ___ Eltern?', o:['dein','deine'], a:'deine', e:'Shumës → deine.'},
    {type:'gap', row:true, psq:'10a Kryqëzo', pde:'10a Kreuzen Sie an', s:'Ja, stimmt. Das sind ___ Vater und meine Mutter.', o:['mein','meine'], a:'mein', e:'der Vater → mein.'},
    {type:'gap', row:true, psq:'10b Kryqëzo', pde:'10b Kreuzen Sie an', s:'Wer ist das? ___ Frau?', o:['Ihr','Ihre'], a:'Ihre', e:'die Frau → Ihre.'},
    {type:'gap', row:true, psq:'10b Kryqëzo', pde:'10b Kreuzen Sie an', s:'___ Frau? Nein! Das ist meine Schwester.', o:['Mein','Meine'], a:'Meine', e:'die Frau → meine.'},
    {type:'gap', row:true, psq:'10b Kryqëzo', pde:'10b Kreuzen Sie an', s:'Das ist ___ Enkelin Sara.', o:['mein','meine'], a:'meine', e:'die Enkelin → meine.'},
    {type:'gap', row:true, psq:'10b Kryqëzo', pde:'10b Kreuzen Sie an', s:'Aha! ___ Enkelin!', o:['Ihr','Ihre'], a:'Ihre', e:'die Enkelin → Ihre.'},
    {type:'cloze', topic:'possessiv', psq:'11 Plotëso', pde:'11 Ergänzen Sie',
     text:'a  Das sind [[mein|m]] Opa und [[meine|m]] Oma.\n– Ah. [[Deine|D]] Großeltern!\n– Ja.\n\nb  Das sind [[meine|m]] Geschwister: [[mein|m]] Bruder Emre und [[meine|m]] Schwester Ahu.\n– Und wer ist das? Auch [[Ihre|I]] Schwester?\n– Nein. Das ist [[meine|m]] Frau.',
     e:'der Opa → mein, die Oma → meine, shumës → meine.'},
    {type:'cloze', topic:'possessiv', psq:'12a Plotëso', pde:'12a Ergänzen Sie',
     text:'Hallo, Frau Roth. Wie geht es Ihnen?\n– Danke, gut. Das ist [[mein]] Mann.\n– Ah, [[Ihr]] Mann. Freut mich. Guten Abend, Herr Roth.\n– Entschuldigung, [[mein]] Name ist nicht Roth. Ich heiße Peters.',
     e:'Me Sie (respekt) → Ihr Mann.'},
    {type:'cloze', topic:'possessiv', psq:'12b Plotëso', pde:'12b Ergänzen Sie',
     text:'Hallo, Florian. Das ist [[meine]] Schwester Ines.\n– Ah, schön, [[deine]] Schwester. Wie geht es dir, Iris?\n– Gut, danke. Aber ich heiße nicht Iris. [[Mein]] Vorname ist Ines.',
     e:'der Vorname → mein (jo meine!).'},
    {type:'cloze', topic:'seinhaben', psq:'13 Plotëso', pde:'13 Ergänzen Sie', bank:['bin','ist','sind','mein','meine','heißt'],
     text:'a  Das [[ist]] [[meine]] Tochter und das [[ist]] [[mein]] Sohn.\nb  Das [[sind]] [[mein]] Bruder und [[meine]] Schwester.',
     e:'Dy persona (Bruder und Schwester) → sind.'},
    {type:'cloze', topic:'seinhaben', psq:'13 Plotëso', pde:'13 Ergänzen Sie', bank:['bin','ist','sind','mein','meine','heißt'],
     text:'c  Das [[sind]] [[meine]] Kinder: [[mein]] Sohn Lukas und [[meine]] Tochter Stefanie.\nd  Das [[bin]] ich und das [[sind]] [[meine]] Eltern.',
     e:'Kinder, Eltern = shumë → sind. Das bin ich = kjo jam unë.'},
    {type:'order', psq:'14 Shkruaj pyetjen', pde:'14 Schreiben Sie Fragen', cue:'Mein Name ist Manuela Klein.', de:'Wie ist Ihr Name?', sq:'Si e keni emrin?'},
    {type:'order', psq:'14 Shkruaj pyetjen', pde:'14 Schreiben Sie Fragen', cue:'Ich komme aus Österreich.', de:'Woher kommen Sie?', sq:'Nga vini?'},
    {type:'order', psq:'14 Shkruaj pyetjen', pde:'14 Schreiben Sie Fragen', cue:'Ich spreche Deutsch und Englisch.', de:'Was sprechen Sie?', sq:'Çfarë gjuhësh flisni?'},
    {type:'order', psq:'14 Shkruaj pyetjen', pde:'14 Schreiben Sie Fragen', cue:'Das ist meine Familie.', de:'Wer ist das?', sq:'Kush është ky / kjo?'}
  ]
},

/* ---------- AB Lektion 2, S. 23 ---------- */
{
  id:'bk-s23', lek:2, pg:23, emoji:'🔁', color:'#7650F0', seq:true, book:['faqe 23 · ushtrimi 18','S. 23 · Üb. 18'],
  sq:'Tabela e foljeve', de:'Seite 23: kommen, leben, heißen, sprechen, sein',
  desc:'plotëso tabelën për çdo folje, pastaj bisedat e vizatimeve.',
  tip:'ich -e, du -st, er -t, wir -en, ihr -t, sie -en. sprechen: du sprichst, er spricht. sein: bin, bist, ist, sind, seid, sind.',
  lesson:[
    {t:'Faqe 23 📖', d:'Seite 23', p:'Plotëso tabelën si në libër. Format me ngjyrë gri janë dhënë tashmë.',
     tip:'heißen → ich <b>heiße</b> (jo hasse = urrej!), er <b>heißt</b> (jo hat = ka).'}
  ],
  nouns:[], words:[],
  items:[
    {type:'table', topic:'verben', psq:'18 Tabela: kommen', pde:'18 Ergänzen Sie: kommen', th:['','kommen'],
     rows:[['ich','komme'],['du','kommst',1],['er / sie','kommt',1],['wir','kommen',1],['ihr','kommt'],['sie / Sie','kommen']], e:'kommen është normale.'},
    {type:'table', topic:'verben', psq:'18 Tabela: leben', pde:'18 Ergänzen Sie: leben', th:['','leben'],
     rows:[['ich','lebe'],['du','lebst',1],['er / sie','lebt',1],['wir','leben'],['ihr','lebt',1],['sie / Sie','leben',1]], e:'ich lebe, wir leben.'},
    {type:'table', topic:'verben', psq:'18 Tabela: heißen', pde:'18 Ergänzen Sie: heißen', th:['','heißen'],
     rows:[['ich','heiße'],['du','heißt',1],['er / sie','heißt'],['wir','heißen',1],['ihr','heißt',1],['sie / Sie','heißen']], e:'ich heiße, er heißt, sie heißen.'},
    {type:'table', topic:'verben', psq:'18 Tabela: sprechen', pde:'18 Ergänzen Sie: sprechen', th:['','sprechen'],
     rows:[['ich','spreche'],['du','sprichst'],['er / sie','spricht'],['wir','sprechen'],['ihr','sprecht',1],['sie / Sie','sprechen',1]], e:'e → i vetëm te du dhe er: sprichst, spricht.'},
    {type:'table', topic:'seinhaben', psq:'18 Tabela: sein', pde:'18 Ergänzen Sie: sein', th:['','sein'],
     rows:[['ich','bin'],['du','bist'],['er / sie','ist'],['wir','sind',1],['ihr','seid'],['sie / Sie','sind',1]], e:'ihr seid (me d).'},
    {type:'cloze', topic:'verben', psq:'18 Bisedat A–C', pde:'18 Die Gespräche A–C',
     text:'A  Wie [[heißt]] du? Woher [[kommst]] du?\n– Ich [[heiße]] Hiba. Ich [[komme]] aus dem Libanon. Und du?\n– Ich [[bin]] Elias aus Griechenland. Ich [[lebe]] in Deutschland, in Freiburg.\n\nC  Hallo, wer [[seid]] ihr? – Mario. – Laura.\n– Und woher [[kommt]] ihr? – Aus Italien. Jetzt [[leben]] wir in Deutschland.',
     e:'ihr seid, ihr kommt.'},
    {type:'cloze', topic:'verben', psq:'18 Bisedat D–F', pde:'18 Die Gespräche D–F',
     text:'D  Entschuldigung, wie [[heißen]] Sie? – Peter Vogel.\n– Und woher [[kommen]] Sie? – Aus Österreich.\n\nE  Wie bitte? Tut mir leid, ich [[spreche]] nur Deutsch. Was [[sprichst]] du?\n\nF  Wie [[heißt]] er? – Alexandre.\n– Und was [[spricht]] er? – Englisch und Französisch.',
     e:'du sprichst, er spricht.'}
  ]
},

/* ---------- AB Lektion 6, S. 63 (1–2) ---------- */
{
  id:'bk-s63a', lek:6, pg:63, emoji:'🌦️', color:'#2E86DE', seq:true, book:['faqe 63 · ushtrimi 1–2','S. 63 · Üb. 1–2'],
  sq:'Moti në Gjermani', de:'Seite 63: Wie ist das Wetter?',
  desc:'lexo hartën dhe rendit shkronjat e fjalëve të motit.',
  tip:'Es regnet, es schneit, die Sonne scheint, es ist bewölkt. Es sind … Grad.',
  lesson:[
    {t:'Faqe 63 📖', d:'Seite 63', p:'<b>1</b> Shiko hartën: cili qytet? <b>2</b> Rendit shkronjat: <b>tetWer</b> → <b>Wetter</b>.',
     ex:[['Hamburg: Die Sonne scheint. 0°','Hamburg: ka diell, 0°'],['Köln: Es regnet. 6°','Köln: bie shi, 6°'],['Dresden: Es ist bewölkt. 5°','Dresden: vranët, 5°'],['München: Es schneit. 2°','München: bie borë, 2°']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', psq:'1 Cili qytet?', pde:'1 Welche Stadt?', q:'Die Sonne scheint, es ist kalt. Es sind null Grad.', h:'Hamburg ☀️ 0° · Köln 🌧️ 6° · Dresden ☁️ 5° · München 🌨️ 2°', o:['Hamburg','Köln','Dresden','München'], a:'Hamburg', say:'Die Sonne scheint, es ist kalt. Es sind null Grad.', e:'Hamburg: ☀️ 0°.'},
    {type:'mc', psq:'1 Cili qytet?', pde:'1 Welche Stadt?', q:'Es ist bewölkt. Es sind fünf Grad.', h:'Hamburg ☀️ 0° · Köln 🌧️ 6° · Dresden ☁️ 5° · München 🌨️ 2°', o:['Dresden','Hamburg','Köln','München'], a:'Dresden', say:'Es ist bewölkt. Es sind fünf Grad.', e:'Dresden: ☁️ 5°.'},
    {type:'mc', psq:'1 Cili qytet?', pde:'1 Welche Stadt?', q:'Es regnet. Es sind sechs Grad.', h:'Hamburg ☀️ 0° · Köln 🌧️ 6° · Dresden ☁️ 5° · München 🌨️ 2°', o:['Köln','Dresden','Hamburg','München'], a:'Köln', say:'Es regnet. Es sind sechs Grad.', e:'Köln: 🌧️ 6°.'},
    {type:'mc', psq:'1 Cili qytet?', pde:'1 Welche Stadt?', q:'Es sind zwei Grad und es schneit.', h:'Hamburg ☀️ 0° · Köln 🌧️ 6° · Dresden ☁️ 5° · München 🌨️ 2°', o:['München','Köln','Hamburg','Dresden'], a:'München', say:'Es sind zwei Grad und es schneit.', e:'München: 🌨️ 2°.'},
    {type:'letters', psq:'2a Rendit shkronjat', pde:'2a Ordne die Buchstaben', s:'Heute ist das ___ super!', a:'Wetter', mix:'tetWer', h:'tetWer', e:'das Wetter = moti.'},
    {type:'letters', psq:'2a Rendit shkronjat', pde:'2a Ordne die Buchstaben', s:'Die ___ scheint.', a:'Sonne', mix:'ennSo', h:'ennSo', e:'die Sonne = dielli.'},
    {type:'letters', psq:'2a Rendit shkronjat', pde:'2a Ordne die Buchstaben', s:'Die Sonne ___ und es ist sehr warm.', a:'scheint', mix:'eischtn', h:'eischtn', e:'scheinen → die Sonne scheint.'},
    {type:'letters', psq:'2a Rendit shkronjat', pde:'2a Ordne die Buchstaben', s:'Es ist sehr ___.', a:'warm', mix:'ramw', h:'ramw · ngrohtë', e:'warm = ngrohtë.'},
    {type:'letters', psq:'2a Rendit shkronjat', pde:'2a Ordne die Buchstaben', s:'Stimmt. Aber es ist auch sehr ___.', a:'windig', mix:'digwin', h:'digwin · me erë', e:'windig = me erë.'},
    {type:'letters', psq:'2b Rendit shkronjat', pde:'2b Ordne die Buchstaben', s:'Brrr! Es ist so ___!', a:'kalt', mix:'talk', h:'talk · ftohtë', e:'kalt = ftohtë.'},
    {type:'letters', psq:'2b Rendit shkronjat', pde:'2b Ordne die Buchstaben', s:'Ja, ___ Grad.', a:'null', mix:'luln', h:'luln · zero', e:'null = zero.'},
    {type:'letters', psq:'2b Rendit shkronjat', pde:'2b Ordne die Buchstaben', s:'Oh! Jetzt ___ es.', a:'schneit', mix:'neitsch', h:'neitsch · bie borë', e:'es schneit = bie borë.'},
    {type:'letters', psq:'2c Rendit shkronjat', pde:'2c Ordne die Buchstaben', s:'Wie ist das ___?', a:'Wetter', mix:'ettWre', h:'ettWre', e:'Wie ist das Wetter? = Si është moti?'},
    {type:'letters', psq:'2c Rendit shkronjat', pde:'2c Ordne die Buchstaben', s:'Nicht gut. Es sind nur zehn ___.', a:'Grad', mix:'Gard', h:'Gard', e:'zehn Grad = dhjetë gradë.'},
    {type:'letters', psq:'2c Rendit shkronjat', pde:'2c Ordne die Buchstaben', s:'Es ist ___.', a:'bewölkt', mix:'bwölekt', h:'bwölekt · vranët', e:'bewölkt (me k në fund).'},
    {type:'letters', psq:'2c Rendit shkronjat', pde:'2c Ordne die Buchstaben', s:'Gleich ___ es.', a:'regnet', mix:'nrgtee', h:'nrgtee · bie shi', e:'es regnet = bie shi.'}
  ]
},

/* ---------- AB Lektion 6, S. 63 (3–5) ---------- */
{
  id:'bk-s63b', lek:6, pg:63.5, emoji:'🧭', color:'#0E9F8E', seq:true, book:['faqe 63 · ushtrimi 3–5','S. 63 · Üb. 3–5'],
  sq:'Austria, harta, im/am/um/in', de:'Seite 63: Österreich, Karte, im/am/um/in',
  desc:'moti në Austri, ku ndodhen qytetet dhe rendit im, am, um, in.',
  tip:'In Wien scheint die Sonne (folja e dyta!). im + drejtim, am + ditë, um + orë, in + vend.',
  lesson:[
    {t:'Faqe 63 📖', d:'Seite 63', p:'<b>3</b> Moti në Austri. <b>4</b> Harta e Gjermanisë. <b>5</b> Rendit fjalët te im, am, um, in.',
     ex:[['Wien: ☀️ 4°','Bregenz: ❄️ -3°'],['Graz: ☁️ -1°','Salzburg: 🌧️ 6°']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', psq:'3 Moti në Austri', pde:'3 Wie ist das Wetter in Österreich?', h:'Wien ☀️ 4° · Bregenz ❄️ -3° · Graz ☁️ -1° · Salzburg 🌧️ 6°',
     text:'In Wien [[scheint]] die Sonne und es sind vier [[Grad]].\nIn Bregenz [[schneit]] es.\nIn Graz ist es heute [[bewölkt]] und [[kalt]].\nIn Salzburg [[regnet]] es.',
     e:'Folja vjen e dyta: In Wien scheint …'},
    {type:'gap', psq:'4 Shiko hartën', pde:'4 Sehen Sie die Karte an', s:'Wo scheint die Sonne? In ___.', h:'Hamburg ☀️ · Köln 🌧️ · Dresden ☁️ · München 🌨️', o:['Hamburg','Osten','München','Köln'], a:'Hamburg', e:'„Wo?“ pyet për qytetin: In Hamburg.'},
    {type:'gap', psq:'4 Shiko hartën', pde:'4 Sehen Sie die Karte an', s:'Wo schneit es? In ___.', h:'Hamburg ☀️ · Köln 🌧️ · Dresden ☁️ · München 🌨️', o:['München','Westen','Hamburg','Dresden'], a:'München', e:'Bora ❄️ është te München.'},
    {type:'gap', psq:'4 Shiko hartën', pde:'4 Sehen Sie die Karte an', s:'Wo ist es bewölkt? In ___.', h:'Hamburg ☀️ · Köln 🌧️ · Dresden ☁️ · München 🌨️', o:['Dresden','Köln','München','Hamburg'], a:'Dresden', e:'Dresden: ☁️'},
    {type:'gap', psq:'4 Shiko hartën', pde:'4 Sehen Sie die Karte an', s:'Wo regnet es? In Köln und in ___.', h:'🌧️ edhe te qyteti afër Kölnit', o:['Düsseldorf','München','Dresden','Berlin'], a:'Düsseldorf', e:'In Köln und in Düsseldorf.'},
    {type:'gap', psq:'4 Ku ndodhet?', pde:'4 Wo liegt …?', s:'Wo liegt Hamburg? Im ___.', o:['Norden','Süden','Westen','Osten'], a:'Norden', e:'Hamburg → im Norden.'},
    {type:'gap', psq:'4 Ku ndodhet?', pde:'4 Wo liegt …?', s:'Wo liegt München? Im ___.', o:['Süden','Norden','Westen','Osten'], a:'Süden', e:'München → im Süden.'},
    {type:'gap', psq:'4 Ku ndodhet?', pde:'4 Wo liegt …?', s:'Wo liegt Köln? Im ___.', o:['Westen','Osten','Norden','Süden'], a:'Westen', e:'Köln → im Westen.'},
    {type:'gap', psq:'4 Ku ndodhet?', pde:'4 Wo liegt …?', s:'Wo liegt Dresden? Im ___.', o:['Osten','Westen','Süden','Norden'], a:'Osten', e:'Dresden → im Osten.'},
    {type:'sort', topic:'zeit', psq:'5 Rendit', pde:'5 Ordnen Sie zu', cats:['im','am','um','in'],
     items:[['Osten','im'],['Süden','im'],['Westen','im'],['Montag','am'],['Mittwoch','am'],['Vormittag','am'],['Abend','am'],
       ['drei Uhr','um'],['kurz vor sieben','um'],['halb vier','um'],['Deutschland','in'],['München','in'],['der Schweiz','in'],['der Nacht','in']],
     e:'im + drejtim, am + ditë/pjesë dite, um + orë, in + vend dhe in der Nacht.'}
  ]
},

/* ---------- AB S. 65 ---------- */
{
  id:'bk-s65', lek:6, pg:65, emoji:'🛒', color:'#EE7A0C', seq:true, book:['faqe 65 · ushtrimi 10–12','S. 65 · Üb. 10–12'],
  sq:'Në supermarket: der, den, ein', de:'Seite 65: Einkaufen',
  desc:'„Hast du das Brot?“, Wer/Was apo Wen/Was dhe lista e blerjeve.',
  tip:'Kryefjala → der (Wer? Was?). Objekti → den, einen, keinen (Wen? Was?). die/das nuk ndryshojnë.',
  lesson:[
    {t:'Faqe 65 📖', d:'Seite 65', p:'<b>10</b> Hast du …? <b>11</b> Wer/Was apo Wen/Was? <b>12</b> Plotëso me der, das, die, ein-, kein-.',
     ex:[['Ist der Kuchen gut? → Wer? Was?','Kryefjala (Nominativ)'],['Ich möchte einen Kuchen. → Wen? Was?','Objekti (Akkusativ)']],
     tip:'Vetëm <b>der</b> ndryshon te objekti: der → <b>den</b>, ein → <b>einen</b>, kein → <b>keinen</b>.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'ein', psq:'10 Hast du …?', pde:'10 Fragen und antworten',
     text:'Hast du das Brot? – Nein, [[das]] Brot habe ich nicht, aber die Brötchen.\nHast du den Saft? – Nein, [[den]] Saft habe ich nicht, aber [[den]] Wein.\nHast du die Milch? – Nein, [[die]] Milch habe ich nicht, aber [[den]] Zucker.',
     e:'der → den (objekt). die, das nuk ndryshojnë.'},
    {type:'cloze', topic:'ein', psq:'10 Hast du …?', pde:'10 Fragen und antworten',
     text:'Hast du das Obst? – Nein, [[das]] Obst habe ich nicht, aber [[den]] Kuchen.\nHast du den Tee? – Nein, [[den]] Tee habe ich nicht, aber [[den]] Kaffee.\nHast du die Wurst? – Nein, [[die]] Wurst habe ich nicht, aber [[den]] Käse.',
     e:'der Kuchen, der Kaffee, der Käse → den.'},
    {type:'mc', row:true, topic:'ein', psq:'11 Wer?/Was? apo Wen?/Was?', pde:'11 Nominativ oder Akkusativ?', q:'Ist der Schokoladenkuchen gut?', h:'der Schokoladenkuchen', o:['Wer?/Was?','Wen?/Was?'], a:'Wer?/Was?', e:'Kryefjala → der → Wer?/Was?'},
    {type:'mc', row:true, topic:'ein', psq:'11 Wer?/Was? apo Wen?/Was?', pde:'11 Nominativ oder Akkusativ?', q:'Dann möchte ich auch einen Schokoladenkuchen, bitte.', h:'einen Schokoladenkuchen', o:['Wer?/Was?','Wen?/Was?'], a:'Wen?/Was?', e:'Objekt pas möchten → einen → Wen?/Was?'},
    {type:'mc', row:true, topic:'ein', psq:'11 Wer?/Was? apo Wen?/Was?', pde:'11 Nominativ oder Akkusativ?', q:'Wir haben keinen Schokoladenkuchen mehr.', h:'keinen Schokoladenkuchen', o:['Wer?/Was?','Wen?/Was?'], a:'Wen?/Was?', e:'Objekt pas haben → keinen.'},
    {type:'mc', row:true, topic:'ein', psq:'11 Wer?/Was? apo Wen?/Was?', pde:'11 Nominativ oder Akkusativ?', q:'Wo ist die Wurst?', h:'die Wurst', o:['Wer?/Was?','Wen?/Was?'], a:'Wer?/Was?', e:'Kryefjala.'},
    {type:'mc', row:true, topic:'ein', psq:'11 Wer?/Was? apo Wen?/Was?', pde:'11 Nominativ oder Akkusativ?', q:'Hast du die Wurst?', h:'die Wurst', o:['Wer?/Was?','Wen?/Was?'], a:'Wen?/Was?', e:'Objekt pas haben.'},
    {type:'mc', row:true, topic:'ein', psq:'11 Wer?/Was? apo Wen?/Was?', pde:'11 Nominativ oder Akkusativ?', q:'Tut mir leid, ich kenne das Restaurant nicht.', h:'das Restaurant', o:['Wer?/Was?','Wen?/Was?'], a:'Wen?/Was?', e:'Objekt pas kennen.'},
    {type:'cloze', topic:'ein', psq:'12 Plotëso', pde:'12 Ergänzen Sie in der richtigen Form', bank:['der','das','die','ein-','kein-'],
     text:'Also, Julia, ich gehe zum Supermarkt. Was brauchen wir?\n– Ah, gute Idee, Nina. Also, wir brauchen zum Beispiel [[eine]] Packung Kaffee, [[ein]] Kilo Äpfel, [[eine]] Dose Tee, [[eine]] Flasche Saft.',
     e:'die Packung, die Dose, die Flasche → eine. das Kilo → ein.'},
    {type:'cloze', topic:'ein', psq:'12 Plotëso', pde:'12 Ergänzen Sie in der richtigen Form', bank:['der','das','die','ein-','kein-'],
     text:'– Nein, wir brauchen [[keinen]] Saft. Wir haben noch [[eine]] Flasche Saft.\n– Gut, dann kauf bitte [[einen]] Joghurt, [[eine]] Flasche Öl und [[einen]] Salat. … Nein, nein, [[den]] Salat und [[die]] Äpfel kaufe ich. [[Das]] Gemüse und [[das]] Obst im Supermarkt schmeckt nicht gut, finde ich.',
     e:'keinen Saft (nuk na duhet), eine Flasche, einen Salat, den Salat, die Äpfel.'}
  ]
},



  ]
}
,

/* =====================================================================
   📋 Testi i së premtes: der Test vom Freitag (A1.1, Future Focus), Übung 1–10
   genau wie auf dem Blatt, mit Mimis Fehlern auf den „Kujdes“-Folien.
   ===================================================================== */
{
  id:'l9', date:'2026-10-26', emoji:'📋', badge:['Testi i së premtes','Test vom Freitag'],
  sq:'Testi i së premtes', de:'Test vom Freitag · A1.1',
  parts:[

/* ---------- Übung 1 + 2: Verben ---------- */
{
  id:'hw9-verben', emoji:'🗣️', color:'#F2545B', seq:true, book:['ushtrimi 1 + 2','Übung 1 + 2'],
  sq:'Zgjedho foljet', de:'Übung 1 + 2: Verben konjugieren',
  desc:'sprechen, sein, essen në tabelë dhe mbaresat e foljeve në fjali.',
  tip:'Sabine = sie → -t. Meine Freunde = sie (ata) → -en. ihr → -t. sprechen: du sprichst, er spricht.',
  lesson:[
    {t:'Testi i së premtes 📋', d:'Der Test vom Freitag', p:'Këtu janë ushtrimet <b>e sakta nga testi</b>. I bën përsëri, si në fletë. 💪<br><b>1</b> Zgjedho foljet në tabelë. <b>2</b> Shkruaj mbaresën e foljes.',
     tip:'Te ushtrimi 2 shkruan vetëm <b>mbaresën</b>: komm + <b>e</b> = komme.'},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'<b>sein</b> dhe <b>essen</b> i ke bërë krejt saktë ✓. Vetëm këto:',
     fix:[
      ['du Sprechst','du sprichst','sprechen është rebel: e → i te du dhe er.'],
      ['er Sprecht','er spricht','e → i, dhe folja me shkronjë të vogël.'],
      ['Sabine schwimmen im Schwimmbad.','Sabine schwimmt im Schwimmbad.','Sabine = sie (ajo) → -t.'],
      ['Meine Freunde lebt in Spanien.','Meine Freunde leben in Spanien.','Freunde = shumë (ata) → -en.'],
      ['Manfred schreiben seiner Freundin.','Manfred schreibt seiner Freundin.','Manfred = er (ai) → -t.'],
      ['Wo wohnen ihr?','Wo wohnt ihr?','ihr → -t.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'table', topic:'verben', psq:'1 Zgjedho: sprechen', pde:'1 Konjugieren Sie: sprechen', th:['','sprechen'],
     rows:[['ich','spreche'],['du','sprichst'],['er / sie / es','spricht'],['wir','sprechen'],['ihr','sprecht'],['sie / Sie','sprechen']], e:'du sprichst, er spricht (e → i).'},
    {type:'table', topic:'seinhaben', psq:'1 Zgjedho: sein', pde:'1 Konjugieren Sie: sein', th:['','sein'],
     rows:[['ich','bin'],['du','bist'],['er / sie / es','ist'],['wir','sind'],['ihr','seid'],['sie / Sie','sind']], e:'ich bin, du bist, er ist, wir sind, ihr seid, sie sind.'},
    {type:'table', topic:'verben', psq:'1 Zgjedho: essen', pde:'1 Konjugieren Sie: essen', th:['','essen'],
     rows:[['ich','esse'],['du','isst'],['er / sie / es','isst'],['wir','essen'],['ihr','esst'],['sie / Sie','essen']], e:'du isst, er isst (e → i).'},
    {type:'cloze', topic:'subjekt', psq:'2 Shkruaj mbaresën', pde:'2 Ergänzen Sie', h:'Shembull: Ich komm + e = komme',
     text:'1  Ich komme aus Frankreich. ✓\n2  Er geh[[t]] in die Schule.\n3  Wir kauf[[en]] ein Auto.\n4  Du trink[[st]] Kaffee.\n5  Sie hör[[en]] Musik. (Plural)\n6  Ich frag[[e]] den Lehrer.\n7  Was mach[[en]] Sie heute Abend?',
     e:'er -t, wir -en, du -st, sie (shumës) -en, ich -e, Sie -en.'},
    {type:'cloze', topic:'subjekt', psq:'2 Shkruaj mbaresën', pde:'2 Ergänzen Sie', h:'Kush është subjekti? Një person → -t, shumë → -en.',
     text:'9  Sabine schwimm[[t]] im Schwimmbad.\n10  Kenn[[st]] du diesen Mann?\n11  Ich sag[[e]] es dir morgen.\n12  Meine Freunde leb[[en]] in Spanien.\n13  Manfred schreib[[t]] seiner Freundin.\n14  Wo wohn[[t]] ihr?\n15  Julia und Martin tanz[[en]] gerne Salsa.',
     e:'Sabine → -t, du → -st, ich → -e, Freunde → -en, Manfred → -t, ihr → -t, Julia und Martin → -en.'}
  ]
},

/* ---------- Übung 3: Zahlen ---------- */
{
  id:'hw9-zahlen', emoji:'🔢', color:'#E3A008', seq:true, book:['ushtrimi 3','Übung 3'],
  sq:'Numrat me fjalë', de:'Übung 3: Zahlen schreiben',
  desc:'Shkruaj numrat me fjalë: 20, 35, 47, 132, 13, 67.',
  tip:'Së pari njëshja: 35 = fünfunddreißig. 30 = dreißig (ose dreissig). 13 = dreizehn.',
  lesson:[
    {t:'Ushtrimi 3 📋', d:'Schreiben Sie die Zahlen', p:'Shkruaj numrat <b>me fjalë</b>, si një fjalë e vetme.',
     tip:'Së pari njëshja: 35 = fünf<b>und</b>dreißig. 30 = drei<b>ß</b>ig (ss lejohet). ü: përdor butonin poshtë.'},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'<b>20 zwanzig</b> dhe <b>47 siebenundvierzig</b> ishin saktë ✓. Këto jo:',
     fix:[
      ['funfunddreizig','fünfunddreißig','fünf me ü, dreißig me ß / ss.'],
      ['einhundertzweiunddreizig','(ein)hundertzweiunddreißig','30 = dreißig, jo -zig.'],
      ['dreizhen','dreizehn','drei + zehn.'],
      ['seibenundsechzig','siebenundsechzig','sieben: s-i-e-b-e-n.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'zahlen', psq:'3 Shkruaj me fjalë', pde:'3 Schreiben Sie mit Wörtern',
     text:'20  [[zwanzig]]\n35  [[fünfunddreißig]]\n47  [[siebenundvierzig]]\n132  [[hundertzweiunddreißig;einhundertzweiunddreißig]]\n13  [[dreizehn]]\n67  [[siebenundsechzig]]',
     e:'zwanzig, fünfunddreißig, siebenundvierzig, hundertzweiunddreißig, dreizehn, siebenundsechzig.'},
    {type:'match', psq:'Gjej çiftet', pde:'Finde die Paare', pairs:[['13','dreizehn'],['20','zwanzig'],['35','fünfunddreißig'],['47','siebenundvierzig'],['67','siebenundsechzig']]},
    {type:'mc', topic:'zahlen', psq:'Si shkruhet?', pde:'Wie schreibt man das?', q:'30', o:['dreißig','dreizig','dreisig','dreizehn'], a:'dreißig', say:'dreißig', e:'30 = dreißig, i vetmi pa -zig.'}
  ]
},

/* ---------- Übung 4 + 7: nicht / kein, Artikel ---------- */
{
  id:'hw9-artikel', emoji:'📌', color:'#EE7A0C', seq:true, book:['ushtrimi 4 + 7','Übung 4 + 7'],
  sq:'nicht, kein & nyjat', de:'Übung 4 + 7: nicht/kein, Artikel',
  desc:'nicht apo kein? Dhe tabelat e nyjave në Nominativ dhe Akkusativ.',
  tip:'kein + emër: das Auto → kein, die Angst → keine. nicht + mbiemër ose folje: nicht dick, nicht spielen.',
  lesson:[
    {t:'Ushtrimi 4 + 7 📋', d:'nicht oder kein? Tabellen', p:'<b>4</b> Plotëso nicht ose kein. <b>7</b> Plotëso tabelat e nyjave.',
     tip:'<b>kein</b> para emrit (sipas gjinisë: kein / keine). <b>nicht</b> për mbiemra dhe folje.'},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'Tabelën e nyjës së shquar e ke bërë krejt saktë ✓. Vetëm këto:',
     fix:[
      ['Wir haben keine Auto.','Wir haben kein Auto.','das Auto → kein (pa -e).'],
      ['Ino hat kein Angst vor dem Hund.','Ino hat keine Angst vor dem Hund.','die Angst → keine.'],
      ['Plural (ein-): bosh','Plural: – (pa nyjë)','Në shumës „ein“ nuk ekziston: Das sind Kinder.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'ein', psq:'4 nicht apo kein?', pde:'4 Ergänzen Sie nicht oder kein', bank:['nicht','kein','keine'],
     text:'1  Wir haben [[kein]] Auto.\n2  Ich bin [[nicht]] dick.\n3  Ich habe [[keine]] Schwester.\n4  Ino hat [[keine]] Angst vor dem Hund.\n5  Ich spiele [[nicht]] mit den Kindern.',
     e:'das Auto → kein, die Schwester / die Angst → keine, dick dhe spielen → nicht.'},
    {type:'table', topic:'ein', psq:'7 Nyja e shquar', pde:'7 Definiter Artikel', th:['','der / die / das'],
     rows:[['maskulin · Nominativ','der'],['maskulin · Akkusativ','den'],['feminin · Nominativ','die'],['feminin · Akkusativ','die'],
       ['neutral · Nominativ','das'],['neutral · Akkusativ','das'],['Plural · Nominativ','die'],['Plural · Akkusativ','die']],
     e:'Vetëm maskulin ndryshon: der → den.'},
    {type:'table', topic:'ein', psq:'7 Nyja e pashquar', pde:'7 Indefiniter Artikel', th:['','ein / eine'],
     rows:[['maskulin · Nominativ','ein'],['maskulin · Akkusativ','einen'],['feminin · Nominativ','eine'],['feminin · Akkusativ','eine'],
       ['neutral · Nominativ','ein'],['neutral · Akkusativ','ein'],['Plural · Nominativ','– (pa nyjë)',1],['Plural · Akkusativ','– (pa nyjë)',1]],
     e:'Vetëm maskulin ndryshon: ein → einen. Shumësi: pa nyjë.'},
    {type:'gap', topic:'ein', psq:'Shumësi', pde:'Plural', s:'Das sind ___ Kinder.', o:['eine','ein','pa nyjë'], a:'pa nyjë', full:'Das sind Kinder.', row:true, e:'„ein“ nuk ka shumës.'}
  ]
},

/* ---------- Übung 5: trennbare Verben ---------- */
{
  id:'hw9-trennbar', emoji:'⏰', color:'#7650F0', seq:true, book:['ushtrimi 5','Übung 5'],
  sq:'Foljet e ndashme', de:'Übung 5: Sätze mit trennbaren Verben',
  desc:'Fjali me anrufen, aufräumen, aufstehen dhe einkaufen.',
  tip:'Folja në vendin 2, pjesa e parë (an, auf, ein) në fund: Ich rufe meine Mutter an.',
  lesson:[
    {t:'Ushtrimi 5 📋', d:'Trennbare Verben', p:'Në test ky ushtrim mbeti <b>bosh</b>. S’ka problem, tani e mësojmë bashkë! 💪', say:1, th:['Folja','Fjali'],
     tr:[['telefonoj','I telefonoj nënës sime.'],['rregulloj','Rregulloj dhomën time.'],['ngrihem','Ngrihem në orën shtatë.'],['bëj pazar','Bëj pazar në supermarket.']],
     table:[['anrufen','Ich rufe meine Mutter <b>an</b>.'],['aufräumen','Ich räume mein Zimmer <b>auf</b>.'],['aufstehen','Ich stehe um sieben Uhr <b>auf</b>.'],['einkaufen','Ich kaufe im Supermarkt <b>ein</b>.']],
     tip:'Folja në <b>vendin 2</b>, pjesa e parë (an, auf, ein) <b>në fund</b>.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'order', topic:'trennbar', psq:'5 Fjali me anrufen', pde:'5 Satz mit anrufen', cue:'anrufen – ich – meine Mutter', parts:['Ich','rufe','meine Mutter','an.'], de:'Ich rufe meine Mutter an.', sq:'I telefonoj nënës sime.'},
    {type:'order', topic:'trennbar', psq:'5 Fjali me aufräumen', pde:'5 Satz mit aufräumen', cue:'aufräumen – am Samstag – ich – mein Zimmer', parts:['Am Samstag','räume','ich','mein Zimmer','auf.'], de:'Am Samstag räume ich mein Zimmer auf.', sq:'Të shtunën rregulloj dhomën time.'},
    {type:'order', topic:'trennbar', psq:'5 Fjali me aufstehen', pde:'5 Satz mit aufstehen', cue:'aufstehen – ich – um sieben Uhr', parts:['Ich','stehe','um sieben Uhr','auf.'], de:'Ich stehe um sieben Uhr auf.', sq:'Ngrihem në orën shtatë.'},
    {type:'order', topic:'trennbar', psq:'5 Fjali me einkaufen', pde:'5 Satz mit einkaufen', cue:'einkaufen – wir – im Supermarkt', parts:['Wir','kaufen','im Supermarkt','ein.'], de:'Wir kaufen im Supermarkt ein.', sq:'Ne bëjmë pazar në supermarket.'},
    {type:'cloze', topic:'trennbar', psq:'Plotëso', pde:'Ergänzen Sie', h:'aufstehen · anrufen · aufräumen · einkaufen',
     text:'Ich [[stehe]] jeden Tag um sieben Uhr [[auf]].\n[[Rufst]] du mich morgen [[an]]?\nMein Bruder [[räumt]] nie sein Zimmer [[auf]].\nAm Samstag [[kaufe]] ich im Supermarkt [[ein]].',
     e:'stehe … auf, rufst … an, räumt … auf, kaufe … ein.'}
  ]
},

/* ---------- Übung 6, 8 + 9: Sätze schreiben ---------- */
{
  id:'hw9-saetze', emoji:'✍️', color:'#D6409F', seq:true, book:['ushtrimi 6, 8 + 9','Übung 6, 8 + 9'],
  sq:'Prezantimi, können & wollen', de:'Übung 6, 8 + 9: Sätze schreiben',
  desc:'Prezantimi yt, fjali me können dhe me wollen.',
  tip:'Emrat dhe fillimi i fjalisë me shkronjë të madhe: Tennis, Fußball, Kaffee, Wollt ihr …?',
  lesson:[
    {t:'Ushtrimi 6, 8 + 9 📋', d:'Sätze schreiben', p:'<b>6</b> Prezantim i shkurtër për veten. <b>8</b> Fjali me können. <b>9</b> Fjali me wollen.',
     tip:'Emrat dhe fillimi i fjalisë me shkronjë <b>të madhe</b>: <b>T</b>ennis, <b>F</b>ußball, <b>K</b>affee, <b>W</b>ollt ihr …?'},
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'<b>Ich kann kochen</b> ✓ dhe <b>Du kannst tanzen</b> ✓ ishin perfekt! Këto pak gjëra:',
     fix:[
      ['Ich bin 27 jare alt.','Ich bin 27 Jahre alt.','das Jahr → die Jahre.'],
      ['Ich komme Aus Albanien.','Ich komme aus Albanien.','aus me shkronjë të vogël.'],
      ['Ich vone in Tirana.','Ich wohne in Tirana.','wohnen: w-o-h-n-e-n.'],
      ['Ich spreche English und ein bissen Deutsch.','Ich spreche Englisch und ein bisschen Deutsch.','Englisch me sch, bisschen me ss.'],
      ['Konnen Sie Deutsch sprechen?','Können Sie Deutsch sprechen?','können me ö.'],
      ['Kann er fussball spielen?','Kann er Fußball spielen?','Emrat me shkronjë të madhe. (Në Zvicër: Fussball.)'],
      ['Ich will eine kafee bitte.','Ich möchte einen Kaffee, bitte.','der Kaffee → einen. Më e sjellshme: möchte.'],
      ['Wir wollen tennis spielen.','Wir wollen Tennis spielen.','das Tennis me T të madhe.'],
      ['wollt ihr einen Tee?','Wollt ihr einen Tee?','Fjalia fillon me shkronjë të madhe.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', psq:'6 Prezantimi', pde:'6 Präsentation über dich selbst',
     text:'Ich [[bin]] Mimoza Darsi. Ich bin 27 [[Jahre|J]] alt.\nIch komme [[aus]] Albanien. Ich [[wohne|w]] in Tirana.\nIch spreche [[Englisch|E]] und ein [[bisschen|b]] Deutsch.',
     e:'Jahre, aus, wohne, Englisch, bisschen.'},
    {type:'cloze', topic:'modal', psq:'8 + 9 können & wollen', pde:'8 + 9 Modalverben',
     text:'Ich [[kann]] kochen.\nDu [[kannst]] tanzen.\n[[Können]] Sie Deutsch sprechen?\nWir [[wollen]] Tennis spielen.\n[[Wollt]] ihr einen Tee?\n[[Wollen]] Sie spazieren gehen?',
     e:'ich kann, du kannst, Sie können, wir wollen, ihr wollt, Sie wollen.'},
    {type:'mc', topic:'modal', psq:'8 Cila është e saktë?', pde:'8 Was ist richtig?', q:'A mund të flisni gjermanisht? (me respekt)',
     o:['Können Sie Deutsch sprechen?','Konnen Sie Deutsch sprechen?','Kann Sie Deutsch sprechen?','Können Sie sprechen Deutsch?'], a:'Können Sie Deutsch sprechen?', say:'Können Sie Deutsch sprechen?', e:'Können me ö, sprechen në fund.'},
    {type:'gap', row:true, psq:'8 Shkronjë e madhe?', pde:'8 Groß oder klein?', s:'Kann er ___ spielen?', o:['Fußball','fußball'], a:'Fußball', e:'Emrat me shkronjë të madhe: der Fußball.'},
    {type:'gap', row:true, topic:'ein', psq:'9 einen, eine apo ein?', pde:'9 einen, eine oder ein?', s:'Ich möchte ___ Kaffee, bitte.', o:['einen','eine','ein'], a:'einen', e:'der Kaffee → einen Kaffee.'},
    {type:'gap', row:true, psq:'9 Shkronjë e madhe?', pde:'9 Groß oder klein?', s:'Wir wollen ___ spielen.', o:['Tennis','tennis'], a:'Tennis', e:'das Tennis me T të madhe.'},
    {type:'mc', topic:'modal', psq:'9 Cila është e saktë?', pde:'9 Was ist richtig?', q:'A doni një çaj? (ju, miq)',
     o:['Wollt ihr einen Tee?','wollt ihr einen Tee?','Wollen ihr einen Tee?','Wollt ihr ein Tee?'], a:'Wollt ihr einen Tee?', say:'Wollt ihr einen Tee?', e:'ihr wollt, fjalia me W të madhe, der Tee → einen.'},
    {type:'order', topic:'satz', psq:'8 Fjali me können', pde:'8 Satz mit können', cue:'können – ich – gut – kochen', parts:['Ich','kann','gut','kochen.'], de:'Ich kann gut kochen.', sq:'Di të gatuaj mirë.'},
    {type:'order', topic:'satz', psq:'9 Fjali me wollen', pde:'9 Satz mit wollen', cue:'wollen – Sie – spazieren gehen – ?', parts:['Wollen','Sie','spazieren gehen?'], de:'Wollen Sie spazieren gehen?', sq:'Doni të shëtisni?'}
  ]
},

/* ---------- Übung 10: Lesen ---------- */
{
  id:'hw9-lesen', emoji:'📖', color:'#0E9F8E', seq:true, book:['ushtrimi 10 · leximi','Übung 10 · Lesen'],
  sq:'Leximi: Anna', de:'Übung 10: Lesen',
  desc:'Teksti për Annën dhe 5 pyetjet e testit, plus 3 pyetje shtesë.',
  tip:'Lexo pyetjen, gjej fjalën kyçe dhe kërkoje në tekst.',
  read:'Mein Name ist Anna. Ich komme aus Österreich und lebe seit drei Jahren in Deutschland. Ich bin 15 Jahre alt und habe zwei Geschwister: Meine Schwester heißt Klara und ist 13 Jahre alt, mein Bruder Michael ist 18 Jahre alt. Wir wohnen mit unseren Eltern in einem Haus in München. Meine Mutter ist Köchin, mein Vater arbeitet in einer Bank.<br><br>Ich lese gerne und mag <b>Tiere</b>: Wir haben einen Hund, zwei Katzen und Goldfische. Ich gehe auch gerne in die Schule, mein Lieblingsfach ist Mathematik. Physik und Chemie mag ich nicht so gerne.<br><br>Nach der Schule gehe ich oft mit meinen Freundinnen im Park spazieren, manchmal essen wir ein Eis. Am Samstag gehen wir oft ins Kino. Am Sonntag schlafe ich lange, dann koche ich mit meiner Mutter das Mittagessen. Nach dem Essen gehen wir mit dem Hund am See spazieren. Sonntag ist mein Lieblingstag!',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te leximi në test i ke gjetur <b>të 5 përgjigjet saktë</b>! Provoje edhe një herë, plus 3 pyetje shtesë. 😊',
     th:['Deutsch','Shqip'], say:0,
     table:[['das Tier','kafsha'],['der Hund','qeni'],['die Katze','macja'],['das Lieblingsfach','lënda e preferuar'],['nach der Schule','pas shkollës'],['der See','liqeni'],['der Lieblingstag','dita e preferuar']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, row:true, topic:'lesen', psq:'10 Pyetja 1', pde:'10 Frage 1', q:'Wie alt ist Annas Schwester?', o:['12','14','15','13'], a:'13', e:'„Meine Schwester heißt Klara und ist 13 Jahre alt.“'},
    {type:'mc', read:true, topic:'lesen', psq:'10 Pyetja 2', pde:'10 Frage 2', q:'Wo arbeitet Annas Vater?', o:['in Österreich','im Kino','in der Schule','in der Bank'], a:'in der Bank', e:'„… mein Vater arbeitet in einer Bank.“'},
    {type:'mc', read:true, topic:'lesen', psq:'10 Pyetja 3', pde:'10 Frage 3', q:'Was macht Anna gern in der Schule?', o:['Kochen','Mathematik','Chemie','Physik'], a:'Mathematik', e:'„… mein Lieblingsfach ist Mathematik.“'},
    {type:'mc', read:true, topic:'lesen', psq:'10 Pyetja 4', pde:'10 Frage 4', q:'Was macht Anna nach der Schule?', h:'nach = pas',
     o:['Sie kocht das Mittagessen.','Sie geht mit ihren Freundinnen spazieren.','Sie geht ins Kino.','Sie schläft lange.'], a:'Sie geht mit ihren Freundinnen spazieren.', e:'„Nach der Schule gehe ich oft mit meinen Freundinnen im Park spazieren.“'},
    {type:'mc', read:true, topic:'lesen', psq:'10 Pyetja 5', pde:'10 Frage 5', q:'Wo geht die Familie am Sonntag mit dem Hund spazieren?', h:'der Hund = qeni', o:['am See','im Haus','im Park','im Garten'], a:'am See', e:'„Nach dem Essen gehen wir mit dem Hund am See spazieren.“'},
    {type:'mc', read:true, topic:'lesen', psq:'Pyetje shtesë', pde:'Zusatzfrage', q:'Wie heißt Annas Bruder?', o:['Michael','Klara','Anna','Max'], a:'Michael', e:'„… mein Bruder Michael ist 18 Jahre alt.“'},
    {type:'mc', read:true, topic:'lesen', psq:'Pyetje shtesë', pde:'Zusatzfrage', q:'Welche Tiere hat Annas Familie?', o:['einen Hund, zwei Katzen und Goldfische','zwei Hunde und eine Katze','nur Goldfische','keine Tiere'], a:'einen Hund, zwei Katzen und Goldfische', e:'„Wir haben einen Hund, zwei Katzen und Goldfische.“'},
    {type:'mc', read:true, topic:'lesen', psq:'Pyetje shtesë', pde:'Zusatzfrage', q:'Was macht Anna am Samstag?', o:['Sie geht ins Kino.','Sie schläft lange.','Sie kocht mit ihrer Mutter.','Sie geht in die Schule.'], a:'Sie geht ins Kino.', e:'„Am Samstag gehen wir oft ins Kino.“'}
  ]
}
  ]
},

/* =====================================================================
   💼 Detyrat: Mësimi 8 (Arbeitsbuch S. 86–89), genau wie auf den Blättern,
   mit Mimis Fehlern („Kujdes“) und ihren Selbstkorrekturen („Bravo“).
   ===================================================================== */
{
  id:'l10', date:'2026-10-28', added:'2026-10-28T20:30', emoji:'💼',
  sq:'Detyrat: Mësimi 8', de:'Hausaufgaben · Arbeitsbuch Lektion 8, S. 86–89',
  parts:[

/* ---------- AB S. 86: A Ich bin Physiotherapeutin ---------- */
{
  id:'hw10-s86', lek:8, pg:86, emoji:'👩‍⚕️', color:'#0E9F8E', seq:true, book:['faqe 86 · ushtrimi 1–5','S. 86 · Üb. 1–5'],
  sq:'Profesionet', de:'S. 86: Ich bin Physiotherapeutin',
  desc:'Shkronja të ngatërruara, rrokje, profesione për burra dhe gra, biseda dhe lidhje.',
  tip:'Për gra: + in (Journalist → Journalistin). Arzt → Ärztin me ä. Schüler me ü.',
  lesson:[
    {t:'Faqe 86 📖', d:'A · Ich bin Physiotherapeutin', p:'<b>1</b> Rendit shkronjat e profesioneve. <b>2</b> Ndërto profesionet nga rrokjet dhe shkruaj formën tjetër. <b>4</b> Zgjidh fjalinë. <b>5</b> Lidhi.',
     tip:'Për gra: + <b>in</b>: Journalist → Journalist<b>in</b> <i class="tr">(gazetari → gazetarja)</i>'},
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'<b>Ärztin</b> dhe <b>Arzthelferin</b> i ke shkruar saktë ✓. Vetëm kjo:',
     fix:[['Ich bin Schuler.','Ich bin Schüler.','lerSchü → Schüler me ü. Butoni ü është poshtë.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'letters', psq:'1 Profesioni', pde:'1 Ergänzen Sie die Berufe', s:'Ich schreibe Texte für eine Zeitung. Ich bin ___.', a:'Journalistin', mix:'lisnaJourtin', h:'lisnaJourtin', e:'Shkruan për gazetë → Journalistin.'},
    {type:'letters', psq:'1 Profesioni', pde:'1 Ergänzen Sie die Berufe', s:'Ich arbeite in einem Krankenhaus. Ich bin ___.', a:'Ärztin', mix:'tinzrÄ', h:'tinzrÄ', e:'Krankenhaus → Ärztin.'},
    {type:'letters', psq:'1 Profesioni', pde:'1 Ergänzen Sie die Berufe', s:'Ich arbeite für einen Arzt. Ich bin ___.', a:'Arzthelferin', mix:'ferArztinhel', h:'ferArztinhel', e:'Arzt + Helferin = Arzthelferin.'},
    {type:'letters', psq:'1 Profesioni', pde:'1 Ergänzen Sie die Berufe', s:'Ich habe noch keine Arbeit. Ich bin ___.', a:'Schüler', mix:'lerSchü', h:'lerSchü', e:'Schüler me ü.'},
    {type:'cloze', psq:'2 Ndërto fjalët', pde:'2 Bilden Sie Wörter',
     text:'Ärz + tin = Ärztin ✓\nIn + ge + nieur = [[Ingenieur]]\nPo + li + zist = [[Polizist]]\nVer + käu + fer = [[Verkäufer]]\nHaus + meis + ter = [[Hausmeister]]\nHaus + frau = [[Hausfrau]]\nKran + ken + pfle + ger = [[Krankenpfleger]]\nJour + na + lis + tin = [[Journalistin]]',
     e:'Ingenieur, Polizist, Verkäufer, Hausmeister, Hausfrau, Krankenpfleger, Journalistin.'},
    {type:'table', psq:'2 Formë për gra', pde:'2 Ergänzen Sie: die …', th:['der ♂','die ♀'],
     rows:[['der Arzt','Ärztin',1],['der Ingenieur','Ingenieurin;die Ingenieurin'],['der Polizist','Polizistin;die Polizistin'],['der Verkäufer','Verkäuferin;die Verkäuferin'],
       ['der Hausmeister','Hausmeisterin;die Hausmeisterin'],['der Krankenpfleger','Krankenschwester;die Krankenschwester']],
     e:'+ in. Kujdes: Krankenpfleger → Krankenschwester.'},
    {type:'table', psq:'2 Formë për burra', pde:'2 Ergänzen Sie: der …', th:['die ♀','der ♂'],
     rows:[['die Hausfrau','Hausmann;der Hausmann'],['die Journalistin','Journalist;der Journalist']],
     e:'Hausfrau → Hausmann. Journalistin → Journalist.'},
    {type:'gap', topic:'dialog', psq:'4 Zgjidh', pde:'4 Ordnen Sie zu', s:'Was machen Sie beruflich? – ___ Studentin.', o:['Ich bin','ich arbeite als','Sehr gut','Haben Sie auch einen Job'], a:'Ich bin', e:'Ich bin Studentin.'},
    {type:'gap', topic:'dialog', psq:'4 Zgjidh', pde:'4 Ordnen Sie zu', s:'___? – Ja, ich arbeite als Arzthelferin.', o:['Haben Sie auch einen Job','Sehr gut','Ich bin','eine Ausbildung als Arzthelferin'], a:'Haben Sie auch einen Job', e:'Haben Sie auch einen Job? = A keni edhe një punë?'},
    {type:'gap', topic:'dialog', psq:'4 Zgjidh', pde:'4 Ordnen Sie zu', s:'Ja, ___ Arzthelferin.', o:['ich arbeite als','Ich bin bei','Sehr gut','Haben Sie auch einen Job'], a:'ich arbeite als', e:'ich arbeite als + profesioni.'},
    {type:'gap', topic:'dialog', psq:'4 Zgjidh', pde:'4 Ordnen Sie zu', s:'Haben Sie ___ gemacht? – Ja, natürlich!', o:['eine Ausbildung als Arzthelferin','Sehr gut','ich arbeite als','Ich bin'], a:'eine Ausbildung als Arzthelferin', e:'eine Ausbildung machen = bëj trajnim profesional.'},
    {type:'gap', topic:'dialog', psq:'4 Zgjidh', pde:'4 Ordnen Sie zu', s:'Wie gefällt Ihnen die Arbeit? – ___.', o:['Sehr gut','Ich bin','ich arbeite als','eine Ausbildung als Arzthelferin'], a:'Sehr gut', e:'Wie gefällt Ihnen …? – Sehr gut.'},
    {type:'match', psq:'5 Lidhi', pde:'5 Verbinden Sie', pairs:[['Was sind','Sie von Beruf?'],['Was machen','Sie beruflich?'],['Ich mache','eine Ausbildung als Arzthelferin.'],['Ich habe','eine Stelle als Physiotherapeut.']]},
    {type:'match', psq:'5 Lidhi', pde:'5 Verbinden Sie', pairs:[['Ich bin bei','Riemer & Partner angestellt.'],['Ich bin','zurzeit nicht berufstätig.'],['Ich arbeite','als Architektin.']]}
  ]
},

/* ---------- AB S. 87: Übung 6–7 ---------- */
{
  id:'hw10-s87', lek:8, pg:87, emoji:'🗂️', color:'#D6409F', seq:true, book:['faqe 87 · ushtrimi 6–7','S. 87 · Üb. 6–7'],
  sq:'Çfarë bëni?', de:'S. 87: Was machen Sie beruflich?',
  desc:'machst, bin, habe, bist, studiere, arbeite në biseda, dhe Sofia e Chiara.',
  tip:'Ich studiere noch = ende studioj. Ich bin Schülerin = jam nxënëse. als + profesioni, bei + firma.',
  lesson:[
    {t:'Faqe 87 📖', d:'Übung 6 + 7', p:'<b>6</b> Vendos foljen e duhur. <b>7</b> Shkruaj çfarë bëjnë Sofia dhe Chiara.',
     tip:'Sie arbeitet <b>als</b> Verkäuferin <b>bei</b> Possmann. <i class="tr">(Ajo punon si shitëse te Possmann.)</i>'},
    {t:'Bravo! 🌟', d:'Selbst korrigiert', p:'Te ushtrimi 6 i ke korrigjuar vetë: Ich <b>studiere</b> noch ✓ dhe Ich <b>bin</b> Schülerin ✓. Shumë mirë!',
     fix:[['Ich bin noch.','Ich studiere noch.','„noch“ këtu do të thotë: ende studioj.'],['Ich studiere Schülerin.','Ich bin Schülerin.','Schülerin është ajo që je → bin.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'verben', psq:'6 Rendit', pde:'6 Ordnen Sie zu', bank:['machst','bin','habe','bist','studiere','arbeite'],
     text:'a  Was machen Sie beruflich? ✓\n– Ich [[studiere]] noch. Und am Wochenende [[habe]] ich einen Job beim Fernsehen.\nb  Was [[machst]] du von Beruf?\n– Ich bin Arzthelferin, aber ich [[arbeite]] zurzeit nicht. Ich bin arbeitslos.\nc  Was [[bist]] du?\n– Ich [[bin]] Schülerin und nicht berufstätig.',
     e:'studiere, habe, machst, arbeite, bist, bin.'},
    {type:'order', topic:'satz', psq:'7a Sofia Renzel', pde:'7a Schreiben Sie', cue:'Sofia Renzel – Beruf: Studentin', parts:['Sofia Renzel','ist','Studentin.'], de:'Sofia Renzel ist Studentin.', sq:'Sofia Renzel është studente.'},
    {type:'order', topic:'satz', psq:'7a Sofia Renzel', pde:'7a Schreiben Sie', cue:'Job: Verkäuferin – Firma: Possmann', parts:['Sie','arbeitet','als Verkäuferin','bei Possmann.'], de:'Sie arbeitet als Verkäuferin bei Possmann.', sq:'Ajo punon si shitëse te Possmann.'},
    {type:'gap', row:true, psq:'als apo bei?', pde:'als oder bei?', s:'Sofia arbeitet als Verkäuferin ___ Possmann.', o:['bei','als','von'], a:'bei', e:'bei + firma.'},
    {type:'order', topic:'satz', psq:'7b Chiara Morrone', pde:'7b Schreiben Sie', cue:'Chiara Morrone – Beruf: Physiotherapeutin', parts:['Chiara Morrone','ist','Physiotherapeutin','von Beruf.'], de:'Chiara Morrone ist Physiotherapeutin von Beruf.', sq:'Chiara Morrone është fizioterapiste me profesion.'},
    {type:'order', topic:'satz', psq:'7b Chiara Morrone', pde:'7b Schreiben Sie', cue:'zurzeit: arbeitslos', parts:['Sie','ist','zurzeit','arbeitslos.'], de:'Sie ist zurzeit arbeitslos.', sq:'Aktualisht ajo është e papunë.'},
    {type:'order', topic:'satz', psq:'7b Chiara Morrone', pde:'7b Schreiben Sie', cue:'jetzt: Deutschkurs', parts:['Jetzt','macht','sie','einen Deutschkurs.'], de:'Jetzt macht sie einen Deutschkurs.', sq:'Tani ajo bën një kurs gjermanishteje.'}
  ]
},

/* ---------- AB S. 88: B Wann hast du die Ausbildung gemacht? ---------- */
{
  id:'hw10-s88', lek:8, pg:88, emoji:'⏳', color:'#2E86DE', seq:true, book:['faqe 88 · ushtrimi 11–14','S. 88 · Üb. 11–14'],
  sq:'Kur? Që kur? Sa kohë?', de:'S. 88: Wann hast du die Ausbildung gemacht?',
  desc:'Pyetje dhe përgjigje me Wann, Seit wann, Wie lange, e-maili i Elenës dhe vor apo seit.',
  tip:'Wann? → vor (ka mbaruar). Seit wann? → seit (vazhdon). Wie lange? → vetëm koha: Zwei Jahre.',
  lesson:[
    {t:'Faqe 88 📖', d:'B · Wann hast du die Ausbildung gemacht?', p:'<b>11</b> Lidhi. <b>12</b> Shkruaj fjalën pyetëse. <b>13</b> E-maili. <b>14</b> vor apo seit?',
     tip:'<b>Wann?</b> → vor drei Jahren <i class="tr">(para tre vitesh)</i> · <b>Seit wann?</b> → seit zwei Jahren <i class="tr">(prej dy vitesh)</i> · <b>Wie lange?</b> → zwei Jahre <i class="tr">(dy vjet)</i>'},
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'<b>Wann</b> te 12b dhe <b>Was</b> te 12c i ke saktë ✓. Vetëm këto:',
     fix:[
      ['12e: Was haben Sie Deutsch gelernt? – Zwei Jahre.','Wie lange haben Sie Deutsch gelernt?','„Zwei Jahre“ = sa kohë → Wie lange?'],
      ['14b: Seit wann leben Sie in Salzburg? – Um sechs Monaten.','… – Seit sechs Monaten.','„Seit wann?“ → seit. „um“ vetëm për orën.'],
      ['14c: Wann haben Sie geheiratet? – Im drei Monaten.','… – Vor drei Monaten.','„Wann?“ dhe ka mbaruar → vor. „im“ për muaj dhe stinë.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', psq:'11 Lidhi', pde:'11 Verbinden Sie', pairs:[['Wann haben Sie die Ausbildung gemacht?','Vor zehn Jahren.'],['Wie lange hat die Ausbildung gedauert?','Zwei Jahre.'],['Seit wann sind Sie schon selbstständig?','Seit 2005.']]},
    {type:'cloze', topic:'wfragen', psq:'12 Plotëso', pde:'12 Ergänzen Sie', h:'Shembull: Wann sind Sie geboren? – 1980.',
     text:'b  [[Wann]] sind Sie nach Österreich gekommen? – Vor drei Jahren.\nc  [[Was]] machen Sie beruflich? – Ich bin angestellt und arbeite als Ingenieur.\nd  [[Seit wann;Wie lange;Wie lange schon]] arbeiten Sie als Ingenieur? – Seit zwei Jahren.\ne  [[Wie lange]] haben Sie Deutsch gelernt? – Zwei Jahre, als Schüler.',
     e:'Vor drei Jahren → Wann. Seit zwei Jahren → Seit wann (ose Wie lange). Zwei Jahre → Wie lange.'},
    {type:'cloze', psq:'13 Rendit', pde:'13 Ordnen Sie zu', bank:['Diplom','Informationen','geehrter','Praktikum','Gerade','Fragen','gern','Grüßen','Wirtschaft'],
     text:'Betreff: Bewerbung um ein Praktikum im Marketing ✓\n\nSehr [[geehrter]] Herr Lornsen,\nich möchte gern in Ihrem Büro ein [[Praktikum]] machen. Ich bin Spanierin und habe in Madrid [[Wirtschaft]] und Marketing studiert. 2015 habe ich mein [[Diplom]] gemacht. [[Gerade]] mache ich hier in Hamburg einen Deutschkurs. Ich spreche auch sehr gut Englisch. Haben Sie noch [[Fragen]]?\nFür weitere [[Informationen]] stehe ich Ihnen [[gern]] zur Verfügung.\nMit freundlichen [[Grüßen]]\nElena Santos',
     e:'Sehr geehrter … · ein Praktikum · Wirtschaft · Diplom · Gerade · Fragen · Informationen · gern · Grüßen.'},
    {type:'cloze', topic:'zeit', psq:'14 vor apo seit?', pde:'14 Ergänzen Sie: vor – seit', h:'Shembull: Wann sind Sie nach Wien gekommen? – Vor zwei Jahren.',
     text:'b  Seit wann leben Sie schon in Salzburg? – [[Seit]] sechs Monaten.\nc  Wann haben Sie geheiratet? – [[Vor]] drei Monaten.\nd  Haben Sie schon eine Arbeit gefunden? – Ja, [[vor]] vier Wochen.\ne  Wie lange studieren Sie schon Wirtschaft? – [[Seit]] drei Jahren.\nf  Wann haben Sie das Praktikum bei XLAN gemacht? – [[Vor]] zwei Jahren.',
     e:'Ka mbaruar → vor. Vazhdon ende → seit.'},
    {type:'gap', row:true, topic:'zeit', psq:'14g vor apo seit?', pde:'14g vor oder seit?', s:'Wie lange lernen Sie schon Deutsch? – ___ vier Monaten.', o:['Seit','Vor'], a:'Seit', e:'Mëson ende → seit.'}
  ]
},

/* ---------- AB S. 89: Übung 15–16 ---------- */
{
  id:'hw10-s89', lek:8, pg:89, emoji:'🗓️', color:'#E3A008', seq:true, book:['faqe 89 · ushtrimi 15–16','S. 89 · Üb. 15–16'],
  sq:'seit, vor, von … bis, am, um, im', de:'S. 89: Zeitangaben',
  desc:'Fjalët e kohës në biseda dhe vor / seit me einem, einer.',
  tip:'seit / vor + einem (der, das) / einer (die). Shumësi: seit zwei Monaten. am + ditë, um + orë, im + stinë.',
  lesson:[
    {t:'Faqe 89 📖', d:'Übung 15 + 16', p:'<b>15</b> Plotëso me seit, vor, von … bis, am, um, im. <b>16</b> Shkruaj formën e saktë.', say:2, th:['','Kur?','Shembull'],
     tr:[['','','prej dy muajsh · para një jave'],['','','nga ora 8 deri në 14'],['','','të premten · pasdite'],['','','në orën tre'],['','','në verë']],
     table:[['<b>seit / vor</b>','koha','seit zwei Monaten · vor einer Woche'],['<b>von … bis</b>','nga … deri','von acht bis vierzehn Uhr'],['<b>am</b>','dita, pjesa e ditës','am Freitag · am Nachmittag'],
       ['<b>um</b>','ora','um drei Uhr'],['<b>im</b>','muaji, stina','im Sommer']],
     tip:'Një muaj, një vit: vor <b>einem</b> Monat, vor <b>einem</b> Jahr (pa -en!). Shumë: vor zwei Jahre<b>n</b>.'},
    {t:'Bravo + Kujdes 👀', d:'Aus deinem Buch', p:'Te 15b dhe 15d i ke korrigjuar vetë: <b>seit</b> zwei Monaten ✓ dhe <b>am</b> Sonnabend ✓. Bravo! 🌟 Kujdes vetëm këtu:',
     fix:[
      ['15f: Seit Nachmittag oder schon vor Vormittag?','Am Nachmittag oder schon am Vormittag?','Pjesë e ditës → am.'],
      ['15f: Ich möchte kurz um fünf Uhr zu Hause sein.','… kurz vor fünf Uhr …','kurz vor = pak para.'],
      ['16: Er hat vor einem Jahren geheiratet.','… vor einem Jahr …','Një vit = njëjës → pa -en.'],
      ['16: Ja, vor ein Monat.','Ja, vor einem Monat.','der Monat → vor einem Monat.'],
      ['16: Sie lernt erst seit einer Monaten Deutsch.','… seit einem Monat …','der Monat → einem (jo einer), pa -en.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'zeit', psq:'15 Plotëso', pde:'15 Ergänzen Sie', bank:['seit','vor','von … bis','am','um','im'],
     text:'a  Hast du Markus getroffen? – Ja, vor einer Woche. ✓\nb  Miriam macht [[seit]] zwei Monaten einen Deutschkurs.\nc  Wie lange arbeiten Sie [[am]] Freitag? – [[Von]] acht [[bis]] vierzehn Uhr.\nd  Ich kann [[am]] Sonnabend nicht kommen. Ich arbeite im Kaufhaus.',
     e:'seit zwei Monaten · am Freitag · von … bis · am Sonnabend.'},
    {type:'cloze', topic:'zeit', psq:'15 Plotëso', pde:'15 Ergänzen Sie', bank:['seit','vor','von … bis','am','um','im'],
     text:'e  Wie lange kennst du Paolo schon? – Erst [[seit]] einer Woche. Wir haben uns genau [[am]] Sonntag [[vor]] einer Woche bei Daniela getroffen.\nf  Wann gehst du heute einkaufen? [[Am]] Nachmittag oder schon [[am]] Vormittag? – [[Um]] drei Uhr. Ich möchte kurz [[vor]] fünf Uhr wieder zu Hause sein.\ng  Wann kommen deine Eltern? – [[Im]] Sommer.',
     e:'seit einer Woche · am Sonntag vor einer Woche · am Nachmittag · am Vormittag · um drei Uhr · kurz vor fünf · im Sommer.'},
    {type:'cloze', topic:'zeit', psq:'16 Forma e saktë', pde:'16 Ergänzen Sie in der richtigen Form', h:'Shembull: Er ist vor acht Monaten aus Mexiko zurückgekommen.',
     text:'Was macht eigentlich Felix?\n– Er ist vor acht Monaten aus Mexiko zurückgekommen – mit Rosa. Er hat vor [[einem Jahr]] (ein Jahr) geheiratet.\n– Toll! Hast du Rosa denn auch schon getroffen?\n– Ja, vor [[einem Monat]] (ein Monat).\n– Spricht sie auch Deutsch?\n– Noch nicht so gut. Sie lernt erst seit [[einem Monat]] (ein Monat) Deutsch.',
     e:'vor einem Jahr · vor einem Monat · seit einem Monat (njëjës: pa -en).'},
    {type:'gap', row:true, topic:'zeit', psq:'Një apo shumë?', pde:'Singular oder Plural?', s:'Er hat vor einem ___ geheiratet.', o:['Jahr','Jahren','Jahre'], a:'Jahr', e:'einem Jahr: njëjës, pa -en.'},
    {type:'gap', row:true, topic:'zeit', psq:'Një apo shumë?', pde:'Singular oder Plural?', s:'Sie lernt seit zwei ___ Deutsch.', o:['Monaten','Monate','Monat'], a:'Monaten', e:'Shumësi pas seit / vor merr -n: zwei Monaten.'},
    {type:'gap', row:true, topic:'zeit', psq:'einem apo einer?', pde:'einem oder einer?', s:'Ja, vor ___ Monat.', o:['einem','einer','ein'], a:'einem', e:'der Monat → einem Monat.'},
    {type:'gap', row:true, topic:'zeit', psq:'einem apo einer?', pde:'einem oder einer?', s:'Erst seit ___ Woche.', o:['einer','einem','ein'], a:'einer', e:'die Woche → einer Woche.'}
  ]
}
  ]
},

/* =====================================================================
   📄 Detyrat: Kursbuch Lektion 8 D–E, Grammatik und Lektion 9 (S. 100–109)
   Die Seiten aus dem Buch, mit Mimis Einträgen (Hörübungen ohne Audio weggelassen).
   ===================================================================== */
{
  id:'l11', date:'2026-10-30', added:'2026-10-30T21:56', emoji:'🚌',
  sq:'Detyrat: Mësimi 8 D–E dhe Mësimi 9', de:'Hausaufgaben · Kursbuch S. 100–109',
  parts:[

/* ---------- S. 100: Jobbörse ---------- */
{
  id:'hw11-s100', emoji:'🔎', color:'#E3A008', seq:true, book:['faqe 100 · D1','S. 100 · D1'],
  sq:'Bursa e punës', de:'S. 100: Praktikums- und Jobbörse',
  desc:'Mika, Radha, Brenda: çfarë bëjnë, për sa kohë kërkojnë punë dhe cili njoftim u përshtatet.',
  tip:'Für wie lange? → für einen Monat / ein Jahr / zwei Monate.',
  read:'<b>Mika:</b> Ich heiße Mika Salonen und bin 25 Jahre alt. Ich komme aus Turku und arbeite seit drei Jahren als Koch in einem Restaurant. Mit 20 war ich mal für neun Monate in Österreich, in Bregenz. Dort habe ich ziemlich gut Deutsch gelernt. Jetzt möchte ich aber noch mehr Deutsch lernen und suche für ein Jahr einen Job in der Gastronomie in Österreich, in der Schweiz oder in Deutschland.<br><br><b>Radha:</b> Ich bin Radha Arora, 23, und komme aus Indien. Seit drei Monaten bin ich in Deutschland. Ich studiere Informatik an der Universität in Würzburg. Mein Deutsch ist leider noch nicht sehr gut. Ich suche einen Job für die Semesterferien. Für einen Monat im Sommer. Vielleicht bekomme ich ja einen Job mit vielen Kollegen, dann kann ich arbeiten und Deutsch lernen.<br><br><b>Brenda:</b> Hallo, mein Name ist Brenda Halligan. Ich bin Amerikanerin und studiere Eventmanagement in Boston. Bald gehe ich für drei Monate nach Europa und mache einen Monat lang ein Praktikum bei einer Konzertagentur in Hamburg. Danach suche ich noch für zwei Monate ein Praktikum in Österreich oder in der Schweiz. Im Herbst fängt dann mein Studium wieder an. Im letzten Jahr hatte ich für sechs Wochen einen Job bei einem Catering-Service in Berlin.<br><br><b>A · Originell Catering &amp; Events Zürich</b> – Gastronomie / Tourismus / Eventmanagement. Praktikumsstellen/Jobs von April bis Oktober für zwei Monate oder mehr.<br><b>B · Hotel Kaiserhof Wien</b> – Wir suchen einen Koch/eine Köchin und Auszubildende als Koch/Köchin und Eventmanager (m/w) für mindestens drei Monate.<br><b>C · Phill GmbH, Berlin</b> – Sie studieren Wirtschaft, Mathematik, Informatik und haben sehr gute Englischkenntnisse. Praktikumsstellen für mindestens einen Monat.',
  lesson:[
    {t:'Faqe 100 📖', d:'Seite 100', p:'<b>D1a</b> Lexo: çfarë bëjnë personat dhe për sa kohë kërkojnë punë? <b>D1b</b> Cili njoftim i përshtatet secilit?',
     tip:'Te D1b i ke lidhur <b>të tre saktë</b> në libër: Mika → B, Radha → C, Brenda → A. 🌟'}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, topic:'lesen', psq:'D1a Çfarë bëjnë?', pde:'D1a Was machen die Personen?', q:'Was macht Mika?', o:['Er arbeitet als Koch.','Er studiert Informatik.','Er studiert Eventmanagement.','Er ist Kellner.'], a:'Er arbeitet als Koch.', e:'„… arbeite seit drei Jahren als Koch.“'},
    {type:'mc', read:true, topic:'lesen', psq:'D1a Për sa kohë?', pde:'D1a Für wie lange?', q:'Für wie lange sucht Mika einen Job?', o:['für ein Jahr','für einen Monat','für zwei Monate','für sechs Wochen'], a:'für ein Jahr', e:'„… suche für ein Jahr einen Job.“'},
    {type:'mc', read:true, topic:'lesen', psq:'D1a Çfarë bëjnë?', pde:'D1a Was machen die Personen?', q:'Was macht Radha?', o:['Sie studiert Informatik.','Sie arbeitet als Köchin.','Sie studiert Eventmanagement.','Sie macht ein Praktikum in Hamburg.'], a:'Sie studiert Informatik.', e:'„Ich studiere Informatik an der Universität in Würzburg.“'},
    {type:'mc', read:true, topic:'lesen', psq:'D1a Për sa kohë?', pde:'D1a Für wie lange?', q:'Für wie lange sucht Radha einen Job?', o:['für einen Monat','für ein Jahr','für zwei Monate','für drei Monate'], a:'für einen Monat', e:'„Für einen Monat im Sommer.“'},
    {type:'mc', read:true, topic:'lesen', psq:'D1a Çfarë bëjnë?', pde:'D1a Was machen die Personen?', q:'Was macht Brenda?', o:['Sie studiert Eventmanagement.','Sie studiert Informatik.','Sie arbeitet als Köchin.','Sie arbeitet bei einer Bank.'], a:'Sie studiert Eventmanagement.', e:'„… studiere Eventmanagement in Boston.“'},
    {type:'mc', read:true, topic:'lesen', psq:'D1a Për sa kohë?', pde:'D1a Für wie lange?', q:'Für wie lange sucht Brenda noch ein Praktikum?', o:['für zwei Monate','für einen Monat','für sechs Wochen','für ein Jahr'], a:'für zwei Monate', e:'„Danach suche ich noch für zwei Monate ein Praktikum …“'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D1b Cili njoftim?', pde:'D1b Welche Anzeige passt?', q:'Mika', o:['A','B','C'], a:'B', e:'Koch, ein Jahr, Österreich → B (Hotel Kaiserhof Wien).'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D1b Cili njoftim?', pde:'D1b Welche Anzeige passt?', q:'Radha', o:['A','B','C'], a:'C', e:'Informatik, einen Monat, Team → C (Phill GmbH).'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D1b Cili njoftim?', pde:'D1b Welche Anzeige passt?', q:'Brenda', o:['A','B','C'], a:'A', e:'Eventmanagement, zwei Monate, Schweiz → A (Originell Catering Zürich).'}
  ]
},

/* ---------- S. 101: Am Telefon ---------- */
{
  id:'hw11-s101', emoji:'📞', color:'#2E86DE', seq:true, book:['faqe 101 · E2','S. 101 · E2'],
  sq:'Në telefon', de:'S. 101: Ist die Stelle noch frei?',
  desc:'Biseda në telefon për praktikën te Online-Spiel-Studios, si në libër.',
  tip:'Ist die Stelle noch frei? · Wie lange dauert das Praktikum? · Wie ist die Arbeitszeit? · Bekomme ich auch Geld?',
  lesson:[
    {t:'Faqe 101 📖', d:'Seite 101', p:'<b>E2</b> Bisedë në telefon për një praktikë. Në libër e ke bërë me <b>Online-Spiel-Studios</b> ✓.',
     tip:'jeden Montag = <b>montags</b>, jeden Vormittag = <b>vormittags</b> (me -s, shkronjë e vogël).'}
  ],
  nouns:[], words:[],
  items:[
    {type:'order', psq:'E2 Praktikantja', pde:'E2 Die Praktikantin', cue:'Guten Tag … · Anzeige gelesen · Stelle noch frei?', parts:['Guten Tag, mein Name ist Mimoza Darsi.','Ich habe Ihre Anzeige gelesen.','Ist die Stelle noch frei?'], de:'Guten Tag, mein Name ist Mimoza Darsi. Ich habe Ihre Anzeige gelesen. Ist die Stelle noch frei?', sq:'Mirëdita, emri im është Mimoza Darsi. E kam lexuar njoftimin tuaj. A është ende i lirë vendi?'},
    {type:'cloze', psq:'E2 Firma', pde:'E2 Die Firma', h:'Online-Spiel-Studios: 3–4 Monate im Sommer · Mo–Fr 9–18 Uhr · 450 Euro pro Monat',
     text:'Wie lange dauert das Praktikum?\n– Wir suchen Praktikanten für drei Monate im [[Sommer]].\nAha, und wie ist die Arbeitszeit?\n– Praktikanten arbeiten bei uns normalerweise montags bis freitags von [[9]] bis [[18]] Uhr.\nBekomme ich für das Praktikum auch Geld?\n– Ja, wir zahlen [[450]] Euro pro [[Monat]].',
     e:'Sommer, 9, 18, 450, Monat.'},
    {type:'gap', row:true, psq:'E2 Plotëso', pde:'E2 Ergänzen Sie', s:'Ist die Stelle noch ___?', o:['frei','lang','teuer'], a:'frei', e:'Ist die Stelle noch frei?'},
    {type:'gap', row:true, topic:'verben', psq:'E2 Plotëso', pde:'E2 Ergänzen Sie', s:'Und wie lange ___ das Praktikum?', o:['dauert','dauern','dauerst'], a:'dauert', e:'das Praktikum → dauert.'},
    {type:'gap', topic:'verben', psq:'E2 Plotëso', pde:'E2 Ergänzen Sie', s:'___ ich für das Praktikum auch Geld?', o:['Bekomme','Bekommt','Bekommst','Bekommen'], a:'Bekomme', e:'ich bekomme.'},
    {type:'gap', row:true, psq:'E2 Plotëso', pde:'E2 Ergänzen Sie', s:'Ja, schicken Sie Ihre Bewerbung bitte ___ E-Mail.', o:['per','in','am'], a:'per', e:'per E-Mail.'},
    {type:'gap', row:true, topic:'zeit', psq:'montags, vormittags', pde:'montags, vormittags', s:'jeden Montag = ___', o:['montags','Montags','am Montags'], a:'montags', e:'montags: -s, shkronjë e vogël.'},
    {type:'gap', row:true, topic:'zeit', psq:'montags, vormittags', pde:'montags, vormittags', s:'jeden Vormittag = ___', o:['vormittags','Vormittags','am Vormittags'], a:'vormittags', e:'vormittags: -s, shkronjë e vogël.'}
  ]
},

/* ---------- S. 102: Grammatik ---------- */
{
  id:'hw11-s102', emoji:'🧩', color:'#7650F0', seq:true, book:['faqe 102 · gramatika','S. 102 · Grammatik'],
  sq:'Gramatika e mësimit 8', de:'S. 102: Grammatik und Kommunikation',
  desc:'als / bei, vor / seit / für, war / hatte: përmbledhja e mësimit 8.',
  tip:'als + profesioni, bei + firma. vor / seit + einem, einer (Dativ). für + einen, ein, eine (Akkusativ).',
  lesson:[
    {t:'Faqe 102 📖', d:'Grammatik', p:'Përmbledhja e gramatikës së mësimit 8. Plotëso tabelat dhe fjalitë.',
     tip:'Früher <b>war</b> / <b>hatte</b> ich … Heute <b>bin</b> / <b>habe</b> ich … <i class="tr">(Dikur isha / kisha … Sot jam / kam …)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', psq:'2 als apo bei?', pde:'2 als oder bei?', bank:['als','bei'], text:'Ich arbeite [[als]] Hausmeister [[bei]] TerraMax.\nSofia arbeitet [[als]] Physiotherapeutin.', e:'als + profesioni, bei + firma.'},
    {type:'cloze', topic:'zeit', psq:'3 + 4 vor, seit, für', pde:'3 + 4 vor, seit, für', bank:['vor','seit','für','einem','einen','einer'],
     text:'Ich habe [[vor]] [[einem]] Jahr die Ausbildung gemacht.\nIch bin [[seit]] [[einer]] Woche selbstständig.\nIch suche [[für]] [[einen]] Monat einen Job.',
     e:'vor einem Jahr (Dativ), seit einer Woche (Dativ), für einen Monat (Akkusativ).'},
    {type:'table', topic:'seinhaben', psq:'5 Präteritum: sein', pde:'5 Präteritum: sein', th:['','sein → war'],
     rows:[['ich','war'],['du','warst'],['er / es / sie','war'],['wir','waren'],['ihr','wart'],['sie / Sie','waren']], e:'ich war, du warst, er war, wir waren, ihr wart, sie waren.'},
    {type:'table', topic:'seinhaben', psq:'5 Präteritum: haben', pde:'5 Präteritum: haben', th:['','haben → hatte'],
     rows:[['ich','hatte'],['du','hattest'],['er / es / sie','hatte'],['wir','hatten'],['ihr','hattet'],['sie / Sie','hatten']], e:'ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten.'},
    {type:'cloze', topic:'seinhaben', psq:'Dikur dhe sot', pde:'Früher und heute',
     text:'Früher [[hatte]] Anna viel Arbeit. Heute [[hat]] sie nicht so viel Arbeit.\nFrüher [[war]] ihr Chef nicht nett. Heute [[ist]] ihre Chefin toll.',
     e:'Früher: hatte / war. Heute: hat / ist.'},
    {type:'order', topic:'satz', psq:'Pesë dëshira', pde:'Fünf Wünsche', cue:'gern – für ein Jahr – ich möchte – in Italien am Meer sein', parts:['Ich','möchte','gern','für ein Jahr','in Italien am Meer','sein.'], de:'Ich möchte gern für ein Jahr in Italien am Meer sein.', sq:'Do të doja të isha për një vit në Itali, buzë detit.'}
  ]
},

/* ---------- S. 106–107: Folge 9 ---------- */
{
  id:'hw11-s106', emoji:'🚌', color:'#0E9F8E', seq:true, book:['faqe 106–107 · historia','S. 106–107 · Foto-Hörgeschichte'],
  sq:'Historia: Na los, komm mit!', de:'S. 106–107: Folge 9',
  desc:'Ku janë Lara dhe Timi dhe korrigjimi i fjalive (ushtrimi 4).',
  tip:'Amt → Autovermietung → ZOB. Tim do të shkojë në Salzburg.',
  read:'Tim möchte ein Auto mieten und nach Salzburg fahren. Lara kommt mit. Zuerst sind sie auf einem Amt, bei der Führerscheinstelle. Sie wollen wissen: Ist Tims Führerschein gültig? Mit einem ausländischen Führerschein kann man nur sechs Monate in Deutschland fahren. Tim hat keinen internationalen Führerschein. Lara kommt aus der EU, sie braucht keinen internationalen Führerschein.<br><br>Dann sind sie bei einer Autovermietung. Lara möchte ein Auto mieten. Aber sie bekommt kein Auto: Sie ist erst 20 Jahre alt.<br><br>Zum Schluss sind sie am Zentralen Omnibusbahnhof (ZOB). Sie kaufen Fahrkarten. Die Fahrt dauert nur zwei Stunden.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Në libër i ke korrigjuar <b>të gjitha saktë</b> te ushtrimi 4: Salzburg, sechs Monate, keinen, keinen, mieten, 20, zwei Stunden. Tani edhe një herë këtu! 😊'}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, topic:'lesen', psq:'2 Ku janë?', pde:'2 Wo sind Lara und Tim?', q:'Wo sind Lara und Tim zuerst?', o:['auf einem Amt','bei einer Autovermietung','am Zentralen Omnibusbahnhof'], a:'auf einem Amt', e:'Fotot 1–3: Führerscheinstelle.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Ku janë?', pde:'2 Wo sind Lara und Tim?', q:'Wo wollen sie ein Auto mieten?', o:['bei einer Autovermietung','auf einem Amt','am Zentralen Omnibusbahnhof'], a:'bei einer Autovermietung', e:'Fotot 5–6: Autovermietung.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Ku janë?', pde:'2 Wo sind Lara und Tim?', q:'Wo kaufen sie zum Schluss ein Busticket?', o:['am Zentralen Omnibusbahnhof','auf einem Amt','bei einer Autovermietung'], a:'am Zentralen Omnibusbahnhof', e:'Fotot 7–8: ZOB München.'},
    {type:'gap', read:true, row:true, psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'a  Tim möchte ein Auto mieten und nach ___ fahren.', o:['Salzburg','Polen'], a:'Salzburg', e:'nach Salzburg.'},
    {type:'gap', read:true, row:true, psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'b  Mit einem ausländischen Führerschein kann man nur ___ Monate in Deutschland fahren.', o:['sechs','acht'], a:'sechs', e:'sechs Monate.'},
    {type:'gap', read:true, row:true, topic:'ein', psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'c  Tim hat ___ internationalen Führerschein.', o:['keinen','einen'], a:'keinen', e:'keinen internationalen Führerschein.'},
    {type:'gap', read:true, row:true, topic:'ein', psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'d  Lara kommt aus der EU. Sie braucht ___ internationalen Führerschein.', o:['keinen','einen'], a:'keinen', e:'EU → keinen.'},
    {type:'gap', read:true, row:true, psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'e  Lara möchte ein Auto ___.', o:['mieten','kaufen'], a:'mieten', e:'mieten.'},
    {type:'gap', read:true, row:true, psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'f  Sie ist zu jung, sie ist erst ___ Jahre alt.', o:['20','21'], a:'20', e:'20 Jahre.'},
    {type:'gap', read:true, row:true, psq:'4 Korrigjo', pde:'4 Korrigieren Sie', s:'g  Die Fahrt dauert nur ___ Stunden.', o:['zwei','neun'], a:'zwei', e:'zwei Stunden.'}
  ]
},

/* ---------- S. 108: müssen ---------- */
{
  id:'hw11-s108', emoji:'📋', color:'#7650F0', seq:true, book:['faqe 108 · A1–A4','S. 108 · A1–A4'],
  sq:'müssen: duhet', de:'S. 108: Sie müssen einen Antrag ausfüllen',
  desc:'Patenta ndërkombëtare, një makinë me qira dhe bileta në automat.',
  tip:'ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen. Folja tjetër në fund.',
  lesson:[
    {t:'Faqe 108 📖', d:'Seite 108', p:'<b>A1</b> Çfarë duhet të bëjë Timi? <b>A2</b> Një makinë me qira. <b>A3</b> Bileta në automat. <b>A4</b> Çfarë duhet të bësh sot?',
     tip:'Te A1 dhe A3b i ke bërë mirë në libër ✓. Shkrove edhe vetë: <b>Was muss ich mitbringen?</b> 👏'}
  ],
  nouns:[], words:[],
  items:[
    {type:'table', topic:'modal', psq:'Folja müssen', pde:'Modalverb müssen', th:['','müssen'],
     rows:[['ich','muss'],['du','musst'],['er / es / sie','muss'],['wir','müssen'],['ihr','müsst'],['sie / Sie','müssen']], e:'ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen.'},
    {type:'cloze', topic:'modal', psq:'A1 Tim', pde:'A1 Tim', h:'müssen + folja në fund',
     text:'Er [[muss]] einen Antrag ausfüllen.\nEr [[muss]] einen kanadischen Führerschein haben.\nEr [[muss]] den Ausweis, den Führerschein und ein Foto [[mitbringen]].',
     e:'er muss … ausfüllen / haben / mitbringen.'},
    {type:'cloze', topic:'modal', psq:'A2 Një makinë me qira', pde:'A2 Ein Auto mieten', h:'Ich möchte ein Auto mieten. Wie geht das?',
     text:'Also, du [[musst]] einen internationalen oder einen EU-Führerschein haben.\nDu [[musst]] mindestens 21 Jahre alt [[sein]].\nDu [[musst]] einen Personalausweis oder einen Reisepass [[mitbringen]].\nUnd du [[musst]] eine Kreditkarte [[haben]].',
     e:'du musst … haben / sein / mitbringen.'},
    {type:'cloze', topic:'modal', psq:'A3 Bileta në automat', pde:'A3 Eine Fahrkarte kaufen', bank:['wählen','auswählen','bezahlen','nehmen','stempeln'],
     text:'Zuerst muss man das Ziel [[wählen]].\nDann muss man Erwachsener oder Kind [[auswählen]].\nDanach muss man [[bezahlen]].\nDann muss man die Fahrkarte und das Wechselgeld [[nehmen]].\nZum Schluss muss man die Fahrkarte [[stempeln]].',
     e:'1 wählen, 2 auswählen, 3 bezahlen, 4 nehmen, 5 stempeln.'},
    {type:'gap', row:true, psq:'man apo Mann?', pde:'man oder Mann?', s:'Zuerst muss ___ das Ziel wählen.', o:['man','Mann'], a:'man', e:'man = kushdo.'},
    {type:'order', topic:'satz', psq:'A4 Çfarë duhet të bësh sot?', pde:'A4 Was müssen Sie heute noch machen?', cue:'heute noch – ich muss – einkaufen – und – die Wohnung aufräumen', parts:['Ich','muss','heute noch','einkaufen','und','die Wohnung','aufräumen.'], de:'Ich muss heute noch einkaufen und die Wohnung aufräumen.', sq:'Sot duhet të bëj ende pazar dhe të rregulloj banesën.'},
    {type:'order', topic:'satz', psq:'Pyetja jote', pde:'Deine Frage', parts:['Was','muss','ich','mitbringen?'], de:'Was muss ich mitbringen?', sq:'Çfarë duhet të sjell me vete?'}
  ]
},

/* ---------- S. 109: Imperativ ---------- */
{
  id:'hw11-s109', emoji:'👉', color:'#F2545B', seq:true, book:['faqe 109 · B1–B2','S. 109 · B1–B2'],
  sq:'Sieh mal! Urdhërorja', de:'S. 109: Imperativ',
  desc:'Lara dhe Timi para agjencisë së makinave, çfarë duhet të bëjë Timi dhe në klasë.',
  tip:'du kommst → Komm! du bist → Sei! ihr seid → Seid! ihr lest → Lest!',
  lesson:[
    {t:'Kujdes! 👀', d:'Schau nochmal', p:'Te B1a i ke bërë mirë ✓ Sieh, Geh, warte, Bring. Vetëm një gjë:',
     fix:[['Na los, kommt mit!','Na los, komm mit!','Me du: komm (pa -t). Kommt është për ihr.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'imperativ', psq:'B1a Plotëso', pde:'B1a Hören Sie und ordnen Sie zu', bank:['Bring','Geh','sieh','komm','warte'],
     text:'Du, [[sieh]] mal! Da vorne ist eine Autovermietung. Da gehen wir jetzt hin und fragen. Na los, [[komm]] mit!\n– Ja, gleich. [[Geh]] du schon! Ich will noch schnell in den Laden da. Ich habe so einen Hunger!\n– Okay. Tim, [[warte]] mal! [[Bring]] ein Wasser für mich mit!',
     e:'sieh, komm (jo kommt!), Geh, warte, Bring.'},
    {type:'order', topic:'imperativ', psq:'B1b Çfarë thotë Lara?', pde:'B1b Was sagt Lara?', cue:'zu Walter fahren und Lili abholen', parts:['Fahr','zu Walter','und','hol','Lili','ab!'], de:'Fahr zu Walter und hol Lili ab!', sq:'Shko te Walteri dhe merre Lilin!'},
    {type:'cloze', topic:'imperativ', psq:'B1b Çfarë thotë Lara?', pde:'B1b Was sagt Lara?', h:'die Hausaufgaben machen · einen Kaffee mitbringen · leise sein · Lili die Matheübung erklären · eine E-Mail schreiben',
     text:'[[Mach]] die Hausaufgaben!\n[[Bring]] einen Kaffee [[mit]]!\n[[Sei]] leise!\n[[Erklär;Erkläre]] Lili die Matheübung!\n[[Schreib;Schreibe]] eine E-Mail an die Lehrerin!',
     e:'Mach! Bring … mit! Sei! Erklär! Schreib!'},
    {type:'cloze', topic:'imperativ', psq:'B2 Në klasë (ihr)', pde:'B2 In der Klasse', bank:['Seid','Schließt','Hört','Steht','Macht','Öffnet','Lest'],
     text:'[[Seid]] bitte nicht so laut!\n[[Schließt]] bitte die Bücher!\n[[Hört]] doch bitte zu!\n[[Steht]] bitte nicht auf!\n[[Macht]] doch die Handys aus!\n[[Öffnet]] bitte die Bücher!\n[[Lest]] bitte den Text!',
     e:'Me ihr: forma e ihr pa ihr: Seid, Schließt, Hört, Steht, Macht, Öffnet, Lest.'}
  ]
}
  ]
}

];
