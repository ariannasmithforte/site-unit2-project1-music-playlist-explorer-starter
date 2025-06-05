document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".playlist-container");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  // Clear container and populate playlists dynamically
  container.innerHTML = "";
  if (playlists.length === 0) {
    const noDataMsg = document.createElement("p");
    noDataMsg.textContent = "No playlists added.";
    noDataMsg.className = "no-data";
    container.appendChild(noDataMsg);
    return;
  }

  playlists.forEach(playlist => {
    const card = document.createElement("article");
    card.className = "playlist-card";

    card.innerHTML = `
      <img src="${playlist.playlist_art}" alt="Cover art for ${playlist.playlist_name}" />
      <h2 class="playlist-title">${playlist.playlist_name}</h2>
      <p class="creator-name">${playlist.playlist_author}</p>
      <p class="like-section">
        <span class="like-count">${playlist.like_count}</span> Likes
        <span class="heart-icon" style="cursor:pointer; color:black; margin-left:8px; font-size:1.2em;">&#10084;</span>
      </p>
    `;

    container.appendChild(card);
  });

  // Event delegation for heart icon toggling and modal opening
  container.addEventListener('click', (e) => {
    const heart = e.target.closest('.heart-icon');
    if (heart) {
      // Click was on heart icon: toggle like and color
      const countSpan = heart.previousElementSibling;
      let count = parseInt(countSpan.textContent, 10);
      const liked = heart.classList.toggle('liked');
      countSpan.textContent = liked ? count + 1 : count - 1;
      heart.style.color = liked ? 'red' : 'black';

      
      e.stopPropagation();
      return;
    }

    // If click was NOT on heart, check if it was on a playlist card (or child)
    const card = e.target.closest('.playlist-card');
    if (card) {
      // Open modal
      modal.classList.add('show');
      // You can add code here to fill modal content based on clicked playlist if needed
    }
  });

  // Close button closes modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Clicking outside modal-content closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
