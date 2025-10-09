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
  const getAllPlaylists = () =>
    playlists.map((playlist) => ({ ...playlist, songs: [...playlist.songs] }));

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    playlists = playlists.filter((playlist) => playlistName !== playlist.name);
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
      favorite: song.favorite || false,
    };

    // Add the song to the playlist
    playlist.songs = [...playlist.songs, newSong];
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    // Find the playlist by name
    const playlist = playlists.find((p) => p.name === playlistName);

    // If playlist doesn't exist, throw an error
    if (!playlist) {
      throw new Error(`Playlist "${playlistName}" not found`);
    }

    // If song does not exist, throw an error
    const songExists = playlist.songs.find((song) => song.title === title);
    if (!songExists) {
      throw new Error(`Song "${songExists}" not found in ${playlistName}`);
    }

    // Replace playlist.songs without selected song
    playlist.songs = playlist.songs.filter((song) => song.title !== title);
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   * @returns {void}
   */
  const favoriteSong = (playlistName, title) => {
    // Find the playlist
    const playlist = playlists.find((p) => p.name === playlistName);

    // Find the song
    const song = playlist.songs.find((song) => song.title === title);

    // Change favorite status (default: false)
    song.favorite = !song.favorite;
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {void}
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    // Is criterion valid?
    const validCriteria = ['title', 'artist', 'duration'];

    if (!validCriteria.includes(criterion)) {
      throw new Error(
        `Invalid criterion: ${criterion}. Must be one of: ${validCriteria.join(', ')}`
      );
    }

    const playlistIndex = playlists.findIndex((p) => p.name === playlistName);

    // Does playlist exist?
    if (playlistIndex === -1) {
      throw new Error('List not found!');
    }

    // Duration (Number), title/artist (String)
    const compareFunction =
      criterion === 'duration'
        ? (a, b) => a.duration - b.duration
        : (a, b) => a[criterion].localeCompare(b[criterion]);

    // Create a copy of playlists with sorted songs
    const sortedSongs = [...playlists[playlistIndex].songs].sort(compareFunction);

    // Return a copy of playlists with the sorted playlist
    playlists = [
      ...playlists.slice(0, playlistIndex),
      { ...playlists[playlistIndex], songs: sortedSongs },
      ...playlists.slice(playlistIndex + 1),
    ];
  };

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

export default musicCatalog;
