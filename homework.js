/* =====================================================================
   Hausaufgaben aus Mimis Arbeitsbuch.
   Ein Set = ein Tag/eine Lektion, parts = Unterkapitel (gleiches Format
   wie CHAPTERS in data.js, plus book:[sq, de] = Seite/Übung im Buch).
   Extra-Folientyp:  fix:[[falsch, richtig, Erklärung]]  -> „Kujdes! 👀“
   Neue Hausaufgaben? Einfach ein neues Set unten anhängen (neuestes zuletzt).
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
}
];
