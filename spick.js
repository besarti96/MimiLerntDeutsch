/* =====================================================================
   Spickzettel (Fletë ndihme): das Wichtigste auf einen Blick.
   Ein Abschnitt = { id, chip, ...Folie } im gleichen Format wie die
   Lektionsfolien (t, d, p, table, th, say, ex, tip).
   chip = kurzer Name für die Sprungleiste oben.
   Der Abschnitt „Gabimet e tua“ (ihre Fehler) wird automatisch erzeugt.
   ===================================================================== */

const SPICK = [
{
  id:'sz-w', chip:'❓ W-Fragen', t:'❓ Fjalët pyetëse', d:'Die W-Fragen',
  th:['Deutsch','Shqip','Shembull'], say:2,
  tr:[['','','Kush je ti?'],['','','Çfarë bën?'],['','','Ku banon?'],['','','Nga vjen?'],['','','Ku po shkon?'],['','','Kur vjen?'],['','','Si quhesh?'],['','','Sa kushton kjo?'],['','','Sa është ora?'],['','','Pse mëson gjermanisht?']],
     table:[['<b>wer</b>','kush','Wer bist du?'],['<b>was</b>','çfarë','Was machst du?'],['<b>wo</b>','ku','Wo wohnst du?'],
    ['<b>woher</b>','nga','Woher kommst du?'],['<b>wohin</b>','për ku','Wohin gehst du?'],['<b>wann</b>','kur','Wann kommst du?'],
    ['<b>wie</b>','si','Wie heißt du?'],['<b>wie viel</b>','sa','Wie viel kostet das?'],['<b>wie spät</b>','sa është ora','Wie spät ist es?'],
    ['<b>warum</b>','pse','Warum lernst du Deutsch?']],
  tip:'Pas fjalës pyetëse vjen menjëherë <b>folja</b>: Wo <b>wohnst</b> du?'
},
{
  id:'sz-zeit', chip:'🕐 am · um · im', t:'🕐 am · um · im', d:'Wann? Zeit-Wörter',
  th:['','Kur?','Shembull'], say:2,
  tr:[['','','të hënën'],['','','në mëngjes, në mbrëmje'],['','','në orën tetë'],['','','në korrik'],['','','në verë'],['','','natën']],
     table:[['<b>am</b>','+ ditë','am Montag'],['<b>am</b>','+ pjesë e ditës','am Morgen, am Abend'],['<b>um</b>','+ orë','um acht Uhr'],
    ['<b>im</b>','+ muaj','im Juli'],['<b>im</b>','+ stinë','im Sommer'],['<b>in der</b>','natën','in der Nacht']],
  tip:'<b>um</b> = ora e saktë ⏰. <b>am</b> = dita 📅. <b>im</b> = muaji ose stina ☀️.'
},
{
  id:'sz-art', chip:'📌 der · ein · kein', t:'📌 Nyjat', d:'Artikel: der, ein, kein',
  th:['','der ♂','die ♀','das'], say:-1,
  table:[['e shquar','der','die','das'],['një','ein','eine','ein'],['një (Ich nehme …)','<b>einen</b>','eine','ein'],
    ['asnjë','kein','keine','kein'],['asnjë (Ich habe …)','<b>keinen</b>','keine','kein'],['përemri','er','sie','es']],
  ex:[['Ich nehme einen Kaffee.','Marr një kafe. (der Kaffee)'],['Ich nehme eine Orange.','Marr një portokall. (die Orange)'],['Ich nehme ein Brot.','Marr një bukë. (das Brot)']],
  tip:'Vetëm <b>der</b> ndryshon pas foljes (nehmen, haben, möchten): ein → <b>einen</b>, kein → <b>keinen</b>.'
},
{
  id:'sz-pron', chip:'👤 ich · du · er', t:'👤 Përemrat', d:'Die Pronomen',
  th:['Deutsch','Shqip'], say:0,
  table:[['ich','unë'],['du','ti'],['er','ai'],['sie','ajo'],['es','ai / ajo (për das)'],['wir','ne'],['ihr','ju (shokë)'],['sie','ata / ato'],['Sie','Ju (me respekt)'],
    ['mein / meine','im / ime'],['dein / deine','yt / jote']],
  tip:'<b>Sie</b> me shkronjë të madhe = Ju (te mjeku, në punë). <b>sie</b> e vogël = ajo ose ata.'
},
{
  id:'sz-verb', chip:'🔁 Foljet', t:'🔁 Foljet më të rëndësishme', d:'Die wichtigsten Verben',
  th:['','sein · jam','haben · kam','können · di'], say:-1,
  tr:[['unë','jam','kam','mund'],['ti','je','ke','mund'],['ai / ajo','është','ka','mund'],['ne','jemi','kemi','mundemi'],['ju','jeni','keni','mundeni'],['ata / Ju','janë / jeni','kanë / keni','mundin / mundeni']],
     table:[['ich','bin','habe','kann'],['du','bist','hast','kannst'],['er / sie / es','ist','hat','kann'],
    ['wir','sind','haben','können'],['ihr','seid','habt','könnt'],['sie / Sie','sind','haben','können']],
  tip:'<b>können, wollen, mögen</b>: ich dhe er pa mbaresë (ich kann, er kann). Emri si subjekt: Sabine = sie → schwimm<b>t</b>, meine Freunde = sie → leb<b>en</b>.<br>'
    + 'E kaluara: ich <b>war</b>, du warst, wir waren <i class="tr">(isha, ishe, ishim)</i> · ich <b>hatte</b>, du hattest, wir hatten <i class="tr">(kisha, kishe, kishim)</i>'
},
{
  id:'sz-verb2', chip:'🔁 wollen · möchten', t:'🔁 Dua, do të doja, më pëlqen', d:'wollen, möchten, mögen',
  th:['','wollen · dua','möchten · do të doja','mögen · më pëlqen'], say:-1,
  tr:[['unë','dua','do të doja','më pëlqen'],['ti','do','do të doje','të pëlqen'],['ai / ajo','do','do të donte','i pëlqen'],['ne','duam','do të donim','na pëlqen'],['ju','doni','do të donit','ju pëlqen'],['ata / Ju','duan / doni','do të donin / do të donit','u pëlqen / ju pëlqen']],
     table:[['ich','will','möchte','mag'],['du','willst','möchtest','magst'],['er / sie / es','will','möchte','mag'],
    ['wir','wollen','möchten','mögen'],['ihr','wollt','möchtet','mögt'],['sie / Sie','wollen','möchten','mögen']],
  tip:'<b>möchte</b> = e sjellshme 🙂 (në restorant). <b>will</b> = e fortë 😤.'
},
{
  id:'sz-satz', chip:'🧩 Satzbau', t:'🧩 Rendi i fjalisë', d:'So baut man Sätze',
  ex:[['Ich lerne Deutsch.','Folja në vendin 2.'],['Heute lerne ich Deutsch.','Edhe kur fillon me kohën, folja mbetet e dyta.'],
    ['Lernst du Deutsch?','Pyetje pa W: folja del e para.'],['Ich kann gut tanzen.','können në vendin 2, folja tjetër në fund.'],
    ['Ich habe Pizza gegessen.','haben në vendin 2, Partizip në fund.'],['Ich stehe um sieben Uhr auf.','aufstehen ndahet: stehe … auf.'],
    ['Ich rufe meine Mutter an.','Edhe anrufen, einkaufen, aufräumen ndahen: an / ein / auf në fund.']],
  tip:'Rregulli më i rëndësishëm: <b>folja gjithmonë e dyta</b>, folja e dytë <b>në fund</b>. 🔚'
},
{
  id:'sz-jnd', chip:'✅ Ja · Nein · Doch', t:'✅ Ja, Nein apo Doch?', d:'Antworten',
  ex:[['Kommst du? – Ja.','Po.'],['Kommst du? – Nein.','Jo.'],['Kommst du nicht? – Doch!','Po! (kur pyetja ka nicht ose kein)']],
  tip:'<b>Doch</b> = „po“, por vetëm kur pyetja është mohuese.'
},
{
  id:'sz-zahl', chip:'🔢 Zahlen', t:'🔢 Numrat', d:'Die Zahlen',
  th:['','Gjermanisht'], say:1,
  table:[['1–5','eins, zwei, drei, vier, fünf'],['6–12','sechs, sieben, acht, neun, zehn, elf, zwölf'],['13–15','dreizehn, vierzehn, fünfzehn'],
    ['16–19','sechzehn, siebzehn, achtzehn, neunzehn'],['20–50','zwanzig, dreißig, vierzig, fünfzig'],['60–90','sechzig, siebzig, achtzig, neunzig'],
    ['21','einundzwanzig'],['45','fünfundvierzig'],['100','hundert'],['1000','tausend']],
  tip:'21 = <b>ein</b>und<b>zwanzig</b>: së pari 1, pastaj 20. Kujdes: sechzehn, siebzehn.'
},
{
  id:'sz-uhr', chip:'⏰ Uhrzeit', t:'⏰ Ora', d:'Die Uhrzeit',
  th:['','Në bisedë','Zyrtare'], say:1,
  table:[['8:00','acht Uhr','acht Uhr'],['8:15','Viertel nach acht','acht Uhr fünfzehn'],['8:30','halb neun','acht Uhr dreißig'],
    ['8:45','Viertel vor neun','acht Uhr fünfundvierzig'],['15:30','halb vier','fünfzehn Uhr dreißig']],
  tip:'<b>halb</b> + ora <b>tjetër</b>: 8:30 = halb <b>neun</b>.'
},
{
  id:'sz-beruf', chip:'👩‍⚕️ Beruf', t:'👩‍⚕️ Profesioni', d:'Beruf und Arbeit',
  th:['Deutsch','Shqip'], say:0,
  table:[['Was sind Sie von Beruf?','Çfarë profesioni keni?'],['Ich bin Ärztin.','Jam mjeke. (pa nyjë!)'],['Ich arbeite als Kellnerin bei „Café Mio“.','Punoj si kameriere te „Café Mio“.'],
    ['der Lehrer → die Lehrerin','për gra: + in'],['der Arzt → die Ärztin','a → ä + in'],['Ich bin selbstständig / angestellt / arbeitslos.','Jam e vetëpunësuar / e punësuar / e papunë.']],
  tip:'<b>als</b> + profesioni, <b>bei</b> + firma. Te profesioni <b>pa nyjë</b>: Ich bin Lehrerin.'
},
{
  id:'sz-vorseit', chip:'⏳ vor · seit', t:'⏳ Kur? Që kur? Sa kohë?', d:'vor, seit, wie lange',
  th:['Pyetja','Përgjigjja'], say:1,
  tr:[['Kur?','Para dhjetë vitesh.'],['Që kur?','Prej katër vitesh. (vazhdon)'],['Sa kohë?','Tre vjet.']],
  table:[['Wann?','<b>Vor</b> zehn Jahren.'],['Seit wann?','<b>Seit</b> vier Jahren.'],['Wie lange?','Drei Jahre.']],
  tip:'<b>vor</b> = ka mbaruar. <b>seit</b> = vazhdon ende. vor / seit + einem Jahr, einer Woche, zwei Jahre<b>n</b>.'
},
{
  id:'sz-saetze', chip:'💬 Fjali të dobishme', t:'💬 Fjali të dobishme', d:'Nützliche Sätze',
  ex:[['Ich verstehe das nicht.','Nuk e kuptoj.'],['Wie bitte?','Si? (nuk dëgjova)'],['Langsam, bitte.','Më ngadalë, ju lutem.'],
    ['Können Sie das bitte wiederholen?','A mund ta përsërisni, ju lutem?'],['Wie sagt man das auf Deutsch?','Si thuhet kjo gjermanisht?'],
    ['Was bedeutet das?','Çfarë do të thotë kjo?'],['Wie schreibt man das?','Si shkruhet kjo?'],['Entschuldigung!','Më falni!'],
    ['Ich hätte gern …','Do të doja …'],['Die Rechnung, bitte.','Llogarinë, ju lutem.']]
}
];
