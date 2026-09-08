async function loadTopAnime() {
  const cards = document.querySelectorAll('.anime-card');

  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    const result = await response.json();
    const animeList = result.data.slice(0, 8); // Ambil 8 anime (4 atas, 4 bawah)

    animeList.forEach((anime, index) => {
      if (cards[index]) {
        const image = anime.images.jpg.image_url;
        const title = anime.title;
        const episodes = anime.episodes ? `${anime.episodes} Eps` : 'Eps ?';

        cards[index].innerHTML = `
          <img src="${image}" alt="${title}">
          <div class="anime-info">
            <span class="anime-title" title="${title}">${title}</span>
            <span class="anime-episodes">${episodes}</span>
          </div>
        `;
      }
    });
  } catch (error) {
    console.error('Gagal memuat data anime:', error);
  }
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', loadTopAnime);