function PlayersController() {

    //PRIVATE
    var playersService = new PlayersService()


    function drawPlayerSelect(chars) {
        var template = "<h1>Choose Wisely</h1>";
        for (var i = 0; i < chars.length; i++) {
            var char = chars[i];
            template += `
                <div>
                <p>Description: ${char.description ? char.description : "No description!"}</p>
                <button onclick="app.controllers.marvelController.addToTeam(${char.id})">Add to team</button>
                </div>
            ` 
        }
        document.getElementById("playerPick").innerHTML = template;
    }
    //PUBLIC
    
    document.getElementById('MyTeam').innerHTML = playersService.getPlayers()




}