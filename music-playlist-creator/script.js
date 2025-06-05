document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".playlist-container");
  container.innerHTML = ""; // Clear hardcoded HTML

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
      <p class="like-count">${playlist.like_count} Likes</p>
    `;

    container.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const playlistCards = document.querySelectorAll(".playlist-card");

  // Add click listener to each playlist card
  playlistCards.forEach(card => {
    card.addEventListener("click", () => {
      modal.classList.toggle("show");
    });
  });

  // Close button inside modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Close modal when clicking outside the modal-content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});

