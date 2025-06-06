// Featured page script for Music Playlist Explorer
document.addEventListener("DOMContentLoaded", () => {
  console.log("Featured page loaded");

  // Get references to search and clear buttons
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const clearButton = document.getElementById("clear-button");

  // Function to select a random playlist
  function getRandomPlaylist() {
    // Get a random index between 0 and playlists.length-1
    const randomIndex = Math.floor(Math.random() * playlists.length);
    return playlists[randomIndex];
  }

  // Function to update the featured playlist display
  function updateFeaturedPlaylist() {
    // Get a random playlist
    const randomPlaylist = getRandomPlaylist();
    console.log("Selected random playlist:", randomPlaylist.playlist_name);

    // Update the featured playlist information
    document.querySelector(".featured-image").src = randomPlaylist.playlist_art;
    document.querySelector(".featured-image").alt = randomPlaylist.playlist_alt;
    document.querySelector(".featured-title").textContent =
      randomPlaylist.playlist_name;
    document.querySelector(
      ".featured-creator"
    ).textContent = `Created by ${randomPlaylist.playlist_author}`;

    // Update the like count
    const likeCountElement = document.querySelector(".like-count");
    likeCountElement.textContent = randomPlaylist.like_count;

    // Clear the existing songs list
    const songsListContainer = document.querySelector(".featured-songs-list");
    songsListContainer.innerHTML = "";

    // Add the songs from the random playlist (up to 6 songs)
    randomPlaylist.songs.slice(0, 6).forEach((song) => {
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
      songsListContainer.appendChild(songDiv);
    });

    // Add event listener for the heart icon
    const heartIcon = document.querySelector(".heart-icon");
    heartIcon.addEventListener("click", () => {
      const liked = heartIcon.classList.toggle("liked");
      const likeCount = parseInt(likeCountElement.textContent, 10);
      likeCountElement.textContent = liked ? likeCount + 1 : likeCount - 1;
      heartIcon.style.color = liked ? "red" : "black";
    });
  }

  // Function to perform search - redirects to index.html with search query
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm !== "") {
      // Redirect to index.html with search query as URL parameter
      window.location.href = `index.html?search=${encodeURIComponent(
        searchTerm
      )}`;
    }
  }

  // Function to clear search
  function clearSearch() {
    searchInput.value = ""; // Clear the input field
  }

  // Search button click event
  searchButton.addEventListener("click", performSearch);

  // Clear button click event
  clearButton.addEventListener("click", clearSearch);

  // Enter key press in search input
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  // Update the featured playlist when the page loads
  updateFeaturedPlaylist();
});
