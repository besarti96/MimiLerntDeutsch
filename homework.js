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
    {type:'mc', psq:'Çfarë përgjigjet vajza?', pde:'Was antwortet das Mädchen?', q:'Gehen wir ein bisschen spazieren?', speakQ:true, h:'Hera e parë: vajza është e sjellshme 🙂',
     o:['Jetzt nicht. Ich möchte gern fernsehen.','Ich will aber kein Gemüse essen!','Kommst du jetzt? Wir essen!','Nur kurz. Bitte!'],
     a:'Jetzt nicht. Ich möchte gern fernsehen.', say:'Jetzt nicht. Ich möchte gern fernsehen.', e:'Hera e parë: e sjellshme.'},
    {type:'mc', psq:'Çfarë përgjigjet vajza?', pde:'Was antwortet das Mädchen?', q:'Nur kurz. Bitte!', speakQ:true, h:'Hera e dytë: vajza nervozohet 😤',
     o:['Nein! Ich will jetzt wirklich fernsehen!','Jetzt nicht. Ich möchte gern fernsehen.','Kommst du jetzt? Wir essen!','Gehen wir ein bisschen spazieren?'],
     a:'Nein! Ich will jetzt wirklich fernsehen!', say:'Nein! Ich will jetzt wirklich fernsehen!', e:'Hera e dytë: e nervozuar 😤.'},
    {type:'mc', psq:'Çfarë përgjigjet vajza?', pde:'Was antwortet das Mädchen?', q:'Kommst du jetzt? Wir essen!', speakQ:true, h:'Biseda për perimet, hera e dytë: vajza nervozohet 😤',
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
},
{
  id:'l12', date:'2026-11-06', added:'2026-11-06T11:15', emoji:'🏥',
  sq:'Libri: Mësimi 9 B–E dhe Mësimi 10', de:'Kursbuch S. 109–121',
  parts:[

/* ---------- S. 109: Imperativ mit Sie ---------- */
{
  id:'hw12-s109', emoji:'🙋', color:'#2E86DE', seq:true, book:['faqe 109 · B3–B4','S. 109 · B3–B4'],
  sq:'Në shkollën e gjuhëve', de:'S. 109: Imperativ mit Sie',
  desc:'Çfarë duhet të bësh te regjistrimi në kurs dhe rregullat e tua për mësuesen.',
  tip:'Sie warten → Warten Sie! Sie sind → Seien Sie!',
  read:'<b>Anmeldung zum Sprachunterricht</b><br>Warten Sie bitte im Wartebereich. Bringen Sie bitte Ihren Pass zur Anmeldung mit. Bezahlen Sie die Kursgebühren an der Kasse im 1. Stock. Seien Sie bitte leise. Die anderen haben Unterricht.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Te B3 i ke shkruar saktë <b>Warten Sie!</b>, <b>Bringen Sie … mit!</b> dhe <b>Bezahlen Sie!</b> Te B4: <b>Geben Sie keine Hausaufgaben! Lachen Sie viel!</b> 😄',
     tip:'E fundit mbeti bosh: Sie sind leise → <b>Seien Sie</b> bitte leise! <i class="tr">(Ju lutem, jini të qetë!)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', read:true, topic:'imperativ', psq:'B3 Plotëso tabelën', pde:'B3 Ergänzen Sie die Tabelle',
     text:'Sie warten → [[Warten]] Sie!\nSie bringen … mit → [[Bringen]] Sie … [[mit]]!\nSie bezahlen → [[Bezahlen]] Sie!\nSie sind leise → [[Seien]] Sie bitte leise!',
     e:'Warten Sie! Bringen Sie … mit! Bezahlen Sie! Seien Sie leise!'},
    {type:'mc', read:true, topic:'lesen', psq:'B3 Çfarë duhet?', pde:'B3 Was muss man machen?', q:'Wo muss man die Kursgebühren bezahlen?', o:['an der Kasse im 1. Stock','im Wartebereich','im Unterricht','an der Anmeldung im 2. Stock'], a:'an der Kasse im 1. Stock', e:'„Bezahlen Sie die Kursgebühren an der Kasse im 1. Stock.“'},
    {type:'mc', read:true, topic:'lesen', psq:'B3 Çfarë duhet?', pde:'B3 Was muss man machen?', q:'Warum muss man leise sein?', o:['Die anderen haben Unterricht.','Die Lehrerin schläft.','Man muss telefonieren.','Die Kasse ist zu.'], a:'Die anderen haben Unterricht.', e:'„Die anderen haben Unterricht.“'},
    {type:'gap', topic:'imperativ', psq:'B4 Rregulla për mësuesen', pde:'B4 Regeln für die Kursleiterin', s:'___ Sie bitte langsam!', h:'sprechen', o:['Sprechen','Sprecht','Sprich','Sprichst'], a:'Sprechen', e:'Sie sprechen → Sprechen Sie!'},
    {type:'order', topic:'imperativ', psq:'B4 Rregullat e tua', pde:'B4 Deine Regeln', de:'Geben Sie bitte keine Hausaufgaben!', sq:'Ju lutem, mos jepni detyra shtëpie!'},
    {type:'order', topic:'imperativ', psq:'B4 Rregullat e tua', pde:'B4 Deine Regeln', de:'Lachen Sie viel!', sq:'Qeshni shumë!'}
  ]
},

/* ---------- S. 110: dürfen ---------- */
{
  id:'hw12-s110', emoji:'🚭', color:'#16A34A', seq:true, book:['faqe 110 · C1–C3','S. 110 · C1–C3'],
  sq:'dürfen: lejohet', de:'S. 110: Sie dürfen in der EU Auto fahren',
  desc:'Kush lejohet të ngasë makinë, bisedat „Achtung!“ dhe rregullat në autobus.',
  tip:'ich darf, du darfst, er darf, wir dürfen, ihr dürft, sie dürfen. erlaubt = e lejuar, verboten = e ndaluar.',
  read:'Tim hat einen ausländischen Führerschein, aber keinen internationalen Führerschein. Mit einem ausländischen Führerschein kann man nur sechs Monate in Deutschland fahren. Lara kommt aus der EU. Sie braucht keinen internationalen Führerschein.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te C1 i ke shënuar <b>të gjitha saktë</b>: Tim, Er, Tim, Lara. 👏',
     tip:'Shënimet e tua: <b>erlaubt</b> = e lejuar, <b>verboten</b> = e ndaluar, <b>der Fernbus</b> = autobusi ndërqytetës.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'gap', read:true, row:true, psq:'C1 Çfarë është e saktë?', pde:'C1 Was ist richtig?', s:'a  ___ darf im Moment nicht in Deutschland Auto fahren.', o:['Tim','Lara'], a:'Tim', e:'Tim nuk ka patentë ndërkombëtare.'},
    {type:'gap', read:true, row:true, psq:'C1 Çfarë është e saktë?', pde:'C1 Was ist richtig?', s:'a  ___ hat keinen internationalen Führerschein.', o:['Er','Sie'], a:'Er', e:'Er = Tim.'},
    {type:'gap', read:true, row:true, psq:'C1 Çfarë është e saktë?', pde:'C1 Was ist richtig?', s:'b  ___ muss einen internationalen Führerschein beantragen.', o:['Tim','Lara'], a:'Tim', e:'Tim duhet të aplikojë.'},
    {type:'gap', read:true, row:true, psq:'C1 Çfarë është e saktë?', pde:'C1 Was ist richtig?', s:'c  ___ darf in der EU Auto fahren.', o:['Lara','Tim'], a:'Lara', e:'Lara vjen nga BE-ja.'},
    {type:'table', topic:'modal', psq:'Folja dürfen', pde:'Modalverb dürfen', th:['','dürfen'],
     rows:[['ich','darf'],['du','darfst'],['er / es / sie / man','darf'],['wir','dürfen',true],['ihr','dürft',true],['sie / Sie','dürfen',true]], e:'ich darf, du darfst, er darf (pa mbaresë).'},
    {type:'cloze', topic:'modal', psq:'C2 Biseda', pde:'C2 Spielen Sie Gespräche', h:'müssen apo dürfen?',
     text:'A  Achtung! Du [[musst]] das Handy ausmachen. – Warum denn? – Hier [[darf]] man nicht telefonieren.\nB  Achtung! Ihr [[müsst]] die Zigaretten ausmachen. – Warum denn? – Hier [[darf]] man nicht rauchen.\nC  Achtung! Du [[musst]] langsam fahren. – Warum denn? – Hier [[darf]] man nur 30 fahren.\nD  Achtung! Wir [[müssen]] einen neuen Parkplatz suchen. – Warum denn? – Hier [[darf]] man nicht parken.',
     e:'du musst, ihr müsst, wir müssen · Hier darf man nicht …'},
    {type:'sort', psq:'C3 Në autobus: Rregullat tona', pde:'C3 Eine Fernbus-Reise: Unsere Regeln', h:'Si në shembullin e librit: Gepäck abgeben = duhet, Eis ⛔, Fahrrad ✅', cats:['man darf','man darf nicht','man muss'],
     items:[['Fahrrad mitnehmen','man darf'],['schlafen','man darf'],['Eis essen','man darf nicht'],['rauchen','man darf nicht'],['Gepäck abgeben','man muss'],['Fahrkarte kaufen','man muss']],
     e:'man darf: Fahrrad, schlafen · man darf nicht: Eis, rauchen · man muss: Gepäck abgeben, Fahrkarte kaufen.'},
    {type:'gap', row:true, topic:'modal', psq:'C3 Plotëso', pde:'C3 Ergänzen Sie', s:'Man darf im Bus kein Eis essen. Das ist ___.', o:['verboten','erlaubt'], a:'verboten', e:'darf nicht = verboten.'}
  ]
},

/* ---------- S. 111: Salzburg ---------- */
{
  id:'hw12-s111', emoji:'🏰', color:'#E3A008', seq:true, book:['faqe 111 · D1–D2','S. 111 · D1–D2'],
  sq:'Salzburgu në 100 minuta', de:'S. 111: Informationsbroschüre',
  desc:'Lexo broshurën dhe përgjigju pyetjeve si në libër.',
  tip:'Wie lange …? → Von … bis … · Wann …? → um 14 Uhr · Wie oft …? → dreimal am Tag.',
  read:'<b>Salzburg in 100 Minuten</b><br>Sie sind nur für wenige Stunden in Salzburg? Besichtigen Sie die „Mozartstadt“ in nur 100 Minuten. Auf dem Stadtrundgang lernen Sie die wichtigsten Sehenswürdigkeiten kennen.<br><br>Beginnen Sie den Rundgang an der Getreidegasse. Sie ist die Einkaufsstraße in Salzburg – hier gibt es einfach alles. In der Getreidegasse 9 ist der berühmte Komponist Wolfgang Amadeus Mozart geboren.<br><i>Mehr Zeit? Besuchen Sie das Museum in Mozarts Geburtshaus. Öffnungszeiten: täglich 9.00–17.30 Uhr. Preis: 10,00 Euro für Erwachsene, 3,50 Euro für Kinder, 50 % Ermäßigung für Gruppen, Studenten und Senioren.</i><br><br>Spazieren Sie weiter zur Hofstallgasse. Dort sehen Sie drei Spielorte für die Salzburger Festspiele: das Haus für Mozart, die Felsenreitschule und das Große Festspielhaus. Das ganze Jahr finden hier Konzerte und Opernaufführungen statt.<br><i>Mehr Zeit? Besichtigen Sie die Festspielhäuser bei einer Führung: täglich um 14.00 Uhr. Dauer: 50 Minuten. Sprachen: Deutsch und Englisch.</i><br><br>Nun kommen Sie zum Dom. Dort findet jedes Jahr die Aufführung „Jedermann“ statt. Vom Dom sind es nur ein paar Schritte zum Residenzplatz. Dort gibt es viele schöne Gebäude, zum Beispiel die Neue Residenz mit dem Glockenspiel.<br><i>Tipp: Täglich um 7.00, 11.00 und 18.00 Uhr spielt das Glockenspiel Melodien von Haydn und Mozart.</i><br><br><b>Mozartstadt Salzburg</b>: ca. 148.000 Einwohner · Festspielstadt · Informationen, Stadtpläne, Hotelauskunft, Tickets und vieles mehr gibt es bei der Tourist-Info Salzburg.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Te D2a i ke shkruar saktë: <b>1</b> einkaufen, Mozarts Geburtshaus besuchen · <b>3</b> 10 Euro · <b>5</b> 50 Minuten. 👏'},
    {t:'Kujdes nga kurthet! 👀', d:'Achtung, Fallen!', p:'Te pyetjet 2 dhe 4 shiko mirë orën në tekst. Pyetjet 6 dhe 7 mbetën bosh: tani i bën! 💪',
     ex:[['Täglich von 9.00 bis 17.30 Uhr.','Çdo ditë nga 9:00 deri 17:30.'],['Täglich um 14.00 Uhr.','Çdo ditë në orën 14:00.']],
     tip:'Për orën: <b>um</b> 14 Uhr. <b>am</b> është për ditët: am Montag. <i class="tr">(në orën 14 · të hënën)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, topic:'lesen', psq:'D1 Për çfarë jep informacion?', pde:'D1 Worüber bekommen Sie Informationen?', q:'Worüber gibt die Broschüre KEINE Information?', o:['Konzertprogramm','Preise','Öffnungszeiten','Führungen'], a:'Konzertprogramm', e:'Ka vende për t’u parë, çmime, orare dhe vizita me guidë, por jo programin e koncerteve.'},
    {type:'cloze', read:true, psq:'D2a Përgjigju pyetjeve', pde:'D2a Beantworten Sie die Fragen',
     text:'1  Was kann man in der Getreidegasse machen?\n– Man kann dort [[einkaufen]] und Mozarts [[Geburtshaus]] besuchen.\n2  Wie lange ist das Museum in Mozarts Geburtshaus geöffnet?\n– Täglich von [[9.00;9;9:00;9.00 Uhr]] bis [[17.30;17:30]] Uhr.\n3  Wie viel kostet der Eintritt für Erwachsene?\n– [[10;10,00;10.00;zehn]] Euro.\n4  Wann kann man die Festspielhäuser besichtigen?\n– Täglich [[um]] [[14.00;14;14:00;vierzehn]] Uhr.\n5  Wie lange dauert die Führung?\n– [[50;fünfzig]] Minuten.\n6  Wie oft spielt das Glockenspiel in der Neuen Residenz?\n– [[Dreimal;3-mal;3 mal;drei mal]] am Tag.\n7  Wo gibt es Stadtpläne?\n– Bei der [[Tourist-Info;Touristinfo;Tourist-Info Salzburg;Touristeninformation]].',
     e:'einkaufen, Geburtshaus · 9.00–17.30 · 10 Euro · um 14.00 · 50 Minuten · dreimal · Tourist-Info.'},
    {type:'gap', row:true, topic:'modal', psq:'D2b Bisedë', pde:'D2b Sprechen Sie', s:'Entschuldigung. Ich brauche eine Auskunft. ___ ich Sie etwas fragen?', o:['Darf','Muss','Darfst'], a:'Darf', e:'Darf ich Sie etwas fragen? = A mund t’ju pyes diçka?'}
  ]
},

/* ---------- S. 112–113: Ein Zimmer buchen ---------- */
{
  id:'hw12-s112', emoji:'🏨', color:'#D6409F', seq:true, book:['faqe 112–113 · E1, E3','S. 112–113 · E1, E3'],
  sq:'Rezervoj një dhomë', de:'S. 112–113: Ein Zimmer buchen',
  desc:'Tri hotele në Lucernë dhe biseda në recepsion (E1, E3a).',
  tip:'DZ = Doppelzimmer. Frühstück extra = mëngjesi paguhet veç. Halbpension = mëngjes + darkë.',
  read:'<b>Backpacker Hostel</b> ★★ · Gut 7,2<br>DZ 89,00 CHF (72,82 EUR)<br>Lage: in 30 Minuten zur Altstadt und zum See; Bushaltestelle 2 Minuten<br>Zimmer: Dusche, WC, TV<br>Frühstück extra, Restaurant, Bar (bis 24 Uhr geöffnet)<br>👍 Supermarkt neben dem Haus, Parkplätze kostenlos<br><br><b>Easy Tourist Hotel</b> ★★★ · Sehr gut 8,5<br>DZ mit Frühstück 109,00 CHF (89,02 EUR)<br>Lage: zentral gelegen in der Altstadt<br>Zimmer: Dusche, WC, Föhn, TV, Klimaanlage, kostenloses WLAN, Balkon mit Berg- oder Seeblick<br>👍 Hunde erlaubt<br><br><b>Hotel Romantica</b> ★★★★ · Exzellent 9,2<br>DZ mit Frühstück 185,00 CHF (151,37 EUR)<br>Lage: zentral, Nähe Kongresszentrum<br>Zimmer: Dusche, WC, Föhn, TV, Klimaanlage, kostenloses WLAN, Zimmersafe, Restaurant mit Terrasse<br>👍 historisches Flair, Schwimmbad, Massage',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te E3a i ke renditur <b>të gjitha fjalitë saktë</b> (1–6) dhe vetë ke shkruar <b>Kann ich Ihnen helfen?</b> 👏',
     tip:'🛎️ = recepsioni · 🙋 = Moritz Burger. Në Zvicër: <b>Grüezi</b> = Guten Tag, <b>Kafi</b> = Kaffee, <b>Rahm</b> = Sahne.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, topic:'lesen', psq:'E1 Çfarë përshtatet?', pde:'E1 Was passt?', q:'Welches Hotel liegt NICHT im Zentrum?', o:['Backpacker Hostel','Easy Tourist Hotel','Hotel Romantica'], a:'Backpacker Hostel', e:'„in 30 Minuten zur Altstadt“: jo në qendër.'},
    {type:'mc', read:true, topic:'lesen', psq:'E1 Çfarë përshtatet?', pde:'E1 Was passt?', q:'Wo ist das Frühstück NICHT inklusive?', o:['Backpacker Hostel','Easy Tourist Hotel','Hotel Romantica'], a:'Backpacker Hostel', e:'„Frühstück extra“.'},
    {type:'mc', read:true, topic:'lesen', psq:'E1 Çfarë përshtatet?', pde:'E1 Was passt?', q:'Welches Hotel hat einen Balkon?', o:['Easy Tourist Hotel','Backpacker Hostel','Hotel Romantica'], a:'Easy Tourist Hotel', e:'„Balkon mit Berg- oder Seeblick“.'},
    {type:'mc', read:true, topic:'lesen', psq:'E1 Çfarë përshtatet?', pde:'E1 Was passt?', q:'Welches Hotel hat KEIN Restaurant?', o:['Easy Tourist Hotel','Backpacker Hostel','Hotel Romantica'], a:'Easy Tourist Hotel', e:'Backpacker: Restaurant, Bar · Romantica: Restaurant mit Terrasse.'},
    {type:'mc', read:true, topic:'lesen', psq:'E1 Çfarë përshtatet?', pde:'E1 Was passt?', q:'Welches Hotel hat ein Schwimmbad?', o:['Hotel Romantica','Easy Tourist Hotel','Backpacker Hostel'], a:'Hotel Romantica', e:'„historisches Flair, Schwimmbad, Massage“.'},
    {type:'mc', read:true, topic:'lesen', psq:'E1 Çfarë përshtatet?', pde:'E1 Was passt?', q:'Wo gibt es KEINE Klimaanlage und KEIN kostenloses WLAN?', o:['Backpacker Hostel','Easy Tourist Hotel','Hotel Romantica'], a:'Backpacker Hostel', e:'Backpacker: vetëm Dusche, WC, TV.'},
    {type:'gap', psq:'E3a Rendit: 🛎️ recepsioni', pde:'E3a Ordnen Sie zu', s:'🛎️ Grüezi mitenand. ___', o:['Kann ich Ihnen helfen?','Wir haben ein Doppelzimmer reserviert.','Hier, unsere Ausweise.','Wann müssen wir am Sonntag auschecken?'], a:'Kann ich Ihnen helfen?', e:'Recepsioni pyet: Kann ich Ihnen helfen?'},
    {type:'gap', psq:'E3a Rendit: 🙋 Moritz', pde:'E3a Ordnen Sie zu', s:'🙋 Guten Tag. Mein Name ist Burger. ___', o:['Wir haben ein Doppelzimmer reserviert.','Möchten Sie Vollpension oder Halbpension?','Da müssen Sie noch kurz warten.','Kann ich Ihnen helfen?'], a:'Wir haben ein Doppelzimmer reserviert.', e:'Mysafiri: Wir haben ein Doppelzimmer reserviert.'},
    {type:'gap', psq:'E3a Rendit: 🛎️ recepsioni', pde:'E3a Ordnen Sie zu', s:'🛎️ Burger … Ah ja, Burger, Moritz und Anna. Das Zimmer ist leider noch nicht ganz fertig. ___ Möchten Sie so lange ein Kafi Melange trinken?', o:['Da müssen Sie noch kurz warten.','Hier, unsere Ausweise.','Können Sie das bitte wiederholen?','Kann ich Ihnen helfen?'], a:'Da müssen Sie noch kurz warten.', e:'Dhoma s’është gati → duhet të prisni pak.'},
    {type:'gap', psq:'E3a Rendit: 🙋 Moritz', pde:'E3a Ordnen Sie zu', s:'🙋 Wie bitte? ___ – 🛎️ Ein Kafi Melange. Das ist ein Kaffee mit Rahm, äh, mit Sahne.', o:['Können Sie das bitte wiederholen?','Hier, unsere Ausweise.','Wann müssen wir am Sonntag auschecken?','Wir haben ein Doppelzimmer reserviert.'], a:'Können Sie das bitte wiederholen?', e:'Wie bitte? → Können Sie das bitte wiederholen?'},
    {type:'gap', psq:'E3a Rendit: 🛎️ recepsioni', pde:'E3a Ordnen Sie zu', s:'🛎️ Ich brauche Ihre Ausweise und Sie müssen bitte das Formular ausfüllen. ___ – 🙋 Nur Frühstück, bitte. Wir sind den ganzen Tag unterwegs.', o:['Möchten Sie Vollpension oder Halbpension?','Da müssen Sie noch kurz warten.','Kann ich Ihnen helfen?','Können Sie das bitte wiederholen?'], a:'Möchten Sie Vollpension oder Halbpension?', e:'„Nur Frühstück“ është përgjigje për Vollpension oder Halbpension.'},
    {type:'gap', psq:'E3a Rendit: 🙋 Moritz', pde:'E3a Ordnen Sie zu', s:'🙋 ___ – 🛎️ Ah, danke. Hier ist Ihr Schlüssel, Zimmer Nummer 234. Der Lift ist dort.', o:['Hier, unsere Ausweise.','Wann müssen wir am Sonntag auschecken?','Können Sie das bitte wiederholen?','Wir haben ein Doppelzimmer reserviert.'], a:'Hier, unsere Ausweise.', e:'Recepsioni kërkoi letërnjoftimet → Hier, unsere Ausweise.'},
    {type:'gap', psq:'E3a Rendit: 🙋 Moritz', pde:'E3a Ordnen Sie zu', s:'🙋 Eine Frage noch, bitte: ___ – 🛎️ Um 11 Uhr.', o:['Wann müssen wir am Sonntag auschecken?','Können Sie das bitte wiederholen?','Hier, unsere Ausweise.','Wir haben ein Doppelzimmer reserviert.'], a:'Wann müssen wir am Sonntag auschecken?', e:'Um 11 Uhr → pyetja me Wann.'},
    {type:'order', psq:'E3b Partneri A', pde:'E3b Partner A', de:'Ich habe ein Einzelzimmer reserviert.', sq:'Kam rezervuar një dhomë teke.'},
    {type:'order', psq:'E3b Partneri A', pde:'E3b Partner A', de:'Von wann bis wann gibt es Frühstück?', sq:'Nga sa deri sa ka mëngjes?'},
    {type:'gap', row:true, topic:'zeit', psq:'E3b Partneri B', pde:'E3b Partner B', s:'Frühstück gibt es von 8 ___ 10 Uhr.', o:['bis','um','am'], a:'bis', e:'von … bis … = nga … deri …'}
  ]
},

/* ---------- S. 118–119: Folge 10 ---------- */
{
  id:'hw12-s118', emoji:'💙', color:'#2E86DE', seq:true, book:['faqe 118–119 · historia','S. 118–119 · Foto-Hörgeschichte'],
  sq:'Historia: Sytë tanë janë kaq blu', de:'S. 118–119: Folge 10',
  desc:'Fjalët nga fotot, kush thotë çfarë dhe çfarë ndodh pastaj.',
  tip:'Klub → Unfall → Krankenhaus (Notaufnahme) → Arzt → Schmerztabletten.',
  read:'Ioanna und Lara haben im Klub getanzt. Dann hatte Ioanna einen Unfall: Ihr Auge ist blau und sie hat Schmerzen. Ioanna sagt: „Mein Auge tut weh!“ Lara sagt: „Wir gehen zum Arzt.“<br><br>Die Mädchen gehen ins Krankenhaus, in die Notaufnahme. Lara sagt zur Mitarbeiterin: „Meine Freundin hatte einen Unfall.“ Ioanna füllt ein Formular aus. Die Mitarbeiterin sagt: „Der Doktor kommt gleich.“ Dann warten sie im Wartebereich.<br><br>Der Arzt fragt: „Na, wo haben Sie denn Schmerzen?“ Dann sagt er: „Es ist nicht schlimm.“ Er gibt Ioanna Schmerztabletten. Ioanna sagt zu Lara: „Ich soll das Auge kühlen.“<br><br>Zum Schluss hat Lara auch ein blaues Auge. Die beiden Mädchen sind lustig und singen „Unsere Augen sind so blau“.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te ushtrimi 3 i ke renditur <b>të 8 fjalitë saktë</b> dhe te ushtrimi 2 i ke lidhur mirë. Tani edhe një herë këtu! 😊'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', psq:'1 Fjalët nga fotot', pde:'1 Sehen Sie die Fotos an', pairs:[['der Klub','klubi'],['die Notaufnahme','urgjenca'],['der Arzt','mjeku'],['der Wartebereich','dhoma e pritjes'],['die Schmerztablette','tableta kundër dhimbjes']]},
    {type:'mc', read:true, topic:'lesen', psq:'2 Kush thotë çfarë?', pde:'2 Wer sagt was?', q:'a  „Mein Auge tut weh!“', o:['Laras Freundin Ioanna','Lara','der Arzt','die Mitarbeiterin'], a:'Laras Freundin Ioanna', e:'Ioanna ka dhimbje në sy.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Kush thotë çfarë?', pde:'2 Wer sagt was?', q:'b  „Meine Freundin hatte einen Unfall.“', o:['Lara','Laras Freundin Ioanna','der Arzt','die Mitarbeiterin'], a:'Lara', e:'Lara flet për Ioannën.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Kush thotë çfarë?', pde:'2 Wer sagt was?', q:'c  „Der Doktor kommt gleich.“', o:['die Mitarbeiterin','der Arzt','Lara','Laras Freundin Ioanna'], a:'die Mitarbeiterin', e:'Punonjësja e urgjencës.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Kush thotë çfarë?', pde:'2 Wer sagt was?', q:'d  „Na, wo haben Sie denn Schmerzen?“', o:['der Arzt','die Mitarbeiterin','Lara','Laras Freundin Ioanna'], a:'der Arzt', e:'Mjeku pyet.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Kush thotë çfarë?', pde:'2 Wer sagt was?', q:'e  „Wir gehen zum Arzt.“', o:['Lara','der Arzt','die Mitarbeiterin','Laras Freundin Ioanna'], a:'Lara', e:'Lara e çon shoqen te mjeku.'},
    {type:'mc', read:true, topic:'lesen', psq:'2 Kush thotë çfarë?', pde:'2 Wer sagt was?', q:'f  „Ich soll das Auge kühlen.“', o:['Laras Freundin Ioanna','Lara','der Arzt','die Mitarbeiterin'], a:'Laras Freundin Ioanna', e:'Ioanna i tregon Larës çfarë tha mjeku.'},
    {type:'gap', psq:'3 Rendit: çfarë ndodh pastaj?', pde:'3 Ordnen Sie die Sätze', s:'1 Ioanna und Lara haben im Klub getanzt. → 2 ___', o:['Ioanna hat einen Unfall. Das Auge ist blau.','Ioanna füllt ein Formular aus.','Der Arzt gibt Ioanna Schmerztabletten.','Die beiden Mädchen singen.'], a:'Ioanna hat einen Unfall. Das Auge ist blau.', e:'Pas klubit: aksidenti.'},
    {type:'gap', psq:'3 Rendit: çfarë ndodh pastaj?', pde:'3 Ordnen Sie die Sätze', s:'2 Ioanna hat einen Unfall. → 3 ___', o:['Die Mädchen gehen ins Krankenhaus.','Der Arzt sagt: Es ist nicht schlimm.','Lara hat auch ein blaues Auge.','Ioanna und Lara haben im Klub getanzt.'], a:'Die Mädchen gehen ins Krankenhaus.', e:'Pas aksidentit: në spital.'},
    {type:'gap', psq:'3 Rendit: çfarë ndodh pastaj?', pde:'3 Ordnen Sie die Sätze', s:'3 Die Mädchen gehen ins Krankenhaus. → 4 ___', o:['Ioanna füllt ein Formular aus.','Die beiden Mädchen singen.','Lara hat auch ein blaues Auge.','Der Arzt gibt Ioanna Schmerztabletten.'], a:'Ioanna füllt ein Formular aus.', e:'Në urgjencë së pari plotëson formularin.'},
    {type:'gap', psq:'3 Rendit: çfarë ndodh pastaj?', pde:'3 Ordnen Sie die Sätze', s:'5 Der Arzt sagt: Es ist nicht schlimm. → 6 ___', o:['Der Arzt gibt Ioanna Schmerztabletten.','Ioanna füllt ein Formular aus.','Die Mädchen gehen ins Krankenhaus.','Ioanna hat einen Unfall.'], a:'Der Arzt gibt Ioanna Schmerztabletten.', e:'Pastaj mjeku jep tableta.'},
    {type:'gap', psq:'3 Rendit: çfarë ndodh pastaj?', pde:'3 Ordnen Sie die Sätze', s:'7 Lara hat auch ein blaues Auge. → 8 ___', o:['Die beiden Mädchen sind lustig und singen „Unsere Augen sind so blau“.','Ioanna füllt ein Formular aus.','Die Mädchen gehen ins Krankenhaus.','Ioanna und Lara haben im Klub getanzt.'], a:'Die beiden Mädchen sind lustig und singen „Unsere Augen sind so blau“.', e:'Në fund këndojnë të dyja. 🎶'}
  ]
},

/* ---------- S. 120: Körper, sein/ihr ---------- */
{
  id:'hw12-s120', emoji:'🤕', color:'#F2545B', seq:true, book:['faqe 120 · A1–A4','S. 120 · A1–A4'],
  sq:'Ihr Auge tut weh', de:'S. 120: Körperteile, sein / ihr',
  desc:'Pjesët e trupit, tabela sein / ihr dhe çfarë u dhemb personave.',
  tip:'Bert → sein Kopf, seine Hand, seine Ohren. Hanna → ihr Kopf, ihre Hand, ihre Ohren.',
  lesson:[
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'Te A1 dhe A3 i ke bërë <b>të gjitha mirë</b> ✓ (sein Hals, ihr Rücken, ihre Ohren, sein Arm, ihr Bein). Vetëm te tabela A2:',
     fix:[['seinen Ohren','seine Ohren','die Ohren = shumës → seine, pa -n.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', psq:'A1 Rendit', pde:'A1 Ordnen Sie zu', pairs:[['das Bein','këmba'],['das Ohr','veshi'],['der Arm','krahu'],['der Finger','gishti i dorës'],['der Kopf','koka']]},
    {type:'match', psq:'A1 Rendit', pde:'A1 Ordnen Sie zu', pairs:[['die Nase','hunda'],['der Mund','goja'],['der Hals','qafa'],['der Rücken','shpina'],['der Bauch','barku']]},
    {type:'table', topic:'possessiv', psq:'A2 Plotëso tabelën: Bert', pde:'A2 Ergänzen Sie die Tabelle', th:['','Bert (er)'],
     rows:[['Kopf','sein'],['Bein','sein',true],['Hand','seine',true],['Ohren','seine']], e:'sein Kopf, sein Bein, seine Hand, seine Ohren.'},
    {type:'table', topic:'possessiv', psq:'A2 Plotëso tabelën: Hanna', pde:'A2 Ergänzen Sie die Tabelle', th:['','Hanna (sie)'],
     rows:[['Kopf','ihr',true],['Bein','ihr'],['Hand','ihre'],['Ohren','ihre',true]], e:'ihr Kopf, ihr Bein, ihre Hand, ihre Ohren.'},
    {type:'cloze', topic:'possessiv', psq:'A3 Çfarë u dhemb?', pde:'A3 Was tut den Personen weh?', h:'👨 = er, 👩 = sie. Shkruaj fjalën gjermanisht për pjesën e trupit.',
     text:'A  👨 (qafa) → [[sein]] [[Hals]]\nB  👩 (shpina) → [[ihr]] [[Rücken]]\nC  👩 (veshët) → [[ihre]] [[Ohren]]\nD  👨 (krahu) → [[sein]] [[Arm]]\nE  👩 (këmba) → [[ihr]] [[Bein]]',
     e:'sein Hals, ihr Rücken, ihre Ohren, sein Arm, ihr Bein.'},
    {type:'gap', row:true, topic:'possessiv', psq:'A4 Loja e përbindëshit 👾', pde:'A4 Monsterspiel', s:'Mein Monster heißt Irene. ___ Kopf ist sehr schmal.', o:['Ihr','Ihre','Sein'], a:'Ihr', e:'Irene = sie, der Kopf → ihr.'},
    {type:'gap', row:true, topic:'possessiv', psq:'A4 Loja e përbindëshit 👾', pde:'A4 Monsterspiel', s:'Mein Monster heißt Irene. ___ Haare sind kurz.', o:['Ihre','Ihr','Ihren'], a:'Ihre', e:'die Haare (shumës) → ihre.'},
    {type:'gap', row:true, topic:'possessiv', psq:'A4 Loja e përbindëshit 👾', pde:'A4 Monsterspiel', s:'Mein Monster heißt Hans. ___ Zähne sind sehr groß.', o:['Seine','Sein','Seinen'], a:'Seine', e:'Hans = er, die Zähne (shumës) → seine.'}
  ]
},

/* ---------- S. 121: unser, euer, ihr ---------- */
{
  id:'hw12-s121', emoji:'👫', color:'#7650F0', seq:true, book:['faqe 121 · B1–B3','S. 121 · B1–B3'],
  sq:'Unsere Augen sind so blau', de:'S. 121: unser, euer, ihr',
  desc:'E-maili i Ioannës dhe tri mesazhe: kush shkruan dhe tabelat e Possessivartikel.',
  tip:'wir → unser / unsere · ihr → euer / eure · sie → ihr / ihre (shumës pa -n).',
  read:'<b>E-Mail von Ioanna</b><br>Liebe Lara,<br>das ist jetzt unser Lied: „Unsere Augen sind so blau“! Lara, Du bist toll! Vielen Dank für alles. Unser Abend war super.<br>Du, Carlos hat geschrieben: Frau Weber, unsere Lehrerin, ist krank. Das heißt, unser Unterricht fällt morgen aus.<br>Bis Donnerstag, Deine Ioanna<br><br><b>Nachricht 1</b><br>Oh, nein, nun sind Julia und Jan beide krank. Ihre Ohren tun sehr weh. Wir gehen jetzt zum Kinderarzt. Kannst Du einkaufen gehen, Schatz? Küsse von Marie<br><br><b>Nachricht 2</b><br>Und Eure Mutter? Ist sie wieder gesund? Hoffentlich! Könnt Ihr dann zu uns zum Essen kommen? Alle Freunde und Bekannten kommen! Ihr auch, ja? Anna<br><br><b>Nachricht 3</b><br>Wie war Euer Termin mit Frau Pfeiffer? Ich komme morgen wieder in die Arbeit. Bin wieder gesund. Heike',
  lesson:[
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'Te B1 dhe B2a i ke bërë <b>të gjitha mirë</b> ✓ (1 E, 2 F, 3 K). Vetëm te tabela B2b:',
     fix:[['ihren Ohren','ihre Ohren','die Ohren = shumës → ihre, pa -n.']]},
    {t:'morgen apo Morgen? ☀️', d:'Deine Notiz', p:'Shënimi yt: <b>morgen</b> (e vogël) = nesër · <b>der Morgen</b> (e madhe) = mëngjesi.',
     ex:[['Unser Unterricht fällt morgen aus.','Mësimi ynë nesër nuk mbahet.'],['Heute Morgen war ich beim Arzt.','Sot në mëngjes isha te mjeku.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, row:true, topic:'lesen', psq:'B1a Çfarë është e saktë?', pde:'B1a Was ist richtig?', q:'1  Ioanna will „danke“ sagen.', o:['richtig','falsch'], a:'richtig', e:'„Vielen Dank für alles.“'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'B1a Çfarë është e saktë?', pde:'B1a Was ist richtig?', q:'2  Carlos ist krank.', o:['richtig','falsch'], a:'falsch', e:'Frau Weber është e sëmurë, jo Carlos.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'B1a Çfarë është e saktë?', pde:'B1a Was ist richtig?', q:'3  Ioanna informiert Lara: Sie haben morgen keinen Unterricht.', o:['richtig','falsch'], a:'richtig', e:'„… unser Unterricht fällt morgen aus.“'},
    {type:'table', read:true, topic:'possessiv', psq:'B1b Plotëso tabelën', pde:'B1b Ergänzen Sie die Tabelle', th:['','wir'],
     rows:[['Abend','unser'],['Lied','unser'],['Lehrerin','unsere'],['Augen','unsere']], e:'unser Abend, unser Lied, unsere Lehrerin, unsere Augen.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'B2a Kush shkruan?', pde:'B2a Wer schreibt was?', q:'Nachricht 1 (Marie)', o:['eine Kollegin','eine Freundin','die Ehefrau'], a:'die Ehefrau', e:'„Schatz“, „Küsse“ dhe fëmijët → bashkëshortja.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'B2a Kush shkruan?', pde:'B2a Wer schreibt was?', q:'Nachricht 2 (Anna)', o:['eine Kollegin','eine Freundin','die Ehefrau'], a:'eine Freundin', e:'Fton miqtë për darkë → shoqja.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'B2a Kush shkruan?', pde:'B2a Wer schreibt was?', q:'Nachricht 3 (Heike)', o:['eine Kollegin','eine Freundin','die Ehefrau'], a:'eine Kollegin', e:'„Ich komme morgen wieder in die Arbeit.“ → kolegia.'},
    {type:'table', read:true, topic:'possessiv', psq:'B2b Plotëso tabelën: ihr', pde:'B2b Ergänzen Sie die Tabelle', th:['','ihr (ju)'],
     rows:[['Termin','euer'],['Lied','euer',true],['Mutter','eure'],['Ohren','eure',true]], e:'euer Termin, euer Lied, eure Mutter, eure Ohren.'},
    {type:'table', read:true, topic:'possessiv', psq:'B2b Plotëso tabelën: sie', pde:'B2b Ergänzen Sie die Tabelle', th:['','sie (ata)'],
     rows:[['Termin','ihr',true],['Lied','ihr',true],['Mutter','ihre',true],['Ohren','ihre']], e:'ihr Termin, ihr Lied, ihre Mutter, ihre Ohren (pa -n).'},
    {type:'gap', row:true, topic:'possessiv', psq:'B3 Mesazhe në kurs', pde:'B3 Im Kurs: Nachrichten', s:'Wann machen wir ___ Hausaufgaben? – Um 15 Uhr.', o:['unsere','unser','euer'], a:'unsere', e:'wir + die Hausaufgaben (shumës) → unsere.'},
    {type:'gap', row:true, psq:'morgen apo Morgen?', pde:'morgen oder Morgen?', s:'Ich komme ___ wieder in die Arbeit.', o:['morgen','Morgen'], a:'morgen', e:'morgen = nesër, me shkronjë të vogël.'}
  ]
}
  ]
},
{
  id:'l13', date:'2026-11-06', added:'2026-11-06T11:34', emoji:'📝',
  sq:'Detyrat: Fletorja, mësimi 8–10', de:'Hausaufgaben · Arbeitsbuch Lektion 8–10',
  parts:[

/* ---------- AB S. 93: vor, seit, für ---------- */
{
  id:'hw13-s93', lek:8, pg:93, emoji:'⏳', color:'#2E86DE', seq:true, book:['faqe 93 · ushtrimi 27–30','S. 93 · Üb. 27–30'],
  sq:'seit, vor apo für?', de:'S. 93: seit, vor, für',
  desc:'Anna, Enrique dhe një udhëtim në Kinë: seit, vor dhe für.',
  tip:'seit / vor + einem, einer, Monaten (Dativ). für + einen, ein, eine (Akkusativ).',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te <b>28</b> dhe <b>29</b> i ke bërë <b>të gjitha saktë</b>: für ein Jahr, vor drei Monaten, für sechs Monate, für einen Tag, vor einem Jahr · seit / vor ein<b>em</b>, ein<b>er</b>, Monate<b>n</b> · für ein<b>en</b>, ein, ein<b>e</b>. 👏',
     tip:'<b>seit</b> = që prej (deri sot) · <b>vor</b> = para · <b>für</b> = për (sa kohë) <i class="tr">(seit einem Jahr · vor einem Jahr · für ein Jahr)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'gap', row:true, topic:'zeit', psq:'27 Çfarë është e saktë?', pde:'27 Was ist richtig?', s:'Nächstes Jahr möchte ich ___ mindestens vier Wochen nach China fahren.', o:['seit','vor','für'], a:'für', e:'Sa kohë (në të ardhmen) → für.'},
    {type:'gap', row:true, topic:'zeit', psq:'27 Çfarë është e saktë?', pde:'27 Was ist richtig?', s:'Ich war ___ einem Jahr schon einmal in Shanghai.', o:['seit','vor','für'], a:'vor', e:'Në të kaluarën → vor einem Jahr.'},
    {type:'gap', row:true, topic:'zeit', psq:'27 Çfarë është e saktë?', pde:'27 Was ist richtig?', s:'Jetzt lerne ich ___ drei Monaten Chinesisch.', o:['seit','vor','für'], a:'seit', e:'Filloi para 3 muajsh dhe vazhdon → seit.'},
    {type:'gap', row:true, topic:'zeit', psq:'27 Çfarë është e saktë?', pde:'27 Was ist richtig?', s:'Kim aus Peking kenne ich ___ zwei Wochen.', o:['seit','vor','für'], a:'seit', e:'E njoh që prej 2 javësh → seit.'},
    {type:'gap', row:true, topic:'zeit', psq:'27 Çfarë është e saktë?', pde:'27 Was ist richtig?', s:'Jeden Tag sprechen wir ___ zwei Stunden nur Chinesisch.', o:['seit','vor','–'], a:'–', full:'Jeden Tag sprechen wir zwei Stunden nur Chinesisch.', e:'Këtu nuk duhet parafjalë: zwei Stunden.'},
    {type:'gap', row:true, topic:'zeit', psq:'27 Çfarë është e saktë?', pde:'27 Was ist richtig?', s:'Ich möchte ___ ein Jahr in China arbeiten.', o:['seit','vor','für'], a:'für', e:'für ein Jahr = për një vit.'},
    {type:'gap', row:true, topic:'zeit', psq:'28a Anna', pde:'28a Anna', s:'Anna ist ___ fertig mit der Schule.', o:['seit einer Woche','für eine Woche'], a:'seit einer Woche', e:'Që prej një jave → seit einer Woche.'},
    {type:'gap', row:true, topic:'zeit', psq:'28a Anna', pde:'28a Anna', s:'Nun möchte sie ___ in Irland arbeiten.', o:['für ein Jahr','seit einem Jahr'], a:'für ein Jahr', e:'Plani: për një vit → für ein Jahr.'},
    {type:'gap', row:true, topic:'zeit', psq:'28a Anna', pde:'28a Anna', s:'Sie hat schon ___ eine Bewerbung geschrieben.', o:['vor drei Monaten','für drei Monate'], a:'vor drei Monaten', e:'Para 3 muajsh → vor drei Monaten.'},
    {type:'gap', row:true, topic:'zeit', psq:'28b Enrique', pde:'28b Enrique', s:'Enrique hat am Wochenende Zeit. Er sucht ___ einen Job.', o:['für sechs Monate','vor einem Monat'], a:'für sechs Monate', e:'Sa kohë → für sechs Monate.'},
    {type:'gap', row:true, topic:'zeit', psq:'28b Enrique', pde:'28b Enrique', s:'Er möchte eine Arbeit ___ am Wochenende.', o:['für einen Tag','vor einem Tag'], a:'für einen Tag', e:'für einen Tag am Wochenende.'},
    {type:'gap', row:true, topic:'zeit', psq:'28b Enrique', pde:'28b Enrique', s:'___ hatte er einen Job als Kellner.', h:'Kur? (wann?)', o:['Vor einem Jahr','Für ein Jahr'], a:'Vor einem Jahr', e:'Kur? → Vor einem Jahr (para një viti).'},
    {type:'cloze', topic:'zeit', psq:'29 Plotëso tabelën', pde:'29 Ergänzen Sie die Tabelle',
     text:'seit / vor:  ein[[em]] Monat · ein[[em]] Jahr · ein[[er]] Woche · drei Monate[[n]]\nfür:  ein[[en]] Monat · ein Jahr · ein[[e]] Woche · drei Monate',
     e:'seit / vor: einem, einem, einer, Monaten · für: einen, ein, eine, Monate.'},
    {type:'cloze', topic:'zeit', psq:'30 für, seit apo vor?', pde:'30 Ergänzen Sie für, seit und vor',
     text:'Ich lebe seit einem Jahr in Berlin.\nAnna hat [[vor]] drei Monaten einen Job gefunden.\nAnna möchte [[für]] ein Jahr in Irland arbeiten.',
     e:'hat … gefunden (e kaluar) → vor · möchte … arbeiten → für.'}
  ]
},

/* ---------- AB S. 95: Am Telefon ---------- */
{
  id:'hw13-s95', lek:8, pg:95, emoji:'📞', color:'#0E9F8E', seq:true, book:['faqe 95 · ushtrimi 33–34','S. 95 · Üb. 33–34'],
  sq:'Në telefon: A është vendi i lirë?', de:'S. 95: Am Telefon',
  desc:'Sandra Wolf pyet për një praktikë dhe Christine Meinert për një punë si guidë.',
  tip:'Ist die Stelle noch frei? · Wie lange dauert …? · Bekomme ich Geld? · Auf Wiederhören!',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te <b>33</b> i ke shkruar <b>të gjitha fjalët saktë</b> (Praktikantin, Bereich, frei, dauert, Arbeitszeit, leider, normalerweise, Bekomme, zahlen, Stunde, schriftlich) dhe te <b>34</b> e ke renditur bisedën <b>1–9 saktë</b>. 👏',
     tip:'Në telefon: <b>Auf Wiederhören!</b> (jo Auf Wiedersehen) <i class="tr">(mirupafshim, në telefon)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'letters', psq:'33a Plotëso', pde:'33a Ergänzen Sie', s:'Ich habe Ihre Anzeige gelesen. Sie suchen eine ___ im Bereich Mode.', a:'Praktikantin', mix:'ktitinkanPra', h:'ktitinkanPra', e:'eine Praktikantin.'},
    {type:'letters', psq:'33a Plotëso', pde:'33a Ergänzen Sie', s:'Sie suchen eine Praktikantin im ___ Mode.', a:'Bereich', mix:'reicheB', h:'reicheB', e:'im Bereich Mode = në fushën e modës.'},
    {type:'letters', psq:'33a Plotëso', pde:'33a Ergänzen Sie', s:'Ist die Stelle noch ___?', a:'frei', mix:'frie', h:'frie', e:'frei = e lirë.'},
    {type:'letters', psq:'33b Plotëso', pde:'33b Ergänzen Sie', s:'Wie lange ___ das Praktikum? – Sechs Monate.', a:'dauert', mix:'ertaud', h:'ertaud', e:'das Praktikum dauert.'},
    {type:'letters', psq:'33b Plotëso', pde:'33b Ergänzen Sie', s:'Und wie ist die ___?', a:'Arbeitszeit', mix:'zeitbeitsAr', h:'zeitbeitsAr', e:'die Arbeitszeit = orari i punës.'},
    {type:'letters', psq:'33b Plotëso', pde:'33b Ergänzen Sie', s:'Das weiß ich ___ nicht genau.', a:'leider', mix:'derlei', h:'derlei', e:'leider = fatkeqësisht.'},
    {type:'letters', psq:'33b Plotëso', pde:'33b Ergänzen Sie', s:'Aber ___ sind wir montags bis freitags von 9–18 Uhr hier.', a:'normalerweise', mix:'norsemalerwei', h:'norsemalerwei', e:'normalerweise = zakonisht.'},
    {type:'letters', psq:'33c Plotëso', pde:'33c Ergänzen Sie', s:'___ ich für das Praktikum Geld?', a:'Bekomme', mix:'mekomBe', h:'mekomBe', e:'ich bekomme.'},
    {type:'letters', psq:'33c Plotëso', pde:'33c Ergänzen Sie', s:'Wir ___ 11,50 € pro Stunde.', a:'zahlen', mix:'hazlen', h:'hazlen', e:'wir zahlen.'},
    {type:'letters', psq:'33c Plotëso', pde:'33c Ergänzen Sie', s:'Wir zahlen 11,50 € pro ___.', a:'Stunde', mix:'nutSde', h:'nutSde', e:'pro Stunde = në orë.'},
    {type:'letters', psq:'33c Plotëso', pde:'33c Ergänzen Sie', s:'Das ist gut. Möchten Sie die Bewerbung ___?', a:'schriftlich', mix:'lichtfirsch', h:'lichtfirsch', e:'schriftlich = me shkrim.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'🏢 Reisebüro „Globalreisen“. Münziger, guten Tag. → 👩 ___', o:['Guten Tag, mein Name ist Christine Meinert. Ich habe Ihre Anzeige gelesen. Sie suchen Reiseführer für Südengland.','Ja, genau. Ist die Stelle noch frei?','Das mache ich. Herzlichen Dank und auf Wiederhören.'], a:'Guten Tag, mein Name ist Christine Meinert. Ich habe Ihre Anzeige gelesen. Sie suchen Reiseführer für Südengland.', e:'Së pari prezantohet.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'👩 … Sie suchen Reiseführer für Südengland. → 🏢 ___', o:['Ja, das stimmt, Frau Meinert. Haben Sie denn schon Erfahrung als Reiseführerin?','Das freut mich. Und jetzt möchten Sie wieder in England arbeiten?','Auf Wiederhören, Frau Meinert.'], a:'Ja, das stimmt, Frau Meinert. Haben Sie denn schon Erfahrung als Reiseführerin?', e:'„Ja, das stimmt“ = po, ashtu është.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'🏢 … Haben Sie denn schon Erfahrung als Reiseführerin? → 👩 ___', o:['Ja, ich studiere Tourismus an der Universität Frankfurt und habe schon sechs Monate ein Praktikum als Reiseführerin in London gemacht. Das hat viel Spaß gemacht!','Ja, genau. Ist die Stelle noch frei?','Das mache ich. Herzlichen Dank und auf Wiederhören.'], a:'Ja, ich studiere Tourismus an der Universität Frankfurt und habe schon sechs Monate ein Praktikum als Reiseführerin in London gemacht. Das hat viel Spaß gemacht!', e:'Përvoja: praktika në Londër.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'👩 … Das hat viel Spaß gemacht! → 🏢 ___', o:['Das freut mich. Und jetzt möchten Sie wieder in England arbeiten?','Ja. Schicken Sie mir doch bitte bald Ihre schriftliche Bewerbung per E-Mail.','Auf Wiederhören, Frau Meinert.'], a:'Das freut mich. Und jetzt möchten Sie wieder in England arbeiten?', e:'Das freut mich = më vjen mirë.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'🏢 … Und jetzt möchten Sie wieder in England arbeiten? → 👩 ___', o:['Ja, genau. Ist die Stelle noch frei?','Das mache ich. Herzlichen Dank und auf Wiederhören.','Guten Tag, mein Name ist Christine Meinert.'], a:'Ja, genau. Ist die Stelle noch frei?', e:'Ja, genau = po, pikërisht.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'👩 Ja, genau. Ist die Stelle noch frei? → 🏢 ___', o:['Ja. Schicken Sie mir doch bitte bald Ihre schriftliche Bewerbung per E-Mail.','Auf Wiederhören, Frau Meinert.','Ja, das stimmt, Frau Meinert. Haben Sie denn schon Erfahrung als Reiseführerin?'], a:'Ja. Schicken Sie mir doch bitte bald Ihre schriftliche Bewerbung per E-Mail.', e:'Vendi është i lirë → dërgoni aplikimin.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'🏢 … Schicken Sie mir doch bitte bald Ihre schriftliche Bewerbung per E-Mail. → 👩 ___', o:['Das mache ich. Herzlichen Dank und auf Wiederhören.','Ja, genau. Ist die Stelle noch frei?','Auf Wiederhören, Frau Meinert.'], a:'Das mache ich. Herzlichen Dank und auf Wiederhören.', e:'Das mache ich = do ta bëj.'},
    {type:'gap', psq:'34 Rendit bisedën', pde:'34 Ordnen Sie das Gespräch', s:'👩 Das mache ich. Herzlichen Dank und auf Wiederhören. → 🏢 ___', o:['Auf Wiederhören, Frau Meinert.','Das freut mich. Und jetzt möchten Sie wieder in England arbeiten?','Reisebüro „Globalreisen“. Münziger, guten Tag.'], a:'Auf Wiederhören, Frau Meinert.', e:'Në fund: Auf Wiederhören!'}
  ]
},

/* ---------- AB S. 98: müssen ---------- */
{
  id:'hw13-s98', lek:9, pg:98, emoji:'📋', color:'#7650F0', seq:true, book:['faqe 98 · ushtrimi 1–4','S. 98 · Üb. 1–4'],
  sq:'müssen: duhet', de:'S. 98: Sie müssen einen Antrag ausfüllen',
  desc:'Kush duhet? Fjalitë me folje modale në tabelë dhe fjali me müssen.',
  tip:'Folja modale në vendin 2 (në pyetje pa W- në krye), folja tjetër në fund.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Te <b>2</b> e ke plotësuar tabelën <b>saktë</b> (Wo kann ich den Ausweis abholen? … Musst du am Samstag arbeiten?) dhe te <b>4</b> i ke shkruar <b>të katër fjalitë</b> mirë. 👏',
     tip:'Pyetje pa fjalë pyetëse: folja <b>në krye</b>, me shkronjë të madhe: <b>Musst</b> du am Samstag arbeiten? <i class="tr">(A duhet të punosh të shtunën?)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'gap', row:true, topic:'subjekt', psq:'1 Çfarë është e saktë?', pde:'1 Was ist richtig?', s:'a  ___ musst 10 Euro bezahlen.', o:['Ich','Du'], a:'Du', e:'du musst.'},
    {type:'gap', row:true, topic:'subjekt', psq:'1 Çfarë është e saktë?', pde:'1 Was ist richtig?', s:'b  ___ müssen den Antrag ausfüllen.', o:['Wir','Ihr'], a:'Wir', e:'wir müssen (ihr müsst).'},
    {type:'gap', row:true, topic:'subjekt', psq:'1 Çfarë është e saktë?', pde:'1 Was ist richtig?', s:'c  ___ müssen einen internationalen Führerschein haben.', o:['Sie','Er'], a:'Sie', e:'Sie müssen (er muss).'},
    {type:'gap', row:true, topic:'subjekt', psq:'1 Çfarë është e saktë?', pde:'1 Was ist richtig?', s:'d  ___ müsst hier unterschreiben.', o:['Du','Ihr'], a:'Ihr', e:'ihr müsst (du musst).'},
    {type:'gap', row:true, topic:'subjekt', psq:'1 Çfarë është e saktë?', pde:'1 Was ist richtig?', s:'e  ___ muss eine Fahrkarte kaufen.', o:['Wir','Maria'], a:'Maria', e:'Maria = sie → muss.'},
    {type:'gap', row:true, topic:'subjekt', psq:'1 Çfarë është e saktë?', pde:'1 Was ist richtig?', s:'f  ___ muss viele Papiere zum Amt mitbringen.', o:['Ich','Jan und Eva'], a:'Ich', e:'ich muss (Jan und Eva müssen).'},
    {type:'order', topic:'satz', psq:'2 Shkruaj fjalitë', pde:'2 Schreiben Sie Sätze', cue:'Wo – den Ausweis – kann – abholen – ich – ?', parts:['Wo','kann','ich','den Ausweis','abholen?'], de:'Wo kann ich den Ausweis abholen?', sq:'Ku mund ta marr letërnjoftimin?'},
    {type:'order', topic:'satz', psq:'2 Shkruaj fjalitë', pde:'2 Schreiben Sie Sätze', cue:'wir – Was – mitbringen – müssen – ?', parts:['Was','müssen','wir','mitbringen?'], de:'Was müssen wir mitbringen?', sq:'Çfarë duhet të sjellim?'},
    {type:'order', topic:'satz', psq:'2 Shkruaj fjalitë', pde:'2 Schreiben Sie Sätze', cue:'er – muss – hier – machen – Was – ?', parts:['Was','muss','er','hier','machen?'], de:'Was muss er hier machen?', sq:'Çfarë duhet të bëjë ai këtu?'},
    {type:'order', topic:'satz', psq:'2 Shkruaj fjalitë', pde:'2 Schreiben Sie Sätze', cue:'schnell – will – Ich – Deutsch – lernen – .', parts:['Ich','will','schnell','Deutsch','lernen.'], de:'Ich will schnell Deutsch lernen.', sq:'Dua të mësoj shpejt gjermanisht.'},
    {type:'order', topic:'satz', psq:'2 Shkruaj fjalitë', pde:'2 Schreiben Sie Sätze', cue:'am Samstag – arbeiten – du – Musst – ?', parts:['Musst','du','am Samstag','arbeiten?'], de:'Musst du am Samstag arbeiten?', sq:'A duhet të punosh të shtunën?'},
    {type:'cloze', topic:'modal', psq:'4 Fjali me müssen', pde:'4 Schreiben Sie Sätze mit müssen',
     text:'A  (den Antrag ausfüllen) Sie [[müssen]] den Antrag [[ausfüllen]].\nB  (zuerst das Ziel wählen) Also, wir [[müssen]] zuerst das Ziel [[wählen]].\nC  (aufstehen) Guten Morgen. Es ist 7 Uhr. Du [[musst]] [[aufstehen]].\nD  (jetzt schlafen) Es ist schon spät. Ihr [[müsst]] jetzt [[schlafen]].',
     e:'Sie müssen, wir müssen, du musst, ihr müsst + folja në fund.'}
  ]
},

/* ---------- AB S. 100: Imperativ ---------- */
{
  id:'hw13-s100', lek:9, pg:100, emoji:'👉', color:'#F2545B', seq:true, book:['faqe 100 · ushtrimi 9–11','S. 100 · Üb. 9–11'],
  sq:'Sieh mal! Urdhërorja', de:'S. 100: Imperativ mit du und ihr',
  desc:'Zgjidh urdhëroren, nga pyetja te urdhërorja dhe propozime: Geh doch ins Museum!',
  tip:'du liest → Lies! · du isst → Iss! · du schläfst → Schlaf! · ihr lest → Lest!',
  lesson:[
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'Te <b>9</b> dhe <b>10</b> pjesën tjetër e ke bërë mirë ✓ (Sieh, Komm, Bring, Sei, Nimm · Schreib, Ruf, Arbeite, Hol, Lies, Iss, Schlaf …). Vetëm një gjë:',
     fix:[['Wählt ihr zuerst das Ziel aus!','Wählt zuerst das Ziel aus!','Urdhërorja me ihr: pa ihr. „Wählt ihr …?“ është pyetje.']]},
    {t:'Kujdes nga kurthet! 👀', d:'Achtung, Fallen!', p:'Te disa folje zanorja ndryshon te du, por jo te ihr:',
     ex:[['du liest → Lies! · ihr lest → Lest!','lexo! · lexoni!'],['du isst → Iss! · ihr esst → Esst!','ha! · hani!'],['du schläfst → Schlaf! · ihr schlaft → Schlaft!','fli! · flini!']],
     tip:'du schl<b>ä</b>fst → <b>Schlaf!</b> pa ä, si te Fahr!'}
  ],
  nouns:[], words:[],
  items:[
    {type:'gap', row:true, topic:'imperativ', psq:'9 Çfarë është e saktë?', pde:'9 Was ist richtig?', s:'___ mal: Das Auto sieht toll aus!', o:['Sieh','Siehst du'], a:'Sieh', e:'du siehst → Sieh!'},
    {type:'gap', row:true, topic:'imperativ', psq:'9 Çfarë është e saktë?', pde:'9 Was ist richtig?', s:'Wir gehen schwimmen. ___ doch mit!', o:['Komm','Du kommst'], a:'Komm', e:'Komm doch mit!'},
    {type:'gap', row:true, topic:'imperativ', psq:'9 Çfarë është e saktë?', pde:'9 Was ist richtig?', s:'___ zuerst das Ziel aus!', o:['Wählt','Wählt ihr'], a:'Wählt', e:'Urdhërorja me ihr: pa ihr → Wählt!'},
    {type:'gap', row:true, topic:'imperativ', psq:'9 Çfarë është e saktë?', pde:'9 Was ist richtig?', s:'___ bitte deinen Ausweis mit!', o:['Bring','Bringst'], a:'Bring', e:'du bringst → Bring … mit!'},
    {type:'gap', row:true, topic:'imperativ', psq:'9 Çfarë është e saktë?', pde:'9 Was ist richtig?', s:'___ bitte pünktlich!', o:['Sei','Bist'], a:'Sei', e:'du bist → Sei!'},
    {type:'gap', row:true, topic:'imperativ', psq:'9 Çfarë është e saktë?', pde:'9 Was ist richtig?', s:'___ doch noch einen Apfel.', o:['Nimm','Nimmst'], a:'Nimm', e:'du nimmst → Nimm!'},
    {type:'table', topic:'imperativ', psq:'10 Urdhërorja me du', pde:'10 Streichen Sie und ergänzen Sie', th:['','du → !'],
     rows:[['Schreibst du bald?','Schreib;Schreibe',true],['Rufst du an?','Ruf;Rufe'],['Arbeitest du heute?','Arbeite'],['Holst du Kim ab?','Hol;Hole'],['Liest du den Text?','Lies'],['Isst du gern Eis?','Iss'],['Schläfst du schon?','Schlaf;Schlafe']],
     e:'Schreib, Ruf, Arbeite, Hol, Lies, Iss, Schlaf.'},
    {type:'table', topic:'imperativ', psq:'10 Urdhërorja me ihr', pde:'10 Streichen Sie und ergänzen Sie', th:['','ihr → !'],
     rows:[['Schreibt ihr bald?','Schreibt',true],['Ruft ihr an?','Ruft'],['Arbeitet ihr heute?','Arbeitet'],['Holt ihr Kim ab?','Holt'],['Lest ihr den Text?','Lest'],['Esst ihr gern Eis?','Esst'],['Schlaft ihr schon?','Schlaft']],
     e:'Me ihr: e njëjta formë, pa ihr.'},
    {type:'gap', row:true, topic:'imperativ', psq:'11 Propozime', pde:'11 Schreiben Sie', s:'Es regnet am Wochenende. Was kann ich machen? – Lies doch ein Buch oder ___ doch ins Museum!', o:['geh','geht','gehst'], a:'geh', e:'du → geh!'},
    {type:'gap', row:true, topic:'imperativ', psq:'11 Propozime', pde:'11 Schreiben Sie', s:'Es regnet am Wochenende. – ___ doch fern!', o:['Sieh','Seht','Siehst'], a:'Sieh', e:'du siehst fern → Sieh fern!'},
    {type:'gap', row:true, topic:'imperativ', psq:'11 Propozime', pde:'11 Schreiben Sie', s:'Was macht ihr heute Abend? – Geht doch ins Kino oder ___ doch Tennis!', o:['spielt','spiel','spielen'], a:'spielt', e:'ihr → spielt!'},
    {type:'gap', row:true, topic:'imperativ', psq:'11 Propozime', pde:'11 Schreiben Sie', s:'Was macht ihr heute Abend? – ___ doch die Wohnung auf!', o:['Räumt','Räum','Räumen'], a:'Räumt', e:'ihr räumt auf → Räumt … auf!'}
  ]
},

/* ---------- AB S. 101: Imperativ, Sie-Form ---------- */
{
  id:'hw13-s101', lek:9, pg:101, emoji:'🙋', color:'#2E86DE', seq:true, book:['faqe 101 · ushtrimi 13, 15','S. 101 · Üb. 13, 15'],
  sq:'Lina, Mark dhe Caro · Sie-Form', de:'S. 101: Imperativ du, ihr, Sie',
  desc:'Çfarë u thotë Lina Markut dhe Caros, dhe këshilla me Sie.',
  tip:'du → Iss! · ihr → Seid! · Sie → Machen Sie!',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Te <b>13</b> i ke shkruar <b>të gjitha fjalitë mirë</b>: Iss nicht immer meine Sachen! · Bleib nicht so lange im Bad! · Seid nicht so laut! · Mark, erklär Caro bitte die Übungen. Te <b>15</b> b, c, d ✓. 👏'},
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'Te 15e mungonte një pjesë:',
     fix:[['Bezahlen Sie Die Kursgebühren.','Bezahlen Sie die Kursgebühren an der Kasse.','Mos harro „an der Kasse“. die me shkronjë të vogël.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'imperativ', psq:'13 Çfarë thotë Lina?', pde:'13 Was sagt Lina zu Mark und Caro?',
     text:'A  (Mark und Caro) Räumt doch bitte den Flur auf!\nB  Mark! [[Iss|essen]] nicht immer meine Sachen!\nC  (du) [[Bleib;Bleibe|bleiben]] nicht so lange im Bad!\nD  (Mark und Caro) [[Seid|sein]] nicht so laut! Ich muss lernen.\nE  Mark, [[erklär;erkläre|erklären]] Caro bitte die Übungen. Caro schreibt morgen einen Test.',
     e:'Iss! Bleib! Seid! Erklär!'},
    {type:'order', topic:'imperativ', psq:'15 Me Sie', pde:'15 Schreiben Sie Sätze in der Sie-Form', cue:'Ich spreche kein Deutsch. → einen Sprachkurs machen', parts:['Machen','Sie','einen','Sprachkurs!'], de:'Machen Sie einen Sprachkurs!', sq:'Bëni një kurs gjuhe!'},
    {type:'order', topic:'imperativ', psq:'15 Me Sie', pde:'15 Schreiben Sie Sätze in der Sie-Form', cue:'Ich suche eine Wohnung. → die Anzeigen in der Zeitung lesen', parts:['Lesen','Sie','die Anzeigen','in der Zeitung!'], de:'Lesen Sie die Anzeigen in der Zeitung!', sq:'Lexoni njoftimet në gazetë!'},
    {type:'order', topic:'imperativ', psq:'15 Me Sie', pde:'15 Schreiben Sie Sätze in der Sie-Form', cue:'Ich verstehe die Übung nicht. → Ihre Lehrerin fragen', parts:['Fragen','Sie','Ihre','Lehrerin!'], de:'Fragen Sie Ihre Lehrerin!', sq:'Pyesni mësuesen tuaj!'},
    {type:'order', topic:'imperativ', psq:'15 Me Sie', pde:'15 Schreiben Sie Sätze in der Sie-Form', cue:'Heute fängt mein Deutschkurs an. → die Kursgebühren an der Kasse bezahlen', parts:['Bezahlen','Sie','die Kursgebühren','an der Kasse!'], de:'Bezahlen Sie die Kursgebühren an der Kasse!', sq:'Paguani tarifat e kursit te arka!'}
  ]
},

/* ---------- AB S. 102: dürfen ---------- */
{
  id:'hw13-s102', lek:9, pg:102, emoji:'🚭', color:'#16A34A', seq:true, book:['faqe 102 · ushtrimi 16–18','S. 102 · Üb. 16–18'],
  sq:'dürfen: lejohet', de:'S. 102: Sie dürfen in der EU Auto fahren',
  desc:'dürfen në formën e duhur, bisedat te shenjat dhe darf apo muss?',
  tip:'darf = lejohet · darf nicht = ndalohet · muss = duhet.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te <b>16</b> (Darf, dürfen, dürft, darfst, Darf) dhe te <b>18</b> (darf, darf, muss, darf, dürfen, muss) <b>të gjitha saktë</b>. Te <b>17</b> C dhe D ✓. 👏'},
    {t:'Kujdes nga kurthet! 👀', d:'Achtung, Fallen!', p:'Te <b>17</b> A dhe B ka dy fjali shumë të ngjashme:',
     ex:[['A 📵 Hier darf man nicht telefonieren.','Këtu nuk lejohet telefoni.'],['B 🚆 Hier darf man doch telefonieren. Aber man muss leise sprechen.','Këtu lejohet telefoni. Por duhet të flasësh qetë.']],
     tip:'<b>doch</b> = por po (kundërshton): Hier darf man <b>doch</b> telefonieren! <i class="tr">(Por këtu lejohet!)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'modal', psq:'16 dürfen në formën e duhur', pde:'16 Ergänzen Sie dürfen in der richtigen Form',
     text:'a  Frau Kurz, Sie dürfen gern mit Kreditkarte bezahlen.\nb  [[Darf]] ich Sie etwas fragen?\nc  Papa, [[dürfen]] wir jetzt fernsehen?\nd  Ihr [[dürft]] kein Auto mieten. Ihr seid noch nicht 21.\ne  Sofia, du [[darfst]] hier kein Eis essen.\nf  [[Darf]] man hier fotografieren?',
     e:'ich darf, wir dürfen, ihr dürft, du darfst, man darf.'},
    {type:'gap', psq:'17 Rendit', pde:'17 Ordnen Sie zu', s:'A 🎭📵 Entschuldigung. Aber Sie müssen das Handy ausmachen. – Warum? – ___', o:['Hier darf man nicht telefonieren.','Hier darf man doch telefonieren.','Hier dürfen wir fahren.'], a:'Hier darf man nicht telefonieren.', e:'Shenja 📵: telefoni ndalohet.'},
    {type:'gap', psq:'17 Rendit', pde:'17 Ordnen Sie zu', s:'B 🚆 Können Sie bitte leise sein? – Warum? ___', h:'Në tren telefoni lejohet 📱', o:['Hier darf man doch telefonieren.','Hier darf man nicht telefonieren.','Wir müssen warten.'], a:'Hier darf man doch telefonieren.', e:'Ai kundërshton: por këtu lejohet! → doch.'},
    {type:'gap', psq:'17 Rendit', pde:'17 Ordnen Sie zu', s:'B 🚆 Hier darf man doch telefonieren. – Ja. ___', o:['Aber man muss leise sprechen.','Wir dürfen nicht fahren.','Hier dürfen wir fahren.'], a:'Aber man muss leise sprechen.', e:'Lejohet, por qetë.'},
    {type:'gap', psq:'17 Rendit', pde:'17 Ordnen Sie zu', s:'C 🚦🔴 Achtung! Es ist rot. Was müssen wir machen? – ___', o:['Wir müssen warten.','Hier dürfen wir fahren.','Aber man muss leise sprechen.'], a:'Wir müssen warten.', e:'Rot → warten.'},
    {type:'gap', psq:'17 Rendit', pde:'17 Ordnen Sie zu', s:'C 🚦🔴 Wir müssen warten. – Genau! ___', o:['Wir dürfen nicht fahren.','Hier dürfen wir fahren.','Hier darf man doch telefonieren.'], a:'Wir dürfen nicht fahren.', e:'E kuqe: nuk lejohet të ecim.'},
    {type:'gap', psq:'17 Rendit', pde:'17 Ordnen Sie zu', s:'D 🚲 Guck mal. Ein Radweg! – ___', o:['Hier dürfen wir fahren.','Wir dürfen nicht fahren.','Wir müssen warten.'], a:'Hier dürfen wir fahren.', e:'Radweg = rrugë për biçikleta → lejohet.'},
    {type:'gap', row:true, topic:'modal', psq:'18 Çfarë është e saktë?', pde:'18 Was ist richtig?', s:'🚬✅ Hier ___ man rauchen.', o:['darf','muss'], a:'darf', e:'Shenja: duhani lejohet.'},
    {type:'gap', row:true, topic:'modal', psq:'18 Çfarë është e saktë?', pde:'18 Was ist richtig?', s:'🅿️🚫 Hier ___ man nicht parken.', o:['darf','muss'], a:'darf', e:'darf nicht = ndalohet. (muss nicht = s’ka nevojë)'},
    {type:'gap', row:true, topic:'modal', psq:'18 Çfarë është e saktë?', pde:'18 Was ist richtig?', s:'🚭 Hier ___ man die Zigarette ausmachen.', o:['darf','muss'], a:'muss', e:'Duhet ta shuash cigaren.'},
    {type:'gap', row:true, topic:'modal', psq:'18 Çfarë është e saktë?', pde:'18 Was ist richtig?', s:'🅿️ Hier ___ man parken.', o:['darf','muss'], a:'darf', e:'Parkimi lejohet.'},
    {type:'gap', row:true, topic:'modal', psq:'18 Çfarë është e saktë?', pde:'18 Was ist richtig?', s:'🚗🚫 Hier ___ Autos nicht fahren.', o:['dürfen','müssen'], a:'dürfen', e:'Makinat nuk lejohen.'},
    {type:'gap', row:true, topic:'modal', psq:'18 Çfarë është e saktë?', pde:'18 Was ist richtig?', s:'⚠️ 30 Hier ___ man langsam fahren.', o:['muss','darf'], a:'muss', e:'Shenja 30: duhet të ngasësh ngadalë.'}
  ]
},

/* ---------- AB S. 103: Ein Wochenende in Heidelberg ---------- */
{
  id:'hw13-s103', lek:9, pg:103, emoji:'🚗', color:'#EE7A0C', seq:true, book:['faqe 103 · ushtrimi 19','S. 103 · Üb. 19'],
  sq:'Një fundjavë në Heidelberg', de:'S. 103: Ein Wochenende in Heidelberg',
  desc:'Miriam dhe Eva planifikojnë udhëtimin: müssen, dürfen, wollen apo können?',
  tip:'wollen = dua · können = mund · müssen = duhet · dürfen = lejohet.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Te <b>19</b> i ke shkruar mirë: <b>wollen</b>, <b>Kannst</b>, <b>muss</b>, <b>kann</b>, <b>Dürfen</b>. 👏',
     tip:'Një vend mbeti bosh: <b>Kannst</b> du bitte ein Picknick mitbringen? <i class="tr">(A mund të sjellësh një piknik?)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'modal', psq:'19 Plotëso', pde:'19 Ergänzen Sie in der richtigen Form', h:'müssen – dürfen – wollen – können',
     text:'Hallo, Eva. Hier ist Miriam. Hör mal, Hanna und ich [[wollen]] am Wochenende ein Auto mieten und nach Heidelberg fahren. [[Kannst;Willst]] du mitkommen?\n– Gern. Aber am Freitag [[muss]] ich bis 20 Uhr arbeiten.\n– Kein Problem. Wir fahren erst am Samstagvormittag. [[Kannst]] du bitte ein Picknick für die Fahrt mitbringen?\n– Ja, klar. Und darf mein Hund auch mitkommen?\n– Hm, ich weiß nicht … Ich glaube, wir [[müssen;können]] die Autovermietung fragen. Ich [[kann]] dort ja mal anrufen.\n– Okay. Du rufst die Autovermietung an: Sind Hunde erlaubt? Dann kommen wir mit. [[Dürfen]] Hunde nicht mitkommen? Dann bleibe ich auch zu Hause.\n– Gut, Eva. Dann bis später! Tschüs.',
     e:'wollen, Kannst, muss, Kannst, müssen, kann, Dürfen.'}
  ]
},

/* ---------- AB S. 108: Körper, mein / dein / Ihr, sein / ihr ---------- */
{
  id:'hw13-s108', lek:10, pg:108, emoji:'🤕', color:'#F2545B', seq:true, book:['faqe 108 · ushtrimi 1–4','S. 108 · Üb. 1–4'],
  sq:'Ihr Auge tut weh', de:'S. 108: Körperteile, mein / dein / Ihr',
  desc:'Fjalëkryqi i trupit, der/das/die, mein – dein – Ihr dhe sein apo ihr?',
  tip:'du → dein / deine · Sie → Ihr / Ihre · Alba (sie) → ihr Bein · Ben (er) → seine Hand.',
  lesson:[
    {t:'Faqe 108 📖', d:'A · Ihr Auge tut weh', p:'<b>1</b> Fjalëkryqi i trupit. <b>2</b> der, das apo die? <b>3</b> mein, dein, Ihr. <b>4</b> sein apo ihr?',
     tip:'Këto ushtrime ishin ende bosh në libër: tani i bën këtu! 💪'}
  ],
  nouns:[], words:[],
  items:[
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'C 💇‍♀️ die ___', a:'Haare', mix:'reaHa', h:'reaHa', e:'die Haare = flokët.'},
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'D ☝️ der ___', a:'Finger', mix:'gerFin', h:'gerFin', e:'der Finger = gishti.'},
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'F 🦵 das ___', a:'Bein', mix:'inBe', h:'inBe', e:'das Bein = këmba.'},
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'G 👄 der ___', a:'Mund', mix:'ndMu', h:'ndMu', e:'der Mund = goja.'},
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'H 👂 das ___', a:'Ohr', mix:'rhO', h:'rhO', e:'das Ohr = veshi.'},
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'J 🦶 der ___', a:'Fuß', mix:'ßuF', h:'ßuF', e:'der Fuß = shputa e këmbës.'},
    {type:'letters', psq:'1 Fjalëkryqi', pde:'1 Lösen Sie das Rätsel', s:'K 👃 die ___', a:'Nase', mix:'seNa', h:'seNa', e:'die Nase = hunda.'},
    {type:'gap', row:true, topic:'artikel', psq:'2 der, das apo die?', pde:'2 Ergänzen Sie der, das, die', s:'___ Finger', o:['der','das','die'], a:'der', e:'der Finger.'},
    {type:'gap', row:true, topic:'artikel', psq:'2 der, das apo die?', pde:'2 Ergänzen Sie der, das, die', s:'___ Ohr', o:['der','das','die'], a:'das', e:'das Ohr.'},
    {type:'gap', row:true, topic:'artikel', psq:'2 der, das apo die?', pde:'2 Ergänzen Sie der, das, die', s:'___ Nase', o:['der','das','die'], a:'die', e:'die Nase.'},
    {type:'cloze', topic:'possessiv', psq:'3 mein, dein apo Ihr?', pde:'3 Ergänzen Sie', bank:['mein','meine','dein','deine','Ihr','Ihre'],
     text:'a  – Tag, Frau Müller. Ist das Ihre Tochter?\n– Nein, das ist [[meine]] kleine Schwester.\nb  – Klara, warte mal, [[dein]] Freund Niko ist am Telefon.\n– Das ist doch nicht [[mein]] Freund!\nc  – Einen Moment bitte, Frau Abt, [[Ihr]] Mann ist am Telefon.\n– Wer? [[Mein]] Mann? Danke, Frau Schneider.\nd  (zwei Freundinnen) – [[Deine]] Augen sind ja ganz grün!\ne  (beim Arzt) – Wie alt sind [[Ihre]] Kinder?\n– Sieben und elf.',
     e:'meine Schwester, dein Freund, mein Freund, Ihr Mann, Mein Mann, Deine Augen, Ihre Kinder.'},
    {type:'gap', row:true, topic:'possessiv', psq:'4 sein apo ihr?', pde:'4 Was ist richtig?', s:'Alba hatte einen Unfall. ___ Bein tut weh.', h:'Alba 👩', o:['Ihr','Sein'], a:'Ihr', e:'Alba = sie → ihr Bein.'},
    {type:'gap', row:true, topic:'possessiv', psq:'4 sein apo ihr?', pde:'4 Was ist richtig?', s:'Tomoko hat Schmerzen. ___ Hals tut weh.', h:'Tomoko 👩', o:['Ihr','Sein'], a:'Ihr', e:'Tomoko = sie → ihr Hals.'},
    {type:'gap', row:true, topic:'possessiv', psq:'4 sein apo ihr?', pde:'4 Was ist richtig?', s:'Kweku kann nicht Fußball spielen. ___ Arm tut weh.', h:'Kweku 👨', o:['Ihr','Sein'], a:'Sein', e:'Kweku = er → sein Arm.'},
    {type:'gap', row:true, topic:'possessiv', psq:'4 sein apo ihr?', pde:'4 Was ist richtig?', s:'Ben kann heute nicht Tennis spielen. ___ Hand tut weh.', h:'Ben 👨', o:['Ihre','Seine'], a:'Seine', e:'Ben = er, die Hand → seine.'}
  ]
},

/* ---------- AB S. 109: sein / ihr ---------- */
{
  id:'hw13-s109', lek:10, pg:109, emoji:'👨‍👩‍👧', color:'#D6409F', seq:true, book:['faqe 109 · ushtrimi 5–7','S. 109 · Üb. 5–7'],
  sq:'sein, seine, ihr, ihre', de:'S. 109: Possessivartikel sein / ihr',
  desc:'Réka dhe Hung, familja e Meenes dhe -e apo asgjë?',
  tip:'Meene (ajo) → ihr Mann, ihre Kinder. Raghav (ai) → sein Vater, seine Eltern.',
  lesson:[
    {t:'Faqe 109 📖', d:'A · sein / ihr', p:'Te <b>5</b> i ke shënuar mirë: Réka → <b>Ihr / Ihre</b>, Hung → <b>Sein / Seine</b> ✓. <b>6</b> dhe <b>7</b> ishin ende bosh: tani i bën këtu! 💪',
     tip:'Gjithmonë pyet: <b>kujt</b> i përket? Ajo → <b>ihr</b>, ai → <b>sein</b>. Me die dhe shumës: <b>+e</b>. <i class="tr">(i saj · i tij)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'table', topic:'possessiv', psq:'5 Réka', pde:'5 Markieren Sie', th:['','Réka (sie)'],
     rows:[['Vater','Ihr',true],['Hobby','Ihr'],['Mutter','Ihre'],['Eltern','Ihre']], e:'Ihr Vater, Ihr Hobby, Ihre Mutter, Ihre Eltern.'},
    {type:'table', topic:'possessiv', psq:'5 Hung', pde:'5 Markieren Sie', th:['','Hung (er)'],
     rows:[['Bruder','Sein',true],['Hobby','Sein'],['Frau','Seine'],['Kinder','Seine']], e:'Sein Bruder, Sein Hobby, Seine Frau, Seine Kinder.'},
    {type:'cloze', topic:'possessiv', psq:'6 sein, seine, ihr apo ihre?', pde:'6 Ergänzen Sie', bank:['sein','seine','ihr','ihre'], h:'Kujt i përket: Meenes (ajo) apo Raghavit (ai)?',
     text:'Das ist meine Freundin Meene aus Indien. Ich kenne sie aus dem Tennisklub. Tennis spielen ist ihr Hobby. Sie ist verheiratet und sie hat zwei Kinder: [[Ihre]] Tochter ist zehn Jahre alt und [[ihr]] Sohn ist acht. [[Ihre]] Kinder spielen auch gern Tennis. [[Ihr]] Mann Raghav spielt nicht so gern Tennis. [[Sein]] Hobby ist Gitarrespielen. Früher haben Raghav und [[sein]] Vater oft zusammen Gitarre gespielt. Aber [[seine]] Eltern leben nicht in Deutschland. Sie leben in den USA. Dort lebt auch [[seine]] Schwester. [[Ihr]] Mann ist Amerikaner.',
     e:'Meene: Ihre Tochter, ihr Sohn, Ihre Kinder, Ihr Mann · Raghav: Sein Hobby, sein Vater, seine Eltern, seine Schwester · motra e tij: Ihr Mann.'},
    {type:'gap', row:true, topic:'possessiv', psq:'7 -e apo asgjë?', pde:'7 Ergänzen Sie: -e oder /', s:'Hakan arbeitet als Polizist in Berlin. ___ Chef ist sehr freundlich.', o:['Sein','Seine'], a:'Sein', e:'der Chef → sein.'},
    {type:'gap', row:true, topic:'possessiv', psq:'7 -e apo asgjë?', pde:'7 Ergänzen Sie: -e oder /', s:'Hakan: ___ Kollegen sind auch sehr nett.', o:['Seine','Sein'], a:'Seine', e:'die Kollegen (shumës) → seine.'},
    {type:'gap', row:true, topic:'possessiv', psq:'7 -e apo asgjë?', pde:'7 Ergänzen Sie: -e oder /', s:'Vor zwei Tagen haben wir Sam besucht. ___ Wohnung ist sehr schön.', o:['Seine','Sein'], a:'Seine', e:'die Wohnung → seine.'},
    {type:'gap', row:true, topic:'possessiv', psq:'7 -e apo asgjë?', pde:'7 Ergänzen Sie: -e oder /', s:'Ilena kann nicht zum Deutschkurs kommen. ___ Eltern besuchen sie.', o:['Ihre','Ihr'], a:'Ihre', e:'die Eltern (shumës) → ihre.'},
    {type:'gap', row:true, topic:'possessiv', psq:'7 -e apo asgjë?', pde:'7 Ergänzen Sie: -e oder /', s:'Meine Freundin hat zwei Kinder: ___ Sohn heißt Leo.', o:['ihr','ihre'], a:'ihr', e:'der Sohn → ihr.'},
    {type:'gap', row:true, topic:'possessiv', psq:'7 -e apo asgjë?', pde:'7 Ergänzen Sie: -e oder /', s:'Meine Freundin hat zwei Kinder: ___ Tochter heißt Lena.', o:['ihre','ihr'], a:'ihre', e:'die Tochter → ihre.'}
  ]
},

/* ---------- AB S. 110: unser / euer / ihr ---------- */
{
  id:'hw13-s110', lek:10, pg:110, emoji:'👫', color:'#7650F0', seq:true, book:['faqe 110 · ushtrimi 9–11','S. 110 · Üb. 9–11'],
  sq:'unser, euer, ihr', de:'S. 110: Unsere Augen sind so blau',
  desc:'Mesazhe të shkurtra, kush flet me kë dhe familja e Antonit dhe Maxit.',
  tip:'wir → unser / unsere · ihr → euer / eure · sie (ata) → ihr / ihre.',
  lesson:[
    {t:'Faqe 110 📖', d:'B · unser, euer, ihr', p:'<b>9</b> Mesazhe: plotëso me fjalët e kutisë. <b>10</b> Kush flet? Zgjidh. <b>11</b> unser, euer apo ihr?',
     tip:'Këto ushtrime ishin ende bosh: tani i bën këtu! 💪 eu<b>er</b> Ausflug, por <b>eure</b> Töchter. <i class="tr">(ekskursioni juaj · vajzat tuaja)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'possessiv', psq:'9 Rendit', pde:'9 Ordnen Sie zu', bank:['Ihr','Unser','eure','euer','ihre','unsere'],
     text:'A  Frau Schulte ist krank. Unser Deutschkurs fällt aus. Informierst du bitte Kiril? Danke! Asma\nB  Liebe Maria, ich bin wieder gesund, aber nun sind [[unsere]] Kinder krank. Ich kann also nicht kommen. [[Unser]] Treffen muss leider ausfallen. Nächste Woche bin ich hoffentlich wieder da. Grüße Rosina\nC  Hallo ihr zwei, was machen [[eure]] Töchter? Sind [[ihre;eure]] Freundinnen aus Spanien schon da? Gruß Ina\nD  Hallo Leo und Mona, wie war [[euer]] Ausflug? Seid ihr schon zu Hause? LG Mama\nE  Elke und Rainer können am Wochenende doch nicht kommen. [[Ihr]] Sohn ist seit zwei Tagen krank. Küsse von Peter',
     e:'unsere Kinder, Unser Treffen, eure Töchter, ihre Freundinnen, euer Ausflug, Ihr Sohn.'},
    {type:'gap', row:true, topic:'possessiv', psq:'10 Çfarë është e saktë?', pde:'10 Was ist richtig?', s:'A  ___ Lehrerin ist super, oder?', h:'Dy studentë flasin për mësuesen e tyre.', o:['Unsere','Eure'], a:'Unsere', e:'Mësuesja jonë → unsere.'},
    {type:'gap', row:true, topic:'possessiv', psq:'10 Çfarë është e saktë?', pde:'10 Was ist richtig?', s:'B  Seht mal, da kommt ___ Bus.', h:'Fëmijët presin autobusin e tyre.', o:['unser','euer'], a:'unser', e:'Autobusi ynë → unser.'},
    {type:'gap', row:true, topic:'possessiv', psq:'10 Çfarë është e saktë?', pde:'10 Was ist richtig?', s:'C  ___ Augen sind nicht mehr so gut …', h:'Një grua e moshuar flet me burrin e saj Theodor për ata të dy.', o:['Unsere','Ihre'], a:'Unsere', e:'Sytë tanë → unsere.'},
    {type:'gap', row:true, topic:'possessiv', psq:'10 Çfarë është e saktë?', pde:'10 Was ist richtig?', s:'C  … aber ___ Ohren hören alles, oder Theodor?', h:'Një grua e moshuar flet me burrin e saj Theodor për ata të dy.', o:['unsere','eure'], a:'unsere', e:'Veshët tanë → unsere.'},
    {type:'gap', row:true, topic:'possessiv', psq:'10 Çfarë është e saktë?', pde:'10 Was ist richtig?', s:'D  Sind das ___ Fahrräder?', h:'Një grua flet me dy fëmijë.', o:['eure','ihre'], a:'eure', e:'Ajo u flet fëmijëve (ihr) → eure.'},
    {type:'cloze', topic:'possessiv', psq:'11 unser, euer apo ihr?', pde:'11 Ergänzen Sie in der richtigen Form', h:'unser – euer – ihr në formën e duhur',
     text:'– Sieh mal. Das sind meine beiden Brüder Anton und Max. Und das sind unsere Eltern.\n– Ist das [[eure;deine]] Oma?\n– Ja, und das ist [[unser]] Opa.\n– Was war [[euer;dein]] Opa denn von Beruf?\n– Er war Verkäufer. [[Unsere]] Großeltern hatten einen Gemüseladen. Hier, das ist [[ihr]] Gemüseladen.\n– Und gibt es den Laden heute noch?\n– Nein, [[unser]] Vater hat den Laden verkauft. Heute ist dort ein Reisebüro.',
     e:'eure Oma, unser Opa, euer Opa, Unsere Großeltern, ihr Gemüseladen, unser Vater.'}
  ]
}
  ]
},
{
  id:'l14', date:'2026-11-06', added:'2026-11-07T15:12', emoji:'🩺',
  sq:'Libri: Mësimi 10 C–E', de:'Kursbuch S. 122–126',
  parts:[

/* ---------- KB S. 122: sollen ---------- */
{
  id:'hw14-s122', emoji:'🩺', color:'#0E9F8E', seq:true, book:['faqe 122 · C1–C4','S. 122 · C1–C4'],
  sq:'Ich soll Schmerztabletten nehmen', de:'S. 122: sollen',
  desc:'Çfarë thotë Ioanna, „Der Arzt hat gesagt …“, linja telefonike e shëndetit dhe këshilla.',
  tip:'ich soll, du sollst, er soll, wir sollen, ihr sollt, sie sollen.',
  read:'<b>Gesundheits-Hotline</b><br>Anrufer 1 ist immer müde.<br>Anruferin 2: Ihre Tochter hat Husten.<br>Anrufer 3 hat Sonnenbrand.',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Te <b>C3</b> i ke lidhur problemet me këshillat: Anrufer 1 → viel spazieren gehen, Anruferin 2 → zum Arzt gehen, Mira Saft geben, Anrufer 3 → Salbe verwenden. 👏',
     tip:'Shënimi yt: <b>sollen</b> = duhet, si këshillë nga dikush tjetër. <i class="tr">(Der Arzt sagt, ich soll …)</i>'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'modal', psq:'C1 Çfarë thotë Ioanna?', pde:'C1 Was sagt Ioanna?', h:'das Auge kühlen · gleich ins Bett gehen · ein paar Schritte gehen · bei Problemen wieder ins Krankenhaus kommen',
     text:'Ich soll Schmerztabletten nehmen.\nIch [[soll]] das Auge [[kühlen]].\nIch [[soll]] gleich ins Bett [[gehen]].\nIch [[soll]] ein paar Schritte [[gehen]].\nIch [[soll]] bei Problemen wieder ins Krankenhaus [[kommen]].',
     e:'Ich soll … + folja në fund.'},
    {type:'table', topic:'modal', psq:'Folja sollen', pde:'Modalverb sollen', th:['','sollen'],
     rows:[['ich','soll'],['du','sollst',true],['er / es / sie','soll'],['wir','sollen',true],['ihr','sollt',true],['sie / Sie','sollen',true]], e:'ich soll, er soll (pa mbaresë).'},
    {type:'gap', row:true, topic:'modal', psq:'C2 Der Arzt hat gesagt …', pde:'C2 Der Arzt hat gesagt …', s:'Der Arzt hat gesagt, Sie sollen viel trinken. – Was? Ich ___ viel trinken?', o:['soll','sollen','sollst'], a:'soll', e:'Sie sollen → ich soll.'},
    {type:'gap', row:true, topic:'modal', psq:'C2 Der Arzt hat gesagt …', pde:'C2 Der Arzt hat gesagt …', s:'Der Arzt hat gesagt, du sollst im Bett bleiben. – Was? Ich ___ im Bett bleiben?', o:['soll','sollst','sollen'], a:'soll', e:'du sollst → ich soll.'},
    {type:'gap', row:true, topic:'modal', psq:'C2 Der Arzt hat gesagt …', pde:'C2 Der Arzt hat gesagt …', s:'Der Arzt hat gesagt, ihr sollt nicht trainieren. – Was? Wir ___ nicht trainieren?', o:['sollen','sollt','soll'], a:'sollen', e:'ihr sollt → wir sollen.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'C3 Kush duhet të bëjë çfarë?', pde:'C3 Wer soll was machen?', q:'Wer soll eine Salbe verwenden?', o:['Anrufer 1','Anruferin 2','Anrufer 3'], a:'Anrufer 3', e:'Sonnenbrand → Salbe.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'C3 Kush duhet të bëjë çfarë?', pde:'C3 Wer soll was machen?', q:'Wer soll Mira Saft geben?', o:['Anrufer 1','Anruferin 2','Anrufer 3'], a:'Anruferin 2', e:'Tochter hat Husten → Saft (shurup).'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'C3 Kush duhet të bëjë çfarë?', pde:'C3 Wer soll was machen?', q:'Wer soll viel spazieren gehen?', o:['Anrufer 1','Anruferin 2','Anrufer 3'], a:'Anrufer 1', e:'Gjithmonë i lodhur → shumë shëtitje.'},
    {type:'gap', row:true, topic:'modal', psq:'C4 Këshilla për shëndetin', pde:'C4 Geben Sie Gesundheitstipps', s:'Meine Freundin hat Fieber. Sie ___ viel schlafen.', o:['soll','sollen','sollst'], a:'soll', e:'meine Freundin = sie → soll.'},
    {type:'gap', row:true, topic:'modal', psq:'C4 Këshilla për shëndetin', pde:'C4 Geben Sie Gesundheitstipps', s:'Mein Bruder kann nicht schlafen. Er ___ abends nicht so viele Computerspiele machen.', o:['soll','sollen','sollt'], a:'soll', e:'mein Bruder = er → soll.'},
    {type:'gap', row:true, topic:'modal', psq:'C4 Këshilla për shëndetin', pde:'C4 Geben Sie Gesundheitstipps', s:'Meine Kinder haben Husten. Sie ___ viel trinken.', o:['sollen','soll','sollt'], a:'sollen', e:'meine Kinder = sie (ata) → sollen.'}
  ]
},

/* ---------- KB S. 123: Anzeigen ---------- */
{
  id:'hw14-s123', emoji:'🧘‍♀️', color:'#E3A008', seq:true, book:['faqe 123 · D2','S. 123 · D2'],
  sq:'Njoftime kundër stresit', de:'S. 123: Welche Anzeige passt?',
  desc:'Katër njoftime dhe pesë persona: kush i përshtatet cilit njoftim?',
  tip:'Për një person nuk ka njoftim.',
  read:'<b>1 Anti-Stress-Seminar</b><br>Ihre Familie, Ihre Kollegen, Ihr Chef – alle wollen etwas? Sagen Sie auch einmal „Nein“! Unsere Sommerkurse sind ideal für Menschen mit Stress. 2-Wochen-Kurse von Juni bis Oktober. Anmeldungen per Telefon oder online bis zum 20. Juni möglich. Haus Buchenhain, Chiemsee. Kursleiter: Martin Hintermeier<br><br><b>2 Zeit für Freunde!</b><br>Vergessen Sie den Alltagsstress. Machen Sie sich ruhige Tage im Grünen. Spielen Sie mit unseren Tierkindern. Oder beobachten Sie Tiere im Wald. Auf unserem Bauernhof ist Platz für Sie und Ihre Freunde. Schreiben Sie uns! Ferienpension Dörrer, Bergholz 152, 8096 Gars am Inn<br><br><b>3 Lindenthaler Lauftreff</b><br>Unsere Gruppe ist für Menschen aus unserem Stadtteil. Besonders für Menschen mit viel Stress im Alltag. Wir treffen uns zweimal in der Woche (Dienstag und Donnerstag um 18 Uhr) und laufen oder machen sportliche Spaziergänge und Nordic Walking. Alles für Null Euro. Treffpunkt: Parkplatz am Stadionbad.<br><br><b>4 Essen gegen Stress</b><br>5 doppelte Espresso am Tag? Dazu Fast Food mit viel Fleisch? Essen und Trinken kann krank machen. Besonders Menschen mit Stress sollen gesunde Sachen essen. Viel Müsli, Obst und wenig Fleisch. Wir zeigen Ihnen: So geht das! Volkshochschule Wangen, Kurs FR3456, mittwochs 17:00 Uhr, Kursbeginn: 3. Juli',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te D2 i ke lidhur <b>të pesë saktë</b>: a 4, b 3, c 1, d –, e 2. 👏'}
  ],
  nouns:[], words:[],
  items:[
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D2 Cili njoftim?', pde:'D2 Welche Anzeige passt?', q:'a  Herr Meier hat zu viel zu tun. Er isst oft bei der Arbeit am Computer. Sein Bauch ist zu dick.', o:['1','2','3','4','–'], a:'4', e:'Essen gegen Stress.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D2 Cili njoftim?', pde:'D2 Welche Anzeige passt?', q:'b  Annette Huber ist ledig und arbeitet viel. Sie möchte Leute kennenlernen und Sport machen. Sie möchte nichts bezahlen.', o:['1','2','3','4','–'], a:'3', e:'Lauftreff: Sport, Gruppe, Null Euro.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D2 Cili njoftim?', pde:'D2 Welche Anzeige passt?', q:'c  Nina Schneider ist alleinerziehend und hat viel Stress. Die Oma kann in den Sommerferien zwei Wochen auf die Kinder aufpassen.', o:['1','2','3','4','–'], a:'1', e:'Anti-Stress-Seminar: 2-Wochen-Kurse im Sommer.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D2 Cili njoftim?', pde:'D2 Welche Anzeige passt?', q:'d  Peter Hansen will Sport machen und joggen lernen. Er sucht ein Fitness-Studio.', o:['1','2','3','4','–'], a:'–', e:'Asnjë njoftim nuk është palestër.'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'D2 Cili njoftim?', pde:'D2 Welche Anzeige passt?', q:'e  Armin Schremser hat keine Zeit für Urlaub. Er möchte für ein Wochenende mit seinen Kollegen in die Natur fahren.', o:['1','2','3','4','–'], a:'2', e:'Bauernhof: ditë të qeta në natyrë me shokët.'}
  ]
},

/* ---------- KB S. 124: E-Mail ---------- */
{
  id:'hw14-s124', emoji:'✉️', color:'#D6409F', seq:true, book:['faqe 124 · D4–D5','S. 124 · D4–D5'],
  sq:'E-maili i Arminit', de:'S. 124: Eine Anfrage schreiben',
  desc:'Pjesët e e-mailit dhe pyetje për një kërkesë.',
  tip:'Absender = kush shkruan · Empfänger = kush e merr · Betreff = tema.',
  read:'Von: Armin Schremser [mailto:schremser@kabelmail.de] <b>(1)</b><br>Gesendet: Dienstag, 23. Juni 21:49 <b>(2)</b><br>An: Ferienpension_Doerrer@gmx.de <b>(3)</b><br>Betreff: Anfrage Zimmer 2.–5. Juli <b>(4)</b><br><br>Sehr geehrte Damen und Herren, <b>(5)</b><br>ich habe Ihre Anzeige gelesen und finde Ihr Angebot interessant. Ich möchte gern vom 2. bis 5. Juli mit vier Kollegen zu Ihnen kommen und habe folgende Fragen: Kann man mit dem Zug zu Ihnen kommen? Haben Sie fünf Einzelzimmer frei? Kann man bei Ihnen auch Halbpension oder Vollpension buchen?<br>Vielen Dank für Ihre Auskunft.<br>Mit freundlichen Grüßen <b>(6)</b><br>Armin Schremser<br><br>Armin Schremser, Firma Berger GmbH<br><b>(7)</b> Barbarossaplatz <b>(8)</b> 4<br><b>(9)</b> 50859 <b>(10)</b> Köln',
  lesson:[
    {t:'Bravo, Mimoza! 🌟', d:'Alles richtig!', p:'Te D4 i ke gjetur <b>të 10 pjesët saktë</b>: Absender 1, Datum 2, Empfänger 3, Betreff 4, Anrede 5, Gruß 6, Straße 7, Hausnummer 8, Postleitzahl 9, Ort 10. 👏'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', read:true, pairs:[['(1)','der Absender'],['(2)','das Datum'],['(3)','der Empfänger'],['(4)','der Betreff'],['(5)','die Anrede']]},
    {type:'match', read:true, pairs:[['(6)','der Gruß'],['(7)','die Straße'],['(8)','die Hausnummer'],['(9)','die Postleitzahl'],['(10)','der Ort']]},
    {type:'order', psq:'D5 Kërkesë për njoftimin 3', pde:'D5 Schreiben Sie eine Anfrage', cue:'Wie viele Kilometer?', de:'Wie viele Kilometer laufen Sie?', sq:'Sa kilometra vraponi?'},
    {type:'order', psq:'D5 Kërkesë për njoftimin 3', pde:'D5 Schreiben Sie eine Anfrage', cue:'Nur einmal pro Woche möglich?', de:'Kann ich auch nur einmal pro Woche kommen?', sq:'A mund të vij vetëm një herë në javë?'},
    {type:'order', psq:'D5 Kërkesë për njoftimin 1', pde:'D5 Schreiben Sie eine Anfrage', cue:'Kosten?', de:'Wie viel kostet der Kurs?', sq:'Sa kushton kursi?'},
    {type:'order', psq:'D5 Kërkesë për njoftimin 1', pde:'D5 Schreiben Sie eine Anfrage', cue:'Einzelzimmer möglich?', de:'Kann man auch ein Einzelzimmer bekommen?', sq:'A mund të merret edhe një dhomë teke?'}
  ]
},

/* ---------- KB S. 125: Termine ---------- */
{
  id:'hw14-s125', emoji:'📅', color:'#7650F0', seq:true, book:['faqe 125 · E3–E4','S. 125 · E3–E4'],
  sq:'Lë një takim', de:'S. 125: Terminvereinbarung',
  desc:'Fraza për të lënë, ndryshuar apo anuluar një takim.',
  tip:'vereinbaren = lë · ändern = ndryshoj · absagen = anuloj.',
  lesson:[
    {t:'Faqe 125 📖', d:'E · Terminvereinbarung', p:'<b>E3</b> Rendit fjalitë. <b>E4</b> Te dentisti: e ke dhimbje dhëmbi dhe të duhet urgjent një takim.',
     tip:'E2 është detyrë shtëpie, e gjen te <b>Detyrat</b>. 📝'}
  ],
  nouns:[], words:[],
  items:[
    {type:'sort', psq:'E3 Rendit', pde:'E3 Ordnen Sie zu', cats:['einen Termin vereinbaren','einen Termin ändern','einen Termin absagen'],
     items:[['Braucht man einen Termin oder kann man einfach vorbeikommen?','einen Termin vereinbaren'],['Könnte ich bitte einen Termin haben?','einen Termin vereinbaren'],['Haben Sie am Freitag einen Termin frei?','einen Termin vereinbaren'],
       ['Kann ich unseren Termin auf Mittwoch verschieben?','einen Termin ändern'],['Kann ich früher kommen? Es ist dringend!','einen Termin ändern'],
       ['Ich kann jetzt doch nicht kommen.','einen Termin absagen'],['Ich muss für morgen leider absagen.','einen Termin absagen'],['Ich kann heute leider nicht kommen.','einen Termin absagen']],
     e:'vereinbaren: Termin haben / frei? · ändern: verschieben, früher · absagen: nicht kommen, absagen.'},
    {type:'order', psq:'E4 Te dentisti', pde:'E4 Rollenspiel', de:'Ich habe Zahnschmerzen und brauche dringend einen Termin.', sq:'Kam dhimbje dhëmbi dhe më duhet urgjent një takim.'},
    {type:'gap', row:true, psq:'E4 Te dentisti', pde:'E4 Rollenspiel', s:'Der nächste freie Termin ist ___ Nachmittag.', o:['morgen','Morgen'], a:'morgen', e:'morgen = nesër (shkronjë e vogël).'}
  ]
},

/* ---------- KB S. 126: Grammatik ---------- */
{
  id:'hw14-s126', emoji:'🧩', color:'#2E86DE', seq:true, book:['faqe 126 · gramatika','S. 126 · Grammatik'],
  sq:'Gramatika e mësimit 10', de:'S. 126: Grammatik und Kommunikation',
  desc:'Possessivartikel (edhe Akkusativ), sollen dhe si flet për shëndetin.',
  tip:'Akkusativ me der: meinen, deinen, seinen, ihren, unseren, euren Kopf.',
  lesson:[
    {t:'Akkusativ ⚠️', d:'Possessivartikel im Akkusativ', p:'Me <b>der</b> te Akkusativ (Ich halte …, Ich sehe …) shtohet <b>-en</b>:',
     ex:[['Mein Kopf tut weh.','Më dhemb koka. (Nominativ)'],['Ich halte meinen Kopf warm.','E mbaj kokën ngrohtë. (Akkusativ)'],['Er sieht seinen Kopf im Spiegel.','Ai e sheh kokën e tij në pasqyrë.']],
     tip:'Kujdes: <b>seine</b> Ohren (shumës) · <b>seinen</b> Kopf (der, Akkusativ). eu<b>re</b>, pa e në mes!'},
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'„Peter ist müde. Er <b>soll</b> …“ e ke saktë ✓. Vetëm:',
     fix:[['Jana ist auch müde. Sie sollen …','Jana ist auch müde. Sie soll …','Jana = sie (ajo, një person) → soll.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'table', topic:'possessiv', psq:'1 Possessivartikel: Akkusativ', pde:'1 Possessivartikel: Akkusativ', th:['','der Kopf (Akkusativ)'],
     rows:[['ich','meinen',true],['du','deinen'],['er / es','seinen'],['sie','ihren'],['wir','unseren'],['ihr','euren'],['Sie','Ihren']], e:'meinen, deinen, seinen, ihren, unseren, euren, Ihren.'},
    {type:'gap', row:true, topic:'modal', psq:'Çfarë duhet të bëjnë?', pde:'Was sollen Peter und Jana tun?', s:'Peter ist müde. Er ___ Kaffee trinken.', o:['soll','sollen','sollst'], a:'soll', e:'Peter = er → soll.'},
    {type:'gap', row:true, topic:'modal', psq:'Çfarë duhet të bëjnë?', pde:'Was sollen Peter und Jana tun?', s:'Jana ist auch müde. Sie ___ das Fenster öffnen.', o:['soll','sollen','sollt'], a:'soll', e:'Jana = sie (ajo) → soll.'},
    {type:'gap', row:true, topic:'modal', psq:'Çfarë duhet të bëjnë?', pde:'Was sollen Peter und Jana tun?', s:'Peter und Jana haben Hunger. Sie ___ etwas essen.', o:['sollen','soll','sollt'], a:'sollen', e:'Peter und Jana = sie (ata) → sollen.'},
    {type:'cloze', psq:'Çfarë thotë burri?', pde:'Was sagt der Mann?', h:'🦵 Burri mban këmbën dhe kërcen në një këmbë.',
     text:'Mein [[Bein;Fuß;Knie]] tut weh. Ich habe [[Schmerzen]].', e:'Mein Bein tut weh. Ich habe Schmerzen.'}
  ]
}
  ]
},
{
  id:'l15', date:'2026-11-07', added:'2026-11-07T15:12', emoji:'📝',
  sq:'Detyrat: Fletorja, mësimi 10 C–D', de:'Hausaufgaben · Arbeitsbuch S. 112–114 · Kursbuch S. 125',
  parts:[

/* ---------- AB S. 112: sollen ---------- */
{
  id:'hw15-s112', lek:10, pg:112, emoji:'🩺', color:'#0E9F8E', seq:true, book:['faqe 112 · ushtrimi 14–17','S. 112 · Üb. 14–17'],
  sq:'sollen: duhet', de:'S. 112: Ich soll Schmerztabletten nehmen',
  desc:'sollen në formën e duhur, fjalitë në tabelë, urdhërorja ↔ sollen dhe rendit.',
  tip:'ich soll, du sollst, er soll, wir sollen, ihr sollt, sie sollen. Folja tjetër në fund.',
  lesson:[
    {t:'Faqe 112 📖', d:'C · Ich soll …', p:'Detyrë për sot: <b>14</b> sollen në formën e duhur · <b>15</b> fjalitë në tabelë · <b>16</b> urdhërorja ↔ sollen · <b>17</b> rendit.',
     tip:'Urdhërorja: folja <b>në krye</b> (Steh auf!). Me sollen: sollen në vendin 2, folja <b>në fund</b> (Du sollst aufstehen.).'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'modal', psq:'14 sollen në formën e duhur', pde:'14 Ergänzen Sie sollen in der richtigen Form',
     text:'a  [[Soll]] ich wirklich zwei Tage zu Hause bleiben?\nb  Du [[sollst]] ein paar Schritte gehen.\nc  Er [[soll]] Sarah die Medizin morgens, mittags und abends geben.\nd  [[Sollen]] wir immer noch leise sein?\ne  Ihr [[sollt]] nicht so viel trainieren.\nf  [[Sollen]] die Kinder wirklich die Tabletten nehmen?\ng  Frau Erl, Sie sollen im Wartebereich warten.',
     e:'Soll ich, du sollst, er soll, Sollen wir, ihr sollt, Sollen die Kinder.'},
    {type:'order', topic:'satz', psq:'15 Fjalitë në tabelë', pde:'15 Ergänzen Sie die Sätze aus 14', cue:'Position 1 – sollen – … – Ende', parts:['Du','sollst','ein paar Schritte','gehen.'], de:'Du sollst ein paar Schritte gehen.', sq:'Duhet të ecësh pak.'},
    {type:'order', topic:'satz', psq:'15 Fjalitë në tabelë', pde:'15 Ergänzen Sie die Sätze aus 14', cue:'Position 1 – sollen – … – Ende', parts:['Er','soll','Sarah','die Medizin','morgens, mittags und abends','geben.'], de:'Er soll Sarah die Medizin morgens, mittags und abends geben.', sq:'Ai duhet t’i japë Sarës ilaçin në mëngjes, në drekë dhe në mbrëmje.'},
    {type:'order', topic:'satz', psq:'15 Fjalitë në tabelë', pde:'15 Ergänzen Sie die Sätze aus 14', cue:'Pyetje: sollen në krye – … – Ende', parts:['Soll','ich','wirklich','zwei Tage','zu Hause','bleiben?'], de:'Soll ich wirklich zwei Tage zu Hause bleiben?', sq:'A duhet vërtet të rri dy ditë në shtëpi?'},
    {type:'order', topic:'satz', psq:'15 Fjalitë në tabelë', pde:'15 Ergänzen Sie die Sätze aus 14', cue:'Position 1 – sollen – … – Ende', parts:['Ihr','sollt','nicht','so viel','trainieren.'], de:'Ihr sollt nicht so viel trainieren.', sq:'Nuk duhet të stërviteni kaq shumë.'},
    {type:'order', topic:'imperativ', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', cue:'b  Du sollst endlich aufstehen. → Imperativ', parts:['Steh','endlich','auf!'], de:'Steh endlich auf!', sq:'Çohu më në fund!'},
    {type:'gap', row:true, topic:'imperativ', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', s:'c  Ihr sollt leise sein. → ___ leise!', o:['Seid','Sei','Seien Sie'], a:'Seid', e:'ihr → Seid!'},
    {type:'order', topic:'modal', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', cue:'d  Füllen Sie bitte den Antrag aus! → sollen', parts:['Sie','sollen','den Antrag','ausfüllen.'], de:'Sie sollen den Antrag ausfüllen.', sq:'Duhet ta plotësoni kërkesën.'},
    {type:'order', topic:'imperativ', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', cue:'e  Sie sollen „Ja“ oder „Nein“ ankreuzen. → Imperativ', parts:['Kreuzen','Sie','„Ja“ oder „Nein“','an!'], de:'Kreuzen Sie „Ja“ oder „Nein“ an!', sq:'Shënoni „Po“ apo „Jo“!'},
    {type:'gap', row:true, topic:'imperativ', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', s:'f  Sie sollen zum Chef kommen. → ___ Sie zum Chef!', o:['Kommen','Kommt','Komm'], a:'Kommen', e:'Sie → Kommen Sie!'},
    {type:'order', topic:'modal', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', cue:'g  Wartet bitte hier! → sollen', parts:['Ihr','sollt','hier','warten.'], de:'Ihr sollt hier warten.', sq:'Duhet të prisni këtu.'},
    {type:'gap', row:true, topic:'imperativ', psq:'16 Shkruaj përsëri', pde:'16 Schreiben Sie die Sätze neu', s:'h  Du sollst nicht so viel Schokolade essen. → ___ nicht so viel Schokolade!', o:['Iss','Isst','Esst'], a:'Iss', e:'du isst → Iss!'},
    {type:'cloze', topic:'modal', psq:'17 Rendit', pde:'17 Ordnen Sie zu', bank:['darf','soll','soll','Willst','soll','Willst'],
     text:'a  – Na, was hat die Ärztin gesagt? Sollst du im Bett bleiben?\n– Nein, aber ich [[soll]] meinen Hals warm halten.\nb  – Wie geht es Lukas?\n– Nicht so gut. Er [[soll]] Schmerztabletten nehmen und er [[darf]] leider nicht Fußball spielen.\nc  – Anja und ich gehen morgen in die Berge. [[Willst]] du auch mitkommen?\n– Nein, mein Fuß tut weh. Der Arzt sagt, ich [[soll]] zu Hause bleiben.\nd  Du siehst krank aus. Du hast bestimmt Fieber. [[Willst]] du nicht lieber zum Arzt gehen?',
     e:'soll, soll, darf, Willst, soll, Willst.'}
  ]
},

/* ---------- AB S. 113: Modalverben ---------- */
{
  id:'hw15-s113', lek:10, pg:113, emoji:'🧩', color:'#7650F0', seq:true, book:['faqe 113 · ushtrimi 18–19','S. 113 · Üb. 18–19'],
  sq:'müssen, sollen, können, dürfen, wollen', de:'S. 113: Modalverben',
  desc:'Lidh fjalitë dhe plotëso bisedat me foljet modale.',
  tip:'müssen = duhet · sollen = duhet (sipas dikujt) · können = mund · dürfen = lejohet · wollen = dua.',
  lesson:[
    {t:'Faqe 113 📖', d:'C · Modalverben', p:'<b>18</b> Lidh fjalitë. <b>19</b> Bisedat me müssen, sollen, können, dürfen, wollen.',
     tip:'Ushtrimi 20 është me audio, prandaj nuk është këtu.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', pairs:[['Ihre Hand sieht ja schlimm aus. Sie müssen','die Salbe hier verwenden.'],['Wir haben keine Milch mehr. Kannst du','bitte einen Liter kaufen?'],['Das ist verboten. Du darfst','hier nicht rauchen.'],
      ['Ich bin müde. Ich muss','jetzt meinen Computer ausmachen.'],['Der Arzt hat gesagt, ich soll','meine Ohren warm halten.']]},
    {type:'cloze', topic:'modal', psq:'19 Plotëso bisedat', pde:'19 Ergänzen Sie die Gespräche', h:'müssen – sollen – können – dürfen – wollen',
     text:'A  (Kinder im Bett)\n– Der Arzt hat gesagt, ihr [[sollt]] viel trinken.\n– Können wir Cola trinken?\n– Nein. Ihr [[sollt;müsst;dürft]] Tee trinken.\nB  (im Wartezimmer, Schild 📵)\n– Entschuldigung. Sie [[dürfen]] hier nicht telefonieren. Sie [[müssen;sollen]] das Handy ausmachen.\n– Oh, tut mir leid.\nC  (Er sitzt am Schreibtisch und arbeitet.)\n– Sabine und ich gehen jetzt ins Kino. [[Willst;Kannst]] du mitkommen?\n– Tut mir leid, ich [[kann]] leider nicht mitkommen. Ich [[muss]] bis 20.00 Uhr arbeiten.',
     e:'ihr sollt, ihr sollt/müsst, Sie dürfen nicht, Sie müssen, Willst du, ich kann nicht, ich muss.'}
  ]
},

/* ---------- AB S. 114: Anfrage, Brief ---------- */
{
  id:'hw15-s114', lek:10, pg:114, emoji:'✉️', color:'#E3A008', seq:true, book:['faqe 114 · ushtrimi 21–23','S. 114 · Üb. 21–23'],
  sq:'Kurse dhe letra', de:'S. 114: Eine Anfrage schreiben',
  desc:'Dy njoftime kursesh, pjesët e letrës dhe du apo Sie?',
  tip:'Absender = kush shkruan · Empfänger = kush e merr · Anrede në fillim · Gruß në fund.',
  lesson:[
    {t:'Faqe 114 📖', d:'D · Eine Anfrage schreiben', p:'Te <b>21</b> e ke shkruar <b>wenig</b> saktë ✓, pjesa tjetër është ende bosh. <b>22</b> Pjesët e letrës. <b>23</b> du apo Sie?',
     tip:'Lieb<b>e</b> Klara · Lieb<b>er</b> Jakob · Sehr geehrt<b>e</b> Damen und Herren'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', psq:'21 Rendit', pde:'21 Ordnen Sie zu', bank:['Menschen','beobachten','Lebensmittel','Wald','Kursleiterin','dick','Müsli','Ruhige'],
     text:'[[Ruhige]] Stunden im [[Wald]]: Tiere [[beobachten]], interessante [[Menschen]] kennenlernen, den Stress vergessen, … Kommen Sie mit! Immer freitags um 16 Uhr im Stadtwald. Am 16. 4. Extra-Angebot: Ausflug zum Demetra-Bauernhof in Brix! Kurs-Nr. 7765\n\nWelche [[Lebensmittel]] sind gesund, welche machen [[dick]]? Ist wenig Fleisch essen gesund oder nur Mode? Und wie kann ich auch jeden Tag im Büro gesund essen? Antworten auf diese Fragen gibt Ihnen [[Kursleiterin]] Eva Martens im Kurs-Nr. 4532 „Nur [[Müsli]] und Gemüse? Gesund essen – was heißt das?“',
     e:'Ruhige, Wald, beobachten, Menschen · Lebensmittel, dick, Kursleiterin, Müsli.'},
    {type:'mc', psq:'22b Pjesët e letrës', pde:'22b Ordnen Sie die Wörter zu', q:'1  Diese Person schreibt den Brief:', o:['der Absender','der Empfänger','der Betreff','die Anrede'], a:'der Absender', e:'Absender = dërguesi.'},
    {type:'mc', psq:'22b Pjesët e letrës', pde:'22b Ordnen Sie die Wörter zu', q:'2  Diese Person bekommt den Brief:', o:['der Empfänger','der Absender','das Datum','der Ort'], a:'der Empfänger', e:'Empfänger = marrësi.'},
    {type:'mc', psq:'22b Pjesët e letrës', pde:'22b Ordnen Sie die Wörter zu', q:'3  Ein anderes Wort für „die Stadt“:', o:['der Ort','das Datum','der Betreff','die Anrede'], a:'der Ort', e:'der Ort = vendi, qyteti.'},
    {type:'mc', psq:'22b Pjesët e letrës', pde:'22b Ordnen Sie die Wörter zu', q:'4  Wann schreiben Sie den Brief?', o:['das Datum','der Ort','der Betreff','der Gruß'], a:'das Datum', e:'das Datum = data.'},
    {type:'mc', psq:'22b Pjesët e letrës', pde:'22b Ordnen Sie die Wörter zu', q:'5  Warum schreiben Sie den Brief?', o:['der Betreff','das Datum','der Absender','der Gruß'], a:'der Betreff', e:'der Betreff = tema, pse shkruan.'},
    {type:'mc', psq:'22b Pjesët e letrës', pde:'22b Ordnen Sie die Wörter zu', q:'6  Das schreiben Sie vor dem Brieftext:', o:['die Anrede','der Gruß','der Ort','der Empfänger'], a:'die Anrede', e:'die Anrede: Sehr geehrte …, Liebe …'},
    {type:'sort', psq:'23 du apo Sie?', pde:'23 Ordnen Sie zu', cats:['Sie sagen „du“','Sie sagen „Sie“'],
     items:[['Sehr geehrte Frau Winter','Sie sagen „Sie“'],['Sehr geehrte Damen und Herren','Sie sagen „Sie“'],['Mit freundlichen Grüßen','Sie sagen „Sie“'],
       ['Hallo Susan','Sie sagen „du“'],['Lieber Jakob','Sie sagen „du“'],['Liebe Klara','Sie sagen „du“'],['Viele Grüße','Sie sagen „du“']],
     e:'du: Hallo, Liebe/Lieber, Viele Grüße · Sie: Sehr geehrte, Mit freundlichen Grüßen.'}
  ]
},

/* ---------- KB S. 125: E2 ---------- */
{
  id:'hw15-k125', emoji:'🏋️', color:'#16A34A', seq:true, book:['Libri faqe 125 · E2','Kursbuch S. 125 · E2'],
  sq:'Në telefon me klubin e fitnesit', de:'Kursbuch S. 125: Terminvereinbarung',
  desc:'Zonja Kess dëshiron të bëjë sport dhe merr një takim.',
  tip:'🏋️ = Frau Schäflein (Fitness-Club) · 👩 = Frau Kess.',
  lesson:[
    {t:'Faqe 125 📖', d:'E2 · Ergänzen Sie das Gespräch', p:'Ke filluar mirë ✓: Sie <b>brauchen</b> einen Termin · <b>kann ich einfach</b> vorbeikommen. Tani plotësoje të gjithë bisedën! 💪',
     tip:'Fjalët e kutisë: brauchen einen Termin · einen Termin frei · kann ich einfach vorbeikommen · haben Sie denn Zeit · Dann kommen Sie'}
  ],
  nouns:[], words:[],
  items:[
    {type:'gap', psq:'E2 Plotëso bisedën', pde:'E2 Ergänzen Sie das Gespräch', s:'👩 Aha, sehr gut! Wie ist das: Braucht man da einen Termin oder ___?', o:['kann ich einfach vorbeikommen','haben Sie denn Zeit','einen Termin frei','Dann kommen Sie'], a:'kann ich einfach vorbeikommen', e:'Termin apo thjesht kaloj?'},
    {type:'gap', psq:'E2 Plotëso bisedën', pde:'E2 Ergänzen Sie das Gespräch', s:'🏋️ Nein, nein, Sie ___.', o:['brauchen einen Termin','einen Termin frei','kann ich einfach vorbeikommen','haben Sie denn Zeit'], a:'brauchen einen Termin', e:'Jo, ju duhet një takim.'},
    {type:'gap', psq:'E2 Plotëso bisedën', pde:'E2 Ergänzen Sie das Gespräch', s:'🏋️ Wann ___? Am Vormittag oder am Nachmittag?', o:['haben Sie denn Zeit','brauchen einen Termin','Dann kommen Sie','einen Termin frei'], a:'haben Sie denn Zeit', e:'Wann haben Sie denn Zeit?'},
    {type:'gap', psq:'E2 Plotëso bisedën', pde:'E2 Ergänzen Sie das Gespräch', s:'👩 Vormittag ist gut. Haben Sie am Freitag ___?', o:['einen Termin frei','haben Sie denn Zeit','brauchen einen Termin','kann ich einfach vorbeikommen'], a:'einen Termin frei', e:'Haben Sie am Freitag einen Termin frei?'},
    {type:'gap', psq:'E2 Plotëso bisedën', pde:'E2 Ergänzen Sie das Gespräch', s:'🏋️ Na prima! ___ am Freitagvormittag um zehn Uhr, ja?', o:['Dann kommen Sie','haben Sie denn Zeit','einen Termin frei','brauchen einen Termin'], a:'Dann kommen Sie', e:'Dann kommen Sie am Freitag um zehn Uhr.'}
  ]
}
  ]
},

/* =====================================================================
   🚗 Libri: Mësimi 11 A–C (Kursbuch S. 130–134, 138) und der Film
   „Alfons, der Hypochonder“ (S. 129, Lektion 10). Seite für Seite wie im
   Buch. Hörübungen (A1, A2, B1a) ohne Audio weggelassen; Bild-Aufgaben
   (C2b) als Grammatik-Aufgaben, damit sie ohne Buch lösbar sind.
   ===================================================================== */
{
  id:'l16', date:'2026-11-10', added:'2026-11-10T16:32', emoji:'🚗',
  sq:'Libri: Mësimi 11 A–C dhe filmi „Alfons“', de:'Kursbuch S. 129–134 und 138',
  parts:[

/* ---------- KB S. 129: Film „Alfons, der Hypochonder“ ---------- */
{
  id:'hw16-s129', emoji:'🎬', color:'#F2545B', seq:true, book:['faqe 129 · filmi','S. 129 · Film'],
  sq:'Alfons, hipokondriaku', de:'S. 129: Alfons, der Hypochonder',
  desc:'Çdo ditë Alfonsi ka një „sëmundje“ të re. Shkruaj pjesët e trupit.',
  tip:'„Meine … sind“ = shumës (Augen, Beine). „Meine linke … ist“ = die (Hand). „Mein rechtes … ist“ = das (Ohr).',
  read:'<b>Alfons, der Hypochonder</b> 🎬<br>Das ist Alfons. Er hat ein Problem. Er ist Hypochonder. Jeden Tag hat er eine neue Krankheit.<br><br>Am Samstag geht Alfons in sein Lieblingsgeschäft: die Apotheke. 💊<br>Am Sonntag geht es Alfons richtig gut: einen Tag lang. Aber dann … kommt schon wieder der Montag. Armer Alfons!',
  lesson:[
    {t:'Faqe 129 🎬', d:'Film: Alfons, der Hypochonder', p:'Alfonsi është <b>hipokondriak</b>: çdo ditë mendon se ka një sëmundje të re.', say:0, th:['Deutsch','Shqip'],
     table:[['der Hypochonder','hipokondriaku'],['jeden Tag','çdo ditë'],['die Krankheit','sëmundja'],['das Lieblingsgeschäft','dyqani i preferuar'],['schon wieder','tashmë përsëri'],
       ['dick','i trashë, i fryrë'],['eiskalt','i akullt'],['kurz','i shkurtër'],['Armer Alfons!','I gjori Alfons!']],
     tip:'Shiko fjalën para vijës: <b>Mein rechtes</b> … → das · <b>Meine linke</b> … → die · <b>Meine</b> … <b>sind</b> → shumës.'},
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'<b>Ohr</b> dhe <b>Nase</b> i ke shkruar saktë ✓. Te këto shiko foljen dhe nyjën:',
     fix:[
      ['Meine Mund sind heute so gelb.','Meine Augen sind heute so gelb.','„Meine … sind“ = shumës. der Mund është një → nuk përshtatet.'],
      ['Meine linke Arm ist dick.','Meine linke Hand ist dick.','„Meine linke“ = die → die Hand. (der Arm → mein linker Arm)'],
      ['Meine Bein sind kurz.','Meine Beine sind kurz.','„sind“ = shumës → Beine.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', read:true, psq:'1 Pjesët e trupit', pde:'1 Ergänzen Sie die Körperteile', h:'B 👂 · C 👀 · D ✋ · E 👃 · F 🦵🦵',
     text:'B  Am Montag sagt er: Mein rechtes [[Ohr]] ist so groß.\nC  Am Dienstag sagt er: Meine [[Augen;Zähne]] sind heute so gelb.\nD  Am Mittwoch sagt er: Meine linke [[Hand]] ist dick.\nE  Am Donnerstag sagt er: Meine [[Nase]] ist eiskalt.\nF  Am Freitag sagt er: Meine [[Beine;Füße]] sind kurz.',
     e:'Ohr · Augen (shumës) · Hand (die) · Nase · Beine (shumës).'},
    {type:'gap', row:true, topic:'subjekt', psq:'ist apo sind?', pde:'ist oder sind?', s:'Meine Augen ___ heute so gelb.', o:['ist','sind'], a:'sind', e:'Augen = shumës → sind.'},
    {type:'gap', row:true, topic:'subjekt', psq:'ist apo sind?', pde:'ist oder sind?', s:'Meine linke Hand ___ dick.', o:['ist','sind'], a:'ist', e:'die Hand = një → ist.'},
    {type:'gap', row:true, topic:'subjekt', psq:'ist apo sind?', pde:'ist oder sind?', s:'Meine Beine ___ kurz.', o:['ist','sind'], a:'sind', e:'Beine = shumës → sind.'},
    {type:'gap', row:true, topic:'possessiv', psq:'Mein apo Meine?', pde:'Mein oder Meine?', s:'___ rechtes Ohr ist so groß.', h:'das Ohr', o:['Mein','Meine'], a:'Mein', e:'das Ohr → mein.'},
    {type:'gap', row:true, topic:'possessiv', psq:'Mein apo Meine?', pde:'Mein oder Meine?', s:'___ Nase ist eiskalt.', h:'die Nase', o:['Mein','Meine'], a:'Meine', e:'die Nase → meine.'},
    {type:'gap', row:true, topic:'possessiv', psq:'Mein apo Meine?', pde:'Mein oder Meine?', s:'___ Beine sind kurz.', h:'shumës', o:['Mein','Meine'], a:'Meine', e:'Shumës → meine.'},
    {type:'mc', read:true, topic:'lesen', psq:'Lexo dhe përgjigju', pde:'Lies und antworte', q:'Was ist das Problem von Alfons?', o:['Er ist Hypochonder.','Er hat keine Arbeit.','Er ist Arzt.','Er hat kein Geld.'], a:'Er ist Hypochonder.', e:'„Er hat ein Problem. Er ist Hypochonder.“'},
    {type:'mc', read:true, topic:'lesen', psq:'Lexo dhe përgjigju', pde:'Lies und antworte', q:'Wohin geht Alfons am Samstag?', o:['in die Apotheke','ins Krankenhaus','ins Kino','zum Arzt'], a:'in die Apotheke', e:'„… in sein Lieblingsgeschäft: die Apotheke.“'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'Lexo dhe përgjigju', pde:'Lies und antworte', q:'Wann geht es Alfons richtig gut?', o:['am Montag','am Samstag','am Sonntag'], a:'am Sonntag', e:'„Am Sonntag geht es Alfons richtig gut: einen Tag lang.“'}
  ]
},

/* ---------- KB S. 130–131: Foto-Hörgeschichte Folge 11 ---------- */
{
  id:'hw16-s130', emoji:'🚗', color:'#16A34A', seq:true, book:['faqe 130–131 · historia','S. 130–131 · Foto-Hörgeschichte'],
  sq:'Historia: Alles im grünen Bereich', de:'S. 130–131: Alles im grünen Bereich',
  desc:'Fjalët e fotove, majtas / drejt / djathtas dhe pyetjet për historinë.',
  tip:'Alles im grünen Bereich = gjithçka në rregull. Te ushtrimi 3 jo gjithçka përshtatet!',
  read:'Walter hat eine Erkältung. Lara und Lili sollen sein Auto zur Werkstatt bringen und in der Apotheke Medikamente kaufen. Die Werkstatt macht um zwölf Uhr zu.<br><br>Lili hat den Autoschlüssel und das Navi. In der Stadt darf man nur 50 fahren. Aber Lara möchte einmal richtig schnell fahren. An der Ampel fährt sie nach links. Vor der Brücke geht es zur Autobahn. Lara und Lili fahren auf die Autobahn.<br><br>Lara und Lili kommen sehr spät zur Werkstatt. Lili telefoniert mit Opa Walter und sagt: „Alles im grünen Bereich!“ Das bedeutet: Alles ist okay. 😄',
  lesson:[
    {t:'Faqe 130–131 📖', d:'Folge 11: Alles im grünen Bereich', p:'<b>1</b> Fjalët e fotove. <b>2</b> Majtas, drejt apo djathtas? <b>3</b> Plotëso me fjalët e kutisë. <b>4</b> Kryqëzo.',
     tip:'Te ushtrimi 3: <b>„Achtung: Nicht alles passt.“</b> <i class="tr">(Kujdes: jo gjithçka përshtatet.)</i>'},
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Ushtrimin <b>2</b> e ke krejt saktë: <b>C</b> nach rechts, <b>A</b> geradeaus, <b>B</b> nach links ✓. Te <b>3</b> i ke gjetur: Medikamente kaufen, eine Erkältung, zwölf ✓. Te <b>4</b>: Alles ist okay ✓. 👏',
     tip:'Kujdes nga kurthi te 3: fjalët <b>zwei</b> dhe <b>kein Problem</b> mbeten në kuti, nuk shkruhen askund.'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', psq:'1 Fjalët e fotove', pde:'1 Was sehen Sie auf den Fotos?', pairs:[['die Werkstatt','servisi i makinave'],['der Autoschlüssel','çelësi i makinës'],['die Apotheke','barnatorja'],['das Navi','navigatori'],['die Ampel','semafori']]},
    {type:'match', psq:'1 Fjalët e fotove', pde:'1 Was sehen Sie auf den Fotos?', pairs:[['die S-Bahn','treni i qytetit'],['die Autobahn','autostrada'],['die Tankstelle','pika e karburantit'],['das Eis','akullorja'],['die Brücke','ura']]},
    {type:'mc', psq:'2 Çfarë përshtatet?', pde:'2 Was passt? Ordnen Sie zu', q:'A ⬆️', o:['Fahren Sie nach rechts.','Fahren Sie geradeaus.','Fahren Sie nach links.'], a:'Fahren Sie geradeaus.', say:'Fahren Sie geradeaus.', e:'⬆️ = geradeaus (drejt).'},
    {type:'mc', psq:'2 Çfarë përshtatet?', pde:'2 Was passt? Ordnen Sie zu', q:'B ⬅️', o:['Fahren Sie nach rechts.','Fahren Sie geradeaus.','Fahren Sie nach links.'], a:'Fahren Sie nach links.', say:'Fahren Sie nach links.', e:'⬅️ = nach links (majtas).'},
    {type:'mc', psq:'2 Çfarë përshtatet?', pde:'2 Was passt? Ordnen Sie zu', q:'C ➡️', o:['Fahren Sie nach rechts.','Fahren Sie geradeaus.','Fahren Sie nach links.'], a:'Fahren Sie nach rechts.', say:'Fahren Sie nach rechts.', e:'➡️ = nach rechts (djathtas).'},
    {type:'cloze', read:true, topic:'lesen', psq:'3 Rendit', pde:'3 Ordnen Sie zu. Achtung: Nicht alles passt.', bank:['zwei','zwölf','Medikamente kaufen','eine Erkältung','kein Problem'],
     text:'a  Was sollen Lara und Lili für Walter tun? Sie sollen sein Auto zur Werkstatt bringen ✓ und [[Medikamente kaufen]].\nb  Warum macht Walter das nicht selbst? Er hat [[eine Erkältung]].\nc  Wann macht die Werkstatt zu? Um [[zwölf;zwölf Uhr;12]].',
     e:'Medikamente kaufen · eine Erkältung · zwölf. „zwei“ dhe „kein Problem“ mbeten.'},
    {type:'mc', read:true, topic:'lesen', psq:'4a Kryqëzo', pde:'4a Warum kommen Lara und Lili so spät an?', q:'Warum kommen Lara und Lili so spät an?',
     o:['Sie finden die Werkstatt nicht. Das Navi zeigt den falschen Weg.','Sie fahren auf die Autobahn. Lara möchte einmal richtig schnell fahren.'], a:'Sie fahren auf die Autobahn. Lara möchte einmal richtig schnell fahren.', e:'„Lara möchte einmal richtig schnell fahren.“'},
    {type:'mc', read:true, row:true, topic:'lesen', psq:'4b Kryqëzo', pde:'4b Was bedeutet „Alles im grünen Bereich“?', q:'Was bedeutet „Alles im grünen Bereich“?', o:['Alles ist okay.','Nichts funktioniert.'], a:'Alles ist okay.', e:'Alles im grünen Bereich = gjithçka në rregull.'}
  ]
},

/* ---------- KB S. 132: A Fahren Sie dann nach links ---------- */
{
  id:'hw16-s132', emoji:'🧭', color:'#2E86DE', seq:true, book:['faqe 132 · A3–A4','S. 132 · A3–A4'],
  sq:'Rruga: Fahren Sie dann nach links', de:'S. 132: Wegbeschreibung',
  desc:'Pyet për rrugën dhe tregoje: geradeaus, die zweite Straße rechts, an der Ampel links.',
  tip:'⬆️ geradeaus · ⬅️ links · ➡️ rechts · 1. erste · 2. zweite · 3. dritte Straße · 🚦 an der Ampel.',
  lesson:[
    {t:'Faqe 132 📖', d:'A · Fahren Sie dann nach links', p:'<b>A3</b> Pyet dhe përgjigju: ku është …? <b>A4</b> Shpjego një rrugë.', say:1, th:['','Deutsch','Shqip'],
     table:[['⬆️','geradeaus','drejt'],['⬅️','links','majtas'],['➡️','rechts','djathtas'],['2.','die zweite Straße','rruga e dytë'],['🚦','an der Ampel','te semafori']],
     tip:'Shigjetat te ushtrimet tregojnë rrugën, si harta në libër.'},
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Të gjitha fjalitë e <b>A3</b> i ke përkthyer vetë në libër: „po kërkoj“, „afër“, „drejt“, „djathtas“, „majtas“, „i huaj“. 👏'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', psq:'A3 Pyet dhe përgjigju', pde:'A3 Fragen Sie und antworten Sie', pairs:[['Entschuldigung, ich suche den Bahnhof.','Më falni, po kërkoj stacionin e trenit.'],['Ist hier ein Hotel in der Nähe?','A ka këtu afër një hotel?'],
      ['Gehen Sie immer geradeaus.','Ecni gjithmonë drejt.'],['Ich bin nicht von hier.','Nuk jam prej këtu.']]},
    {type:'cloze', psq:'A3 Trego rrugën', pde:'A3 Wo ist hier die Post?', bank:['geradeaus','zweite','rechts','Ampel','links','Metern'],
     text:'Wo ist hier die Post?\n⬆️  Gehen Sie immer [[geradeaus]].\n⬆️ 2. ➡️  Sie gehen zuerst geradeaus und dann die [[zweite]] Straße [[rechts]].\n🚦 ⬅️  Gehen Sie an der [[Ampel]] [[links]].\n⬆️ 300 m ⬅️  Gehen Sie geradeaus und nach 300 [[Metern;Meter]] links.',
     e:'geradeaus · die zweite Straße rechts · an der Ampel links · nach 300 Metern.'},
    {type:'gap', row:true, psq:'A3 Cila rrugë?', pde:'A3 Welche Straße?', s:'Gehen Sie die ___ Straße links.', h:'1.', o:['erste','zweite','dritte'], a:'erste', e:'1. = die erste Straße.'},
    {type:'gap', row:true, psq:'A3 Cila rrugë?', pde:'A3 Welche Straße?', s:'Gehen Sie die ___ Straße rechts.', h:'3.', o:['erste','zweite','dritte'], a:'dritte', e:'3. = die dritte Straße.'},
    {type:'mc', topic:'dialog', psq:'A3 Çfarë përgjigjesh?', pde:'A3 Was antworten Sie?', q:'Entschuldigung, wo ist hier ein Hotel?', speakQ:true, h:'Ti nuk je prej këtu. 🤷‍♀️',
     o:['Tut mir leid, ich bin auch fremd hier.','Gehen Sie immer geradeaus.','Die zweite Straße rechts.','Ja, richtig.'], a:'Tut mir leid, ich bin auch fremd hier.', say:'Tut mir leid, ich bin auch fremd hier.', e:'fremd hier = e huaj këtu.'},
    {type:'order', topic:'satz', psq:'A3 Trego rrugën', pde:'A3 Erklären Sie den Weg', cue:'zuerst ⬆️ – dann 2. ➡️', parts:['Sie gehen','zuerst','geradeaus','und dann','die zweite Straße','rechts.'], de:'Sie gehen zuerst geradeaus und dann die zweite Straße rechts.', sq:'Së pari ecni drejt dhe pastaj rruga e dytë djathtas.'},
    {type:'order', topic:'satz', psq:'A3 Trego rrugën', pde:'A3 Erklären Sie den Weg', cue:'⬆️ – 300 m – ⬅️', parts:['Gehen Sie','geradeaus','und','nach 300 Metern','links.'], de:'Gehen Sie geradeaus und nach 300 Metern links.', sq:'Ecni drejt dhe pas 300 metrash majtas.'},
    {type:'cloze', psq:'A4 Shpjego rrugën', pde:'A4 Erklären Sie einen Weg', h:'➡️ · ⬆️ · 2. ⬅️ · 100 m', bank:['geradeaus','links','rechts','zweite','100 Metern'],
     text:'Du gehst [[rechts]], dann [[geradeaus]], dann die [[zweite]] Straße [[links]]. Dann bist du nach [[100 Metern;100 Meter;100 m]] da.\n– Das ist die Post!\n– Ja, richtig.',
     e:'rechts, geradeaus, die zweite Straße links, nach 100 Metern.'}
  ]
},

/* ---------- KB S. 133: B Wir fahren mit dem Auto ---------- */
{
  id:'hw16-s133', emoji:'🚋', color:'#EE7A0C', seq:true, book:['faqe 133 · B1–B3','S. 133 · B1–B3'],
  sq:'Wir fahren mit dem Auto', de:'S. 133: mit dem · zum · zur',
  desc:'Me çfarë shkojnë? Ku duan të shkojnë? Dhe biseda te stacioni qendror.',
  tip:'mit dem (der, das) · mit der (die) · zu Fuß. Wohin? zum (der, das) · zur (die).',
  lesson:[
    {t:'Faqe 133 📖', d:'B · Wir fahren mit dem Auto', p:'<b>B1</b> Me çfarë? Për ku? <b>B2</b> Biseda te stacioni. <b>B3</b> Rrugët e tua.', say:2, th:['','','Shembull'],
     tr:[['','','me autobus'],['','','me metro'],['','','te fusha e futbollit'],['','','te servisi']],
     table:[['Wie?','mit <b>dem</b>','mit dem Bus'],['Wie?','mit <b>der</b>','mit der U-Bahn'],['Wohin?','<b>zum</b>','zum Fußballplatz'],['Wohin?','<b>zur</b>','zur Werkstatt']],
     tip:'⚠ <b>zu Fuß</b> <i class="tr">(në këmbë)</i> · zu + dem = <b>zum</b> · zu + der = <b>zur</b>'},
    {t:'Kujdes! 👀', d:'Aus deinem Buch', p:'Te <b>B1b</b> i ke plotësuar të pesë fjalitë. Kujdes vetëm te shkrimi:',
     fix:[['Karolen platz','Karolinenplatz','Një fjalë e vetme: Karolinen + platz.'],['zum fussballplatz','zum Fußballplatz','Emrat shkruhen me shkronjë të madhe.'],['Die Frau sucht die schule.','Die Frau sucht die Schule.','Schule është emër → shkronjë e madhe.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'sort', topic:'lokal', psq:'B1a Me çfarë?', pde:'B1a Womit fahren / fliegen die Personen?', cats:['mit dem','mit der'],
     items:[['das Flugzeug','mit dem'],['der Zug','mit dem'],['das Auto','mit dem'],['das Taxi','mit dem'],['der Bus','mit dem'],['das Fahrrad','mit dem'],['die Straßenbahn','mit der'],['die U-Bahn','mit der'],['die S-Bahn','mit der']],
     e:'der, das → mit dem. die → mit der.'},
    {type:'cloze', topic:'lokal', psq:'B1 Wie?', pde:'B1 Wie? (modale Präposition)',
     text:'der Bus → mit [[dem]] Bus\ndas Auto → mit [[dem]] Auto\ndie U-Bahn → mit [[der]] U-Bahn\n⚠ në këmbë → [[zu]] Fuß',
     e:'mit dem Bus, mit dem Auto, mit der U-Bahn, zu Fuß.'},
    {type:'cloze', psq:'B1b Ku duan të shkojnë?', pde:'B1b Wohin möchten die Personen?', h:'2 🏙️ Platz · 3 🎬 · 4 ⚽ · 5 🏫', bank:['Filmmuseum','Fußballplatz','Schule','Karolinenplatz'],
     text:'1  Lara und Lili sollen zur Werkstatt fahren. ✓\n2  Die Frau möchte zum [[Karolinenplatz]].\n3  Das Paar will zum [[Filmmuseum]], aber zu Fuß ist das zu weit.\n4  Der junge Mann muss zum [[Fußballplatz]].\n5  Die Frau sucht die [[Schule]].',
     e:'Karolinenplatz · Filmmuseum · Fußballplatz · Schule (emrat me shkronjë të madhe).'},
    {type:'cloze', topic:'lokal', psq:'B1 Wohin?', pde:'B1 Wohin? (lokale Präposition)',
     text:'der Fußballplatz → [[zum]] Fußballplatz\ndas Museum → [[zum]] Museum\ndie Werkstatt → [[zur]] Werkstatt\nzu + dem = [[zum]] · zu + der = [[zur]]',
     e:'der, das → zum. die → zur.'},
    {type:'cloze', topic:'lokal', psq:'B2 Te stacioni qendror', pde:'B2 Sie sind am Hauptbahnhof', h:'das Schwimmbad · der Bus 31 · die Station', bank:['zum','zu','zur','mit dem','weit'],
     text:'Entschuldigung. Wie komme ich [[zum]] Schwimmbad? Kann ich [[zu]] Fuß gehen?\n– Zu Fuß? Nein, das ist viel zu [[weit]]. Fahren Sie [[mit dem]] Bus 31 bis [[zur]] Station „Schwimmbad“.',
     e:'zum Schwimmbad · zu Fuß · zu weit · mit dem Bus · zur Station.'},
    {type:'gap', row:true, topic:'lokal', psq:'B2 Pyet për rrugën', pde:'B2 Fragen Sie', s:'Wie komme ich ___ Krankenhaus?', h:'das Krankenhaus', o:['zum','zur'], a:'zum', e:'das → zum.'},
    {type:'gap', row:true, topic:'lokal', psq:'B2 Pyet për rrugën', pde:'B2 Fragen Sie', s:'Wie komme ich ___ Stadtbücherei?', h:'die Stadtbücherei', o:['zum','zur'], a:'zur', e:'die → zur.'},
    {type:'gap', row:true, topic:'lokal', psq:'B2 Përgjigju', pde:'B2 Antworten Sie', s:'Fahren Sie mit ___ Straßenbahn 1.', h:'die Straßenbahn', o:['dem','der'], a:'der', e:'die → mit der.'},
    {type:'gap', row:true, topic:'lokal', psq:'B2 Përgjigju', pde:'B2 Antworten Sie', s:'Fahren Sie mit ___ S-Bahn S1.', h:'die S-Bahn', o:['dem','der'], a:'der', e:'die → mit der.'},
    {type:'order', topic:'satz', psq:'B3 Rrugët e mia', pde:'B3 Meine Wege und Verkehrsmittel', cue:'Auto → Uni', parts:['Ich fahre','mit dem Auto','zur Uni.'], de:'Ich fahre mit dem Auto zur Uni.', sq:'Shkoj me makinë në universitet.'},
    {type:'order', topic:'satz', psq:'B3 Rrugët e mia', pde:'B3 Meine Wege und Verkehrsmittel', cue:'Fitnessstudio ← Bus', parts:['Zum Fitnessstudio','fahre','ich','mit dem Bus.'], de:'Zum Fitnessstudio fahre ich mit dem Bus.', sq:'Në palestër shkoj me autobus.'}
  ]
},

/* ---------- KB S. 134: C Da! Vor der Brücke links ---------- */
{
  id:'hw16-s134', emoji:'📍', color:'#7650F0', seq:true, book:['faqe 134 · C1–C3','S. 134 · C1–C3'],
  sq:'Da! Vor der Brücke links', de:'S. 134: Wo? + Dativ',
  desc:'Ku? Në qytet, te semafori, para urës. Parafjalët e vendit me dem, der, den.',
  tip:'Wo? → dem (der, das) · der (die) · den …n (shumës). an + dem = am, in + dem = im.',
  read:'Lara und Lili fahren mit dem Auto. In der Stadt darf man nur 50 fahren. An der Ampel soll Lara nach links fahren. Vor der Brücke links geht es zur Autobahn. Auf der Autobahn soll Lara bleiben.',
  lesson:[
    {t:'Faqe 134 📖', d:'C · Da! Vor der Brücke links', p:'<b>C1</b> Lidhi pyetjet me përgjigjet. <b>C2</b> Në qytet: dem, der apo den? <b>C3</b> Ku është …?', say:0, th:['Deutsch','Shqip'],
     table:[['an','te, buzë'],['auf','mbi, në'],['hinter','pas, prapa'],['in','në, brenda'],['neben','pranë'],['über','sipër'],['unter','nën, poshtë'],['vor','para'],['zwischen','midis']],
     tip:'Te <b>C2b</b> në libër vendos figura. Këtu ushtron nyjën: auf <b>dem</b> Parkplatz, an <b>der</b> Bushaltestelle.'},
    {t:'Bravo, Mimoza! 🌟', d:'Gut gemacht!', p:'Tabelën <b>C2c</b> e ke krejt saktë: <b>dem</b> Parkplatz, <b>dem</b> Café, <b>der</b> Bäckerei, <b>den</b> Häusern ✓. Dhe parafjalët i ke përkthyer vetë: hinter = pas, unter = poshtë, vor = para, zwischen = mes. 👏'}
  ],
  nouns:[], words:[],
  items:[
    {type:'match', read:true, topic:'lesen', psq:'C1 Lidhi', pde:'C1 Hören Sie und verbinden Sie', pairs:[['Wo darf man nur 50 fahren?','In der Stadt.'],['Wo geht es zur Autobahn?','Vor der Brücke links.'],['Wo soll Lara bleiben?','Auf der Autobahn.'],['Wo soll Lara nach links fahren?','An der Ampel.']]},
    {type:'gap', row:true, topic:'lokal', psq:'C2b Në qytet', pde:'C2b In der Stadt', s:'1  Zwei Lkws stehen auf ___ Parkplatz.', h:'der Parkplatz', o:['dem','der','den'], a:'dem', e:'der → dem.'},
    {type:'gap', row:true, topic:'lokal', psq:'C2b Në qytet', pde:'C2b In der Stadt', s:'2  Die Kinder warten an ___ Bushaltestelle.', h:'die Bushaltestelle', o:['dem','der','den'], a:'der', e:'die → der.'},
    {type:'gap', row:true, topic:'lokal', psq:'C2b Në qytet', pde:'C2b In der Stadt', s:'3  Ein Mann kauft ___ Kiosk eine Zeitung.', h:'an + dem Kiosk', o:['am','im','an'], a:'am', e:'an + dem = am.'},
    {type:'gap', row:true, topic:'lokal', psq:'C2b Në qytet', pde:'C2b In der Stadt', s:'4  Ein Paar sitzt hinter ___ Café.', h:'das Café', o:['dem','der','den'], a:'dem', e:'das → dem.'},
    {type:'gap', row:true, topic:'lokal', psq:'C2b Në qytet', pde:'C2b In der Stadt', s:'5  Die Bücherei ist über ___ Bäckerei.', h:'die Bäckerei', o:['dem','der','den'], a:'der', e:'die → der.'},
    {type:'gap', row:true, topic:'lokal', psq:'C2b Në qytet', pde:'C2b In der Stadt', s:'6  Ein Baum steht hinter ___ Häusern.', h:'shumës: die Häuser', o:['dem','der','den'], a:'den', e:'Shumës → den Häusern.'},
    {type:'cloze', topic:'lokal', psq:'C2c Plotëso tabelën', pde:'C2c Ergänzen Sie die Tabelle',
     text:'Wo? hinter / vor / neben …\nder Parkplatz → [[dem]] Parkplatz\ndas Café → [[dem]] Café\ndie Bäckerei → [[der]] Bäckerei\ndie Häuser → [[den]] Häusern\nan + dem = [[am]] · in + dem = [[im]]',
     e:'dem, dem, der, den · am, im.'},
    {type:'match', psq:'C2 Parafjalët', pde:'C2 Lokale Präpositionen', pairs:[['vor','para'],['hinter','pas, prapa'],['neben','pranë'],['zwischen','midis'],['unter','nën, poshtë']]},
    {type:'match', psq:'C2 Parafjalët', pde:'C2 Lokale Präpositionen', pairs:[['an','te, buzë'],['auf','mbi, në'],['in','në, brenda'],['über','sipër']]},
    {type:'gap', row:true, topic:'lokal', psq:'C3 Ku është?', pde:'C3 Fragen Sie und antworten Sie', s:'Wo ist der Parkplatz? – Neben ___ Fußgängerzone.', h:'die Fußgängerzone', o:['dem','der','den'], a:'der', e:'die → neben der Fußgängerzone.'},
    {type:'gap', row:true, topic:'lokal', psq:'C3 Ku është?', pde:'C3 Fragen Sie und antworten Sie', s:'Wo ist die Bank? – Zwischen ___ Post und dem Café.', h:'die Post', o:['dem','der','den'], a:'der', e:'die → zwischen der Post.'}
  ]
},

/* ---------- KB S. 138: Grammatik ---------- */
{
  id:'hw16-s138', emoji:'🧩', color:'#0E9F8E', seq:true, book:['faqe 138 · gramatika','S. 138 · Grammatik'],
  sq:'Gramatika: mit, Wo?, Wohin?', de:'S. 138: Grammatik und Kommunikation',
  desc:'Përmbledhja e mësimit 11: mit + Dativ, Wo? (ku) dhe Wohin? (për ku).',
  tip:'Wo? beim Arzt, in der Apotheke, in Wien, zu Hause. Wohin? zum Arzt, zur Apotheke, nach Wien, nach Hause.',
  lesson:[
    {t:'Faqe 138 🧩', d:'Grammatik', p:'Tri gjëra të reja të mësimit 11:', say:2, th:['','Pyetja','Shembull'],
     tr:[['','Si? Me çfarë?','me tren, me metro'],['','Ku?','te mjeku, në barnatore'],['','Për ku?','te mjeku, në barnatore']],
     table:[['1','Wie? Womit?','mit dem Zug, mit der U-Bahn'],['2','Wo? 📍','beim Arzt, in der Apotheke'],['3','Wohin? ➡️','zum Arzt, zur Apotheke']],
     tip:'⚠ Wo? <b>zu Hause</b> · Wohin? <b>nach Hause</b>. Shtetet me nyjë: <b>in der</b> Schweiz (Wo?) · <b>in die</b> Schweiz (Wohin?).'}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'lokal', psq:'1 mit + Dativ', pde:'1 Modale Präposition: mit + Dativ',
     text:'der Zug → mit [[dem]] Zug\ndas Auto → mit [[dem]] Auto\ndie U-Bahn → mit [[der]] U-Bahn\ndie Kinder → mit [[den]] Kindern',
     e:'dem, dem, der, den (shumës + n).'},
    {type:'cloze', topic:'lokal', psq:'2 Wo? + Dativ', pde:'2 Lokale Präpositionen: Wo?',
     text:'der Kiosk → neben [[dem]] Kiosk\ndas Hotel → neben [[dem]] Hotel\ndie Post → neben [[der]] Post\ndie Häuser → neben [[den]] Häusern',
     e:'dem, dem, der, den.'},
    {type:'cloze', topic:'lokal', psq:'2 Wo ist Sofia? 📍', pde:'2 Wo ist Sofia?', bank:['beim','bei der','bei','im','in der','in','zu'],
     text:'Person: der Arzt → [[beim]] Arzt · die Freundin → [[bei der]] Freundin · Walter → [[bei]] Walter\nOrt: der Kindergarten → [[im]] Kindergarten · die Apotheke → [[in der]] Apotheke\nLand / Stadt: Wien → [[in]] Wien · die Schweiz → [[in der]] Schweiz\n⚠ [[zu]] Hause',
     e:'beim, bei der, bei · im, in der · in, in der · zu Hause.'},
    {type:'cloze', topic:'lokal', psq:'3 Wohin ist Paulo gefahren? ➡️', pde:'3 Wohin ist Paulo gefahren?', bank:['zum','zur','zu','in den','ins','nach','in die'],
     text:'Person: der Zahnarzt → [[zum]] Zahnarzt · die Freundin → [[zur]] Freundin · Walter → [[zu]] Walter\nGeschäft: der Supermarkt → [[zum]] Supermarkt · die Apotheke → [[zur]] Apotheke\nOrt: der Kindergarten → [[in den]] Kindergarten · das Kino → [[ins]] Kino\nLand / Stadt: Basel → [[nach]] Basel · die Schweiz → [[in die]] Schweiz\n⚠ [[nach]] Hause',
     e:'zum, zur, zu · zum, zur · in den, ins · nach, in die · nach Hause.'},
    {type:'sort', topic:'lokal', psq:'Ku apo për ku?', pde:'Wo? oder Wohin?', cats:['Wo? 📍','Wohin? ➡️'],
     items:[['bei Walter','Wo? 📍'],['im Bett','Wo? 📍'],['in Österreich','Wo? 📍'],['im Kindergarten','Wo? 📍'],['zu Hause','Wo? 📍'],
       ['zu Walter','Wohin? ➡️'],['zum Supermarkt','Wohin? ➡️'],['nach Österreich','Wohin? ➡️'],['in den Kindergarten','Wohin? ➡️'],['nach Hause','Wohin? ➡️']],
     e:'Wo? bei, im, in, zu Hause. Wohin? zu, zum, nach, in den, nach Hause.'},
    {type:'cloze', topic:'lokal', psq:'Shkruaj fjali', pde:'Schreiben Sie Sätze: Meine Verkehrsmittel', h:'der Bus · die Straßenbahn · das Fahrrad',
     text:'Ich fahre oft mit [[dem]] Bus.\nIch fahre manchmal mit [[der]] Straßenbahn.\nIch fahre nie mit [[dem]] Fahrrad.',
     e:'mit dem Bus, mit der Straßenbahn, mit dem Fahrrad.'},
    {type:'order', topic:'satz', psq:'Orientimi', pde:'Orientierung: Wo ist hier die Post?', de:'Entschuldigung, ich suche das Museum.', sq:'Më falni, po kërkoj muzeun.'},
    {type:'order', topic:'satz', psq:'Orientimi', pde:'Orientierung: Wo ist hier die Post?', cue:'🚦 ⬅️', parts:['Gehen Sie','an der Ampel','links.'], de:'Gehen Sie an der Ampel links.', sq:'Te semafori kthehuni majtas.'}
  ]
}
  ]
}

];
