let gameArray = ["rock", "paper", "scissors", "lizard", "spock"];

// Plyer1

let randomResult1 = gameArray[Math.floor(Math.random() * gameArray.length)];

console.log(randomResult1);

let randomImageSrc = "images/" + randomResult1 + ".png" //game img1


document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);


//player2

let randomResult2 = gameArray[Math.floor(Math.random() * gameArray.length)];

console.log(randomResult2);

let randomImageSrc2 = "images/" + randomResult2 + ".png" //game img2

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


$(".credit").click(function() {
    $(".list").toggle(".list-show");
});