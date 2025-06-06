// Main script for Music Playlist Explorer
console.log("Script loaded and running!");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  console.log("Playlists data:", playlists);
  const container = document.querySelector(".playlist-container");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const modalTitle = document.querySelector(
    ".modal-content .playlist-info .playlist-title"
  );
  const modalCreator = document.querySelector(
    ".modal-content .playlist-info .playlist-creator"
  );
  const modalImage = document.querySelector(
    ".modal-content .playlist-header img"
  );
  const modalSongsList = document.getElementById("song-container");
  const shuffleBtn = document.getElementById("shuffle-button");
  const searchInput = document.getElementById("search-input");

  // Variable to keep track of the currently displayed playlist
  let currentPlaylistID = null;

  // Function to create a playlist card
  function createPlaylistCard(playlist) {
    const card = document.createElement("article");
    card.className = "playlist-card";
    card.dataset.id = playlist.playlistID; // store ID for later reference

    card.innerHTML = `
      <button class="delete-btn" title="Delete playlist">×</button>
      <img class="playlist-img" src="${playlist.playlist_art}" alt="${playlist.playlist_alt}" />
      <h2 class="playlist-title">${playlist.playlist_name}</h2>
      <p class="creator-name">${playlist.playlist_author}</p>
      <p class="like-section">
        <span class="like-count">${playlist.like_count}</span>&nbsp;Likes
        <span class="heart-icon" style="cursor:pointer; color:black; margin-left:8px; font-size:1.2em;">&#10084;</span>
      </p>
    `;

    // Add event listener for delete button
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent opening the modal when clicking delete

      // Get playlist ID
      const playlistID = parseInt(card.dataset.id, 10);

      // Confirm deletion
      if (
        confirm(`Are you sure you want to delete "${playlist.playlist_name}"?`)
      ) {
        // Find playlist index
        const playlistIndex = playlists.findIndex(
          (p) => p.playlistID === playlistID
        );

        if (playlistIndex !== -1) {
          // Remove playlist from array
          playlists.splice(playlistIndex, 1);

          // Update display
          displayPlaylists(playlists);
        }
      }
    });

    return card;
  }

  // Function to display playlists
  function displayPlaylists(playlistsToDisplay) {
    // Clear container
    container.innerHTML = "";

    if (playlistsToDisplay.length === 0) {
      const noResultsMsg = document.createElement("p");
      noResultsMsg.textContent = "No playlists match your search.";
      noResultsMsg.className = "no-results";
      container.appendChild(noResultsMsg);
      return;
    }

    // Create and append playlist cards
    playlistsToDisplay.forEach((playlist) => {
      const card = createPlaylistCard(playlist);
      container.appendChild(card);
    });
  }

  // Initial display of all playlists
  if (playlists && playlists.length === 0) {
    const noDataMsg = document.createElement("p");
    noDataMsg.textContent = "No playlists added.";
    noDataMsg.className = "no-data";
    container.appendChild(noDataMsg);
  } else {
    displayPlaylists(playlists);
  }

  // Search functionality
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") {
      // If search is empty, show all playlists
      displayPlaylists(playlists);
    } else {
      // Filter playlists based on search term
      const filteredPlaylists = playlists.filter(
        (playlist) =>
          playlist.playlist_name.toLowerCase().includes(searchTerm) ||
          playlist.playlist_author.toLowerCase().includes(searchTerm)
      );

      displayPlaylists(filteredPlaylists);
    }
  });

  // Event delegation for heart icon toggle and modal open
  container.addEventListener("click", (e) => {
    const heart = e.target.closest(".heart-icon");
    if (heart) {
      const countSpan = heart.previousElementSibling;
      let count = parseInt(countSpan.textContent, 10);
      const liked = heart.classList.toggle("liked");
      countSpan.textContent = liked ? count + 1 : count - 1;
      heart.style.color = liked ? "red" : "black";
      e.stopPropagation();
      return;
    }

    const card = e.target.closest(".playlist-card");
    if (card) {
      const playlistID = parseInt(card.dataset.id, 10);
      currentPlaylistID = playlistID; // Store the current playlist ID
      const playlist = playlists.find((p) => p.playlistID === playlistID);

      if (playlist) {
        // Update modal header with playlist info
        modalTitle.textContent = playlist.playlist_name;
        modalCreator.textContent = playlist.playlist_author;
        modalImage.src = playlist.playlist_art;
        modalImage.alt = playlist.playlist_alt;

        // Clear old songs
        modalSongsList.innerHTML = "";

        // Add songs to modal
        playlist.songs.slice(0, 6).forEach((song) => {
          const songDiv = document.createElement("div");
          songDiv.className = "song-list";
          songDiv.innerHTML = `
            <img src="${song.imageUrl}" alt="Cover art for ${song.title}" />
            <div class="song-info">
              <h3 class="song-title">${song.title}</h3>
              <p class="artist-name">${song.artist}</p>
              <p class="album-name">${song.album}</p>
              <p class="song-duration">${song.duration}</p>
            </div>
          `;
          modalSongsList.appendChild(songDiv);
        });

        // Show modal
        modal.classList.add("show");
      }
    }
  });

  // Function to shuffle an array
  function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  // Function to update the songs display in the modal
  function updateSongsDisplay(songs) {
    // Clear old songs
    modalSongsList.innerHTML = "";

    // Add songs to modal
    songs.slice(0, songs.length).forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.className = "song-list";
      songDiv.innerHTML = `
        <img src="${song.imageUrl}" alt="Cover art for ${song.title}" />
        <div class="song-info">
          <h3 class="song-title">${song.title}</h3>
          <p class="artist-name">${song.artist}</p>
          <p class="album-name">${song.album}</p>
          <p class="song-duration">${song.duration}</p>
        </div>
      `;
      modalSongsList.appendChild(songDiv);
    });
  }

  // Shuffle button event listener
  shuffleBtn.addEventListener("click", () => {
    if (currentPlaylistID !== null) {
      // Find the current playlist
      const playlistIndex = playlists.findIndex(
        (p) => p.playlistID === currentPlaylistID
      );

      if (playlistIndex !== -1) {
        // Shuffle the songs array
        playlists[playlistIndex].songs = shuffleArray(
          playlists[playlistIndex].songs
        );

        // Update the display
        updateSongsDisplay(playlists[playlistIndex].songs);
      }
    }
  });

  // Close modal logic
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    currentPlaylistID = null; // Reset current playlist ID when modal is closed
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      currentPlaylistID = null; // Reset current playlist ID when modal is closed
    }
  });
});
