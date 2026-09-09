# 🍼✨ Invitación Digital Épica - Gender Reveal ("Girl or Boy?")

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-ff758c?style=for-the-badge&logo=github)](https://arcano3ai.github.io/Baby/)
[![License: MIT](https://img.shields.io/badge/License-MIT-4a90e2?style=for-the-badge)](LICENSE)

Una experiencia web interactiva, moderna y responsive lista para alojarse 100% gratis en **GitHub Pages**. Diseñada con réplica fiel del flyer de invitación tradicional, unboxing en sobre 3D con sello de cera dorado, audio procedural, mapa interactivo, sistema de votación en tiempo real, generador de pases VIP y confirmación RSVP directa por WhatsApp.

---

## 🌟 Características Épicas de la Experiencia

1. **Sobre Digital 3D Interactivo (Unboxing Experience)**:
   - Pantalla de bienvenida con sobre de lujo y sello de cera dorado realista.
   - Efectos de sonido procedurales (*Web Audio API*) con campanas mágicas y confeti al abrir.
   - Botón flotante para revivir la apertura en cualquier momento.

2. **Réplica Fiel de la Tarjeta del Evento**:
   - Marco festoneado con pespunte dorado y estrellas acuarela centelleantes.
   - Ilustración en alta resolución del bebé con pañal amarillo de gatitos.
   - Ositos de peluche gemelos con moños satinados (rosa y azul).
   - Recordatorio dinámico de regalo según el equipo:
     - **Equipo Niña 👧**: Toallitas Húmedas 🧴
     - **Equipo Niño 👦**: Pañales 👶
   - Biberones gemelos rosa y azul en el centro.

3. **Reloj de Conteo Regresivo en Tiempo Real**:
   - Contador regresivo sincronizado hacia el **Sábado 27 de Septiembre a las 2:00 PM**.

4. **Votación en Vivo (Niña vs Niño)**:
   - Registro instantáneo de predicciones con persistencia en `localStorage`.
   - Barra porcentual animada y explosión de confeti según el color elegido.

5. **Generador de Pase Digital VIP**:
   - Los invitados ingresan su nombre y equipo favorito para obtener una **credencial digital de lujo** con código QR único.
   - Botón de **descarga directa en imagen PNG** para compartir en estados de WhatsApp o historias de Instagram.

6. **Simulador de Revelación (Cañón de Humo)**:
   - Permite a los invitados simular la detonación de humo y confeti rosa o azul antes del evento.

7. **Quiniela y Muro de Deseos (Guestbook)**:
   - Predicciones interactivas de peso, color de ojos y parecidos.
   - Muro con felicitaciones en tiempo real y contador de "me gusta" ❤️.

8. **Ubicación con Navegación GPS (Quinta Elisa)**:
   - Mapa interactivo integrado (Leaflet.js & OpenStreetMap).
   - Accesos directos en 1 click a **Google Maps**, **Waze** y **Apple Maps**.

9. **Confirmación RSVP por WhatsApp**:
   - Formulario que compila el nombre del invitado, confirmación de asistencia, número de acompañantes y regalo prometido en un mensaje preformateado.

10. **Integración con Calendarios**:
    - Botón para agendar en **Google Calendar** y descarga de archivo `.ics` para Apple/Outlook.

---

## 📍 Datos del Evento

- **Fecha**: Sábado 27 de Septiembre
- **Hora**: 2:00 PM
- **Lugar**: Quinta Elisa
- **Dirección**: Calle Castellón #200, Col. Barrio San Carlos, Monterrey, N.L.
- **Lema**: *¡ No Faltes !*

---

## 🚀 Despliegue en GitHub Pages

El proyecto ya está configurado con un flujo de trabajo automatizado en `.github/workflows/deploy.yml`.

### Pasos para Activar tu Sitio Web en GitHub:

1. **Inicializar y subir los cambios al repositorio:**
   ```bash
   git init
   git add .
   git commit -m "feat: Invitacion digital epica de Gender Reveal con sobre 3D y pase VIP"
   git branch -M main
   git remote add origin https://github.com/Arcano3Ai/Baby.git
   git push -u origin main
   ```

2. **Habilitar GitHub Pages:**
   - Entra a tu repositorio: [https://github.com/Arcano3Ai/Baby](https://github.com/Arcano3Ai/Baby)
   - Ve a **Settings** (Configuración) ➔ **Pages** (en la columna izquierda).
   - En **Source** (Origen), selecciona **GitHub Actions** (o *Deploy from a branch* ➔ `main` / `/ root`).
   - ¡Tu invitación estará en vivo en pocos segundos en:
     👉 **`https://arcano3ai.github.io/Baby/`**

---

## 🛠️ Personalización Rápida

- **Número de WhatsApp de los papás**: En `js/rsvp.js`, modifica la variable `whatsappUrl` para apuntar a un número específico:
  ```javascript
  const whatsappUrl = `https://api.whatsapp.com/send?phone=52181XXXXXXXX&text=${encodeURIComponent(text)}`;
  ```
- **Coordenadas del mapa**: En `js/map.js` se pueden actualizar en `QUINTA_ELISA_COORDS`.
- **Música ambiental**: En `index.html` (etiqueta `<audio id="bg-audio">`), puedes colocar el archivo MP3 o URL de tu preferencia.
