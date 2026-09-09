/**
 * Voting & Prediction System Module
 */

const STORAGE_KEY_VOTE = 'gender_reveal_user_vote';
const STORAGE_KEY_COUNTS = 'gender_reveal_vote_counts';

export function initVoting(triggerConfetti) {
  const cardGirl = document.getElementById('card-vote-girl');
  const cardBoy = document.getElementById('card-vote-boy');
  const btnGirl = document.getElementById('btn-vote-girl');
  const btnBoy = document.getElementById('btn-vote-boy');
  const barGirl = document.getElementById('bar-girl');
  const barBoy = document.getElementById('bar-boy');
  const percentGirlEl = document.getElementById('percent-girl');
  const percentBoyEl = document.getElementById('percent-boy');

  if (!cardGirl || !cardBoy || !barGirl || !barBoy) return;

  // Initialize storage counts if not present
  let counts = JSON.parse(localStorage.getItem(STORAGE_KEY_COUNTS)) || { girl: 18, boy: 22 };
  let userVote = localStorage.getItem(STORAGE_KEY_VOTE);

  function updatePollUI() {
    const total = counts.girl + counts.boy;
    const percentGirl = total === 0 ? 50 : Math.round((counts.girl / total) * 100);
    const percentBoy = 100 - percentGirl;

    barGirl.style.width = `${percentGirl}%`;
    barBoy.style.width = `${percentBoy}%`;

    barGirl.textContent = `${percentGirl}%`;
    barBoy.textContent = `${percentBoy}%`;

    if (percentGirlEl) percentGirlEl.textContent = `${percentGirl}% (${counts.girl} votos)`;
    if (percentBoyEl) percentBoyEl.textContent = `${percentBoy}% (${counts.boy} votos)`;

    // Update active card selections
    cardGirl.classList.remove('selected');
    cardBoy.classList.remove('selected');

    if (userVote === 'girl') {
      cardGirl.classList.add('selected');
    } else if (userVote === 'boy') {
      cardBoy.classList.add('selected');
    }
  }

  function handleVote(choice) {
    if (userVote === choice) return; // Already selected

    // If changing vote, remove previous
    if (userVote === 'girl') counts.girl = Math.max(0, counts.girl - 1);
    if (userVote === 'boy') counts.boy = Math.max(0, counts.boy - 1);

    userVote = choice;
    counts[choice] += 1;

    localStorage.setItem(STORAGE_KEY_VOTE, userVote);
    localStorage.setItem(STORAGE_KEY_COUNTS, JSON.stringify(counts));

    updatePollUI();

    // Trigger confetti celebration effect
    if (typeof triggerConfetti === 'function') {
      const colorHex = choice === 'girl' ? ['#ff758c', '#ff7eb3', '#ffd700'] : ['#4a90e2', '#64b5f6', '#ffd700'];
      triggerConfetti(colorHex);
    }

    // Auto select choice in RSVP form if present
    const rsvpSelect = document.getElementById('rsvp-prediction');
    if (rsvpSelect) {
      rsvpSelect.value = choice === 'girl' ? 'Niña' : 'Niño';
    }
  }

  cardGirl.addEventListener('click', () => handleVote('girl'));
  cardBoy.addEventListener('click', () => handleVote('boy'));
  if (btnGirl) btnGirl.addEventListener('click', (e) => { e.stopPropagation(); handleVote('girl'); });
  if (btnBoy) btnBoy.addEventListener('click', (e) => { e.stopPropagation(); handleVote('boy'); });

  updatePollUI();
}
