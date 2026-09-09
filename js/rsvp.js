/**
 * RSVP Form Module with WhatsApp Integration
 */

export function initRSVP() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rsvp-name').value.trim();
    const status = document.getElementById('rsvp-status').value;
    const guests = document.getElementById('rsvp-guests').value;
    const prediction = document.getElementById('rsvp-prediction').value;
    const message = document.getElementById('rsvp-message').value.trim();

    if (!name) {
      alert('Por favor escribe tu nombre.');
      return;
    }

    // Gift reminder text according to team selection
    let giftReminder = '';
    if (prediction === 'Niña') {
      giftReminder = '🧴 Apoyo trayendo: Toallitas Húmedas';
    } else if (prediction === 'Niño') {
      giftReminder = '👶 Apoyo trayendo: Pañales';
    }

    // Format WhatsApp text message
    let text = `¡Hola! Confirmo mi asistencia para el *Gender Reveal* 🍼✨\n\n`;
    text += `👤 *Nombre:* ${name}\n`;
    text += `✅ *Asistencia:* ${status}\n`;
    text += `👥 *Acompañantes:* ${guests}\n`;
    text += `🔮 *Mi predicción:* ¡Equipo ${prediction}!\n`;
    if (giftReminder) text += `${giftReminder}\n`;
    if (message) text += `💬 *Mensaje:* "${message}"\n`;

    // WhatsApp phone target or share link
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  });
}
