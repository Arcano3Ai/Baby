/**
 * Add-to-Calendar Module (Google Calendar Integration)
 */

export function initCalendar() {
  const btnGoogle = document.getElementById('btn-add-gcal');

  const eventTitle = "Gender Reveal - ¿Girl or Boy? 🍼✨";
  const eventDetails = "¡Acompáñanos a descubrir el género de nuestro bebé!\n\n📍 Lugar: Quinta Elisa (Calle Castellón #200, Col. Barrio San Carlos, Monterrey, N.L.)\n⏰ Hora: 2:00 PM\n\n🌸 Si crees que es Niña: Toallitas Húmedas\n⭐ Si crees que es Niño: Pañales\n\n¡No Faltes!";
  const eventLocation = "Quinta Elisa, Calle Castellón #200, Col. Barrio San Carlos, Monterrey, N.L.";

  // Event Start: Sept 27 14:00, End: Sept 27 19:00
  const now = new Date();
  let year = now.getFullYear();
  let startDate = new Date(year, 8, 27, 14, 0, 0);
  if (now > startDate) year += 1;

  const startIso = `${year}0927T140000`;
  const endIso = `${year}0927T190000`;

  // Google Calendar URL
  if (btnGoogle) {
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startIso}/${endIso}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;
    btnGoogle.href = gcalUrl;
    btnGoogle.target = "_blank";
  }
}
