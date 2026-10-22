/* =====================================================================
   Wörter-Training: nur Wörter, keine Sätze.
   Eine Kategorie = { id, emoji, color, sq, de, nouns, words }
   nouns: [Artikel, Wort, Albanisch]  -> Bedeutung, Hören, Schreiben, der/die/das
   words: [Deutsch, Albanisch]        -> Bedeutung, Hören, Schreiben
   Neue Kategorie? Einfach unten anhängen.
   ===================================================================== */

const WORDS = [
{
  id:'w-essen', emoji:'🍎', color:'#F2545B', sq:'Ushqimi & pijet', de:'Essen & Trinken',
  nouns:[['der','Apfel','molla'],['die','Birne','dardha'],['die','Orange','portokalli'],['die','Wassermelone','shalqini'],['die','Banane','banania'],
    ['die','Erdbeere','luleshtrydhja'],['die','Traube','rrushi'],['die','Tomate','domatja'],['die','Kartoffel','patatja'],['die','Gurke','kastraveci'],
    ['das','Brot','buka'],['das','Brötchen','simitja'],['der','Käse','djathi'],['das','Ei','veza'],['die','Milch','qumështi'],
    ['das','Wasser','uji'],['der','Kaffee','kafeja'],['der','Tee','çaji'],['der','Saft','lëngu'],['das','Fleisch','mishi'],
    ['der','Fisch','peshku'],['der','Reis','orizi'],['der','Salat','sallata'],['der','Kuchen','ëmbëlsira'],['die','Pizza','pica'],
    ['die','Schokolade','çokollata'],['der','Zucker','sheqeri'],['das','Salz','kripa']],
  words:[]
},
{
  id:'w-bestellen', emoji:'🍽️', color:'#EE7A0C', sq:'Në restorant', de:'Bestellen & Restaurant',
  nouns:[['die','Speisekarte','menuja'],['die','Rechnung','llogaria'],['der','Kellner','kamarieri'],['die','Kellnerin','kameriera'],
    ['das','Glas','gota'],['die','Tasse','filxhani'],['der','Teller','pjata'],['die','Gabel','piruni'],['das','Messer','thika'],['der','Löffel','luga'],
    ['das','Frühstück','mëngjesi (ushqimi)'],['das','Mittagessen','dreka'],['das','Abendessen','darka']],
  words:[['bestellen','porosis'],['bezahlen','paguaj'],['nehmen','marr'],['möchten','do të doja'],['trinken','pi'],['essen','ha'],
    ['lecker','i shijshëm'],['hungrig','i uritur'],['durstig','i etur'],['Guten Appetit!','Ju bëftë mirë!'],['Prost!','Gëzuar!'],['bitte','të lutem'],['danke','faleminderit']]
},
{
  id:'w-wohnung', emoji:'🛋️', color:'#2E86DE', sq:'Banesa & mobiljet', de:'Wohnung & Möbel',
  nouns:[['das','Zimmer','dhoma'],['die','Küche','kuzhina'],['das','Wohnzimmer','dhoma e ndenjjes'],['das','Schlafzimmer','dhoma e gjumit'],['das','Bad','banjoja'],
    ['der','Flur','korridori'],['der','Balkon','ballkoni'],['der','Garten','kopshti'],['der','Schrank','dollapi'],['der','Tisch','tavolina'],
    ['der','Arbeitstisch','tavolina e punës'],['der','Stuhl','karrigia'],['das','Sofa','divani'],['das','Bett','shtrati'],['das','Regal','rafti'],
    ['der','Teppich','qilimi'],['die','Lampe','llamba'],['der','Spiegel','pasqyra'],['das','Fenster','dritarja'],['die','Tür','dera'],
    ['die','Waschmaschine','lavatriçja'],['der','Kühlschrank','frigoriferi'],['der','Herd','shporeti'],['der','Fernseher','televizori'],['die','Wohnung','banesa']],
  words:[['möbliert','e mobiluar'],['groß','i madh'],['klein','i vogël'],['hell','me dritë'],['dunkel','i errët'],['neu','i ri'],['alt','i vjetër']]
},
{
  id:'w-zeit', emoji:'🕐', color:'#7650F0', sq:'Ora & koha', de:'Uhrzeit & Zeit',
  nouns:[['die','Uhr','ora (sahati)'],['die','Stunde','ora (60 minuta)'],['die','Minute','minuta'],['der','Morgen','mëngjesi'],['der','Mittag','mesdita'],
    ['der','Abend','mbrëmja'],['die','Nacht','nata'],['der','Tag','dita'],['die','Woche','java'],['das','Wochenende','fundjava']],
  words:[['halb','gjysmë'],['Viertel','çerek'],['nach','pas (ora)'],['vor','para (ora)'],['früh','herët'],['spät','vonë'],
    ['heute','sot'],['morgen','nesër'],['gestern','dje'],['jetzt','tani'],['immer','gjithmonë'],['oft','shpesh'],['nie','asnjëherë']]
},
{
  id:'w-tage', emoji:'📅', color:'#0E9F8E', sq:'Ditët e javës', de:'Die Wochentage',
  nouns:[['der','Montag','e hëna'],['der','Dienstag','e marta'],['der','Mittwoch','e mërkura'],['der','Donnerstag','e enjtja'],
    ['der','Freitag','e premtja'],['der','Samstag','e shtuna'],['der','Sonntag','e diela']],
  words:[['am Montag','të hënën'],['am Freitag','të premten'],['am Wochenende','në fundjavë']]
},
{
  id:'w-zahlen', emoji:'🔢', color:'#E3A008', sq:'Numrat', de:'Die Zahlen',
  nouns:[],
  words:[['eins','1 · një'],['zwei','2 · dy'],['drei','3 · tre'],['vier','4 · katër'],['fünf','5 · pesë'],['sechs','6 · gjashtë'],
    ['sieben','7 · shtatë'],['acht','8 · tetë'],['neun','9 · nëntë'],['zehn','10 · dhjetë'],['elf','11 · njëmbëdhjetë'],['zwölf','12 · dymbëdhjetë'],
    ['dreizehn','13 · trembëdhjetë'],['vierzehn','14 · katërmbëdhjetë'],['fünfzehn','15 · pesëmbëdhjetë'],['sechzehn','16 · gjashtëmbëdhjetë'],
    ['siebzehn','17 · shtatëmbëdhjetë'],['achtzehn','18 · tetëmbëdhjetë'],['neunzehn','19 · nëntëmbëdhjetë'],['zwanzig','20 · njëzet'],
    ['dreißig','30 · tridhjetë'],['vierzig','40 · dyzet'],['fünfzig','50 · pesëdhjetë'],['hundert','100 · njëqind']]
},
{
  id:'w-wetter', emoji:'🌦️', color:'#2E86DE', added:'2026-10-22T18:58', sq:'Moti & drejtimet', de:'Wetter & Himmelsrichtungen',
  nouns:[['das','Wetter','moti'],['die','Sonne','dielli'],['der','Regen','shiu'],['der','Schnee','bora'],['die','Wolke','reja'],['der','Wind','era'],
    ['der','Grad','grada'],['der','Norden','veriu'],['der','Süden','jugu'],['der','Westen','perëndimi'],['der','Osten','lindja']],
  words:[['es regnet','bie shi'],['es schneit','bie borë'],['die Sonne scheint','ka diell'],['bewölkt','vranët'],['windig','me erë'],['warm','ngrohtë'],['kalt','ftohtë'],['heiß','shumë nxehtë']]
},
{
  id:'w-einkaufen', emoji:'🛒', color:'#EE7A0C', added:'2026-10-22T18:58', sq:'Në supermarket', de:'Einkaufen',
  nouns:[['der','Supermarkt','supermarketi'],['die','Packung','paketa'],['die','Dose','kanoçja'],['die','Flasche','shishja'],['das','Kilo','kilogrami'],
    ['das','Obst','frutat'],['das','Gemüse','perimet'],['der','Joghurt','jogurti'],['das','Öl','vaji'],['die','Wurst','salsiçja'],['der','Wein','vera'],['das','Mehl','mielli']],
  words:[['brauchen','më duhet'],['kaufen','blej'],['schmecken','ka shije'],['noch','akoma'],['Wie viel kostet das?','Sa kushton kjo?']]
},
{
  id:'w-hobbys', emoji:'🎨', color:'#D6409F', sq:'Hobi-t', de:'Hobbys & Freizeit',
  nouns:[['das','Hobby','hobi'],['die','Freizeit','koha e lirë'],['die','Musik','muzika'],['das','Kino','kinemaja'],['der','Ausflug','ekskursioni']],
  words:[['schwimmen','notoj'],['tanzen','kërcej'],['wandern','eci në natyrë'],['joggen','vrapoj'],['lesen','lexoj'],['singen','këndoj'],
    ['malen','pikturoj'],['zeichnen','vizatoj'],['reiten','kalëroj'],['kochen','gatuaj'],['backen','pjek'],['fotografieren','fotografoj'],
    ['klettern','ngjitem'],['Fahrrad fahren','vozis biçikletë'],['Ski fahren','bëj ski'],['Fußball spielen','luaj futboll'],
    ['Gitarre spielen','luaj kitarë'],['Musik hören','dëgjoj muzikë'],['fernsehen','shikoj televizor'],['spazieren gehen','shëtis'],['surfen','bëj surf']]
},
{
  id:'w-verben', emoji:'🏃‍♀️', color:'#16A34A', sq:'Foljet', de:'Wichtige Verben',
  nouns:[],
  words:[['essen','ha'],['trinken','pi'],['schlafen','fle'],['gehen','shkoj (në këmbë)'],['fahren','shkoj (me mjet)'],['kommen','vij'],
    ['wohnen','banoj'],['arbeiten','punoj'],['lernen','mësoj'],['sprechen','flas'],['machen','bëj'],['kaufen','blej'],['nehmen','marr'],
    ['helfen','ndihmoj'],['spielen','luaj'],['lieben','dua (dashuroj)'],['mögen','më pëlqen'],['können','di, mund'],['wollen','dua (të bëj)'],
    ['aufstehen','ngrihem'],['suchen','kërkoj'],['finden','gjej'],['sehen','shoh'],['hören','dëgjoj'],['sagen','them'],['fragen','pyes'],
    ['schreiben','shkruaj'],['rennen','vrapoj shpejt'],['üben','ushtroj']]
},
{
  id:'w-laender', emoji:'🌍', color:'#16A34A', added:'2026-10-22T19:10', sq:'Shtetet & gjuhët', de:'Länder & Sprachen',
  nouns:[],
  words:[['Deutschland','Gjermania'],['die Schweiz','Zvicra'],['Österreich','Austria'],['Italien','Italia'],['Griechenland','Greqia'],['China','Kina'],
    ['der Libanon','Libani'],['Albanien','Shqipëria'],['der Kosovo','Kosova'],['Deutsch','gjermanisht'],['Englisch','anglisht'],['Französisch','frëngjisht'],
    ['Italienisch','italisht'],['Spanisch','spanjisht'],['Chinesisch','kinezisht'],['Albanisch','shqip'],['aus der Schweiz','nga Zvicra'],['Woher kommst du?','Nga vjen?']]
},
{
  id:'w-familie', emoji:'👨‍👩‍👧', color:'#F2545B', sq:'Familja', de:'Die Familie',
  nouns:[['die','Mutter','nëna'],['der','Vater','babai'],['die','Eltern','prindërit'],['der','Bruder','vëllai'],['die','Schwester','motra'],
    ['das','Kind','fëmija'],['der','Sohn','djali'],['die','Tochter','vajza'],['die','Oma','gjyshja'],['der','Opa','gjyshi'],
    ['der','Mann','burri'],['die','Frau','gruaja'],['der','Freund','shoku, i dashuri'],['die','Freundin','shoqja, e dashura'],['das','Baby','foshnja'],
    ['die','Geschwister','vëllezërit e motrat'],['die','Großeltern','gjyshërit'],['die','Enkelin','mbesa'],['der','Enkel','nipi']],
  words:[]
},
{
  id:'w-koerper', emoji:'🧍‍♀️', color:'#7650F0', sq:'Pjesët e trupit', de:'Körperteile',
  nouns:[['der','Kopf','koka'],['die','Haare','flokët'],['das','Gesicht','fytyra'],['die','Stirn','balli'],['das','Auge','syri'],
    ['die','Augenbraue','vetulla'],['die','Nase','hunda'],['der','Mund','goja'],['die','Lippe','buza'],['der','Zahn','dhëmbi'],
    ['die','Zunge','gjuha'],['das','Ohr','veshi'],['die','Wange','faqja'],['das','Kinn','mjekra'],['der','Hals','qafa'],
    ['die','Schulter','supi'],['der','Arm','krahu'],['der','Ellbogen','bërryli'],['die','Hand','dora'],['der','Finger','gishti i dorës'],
    ['der','Daumen','gishti i madh'],['die','Brust','gjoksi'],['der','Bauch','barku'],['der','Rücken','shpina'],['der','Po','të ndenjurat 🍑'],
    ['das','Bein','këmba'],['das','Knie','gjuri'],['der','Fuß','shputa e këmbës'],['die','Zehe','gishti i këmbës']],
  words:[]
},
{
  id:'w-farben', emoji:'🌈', color:'#0E9F8E', sq:'Ngjyrat', de:'Die Farben',
  nouns:[],
  words:[['rot','e kuqe'],['blau','blu'],['grün','e gjelbër'],['gelb','e verdhë'],['schwarz','e zezë'],['weiß','e bardhë'],
    ['braun','kafe'],['grau','gri'],['rosa','rozë'],['orange','portokalli (ngjyra)'],['lila','lejla']]
}
];
