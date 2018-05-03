function PlayersService(callback){
    var playersData = []
    var myTeam = []
  
    //...
    //...
     function loadPlayersData(){
       //check if the player already has a copy of the NFL playersData
       var localData = localStorage.getItem('playersData');
      //if they do, pull from there
       if(localData){
           playersData = JSON.parse(localData);
           //return will short-circuit the loadPlayersData function
           //this will prevent the code below from ever executing
           return callback()
       }
       //if not go get that data
       var url = "https://bcw-getter.herokuapp.com/?url=";
       var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
       var apiUrl = url + encodeURIComponent(endpointUri);
 
         $.getJSON(apiUrl, function(data){
           playersData = data.body.players;
           console.log('Player Data Ready')
           console.log('Writing Player Data to localStorage')
           localStorage.setItem('playersData', JSON.stringify(playersData))
           console.log('Finished Writing Player Data to localStorage')
           callback()
         });
     } 
     
this.getPlayers = function getPlayers(){  // retrieve an array of players
    return playersData
}
this.getMyTeam = function getMyTeam(){  // retrieve an array of my team members
    return myTeam
}

this.addMyTeam = function addMyTeam(newCharacterId, cb) { ///////---- this may need to change from ID to another searchable element
    //Find itterates over an array, looking at each object in the array, passing it to a function, that function must return true or false to determine if that object is the one you are looking for. It will return the first instance of that thing
    var newMember = playersData.find(function(char){
      return char.id == newCharacterId
    })
    myTeam.push(newMember)
    cb(myTeam);
  };


loadPlayersData(); //call the function above every time we create a new service
}