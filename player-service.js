function PlayersService(callback) {
  var playersData = []
  var myTeam = []

  //...
  //...
  function loadPlayersData() {
    //check if the player already has a copy of the NFL playersData
    var localData = localStorage.getItem('playersData');
    //if they do, pull from there
    if (localData) {
      playersData = JSON.parse(localData);
      //return will short-circuit the loadPlayersData function
      //this will prevent the code below from ever executing
      return callback(playersData)// playersData
    }
    //if not go get that data
    var url = "https://bcw-getter.herokuapp.com/?url=";
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var apiUrl = url + encodeURIComponent(endpointUri);

    $.getJSON(apiUrl, function (data) {
      playersData = data.body.players;
      console.log('Player Data Ready')
      console.log('Writing Player Data to localStorage')
      localStorage.setItem('playersData', JSON.stringify(playersData))
      console.log('Finished Writing Player Data to localStorage')
      callback(playersData)//playersData
    });
  }

  this.getPlayers = function getPlayers() {  // retrieve an array of players
    return playersData
  }
  this.getMyTeam = function getMyTeam() {  // retrieve an array of my team members
    return myTeam
  }

  this.filterPlayers = function filterPlayers(cb){
    for(var i = 0; i < playersData.length;i++){
    var removeMember = playersData.find(function (char) {
           return char.firstname == ""
         })
         //indexOf itterates over an array to find the element it was passed and returns the index, if it doesnt find it it will return -1
         var index = playersData.indexOf(removeMember)
         //splice removes object from array
         playersData.splice(index, 1)
        }
        debugger
         cb(playersData)
  }

  this.sortByName = function sortByName(searchValue ,cb){
    for(var i = 0; i < playersData.length;i++){
      var sortedMember = playersData.find(function (char) {
             return char.firstname != searchValue
           })
           //indexOf itterates over an array to find the element it was passed and returns the index, if it doesnt find it it will return -1
           var index = playersData.indexOf(sortedMember)
           //splice removes object from array
           playersData.splice(index, 1)
          }
debugger
           cb(playersData)
  }

  

  this.addToTeam = function addToTeam(newCharacterId, cb) { ///////---- this may need to change from ID to another searchable element
    //Find itterates over an array, looking at each object in the array, passing it to a function, that function must return true or false to determine if that object is the one you are looking for. It will return the first instance of that thing
    var newMember = playersData.find(function (char) {
      return char.id == newCharacterId
    })
    myTeam.push(newMember)
    cb(myTeam);

  };
// this.searchForPlayers = function searchForPlayers(){

// }


  this.removeFromTeam = function removeFromTeam(removeId, draw) {
  //  debugger
    // This is for removing characters from myTeam
    var removeMember = myTeam.find(function (char) {
      return char.id == removeId
    })

    //indexOf itterates over an array to find the element it was passed and returns the index, if it doesnt find it it will return -1
    var index = myTeam.indexOf(removeMember)
    //splice removes object from array
    myTeam.splice(index, 1)

    draw(myTeam)

  };

 loadPlayersData(); //call the function above every time we create a new service
 
}