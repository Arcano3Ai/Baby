/**
 * Interactive Digital Envelope Module
 */

import { soundFX } from './audio-fx.js';

export function initEnvelope(triggerConfetti) {
  const overlay = document.getElementById('envelope-overlay');
  const envelope = document.getElementById('envelope-wrapper');
  const waxSeal = document.getElementById('wax-seal');
  const btnReopen = document.getElementById('btn-reopen-envelope');

  if (!overlay || !envelope) return;

  function openEnvelope() {
    if (envelope.classList.contains('open')) return;

    envelope.classList.add('open');
    soundFX.playChime();

    setTimeout(() => {
      soundFX.playPop();
      if (typeof triggerConfetti === 'function') {
        triggerConfetti(['#ff758c', '#4a90e2', '#ffd700', '#ffffff']);
      }
    }, 450);

    // Fade out overlay to reveal interactive site
    setTimeout(() => {
      overlay.classList.add('opened');
      document.body.style.overflow = 'auto';
      if (btnReopen) btnReopen.style.display = 'flex';
    }, 1800);
  }

  function reopenEnvelope() {
    overlay.classList.remove('opened');
    envelope.classList.remove('open');
    document.body.style.overflow = 'hidden';
    soundFX.playSparkle();
  }

  envelope.addEventListener('click', openEnvelope);
  if (waxSeal) waxSeal.addEventListener('click', (e) => {
    e.stopPropagation();
    openEnvelope();
  });

  if (btnReopen) {
    btnReopen.addEventListener('click', reopenEnvelope);
  }

  // Check if opened before in session
  const alreadyOpened = sessionStorage.getItem('envelope_opened');
  if (alreadyOpened) {
    overlay.classList.add('opened');
    if (btnReopen) btnReopen.style.display = 'flex';
  } else {
    document.body.style.overflow = 'hidden';
    sessionStorage.setItem('envelope_opened', 'true');
  }
}
