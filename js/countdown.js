/**
 * Countdown Timer Module
 * Target: September 27, 2:00 PM (14:00)
 */

export function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Event Date: September 27, 2:00 PM
  const now = new Date();
  let targetYear = now.getFullYear();
  let targetDate = new Date(targetYear, 8, 27, 14, 0, 0); // Month 8 is September (0-indexed)

  // If date already passed this year, set to next year
  if (now > targetDate) {
    targetDate = new Date(targetYear + 1, 8, 27, 14, 0, 0);
  }

  function updateTimer() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days < 10 ? '0' + days : days;
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}
