type Album = {                    // Define the type for the album object
    artist: string;
    title: string;
    tracks?: number;
};
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
      }
    return album;
}

// Create three album objects
let album1 = make_album('Atif Aslam', 'Doorie');
let album2 = make_album('Arijit Singh', 'Soulful Voice');
let album3 = make_album('Nusrat Fateh Ali Khan', 'Shahen-Shah', 12);// with tracks

console.log(album1);
console.log(album2);
console.log(album3);

