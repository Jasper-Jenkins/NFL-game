function PlayersController() {

    //PRIVATE
    var playersService = new PlayersService(drawPlayerSelect)
    this.getPlayers = function getPlayers(e) {
      debugger
        e.preventDefault();
        var firstname = e.target.firstname.value;
      debugger
        // var players = playersService.getPlayers; //after get music by artist returns what are you doing with the objects?
        // document.getElementById("playerPick").innerText=players
      //  drawPlayerSelect()
      }

    function drawPlayerSelect(chars) {
        var template = "<h1>Choose Wisely</h1>";
        console.log(chars)
        for (var i = 0; i < 3; i++) {   ////chars.length
            var char = chars[i];
            template += `
                <div>
                 <img src="${char.photo}" alt ="${char.firstname}">
                 <p>Name: ${char.firstname}</p>
                 <button onclick="app.controller.playersController.addToTeam(${char.id})">Add to team</button>
                </div>
            `
           }
        document.getElementById("playerPick").innerHTML = template;
    }

    function drawPlayerOnTeam(chars) {
        var template = "<h1>Team Assemled</h1>";
        console.log(chars)
        // for (var i = 0; i < 3; i++) {   ////chars.length
            var char = chars[i];
            template += `
                <div>
                 <img src="${char.photo}" alt ="${char.firstname}">
                 <p>Name: ${char.firstname}</p>
                 <button onclick="app.controller.playersController.myTeam(${char.id})">Add to team</button>
                </div>
            `
            debugger 
     //       }
        document.getElementById("playerPick").innerHTML = template;
    }

    //PUBLIC

   // document.getElementById('myTeam').innerHTML = playersService.getPlayers()
debugger




this.addToTeam = function addToTeam(id) {
 playersService.addToTeam(id, drawPlayerOnTeam);
};

// this.removeFromTeam = function removeFromTeam(id) {
//   playersService.removeFromTeam(id, drawMyTeam)
// };
}