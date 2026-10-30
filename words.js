/* =====================================================================
   Wörter-Training: nur Wörter, keine Sätze.
   Eine Kategorie = { id, emoji, color, sq, de, nouns, words }
   nouns: [Artikel, Wort, Albanisch]  -> Bedeutung, Hören, Schreiben, der/die/das
   words: [Deutsch, Albanisch]        -> Bedeutung, Hören, Schreiben
   Neue Kategorie? Einfach unten anhängen.
   ===================================================================== */

const WORDS = [
{
  id:'w-hallo', emoji:'🙋‍♀️', color:'#F2545B', added:'2026-10-27T08:00', sq:'Përshëndetjet & formulari', de:'Begrüßung & Formular',
  nouns:[['der','Vorname','emri'],['der','Familienname','mbiemri'],['die','Straße','rruga'],['die','Hausnummer','numri i shtëpisë'],['die','Postleitzahl','kodi postar'],
    ['die','Stadt','qyteti'],['das','Land','shteti'],['das','Telefon','telefoni'],['die','Sprache','gjuha']],
  words:[['Guten Morgen!','Mirëmëngjes!'],['Guten Tag!','Mirëdita!'],['Guten Abend!','Mirëmbrëma!'],['Gute Nacht!','Natën e mirë!'],['Auf Wiedersehen!','Mirupafshim!'],
    ['Tschüs!','Mirupafshim! (me miq)'],['Wie geht es Ihnen?','Si jeni?'],['Danke, gut.','Faleminderit, mirë.'],['Freut mich.','Gëzohem.'],
    ['Tut mir leid.','Më vjen keq.'],['Einen Moment, bitte.','Një moment, ju lutem.'],['Entschuldigung!','Më falni!'],['aber','por']]
},
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
  nouns:[['das','Restaurant','restoranti'],['die','Speisekarte','menuja'],['die','Rechnung','llogaria'],['der','Kellner','kamarieri'],['die','Kellnerin','kameriera'],
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
  words:[['möbliert','e mobiluar'],['groß','i madh'],['klein','i vogël'],['hell','me dritë'],['dunkel','i errët'],['neu','i ri'],['alt','i vjetër'],
    ['leise','i qetë','2026-10-30T21:56'],['laut','me zë të lartë','2026-10-30T21:56'],['ziemlich','mjaft','2026-10-30T21:56']]
},
{
  id:'w-zeit', emoji:'🕐', color:'#7650F0', sq:'Ora & koha', de:'Uhrzeit & Zeit',
  nouns:[['die','Uhr','ora (sahati)'],['die','Stunde','ora (60 minuta)'],['die','Minute','minuta'],['der','Morgen','mëngjesi'],['der','Mittag','mesdita'],
    ['der','Abend','mbrëmja'],['die','Nacht','nata'],['der','Tag','dita'],['die','Woche','java'],['das','Wochenende','fundjava'],
    ['das','Jahr','viti'],['der','Monat','muaji'],
    ['der','Vormittag','paradita'],['der','Nachmittag','pasditja']],
  words:[['halb','gjysmë'],['Viertel','çerek'],['nach','pas (ora)'],['vor','para (ora)'],['früh','herët'],['spät','vonë'],
    ['heute','sot'],['morgen','nesër'],['gestern','dje'],['jetzt','tani'],['immer','gjithmonë'],['oft','shpesh'],['nie','asnjëherë'],
    ['morgens','në mëngjes'],['abends','në mbrëmje'],['im Moment','tani për tani'],['zurzeit','aktualisht'],['ungefähr','përafërsisht'],['gerade','sapo'],['zuerst','fillimisht'],['jeden Tag','çdo ditë'],['seit','prej'],
    ['nun','tani'],
    ['montags','çdo të hënë','2026-10-30T21:56'],['vormittags','çdo paradite','2026-10-30T21:56'],['bald','së shpejti','2026-10-30T21:56'],['danach','pastaj','2026-10-30T21:56'],['zum Schluss','në fund','2026-10-30T21:56'],['für einen Monat','për një muaj','2026-10-30T21:56'],['für ein Jahr','për një vit','2026-10-30T21:56'],['Für wie lange?','Për sa kohë?','2026-10-30T21:56']]
},
{
  id:'w-tage', emoji:'📅', color:'#0E9F8E', sq:'Ditët e javës', de:'Die Wochentage',
  nouns:[['der','Montag','e hëna'],['der','Dienstag','e marta'],['der','Mittwoch','e mërkura'],['der','Donnerstag','e enjtja'],
    ['der','Freitag','e premtja'],['der','Samstag','e shtuna'],['der','Sonntag','e diela'],['der','Sonnabend','e shtuna (në veri)']],
  words:[['am Montag','të hënën'],['am Freitag','të premten'],['am Wochenende','në fundjavë']]
},
{
  id:'w-zahlen', emoji:'🔢', color:'#E3A008', sq:'Numrat', de:'Die Zahlen',
  nouns:[['die','Zahl','numri']],
  words:[['eins','1 · një'],['zwei','2 · dy'],['drei','3 · tre'],['vier','4 · katër'],['fünf','5 · pesë'],['sechs','6 · gjashtë'],
    ['sieben','7 · shtatë'],['acht','8 · tetë'],['neun','9 · nëntë'],['zehn','10 · dhjetë'],['elf','11 · njëmbëdhjetë'],['zwölf','12 · dymbëdhjetë'],
    ['dreizehn','13 · trembëdhjetë'],['vierzehn','14 · katërmbëdhjetë'],['fünfzehn','15 · pesëmbëdhjetë'],['sechzehn','16 · gjashtëmbëdhjetë'],
    ['siebzehn','17 · shtatëmbëdhjetë'],['achtzehn','18 · tetëmbëdhjetë'],['neunzehn','19 · nëntëmbëdhjetë'],['zwanzig','20 · njëzet'],
    ['dreißig','30 · tridhjetë'],['vierzig','40 · dyzet'],['fünfzig','50 · pesëdhjetë'],['hundert','100 · njëqind'],
    ['sechzig','60 · gjashtëdhjetë'],['siebzig','70 · shtatëdhjetë'],['achtzig','80 · tetëdhjetë'],['neunzig','90 · nëntëdhjetë'],['tausend','1000 · një mijë'],
    ['einundzwanzig','21 · njëzet e një'],['fünfunddreißig','35 · tridhjetë e pesë'],['siebenundvierzig','47 · dyzet e shtatë'],['siebenundsechzig','67 · gjashtëdhjetë e shtatë'],
    ['null','0 · zero']]
},
{
  id:'w-wetter', emoji:'🌦️', color:'#2E86DE', added:'2026-10-22T18:58', sq:'Moti & drejtimet', de:'Wetter & Himmelsrichtungen',
  nouns:[['das','Wetter','moti'],['die','Sonne','dielli'],['der','Regen','shiu'],['der','Schnee','bora'],['die','Wolke','reja'],['der','Wind','era'],
    ['der','Grad','grada'],['der','Norden','veriu'],['der','Süden','jugu'],['der','Westen','perëndimi'],['der','Osten','lindja']],
  words:[['es regnet','bie shi'],['es schneit','bie borë'],['die Sonne scheint','ka diell'],['bewölkt','vranët'],['windig','me erë'],['warm','ngrohtë'],['kalt','ftohtë'],['heiß','shumë nxehtë'],
    ['regnen','bie shi'],['schneien','bie borë'],['scheinen','shkëlqen (dielli)'],['liegen','ndodhet']]
},
{
  id:'w-einkaufen', emoji:'🛒', color:'#EE7A0C', added:'2026-10-22T18:58', sq:'Në supermarket', de:'Einkaufen',
  nouns:[['der','Supermarkt','supermarketi'],['die','Packung','paketa'],['die','Dose','kanoçja'],['die','Flasche','shishja'],['das','Kilo','kilogrami'],
    ['das','Obst','frutat'],['das','Gemüse','perimet'],['der','Joghurt','jogurti'],['das','Öl','vaji'],['die','Wurst','salsiçja'],['der','Wein','vera'],['das','Mehl','mielli']],
  words:[['brauchen','më duhet'],['kaufen','blej'],['schmecken','ka shije'],['noch','akoma'],['Wie viel kostet das?','Sa kushton kjo?'],
    ['Was brauchen wir?','Çfarë na duhet?']]
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
    ['schreiben','shkruaj'],['rennen','vrapoj shpejt'],['üben','ushtroj'],['schwimmen','notoj'],['kennen','njoh'],['leben','jetoj'],
    ['denken','mendoj'],['lachen','qesh'],['treffen','takoj'],['heißen','quhem'],
    ['müssen','duhet','2026-10-30T21:56'],['ausfüllen','plotësoj','2026-10-30T21:56'],['mitbringen','sjell me vete','2026-10-30T21:56'],['wählen','zgjedh','2026-10-30T21:56'],['auswählen','përzgjedh','2026-10-30T21:56'],['stempeln','vulos','2026-10-30T21:56'],['funktionieren','funksionon','2026-10-30T21:56'],['abholen','marr (dikë)','2026-10-30T21:56'],['erklären','shpjegoj','2026-10-30T21:56'],['schließen','mbyll','2026-10-30T21:56'],['öffnen','hap','2026-10-30T21:56'],['zuhören','dëgjoj','2026-10-30T21:56'],['warten','pres','2026-10-30T21:56']]
},
{
  id:'w-trennbar', emoji:'⏰', color:'#7650F0', added:'2026-10-26T08:00', sq:'Foljet e ndashme', de:'Trennbare Verben',
  nouns:[],
  words:[['aufstehen','ngrihem'],['anrufen','telefonoj'],['aufräumen','rregulloj'],['einkaufen','bëj pazar'],['fernsehen','shikoj televizor'],
    ['mitkommen','vij bashkë'],['anfangen','filloj'],['Ich stehe auf.','Ngrihem.'],['Ich rufe dich an.','Të telefonoj.'],['Ich kaufe ein.','Bëj pazar.']]
},
{
  id:'w-berufe', emoji:'👩‍⚕️', color:'#0E9F8E', added:'2026-10-27T08:00', sq:'Profesionet & puna', de:'Berufe & Arbeit (Buch 2)',
  nouns:[['der','Beruf','profesioni'],['die','Arbeit','puna'],['die','Praxis','klinika'],['die','Ausbildung','trajnimi profesional'],['das','Praktikum','praktika'],
    ['die','Firma','firma'],['das','Büro','zyra'],['die','Stelle','vendi i punës'],['der','Job','puna (job)'],['der','Chef','shefi'],['die','Chefin','shefja'],
    ['der','Patient','pacienti'],['die','Patientin','pacientja'],['der','Arzt','mjeku'],['die','Ärztin','mjekja'],['der','Hausmeister','kujdestari i ndërtesës'],
    ['die','Physiotherapeutin','fizioterapistja'],['die','Arzthelferin','asistentja e mjekut'],['der','Ingenieur','inxhinieri'],['die','Polizistin','policja'],
    ['die','Hausfrau','amvisja'],['der','Krankenpfleger','infermieri'],['die','Krankenschwester','infermierja'],['der','Journalist','gazetari'],['die','Studentin','studentja'],
    ['die','Ingenieurin','inxhinierja'],['der','Polizist','polici'],['der','Hausmann','burri shtëpiak'],['der','Student','studenti'],['das','Interview','intervista'],['die','Zeitung','gazeta'],['das','Diplom','diploma'],['die','Abteilung','departamenti'],['der','Abteilungsleiter','drejtuesi i departamentit'],['die','Bewerbung','aplikimi për punë'],
    ['die','Journalistin','gazetarja'],['der','Verkäufer','shitësi'],['die','Verkäuferin','shitësja'],['der','Schüler','nxënësi'],['die','Schülerin','nxënësja'],
    ['die','Architektin','arkitektja'],['der','Physiotherapeut','fizioterapeuti'],['die','Berufserfahrung','përvoja e punës'],['der','Kunde','klienti'],['der','Kollege','kolegu'],
    ['der','Stress','stresi'],['das','Kaufhaus','dyqani i madh'],
    ['die','Anzeige','njoftimi','2026-10-30T21:56'],['die','Praktikumsstelle','vendi i praktikës','2026-10-30T21:56'],['der','Praktikant','praktikanti','2026-10-30T21:56'],['die','Praktikantin','praktikantja','2026-10-30T21:56'],['die','Arbeitszeit','orari i punës','2026-10-30T21:56'],['die','Vergütung','pagesa','2026-10-30T21:56'],['der','Bereich','fusha','2026-10-30T21:56'],['die','Gastronomie','gastronomia','2026-10-30T21:56'],['die','Konzertagentur','agjencia e koncerteve','2026-10-30T21:56']],
  words:[['arbeiten als','punoj si'],['selbstständig','i vetëpunësuar'],['angestellt','i punësuar'],['arbeitslos','i papunë'],['studieren','studioj'],['dauern','zgjat'],
    ['vor zehn Jahren','para dhjetë vitesh'],['seit vier Jahren','prej katër vitesh'],['wie lange','sa kohë'],['seit wann','që kur'],
    ['beruflich','në punë'],['Was sind Sie von Beruf?','Çfarë profesioni keni?'],['Mit freundlichen Grüßen','Me respekt'],['Sehr geehrter Herr …','I nderuar zotëri …'],
    ['berufstätig','punon, ka punë'],['war','isha / ishte'],['hatte','kisha / kishte'],['früher','më parë'],['schlecht','keq'],['professionell','profesional'],
    ['einfach','i lehtë'],['ich glaube','mendoj'],['fotogen','fotogjenik'],['eigene','i/e vet'],
    ['mindestens','të paktën','2026-10-30T21:56'],['normalerweise','zakonisht','2026-10-30T21:56'],['schriftlich','me shkrim','2026-10-30T21:56'],['per E-Mail','me e-mail','2026-10-30T21:56'],['pro Monat','në muaj','2026-10-30T21:56'],['Ist die Stelle noch frei?','A është ende i lirë vendi?','2026-10-30T21:56']]
},
{
  id:'w-unterwegs', emoji:'🚌', color:'#0E9F8E', added:'2026-10-30T21:56', sq:'Në rrugë & zyrat', de:'Unterwegs & Ämter',
  nouns:[['der','Führerschein','patenta','2026-10-30T21:56'],['das','Amt','zyra shtetërore','2026-10-30T21:56'],['die','Autovermietung','agjencia e makinave me qira','2026-10-30T21:56'],['der','Bus','autobusi','2026-10-30T21:56'],['die','Fahrkarte','bileta','2026-10-30T21:56'],['der','Fahrkartenautomat','automati i biletave','2026-10-30T21:56'],['die','Fahrt','udhëtimi','2026-10-30T21:56'],['der','Antrag','kërkesa (formulari)','2026-10-30T21:56'],['der','Ausweis','letërnjoftimi','2026-10-30T21:56'],['der','Personalausweis','letërnjoftimi','2026-10-30T21:56'],['der','Reisepass','pasaporta','2026-10-30T21:56'],['die','Kreditkarte','karta e kreditit','2026-10-30T21:56'],['das','Ziel','destinacioni','2026-10-30T21:56'],['das','Wechselgeld','kusuri','2026-10-30T21:56'],['der','Laden','dyqani','2026-10-30T21:56'],['der','Flughafen','aeroporti','2026-10-30T21:56']],
  words:[['mieten','marr me qira','2026-10-30T21:56'],['gültig','i vlefshëm','2026-10-30T21:56'],['ausländisch','i huaj','2026-10-30T21:56'],['international','ndërkombëtar','2026-10-30T21:56'],['zu jung','shumë i ri','2026-10-30T21:56'],['Na los!','Hajde!','2026-10-30T21:56'],['Sieh mal!','Shiko pak!','2026-10-30T21:56'],['Komm mit!','Eja me mua!','2026-10-30T21:56']]
},
{
  id:'w-schule', emoji:'🏫', color:'#0E9F8E', added:'2026-10-26T08:00', sq:'Shkolla, puna & kafshët', de:'Schule, Beruf & Tiere',
  nouns:[['die','Schule','shkolla'],['das','Lieblingsfach','lënda e preferuar'],['die','Mathematik','matematika'],['die','Physik','fizika'],['die','Chemie','kimia'],
    ['der','Lehrer','mësuesi'],['die','Lehrerin','mësuesja'],['die','Bank','banka'],['der','Koch','kuzhinieri'],['die','Köchin','kuzhinierja'],
    ['das','Tier','kafsha'],['der','Hund','qeni'],['die','Katze','macja'],['der','Goldfisch','peshku i kuq'],['das','Eis','akullorja'],['der','See','liqeni'],['der','Park','parku'],
    ['die','Sprachschule','shkolla e gjuhëve'],['das','Schwimmbad','pishina'],['das','Café','kafeneja'],
    ['das','Studium','studimet','2026-10-30T21:56'],['die','Universität','universiteti','2026-10-30T21:56'],['die','Hausaufgabe','detyra e shtëpisë','2026-10-30T21:56'],['der','Text','teksti','2026-10-30T21:56'],['das','Handy','celulari','2026-10-30T21:56']],
  words:[['arbeiten','punoj'],['gern','me qejf'],['oft','shpesh'],['manchmal','ndonjëherë'],['lange','gjatë']]
},
{
  id:'w-laender', emoji:'🌍', color:'#16A34A', added:'2026-10-22T19:10', sq:'Shtetet & gjuhët', de:'Länder & Sprachen',
  nouns:[['die','Hauptstadt','kryeqyteti']],
  words:[['Deutschland','Gjermania'],['die Schweiz','Zvicra'],['Österreich','Austria'],['Italien','Italia'],['Griechenland','Greqia'],['China','Kina'],
    ['der Libanon','Libani'],['Albanien','Shqipëria'],['der Kosovo','Kosova'],['Deutsch','gjermanisht'],['Englisch','anglisht'],['Französisch','frëngjisht'],
    ['Italienisch','italisht'],['Spanisch','spanjisht'],['Chinesisch','kinezisht'],['Albanisch','shqip'],['aus der Schweiz','nga Zvicra'],['Woher kommst du?','Nga vjen?'],
    ['die Hauptstadt','kryeqyteti']]
},
{
  id:'w-familie', emoji:'👨‍👩‍👧', color:'#F2545B', sq:'Familja', de:'Die Familie',
  nouns:[['die','Mutter','nëna'],['der','Vater','babai'],['die','Eltern','prindërit'],['der','Bruder','vëllai'],['die','Schwester','motra'],
    ['das','Kind','fëmija'],['der','Sohn','djali'],['die','Tochter','vajza'],['die','Oma','gjyshja'],['der','Opa','gjyshi'],
    ['der','Mann','burri'],['die','Frau','gruaja'],['der','Freund','shoku, i dashuri'],['die','Freundin','shoqja, e dashura'],['das','Baby','foshnja'],
    ['die','Geschwister','vëllezërit e motrat'],['die','Großeltern','gjyshërit'],['die','Enkelin','mbesa'],['der','Enkel','nipi']],
  words:[['verheiratet','i/e martuar'],['allein','vetëm']]
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
