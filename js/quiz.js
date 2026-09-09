/**
 * Baby Quiz & Predictions Game Module
 */

export function initQuiz() {
  const btnSubmit = document.getElementById('btn-submit-quiz');
  const resultCard = document.getElementById('quiz-result-card');
  const resultSummary = document.getElementById('quiz-result-summary');

  if (!btnSubmit || !resultCard || !resultSummary) return;

  btnSubmit.addEventListener('click', () => {
    const parentLook = document.getElementById('quiz-look').value;
    const weight = document.getElementById('quiz-weight').value;
    const eyeColor = document.getElementById('quiz-eyes').value;

    resultSummary.innerHTML = `
      <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">🎉 <strong>¡Predicción Registrada!</strong></p>
      <ul style="text-align: left; max-width: 320px; margin: 0 auto; line-height: 1.8;">
        <li>👨‍👩‍👧 <strong>Se parecerá a:</strong> ${parentLook}</li>
        <li>⚖️ <strong>Peso estimado:</strong> ${weight}</li>
        <li>👀 <strong>Color de ojos:</strong> ${eyeColor}</li>
      </ul>
      <p style="margin-top: 0.8rem; font-size: 0.9rem; color: #666;">¡Veremos quién tuvo la mejor intuición en el evento!</p>
    `;

    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth' });
  });
}
