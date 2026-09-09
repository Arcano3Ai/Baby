/**
 * Main Application Script - Gender Reveal "Girl or Boy?"
 * Épica Edition for GitHub Pages
 */

import { initCountdown } from './countdown.js';
import { initVoting } from './voting.js';
import { initMap } from './map.js';
import { initRSVP } from './rsvp.js';
import { initCalendar } from './calendar.js';
import { init3DTilt } from './tilt.js';
import { initGuestbook } from './guestbook.js';
import { initQuiz } from './quiz.js';
import { initShare } from './share.js';
import { initEnvelope } from './envelope.js';
import { initTicket } from './ticket.js';
import { soundFX } from './audio-fx.js';

// Trigger confetti explosion effect
export function triggerConfetti(colors) {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: colors || ['#ff758c', '#4a90e2', '#ffd700', '#64b5f6', '#ff7eb3']
    });
  }
}

// Background Audio Toggle Setup
function initAudio() {
  const audioBtn = document.getElementById('audio-toggle');
  const audioPlayer = document.getElementById('bg-audio');
  if (!audioBtn || !audioPlayer) return;

  let isPlaying = false;

  audioBtn.addEventListener('click', () => {
    if (isPlaying) {
      audioPlayer.pause();
      audioBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 4.06c0-.86 1.02-1.32 1.66-.74l5.25 4.72c.45.4.45 1.08 0 1.48l-5.25 4.72c-.64.58-1.66.12-1.66-.74V4.06zM3 9h4l5-4.5v15L7 15H3V9z"/>
        </svg>
      `;
      isPlaying = false;
    } else {
      audioPlayer.play().then(() => {
        audioBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        `;
        isPlaying = true;
      }).catch((err) => {
        console.warn("Audio autoplay blocked by browser", err);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initEnvelope(triggerConfetti);
  initCountdown();
  initVoting(triggerConfetti);
  initMap();
  initRSVP();
  initCalendar();
  init3DTilt();
  initGuestbook(triggerConfetti);
  initQuiz();
  initShare();
  initTicket(triggerConfetti);
  initAudio();
});
