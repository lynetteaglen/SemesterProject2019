//save data to session storage
sessionStorage.setItem('Player', 'Character');

//get saved data from session storage
let data = sessionStorage.getItem('Player');

// Remove saved data from sessionStorage
sessionStorage.removeItem('Player');

// Remove all saved data from sessionStorage
sessionStorage.clear();