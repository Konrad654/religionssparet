// Vector puppet: independent joints, eyelids and props, no sprite frames.
let owlIdentity=0;
function owlCharacter(mood='idle'){
const id='owl-'+(++owlIdentity);
const svg="<svg class=\"owl-puppet\" viewBox=\"0 0 320 340\" fill=\"none\" aria-hidden=\"true\">\n<defs>\n<linearGradient id=\"UID-feather\" x1=\"120\" y1=\"50\" x2=\"210\" y2=\"210\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#cc945c\"/><stop offset=\"1\" stop-color=\"#9b6038\"/></linearGradient>\n<linearGradient id=\"UID-cream\" x1=\"160\" y1=\"60\" x2=\"160\" y2=\"278\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#fff6dd\"/><stop offset=\"1\" stop-color=\"#f6d59d\"/></linearGradient>\n<linearGradient id=\"UID-cape\" x1=\"70\" y1=\"170\" x2=\"240\" y2=\"280\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#347699\"/><stop offset=\"1\" stop-color=\"#173c68\"/></linearGradient>\n<linearGradient id=\"UID-book\" x1=\"80\" y1=\"192\" x2=\"145\" y2=\"264\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#a46b3d\"/><stop offset=\"1\" stop-color=\"#704126\"/></linearGradient>\n</defs>\n<ellipse class=\"owl-ground-shadow\" cx=\"160\" cy=\"315\" rx=\"76\" ry=\"10\" fill=\"#211754\" fill-opacity=\".2\"/>\n<g class=\"owl-celebration\">\n<g class=\"owl-spark\" style=\"--sx:-37px;--sy:-46px;--sr:-25deg\"><path d=\"m72 103 4 11 11 4-11 4-4 11-4-11-11-4 11-4z\" fill=\"#f4c85e\"/></g>\n<g class=\"owl-spark\" style=\"--sx:28px;--sy:-53px;--sr:35deg\"><path d=\"m249 80 4 11 11 4-11 4-4 11-4-11-11-4 11-4z\" fill=\"#f4c85e\"/></g>\n<g class=\"owl-spark\" style=\"--sx:35px;--sy:-26px;--sr:80deg\"><rect x=\"266\" y=\"180\" width=\"9\" height=\"17\" rx=\"4.5\" fill=\"#70c8e1\"/></g>\n<g class=\"owl-spark\" style=\"--sx:-33px;--sy:-15px;--sr:-65deg\"><rect x=\"47\" y=\"204\" width=\"9\" height=\"17\" rx=\"4.5\" fill=\"#eaa58d\"/></g>\n<g class=\"owl-spark\" style=\"--sx:15px;--sy:-50px;--sr:60deg\"><circle cx=\"205\" cy=\"54\" r=\"5\" fill=\"#eaa58d\"/></g>\n</g>\n<g class=\"owl-action-motion\"><g class=\"owl-breathe\">\n<g class=\"owl-cape\">\n<path d=\"M104 167C80 175 55 210 35 257c20 27 58 30 88 17h75c34 13 67 8 88-17-22-48-44-82-71-90Z\" fill=\"url(#UID-cape)\"/>\n<path d=\"M103 177c-26 20-44 49-60 79m174-79c25 20 45 52 61 79\" stroke=\"#eec872\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n<path d=\"M83 213c-11 21-15 40-13 57m166-57c11 21 15 40 13 57\" stroke=\"#102e53\" stroke-opacity=\".35\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n</g>\n<g class=\"owl-foot owl-foot-left\"><path d=\"m130 278-3 23-13 4c-7 3-6 9 1 9h31c7 0 8-7 1-10l-6-3 2-22\" fill=\"#eea936\"/><path d=\"M125 307v7m12-7v7\" stroke=\"#cd821f\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>\n<g class=\"owl-foot owl-foot-right\"><path d=\"m178 279 1 22-7 4c-6 3-5 9 2 9h32c7 0 8-6 1-9l-14-4-2-23\" fill=\"#eea936\"/><path d=\"M184 307v7m12-7v7\" stroke=\"#cd821f\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>\n<path d=\"M94 185c-12 27-15 64 0 89 15 26 115 26 132 0 16-24 10-65-1-89-29-18-104-18-131 0Z\" fill=\"url(#UID-feather)\"/>\n<path d=\"M119 176c-6 27-28 46-26 77 3 29 28 38 67 38s65-9 68-38c2-31-20-50-26-77Z\" fill=\"url(#UID-cream)\"/>\n<path d=\"m130 241 8 6 8-6m9 20 8 6 8-6m11-20 8 6 8-6\" stroke=\"#d7b47f\" stroke-opacity=\".55\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M101 177c13 16 33 23 59 24 28-1 48-8 60-24l-16-11h-89Z\" fill=\"#28618a\"/>\n<path d=\"M107 178c18 12 35 17 53 18 21-1 39-7 53-18\" stroke=\"#eec872\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<circle cx=\"160\" cy=\"193\" r=\"13\" fill=\"#1e537d\" stroke=\"#efcb74\" stroke-width=\"4\"/>\n<path d=\"m160 184 2.6 5.7 6.2.8-4.5 4.3 1.1 6.2-5.4-3-5.4 3 1.1-6.2-4.5-4.3 6.2-.8Z\" fill=\"#f6d78b\"/>\n<g class=\"owl-book\"><g transform=\"rotate(-13 117 239)\">\n<path d=\"M81 199q0-7 7-7h53q7 0 7 7v72H88q-7 0-7-7Z\" fill=\"#573724\"/>\n<path d=\"M88 198h52v68H88q-4 0-4-4v-60q0-4 4-4Z\" fill=\"#f7e3bc\"/>\n<path d=\"M91 202h51q5 0 5 5v65H91q-7 0-7-7v-56q0-7 7-7Z\" fill=\"url(#UID-book)\"/>\n<path d=\"M92 205v61\" stroke=\"#b68553\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M126 214v35m-11-24h23\" stroke=\"#f4d180\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<path d=\"m108 271-3 15 9-4 5 5 3-16\" fill=\"#efbd55\"/></g>\n<path d=\"M92 216c-13-6-21 2-19 14-6 3-6 10 0 14-4 8 2 14 10 13 7 5 20 0 23-8l-2-11 11 2c8 1 11-8 4-12Z\" fill=\"url(#UID-feather)\"/>\n<path d=\"m84 234 13 6m-16 4 13 5\" stroke=\"#945b34\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>\n<g class=\"owl-wing-right\"><path d=\"M219 188c17-4 29 12 31 27 8 15 5 34-2 40-4 5-10 3-11-3-4 7-11 4-11-2-7 5-12 0-11-6l-8-26c-4-12 0-25 12-30Z\" fill=\"url(#UID-feather)\"/><path d=\"m227 227 9 20m1-24 8 23\" stroke=\"#925a33\" stroke-width=\"3\" stroke-linecap=\"round\"/></g>\n<g class=\"owl-head-look\"><g class=\"owl-head-motion\">\n<path d=\"M82 66 74 40q18 14 35 12l4-23q16 18 30 17 15-11 18-27 15 9 18 24 16-1 29-19l-1 25q19-9 33-7l-9 25c22 15 29 35 26 60-3 35-31 57-96 57-64 0-94-22-97-57-2-25 4-45 18-61Z\" fill=\"url(#UID-feather)\"/>\n<path d=\"M160 78c-21-27-53-27-70-4-23 30-11 69 13 84 25 16 89 16 114 0 24-15 36-54 13-84-17-23-49-23-70 4Z\" fill=\"url(#UID-cream)\"/>\n<ellipse cx=\"99\" cy=\"135\" rx=\"14\" ry=\"7\" fill=\"#e4b184\" fill-opacity=\".48\"/><ellipse cx=\"221\" cy=\"135\" rx=\"14\" ry=\"7\" fill=\"#e4b184\" fill-opacity=\".48\"/>\n<g class=\"owl-eye-open\"><ellipse cx=\"122\" cy=\"105\" rx=\"26\" ry=\"29\" fill=\"#fffdf5\"/><ellipse cx=\"198\" cy=\"105\" rx=\"26\" ry=\"29\" fill=\"#fffdf5\"/>\n<g class=\"owl-gaze\"><g class=\"owl-pupil-motion\">\n<ellipse cx=\"126\" cy=\"107\" rx=\"15\" ry=\"20\" fill=\"#765033\"/><ellipse cx=\"194\" cy=\"107\" rx=\"15\" ry=\"20\" fill=\"#765033\"/>\n<ellipse cx=\"128\" cy=\"108\" rx=\"9\" ry=\"14\" fill=\"#282d31\"/><ellipse cx=\"192\" cy=\"108\" rx=\"9\" ry=\"14\" fill=\"#282d31\"/>\n<circle cx=\"131\" cy=\"99\" r=\"5\" fill=\"white\"/><circle cx=\"195\" cy=\"99\" r=\"5\" fill=\"white\"/><circle cx=\"122\" cy=\"114\" r=\"2.5\" fill=\"#c49a63\"/><circle cx=\"186\" cy=\"114\" r=\"2.5\" fill=\"#c49a63\"/>\n</g></g></g>\n<g class=\"owl-eye-closed\" stroke=\"#43382e\" stroke-width=\"5\" stroke-linecap=\"round\"><path d=\"M102 107q20 16 40 0m36 0q20 16 40 0\"/></g>\n<g class=\"owl-eye-smile\" stroke=\"#43382e\" stroke-width=\"5\" stroke-linecap=\"round\"><path d=\"M102 111q20-25 40 0m36 0q20-25 40 0\"/></g>\n<g class=\"owl-brows\" stroke=\"#795034\" stroke-width=\"5\" stroke-linecap=\"round\"><path class=\"owl-brow-left\" d=\"M103 68q17-9 32-1\"/><path class=\"owl-brow-right\" d=\"M185 67q16-8 32 1\"/></g>\n<path d=\"M158 124c-4 0-13 5-12 10l10 15q4 6 8 0l10-15c1-5-8-10-12-10Z\" fill=\"#eaa433\"/>\n<path d=\"M147 132q13 9 26 0c-1 12-8 20-13 20s-12-8-13-20Z\" fill=\"#bf642b\"/><path d=\"m148 131 12 9 12-9\" fill=\"#f8c65b\"/>\n<g stroke=\"#29363d\" stroke-width=\"5\" stroke-linecap=\"round\"><circle cx=\"122\" cy=\"104\" r=\"33\"/><circle cx=\"198\" cy=\"104\" r=\"33\"/><path d=\"M155 105q5-5 10 0M89 101l-12-5m154 5 12-5\"/></g>\n<path d=\"M98 88q6-11 18-12m61 12q6-11 18-12\" stroke=\"white\" stroke-opacity=\".45\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</g></g>\n</g></g></svg>";
return '<button type="button" class="owl-character" data-mood="'+mood+'" data-owl-action="wave" aria-label="Hälsa på ugglan">'+svg.replaceAll('UID',id)+'</button>';
}
function mascotMessage(message,mood='idle'){
return '<div class="mascot-message" data-owl-host>'+owlCharacter(mood)+'<p class="owl-speech" data-owl-speech aria-live="polite">'+message+'</p></div>';
}
const owlReplies={
wave:['Hej! Vad ska vi lära oss i dag?','En fråga i taget. Jag är med dig!','Redo? Nu tar vi nästa steg.'],
think:['Jag funderar med dig. Vilka ledtrådar finns i frågan?','Ta den tid du behöver. Försök koppla begreppet till ett exempel.'],
celebrate:['Det här firar vi!','Du lär dig mer för varje steg.']
};
const owlDurations={wave:1900,think:2800,celebrate:1900};
const owlTimers=new WeakMap();
let owlReplyIndex=0;
function settleOwl(character){
if(!character?.isConnected)return;
character.dataset.mood='idle';
const host=character.closest('[data-owl-host]');
clearTimeout(owlTimers.get(host));
owlTimers.delete(host);
}
function playOwl(host,mood,message){
if(!host||!owlDurations[mood])return;
const character=host.querySelector('.owl-character');
if(!character)return;
clearTimeout(owlTimers.get(host));
character.dataset.mood=mood;
character.style.setProperty('--owl-look-x','0px');
character.style.setProperty('--owl-look-y','0px');
character.style.setProperty('--owl-look-angle','0deg');
const puppet=character.querySelector('.owl-puppet');
puppet.replaceWith(puppet.cloneNode(true));
host.querySelector('[data-owl-speech]').textContent=message;
owlTimers.set(host,setTimeout(()=>settleOwl(character),owlDurations[mood]+80));
}
document.addEventListener('click',event=>{
const trigger=event.target.closest('[data-owl-action]');
if(!trigger)return;
const mood=trigger.dataset.owlAction,replies=owlReplies[mood];
if(replies)playOwl(trigger.closest('[data-owl-host]'),mood,replies[owlReplyIndex++%replies.length]);
});
document.addEventListener('animationend',event=>{
if(event.target.matches('.owl-action-motion'))settleOwl(event.target.closest('.owl-character'));
});
document.addEventListener('pointermove',event=>{
if(event.pointerType==='touch'||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
const character=event.target.closest('.owl-character');
if(!character||character.dataset.mood!=='idle')return;
const rect=character.getBoundingClientRect();
const x=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));
const y=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));
character.style.setProperty('--owl-look-x',(x*4)+'px');
character.style.setProperty('--owl-look-y',(y*3)+'px');
character.style.setProperty('--owl-look-angle',(x*3)+'deg');
});
document.addEventListener('pointerout',event=>{
const character=event.target.closest('.owl-character');
if(!character||(event.relatedTarget instanceof Node&&character.contains(event.relatedTarget)))return;
character.style.setProperty('--owl-look-x','0px');
character.style.setProperty('--owl-look-y','0px');
character.style.setProperty('--owl-look-angle','0deg');
});
