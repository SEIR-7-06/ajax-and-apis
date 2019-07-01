// API Docs at: 
// https://developer.spotify.com/web-api/search-item/


const searchByArtist = (keyword) => {
  const url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
}


const searchByTrack = (keyword) => {
  const url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}