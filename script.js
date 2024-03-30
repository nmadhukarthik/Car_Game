let score = document.querySelector(".score")
let startScreen = document.querySelector(".startScreen")
let gameArea = document.querySelector(".gameArea")

startScreen.addEventListener("click", start)

let player = { speed: 5 }


function moveDividers()
{
    let dividers = document.querySelectorAll(".divider")
    for(let d of dividers)
    {
        //if(d.y >= 600) { d.y = 0}
        if(d.y >= 662) { d.y = d.y - 750}
        d.y = d.y + player.speed;
        d.style.top = d.y + "px"
    }
}

function gamePlay() {
    console.log("Game Started")
    moveDividers()
    let car = document.querySelector(".car")
    let road = gameArea.getBoundingClientRect()
    //console.log(road)
    if (player.start) 
    {
        if (keyObj.ArrowUp && road.top < player.y ) { player.y = player.y - player.speed }
        if (keyObj.ArrowDown && player.y < road.bottom - 100) { player.y = player.y + player.speed }
        if (keyObj.ArrowLeft && player.x > 0) { player.x = player.x - player.speed }
        if (keyObj.ArrowRight && player.x < road.width - 50) { player.x = player.x + player.speed }

        car.style.top = player.y + "px"
        car.style.left = player.x + "px"

    { requestAnimationFrame(gamePlay) }

    }
}


function start() {
    //console.log("started")
    
    startScreen.classList.add("hide")
    gameArea.classList.remove("hide")
    player.start = true 
    requestAnimationFrame(gamePlay)
   

    let car = document.createElement("div")
    car.innerText = "Car"
    car.className = "car"
    gameArea.append(car)

    player.x = car.offsetLeft
    player.y = car.offsetTop
    console.log("from left", player.x, "from top", player.y)


    for(let x = 0; x<5; x++)
    {
        let div = document.createElement("div")
        div.className = "divider"
        div.y = x*150
        div.style.top = x*150 + "px"
        gameArea.append(div)
    }


    for(let a = 0; a<3; a++)
    {
        let enemy = document.createElement("div")
        enemy.className = "enemy"
        enemy.style.backgroundColor = "red"
        gameArea.append(enemy)
    }













}



let keyObj =
{
    ArrowDown: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false
}

document.addEventListener("keydown", keyPressed)
document.addEventListener("keyup", keyReleased)

function keyPressed(eventDetails) {
    let pressedKey = eventDetails.key
    if (pressedKey in keyObj) {
        keyObj[pressedKey] = true
        console.log(keyObj)
    }
}


function keyReleased(eventDetails) {
    let releasedKey = eventDetails.key
    if (releasedKey in keyObj) {
        keyObj[releasedKey] = false
        console.log(keyObj)
    }
}