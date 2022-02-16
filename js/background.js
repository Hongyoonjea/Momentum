const images = ["photo.jpeg", "rainbow.png", "sky.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// 가상태그 creatElement로 만듬

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);