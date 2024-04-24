let arr = [
  "https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFuaW1lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1582789991349-8f8e6eb15308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFuaW1lfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"
];


//  Randomly Image Change
function randomImageChange() {

  function randomIndex() {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }
  randomIndex();

  function changeImage() {
    let imgChange = randomIndex();
    document.querySelector(".img").src = imgChange;
  }
  setInterval(changeImage, 2000);
}
randomImageChange();


/*

//  Linear Image change 
function linearImageChange() {
  let currentIdx = 0;
  function imageChange() {
    document.querySelector(".img").src = arr[currentIdx];
    currentIdx = (currentIdx + 1) % arr.length; //  move to next image
  }
  setInterval(imageChange, 2000);
}
linearImageChange();

*/