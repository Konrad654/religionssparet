// Each line has a question, its correct answer, and two alternatives.
const questionBank = {
  judendom: [
`Var växte judendomen fram?|I forntida Israel och Juda|På Arabiska halvön|I det medeltida Rom
Vad lovar Gud Abraham enligt traditionen?|Att hans efterkommande ska bli ett folk|Att han ska bygga det andra templet|Att han ska leda romarna
Vilken händelse förknippas med Mose?|Uttåget ur Egypten|Förstörelsen av det andra templet|Den protestantiska reformationen
Vilket exempel hör till de tio budorden?|Förbudet mot stöld|Vallfärden till Mecka|Fastan under ramadan
Vilka förstörde det första templet?|Babylonierna|Romarna|Israeliterna
När förstördes det andra templet?|År 70 e.Kr.|Omkring 586 f.Kr.|År 622 e.Kr.
Vilka förstörde det andra templet?|Romarna|Babylonierna|Egyptierna
Vad blev centralt i den rabbinska judendomen?|Bön, studier och tolkning av religiös lag|Dagliga offer i det andra templet|Pilgrimsfärd till Mecka
Hur skiljer man religiös tradition från historisk kunskap om Abraham?|Berättelsen är viktig för tron och historiska belägg bedöms separat|Varje detalj är bekräftad av arkeologer|En religiös berättelse kan aldrig studeras historiskt`,
`Vad heter den hebreiska bibeln inom judendomen?|Tanakh|Talmud|Halakha
Vad betyder Neviim i Tanakhs indelning?|Profeterna|Skrifterna|Lagen
I vilken del av Tanakh finns Psaltaren?|Ketuvim|Torah|Neviim
Vilka är Tanakhs tre delar?|Torah, Neviim och Ketuvim|Torah, Talmud och Halakha|Gamla testamentet, Nya testamentet och Hadith
Vad innehåller Talmud framför allt?|Rabbinska diskussioner och tolkningar|De fyra evangelierna|Enbart poesi
Hur förhåller sig Torah till Tanakh?|Torah är en av dess tre delar|Tanakh är en del av Torah|De är helt separata textsamlingar
Vad visar det att Talmud kan återge flera åsikter om en fråga?|Tolkning kan vara en diskussion med flera ståndpunkter|Alla rabbiner har alltid samma uppfattning|Judisk tradition saknar religiös lag
Vilket exempel handlar om tillämpning av en text?|Att diskutera vad vila innebär under sabbaten i dag|Att räkna hur många delar Tanakh har|Att översätta namnet Ketuvim
Hur förhåller sig Tanakh till kristendomens Gamla testamente?|Skrifterna överlappar och ordning eller omfång kan skilja sig|Böckerna är alltid identiska i antal och ordning|Tanakh motsvarar Nya testamentet`,
`Vad betyder monoteism?|Tro på en enda Gud|Tro på flera gudar|Avståndstagande från religion
Vilken kombination stämmer med judisk gudssyn?|Gud är skapare, rättvis och barmhärtig|Gud är en av flera skapargudar|Gud är ett annat namn för en rabbin
Vad är ett förbund i det här sammanhanget?|En särskild relation mellan Gud och folket|Ett annat ord för tempel|En judisk matregel
Vad innebär moraliskt ansvar?|Att människan ansvarar för hur hon väljer att handla|Att varje handling bestäms av matregler|Att människans val saknar betydelse
Vilken handling illustrerar det etiska ansvaret?|Att hjälpa en människa i behov|Att känna till ett bud utan att bry sig om följderna|Att lämna alla beslut åt en religiös ledare
Vad innebär omvändelse i praktiken?|Att erkänna en orätt och försöka ändra sitt handlande|Att automatiskt byta religion|Att återuppbygga templet
Hur hänger fri vilja och ansvar ihop i lektionen?|Möjligheten att välja gör människan ansvarig för sina val|Fri vilja gör alla val moraliskt likvärdiga|Moraliskt ansvar kräver att människan saknar val
Vilken fråga handlar om människosyn?|Vad innebär det att människan kan välja mellan gott och ont?|Hur många delar har Tanakh?|När börjar sabbaten?
Vilken handling kan förena ett religiöst bud och ett etiskt ideal?|Att avstå från stöld och respektera andras egendom|Att avgöra vem som byggde en synagoga|Att räkna antalet böcker i Torah`,
`När börjar sabbaten?|Fredag kväll|Lördag morgon|Söndag kväll
När slutar sabbaten?|Lördag kväll|Fredag kväll|Söndag morgon
Vad avser kosher i lektionen?|Mat som följer judiska kostregler|Judisk försoningsdag|En samling bibeltolkningar
Vad är halakha?|Den judiska rättstraditionen|En judisk högtid|En del av Tanakh
Vad står i centrum på Jom kippur?|Ånger, förlåtelse och självrannsakan|Befrielsen från Egypten|Minnet av Jesu födelse
Vad kallas den judiska samlingsplatsen?|Synagoga|Moské|Katedral
Vad gör en rabbin bland annat?|Undervisar och tolkar religiös tradition|Avgör den islamiska kalendern|Leder varje judisk församling i världen
Hur kan sabbaten stärka en gemenskap?|Den skapar en återkommande tid för vila och gemensamma traditioner|Den gör alla församlingars tolkningar identiska|Den firas bara en gång om året
Vad är ett exempel på variation i levd religion?|Två judiska familjer håller sabbat på olika sätt|Ordet sabbat betyder samma sak varje vecka|Pesach har historisk anknytning till uttåget`,
`Vilken inriktning lägger ofta särskild vikt vid traditionell halakha?|Ortodox judendom|Reformjudendom|Luthersk kristendom
I vilka församlingar kan kvinnor också vara rabbiner enligt lektionen?|Många masortiska församlingar|Samtliga ortodoxa församlingar|Katolska församlingar
Vad förekommer i många ortodoxa synagogor?|Kvinnor och män sitter åtskilda vid gudstjänst|Alla gudstjänster leds av samma rabbin|Talmud ersätts med Nya testamentet
Vilken text har använts i traditionella argument om sexuella handlingar mellan män?|Tredje Moseboken|Apostlagärningarna|Galaterbrevet
Vilket beslut skiljer vissa judiska församlingar åt?|Om de förrättar samkönade vigslar|Om Tanakh innehåller Torah|Om Mose förekommer i Torah
Vad undersöker en kontextuell tolkning?|Vilken historisk situation texten hör till|Endast antalet verser i texten|Bara hur texten läses upp
Vad handlar religiös auktoritet om?|Vem eller vad som avgör hur en religiös regel ska förstås|Vilken församling som har flest medlemmar|Vilken stad som har störst synagoga
Varför säger en regel om vigsel inte allt om levd religion?|Hur personer bemöts och deltar kan variera i praktiken|Varje medlem följer alltid alla regler på exakt samma sätt|Vigselregler visar alltid en persons privata övertygelse
Vilken jämförelse visar skillnader inom judendomen?|Kvinnliga rabbiner i reformjudendom och ämbetsregler i ortodox judendom|Judisk sabbat och kristen påsk|Torah och Koranen som religiösa texter`,
`Vad är ett exempel på en judisk föreställning om livet efter döden?|En kommande värld|Treenigheten|Reformationen
Vilket begrepp betyder att de döda åter får liv?|Uppståndelse|Sekularisering|Uppenbarelse
Vad betonas ofta i judendomen även när efterlivet diskuteras?|Hur människan handlar i det här livet|Att alla måste beskriva efterlivet exakt likadant|Att moraliska handlingar bara räknas efter döden
Vad skiljer en kommande värld från uppståndelse som begrepp?|Det första avser en framtida tillvaro och det andra att de döda åter får liv|Båda orden betyder judisk matlag|Uppståndelse är namnet på en kalender
Vilket sätt att formulera sig är mest precist?|Föreställningar om uppståndelse förekommer i judisk tradition|Alla judar tror exakt samma sak om döden|Judisk tradition har aldrig behandlat döden
Vilken likhet kan man hitta med kristendom och islam?|Föreställningar om uppståndelse förekommer|Alla tre har en identisk lära om skärselden|Alla tre ger exakt samma beskrivning av domen
Vilken fråga skiljer mellan tradition och individ?|Hur ser olika judar på uppståndelsen?|Hur stavas ordet uppståndelse?|Vilket språk är ordet uppståndelse skrivet på?
Vilket exempel visar fokus på livet här och nu?|Att gottgöra en orätt man har begått|Att räkna ut datum för de dödas uppståndelse|Att avgöra hur alla människor ska beskriva efterlivet
Vad bör man jämföra för att bedöma hur viktig en lära om efterlivet är?|Vilken plats läran har i olika riktningars tro och praktik|Om samma ord finns i två ordböcker|Hur många bokstäver begreppet har`
  ],
  kristendom: [
`När uppstod kristendomen?|Under första århundradet e.Kr.|Under 600-talet e.Kr.|Under 1500-talet
Var verkade den tidiga Jesusrörelsen?|I romerska Judeen och dess omgivningar|På den arabiska halvön|I det medeltida Sverige
Vilken religiös tradition tillhörde Jesus från Nasaret?|Judendomen|Romersk katolicism|Sunnitisk islam
Vilket ämne hör till Jesu förkunnelse?|Guds rike|De fem pelarna|Sakramentens antal under reformationen
Vem var romersk ståthållare vid korsfästelsen enligt Nya testamentet?|Pontius Pilatus|Paulus|Petrus
Vilken händelse efter korsfästelsen står i centrum för kristen tro?|Jesu uppståndelse|Förstörelsen av det första templet|Hidjra
Vad kännetecknade de första anhängarna?|De tillhörde den judiska miljö där rörelsen uppstod|De hade redan delat upp sig i katoliker och protestanter|De hade reformationen som gemensam utgångspunkt
När fick kristendomen en stark ställning i Romarriket?|Under 300-talet|Under 600-talet|Under 1500-talet
Vad är ett exempel på att skilja historia från troslära?|Att skilja den tidiga rörelsens spridning från tron på uppståndelsen|Att behandla varje trosutsaga som ett daterat arkeologiskt fynd|Att utgå från att historiker kan avgöra den religiösa innebörden av frälsning`,
`Vilka är Bibelns två huvuddelar?|Gamla testamentet och Nya testamentet|Torah och Talmud|Evangelierna och Gamla testamentet
Vilka texter motsvarar till stor del judendomens Tanakh?|Gamla testamentet|Nya testamentet|Paulus brev
Vilka är de fyra evangelierna?|Matteus, Markus, Lukas och Johannes|Matteus, Paulus, Petrus och Johannes|Markus, Lukas, Paulus och Petrus
Vad skildrar evangelierna framför allt?|Jesu liv, förkunnelse, död och uppståndelse|Den protestantiska reformationen|Den islamiska tideräkningens början
Vad handlar Apostlagärningarna om?|Den tidiga kristna rörelsen|Det första templets förstörelse|Påvens roll under reformationen
Vilken typ av text skrev Paulus i Nya testamentet?|Brev|En av Moseböckerna|Ett av de fyra evangelierna
Vad innehåller Uppenbarelseboken bland annat?|Symboliska syner om kamp, dom och hopp|En redogörelse för reformationen|En katalog över judiska matregler
Varför kan två kristna biblar skilja sig åt i antal böcker?|Olika traditioner avgränsar vissa delar av Gamla testamentet olika|De fyra evangelierna räknas aldrig som bibelböcker|Alla samfund har valt olika grundreligioner
Vad visar jämförelsen av Tanakh och Bibeln?|En gemensam text kan få olika roll beroende på sammanhanget|En gemensam text leder alltid till samma troslära|Tanakh innehåller alla brev från Paulus`,
`Vilka är treenighetens tre personer?|Fadern, Sonen och den heliga Anden|Jesus, Maria och Paulus|Fadern, Mose och den heliga Anden
Vad menas med att människan är skapad till Guds avbild?|Människan har ett värde som hör till hennes relation till Gud|Människan är själv en av treenighetens personer|Människan måste fysiskt se ut som Gud
Vad betyder synd här?|Att handla i strid med Guds vilja|Att tillhöra ett visst kyrkosamfund|Att fira nattvard
Vad är frälsning i kristen tro?|Räddning från synd och gemenskap med Gud|Ett annat ord för kyrkobyggnad|Kravet att följa judiska matregler
Vilken roll har Jesus i kristen frälsningslära?|Hans död och uppståndelse står i centrum|Han har bara betydelse för kalendern|Han har ingen betydelse för människans relation till Gud
Vad betyder nåd i den här lektionen?|Guds gåva som människan tar emot|Ett pris människan betalar för förlåtelse|Ett kyrkligt ämbete
Hur kan människovärde och ansvar höra ihop?|Människan har värde och ansvar för hur hon behandlar andra|Människans värde beror helt på antal goda gärningar|Människovärde betyder att andra människors behov saknar betydelse
Vad kan skilja olika kristna frälsningsläror åt?|Hur de betonar tro, nåd, gärningar och sakrament|Om de fyra evangelierna handlar om Jesus|Om kristendomen har någon tanke om Gud
Vilket begrepp beskriver det återupprättade förhållandet mellan Gud och människa?|Försoning|Sekularisering|Pilgrimsfärd`,
`Vad innebär kärleksbudet i lektionen?|Att älska sin nästa som sig själv|Att bara hjälpa den egna församlingen|Att alla måste ha samma kyrkliga roll
Vad hör dopet samman med?|Inträde i den kristna gemenskapen|De dödas uppståndelse på den yttersta dagen|Den islamiska vallfärden
Vad firas vid jul?|Jesu födelse|Jesu korsfästelse|Den sista måltiden
Vad står i centrum vid kristen påsk?|Jesu död och uppståndelse|Uttåget ur Egypten som enda tema|Jesu födelse
Vilka två sakrament räknar Svenska kyrkan med?|Dop och nattvard|Bikt och vigsel|Dop och prästvigning
Hur många sakrament räknar Katolska kyrkan med?|Sju|Två|Fem
Vilken handling är ett sakrament i Katolska kyrkan utöver dop och nattvard?|Äktenskapet|Julfirandet|Predikan
Vilken slutsats är rimlig om kristna kosttraditioner?|Fasta förekommer och hur den praktiseras varierar|Alla kyrkor har identiska matregler|Kristen fasta förekommer aldrig
Vad är ett exempel på att jämföra samma ritual mellan kyrkor?|Att undersöka hur nattvarden firas och tolkas i två samfund|Att jämföra judiska matregler med antalet kyrkobyggnader|Att lista namn på påvar utan att beskriva någon ritual`,
`Vilken gren tillhör Svenska kyrkan?|Protestantisk, evangelisk-luthersk kristendom|Romersk katolicism|Ortodox kristendom
Vilken kyrka erkänner påven som sitt högsta synliga kyrkliga ämbete?|Katolska kyrkan|Svenska kyrkan|De östortodoxa kyrkorna
Vad är typiskt för ortodox kristendom i lektionen?|Liturgi, ikoner och biskopligt ledarskap|Ledarskap genom påven i Rom|Lutherska bekännelseskrifter som gemensam grund
Vilken historisk process förknippas med protestantismens uppkomst?|Reformationen|Hidjra|Förstörelsen av andra templet
Vilken kyrka räknar äktenskapet som ett av sju sakrament?|Katolska kyrkan|Svenska kyrkan|Båda kyrkorna räknar exakt sju
Hur skiljer sig Svenska kyrkan och Katolska kyrkan i frågan om kvinnliga präster?|Svenska kyrkan prästviger kvinnor och Katolska kyrkan reserverar prästämbetet för män|Båda kyrkorna reserverar prästämbetet för män|Katolska kyrkan prästviger kvinnor och Svenska kyrkan reserverar prästämbetet för män
Vilken text lyfter fram andlig jämlikhet i Kristus?|Galaterbrevet 3:28|Första Timotheosbrevet 2:12|Apostlagärningarna som helhet
Vilken text har använts för att begränsa kvinnors undervisande roll?|Första Timotheosbrevet 2:12|Galaterbrevet 3:28|Psaltaren som helhet
Varför kan två kristna kyrkor med Bibeln som grund fatta olika beslut om ämbeten?|De ger kyrklig tradition och olika bibeltolkningar olika vikt|De måste ge alla religiösa texter exakt samma betydelse|De utgår från att Bibeln saknar betydelse`,
`Vad innebär uppståndelse?|Att de döda åter får liv|Att en kyrka byter samfund|Att synden saknar betydelse
Vad handlar Guds dom om?|Att människans liv ställs inför Guds rättvisa|Att en präst väljer vilka som får gå i kyrkan|Att ett samfund byter bibelöversättning
Vad beskriver evigt liv ofta i kristen tradition?|En fortsatt gemenskap med Gud|Ett liv där människan måste upprepa dopet varje år|Ett liv utan relation till Gud
Vilket begrepp beskriver katolsk rening efter döden?|Skärselden|Nattvarden|Hidjra
Hur förhåller sig skärselden till helvetet enligt katolsk lära?|Skärselden är en rening inför gemenskap med Gud|Skärselden är ett annat ord för helvetet|De är två namn för samma kristna högtid
Vilken koppling finns mellan påsk och hoppet om efterlivet?|Jesu uppståndelse är grund för hoppet om människans uppståndelse|Påsken handlar bara om kyrkans organisation|Jesu uppståndelse handlar enbart om hur jul firas
Vilken skillnad kan finnas i hur helvetet tolkas?|Det kan betonas som skilsmässa från Gud eller skildras med andra bilder|Alla kyrkor tolkar varje bild exakt likadant|Begreppet förekommer enbart i judisk tradition
Vilken likhet har klassisk kristen och islamisk lära om livet efter döden?|Båda betonar uppståndelse och dom|Båda har katolsk skärseldslära|Båda utgår från samma syn på Jesu gudomlighet
Vilken fråga hjälper dig jämföra läror om efterlivet?|Vilken grund har hoppet om uppståndelse i varje tradition?|Hur många kyrkor finns i Sverige?|Vilket samfund har flest religiösa högtider?`
  ],
  islam: [
`Var växte islam fram?|På Arabiska halvön|I romerska Judeen|I forntida Juda
När började Muhammed enligt traditionen få uppenbarelser?|Omkring 610|Omkring 586 f.Kr.|År 632
Vem förmedlade enligt traditionen den första uppenbarelsen?|Ängeln Gabriel|Profeten Mose|Kalifen Ali
Vad förkunnade Muhammed bland annat?|Att Gud är en och att människor ska hjälpa fattiga|Att det finns flera skapargudar|Att det andra templet måste återuppbyggas
I vilken stad mötte Muhammeds tidiga förkunnelse motstånd?|Mecka|Medina|Rom
Vart flyttade Muhammed och hans anhängare vid hidjra?|Till Medina|Till Jerusalem|Till Rom
Vilken händelse markerar början på den islamiska tideräkningen?|Hidjra år 622|Muhammeds död år 632|Förstörelsen av det andra templet år 70
Vad hände år 632?|Muhammed dog|Muhammed flyttade till Medina|Muhammed fick enligt traditionen sin första uppenbarelse
Vilken ställning har Muhammed i islam?|Den sista profeten|Den enda profet som erkänns|En av tre gudomliga personer`,
`Vilken är islams heliga skrift?|Koranen|Talmud|Nya testamentet
Vad är en sura?|Ett kapitel i Koranen|En islamisk rättsskola|En av de fem pelarna
Hur många suror finns i Koranen?|114|70|12
Hur förstås Koranen enligt muslimsk tro?|Som Guds ord uppenbarat för Muhammed|Som ett brev skrivet av Paulus|Som en samling enbart rabbinska tolkningar
Vad är en hadith?|En berättelse om vad Muhammed ska ha sagt eller gjort|Ett kapitel i Torah|Ett namn på den dagliga bönen
Vad avser sharia i den här lektionen?|Religiös vägledning och normer|En historisk flytt mellan två städer|En berättelse om en enskild profet
Varför kan två rättsskolor göra olika bedömningar?|De tolkar och väger källorna på olika sätt|Alla använder alltid exakt samma tolkningsmetod|Fiqh utesluter all mänsklig tolkning
Vilken formulering skiljer korrekt på Koranen och hadither?|Koranen förstås som uppenbarelse och hadither berättar om Muhammeds exempel|Hadither är ett annat ord för Koranens kapitel|Koranen är en underavdelning i varje hadithsamling
Vad är ett exempel på mänsklig tolkning?|En rättslärd argumenterar för hur en norm ska tillämpas|Att Koranen i muslimsk tro är Guds ord|Att räkna Koranens suror`,
`Vad betyder det arabiska ordet Allah?|Gud|Profet|Vägledning
Vilken roll har Gud i islamisk gudssyn?|Skapare, rättvis och barmhärtig|En av flera självständiga skapare|En mänsklig lagtolkare
Vilket påstående stämmer om ärvd arvsynd i islamisk lära?|Människan föds utan ärvd arvsynd|Arvsynd är en av de fem pelarna|Människan kan ärva en annan persons gärningar som sitt eget ansvar
Hur kan en människa söka förlåtelse?|Genom ånger och omvändelse|Enbart genom att räkna sina goda gärningar|Genom att lägga ansvaret på någon annan
Vad innebär människans moraliska ansvar?|Hon står till svars för sina handlingar|Hennes handlingar saknar betydelse|Bara religiösa ledare har ansvar inför Gud
Vilken jämförelse av gudssyn är riktig?|Islam och judendom betonar Guds enhet och kristen treenighetslära beskriver en Gud i tre personer|Bara islam är monoteistisk|Alla tre religionerna använder treenigheten
Vilken roll har Jesus i islam?|Profet och Messias|Gud och skapare|En av de tidiga kaliferna
Hur kan rättvisa och barmhärtighet relateras?|Människans val har betydelse och hon kan söka förlåtelse|Förlåtelse betyder att handlingar aldrig spelar roll|Guds rättvisa utesluter enligt islam all möjlighet till ånger
Vilken fråga handlar om människosyn i islam?|Vilket ansvar har människan inför Gud?|Hur många suror har Koranen?|När inträffade hidjra?`,
`Vad är shahada?|Trosbekännelsen|Fastan|Vallfärden
Vad är salat?|Den rituella bönen|Allmosan|En hadithsamling
Hur många dagliga rituella böner föreskrivs?|Fem|Två|Sju
Vad är sawm?|Fastan|Trosbekännelsen|Vallfärden
Under vilken månad sker den föreskrivna fastan?|Ramadan|Januari varje år|Månaden som alltid motsvarar juli
Vad är hajj?|Vallfärden till Mecka|Flytten till Medina år 622|Den veckovisa vilodagen
Vem förväntas göra hajj?|Den som har möjlighet|Varje muslim varje år oavsett möjlighet|Endast en religiös ledare
Hur kan zakat kopplas till etik?|Det religiösa ansvaret omfattar stöd till behövande|Det är en ritual utan koppling till ekonomiskt ansvar|Det innebär att alla pengar lämnas till en imam
Varför kan de fem pelarna beskrivas med en precisering om sunni?|Uppräkningen är vanlig i sunnitisk undervisning och flera plikter är centrala också i shia|Shiamuslimer känner varken till bön eller fasta|Alla muslimska traditioner ordnar sina trosplikter på exakt samma sätt`,
`Vilken person betonar shiamuslimer särskilt i frågan om ledarskap?|Ali|Pontius Pilatus|Paulus
Vad har sunni och shia gemensamt enligt lektionen?|Koranen och tron på Muhammed som profet|En identisk uppfattning om de första ledarna|Alla juridiska tolkningar
Vad innebär traditionella islamiska arvsregler enligt exemplet?|Andelarna kan skilja mellan könen i vissa arvsfall|Kvinnor är alltid helt uteslutna från arv|En man får alltid dubbelt så stor andel i alla fall
Varför kan någon välja att bära hijab?|Som uttryck för tro eller religiös identitet|För att alla stater har samma lag|För att varje muslim tolkar klädregler exakt likadant
Vad behöver man undersöka för att skilja frivillig hijab från tvång?|Vilken möjlighet personen har att själv välja|Enbart huvuddukens färg|Om personen bor i en storstad
Vad vill muslimska feminister i lektionens exempel visa?|Att jämställdhet kan förenas med nya tolkningar av religiösa källor|Att religiösa texter aldrig tolkas|Att alla rättsskolor redan är överens
Vilken berättelse används ofta i traditionella argument om samkönade handlingar?|Berättelsen om Lut|Berättelsen om Paulus resor|Berättelsen om Muhammeds flytt till Medina
Vilken fråga ställer en kontextuell läsning av berättelsen om Lut?|Vilken situation skildrar texten och hur liknar den dagens relationer?|Hur många människor kan texten förbjuda från att delta i gudstjänst?|Vilket datum ska fastan börja?
Varför skiljer man på religiös norm och bemötande?|En uppfattning om en handling säger inte exakt hur en person bemöts|Ett förbud beskriver alltid alla personliga relationer|Bemötandet av en person avgör vilken text som är helig`,
`Vad händer enligt islamisk tro vid den yttersta domen?|Människan ställs till svars inför Gud|Människan blir ansvarig inför enbart religiösa ledare|Människan förlorar allt ansvar för sina val
Vad betyder Jahannam?|Helvetet|Paradiset|Försoningsdagen
Vilken roll har uppståndelsen?|De döda åter får liv och står till svars inför Gud|Den beskriver en flytt från Mecka till Medina|Den betecknar en samling hadither
Vilka egenskaper hos Gud är centrala för domen?|Rättvisa och barmhärtighet|Mänsklig makt och rikedom|Tystnad och likgiltighet
Vad visar sambandet mellan domen och vardagsetiken?|Handlingar i detta liv har moralisk betydelse|Vardagliga val är helt oberoende av religiöst ansvar|Endast en persons samhällsställning har betydelse
Vilken betydelse har ånger i lektionen?|Den hör samman med möjligheten att söka förlåtelse|Den ersätter alla val i vardagen|Den är namnet på en plats efter döden
Vad delar islam med kristen tradition i synen på efterlivet?|Föreställningar om uppståndelse och Guds dom|Katolsk skärseldslära|Samma förståelse av Jesu roll i frälsningen
Hur kan man jämföra islam och judendom på ett precist sätt?|Båda har föreställningar om uppståndelse men de ges olika plats i traditionerna|Alla judiska och muslimska grupper har identiska läror om efterlivet|Bara judendomen har någon föreställning om människans ansvar
Vilken fråga rör den islamiska läran om efterlivet snarare än historia?|Hur hänger Guds dom ihop med människans ansvar?|När dog Muhammed?|Vilken väg tog Muhammed till Medina?`
  ]
};

function lessonQuestions(course, index) {
  return [course.quiz[index], ...questionBank[course.id][index].split('\n').map(line => line.split('|'))];
}
