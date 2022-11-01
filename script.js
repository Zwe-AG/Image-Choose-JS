let myButton = document.getElementById("btnController2");
let myImage = document.getElementById("imageController2");
let myfavourite = document.getElementById("myfav");
let myNoLike = document.getElementById("myDislike");
let originalImage = myImage.src;
let imagestore = [
  "https://images.unsplash.com/photo-1654032390271-6e786c4e49f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1653593349937-1a2a29a614d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1652447385135-6eac80e6012b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1652810454583-b47fe7e961e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NXxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1652334911996-b731733b7648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMnx4SHhZVE1ITGdPY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
];

let counter = 0;
let imageFunction = () => {
  if (counter === 6) {
    myImage.src = originalImage;
    counter = 0;
    return;
  }
  let imageLink = imagestore[counter];
  myImage.src = imageLink;
  counter++;
};

function imagefavFunction() {
  myImage.src = imagestore[3];
}

function imageNoLikeFunction() {
  myImage.src = imagestore[5];
}

myButton.addEventListener("click", imageFunction);
myfavourite.addEventListener("click", imagefavFunction);
myNoLike.addEventListener("click", imageNoLikeFunction);
