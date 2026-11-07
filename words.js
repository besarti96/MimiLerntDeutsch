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
    ['die','Stadt','qyteti'],['das','Land','shteti'],['das','Telefon','telefoni'],['die','Sprache','gjuha'],
    ['das','Formular','formulari','2026-11-06T11:15']],
  words:[['Guten Morgen!','Mirëmëngjes!'],['Guten Tag!','Mirëdita!'],['Guten Abend!','Mirëmbrëma!'],['Gute Nacht!','Natën e mirë!'],['Auf Wiedersehen!','Mirupafshim!'],
    ['Tschüs!','Mirupafshim! (me miq)'],['Wie geht es Ihnen?','Si jeni?'],['Danke, gut.','Faleminderit, mirë.'],['Freut mich.','Gëzohem.'],
    ['Tut mir leid.','Më vjen keq.'],['Einen Moment, bitte.','Një moment, ju lutem.'],['Entschuldigung!','Më falni!'],['aber','por'],
    ['Gute Besserung!','Shërim të shpejtë!','2026-11-06T11:15'],['leider','fatkeqësisht','2026-11-06T11:15'],['hoffentlich','shpresoj','2026-11-06T11:15'],['toll','super','2026-11-06T11:15'],
    ['Auf Wiederhören!','Mirupafshim! (në telefon)','2026-11-06T11:34']]
},
{
  id:'w-essen', emoji:'🍎', color:'#F2545B', sq:'Ushqimi & pijet', de:'Essen & Trinken',
  nouns:[['der','Apfel','molla'],['die','Birne','dardha'],['die','Orange','portokalli'],['die','Wassermelone','shalqini'],['die','Banane','banania'],
    ['die','Erdbeere','luleshtrydhja'],['die','Traube','rrushi'],['die','Tomate','domatja'],['die','Kartoffel','patatja'],['die','Gurke','kastraveci'],
    ['das','Brot','buka'],['das','Brötchen','simitja'],['der','Käse','djathi'],['das','Ei','veza'],['die','Milch','qumështi'],
    ['das','Wasser','uji'],['der','Kaffee','kafeja'],['der','Tee','çaji'],['der','Saft','lëngu'],['das','Fleisch','mishi'],
    ['der','Fisch','peshku'],['der','Reis','orizi'],['der','Salat','sallata'],['der','Kuchen','ëmbëlsira'],['die','Pizza','pica'],
    ['die','Schokolade','çokollata'],['der','Zucker','sheqeri'],['das','Salz','kripa'],
    ['die','Lebensmittel','ushqimet','2026-11-07T15:12']],
  words:[['dick','i trashë','2026-11-07T15:12'],['wenig','pak','2026-11-07T15:12']]
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
    ['die','Waschmaschine','lavatriçja'],['der','Kühlschrank','frigoriferi'],['der','Herd','shporeti'],['der','Fernseher','televizori'],['die','Wohnung','banesa'],
    ['der','Stock','kati','2026-11-06T11:15'],
    ['die','Sachen','gjërat','2026-11-06T11:34']],
  words:[['möbliert','e mobiluar'],['groß','i madh'],['klein','i vogël'],['hell','me dritë'],['dunkel','i errët'],['neu','i ri'],['alt','i vjetër'],
    ['leise','i qetë','2026-10-30T21:56'],['laut','me zë të lartë','2026-10-30T21:56'],['ziemlich','mjaft','2026-10-30T21:56'],
    ['ruhig','i qetë','2026-11-07T15:12']]
},
{
  id:'w-zeit', emoji:'🕐', color:'#7650F0', sq:'Ora & koha', de:'Uhrzeit & Zeit',
  nouns:[['die','Uhr','ora (sahati)'],['die','Stunde','ora (60 minuta)'],['die','Minute','minuta'],['der','Morgen','mëngjesi'],['der','Mittag','mesdita'],
    ['der','Abend','mbrëmja'],['die','Nacht','nata'],['der','Tag','dita'],['die','Woche','java'],['das','Wochenende','fundjava'],
    ['das','Jahr','viti'],['der','Monat','muaji'],
    ['der','Vormittag','paradita'],['der','Nachmittag','pasditja'],
    ['der','Alltag','jeta e përditshme','2026-11-07T15:12']],
  words:[['halb','gjysmë'],['Viertel','çerek'],['nach','pas (ora)'],['vor','para (ora)'],['früh','herët'],['spät','vonë'],
    ['heute','sot'],['morgen','nesër'],['gestern','dje'],['jetzt','tani'],['immer','gjithmonë'],['oft','shpesh'],['nie','asnjëherë'],
    ['morgens','në mëngjes'],['abends','në mbrëmje'],['im Moment','tani për tani'],['zurzeit','aktualisht'],['ungefähr','përafërsisht'],['gerade','sapo'],['zuerst','fillimisht'],['jeden Tag','çdo ditë'],['seit','prej'],
    ['nun','tani'],
    ['montags','çdo të hënë','2026-10-30T21:56'],['vormittags','çdo paradite','2026-10-30T21:56'],['bald','së shpejti','2026-10-30T21:56'],['danach','pastaj','2026-10-30T21:56'],['zum Schluss','në fund','2026-10-30T21:56'],['für einen Monat','për një muaj','2026-10-30T21:56'],['für ein Jahr','për një vit','2026-10-30T21:56'],['Für wie lange?','Për sa kohë?','2026-10-30T21:56'],
    ['täglich','çdo ditë','2026-11-06T11:15'],['wie oft','sa shpesh','2026-11-06T11:15'],['dreimal','tri herë','2026-11-06T11:15'],
    ['zweimal','dy herë','2026-11-07T15:12']]
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
    ['das','Obst','frutat'],['das','Gemüse','perimet'],['der','Joghurt','jogurti'],['das','Öl','vaji'],['die','Wurst','salsiçja'],['der','Wein','vera'],['das','Mehl','mielli'],
    ['die','Kasse','arka','2026-11-06T11:15'],
    ['der','Gemüseladen','dyqani i perimeve','2026-11-06T11:34']],
  words:[['brauchen','më duhet'],['kaufen','blej'],['schmecken','ka shije'],['noch','akoma'],['Wie viel kostet das?','Sa kushton kjo?'],
    ['Was brauchen wir?','Çfarë na duhet?'],
    ['verkaufen','shes','2026-11-06T11:34']]
},
{
  id:'w-hobbys', emoji:'🎨', color:'#D6409F', sq:'Hobi-t', de:'Hobbys & Freizeit',
  nouns:[['das','Hobby','hobi'],['die','Freizeit','koha e lirë'],['die','Musik','muzika'],['das','Kino','kinemaja'],['der','Ausflug','ekskursioni'],
    ['der','Klub','klubi','2026-11-06T11:15'],['das','Lied','kënga','2026-11-06T11:15'],
    ['das','Picknick','pikniku','2026-11-06T11:34'],['das','Treffen','takimi','2026-11-06T11:34'],
    ['der','Wald','pylli','2026-11-07T15:12'],['der','Bauernhof','ferma','2026-11-07T15:12'],['der','Treffpunkt','vendi i takimit','2026-11-07T15:12'],['das','Seminar','seminari','2026-11-07T15:12'],['das','Fitness-Studio','palestra','2026-11-07T15:12']],
  words:[['schwimmen','notoj'],['tanzen','kërcej'],['wandern','eci në natyrë'],['joggen','vrapoj'],['lesen','lexoj'],['singen','këndoj'],
    ['malen','pikturoj'],['zeichnen','vizatoj'],['reiten','kalëroj'],['kochen','gatuaj'],['backen','pjek'],['fotografieren','fotografoj'],
    ['klettern','ngjitem'],['Fahrrad fahren','vozis biçikletë'],['Ski fahren','bëj ski'],['Fußball spielen','luaj futboll'],
    ['Gitarre spielen','luaj kitarë'],['Musik hören','dëgjoj muzikë'],['fernsehen','shikoj televizor'],['spazieren gehen','shëtis'],['surfen','bëj surf'],
    ['lustig','i gëzuar','2026-11-06T11:15']]
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
    ['müssen','duhet','2026-10-30T21:56'],['ausfüllen','plotësoj','2026-10-30T21:56'],['mitbringen','sjell me vete','2026-10-30T21:56'],['wählen','zgjedh','2026-10-30T21:56'],['auswählen','përzgjedh','2026-10-30T21:56'],['stempeln','vulos','2026-10-30T21:56'],['funktionieren','funksionon','2026-10-30T21:56'],['abholen','marr (dikë)','2026-10-30T21:56'],['erklären','shpjegoj','2026-10-30T21:56'],['schließen','mbyll','2026-10-30T21:56'],['öffnen','hap','2026-10-30T21:56'],['zuhören','dëgjoj','2026-10-30T21:56'],['warten','pres','2026-10-30T21:56'],
    ['dürfen','lejohet','2026-11-06T11:15'],['geben','jap','2026-11-06T11:15'],['telefonieren','flas në telefon','2026-11-06T11:15'],['benutzen','përdor','2026-11-06T11:15'],['beantragen','aplikoj për','2026-11-06T11:15'],['wiederholen','përsëris','2026-11-06T11:15'],
    ['beobachten','vëzhgoj','2026-11-07T15:12'],['vereinbaren','lë (takim)','2026-11-07T15:12'],['ändern','ndryshoj','2026-11-07T15:12'],['verschieben','shtyj','2026-11-07T15:12']]
},
{
  id:'w-trennbar', emoji:'⏰', color:'#7650F0', added:'2026-10-26T08:00', sq:'Foljet e ndashme', de:'Trennbare Verben',
  nouns:[],
  words:[['aufstehen','ngrihem'],['anrufen','telefonoj'],['aufräumen','rregulloj'],['einkaufen','bëj pazar'],['fernsehen','shikoj televizor'],
    ['mitkommen','vij bashkë'],['anfangen','filloj'],['Ich stehe auf.','Ngrihem.'],['Ich rufe dich an.','Të telefonoj.'],['Ich kaufe ein.','Bëj pazar.'],
    ['ausmachen','fik','2026-11-06T11:15'],['abgeben','dorëzoj','2026-11-06T11:15'],['mitnehmen','marr me vete','2026-11-06T11:15'],['stattfinden','zhvillohet','2026-11-06T11:15'],['kennenlernen','njoh','2026-11-06T11:15'],['ausfallen','nuk mbahet','2026-11-06T11:15'],
    ['aufpassen','kujdesem','2026-11-07T15:12'],['absagen','anuloj','2026-11-07T15:12'],['vorbeikommen','kaloj (pa takim)','2026-11-07T15:12']]
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
    ['die','Anzeige','njoftimi','2026-10-30T21:56'],['die','Praktikumsstelle','vendi i praktikës','2026-10-30T21:56'],['der','Praktikant','praktikanti','2026-10-30T21:56'],['die','Praktikantin','praktikantja','2026-10-30T21:56'],['die','Arbeitszeit','orari i punës','2026-10-30T21:56'],['die','Vergütung','pagesa','2026-10-30T21:56'],['der','Bereich','fusha','2026-10-30T21:56'],['die','Gastronomie','gastronomia','2026-10-30T21:56'],['die','Konzertagentur','agjencia e koncerteve','2026-10-30T21:56'],
    ['die','Mitarbeiterin','punonjësja','2026-11-06T11:15'],['die','Kollegin','kolegia','2026-11-06T11:15'],
    ['die','Mode','moda','2026-11-06T11:34'],['das','Reisebüro','agjencia e udhëtimeve','2026-11-06T11:34'],['der','Reiseführer','guida turistike','2026-11-06T11:34'],['die','Reiseführerin','guida turistike (grua)','2026-11-06T11:34'],['die','Erfahrung','përvoja','2026-11-06T11:34'],['der','Tourismus','turizmi','2026-11-06T11:34']],
  words:[['arbeiten als','punoj si'],['selbstständig','i vetëpunësuar'],['angestellt','i punësuar'],['arbeitslos','i papunë'],['studieren','studioj'],['dauern','zgjat'],
    ['vor zehn Jahren','para dhjetë vitesh'],['seit vier Jahren','prej katër vitesh'],['wie lange','sa kohë'],['seit wann','që kur'],
    ['beruflich','në punë'],['Was sind Sie von Beruf?','Çfarë profesioni keni?'],['Mit freundlichen Grüßen','Me respekt'],['Sehr geehrter Herr …','I nderuar zotëri …'],
    ['berufstätig','punon, ka punë'],['war','isha / ishte'],['hatte','kisha / kishte'],['früher','më parë'],['schlecht','keq'],['professionell','profesional'],
    ['einfach','i lehtë'],['ich glaube','mendoj'],['fotogen','fotogjenik'],['eigene','i/e vet'],
    ['mindestens','të paktën','2026-10-30T21:56'],['normalerweise','zakonisht','2026-10-30T21:56'],['schriftlich','me shkrim','2026-10-30T21:56'],['per E-Mail','me e-mail','2026-10-30T21:56'],['pro Monat','në muaj','2026-10-30T21:56'],['Ist die Stelle noch frei?','A është ende i lirë vendi?','2026-10-30T21:56']]
},
{
  id:'w-unterwegs', emoji:'🚌', color:'#0E9F8E', added:'2026-10-30T21:56', sq:'Në rrugë & zyrat', de:'Unterwegs & Ämter',
  nouns:[['der','Führerschein','patenta','2026-10-30T21:56'],['das','Amt','zyra shtetërore','2026-10-30T21:56'],['die','Autovermietung','agjencia e makinave me qira','2026-10-30T21:56'],['der','Bus','autobusi','2026-10-30T21:56'],['die','Fahrkarte','bileta','2026-10-30T21:56'],['der','Fahrkartenautomat','automati i biletave','2026-10-30T21:56'],['die','Fahrt','udhëtimi','2026-10-30T21:56'],['der','Antrag','kërkesa (formulari)','2026-10-30T21:56'],['der','Ausweis','letërnjoftimi','2026-10-30T21:56'],['der','Personalausweis','letërnjoftimi','2026-10-30T21:56'],['der','Reisepass','pasaporta','2026-10-30T21:56'],['die','Kreditkarte','karta e kreditit','2026-10-30T21:56'],['das','Ziel','destinacioni','2026-10-30T21:56'],['das','Wechselgeld','kusuri','2026-10-30T21:56'],['der','Laden','dyqani','2026-10-30T21:56'],['der','Flughafen','aeroporti','2026-10-30T21:56'],
    ['der','Pass','pasaporta','2026-11-06T11:15'],['das','Gepäck','bagazhi','2026-11-06T11:15'],['das','Fahrrad','biçikleta','2026-11-06T11:15'],['der','Fernbus','autobusi ndërqytetës','2026-11-06T11:15'],['der','Parkplatz','parkingu','2026-11-06T11:15'],['die','Bushaltestelle','stacioni i autobusit','2026-11-06T11:15'],
    ['das','Papier','dokumenti (letra)','2026-11-06T11:34'],['der','Radweg','rruga e biçikletave','2026-11-06T11:34']],
  words:[['mieten','marr me qira','2026-10-30T21:56'],['gültig','i vlefshëm','2026-10-30T21:56'],['ausländisch','i huaj','2026-10-30T21:56'],['international','ndërkombëtar','2026-10-30T21:56'],['zu jung','shumë i ri','2026-10-30T21:56'],['Na los!','Hajde!','2026-10-30T21:56'],['Sieh mal!','Shiko pak!','2026-10-30T21:56'],['Komm mit!','Eja me mua!','2026-10-30T21:56'],
    ['erlaubt','e lejuar','2026-11-06T11:15'],['verboten','e ndaluar','2026-11-06T11:15'],['parken','parkoj','2026-11-06T11:15'],['langsam','ngadalë','2026-11-06T11:15'],
    ['unterschreiben','nënshkruaj','2026-11-06T11:34']]
},
{
  id:'w-schule', emoji:'🏫', color:'#0E9F8E', added:'2026-10-26T08:00', sq:'Shkolla, puna & kafshët', de:'Schule, Beruf & Tiere',
  nouns:[['die','Schule','shkolla'],['das','Lieblingsfach','lënda e preferuar'],['die','Mathematik','matematika'],['die','Physik','fizika'],['die','Chemie','kimia'],
    ['der','Lehrer','mësuesi'],['die','Lehrerin','mësuesja'],['die','Bank','banka'],['der','Koch','kuzhinieri'],['die','Köchin','kuzhinierja'],
    ['das','Tier','kafsha'],['der','Hund','qeni'],['die','Katze','macja'],['der','Goldfisch','peshku i kuq'],['das','Eis','akullorja'],['der','See','liqeni'],['der','Park','parku'],
    ['die','Sprachschule','shkolla e gjuhëve'],['das','Schwimmbad','pishina'],['das','Café','kafeneja'],
    ['das','Studium','studimet','2026-10-30T21:56'],['die','Universität','universiteti','2026-10-30T21:56'],['die','Hausaufgabe','detyra e shtëpisë','2026-10-30T21:56'],['der','Text','teksti','2026-10-30T21:56'],['das','Handy','celulari','2026-10-30T21:56'],
    ['die','Anmeldung','regjistrimi','2026-11-06T11:15'],['die','Kursgebühr','tarifa e kursit','2026-11-06T11:15'],['der','Unterricht','mësimi','2026-11-06T11:15'],['die','Regel','rregulli','2026-11-06T11:15'],['der','Termin','takimi','2026-11-06T11:15'],['die','Nachricht','mesazhi','2026-11-06T11:15'],['der','Laptop','laptopi','2026-11-06T11:15'],
    ['die','Übung','ushtrimi','2026-11-06T11:34'],['der','Test','testi','2026-11-06T11:34'],
    ['der','Kursleiter','drejtuesi i kursit','2026-11-07T15:12'],['die','Kursleiterin','drejtuesja e kursit','2026-11-07T15:12'],['die','Sommerferien','pushimet verore','2026-11-07T15:12']],
  words:[['arbeiten','punoj'],['gern','me qejf'],['oft','shpesh'],['manchmal','ndonjëherë'],['lange','gjatë'],
    ['pünktlich','i përpiktë','2026-11-06T11:34']]
},
{
  id:'w-laender', emoji:'🌍', color:'#16A34A', added:'2026-10-22T19:10', sq:'Shtetet & gjuhët', de:'Länder & Sprachen',
  nouns:[['die','Hauptstadt','kryeqyteti'],
    ['der','Amerikaner','amerikani','2026-11-06T11:34']],
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
    ['die','Geschwister','vëllezërit e motrat'],['die','Großeltern','gjyshërit'],['die','Enkelin','mbesa'],['der','Enkel','nipi'],
    ['die','Ehefrau','bashkëshortja','2026-11-06T11:15']],
  words:[['verheiratet','i/e martuar'],['allein','vetëm'],
    ['geschieden','i/e divorcuar','2026-11-06T11:34'],
    ['ledig','beqar','2026-11-07T15:12'],['alleinerziehend','prind i vetëm','2026-11-07T15:12']]
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
},
{
  id:'w-gesundheit', emoji:'🏥', color:'#F2545B', added:'2026-11-06T11:15', sq:'Shëndeti & spitali', de:'Gesundheit & Krankheit',
  nouns:[['die','Gesundheit','shëndeti','2026-11-06T11:15'],['die','Krankheit','sëmundja','2026-11-06T11:15'],['die','Notaufnahme','urgjenca','2026-11-06T11:15'],['das','Krankenhaus','spitali','2026-11-06T11:15'],['der','Unfall','aksidenti','2026-11-06T11:15'],['der','Schmerz','dhimbja','2026-11-06T11:15'],['die','Schmerztablette','tableta kundër dhimbjes','2026-11-06T11:15'],['der','Kinderarzt','mjeku i fëmijëve','2026-11-06T11:15'],['der','Wartebereich','dhoma e pritjes','2026-11-06T11:15'],['die','Zigarette','cigarja','2026-11-06T11:15'],
    ['der','Husten','kolla','2026-11-07T15:12'],['der','Schnupfen','rrufa','2026-11-07T15:12'],['das','Fieber','temperatura','2026-11-07T15:12'],['die','Kopfschmerzen','dhimbja e kokës','2026-11-07T15:12'],['die','Halsschmerzen','dhimbja e fytit','2026-11-07T15:12'],['die','Bauchschmerzen','dhimbja e barkut','2026-11-07T15:12'],['der','Sonnenbrand','djegia nga dielli','2026-11-07T15:12'],['die','Medizin','ilaçi','2026-11-07T15:12'],['die','Salbe','kremi (pomada)','2026-11-07T15:12'],['die','Arztpraxis','ordinanca e mjekut','2026-11-07T15:12'],['die','Zahnschmerzen','dhimbja e dhëmbit','2026-11-07T15:12'],['der','Zahnarzt','dentisti','2026-11-07T15:12'],['der','Tipp','këshilla','2026-11-07T15:12']],
  words:[['schlimm','i rëndë','2026-11-06T11:15'],['kühlen','ftoh','2026-11-06T11:15'],['wehtun','dhemb','2026-11-06T11:15'],['gesund','i shëndetshëm','2026-11-06T11:15'],['krank','i sëmurë','2026-11-06T11:15'],['rauchen','pi duhan','2026-11-06T11:15'],
    ['sollen','duhet (sipas dikujt)','2026-11-07T15:12'],['müde','i lodhur','2026-11-07T15:12'],['trainieren','stërvitem','2026-11-07T15:12'],['verwenden','përdor','2026-11-07T15:12'],['warm halten','mbaj ngrohtë','2026-11-07T15:12'],['dringend','urgjent','2026-11-07T15:12']]
},
{
  id:'w-hotel', emoji:'🏨', color:'#D6409F', added:'2026-11-06T11:15', sq:'Hoteli', de:'Im Hotel',
  nouns:[['das','Doppelzimmer','dhoma dyshe','2026-11-06T11:15'],['das','Einzelzimmer','dhoma teke','2026-11-06T11:15'],['die','Klimaanlage','kondicioneri','2026-11-06T11:15'],['die','Lage','vendndodhja','2026-11-06T11:15'],['das','Haustier','kafsha shtëpiake','2026-11-06T11:15'],['die','Halbpension','mëngjes + darkë','2026-11-06T11:15'],['die','Vollpension','pension i plotë','2026-11-06T11:15'],['der','Schlüssel','çelësi','2026-11-06T11:15'],['die','Rezeption','recepsioni','2026-11-06T11:15'],['der','Lift','ashensori','2026-11-06T11:15']],
  words:[['kostenlos','falas','2026-11-06T11:15'],['inklusive','i përfshirë','2026-11-06T11:15'],['zentral','në qendër','2026-11-06T11:15'],['günstig','i lirë','2026-11-06T11:15'],['reservieren','rezervoj','2026-11-06T11:15'],['buchen','prenotoj','2026-11-06T11:15'],['auschecken','lëshoj dhomën','2026-11-06T11:15'],['fertig','gati','2026-11-06T11:15']]
},
{
  id:'w-stadt', emoji:'🏰', color:'#E3A008', added:'2026-11-06T11:15', sq:'Qyteti & turizmi', de:'Stadt & Tourismus',
  nouns:[['die','Sehenswürdigkeit','vendi për t’u parë','2026-11-06T11:15'],['der','Stadtrundgang','shëtitja nëpër qytet','2026-11-06T11:15'],['die','Führung','vizita me guidë','2026-11-06T11:15'],['der','Eintritt','hyrja (bileta)','2026-11-06T11:15'],['die','Ermäßigung','zbritja','2026-11-06T11:15'],['der','Komponist','kompozitori','2026-11-06T11:15'],['das','Geburtshaus','shtëpia e lindjes','2026-11-06T11:15'],['das','Museum','muzeu','2026-11-06T11:15'],['der','Dom','katedralja','2026-11-06T11:15'],['das','Konzert','koncerti','2026-11-06T11:15'],['die','Oper','opera','2026-11-06T11:15'],['die','Auskunft','informacioni','2026-11-06T11:15'],['der','Stadtplan','harta e qytetit','2026-11-06T11:15'],['die','Einkaufsstraße','rruga e pazarit','2026-11-06T11:15'],['der','Einwohner','banori','2026-11-06T11:15'],['die','Broschüre','broshura','2026-11-06T11:15'],['die','Altstadt','qyteti i vjetër','2026-11-06T11:15'],
    ['der','Stadtteil','lagjja','2026-11-07T15:12']],
  words:[['besichtigen','vizitoj','2026-11-06T11:15'],['spazieren','shëtis','2026-11-06T11:15'],['berühmt','i famshëm','2026-11-06T11:15'],['geboren','i lindur','2026-11-06T11:15'],['geöffnet','i hapur','2026-11-06T11:15']]
},
{
  id:'w-brief', emoji:'✉️', color:'#E3A008', added:'2026-11-07T15:12', sq:'Letra & e-maili', de:'Brief & E-Mail',
  nouns:[['die','Anfrage','kërkesa','2026-11-07T15:12'],['das','Angebot','oferta','2026-11-07T15:12'],['der','Absender','dërguesi','2026-11-07T15:12'],['der','Empfänger','marrësi','2026-11-07T15:12'],['der','Betreff','tema (subjekti)','2026-11-07T15:12'],['die','Anrede','përshëndetja në fillim','2026-11-07T15:12'],['der','Gruß','përshëndetja në fund','2026-11-07T15:12'],['das','Datum','data','2026-11-07T15:12'],['der','Ort','vendi (qyteti)','2026-11-07T15:12']],
  words:[]
}
];
