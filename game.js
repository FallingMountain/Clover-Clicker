var game = {
  state: {
  flower: 0,
  Clover1: 0,
  Clover1Cost: 50,
  Clover1Power: 1,
  Clover3: 0,
  Clover3Cost: 2000,
  Clover3Power: 50,
  tap: 1,
	  Up1A: false
}
};
function wipe() {
localStorage.removeItem("cc");
location.reload();
};
var AverageFlowerPerSecond;
setInterval(function() {
AverageFlowerPerSecond = Math.round(game.state.Clover1*game.state.Clover1Power + ((game.state.Clover3*game.state.Clover3Power)/3))
}, 20
	      );
function UpdateAverageFlowerPerSecond(){
	document.getElementById('AverageFlowerPerSecond').innerHTML = AverageFlowerPerSecond
};

function MakeFlowersOutOfThinAir(C0){
    game.state.flower += C0;
    document.getElementById("flower").innerHTML = game.state.flower;
};

function buyC1(){
    var C1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));     //works out the cost of this One Leaf Clover
    if(game.state.flower >= C1C){                                   //checks that the player can afford the One Leaf Clover
        game.state.Clover1 = game.state.Clover1 + 1;                                   //increases number of One Leaf Clovers
    	game.state.flower = game.state.flower - C1C;                          //removes the flowers spent
        document.getElementById('Clover1').innerHTML = game.state.Clover1;  //updates the number of One Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC1C = Math.floor(game.state.Clover1Cost * Math.pow(1.03,game.state.Clover1));       //works out the cost of the next One Leaf Clover
    document.getElementById('Clover1Cost').innerHTML = nextC1C;  //updates the One Leaf Clover cost for the user
};

setInterval(function() {
	MakeFlowersOutOfThinAir(game.state.Clover1Power*game.state.Clover1);}, 1000);

function buyC3(){
    var C3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));     //works out the cost of this Three Leaf Clover
    if(game.state.flower >= C3C){                                   //checks that the player can afford the Three Leaf Clover
        game.state.Clover3 = game.state.Clover3 + 1;                                   //increases number of Three Leaf Clovers
    	game.state.flower = game.state.flower - C3C;                          //removes the flowers spent
        document.getElementById('Clover3').innerHTML = game.state.Clover3;  //updates the number of Three Leaf Clovers for the user
        document.getElementById('flower').innerHTML = game.state.flower;  //updates the number of flowers for the user
    };
    var nextC3C = Math.floor(game.state.Clover3Cost * Math.pow(1.05,game.state.Clover3));       //works out the cost of the next Three Leaf Clover
    document.getElementById('Clover3Cost').innerHTML = nextC3C;  //updates the Three Leaf Clover cost for the user
};

setInterval(function(){
MakeFlowersOutOfThinAir(game.state.Clover3Power*game.state.Clover3)
}, 3000);

setInterval(function(){
	UpdateAverageFlowerPerSecond()
}, 40);

function Up1A() {
	if (game.state.flower >= 500 && game.state.up1A === false) {
		game.state.flower = game.state.flower - 500;
		game.state.Clover1Power *= 2;
		game.state.up1A = true;
	}
};


setInterval(function(){
	document.getElementById('flower').innerHTML = game.state.flower;
}, 20);

	
function save() {
    localStorage.cc = btoa(JSON.stringify(game));
};
function load() {
    if(!localStorage.cc) return;
    game = JSON.parse(atob(localStorage.cc));
};

load();

setInterval(function(){
	save();
}, 15000);
    
