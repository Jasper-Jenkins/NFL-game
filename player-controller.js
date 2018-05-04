function PlayersController() {

    //PRIVATE
    var playersService = new PlayersService(drawPlayerSelect)
    this.getPlayers = function getPlayers(e) {
        e.preventDefault();
        var firstname = e.target.firstname.value;
        var players = playersService.getPlayers; //after get music by artist returns what are you doing with the objects?
        document.getElementById("playerPick").innerText=players
      }

    function drawPlayerSelect(chars) {
        var template = "<h1>Choose Wisely</h1>";
        console.log(chars)
        for (var i = 0; i < 5; i++) {   ////chars.length
           
            var char = chars[i];
            if(char.firstname==""){
                char.splice(i, 1)
            }else{
            template += `
                <div>
                <p>Name: ${char.firstname}</p>
                <img src="${char.photo}" alt ="${char.firstname}">
                <p></p>

                
                <button onclick="app.controllers.playersController.addToTeam(${char.id})">Add to team</button>
                </div>
            `
            debugger 
            }
        }
        document.getElementById("playerPick").innerHTML = template;
    }
    //PUBLIC

   // document.getElementById('myTeam').innerHTML = playersService.getPlayers()





this.addToTeam = function addToTeam(id) {
 playersService.addMyTeam(id, drawMyTeam);
};

// this.removeFromTeam = function removeFromTeam(id) {
//   playersService.removeFromTeam(id, drawMyTeam)
// };
}