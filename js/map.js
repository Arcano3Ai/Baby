/**
 * Interactive Map Module (Leaflet.js & OpenStreetMap)
 * Venue: Quinta Elisa - Calle Castellón #200, Col. Barrio San Carlos, Monterrey, N.L.
 */

// Coordinates for Quinta Elisa, Monterrey N.L.
const QUINTA_ELISA_COORDS = [25.7538, -100.3592];
const LOCATION_NAME = 'Quinta Elisa';
const ADDRESS_TEXT = 'Calle Castellón #200, Col. Barrio San Carlos, Monterrey, N.L.';

export function initMap() {
  const mapElement = document.getElementById('leaflet-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Initialize map centered at Quinta Elisa
  const map = L.map('leaflet-map', {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView(QUINTA_ELISA_COORDS, 16);

  // OpenStreetMap tile layer with soft color styling
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom Gold/Baby SVG Marker Icon
  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="
        width: 44px;
        height: 44px;
        background: #d4af37;
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      ">
        <span style="transform: rotate(45deg); font-size: 22px;">👶</span>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -40]
  });

  // Add marker with popup
  const marker = L.marker(QUINTA_ELISA_COORDS, { icon: customIcon }).addTo(map);

  const popupContent = `
    <div style="text-align: center; padding: 6px; font-family: 'Fredoka', sans-serif;">
      <h3 style="color: #996515; margin-bottom: 4px; font-size: 1.2rem;">${LOCATION_NAME}</h3>
      <p style="font-size: 0.9rem; color: #555; margin-bottom: 8px;">${ADDRESS_TEXT}</p>
      <a href="https://maps.google.com/?q=${QUINTA_ELISA_COORDS[0]},${QUINTA_ELISA_COORDS[1]}" target="_blank" rel="noopener noreferrer" style="
        background: #4285F4;
        color: white;
        text-decoration: none;
        padding: 5px 12px;
        border-radius: 12px;
        font-weight: bold;
        font-size: 0.85rem;
        display: inline-block;
      ">Abrir en Google Maps</a>
    </div>
  `;

  marker.bindPopup(popupContent).openPopup();

  // Wire up navigation action links
  const btnGmaps = document.getElementById('btn-gmaps');
  const btnWaze = document.getElementById('btn-waze');
  const btnApple = document.getElementById('btn-apple');

  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION_NAME + ' ' + ADDRESS_TEXT)}`;
  const wazeUrl = `https://waze.com/ul?ll=${QUINTA_ELISA_COORDS[0]},${QUINTA_ELISA_COORDS[1]}&navigate=yes`;
  const appleUrl = `https://maps.apple.com/?daddr=${QUINTA_ELISA_COORDS[0]},${QUINTA_ELISA_COORDS[1]}&dirflg=d`;

  if (btnGmaps) btnGmaps.href = gmapsUrl;
  if (btnWaze) btnWaze.href = wazeUrl;
  if (btnApple) btnApple.href = appleUrl;
}
