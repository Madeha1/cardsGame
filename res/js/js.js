//start
function start() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("winner").style.display = "none";

    for (var i = 0; i < 10; i++)
        document.getElementsByClassName("flip-card")[i].style.visibility = "visible";
    images();
}


//random image
var img = ["./res/img/duck.svg", "./res/img/toys.svg", "./res/img/spaceship.svg", "./res/img/fruit.svg", "./res/img/rabbit.svg"];
var choosen = [0, 0, 0, 0, 0];
var card_number = 0;

function images() {
    while (card_number < 10) {
        var rand = Math.floor(Math.random() * 6);
        if (choosen[rand] < 2) {
            document.getElementById(card_number).src = img[rand];
            choosen[rand]++;
            card_number++;
        }
    }
    var card = document.getElementsByClassName("flip-card-inner");
    setTimeout(function() {
        for (var i = 0; i < 10; i++)
            card[i].style.transform = "rotateY(180deg)";
    }, 500)
    setTimeout(function() {
        for (var i = 0; i < 10; i++)
            card[i].style.transform = "rotateY(360deg)";
    }, 2800)


}
//play the game
var idArr = [11, 11];
var flippedNum = 0;
var winner = 0;

function flip(id) {
    var card = document.getElementsByClassName("flip-card-inner")[id];
    card.style.transform = "rotateY(180deg)";
    if (flippedNum == 0) {
        idArr[flippedNum] = id;
        flippedNum++;
    } else {
        idArr[flippedNum] = id;
        flippedNum = 0;
        var img1 = document.getElementById(idArr[0]);
        var img2 = document.getElementById(idArr[1]);
        if (img1.src == img2.src) {
            winner++;
            setTimeout(function() {
                document.getElementsByClassName("flip-card ")[idArr[0]].style.visibility = "hidden";
                document.getElementsByClassName("flip-card ")[idArr[1]].style.visibility = "hidden";
            }, 1140);
            setTimeout(function() {
                if (winner == 5)
                    document.getElementById("winner").style.display = "block";
            }, 1200)
        } else {
            setTimeout(function() {
                document.getElementsByClassName("flip-card-inner")[idArr[0]].style.transform = "rotateY(360deg)";
                document.getElementsByClassName("flip-card-inner")[idArr[1]].style.transform = "rotateY(360deg)";
            }, 1140);

        }
    }
}