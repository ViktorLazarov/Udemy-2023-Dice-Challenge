function randomNumber1() {
    let randNum1 = Math.floor(Math.random() * 6);
    return randNum1;
}
function randomNumber2() {
    let randNum2 = Math.floor(Math.random() * 6);
    return randNum2;
}

function getLink1() {
    let imgArr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    let randNum = randomNumber1();
    let link = imgArr[randNum];
    let output1 = [randNum,link];
    return output1;
    
}
function getLink2() {
    let imgArr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    let randNum = randomNumber2();
    let link = imgArr[randNum];
    let output2 = [randNum,link];
    return output2;
}

function setItems(func1, func2) {
    if (func1[0] > func2[0]) {
        document.querySelector("h2").innerHTML = "Player1 Wins!";
    } else if (func2[0]> func1[0]){
        document.querySelector("h2").innerHTML = "Player2 Wins!";
    } else {
        document.querySelector("h2").innerHTML = "It's a tie!";
    }
    document.querySelector(".img1").setAttribute("src", func1[1]);
    document.querySelector(".img2").setAttribute("src", func2[1]);
}

setItems(getLink1(),getLink2());







