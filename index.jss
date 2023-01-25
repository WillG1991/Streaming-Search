<!---- Movie Jumbotron-->



<section class="hero is-small is-link">
  <div class="hero-body">

    <img src="assets/img/popcorn.png">
    <h1 class="title is-1">Search & Stream</h1>

    <!--- Movie Search Input-->
    <input id="search-text" class="input text-is-centered" type="text" placeholder="Movie/Show Title">
    <!--- Movie Search End-->

    <!--- Movie Search Button-->
    <button id="search-bt" class="button is-focused is-fullwidth ">Search</button>
    <!--- Movie Search  End-->
  </div>
  
</section>

<!---- Movie Jumbotron End-->

<!--- Body Start-->

<body>





  <!--- MOVIE TITLE  START-->
  <div class="columns ml-2 is-link title2">
    <div class="column">
      <h2 class="title is-2">Title:</h2>
      <p id="Title" class="is-size-3 mgl-large"></p>
      <img id="Poster">
      <h3>
        <p class="has-text-weight-semibold is-size-7" id="tagLine"></p>
      </h3>

    </div>



<section class="hero is-small is-link">
  <div class="hero-body">

    <img src="assets/img/popcorn.png">
    <h1 class="title is-1">Search & Stream</h1>

    <!--- Movie Search Input-->
    <input id="search-text" class="input text-is-centered" type="text" placeholder="Movie/Show Title">
    <!--- Movie Search End-->

    <!--- Movie Search Button-->
    <button id="search-bt" class="button is-focused is-fullwidth ">Search</button>
    <!--- Movie Search  End-->
  </div>
  
</section>

<!---- Movie Jumbotron End-->

<!--- Body Start-->

<body>





  <!--- MOVIE TITLE  START-->
  <div class="columns ml-2 is-link title2">
    <div class="column">
      <h2 class="title is-2">Title:</h2>
      <p id="Title" class="is-size-3 mgl-large"></p>
      <img id="Poster">
      <h3>
        <p class="has-text-weight-semibold is-size-7" id="tagLine"></p>
      </h3>

    </div>
    <!--- MOVIE INFORMATION START-->
    <div class="column">
      <h2 class="title is-2 has-text-centered">About</h2>
      <div class="columns">

        <div class="columns is-vcentered">
          <div class="column is-8">
            <p class="bd-notification is-primary">
            <div class="container">
              <h3 class="movie-info is-size-5 is-underlined square">Genre:</h3>
              <p id="Genre"></p>
            </div>
            <div class="column">
              <h3 class="movie-info is-size-5 is-underlined square">Director:</h3>
              <p id="Director"></p>
            </div>
            <div class="column">
              <h3 class="movie-info is-size-5 is-underlined square">Score:</h3>
              <p id="Score"></p>
            </div>
          </div>
          </p>
        </div>
        <div class="column">
          <p class="bd-notification is-primary">
          <div class="columnPlot">
            <h3 class="movie-info is-size-5 is-underlined plotText square">Plot:</h3>
            <p id="Plot" class="plotText"></p>
            <div class="column">
              <h3 class="movie-info is-size-5 is-underlined plotText square">Runtime:</h3>
              <p id="Runtime" class="plotText"></p>
            </div>
          </div>
        </div>

      </div>

      <!--- MOVIE INFORMATION END-->

      <!--- MOVIE AVAILBILITY START----------------->
      

      <!---- STREAMING AREA NETFLIX ----->
      <div class="column">
        <h2 class="title is-2 has-text-centered">Availability</h2>
        <div id="button-remove" class="columns">
          <div class="column is-size-5 is-underlined">
            Netflix:
            <div class="streamingNetflix">

            </div>
          </div>

          <!---- STREAMING AREA PRIME ----->
          <div class="column is-size-5 is-underlined">
            Prime:
            <div class="streamingPrime">
            </div>
          </div>

          <!---- STREAMING AREA DISNEY ----->
          <div class="column is-size-5 is-underlined">
            Disney:
            <div class="streamingDisney">
            </div>
          </div>
          <!---- STREAMING AREA APPLE ----->
          <div class="column is-size-5 is-underlined">
            Apple:
            <div class="streamingApple">

            </div>
          </div>
        </div>
      </div>
      <!---- STREAMING AREA HULU ----->

      <div id="button-remove" class="columns">
        <div class="column is-size-5 is-underlined">
          Hulu:
          <div class="streamingHulu">

          </div>
        </div>
        <!---- STREAMING AREA HBO ----->
        <div class="column is-size-5 is-underlined">
          HBO:
          <div class="streamingHBO">

          </div>
        </div>
        <!---- STREAMING AREA SHOWTIME ----->
        <div class="column is-size-5 is-underlined">
          Showtime:
          <div class="streamingShowtime">

          </div>
        </div>
        <!---- STREAMING AREA PARAMOUNT ----->
        <div class="column is-size-5 is-underlined">
          Paramount:
          <div class="streamingParamount">
          </div>
        </div>
      </div>