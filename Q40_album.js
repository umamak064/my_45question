// Define the function make_album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three album objects
var album1 = make_album('Atif Aslam', 'Doorie');
var album2 = make_album('Arijit Singh', 'Soulful Voice');
var album3 = make_album('Nusrat Fateh Ali Khan', 'Shahen-Shah', 12); // with tracks
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
