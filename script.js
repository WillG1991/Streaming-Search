  // selects HTML by class for placing inner.html //
var netflixLocation = document.querySelector(".streamingNetflix");
var primeLocation = document.querySelector(".streamingPrime");
var disneyLocation = document.querySelector(".streamingDisney");
var huluLocation = document.querySelector(".streamingHulu");
var appleLocation = document.querySelector(".streamingApple");
var hboLocation = document.querySelector(".streamingHBO");
var showtimeLocation = document.querySelector(".streamingShowtime");
var paramountLocation = document.querySelector(".streamingParamount");
//Function  start//
$(document).ready(function () {
  var movieCountry = "";
  var movieTag = "";
  //button grabs input data and searches api//
  $("#search-bt").on("click", function () {
    netflixLocation.innerHTML ="";
    primeLocation.innerHTML ="";
    disneyLocation.innerHTML="";
    huluLocation.innerHTML="";
    appleLocation.innerHTML="";
    hboLocation.innerHTML="";
   
    var keyWord = $("#search-text").val();
    url = `https://omdbapi.com/?t=${keyWord}&apikey=5216b962`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movieCountry = data["Country"];
        movieTag = data["imdbID"];
        console.log(movieTag);
        //Api data is displayed on page//
        $("#Title").text(data["Title"]);
        console.log(data["Title"]);
        function noname() {
          if (data["Title"] == undefined) {
            alert("Title not found. Check spelling and try again!")
          };
        };
        noname();
        $("#Genre").text(`${data["Genre"]}`);
        $("#Director").text(data["Director"]);
        $("#Plot").text(data["Plot"]);
        $("#Poster").attr("src", data["Poster"]);
        $("#Runtime").text(data["Runtime"]);
        
        
        
        
        //function inuts "imbdID" into api below//
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '89c588b05bmsh60e709fda358096p14890cjsn1969f0e5a15f',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
          }
        };
        // Fetches Second API info
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=" + movieTag + "&output_language=en", options)
          .then(response => response.json())
         
          .then((response) => {
            console.log(response)
            $("#tagLine").text(response.tagline);

            //Checks api for netflix availbility//
            if (response.streamingInfo.netflix) {
              $("#streamingNetflix").text(response.streamingInfo.netflix.us.link);
              var netflixValue = response.streamingInfo.netflix.us.link;
              //if available adds button to page for streaming services//
              netflixLocation.innerHTML ="<button id='netflix-bt' class='button is-link is-outlined'>Stream here!</button>";
              console.log(netflixValue);
              $('#netflix-bt').click(function() {
                window.location = netflixValue;
             });

              
              
            }
            //Checks api for prime availbility//
            else if (response.streamingInfo.prime) {
              $("#streamingPrime").text(response.streamingInfo.prime.us.link);
              var primeValue = response.streamingInfo.prime.us.link;
              console.log(primeValue);
              //if available adds button to page for streaming services//
              primeLocation.innerHTML ="<button id='prime-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#prime-bt').click(function() {
                window.location = primeValue;
             });
            }
            //Checks api for disney availbility//
            else if (response.streamingInfo.disney) {
              $("#streamingDisney").text(response.streamingInfo.disney.us.link);
              var disneyValue = response.streamingInfo.disney.us.link;
              console.log(disneyValue);
              //if available adds button to page for streaming services//
              disneyLocation.innerHTML ="<button id='disney-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#disney-bt').click(function() {
                window.location = disneyValue;
             });
            }
            //Checks api for hulu availbility//
            else if (response.streamingInfo.hulu) {
              $("#streamingHulu").text(response.streamingInfo.hulu.us.link);
              var huluValue = response.streamingInfo.hulu.us.link;
              console.log(huluValue);
              //if available adds button to page for streaming services//
              huluLocation.innerHTML ="<button id='hulu-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#hulu-bt').click(function() {
                window.location = huluValue;
             });
            }
            //Checks api for HBO availbility//
            else if (response.streamingInfo.hbo) {
              $("#streamingPrime").text(response.streamingInfo.hbo.us.link);
              var hboValue = response.streamingInfo.hbo.us.link;
              console.log(hboValue);
              //if available adds button to page for streaming services//
              hboLocation.innerHTML ="<button id='hbo-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#hbo-bt').click(function() {
                window.location = hboValue;
             });
            }
            //Checks api for showtime availbility//
            else if (response.streamingInfo.showtime) {
              $("#streamingShowtime").text(response.streamingInfo.showtime.us.link);
              var showtimeValue = response.streamingInfo.showtime.us.link;
              console.log(showtimeValue);
              //if available adds button to page for streaming services//
              showtimeLocation.innerHTML ="<button id='showtime-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#showtime-bt').click(function() {
                window.location = showtimeValue;
             });
            }
            //Checks api for paramount availbility//
            else if (response.streamingInfo.paramount) {
              $("#streamingParamount").text(response.streamingInfo.paramount.us.link);
              var paramountValue = response.streamingInfo.paramount.us.link;
              console.log(paramountValue);
              //if available adds button to page for streaming services//
              paramountLocation.innerHTML ="<button id='paramount-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#paramount-bt').click(function() {
                window.location = paramountValue;
             });
            }
            //Checks api for apple availbility//
            else if (response.streamingInfo.apple) {
              $("#streamingApple").text(response.streamingInfo.apple.us.link);
              var appleValue = response.streamingInfo.apple.us.link;
              console.log(appleValue);
              //if available adds button to page for streaming services//
              appleLocation.innerHTML ="<button id='apple-bt' class='button is-link is-outlined'>Stream here!</button>";
              $('#apple-bt').click(function() {
                window.location = appleValue;
             });
            } 
            
            
            
            
            
          });
          // .then(response => $("#streamingNetflix").text(response.streamingInfo.netflix.us.link))
          // .then((response) => {
          //   $("#tagLine").text(response.tagline);
          // })
          

                
          
             
  });
  

});



});

