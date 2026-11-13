// Four hand-drawn sequences, each with six frames on a shared transparent atlas.
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
let owlReplyIndex = 0;

function playOwl(host, mood, message) {
  clearTimeout(owlTimers.get(host));
  const sprite = host.querySelector('.owl-sprite');
  const next = sprite.cloneNode(true);
  next.dataset.mood = mood;
  sprite.replaceWith(next);
  host.querySelector('[data-owl-speech]').textContent = message;
  owlTimers.set(host, setTimeout(() => {
    if (host.isConnected) next.dataset.mood = 'idle';
    owlTimers.delete(host);
  }, 2600));
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-owl-action]');
  if (!trigger) return;
  const host = trigger.closest('[data-owl-host]');
  const mood = trigger.dataset.owlAction;
  const replies = owlReplies[mood];
  playOwl(host, mood, replies[owlReplyIndex++ % replies.length]);
});

document.addEventListener('animationend', event => {
  const sprite = event.target;
  if (sprite.matches('.owl-sprite') && ['owl-wave','owl-hop','owl-think'].includes(event.animationName)) {
    sprite.dataset.mood = 'idle';
  }
});
