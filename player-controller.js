function PlayersController() {

    //PRIVATE
    var playersService = new PlayersService(drawPlayerSelect) //drawPlayerSelect

    this.getPlayers = function getPlayers(e) {
        e.preventDefault();
        var firstname = e.target.player.value; //assign value from user input
        if (firstname == "") {
        } else {
            playersService.sortByName(firstname, drawPlayerSelect)
        }
        //drawPlayerSelect(players)
    }

    function drawPlayerSelect(chars) {
        var template = "<h1>Choose Wisely</h1>";
        console.log(chars)
        for (var i = 0; i < 5; i++) {   ////chars.length
            var char = chars[i];
            template += `
                <div class="players">
                 <img src="${char.photo}" alt ="${char.firstname}">
                 <p>Name: ${char.firstname}</p>
                 <p>Name: ${char.position}</p>
                 <button class="btn btn-primary"onclick="app.controller.playersController.addToTeam(${char.id})">Add to team</button>
                </div>
            `
        }
        document.getElementById("playerPick").innerHTML = template;
        //  debugger
    }

    function drawPlayerOnTeam(chars) {
        var template = "<h1>Team Assemled</h1>";
        console.log(chars)
        for (var i = 0; i < chars.length; i++) {   ////chars.length
            var char = chars[i];
            template += `
                <div class="players">
             
                <img src="${char.photo}" alt ="${char.firstname}">
                <p>Name: ${char.firstname}</p>
                <p>Name: ${char.position}</p>
                <button onclick="app.controller.playersController.removeFromTeam(${char.id})">Remove From Team</button>
                </div>
            `
            //   debugger 
        }
        document.getElementById("myTeam").innerHTML = template;
    }

    //PUBLIC



    function filterPlayers() { //filters through the players[]and removes elements that dont have a first name 
        playersService.filterPlayers(drawPlayerSelect);
    }

    this.addToTeam = function addToTeam(id) {
        // var positionCheck = playersService.getMyTeam
        // var check = false;
        // for (var i = 0; i < positionCheck.length; i++) {
        //     if (positionCheck[id].position ==  ) {

        //     }
        // }
        playersService.addToTeam(id, drawPlayerOnTeam);
    };

    this.removeFromTeam = function removeFromTeam(id) {
        playersService.removeFromTeam(id, drawPlayerOnTeam)
    };
    console.log()
    debugger
    filterPlayers(); // this may need to be moved up to the to getPlayers once I removed the auto fill. 
    debugger
}
