/**
 * VIP Digital Pass Generator & Reveal Cannon Simulator Module
 */

import { soundFX } from './audio-fx.js';

export function initTicket(triggerConfetti) {
  // VIP Ticket elements
  const inputName = document.getElementById('ticket-input-name');
  const selectTeam = document.getElementById('ticket-select-team');
  const btnGenerate = document.getElementById('btn-generate-ticket');
  const ticketDisplay = document.getElementById('ticket-display');
  const ticketNameEl = document.getElementById('ticket-guest-name-el');
  const ticketTeamEl = document.getElementById('ticket-team-el');
  const ticketIdEl = document.getElementById('ticket-id-el');
  const btnDownloadTicket = document.getElementById('btn-download-ticket');

  if (btnGenerate && inputName && selectTeam) {
    btnGenerate.addEventListener('click', () => {
      const name = inputName.value.trim() || 'Invitado Especial';
      const team = selectTeam.value;

      ticketNameEl.textContent = name;
      ticketIdEl.textContent = `GR-${Math.floor(1000 + Math.random() * 9000)}-${team === 'Niña' ? 'GIRL' : 'BOY'}`;

      if (team === 'Niña') {
        ticketTeamEl.className = 'ticket-team-indicator team-girl-badge';
        ticketTeamEl.innerHTML = '👧 Team Niña (Toallitas Húmedas)';
      } else {
        ticketTeamEl.className = 'ticket-team-indicator team-boy-badge';
        ticketTeamEl.innerHTML = '👦 Team Niño (Pañales)';
      }

      ticketDisplay.style.display = 'block';
      ticketDisplay.scrollIntoView({ behavior: 'smooth' });

      soundFX.playSparkle();
      if (typeof triggerConfetti === 'function') {
        triggerConfetti(team === 'Niña' ? ['#ff758c', '#ffd700'] : ['#4a90e2', '#ffd700']);
      }
    });
  }

  // Download ticket as PNG using Canvas
  if (btnDownloadTicket) {
    btnDownloadTicket.addEventListener('click', () => {
      const ticketEl = document.querySelector('.vip-ticket');
      if (!ticketEl) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 800;
      canvas.height = 420;

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 800, 420);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.5, '#fffdf9');
      grad.addColorStop(1, '#f9f6ef');
      ctx.fillStyle = grad;
      ctx.roundRect ? ctx.roundRect(10, 10, 780, 400, 24) : ctx.rect(10, 10, 780, 400);
      ctx.fill();

      // Golden Border
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#d4af37';
      ctx.stroke();

      // Inner dashed line
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 6]);
      ctx.strokeStyle = '#c68b59';
      ctx.strokeRect(25, 25, 750, 370);
      ctx.setLineDash([]);

      // Header Text
      ctx.font = 'bold 26px sans-serif';
      ctx.fillStyle = '#996515';
      ctx.fillText('PASE VIP • GENDER REVEAL (GIRL OR BOY?)', 50, 70);

      const guestName = ticketNameEl ? ticketNameEl.textContent : 'Invitado Especial';
      const ticketId = ticketIdEl ? ticketIdEl.textContent : 'GR-2026-VIP';

      ctx.font = '16px monospace';
      ctx.fillStyle = '#6c757d';
      ctx.fillText(`ID: ${ticketId}`, 620, 70);

      // Line divider
      ctx.beginPath();
      ctx.moveTo(50, 90);
      ctx.lineTo(750, 90);
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      // Guest details
      ctx.font = '20px sans-serif';
      ctx.fillStyle = '#666';
      ctx.fillText('INVITADO DE HONOR:', 50, 140);

      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = '#2c3e50';
      ctx.fillText(guestName, 50, 190);

      // Team status
      const isGirl = ticketTeamEl && ticketTeamEl.textContent.includes('Niña');
      ctx.fillStyle = isGirl ? '#ff758c' : '#4a90e2';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(isGirl ? '🌸 EQUIPO NIÑA (Regalo: Toallitas Húmedas)' : '⭐ EQUIPO NIÑO (Regalo: Pañales)', 50, 245);

      // Event details
      ctx.font = '18px sans-serif';
      ctx.fillStyle = '#555';
      ctx.fillText('📅 Sábado 27 de Septiembre • 2:00 PM', 50, 300);
      ctx.fillText('📍 Quinta Elisa, Col. Barrio San Carlos, Monterrey N.L.', 50, 335);

      // Footer
      ctx.font = 'italic 16px sans-serif';
      ctx.fillStyle = '#d4af37';
      ctx.fillText('¡Presenta este pase digital en la entrada! • ¡No Faltes!', 50, 375);

      // Trigger download
      const link = document.createElement('a');
      link.download = `Pase_VIP_${guestName.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      soundFX.playPop();
    });
  }

  // Reveal Cannon Simulator
  const btnCannonGirl = document.getElementById('btn-cannon-girl');
  const btnCannonBoy = document.getElementById('btn-cannon-boy');

  if (btnCannonGirl) {
    btnCannonGirl.addEventListener('click', () => {
      soundFX.playPop();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.7 },
          colors: ['#ff758c', '#ff7eb3', '#ffc2d1', '#ffd700', '#ffffff']
        });
      }
    });
  }

  if (btnCannonBoy) {
    btnCannonBoy.addEventListener('click', () => {
      soundFX.playPop();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.7 },
          colors: ['#4a90e2', '#64b5f6', '#bbdefb', '#ffd700', '#ffffff']
        });
      }
    });
  }
}
