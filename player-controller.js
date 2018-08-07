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
                 <img src="${char.photo}" alt ="${char.fullname}">
                 <p>Name: ${char.fullname}</p>
                 <p>Position: ${char.position}</p>
                 <p>Team: ${char.pro_team}</p>
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
                <div class="players card">             
                <img class="card-img-top" src="${char.photo}" alt="${char.fullname}">
                   <div class="card-body">     
                    <p class="">Name: ${char.fullname}</p>
                    <p class="">Position: ${char.position}</p>
                    <p class="">Team: ${char.pro_team}</p>
                    <button class="btn btn-primary" onclick="app.controller.playersController.removeFromTeam(${char.id})">Remove Player</button>
                </div></div>
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
