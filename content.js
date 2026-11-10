const topics = [
  ['Historia','Ursprung och personer','history'],
  ['Skrifter','Heliga texter','book'],
  ['Gud och människan','Tro och ansvar','spark'],
  ['Traditioner','Etik och vardagsliv','flag'],
  ['Tolkningar','Inriktningar, kön och normer','layers'],
  ['Livet efter döden','Dom och uppståndelse','sun']
];

const courses = [
  {id:'judendom', name:'Judendom', symbol:'star', color:'violet', era:'Forntida Israel och Juda', place:'Synagoga · rabbin', lessons:[
    ['Judendomen växte fram ur de forntida israeliternas traditioner. Enligt Torah slöt Gud ett förbund med Abraham. Mose ledde enligt traditionen israeliterna ut ur Egypten och tog emot Guds lag vid Sinai. De tio budorden innehåller bland annat förbud mot mord och stöld. Sara och David är också viktiga gestalter.',
     'Babylonierna förstörde det första templet omkring 586 f.Kr. Romarna förstörde det andra templet år 70 e.Kr. Därefter utvecklades rabbinsk judendom med studier, bön och religiös lag som centrala inslag. Berättelserna om Abraham och Mose har religiös betydelse. Alla detaljer kan inte bekräftas historiskt.'],
    ['Tanakh består av Torah (de fem Moseböckerna), Neviim (Profeterna) och Ketuvim (Skrifterna, där bland annat Psaltaren finns).',
     'Talmud innehåller rabbinska diskussioner och tolkningar av lag och tradition. Torah är en del av Tanakh. Talmud är en separat textsamling.'],
    ['Judendomen är monoteistisk. Gud beskrivs som skapare, rättvis och barmhärtig. Förbundet mellan Gud och det judiska folket är centralt.',
     'Människan kan välja mellan gott och ont och har ett moraliskt ansvar. Rättvisa, hjälp till andra och att följa Guds bud är viktiga teman.'],
    ['Halakha är den judiska rättstraditionen. Den rör bland annat mat, högtider och familjeliv. Sabbaten sträcker sig från fredag kväll till lördag kväll. Kosherregler handlar om vilken mat man får äta och hur den hanteras.',
     'Pesach uppmärksammar befrielsen från Egypten. Jom kippur är försoningsdagen med fokus på ånger och förlåtelse. Hur traditionerna praktiseras varierar.'],
    ['I många ortodoxa synagogor sitter kvinnor och män åtskilda vid gudstjänster och vissa religiösa roller är förbehållna män. Inom reformjudendom och många masortiska församlingar kan kvinnor vara rabbiner.',
     'Traditionella tolkningar av Tredje Moseboken förbjuder sexuella handlingar mellan män. Reformjudendom och delar av masortisk judendom accepterar samkönade relationer och äktenskap. Både tolkning och levd praktik varierar.'],
    ['Föreställningar om en kommande värld och de dödas uppståndelse förekommer. Det finns flera judiska föreställningar om vad som händer efter döden.',
     'Ofta betonas hur människan lever och handlar i detta liv.']
  ], quiz:[
    ['Vem tog enligt Torah emot lagen vid Sinai?','Mose','Abraham','David'],
    ['Vilken del av Tanakh består av de fem Moseböckerna?','Torah','Ketuvim','Neviim'],
    ['Vilken relation står centralt i judendomen?','Förbundet mellan Gud och det judiska folket','Treenigheten','Muhammeds uppenbarelser'],
    ['Vilken högtid påminner om befrielsen från Egypten?','Pesach','Jom kippur','Sabbat'],
    ['I vilken inriktning kan kvinnor vara rabbiner?','Reformjudendom','Traditionell ortodox judendom','Katolicism'],
    ['Vilken formulering beskriver judiska föreställningar om livet efter döden?','Flera föreställningar finns, bland annat om uppståndelse','Alla judar delar exakt samma detaljerade lära','Skärselden är central i alla judiska riktningar']
  ]},
  {id:'kristendom', name:'Kristendom', symbol:'cross', color:'orange', era:'Judeen under första århundradet', place:'Kyrka · präst, pastor eller biskop', lessons:[
    ['Kristendomen uppstod ur judendomen i romerska Judeen under första århundradet. Jesus från Nasaret var jude och förkunnade bland annat kärlek, förlåtelse och Guds rike. Enligt Nya testamentet korsfästes han under Pontius Pilatus.',
     'I kristen tro är Jesus uppståndelse och död avgörande för frälsningen. Paulus bidrog till att sprida rörelsen utanför judiska kretsar. Kristendomen fick en stark ställning i Romarriket under 300-talet.'],
    ['Bibeln består av Gamla och Nya testamentet. Många av Gamla testamentets skrifter motsvarar Tanakh. Indelning och antal böcker kan skilja sig mellan samfund.',
     'Nya testamentet innehåller bland annat evangelierna enligt Matteus, Markus, Lukas och Johannes, Apostlagärningarna, brev och Uppenbarelseboken. Jesus betraktas som Messias i kristendomen.'],
    ['Den klassiska treenighetsläran beskriver en enda Gud i tre personer: Fadern, Sonen och den heliga Anden. Människan är skapad till Guds avbild och har ett inneboende värde.',
     'Synd handlar om att handla i strid med Guds vilja. Frälsning handlar om räddning från synd och gemenskap med Gud. Samfund betonar tro, nåd, gärningar och sakrament på olika sätt.'],
    ['Kärleksbudet uttrycker att du ska älska din nästa som dig själv. Dopet hör till inträdet i den kristna gemenskapen. Nattvarden anknyter till Jesus sista måltid.',
     'Julen firar Jesus födelse. Påsken uppmärksammar Jesus död och uppståndelse. Fasta förekommer, och matreglernas roll varierar.'],
    ['Katolicismen betonar bland annat påven, kyrkans tradition och de sju sakramenten. Ortodox kristendom betonar bland annat liturgi, ikoner och biskopligt ledarskap. Protestantiska traditioner har rötter i reformationen och betonar ofta Bibeln, tro och nåd.',
     'Svenska kyrkan prästviger kvinnor och förrättar samkönade vigslar. Katolska och ortodoxa kyrkor prästviger inte kvinnor. Katolska kyrkan skiljer mellan läggning och sexuella handlingar och erkänner inte samkönade äktenskap i sin lära. Galaterbrevet 3:28 och Första Timotheosbrevet 2:12 är exempel på texter som har använts i olika argument om kvinnors roller.'],
    ['Uppståndelse, Guds dom och evigt liv är centrala föreställningar. Himmel och helvete tolkas på olika sätt.',
     'Inom katolicismen finns även läran om skärselden.']
  ], quiz:[
    ['Vem bidrog till att sprida den tidiga kristna rörelsen till andra folk?','Paulus','Pontius Pilatus','David'],
    ['I vilken del av Bibeln finns de fyra evangelierna?','Nya testamentet','Gamla testamentet','Talmud'],
    ['Vad uttrycker treenighetsläran?','En Gud i tre personer','Tre självständiga gudar','Tre profeter med samma uppdrag'],
    ['Vilken ritual anknyter till Jesus sista måltid?','Nattvarden','Dopet','Hajj'],
    ['Vilket samfund både prästviger kvinnor och förrättar samkönade vigslar?','Svenska kyrkan','Katolska kyrkan','Ortodoxa kyrkor'],
    ['I vilken tradition finns läran om skärselden?','Katolicism','Sunnitisk islam','Reformjudendom']
  ]},
  {id:'islam', name:'Islam', symbol:'moon', color:'green', era:'Arabiska halvön under 600-talet', place:'Moské · imam', lessons:[
    ['Enligt islamisk tradition fick Muhammed sin första uppenbarelse genom ängeln Gabriel omkring år 610. Han förkunnade att det bara finns en Gud och att människor ska handla rättvist och hjälpa fattiga.',
     'År 622 flyttade Muhammed och hans anhängare från Mecka till Medina. Flytten, hidjra, markerar den islamiska tideräkningens början. Efter Muhammeds död år 632 spreds islam. Muhammed betraktas som den sista profeten. Abraham, Mose och Jesus är också profeter i islam.'],
    ['Koranen består av 114 suror. Enligt muslimsk tro är den Guds ord, uppenbarat för Muhammed. Hadither är berättelser om vad Muhammed ska ha sagt och gjort.',
     'Sharia betecknar religiös vägledning och normer. Fiqh är den mänskliga rättsliga tolkningen av källorna. Rättsskolor kan komma fram till olika svar.'],
    ['Tawhid betyder Guds absoluta enhet. Allah är det arabiska ordet för Gud. Gud beskrivs som skapare, allsmäktig, rättvis och barmhärtig.',
     'Människan är ansvarig för sina handlingar och föds enligt islamisk lära utan ärvd arvsynd. Hon kan söka förlåtelse genom ånger och omvändelse.'],
    ['De fem pelarna brukar sammanfattas som shahada (trosbekännelse), salat (fem dagliga böner), zakat (allmosa), sawm (fasta under ramadan) och hajj (vallfärd till Mecka om man har möjlighet).',
     'Pelarna är en vanlig struktur i sunnitisk islam. Plikterna är också centrala i bredare muslimsk praktik.'],
    ['Skillnaden mellan sunni och shia går tillbaka till frågan om ledarskapet efter Muhammeds död. Sunniter erkänner de tidiga kaliferna. Shiiter betonar Alis och hans efterkommandes särskilda ställning. Båda erkänner Koranen och Muhammed som profet.',
     'Kvinnor och män har moraliskt ansvar inför Gud. Traditionell familjerätt har i vissa frågor olika regler för kvinnor och män, exempelvis i vissa arvsfall. Hijab kan vara ett frivilligt trosuttryck. Tvång beror på de sociala eller juridiska villkor som råder. Muslimska feminister argumenterar för jämställdhet genom nya tolkningar.',
     'Traditionell islamisk rätt har i regel förbjudit samkönade sexuella handlingar. Berättelsen om Lut används ofta som argument. Andra tolkningar betonar berättelsens historiska sammanhang. Synen på en handling och hur människor behandlas är två olika analysfrågor.'],
    ['Enligt traditionell islamisk tro återuppstår människan och ställs till svars inför Gud på den yttersta dagen.',
     'Jannah är paradiset. Jahannam är helvetet. Guds rättvisa och barmhärtighet är centrala för förståelsen av domen.']
  ], quiz:[
    ['Vad kallas flytten från Mecka till Medina år 622?','Hidjra','Hajj','Zakat'],
    ['Vad betyder fiqh?','Mänsklig rättslig tolkning av religiösa källor','Koranens kapitel','Guds absoluta enhet'],
    ['Vad betyder tawhid?','Guds absoluta enhet','Vallfärd','Guds förbund med det judiska folket'],
    ['Vilken pelare handlar om att ge till behövande?','Zakat','Salat','Sawm'],
    ['Vad låg historiskt bakom uppdelningen mellan sunni och shia?','Vem som skulle leda gemenskapen efter Muhammed','Vilken stad som var födelseplats för Jesus','Vilket språk som skulle användas i Koranen'],
    ['Vad betyder Jannah?','Paradiset','Helvetet','Den yttersta domen']
  ]}
];

const comparisons = [
 ['Gudssyn','En Gud. Förbundet med det judiska folket är centralt.','En Gud i tre personer enligt klassisk kristen tro.','En Gud. Tawhid betonar Guds absoluta enhet.','Alla tre är monoteistiska. Treenigheten är en särskild kristen förståelse av Guds enhet.'],
 ['Jesus','Accepteras inte som den utlovade Messias.','Guds son och Messias. Död och uppståndelse har en central roll i frälsningen.','Profet och Messias. Jesus betraktas som människa.','Titeln Messias förekommer i både kristendom och islam, men Jesus har olika ställning i de två traditionerna.'],
 ['Skrifter','Tanakh. Talmud är viktig för tolkning av lag och tradition.','Bibeln med Gamla och Nya testamentet.','Koranen. Hadither är en viktig källa till etik och rättslära.','Tanakh och Gamla testamentet överlappar. Gestalter som Abraham och Mose återkommer i alla tre, med delvis olika berättelser.'],
 ['Etik och ansvar','Förbundet, buden och halakha vägleder vardagen. Omvändelse och ett rättfärdigt liv betonas.','Kärleksbudet är centralt. Nåd, tro, gärningar och sakrament betonas olika.','Tro, handlingar och Guds barmhärtighet betonas. Fiqh är tolkning av religiös vägledning.','Alla tre betonar människans ansvar och omsorgen om andra. Rättstraditioner och förhållandet mellan bud, tro och handling skiljer sig.'],
 ['Kön och ledarskap','Kvinnliga rabbiner finns inom reformjudendom och många masortiska församlingar. Många ortodoxa församlingar har andra ämbetsregler.','Svenska kyrkan prästviger kvinnor. Katolska och ortodoxa kyrkor gör det inte.','Kvinnor och män är moraliskt ansvariga inför Gud. Religiösa och sociala roller tolkas och praktiseras olika.','Jämför konkreta församlingar och vilken auktoritet som avgör vem som får leda. Två samfund inom en religion kan ha olika regler.'],
 ['Sexualitet och normer','Traditionella tolkningar förbjuder sexuella handlingar mellan män. Vissa inriktningar accepterar samkönade vigslar.','Synen varierar mellan samfund. Svenska kyrkan förrättar samkönade vigslar.','Traditionell rättslära förbjuder vanligen samkönade sexuella handlingar. Andra tolkningar betonar historisk kontext.','Skilj mellan text, tolkning, regler för äktenskap och hur människor bemöts i praktiken.'],
 ['Livet efter döden','Flera föreställningar, bland annat om en kommande värld och uppståndelse.','Uppståndelse, dom och evigt liv. Tolkningar av himmel och helvete varierar.','Uppståndelse och yttersta dom. Jannah och Jahannam är centrala begrepp.','Uppståndelse förekommer i alla tre. Hur central och detaljerad föreställningen är varierar.'],
 ['Identitet och samhälle','Judisk identitet har också kulturella och etniska dimensioner.','Kristendomen har spridits till människor med många olika ursprung. Kyrka, samhälle och lagstiftning samspelar.','Islam har spridits till människor med många olika ursprung. Villkoren för religionsutövning varierar mellan samhällen.','Traditionella tolkningar betonar ofta att regler är bindande. Kontextuella tolkningar väger in den historiska miljön. Kultur, politik och lag påverkar hur religion praktiseras.']
];

const terms = [
 ['Monoteism','Tro på en enda Gud'],['Patriarkat','Samhällsordning där män som grupp har större makt'],
 ['Sekularisering','Process där religion får minskat inflytande inom vissa samhällsområden'],
 ['Ortodoxi','Betoning av traditionellt etablerad religiös lära'],
 ['Reforminriktning','Strävan att omtolka eller förändra religiös praktik'],
 ['Religiös auktoritet','Vem eller vad som har rätt att avgöra religiösa frågor'],
 ['Texttolkning','Hur religiösa texter förstås och ges betydelse'],
 ['Religionsfrihet','Rätten att ha, byta, utöva eller avstå från religion'],
 ['Etik','Resonemang om rätt och fel'],['Människosyn','Föreställningar om människans natur, värde och ansvar']
];

const timeline = [
 ['Babylonierna förstör det första templet','Omkring 586 f.Kr.'],
 ['Romarna förstör det andra templet','70 e.Kr.'],
 ['Kristendomen får en stark ställning i Romarriket','300-talet'],
 ['Muhammed får enligt traditionen sin första uppenbarelse','Omkring 610'],
 ['Hidjra: flytten till Medina','622'],
 ['Muhammed dör','632']
];

const writing = [
 ['Kön och ledarskap','Varför har Svenska kyrkan och Katolska kyrkan olika regler för prästvigning? Jämför med en skillnad inom judendomen.',
  'Svenska kyrkan prästviger kvinnor. Katolska kyrkan reserverar prästämbetet för män. Skillnaden hänger samman med hur kyrkorna förstår ämbetet och vilken vikt de ger traditionen. En parallell finns inom judendomen. Reformjudendom har kvinnliga rabbiner, medan många ortodoxa församlingar begränsar vissa ledarroller. Det påverkar vilka som kan representera och leda församlingen.'],
 ['Sexualitet och normer','Varför kan två grupper inom samma religion bedöma samkönade relationer på olika sätt?',
  'En grupp kan behandla traditionella föreskrifter som fortsatt bindande. En annan kan betona texternas historiska sammanhang och lyfta fram värden som kärlek och människovärde. Skillnaden handlar därmed också om vad som räknas som en auktoritativ tolkning. För samkönade par kan följden bli olika möjligheter till religiös vigsel och delaktighet i församlingen.'],
 ['Religion och samhälle','Varför räcker det sällan att förklara människors handlingar enbart med deras religion?',
  'Religion praktiseras under olika villkor. Lagar, familj, utbildning och kulturella normer påverkar vad människor kan och vill göra. En huvudduk kan för en person vara ett frivilligt trosuttryck och i en annan situation vara påtvingad. För att förstå handlingen behöver man undersöka både tolkningen och personens handlingsutrymme.']
];
