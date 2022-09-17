var clicks = 0;
var playerName = prompt("Please enter your name!");
var upgradeRequirement = 50;


function increment() { 
    if (playerName != null) {
        document.getElementById("playerName").innerHTML = "Click as fast as you can " + playerName + "!";
    }

    if (clicks >= upgradeRequirement) {
        clicks = clicks + 2;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("currentClickValue").innerHTML = "Clicks are now worth DOUBLE!";
        return;
    }
    clicks = clicks + 1
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("currentClickValue").innerHTML = "Clicks are only worth 1, reach " + upgradeRequirement + " clicks for a surprise!!";
}