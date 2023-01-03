//local storage can only be read by the client-side

localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
localStorage.clear();