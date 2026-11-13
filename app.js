const icons = {
  home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
  star:'<path d="m12 3 8 14H4z M12 21 4 7h16z"/>',
  cross:'<path d="M12 3v18M6 9h12"/>',
  moon:'<path d="M20 15A8 8 0 0 1 9 4a8.5 8.5 0 1 0 11 11Z"/><path d="M17 4v6m-3-3h6"/>',
  book:'<path d="M12 6C9 3 5 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v15"/>',
  compare:'<path d="M12 3v17m-6 0h12M3 7h18M6 7l-4 7h8zm12 0-4 7h8z"/>',
  cards:'<rect x="6" y="3" width="14" height="16" rx="3"/><path d="M3 7v12a3 3 0 0 0 3 3h9M10 8h6m-6 4h6"/>',
  game:'<rect x="2" y="6" width="20" height="12" rx="5"/><path d="M6 12h6m-3-3v6m7-4h.01m3 2h.01"/>',
  history:'<circle cx="12" cy="12" r="8"/><path d="M12 7v5l4 2"/>',
  spark:'<path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6Z"/>',
  flag:'<path d="M5 21V4c5-4 9 4 14 0v10c-5 4-9-4-14 0"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5zm9 9-9 5-9-5m18 4-9 5-9-5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>'
};
const icon = key => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[key]}</svg>`;
const tile = key => `<div class="tile-icon">${icon(key)}</div>`;
const esc = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
const shuffle = values => {
  const mixed = [...values];
  for (let i = mixed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
  }
  return mixed;
};
const main = document.querySelector('main');
const dialog = document.querySelector('dialog');
const activity = document.querySelector('#activity');
const key = 'religionssparet-v1';
const defaults = {done:{}, xp:0, own:[], review:{}, notes:{}, rounds:{}};
let state = defaults;
try { state = {...defaults, ...JSON.parse(localStorage.getItem(key))}; } catch {}
const update = () => {
  try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
  document.querySelector('#status').textContent = `${state.xp} XP`;
};
const count = course => topics.filter((_, i) => state.done[`${course.id}-${i}`]).length;
const meter = percent => `<div class="meter" role="progressbar" aria-label="Framsteg" aria-valuenow="${percent}"><div style="width:${percent}%"></div></div>`;
const title = (head, desc) => `<div class="page-title"><span class="eyebrow">Religionsspåret</span><h1>${head}</h1><p class="muted">${desc}</p></div>`;
const routes = [
  ['start','Startsida','home'],
  ...courses.map(course => [course.id,course.name,course.symbol]),
  ['jamfor','Jämför','compare'],['kort','Flashcards','cards'],['ovningar','Övningar','game']
];
const quickLinks = [['jamfor','Jämför religionerna','Teman och inriktningar sida vid sida','compare'],
  ['kort','Vänd ett kort','Färdiga begrepp och egna kort','cards'],
  ['ovningar','Testa dig själv','Quiz, matchning och tidslinje','game']];
const nav = document.querySelector('#nav');
let comparison = 0;
let cardFilter = 'alla';
let cardIndex = 0;
let flipped = false;
const deck = [
  ...terms.map(([q,a], i) => ({id:'term-'+i,q,a,group:'begrepp'})),
  ...courses.flatMap(course => topics.flatMap((_, i) => lessonQuestions(course, i).map(([q,a], j) => ({id:course.id+'-'+i+(j ? '-'+j : ''),q,a,group:course.id}))))
];

function mascotMessage(message, mood = '') {
  return `<div class="mascot-message ${mood}"><img src="mascot.webp" alt="" width="1254" height="1254"><p>${message}</p></div>`;
}

function home() {
  const next = courses.find(course => count(course) < topics.length);
  const total = courses.reduce((sum, course) => sum + count(course), 0);
  return `<section class="hero"><div><span class="eyebrow">Tre religioner · ett studiespår</span>
    <h1>Lär känna de<br>abrahamitiska<br>religionerna.</h1>
    <p>Gå korta lektioner, jämför perspektiv och testa vad du kan inför Religion 1.</p>
    <a href="#${next?.id || 'ovningar'}" class="btn">${total === 0 ? 'Börja plugga' : next ? 'Fortsätt plugga' : 'Repetera'} <span aria-hidden="true">→</span></a></div>
    <div class="mascot-welcome">
      <div class="mascot-portrait"><img src="mascot.webp" alt="Religionsspårets ugglemaskot med glasögon, blå mantel och en bok" width="1254" height="1254" fetchpriority="high"></div>
      <p class="mascot-bubble">${total === 18 ? 'Alla lektioner klara! Vad vill du repetera?' : total ? 'Välkommen tillbaka! Vi fortsätter där du slutade.' : 'Redo att börja? Vi tar en lektion i taget.'}</p>
    </div></section>
    <section class="section"><div class="section-head"><h2>Dina studiespår</h2><p class="muted">${total} av 18 lektioner klara</p></div>
    <div class="grid">${courses.map(course => `<a class="card ${course.color}" href="#${course.id}">${tile(course.symbol)}<h3>${course.name}</h3><p>${course.era}</p>${meter(Math.round(count(course)/6*100))}<div class="card-foot"><span>${count(course)} / 6 lektioner</span><span>→</span></div></a>`).join('')}</div></section>
    <section class="section"><div class="section-head"><h2>Öva på ditt sätt</h2></div>
    <div class="grid">${quickLinks.map(([path,label,desc,symbol]) => `<a class="card quick" href="#${path}">${tile(symbol)}<div><h3>${label}</h3><small>${desc}</small></div><span class="chevron">›</span></a>`).join('')}</div></section>
    <div class="sources"><details><summary>Om innehållet</summary><p>Lektionerna bygger på det tillhandahållna studieunderlaget för Religion 1. För vidare läsning finns <a href="https://academic.oup.com/edited-volume/34340" target="_blank" rel="noopener noreferrer">The Oxford Handbook of the Abrahamic Religions</a> och <a href="https://encyclopedia.ushmm.org/content/en/article/introduction-to-judaism">USHMM:s introduktion till judendom</a>. Om kyrkornas egna ställningstaganden finns <a href="https://www.svenskakyrkan.se/kvinnliga-praster">Svenska kyrkans material om prästämbetet</a>, <a href="https://www.svenskakyrkan.se/filer/Biskopsbrev-nattvarden.pdf">biskopsbrevet om nattvarden</a>, <a href="https://www.svenskakyrkan.se/nyheter/vagar-framat--om-vigsel-och-samkonade-relationer">Svenska kyrkans material om samkönad vigsel</a> och <a href="https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html">Katolska kyrkans katekes i sammanfattning</a>.</p></details></div>`;
}

function lessonText(course, index) {
  return course.lessons[index].map(p => `<p>${p}</p>`).join('') +
    lessonDepth[course.id][index].map(([heading, paragraph]) => `<h3 class="reading">${heading}</h3><p>${paragraph}</p>`).join('');
}

function coursePage(course) {
  return `<div class="course-top ${course.color}">${tile(course.symbol)}<span class="eyebrow">Studiespår · ${course.era}</span><h1>${course.name}</h1><p>${course.place}</p>${meter(Math.round(count(course)/6*100))}<div class="card-foot">${count(course)} av 6 lektioner klara</div></div>
  <div class="trail">${topics.map(([name, desc], i) => `<article class="panel lesson ${course.color}"><span class="step" aria-label="${state.done[course.id+'-'+i] ? 'Klar' : 'Lektion '+(i+1)}">${state.done[course.id+'-'+i] ? '✓' : i+1}</span><div><h3>${name}</h3><p>${desc}</p></div><button class="btn" data-act="lesson" data-course="${course.id}" data-i="${i}">${state.rounds[course.id+'-'+i] ? 'Fortsätt' : state.done[course.id+'-'+i] ? 'Repetera' : 'Öppna'}</button></article>`).join('')}</div>
  <section class="section"><h2>Alla sammanfattningar</h2><div class="panel">${topics.map(([name], i) => `<details class="reading"><summary>${name}</summary>${lessonText(course,i)}</details>`).join('')}</div></section>`;
}

function traditionPanels(index) {
  const names = [4,5,8].includes(index) ? branchProfiles : [];
  if (!names.length) return '';
  return `<section class="section"><h2>Inriktningar inom religionerna</h2>
    <div class="grid compare-grid">${courses.map((course,i) => `<article class="panel ${course.color}">
    <h3>${course.name}</h3>${names[i].map(([heading,leadership,relationships,practice]) =>
      `<details><summary>${heading}</summary><p>${index === 4 ? leadership : index === 5 ? relationships : practice}</p></details>`).join('')}</article>`).join('')}</div></section>`;
}

function comparePage() {
  const item = comparisons[comparison];
  return title('Jämför religionerna','Välj ett tema och läs de tre perspektiven sida vid sida.') +
  `<div class="chips" aria-label="Jämförelsetema">${comparisons.map(([name], i) => `<button class="chip" data-act="compare" data-i="${i}" aria-pressed="${i === comparison}">${name}</button>`).join('')}</div>
  <section aria-label="${item[0]}" class="grid compare-grid">${courses.map((course,i) => `<article class="panel ${course.color}">${tile(course.symbol)}<h3>${course.name}</h3><p>${item[i+1]}</p><p>${comparisonDepth[comparison][i]}</p></article>`).join('')}</section>
  <aside class="callout"><h3>Så kan du resonera</h3><p>${item[4]}</p><p>${comparisonDepth[comparison][3]}</p></aside>
  ${traditionPanels(comparison)}
  <section class="section"><h2>Skrivträning</h2><p class="muted">Utgå från ett konkret exempel. Förklara vad som skiljer sig, varför och vilka följder skillnaden kan få. Titta på texten, tolkningen och samhället.</p>
  <div class="panel">${writing.map(([name,q,answer], i) => `<details><summary>${name}</summary><p>${q}</p><label for="note-${i}">Ditt resonemang</label><textarea id="note-${i}" data-note="${i}">${esc(state.notes[i] || '')}</textarea><details><summary>Visa exempel på resonemang</summary><p>${answer}</p></details></details>`).join('')}</div></section>`;
}

function cardsPage() {
  const all = [...deck, ...state.own];
  const available = all.filter(card => cardFilter === 'alla' || (cardFilter === 'repetera' ? state.review[card.id] : card.group === cardFilter));
  cardIndex = Math.min(cardIndex, Math.max(0, available.length - 1));
  const card = available[cardIndex];
  const filters = [['alla','Alla'], ...courses.map(course => [course.id,course.name]), ['begrepp','Begrepp'],['egna','Egna'],['repetera','Repetera']];
  return title('Flashcards','Svara för dig själv, vänd kortet och markera det du vill öva på igen.') +
    `<div class="chips">${filters.map(([id,name]) => `<button class="chip" data-act="filter" data-filter="${id}" aria-pressed="${id === cardFilter}">${name}</button>`).join('')}</div>
    ${card ? `<div class="counter">Kort ${cardIndex+1} av ${available.length}</div>
    <button class="flash ${flipped ? 'is-back' : ''}" data-act="flip"><small>${flipped ? 'SVAR' : 'FRÅGA'}</small><span>${esc(flipped ? card.a : card.q)}</span><small>Tryck för att vända</small></button>
    <div class="actions"><button class="btn" data-act="previous" ${available.length < 2 ? 'disabled' : ''}>← Förra</button><button class="btn" data-act="nextCard" ${available.length < 2 ? 'disabled' : ''}>Nästa →</button>
    <button class="chip" data-act="review" data-id="${esc(card.id)}" aria-pressed="${Boolean(state.review[card.id])}">${state.review[card.id] ? 'Ta bort från repetition' : 'Markera för repetition'}</button>
    ${card.group === 'egna' ? `<button class="chip" data-act="deleteCard" data-id="${esc(card.id)}">Ta bort eget kort</button>` : ''}</div>` :
    '<p class="panel">Det finns inga kort i det här urvalet ännu.</p>'}
    <section class="section panel"><h2>Skapa eget kort</h2><form id="create-card"><label for="question">Fråga eller begrepp</label><input id="question" name="question" required maxlength="140"><label for="answer">Svar</label><textarea id="answer" name="answer" required maxlength="450"></textarea><div class="actions"><button class="btn primary">Spara kort</button></div></form></section>`;
}

function gamesPage() {
  const games = [['quiz','Blandat quiz','Tolv frågor om de tre religionerna.','spark'],
    ['match','Matcha begrepp','Para ihop begrepp med rätt förklaring.','cards'],
    ['timeline','Bygg en tidslinje','Välj händelserna från äldst till nyast.','history']];
  return title('Övningar','Repetera med tre olika övningar och få återkoppling direkt.') +
  `<div class="grid">${games.map(([id,name,desc,symbol]) => `<article class="panel">${tile(symbol)}<h3>${name}</h3><p class="muted">${desc}</p><button class="btn primary" data-act="${id}">Starta ${name.toLowerCase()}</button></article>`).join('')}</div>`;
}

function render(focus = false) {
  const route = location.hash.slice(1) || 'start';
  const active = routes.some(([id]) => id === route) ? route : 'start';
  nav.innerHTML = routes.map(([id,label,symbol], i) => `${i === 1 || i === 4 ? `<div class="navlabel">${i === 1 ? 'STUDIESPÅR' : 'ÖVA OCH JÄMFÖR'}</div>` : ''}<a class="navlink" href="#${id}" ${id === active ? 'aria-current="page"' : ''}>${icon(symbol)}${label}</a>`).join('');
  const course = courses.find(course => course.id === active);
  main.innerHTML = course ? coursePage(course) : {start:home,jamfor:comparePage,kort:cardsPage,ovningar:gamesPage}[active]();
  update();
  if (focus) {
    main.focus({preventScroll:true});
    window.scrollTo(0,0);
  }
}

function showActivity(label, body, moveFocus = true) {
  activity.innerHTML = `<div class="dialog-top"><h2 id="dialogTitle" tabindex="-1">${label}</h2><button class="chip" data-act="close">Stäng</button></div>${body}`;
  if (!dialog.open) dialog.showModal();
  if (moveFocus) document.querySelector('#dialogTitle').focus();
}
let exercise;
let opener;
function startQuiz(questions, lessonId) {
  exercise = {questions, total:questions.length, index:0, missed:[], lessonId, retry:false, summary:false, choice:null, checked:false};
  saveQuiz();
  showQuestion();
}
function saveQuiz() {
  if (exercise.lessonId) {
    state.rounds[exercise.lessonId] = exercise;
    update();
  }
}
function showRetry() {
  const {missed, questions, retry} = exercise;
  const count = missed.length;
  showActivity('Resultat', `<p>${retry ? 'Du har fortfarande' : 'Du fick'} <strong>${count} fel av ${questions.length}</strong>.</p>
    ${mascotMessage('Vi övar på det som var svårt. Du får ett nytt försök på bara de frågor du missade.')}
    <p>XP delas ut när alla frågor är rätt besvarade.</p>
    <button class="btn primary" data-act="retryQuiz">Gör om ${count === 1 ? 'frågan' : 'de '+count+' frågorna'}</button>`);
}
function showQuestion(moveFocus = true) {
  const round = exercise;
  const [question, correct] = round.questions[round.index];
  round.options ??= shuffle(round.questions[round.index].slice(1));
  const label = round.retry ? 'Repetera felsvar' : round.lessonId ? 'Lektionsquiz' : 'Blandat quiz';
  const good = round.choice === correct;
  showActivity(label, `<div class="counter">Fråga ${round.index+1} av ${round.questions.length}</div>
    ${meter(Math.round(round.index/round.questions.length*100))}<h3 class="reading">${question}</h3>
    <div class="options">${round.options.map((option,i) => `<button class="btn option ${round.checked && option === correct ? 'correct' : round.checked && option === round.choice ? 'incorrect' : round.choice === option ? 'selected' : ''}" data-act="choose" data-i="${i}" aria-pressed="${round.choice === option}" ${round.checked ? 'disabled' : ''}>${option}</button>`).join('')}</div>
    <div class="result ${good ? 'good' : 'bad'}" role="status">${round.checked ? mascotMessage(good ? 'Rätt svar! Bra jobbat.' : 'Rätt svar är '+correct+'. Vi övar på den här igen efter omgången.',good ? 'celebrate' : '') : ''}</div>
    <button class="btn primary" data-act="${round.checked ? 'advance' : 'check'}" ${round.choice === null ? 'disabled' : ''}>${round.checked ? round.index + 1 === round.questions.length ? 'Visa resultat' : 'Nästa fråga' : 'Kontrollera svar'}</button>`, moveFocus);
}
function finish(title, desc, xp) {
  state.xp += xp;
  render();
  showActivity(title, `${mascotMessage('Du klarade det! Ta med dig det du har lärt dig till nästa övning.','celebrate')}<div class="callout">${xp ? `<h3>+${xp} XP</h3>` : ''}<p>${desc}</p></div><button class="btn primary" data-act="close">Klart</button>`);
}
function showMatching(moveFocus = true) {
  const round = exercise;
  const column = (order,side) => order.map(i => `<button class="btn option ${round.matched.includes(i) ? 'correct' : round.left === i && side === 'left' ? 'selected' : ''}" data-act="${side}" data-i="${i}" ${round.matched.includes(i) ? 'disabled' : ''}>${round.pairs[i][side === 'left' ? 0 : 1]}</button>`).join('');
  showActivity('Matcha begrepp',`<p>Välj först ett begrepp i vänster kolumn och sedan en förklaring till höger.</p>
  <div class="match-grid"><div>${column([0,1,2,3],'left')}</div><div>${column(round.right,'right')}</div></div>
  <div class="result ${round.good ? 'good' : 'bad'}" role="status">${round.message}</div>
  <div class="counter">${round.matched.length} / 4 par</div>
  ${round.matched.length === 4 ? '<button class="btn primary" data-act="matchDone">Visa resultat</button>' : ''}`, moveFocus);
}
function showTimeline(moveFocus = true) {
  const round = exercise;
  showActivity('Bygg en tidslinje',`<p>Välj den äldsta händelsen som finns kvar.</p>
  <ol class="order-list">${timeline.slice(0,round.count).map(([event,year]) => `<li>${event} <strong>· ${year}</strong></li>`).join('')}</ol>
  <div class="options">${round.order.filter(i => i >= round.count).map(i => `<button class="btn option" data-act="order" data-i="${i}">${timeline[i][0]}</button>`).join('')}</div>
  <div class="result ${round.good ? 'good' : 'bad'}" role="status">${round.message}</div>
  ${round.count === timeline.length ? '<button class="btn primary" data-act="timelineDone">Visa resultat</button>' : ''}`, moveFocus);
}

const handlers = {
  lesson({course:id,i}) {
    const course = courses.find(item => item.id === id);
    exercise = {course,i};
    showActivity(topics[i][0], `<p class="eyebrow">${course.name} · Lektion ${Number(i)+1}</p>
      ${lessonText(course,i)}
      <button class="btn primary" data-act="lessonQuiz">${state.rounds[id+'-'+i] ? 'Fortsätt quiz' : 'Starta quiz · 10 frågor'}</button>`);
  },
  lessonQuiz() {
    const {course,i} = exercise;
    const id = course.id+'-'+i;
    if (state.rounds[id]) {
      exercise = state.rounds[id];
      if (exercise.summary) showRetry();
      else showQuestion();
      return;
    }
    startQuiz(shuffle(lessonQuestions(course,i)), id);
  },
  quiz() {
    startQuiz(shuffle(courses.flatMap(course => shuffle(topics.map((_,i) => shuffle(lessonQuestions(course,i))[0])).slice(0,4))));
  },
  choose({i}) {
    exercise.choice = exercise.options[i];
    showQuestion(false);
    activity.querySelector(`[data-act="choose"][data-i="${i}"]`).focus();
  },
  check() {
    exercise.checked = true;
    if (exercise.choice !== exercise.questions[exercise.index][1]) exercise.missed.push(exercise.questions[exercise.index]);
    saveQuiz();
    showQuestion(false);
    activity.querySelector('[data-act="advance"]').focus();
  },
  advance() {
    const round = exercise;
    round.index++;
    if (round.index < round.questions.length) {
      Object.assign(round,{choice:null,checked:false,options:null});
      saveQuiz();
      showQuestion();
    } else if (round.missed.length) {
      round.summary = true;
      saveQuiz();
      showRetry();
    } else if (round.lessonId) {
      const id = round.lessonId;
      const points = state.done[id] ? 0 : 10;
      state.done[id] = true;
      delete state.rounds[id];
      finish('Lektion klar', points ? 'Du har svarat rätt på alla 10 frågor.' : 'Du har svarat rätt på alla 10 frågor. Lektionens XP har redan delats ut.', points);
    } else {
      finish('Quiz klart',`Du har svarat rätt på alla ${round.total} frågor.`,round.total*5);
    }
  },
  retryQuiz() {
    Object.assign(exercise,{questions:shuffle(exercise.missed),index:0,missed:[],retry:true,summary:false,choice:null,checked:false,options:null});
    saveQuiz();
    showQuestion();
  },
  match() {
    exercise = {pairs:shuffle(terms).slice(0,4), right:shuffle([0,1,2,3]), matched:[], left:null, message:''};
    showMatching();
  },
  left({i}) {
    exercise.left = Number(i);
    exercise.message = '';
    showMatching(false);
    activity.querySelector(`[data-act="left"][data-i="${i}"]`).focus();
  },
  right({i}) {
    const round = exercise;
    round.good = round.left === Number(i);
    if (round.good) {
      round.matched.push(Number(i));
      round.left = null;
    }
    round.message = round.good ? 'Rätt par.' : round.left === null ? 'Välj ett begrepp först.' : 'Försök med en annan förklaring.';
    showMatching(false);
    const next = round.good ? activity.querySelector('[data-act="left"]:not(:disabled),[data-act="matchDone"]') : activity.querySelector(`[data-act="right"][data-i="${i}"]`);
    next?.focus();
  },
  matchDone() { finish('Alla par matchade','Du kopplade ihop fyra begrepp med rätt förklaring.',20); },
  timeline() {
    exercise = {order:shuffle(timeline.map((_,i) => i)), count:0, message:''};
    showTimeline();
  },
  order({i}) {
    const round = exercise;
    round.good = Number(i) === round.count;
    if (round.good) round.count++;
    round.message = round.good ? 'Rätt placerat.' : 'En annan av händelserna inträffade tidigare.';
    showTimeline(false);
    const next = round.good ? activity.querySelector('[data-act="order"],[data-act="timelineDone"]') : activity.querySelector(`[data-act="order"][data-i="${i}"]`);
    next?.focus();
  },
  timelineDone() { finish('Tidslinjen är klar','Du placerade alla sex händelser i rätt ordning.',30); },
  close() { dialog.close(); },
  compare({i}) {
    comparison = Number(i);
    render();
    main.querySelector(`[data-act="compare"][data-i="${i}"]`).focus();
  },
  filter({filter}) {
    cardFilter = filter;
    cardIndex = 0;
    flipped = false;
    render();
    main.querySelector('[aria-pressed="true"]').focus();
  },
  flip() {
    flipped = !flipped;
    render();
    main.querySelector('.flash').focus();
  },
  previous() {
    const all = [...deck,...state.own];
    const visible = all.filter(card => cardFilter === 'alla' || (cardFilter === 'repetera' ? state.review[card.id] : card.group === cardFilter));
    cardIndex = (cardIndex + visible.length - 1) % visible.length;
    flipped = false;
    render();
    main.querySelector('[data-act="previous"]').focus();
  },
  nextCard() {
    const all = [...deck,...state.own];
    const visible = all.filter(card => cardFilter === 'alla' || (cardFilter === 'repetera' ? state.review[card.id] : card.group === cardFilter));
    cardIndex = (cardIndex + 1) % visible.length;
    flipped = false;
    render();
    main.querySelector('[data-act="nextCard"]').focus();
  },
  review({id}) {
    if (state.review[id]) delete state.review[id];
    else state.review[id] = true;
    if (cardFilter === 'repetera') flipped = false;
    render();
    (main.querySelector('[data-act="review"]') || main.querySelector('[aria-pressed="true"]')).focus();
  },
  deleteCard({id}) {
    state.own = state.own.filter(card => card.id !== id);
    delete state.review[id];
    flipped = false;
    render();
    (main.querySelector('.flash') || main.querySelector('[aria-pressed="true"]')).focus();
  }
};
document.addEventListener('click', event => {
  const button = event.target.closest('[data-act]');
  if (!button) return;
  if (!dialog.open) opener = button.dataset;
  handlers[button.dataset.act](button.dataset);
});
dialog.addEventListener('close', () => {
  if (opener?.act === 'lesson' && location.hash === '#'+opener.course) render();
  const buttons = [...main.querySelectorAll('[data-act]')];
  buttons.find(button => Object.entries(opener || {}).every(([key,value]) => button.dataset[key] === value))?.focus();
});
document.addEventListener('submit', event => {
  if (event.target.id !== 'create-card') return;
  event.preventDefault();
  const form = new FormData(event.target);
  const q = form.get('question').trim();
  const a = form.get('answer').trim();
  if (!q || !a) {
    const field = event.target.elements.namedItem(q ? 'answer' : 'question');
    field.setCustomValidity('Skriv minst ett tecken.');
    field.reportValidity();
    return;
  }
  state.own.push({id:'own-'+Date.now()+'-'+Math.random().toString(36).slice(2),q,a,group:'egna'});
  cardFilter = 'egna';
  cardIndex = state.own.length-1;
  flipped = false;
  render();
  main.querySelector('.flash').focus();
});
document.addEventListener('input', event => {
  if (event.target.matches('#create-card input, #create-card textarea')) event.target.setCustomValidity('');
  if (event.target.dataset.note === undefined) return;
  state.notes[event.target.dataset.note] = event.target.value;
  update();
});
window.addEventListener('hashchange', () => {
  if (location.hash === '#main') return;
  if (dialog.open) dialog.close();
  render(true);
});
render();
