// The generated atlases in owl-motion.css play at 30 distinct frames per second.
function owlCharacter(mood = 'idle') {
  return `<button type="button" class="owl-character" data-owl-action="wave" aria-label="Hälsa på ugglan">
    <span class="owl-sprite" data-mood="${mood}" aria-hidden="true"></span>
    <span class="owl-shadow" aria-hidden="true"></span>
  </button>`;
}

function mascotMessage(message, mood = 'idle') {
  return `<div class="mascot-message" data-owl-host>
    ${owlCharacter(mood)}
    <p class="owl-speech" data-owl-speech aria-live="polite">${message}</p>
  </div>`;
}

const owlReplies = {
  wave: ['Hej! Vad ska vi lära oss i dag?', 'En fråga i taget. Jag är med dig!', 'Redo? Nu tar vi nästa steg.'],
  think: ['Jag funderar med dig. Vilka ledtrådar finns i frågan?', 'Ta den tid du behöver. Försök koppla begreppet till ett exempel.'],
  celebrate: ['Ett litet glädjeskutt för allt du lär dig!', 'Det här firar vi! Sedan tar vi nästa steg.']
};
const owlTimers = new WeakMap();
const owlDurations = {wave:1600, celebrate:2000, think:2400};
const owlImages = new Map();
let owlReplyIndex = 0;

function loadOwlAnimation(mood) {
  if (!owlImages.has(mood)) {
    const image = new Image();
    image.src = `owl-${mood}-30.webp`;
    owlImages.set(mood, image.decode().then(() => true, () => false));
  }
  return owlImages.get(mood);
}

async function prepareOwl(sprite) {
  const mood = sprite.dataset.mood;
  if (!['idle', ...Object.keys(owlDurations)].includes(mood)) return;
  sprite.dataset.owlReady = 'false';
  const loaded = await loadOwlAnimation(mood);
  if (!sprite.isConnected || sprite.dataset.mood !== mood) return;
  sprite.dataset.owlReady = String(loaded);
  const host = sprite.closest('[data-owl-host]');
  clearTimeout(owlTimers.get(host));
  // A slow image download must finish before the clip's clock starts.
  // This timer also settles static poses when reduced motion is enabled.
  if (host && owlDurations[mood]) {
    owlTimers.set(host, setTimeout(() => {
      if (sprite.isConnected && sprite.dataset.mood === mood) sprite.dataset.mood = 'idle';
      owlTimers.delete(host);
    }, owlDurations[mood] + 100));
  }
}

function playOwl(host, mood, message) {
  if (!host || !owlDurations[mood]) return;
  clearTimeout(owlTimers.get(host));
  const sprite = host.querySelector('.owl-sprite');
  const next = sprite.cloneNode(true);
  next.dataset.mood = mood;
  next.dataset.owlReady = 'false';
  sprite.replaceWith(next);
  host.querySelector('[data-owl-speech]').textContent = message;
}

// Mounts cover both the welcome character and freshly rendered quiz feedback.
const owlObserver = new MutationObserver(records => {
  for (const record of records) {
    if (record.type === 'attributes') prepareOwl(record.target);
    for (const node of record.addedNodes) {
      if (!(node instanceof Element)) continue;
      if (node.matches('.owl-sprite')) prepareOwl(node);
      node.querySelectorAll('.owl-sprite').forEach(prepareOwl);
    }
  }
});
owlObserver.observe(document.body, {subtree:true, childList:true, attributes:true, attributeFilter:['data-mood']});
document.querySelectorAll('.owl-sprite').forEach(prepareOwl);
loadOwlAnimation('idle');

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-owl-action]');
  if (!trigger) return;
  const host = trigger.closest('[data-owl-host]');
  const mood = trigger.dataset.owlAction;
  const replies = owlReplies[mood];
  if (!replies) return;
  playOwl(host, mood, replies[owlReplyIndex++ % replies.length]);
});

document.addEventListener('animationend', event => {
  const sprite = event.target;
  if (sprite.matches('.owl-sprite') && ['owl-wave-30','owl-celebrate-30','owl-think-30'].includes(event.animationName)) {
    sprite.dataset.mood = 'idle';
    const host = sprite.closest('[data-owl-host]');
    clearTimeout(owlTimers.get(host));
    owlTimers.delete(host);
  }
});
