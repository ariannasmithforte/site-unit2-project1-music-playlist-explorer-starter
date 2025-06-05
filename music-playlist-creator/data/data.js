const playlists = [
  {
    playlistID: 1,
    playlist_name: "Broadway Belts & Ballads",
    playlist_author: "Jamie Lin",
    playlist_art: "assets/img/broadway.jpg",
    playlist_alt: "A vibrant photo of a NYC Broadway theater district at night",
    like_icon: "assets/img/heart.png",
    like_count: 153,
    songs: [
      {
        title: "Satisfied",
        artist: "Hamilton Cast",
        album: "Hamilton",
        duration: "5:27",
        imageUrl: "assets/img/satisfied.jpg"
      },
      {
        title: "Defying Gravity",
        artist: "Idina Menzel",
        album: "Wicked",
        duration: "3:54",
        imageUrl: "assets/img/defying.jpg"
      },
      {
        title: "Waving Through a Window",
        artist: "Ben Platt",
        album: "Dear Evan Hansen",
        duration: "4:09",
        imageUrl: "assets/img/window.jpg"
      },
      {
        title: "Corner of the Sky",
        artist: "Stephen Schwartz",
        album: "Pippin (New Broadway Cast)",
        duration: "3:04",
        imageUrl: "assets/img/cornerofthesky.jpg"
      },
      {
        title: "Journey to the Past",
        artist: "Christy Altomare",
        album: "Anastasia (Original Broadway Cast)",
        duration: "3:35",
        imageUrl: "assets/img/journeytothepast.jpg"
      },
      {
        title: "World Burn",
        artist: "Taylor Louderman",
        album: "Mean Girls (Original Broadway Cast)",
        duration: "3:23",
        imageUrl: "assets/img/worldburn.jpg"
      }

    ]
  },
  {
    playlistID: 2,
    playlist_name: "Silk & Honey",
    playlist_author: "Tiana Brooks",
    playlist_art: "assets/img/rnb.jpg",
    playlist_alt: "Close-up of a spinning R&B vinyl record",
    like_count: 204,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "Talk",
        artist: "H.E.R.",
        album: "Back of My Mind",
        duration: "3:35",
        imageUrl: "assets/img/talk.jpg"
      },
      {
        title: "Adorn",
        artist: "Miguel",
        album: "Kaleidoscope Dream",
        duration: "3:14",
        imageUrl: "assets/img/adorn.jpg"
      },
      {
        title: "Can We Talk",
        artist: "Tevin Campbell",
        album: "I'm Ready",
        duration: "4:45",
        imageUrl: "assets/img/canwetalk.jpg"
      },
      {
        title: "Love",
        artist: "Keyshia Cole",
        album: "The Way It Is",
        duration: "4:17",
        imageUrl: "assets/img/love_keyshia.jpg"
      },
      {
        title: "Come Over",
        artist: "Faith Evans",
        album: "Faithfully",
        duration: "5:37",
        imageUrl: "assets/img/comeover.jpg"
      },
      {
        title: "Tadow",
        artist: "Masego & FKJ",
        album: "Tadow - Single",
        duration: "5:01",
        imageUrl: "assets/img/tadow.jpg"
      }
    ]
  },
  {
    playlistID: 3,
    playlist_name: "Soul Full of Grace",
    playlist_author: "Malik Rivers",
    playlist_art: "assets/img/soul.jpg",
    playlist_alt: "A woman in a flowing white dress singing under soft lights",
    like_count: 189,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "Golden",
        artist: "Jill Scott",
        album: "Beautifully Human",
        duration: "4:38",
        imageUrl: "assets/img/golden.jpg"
      },
      {
        title: "Superstition",
        artist: "Stevie Wonder",
        album: "Talking Book",
        duration: "4:26",
        imageUrl: "assets/img/superstition.jpg"
      },
      {
        title: "Cranes in the Sky",
        artist: "Solange",
        album: "A Seat at the Table",
        duration: "4:11",
        imageUrl: "assets/img/cranes.jpg"
      },
      {
        title: "Brown Skin",
        artist: "India.Arie",
        album: "Acoustic Soul",
        duration: "4:03",
        imageUrl: "assets/img/brownskin.jpg"
      },
      {
        title: "Lovely Day",
        artist: "Bill Withers",
        album: "Menagerie",
        duration: "4:15",
        imageUrl: "assets/img/lovelyday.jpg"
      },
      {
        title: "Smooth Operator",
        artist: "Sade",
        album: "Diamond Life",
        duration: "4:58",
        imageUrl: "assets/img/smoothoperator.jpg"
      }
    ]
  },
  {
    playlistID: 4,
    playlist_name: "Mic Drop Moments",
    playlist_author: "DeShawn King",
    playlist_art: "assets/img/rap.jpg",
    playlist_alt: "Two rappers mid-battle on stage in front of a crowd",
    like_count: 245,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "Alright",
        artist: "Kendrick Lamar",
        album: "To Pimp a Butterfly",
        duration: "3:39",
        imageUrl: "assets/img/alright.jpg"
      },
      {
        title: "Way 2 Sexy",
        artist: "Drake",
        album: "Certified Lover Boy",
        duration: "4:17",
        imageUrl: "assets/img/way2sexy.jpg"
      },
      {
        title: "F.N.F.",
        artist: "GloRilla",
        album: "F.N.F. (Let's Go)",
        duration: "2:49",
        imageUrl: "assets/img/fnf.jpg"
      },
      {
        title: "U Don't Know",
        artist: "Jay-Z ft. M.O.P.",
        album: "The Blueprint",
        duration: "3:19",
        imageUrl: "assets/img/udontknow.jpg"
      },
      {
        title: "Savage Remix",
        artist: "Megan Thee Stallion ft. Beyoncé",
        album: "Suga",
        duration: "4:02",
        imageUrl: "assets/img/savageremix.jpg"
      },
      {
        title: "Clout",
        artist: "Offset ft. Cardi B",
        album: "Father of 4",
        duration: "3:25",
        imageUrl: "assets/img/clout.jpg"
      }
    ]
  },
  {
    playlistID: 5,
    playlist_name: "Bubblegum & Bangers",
    playlist_author: "Riley Quinn",
    playlist_art: "assets/img/pop.jpg",
    playlist_alt: "A pastel pink room with retro pop music posters on the wall",
    like_count: 172,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        duration: "3:23",
        imageUrl: "assets/img/levitating.jpg"
      },
      {
        title: "Break My Soul",
        artist: "Beyoncé",
        album: "RENAISSANCE",
        duration: "4:38",
        imageUrl: "assets/img/breakmysoul.jpg"
      },
      {
        title: "Vampire",
        artist: "Olivia Rodrigo",
        album: "GUTS",
        duration: "3:39",
        imageUrl: "assets/img/vampire.jpg"
      },
      {
        title: "Bang Bang",
        artist: "Jessie J, Ariana Grande, Nicki Minaj",
        album: "Sweet Talker",
        duration: "3:19",
        imageUrl: "assets/img/bangbang.jpg"
      },
      {
        title: "Confident",
        artist: "Demi Lovato",
        album: "Confident",
        duration: "3:25",
        imageUrl: "assets/img/confident.jpg"
      },
      {
        title: "Run the World (Girls)",
        artist: "Beyoncé",
        album: "4",
        duration: "3:56",
        imageUrl: "assets/img/runtheworld.jpg"
      }
    ]
  },
  {
    playlistID: 6,
    playlist_name: "Sleepyhead Serenades",
    playlist_author: "Nico Martinez",
    playlist_art: "assets/img/sleep.jpg",
    playlist_alt: "A cozy bedroom with a glowing “Get Some Sleep” neon sign",
    like_count: 221,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "Night Owl",
        artist: "Galimatias",
        album: "Renaissance Boy",
        duration: "3:45",
        imageUrl: "assets/img/nightowl.jpg"
      },
      {
        title: "Saturn",
        artist: "Sleeping at Last",
        album: "Atlas: Year One",
        duration: "4:49",
        imageUrl: "assets/img/saturn.jpg"
      },
      {
        title: "Ocean Eyes (Acoustic)",
        artist: "Billie Eilish",
        album: "Don't Smile at Me",
        duration: "3:20",
        imageUrl: "assets/img/oceaneyes.jpg"
      },
      {
        title: "The Stable Song",
        artist: "Gregory Alan Isakov",
        album: "That Sea, The Gambler",
        duration: "4:43",
        imageUrl: "assets/img/stable.jpg"
      },
      {
        title: "Roslyn",
        artist: "Bon Iver & St. Vincent",
        album: "New Moon Soundtrack",
        duration: "4:00",
        imageUrl: "assets/img/roslyn.jpg"
      },
      {
        title: "Holocene",
        artist: "Bon Iver",
        album: "Bon Iver",
        duration: "5:36",
        imageUrl: "assets/img/holocene.jpg"
      }

    ]
  },
  {
    playlistID: 7,
    playlist_name: "Indie Bloom",
    playlist_author: "Ezra Blake",
    playlist_art: "assets/img/indie.jpg",
    playlist_alt: "A serene photo of the ocean glittering under the sun",
    like_count: 192,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "Motion Sickness",
        artist: "Phoebe Bridgers",
        album: "Stranger in the Alps",
        duration: "3:49",
        imageUrl: "assets/img/motionsickness.jpg"
      },
      {
        title: "Dog Days Are Over",
        artist: "Florence + The Machine",
        album: "Lungs",
        duration: "4:12",
        imageUrl: "assets/img/dogdays.jpg"
      },
      {
        title: "Youth",
        artist: "Daughter",
        album: "If You Leave",
        duration: "4:14",
        imageUrl: "assets/img/youth.jpg"
      },
      {
        title: "Seventeen",
        artist: "Sharon Van Etten",
        album: "Remind Me Tomorrow",
        duration: "4:17",
        imageUrl: "assets/img/seventeen.jpg"
      },
      {
        title: "Angela",
        artist: "The Lumineers",
        album: "Cleopatra",
        duration: "3:21",
        imageUrl: "assets/img/angela.jpg"
      },
      {
        title: "Sweet Disposition",
        artist: "The Temper Trap",
        album: "Conditions",
        duration: "3:51",
        imageUrl: "assets/img/sweetdisposition.jpg"
      }

    ]
  },
  {
    playlistID: 8,
    playlist_name: "Back Then Vibes",
    playlist_author: "Chelsea Monroe",
    playlist_art: "assets/img/throwback.jpg",
    playlist_alt: "A vintage record player spinning a vinyl album",
    like_count: 277,
    like_icon: "assets/img/heart.png",
    songs: [
      {
        title: "No Scrubs",
        artist: "TLC",
        album: "FanMail",
        duration: "3:39",
        imageUrl: "assets/img/noscrubs.jpg"
      },
      {
        title: "My Boo",
        artist: "Usher & Alicia Keys",
        album: "Confessions",
        duration: "3:42",
        imageUrl: "assets/img/myboo.jpg"
      },
      {
        title: "Milkshake",
        artist: "Kelis",
        album: "Tasty",
        duration: "3:08",
        imageUrl: "assets/img/milkshake.jpg"
      },
      {
        title: "Candy",
        artist: "Mandy Moore",
        album: "So Real",
        duration: "3:56",
        imageUrl: "assets/img/candy.jpg"
      },
      {
        title: "He Wasn't Man Enough",
        artist: "Toni Braxton",
        album: "The Heat",
        duration: "4:01",
        imageUrl: "assets/img/hewasnt.jpg"
      },
      {
        title: "Thong Song",
        artist: "Sisqó",
        album: "Unleash the Dragon",
        duration: "4:13",
        imageUrl: "assets/img/thongsong.jpg"
      }

    ]
  }
];
