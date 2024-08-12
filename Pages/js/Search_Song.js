const songs = [
    {   title: "What Makes You Beautiful", 
        artist: "One Direction", 
        image: "/Assets/What makes you beautiful-one directionjpg.jpg",
        href: "/Pages/html/Detail_song_Page2.html"
    },

    {   title: "Asing", 
        artist: "Juicy Luicy", 
        image: "/Assets/Asing-juicy luicy.jpeg",
        href: "/Pages/html/Detail_song_Page4.html"

    },
    {   title: "At My Worst", 
        artist: "Pink Sweat", 
        image: "/Assets/at my worst- pink sweat.jpeg",
        href: "/Pages/html/Detail_song_Page5.html"
    },
    {   title: "Count On Me", 
        artist: "Bruno Mars", 
        image: "/Assets/bruno mars -count on.jpg",
        href: "/Pages/html/Detail_song_Page1.html"
    },
    {   title: "Love Decorate", 
        artist: "An,Gumi", 
        image: "/Assets/Love decorate- an.jpeg",
        href: "/Pages/html/Detail_song_Page6.html"
    },
    {   title: "Orange", 
        artist: "7!!", 
        image: "/Assets/orange-7.jpg",
        href: "/Pages/html/Detail_song_Page3.html"
    },
];

const searchInput = document.getElementById('search_input');
const songList = document.getElementById('songList');

function filterSongs(searchTerm) {
    return songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function displaySearchResults() {
    const searchTerm = searchInput.value.trim();

    let filteredSongs;
    if (searchTerm === '') {
        filteredSongs = songs;
    } else {
        filteredSongs = filterSongs(searchTerm);
    }

    songList.innerHTML = '';
    filteredSongs.forEach(song => {
        const songElement = document.createElement('a');
        songElement.classList.add('song_list');
        songElement.href = `/Pages/html/Detail_song_Page.html?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist)}`;
        songElement.innerHTML = `
        <a href="${song.href}" class="song_list">
            <img src="${song.image}" alt="${song.title}" draggable="false">
            <div>
                <p>${song.title}</p>
                <p>${song.artist}</p>
            </div>
        </a>
        `;
        songList.appendChild(songElement);
    });
}
displaySearchResults();

searchInput.addEventListener('input', displaySearchResults);