//next year on april fools. Ms. Macavoy agreed to let me teach a course about fools. 
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/MLS%20Teams.csv"

var teamNames = getColumn(url,1);
var conferences = getColumn(url,7);
var locations = getColumn(url,2);
var stadiums = getColumn(url,3);
var yearJoined =getColumn(url,5);
var capacity =getColumn(url,4);



/*
Takes an MLS conference as a paremeter and returns a list of teams in the conference
conference {string} - The desired conference
return {list} - The list of matching teams
*/
function getTeamsFromConference(conference) {
  if(typeof conference != "string"){
  return "Please enter a string parameter"
}
  var matches = [];
  for(var i in conferences) {
    if(conferences[i].toLowerCase().includes(conference.toLowerCase())) {
      matches.push(teamNames[i]);
    }
  }
  if(matches.length==0){
    matches.push("No teams are in the conference " + conference)
  }
  return matches
}



/*
Takes an MLS team as a paremeter and returns the location of this city
team {string} - The desired team
return {string} - The location of a team
*/

function getLocation(team){
  if(typeof team != "string"){
  return "Please enter a string parameter"
}
  var matches=[]
  for (var i = 0; i < teamNames.length; i++) {
    if (teamNames[i].toLowerCase().includes(team.toLowerCase())) {
     return locations[i]
    }
  }
   return "No teams are in the city " + team
}




/*
Takes an MLS team as a paremeter and returns the capacity of this city
team {string} - The desired team
return {string} - The capacity of a team
*/
function getCapacity(team){
  if(typeof team != "string"){
  return "Please enter a string parameter"
}
  for (var i = 0; i < teamNames.length; i++) {
    if (teamNames[i].toLowerCase().includes(team.toLowerCase())) {
     return capacity[i]
    }
  }
   return "No teams are in the city " + team
}



/*
Takes an MLS stadium as a paremeter and returns the corresponding team 
stadium {string} - The desired stadium
return {string} - The team
*/

function getTeam(stadium){
  if(typeof stadium != "string"){
  return "Please enter a string parameter"
}
  var matches=[]
  for (var i = 0; i < stadiums.length; i++) {
    if (stadiums[i].toLowerCase().includes(stadium.toLowerCase())) {
     return teamNames[i]
    }
  }
   return "No stadium is found in MLS " 
}




/*
Takes an MLS team as a paremeter and returns its existing years 
team {string} - The desired team
return {string} - The existing years
*/

function getExistingYears(team){
  var existingYears =  [];
  for (var i in yearJoined){
   existingYears.push(parseFloat(2023 - parseFloat(yearJoined[i])))
}
  if(typeof team != "string"){
  return "Please enter a string parameter"
}
  var matches=[]
  for (var i = 0; i < teamNames.length; i++) {
    if (teamNames[i].toLowerCase().includes(team.toLowerCase())) {
     return existingYears[i]
    }
  }
   return "No teams are found in MLS "
}







function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null); 
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }