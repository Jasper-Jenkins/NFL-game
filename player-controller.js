function PlayersController() {

    //PRIVATE
    var playersService = new PlayersService() //drawPlayerSelect


    this.searchPlayers = function searchPlayers(e) {
        e.preventDefault();
        // playersService.loadPlayers()

        //debugger  // console.log(playersService.loadPlayers())
        var searchValue = e.target.player.value; //assign value from user input
        if (searchValue == "") {
            //    filterPlayers()
        } else {
            playersService.sortBySearch(searchValue, drawPlayerSelect)
            //   filterPlayers()
        }
    }

    function drawPlayerSelect(chars) {
        var template = "<h1>Choose Wisely</h1>";
       // console.log(chars)


        for (var i = 0; i < chars.length; i++) {   
            var char = chars[i];
            template += `
                <div class="players">
                 <img src="${char.photo}" alt ="${char.firstname}">
                 <p>Name: ${char.firstname}</p>
                 <p>Name: ${char.position}</p>
                 <p>Name: ${char.pro_team}</p>
                 <button class="btn btn-primary"onclick="app.controller.playersController.addToTeam(${char.id})">Add to team</button>
                </div>
            `
        }
        document.getElementById("playerPick").innerHTML = template;
      
    }

    function drawPlayerOnTeam(chars) {
        var template = "<h1>Team Assemled</h1>";
        console.log(chars)
        for (var i = 0; i < chars.length; i++) {  
            var char = chars[i];
            template += `
                <div class="players">             
                <img src="${char.photo}" alt ="${char.firstname}">
                <p>Name: ${char.firstname}</p>
                <p>Name: ${char.position}</p>
                <p>Name: ${char.pro_team}</p>
                <button onclick="app.controller.playersController.removeFromTeam(${char.id})">Remove From Team</button>
                </div>
            `
            
        }
        document.getElementById("myTeam").innerHTML = template;
    }

    //PUBLIC



    function filterPlayers() { //filters through the players[]and removes elements that dont have a first name 
        playersService.filterPlayers(drawPlayerSelect);
    }

    
    this.addToTeam = function addToTeam(id) {
        playersService.addToTeam(id, drawPlayerOnTeam);
    };
    this.removeFromTeam = function removeFromTeam(id) {
        playersService.removeFromTeam(id, drawPlayerOnTeam)
    };
    
    // this may need to be moved up to the to getPlayers once I removed the auto fill. 

}
