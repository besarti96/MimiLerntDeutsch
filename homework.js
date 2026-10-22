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
  id:'hw7-koennen', emoji:'🤹', color:'#7650F0', book:['faqe 75 · ushtrimi 1 + 2','S. 75 · Üb. 1 + 2'],
  sq:'Biseda me können', de:'Gespräche mit können',
  desc:'Rendit fjalitë te bisedat (a–e) dhe mëso foljen können.',
  tip:'können në vendin 2, folja tjetër në fund. Pyetje: Kannst du …? Könnt ihr …? Können Sie …?',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 75, <b>ushtrimi 1</b>: Rendit fjalitë te bisedat a–e.<br><b>Ushtrimi 2</b>: Plotëso tabelën e foljes <b>können</b>.'},
    {t:'können', d:'Das Verb können', say:'join', th:['','können'],
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
  id:'hw7-hobbys', emoji:'🎨', color:'#0E9F8E', book:['faqe 76 · ushtrimi 5–7','S. 76 · Üb. 5–7'],
  sq:'Kush di çfarë?', de:'Freizeit: Wer kann was?',
  desc:'reiten, singen, malen, surfen – dhe sa mirë i di njerëzit.',
  tip:'Foljet shkruhen me shkronjë të vogël. können në vendin 2: Muriel kann sehr gut reiten.',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 76: <b>5</b> Çfarë bëjnë njerëzit? Sa mirë? <b>6</b> Shkruaj fjali me <b>können</b>. <b>7</b> Shkruaj biseda me <b>können</b>.'},
    {t:'Çfarë bëjnë?', d:'Was machen die Personen?', ex:[['Muriel reitet.','Muriel kalëron.'],['Karie und Jeany singen.','Karie dhe Jeany këndojnë.'],['Alba malt.','Alba pikturon.'],['Jason surft.','Jason bën surf.']],
     tip:'Foljet shkruhen me shkronjë të <b>vogël</b>: reiten, singen, malen, surfen. Vetëm emrat me të madhe!'},
    {t:'Sa mirë?', d:'Wie gut?', say:1, th:['','Deutsch','Shqip'],
     table:[['😊😊','sehr gut','shumë mirë'],['😊','gut','mirë'],['😐','nicht so gut','jo aq mirë'],['☹️','nicht gut','jo mirë'],['☹️☹️','gar nicht gut','aspak mirë']],
     tip:'Muriel <b>kann</b> sehr gut <b>reiten</b>. → können në vendin 2, folja në fund.'},
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
       'Lexo fjalët te 7b: „ich – kochen – leider gar nicht gut“ dhe „Sie – Kuchen backen – sehr gut“.']]}
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
    {type:'order', de:'Muriel kann sehr gut reiten.', sq:'Muriel kalëron shumë mirë.'},
    {type:'order', de:'Ludmilla kann nicht so gut reiten.', sq:'Ludmilla nuk kalëron aq mirë.'},
    {type:'order', de:'Kannst du auch Gitarre spielen?', sq:'A di edhe ti të luash kitarë?'},
    {type:'order', de:'Ich kann leider gar nicht gut kochen.', sq:'Fatkeqësisht nuk di aspak të gatuaj.'}
  ]
},

/* ---------- Üb. 9–11: wollen ---------- */
{
  id:'hw7-wollen', emoji:'🌴', color:'#EE7A0C', book:['faqe 77 · ushtrimi 9–11','S. 77 · Üb. 9–11'],
  sq:'wollen: dua të …', de:'Das Verb wollen',
  desc:'Çfarë duan të bëjnë Jakobi dhe Alina në pushime?',
  tip:'ich will, du willst, er will, wir wollen, ihr wollt, sie wollen. Folja tjetër në fund!',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 77: <b>9</b> Plotëso tabelën e foljes <b>wollen</b>. <b>10</b> Shkruaj fjali me wollen. <b>11</b> Plotëso wollen në formën e saktë.'},
    {t:'wollen = dua (të bëj)', d:'Das Verb wollen', say:'join', th:['','wollen'],
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
      ['ein bischen','ein bisschen','bisschen shkruhet me ss.']]}
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
    {type:'order', de:'In den Ferien will Jakob keinen Kurs machen.', sq:'Në pushime Jakobi nuk do të bëjë asnjë kurs.'},
    {type:'order', de:'Sie wollen ein bisschen Englisch lernen.', sq:'Ju doni të mësoni pak anglisht.'},
    {type:'order', de:'Jakob und Alina wollen im Urlaub viel Freizeit haben.', sq:'Jakobi dhe Alina duan shumë kohë të lirë në pushime.'},
    {type:'order', de:'Wir wollen im August nach Marokko fahren.', sq:'Në gusht duam të shkojmë në Marok.'},
    {type:'order', de:'Ich will aber noch nicht ins Bett.', sq:'Por unë nuk dua të fle ende.'}
  ]
},

/* ---------- Üb. 13: möchte oder will? ---------- */
{
  id:'hw7-moechte', emoji:'😤', color:'#D6409F', book:['faqe 78 · ushtrimi 13','S. 78 · Üb. 13'],
  sq:'möchte apo will?', de:'möchten oder wollen?',
  desc:'Vajza e vogël fillon e sjellshme … pastaj nervozohet! 😤',
  tip:'möchte = e butë, e sjellshme 🙂. will = e fortë 😤.',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 78, <b>ushtrimi 13</b>: Rendit fjalitë. Vajza e vogël fillon e sjellshme… pastaj nervozohet! 😤'},
    {t:'möchte 🙂 apo will 😤', d:'möchten oder wollen?', say:0, th:['Deutsch','Shqip',''],
     table:[['Ich möchte fernsehen.','Do të doja të shikoja TV.','🙂 e butë'],['Ich will fernsehen!','Dua të shikoj TV!','😤 e fortë']],
     tip:'Te kamarieri, te mjeku, me njerëz që nuk i njeh → gjithmonë <b>möchte</b>. 😉'},
    {t:'möchten', d:'Das Verb möchten', say:'join', th:['','möchten'],
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
  id:'hw7-perfekt', emoji:'🕰️', color:'#2E86DE', book:['faqe 79 · ushtrimi 15 + 16','S. 79 · Üb. 15 + 16'],
  sq:'E kaluara: hat … gemacht', de:'Perfekt mit haben',
  desc:'Gjë e re: si tregon çfarë ke bërë dje! Das hat Spaß gemacht. 🎉',
  tip:'haben në vendin 2, Partizip në fund: Ich habe Deutsch geübt. Shumica: ge…t. Rebelët: ge…en.',
  lesson:[
    {t:'Detyra jote 📖', d:'Deine Hausaufgabe', p:'Faqe 79, <b>ushtrimi 15</b>: Plotëso me <b>haben</b> dhe foljen. <b>16</b>: Lidh foljen me formën e kaluar.<br>Kjo është gjë e re: <b>e kaluara</b>! 🕰️'},
    {t:'Das hat Spaß gemacht!', d:'Perfekt = e kaluara', p:'Për të treguar çfarë <b>ke bërë</b>, përdor <b>haben</b> + një formë të veçantë të foljes (<b>Partizip</b>) në fund.',
     ex:[['Ich habe Deutsch geübt.','Kam ushtruar gjermanisht.'],['Das hat Spaß gemacht.','Ishte shumë argëtuese.'],['Wir haben Pizza gegessen.','Kemi ngrënë pica.']],
     tip:'Si te können: <b>habe</b> në vendin 2, <b>geübt</b> në fund. 🔚'},
    {t:'haben', d:'Das Verb haben', say:'join', th:['','haben'],
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
      ['Hast du dein Buch gelesen?','Hast du dein Buch gefunden?','Çdo fjalë përdoret vetëm një herë. „gelesen“ shkon te teksti.']]}
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
    {type:'order', de:'Das hat richtig Spaß gemacht.', sq:'Kjo ishte vërtet argëtuese.'}
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
     table:[['der','der Apfel','Ich möchte <b>einen</b> Apfel.'],['der','der Kaffee','Ich hätte gern <b>einen</b> Kaffee.'],['die','die Orange','Ich nehme <b>eine</b> Orange.'],['das','das Brot','Ich nehme <b>ein</b> Brot.'],['das','das Wasser','Zu trinken <b>ein</b> Wasser, bitte.']],
     ex:[['Ich nehme ein Brot und zu trinken ein Wasser.','Marr një bukë dhe për të pirë një ujë.']],
     tip:'das Brot → <b>ein</b> Brot (jo „eine Brot“!).'},
    {t:'mögen = më pëlqen', d:'Das Verb mögen', say:'join', th:['','mögen'],
     table:[['ich','<b>mag</b>'],['du','magst'],['er / sie / es','<b>mag</b>'],['wir','mögen'],['ihr','mögt'],['sie / Sie','mögen']],
     ex:[['Ich mag Kaffee.','Më pëlqen kafeja.'],['Magst du Orangen?','A të pëlqejnë portokallet?'],['Ich liebe dich!','Të dua! ❤️']],
     tip:'Si te können: <b>ich mag</b> dhe <b>er mag</b> pa mbaresë!'},
    {t:'Folje të rëndësishme', d:'Wichtige Verben', th:['Folja','er / sie','Shqip'],
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
   📖 Si në libër: Buchseiten als Übungen in der Reihenfolge des Buchs.
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
  sq:'Përsëritje: mësimet 1–7', de:'Wiederholung Lektion 1–7 · Arbeitsbuch Test L1, S. 21–79',
  parts:[

/* ---------- Test Lektion 1 ---------- */
{
  id:'bk-test1', emoji:'🙋‍♀️', color:'#F2545B', seq:true, book:['Testi i mësimit 1','Test Lektion 1'],
  sq:'Testi: Mësimi 1', de:'Test Lektion 1',
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
  id:'bk-s21', emoji:'👨‍👩‍👧', color:'#D6409F', seq:true, book:['faqe 21 · ushtrimi 10–14','S. 21 · Üb. 10–14'],
  sq:'Faqe 21: mein, dein, Ihr', de:'Seite 21: Familie',
  desc:'kryqëzo, plotëso dhe shkruaj pyetje me mein, dein, Ihr dhe bin, ist, sind.',
  tip:'der/das → mein, dein, Ihr. die/shumës → meine, deine, Ihre. Një → ist, shumë → sind.',
  lesson:[
    {t:'Faqe 21 📖', d:'Seite 21', p:'<b>10</b> Kryqëzo të saktën. <b>11–13</b> Plotëso. <b>14</b> Shkruaj pyetjet e intervistës.',
     tip:'der Vorname → <b>mein</b> Vorname. Kinder → das <b>sind</b> meine Kinder.'}
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
  id:'bk-s23', emoji:'🔁', color:'#7650F0', seq:true, book:['faqe 23 · ushtrimi 18','S. 23 · Üb. 18'],
  sq:'Faqe 23: tabela e foljeve', de:'Seite 23: kommen, leben, heißen, sprechen, sein',
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
  id:'bk-s63a', emoji:'🌦️', color:'#2E86DE', seq:true, book:['faqe 63 · ushtrimi 1–2','S. 63 · Üb. 1–2'],
  sq:'Faqe 63: moti (1–2)', de:'Seite 63: Wie ist das Wetter?',
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
  id:'bk-s63b', emoji:'🧭', color:'#0E9F8E', seq:true, book:['faqe 63 · ushtrimi 3–5','S. 63 · Üb. 3–5'],
  sq:'Faqe 63: Austria, harta, im/am/um/in', de:'Seite 63: Österreich, Karte, im/am/um/in',
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
  id:'bk-s65', emoji:'🛒', color:'#EE7A0C', seq:true, book:['faqe 65 · ushtrimi 10–12','S. 65 · Üb. 10–12'],
  sq:'Faqe 65: në supermarket', de:'Seite 65: Einkaufen',
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

/* ---------- AB Lektion 7, S. 76 ---------- */
{
  id:'bk-s76', emoji:'🎨', color:'#0E9F8E', seq:true, book:['faqe 76 · ushtrimi 5–8','S. 76 · Üb. 5–8'],
  sq:'Faqe 76: können', de:'Seite 76: Freizeit, können, sch/s',
  desc:'çfarë bëjnë, fjali me können, biseda dhe sch apo s.',
  tip:'können në vendin 2, folja tjetër në fund. sp/st në fillim lexohen „shp/sht“, por shkruhen me s!',
  lesson:[
    {t:'Faqe 76 📖', d:'Seite 76', p:'<b>5</b> Çfarë bëjnë? <b>6–7</b> Fjali dhe biseda me können. <b>8</b> sch apo s?'},
    {t:'Bravo! 🌟', d:'Selbst korrigiert', p:'Në libër e ke korrigjuar vetë: <b>malt</b> ✓ (jo Mural). Super!',
     fix:[['Kannst du kochen? – … aber ich kann sehr gut kochen.','Ich kann leider gar nicht gut kochen. – Aber Sie können sehr gut Kuchen backen.','Te 7b ndiqi fjalët: „ich – kochen – leider gar nicht gut“.']]}
  ],
  nouns:[], words:[],
  items:[
    {type:'cloze', topic:'verben', psq:'5a Çfarë bëjnë?', pde:'5a Was machen die Personen?', h:'reiten · singen · malen · surfen',
     text:'1  Muriel [[reitet]].\n2  Karie und Jeany [[singen]].\n3  Alba [[malt]].\n4  Jason [[surft]].', e:'sie reitet, sie singen, sie malt, er surft.'},
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

/* ---------- AB Lektion 7, S. 77 ---------- */
{
  id:'bk-s77', emoji:'🌴', color:'#EE7A0C', seq:true, book:['faqe 77 · ushtrimi 9–11','S. 77 · Üb. 9–11'],
  sq:'Faqe 77: wollen', de:'Seite 77: wollen',
  desc:'tabela e wollen, fjali nga pjesët dhe flluskat e vizatimeve.',
  tip:'ich will, du willst, er will, wir wollen, ihr wollt, sie wollen. Folja tjetër në fund.',
  lesson:[
    {t:'Faqe 77 📖', d:'Seite 77', p:'<b>9</b> Tabela. <b>10</b> Bëj fjali nga pjesët. <b>11</b> Plotëso flluskat.',
     fix:[['ich wil','ich will','will me dy l.'],['du wellst','du willst','willst me i.']],
     tip:'Ushtrimin 11 e ke bërë mirë: Wollen Sie, Was wollt ihr, Wir wollen ✓'}
  ],
  nouns:[], words:[],
  items:[
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

/* ---------- AB Lektion 7, S. 79 ---------- */
{
  id:'bk-s79', emoji:'🕰️', color:'#2E86DE', seq:true, book:['faqe 79 · ushtrimi 15–17','S. 79 · Üb. 15–17'],
  sq:'Faqe 79: hat … gemacht', de:'Seite 79: Perfekt',
  desc:'tabela Partizip → folja, fjalitë me haben dhe dy tabelat ge…t / ge…en.',
  tip:'haben në vendin 2, Partizip në fund. Normale: ge…t (gemacht). Rebele: ge…en (gegessen).',
  lesson:[
    {t:'Faqe 79 📖', d:'Seite 79', p:'<b>15</b> Shkruaj foljen dhe plotëso fjalitë. <b>16–17</b> Rendit në dy tabela: ge…t dhe ge…en.'},
    {t:'Bravo! 🌟', d:'Selbst korrigiert', p:'Në libër i ke korrigjuar vetë: <b>geliebt</b> ✓ dhe <b>gefunden</b> ✓. Shumë mirë!',
     fix:[['gekauft → taufen','gekauft → kaufen','taufen = pagëzoj 😄'],['gefunden → funden','gefunden → finden','finden = gjej.']]}
  ],
  nouns:[], words:[],
  items:[
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
}

];
