/**
 * Guest Book / Muro de Deseos Module
 */

const STORAGE_KEY_GUESTBOOK = 'gender_reveal_guestbook_posts';

const DEFAULT_POSTS = [
  { id: 1, name: 'Tía Sofía & Carlos', team: 'Niña', text: '¡Qué emoción tan grande! Ya queremos conocer a la bebita hermosa. 💕', likes: 12, date: 'Hace 2 horas' },
  { id: 2, name: 'Abuelita Elena', team: 'Niño', text: 'Siento en mi corazón que viene un varoncito hermoso para alegrar la casa. 💙', likes: 18, date: 'Hace 4 horas' },
  { id: 3, name: 'Padrino Miguel', team: 'Niña', text: '¡Contando los días! Ya tengo listas las toallitas húmedas. 🎉', likes: 8, date: 'Ayer' }
];

export function initGuestbook(triggerConfetti) {
  const form = document.getElementById('guestbook-form');
  const container = document.getElementById('guestbook-posts-container');
  if (!form || !container) return;

  let posts = JSON.parse(localStorage.getItem(STORAGE_KEY_GUESTBOOK)) || DEFAULT_POSTS;

  function renderPosts() {
    container.innerHTML = '';
    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = `guestbook-post-card ${post.team === 'Niña' ? 'post-pink' : 'post-blue'}`;
      card.innerHTML = `
        <div class="post-header">
          <div>
            <strong class="post-author">${post.name}</strong>
            <span class="post-badge ${post.team === 'Niña' ? 'badge-pink' : 'badge-blue'}">Equipo ${post.team}</span>
          </div>
          <span class="post-date">${post.date}</span>
        </div>
        <p class="post-body">"${post.text}"</p>
        <div class="post-footer">
          <button class="btn-like" data-id="${post.id}">
            ❤️ <span>${post.likes}</span>
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    // Wire up like buttons
    container.querySelectorAll('.btn-like').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const post = posts.find(p => p.id === id);
        if (post) {
          post.likes += 1;
          localStorage.setItem(STORAGE_KEY_GUESTBOOK, JSON.stringify(posts));
          renderPosts();
        }
      });
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('gb-name').value.trim();
    const team = document.getElementById('gb-team').value;
    const text = document.getElementById('gb-text').value.trim();

    if (!name || !text) return;

    const newPost = {
      id: Date.now(),
      name: name,
      team: team,
      text: text,
      likes: 1,
      date: 'Justo ahora'
    };

    posts.unshift(newPost);
    localStorage.setItem(STORAGE_KEY_GUESTBOOK, JSON.stringify(posts));
    renderPosts();

    form.reset();

    if (typeof triggerConfetti === 'function') {
      triggerConfetti(team === 'Niña' ? ['#ff758c', '#ffd700'] : ['#4a90e2', '#ffd700']);
    }
  });

  renderPosts();
}
