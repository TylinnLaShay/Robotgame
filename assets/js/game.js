// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//CONSOLE LOG PLAYER VARIABLES


    
var fight = function(enemyName) {
    // Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");

while(enemyHealth > 0) {
            //ACCEPT OR DEMY FIGHT
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        // If player chooses to fight,then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

        // Check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }

        // Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney -2;
        }
    } else {
        window.alert("You need to choose a valid. Try again!");
    }

    };
    }



for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    fight(enemyNames[i]);
}

 //fight();