/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }

/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const newPlaylist = {
      name: playlistName,
      songs: [],
    };

    playlists = [...playlists, newPlaylist];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => playlists;

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    playlists = playlists.filter((playlist) => {
      return playlistName !== playlist.name;
    });
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    // Find the playlist by name
    const playlist = playlists.find((p) => p.name === playlistName);
    
    // If playlist doesn't exist, throw an error
    if (!playlist) {
      throw new Error(`Playlist "${playlistName}" not found`);
    }
    
    // Create a new song object
    const newSong = {
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      duration: song.duration,
      favorite: song.favorite || false
    };

    // Add the song to the playlist
    playlist.songs.push(newSong); // TODO spread operator
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {};

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   * @returns {void}
   */
  const favoriteSong = (playlistName, title) => {};

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {void}
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return {
    createPlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    sortSongs,
    getAllPlaylists,
    removePlaylist,
    favoriteSong,
  };
};
const playlistLogger = musicCatalog();

console.log('Create rock playlist');
playlistLogger.createPlaylist('rock');
playlistLogger.createPlaylist('pop');

console.log('Get all the playlists');
console.log(playlistLogger.getAllPlaylists());

console.log("Let's remove pop playlist");
playlistLogger.removePlaylist('pop');
console.log(
  'Las playlist disponibles después de borrar "pop" son: \n',
  playlistLogger.getAllPlaylists()
);
const newSong1 = {
  title:'test 1',
  artist:'test 1',
  genre:'test 1',
  duration: 100,
  favorite: false
};
const newSong2 = {
  title: 'test 2',
  artist:'test 2',
  genre:'test 2',
  duration:200,
  favorite: true
};

playlistLogger.addSongToPlaylist('rock', newSong1);
console.log('After SONG 1', playlistLogger.getAllPlaylists());
playlistLogger.addSongToPlaylist('rock', newSong2);

console.log('After SONG 2', playlistLogger.getAllPlaylists());
export default musicCatalog;
