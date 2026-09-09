/**
 * Web Share API & Copy Link Module
 */

export function initShare() {
  const btnShare = document.getElementById('btn-share-event');
  if (!btnShare) return;

  btnShare.addEventListener('click', async () => {
    const shareData = {
      title: 'Gender Reveal - ¿Niño o Niña? 🍼✨',
      text: '¡Estás invitado a nuestro Gender Reveal! 27 de Septiembre 2:00 PM en Quinta Elisa, Monterrey N.L.',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share dismissed', err);
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        const originalText = btnShare.innerHTML;
        btnShare.innerHTML = '✅ ¡Enlace Copiado al Portapapeles!';
        setTimeout(() => {
          btnShare.innerHTML = originalText;
        }, 2500);
      } catch (err) {
        alert(`Comparte este enlace: ${window.location.href}`);
      }
    }
  });
}
