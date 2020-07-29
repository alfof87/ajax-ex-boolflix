///////////////////MILESTONE 1////////////////////////////////////
function addSearchClickListener(){
  var target = $("#search");
  target.click(startSearch);
}
function startSearch(){
  var target = $("#query");
  var query = target.val();
  target.val("");

  var targetResult = $("#results ul");
  targetResult.text("");

  getMovies(query);
  getSeries(query);
}
function getMovies(query) {

  $.ajax({

        url: "https://api.themoviedb.org/3/search/movie",
        method: "GET",
        data: {
    			api_key: "d7a215969de8ee9ea8bd1af46e9cf6f0",
          query: query

    },
    success: function(data){
      var movies = data["results"];
      var target = $("#results ul");
      target.text("");
      var template = $("#movie-template").html();
      var compiled = Handlebars.compile(template);

      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var vote = movie["vote_average"];
        var flag = movie["original_language"];
        movie["original_language"] = getFlag(flag);
        movie["vote_average"] = getStars(vote);
        var movieHTML = compiled(movie);
        target.append(movieHTML);
        // movie["vote_average"] = "prova";
        // console.log(movie["vote_average"]);
        // console.log(flag);
        console.log(movie);


      }
    },
    error: function (err){
      console.log(err);
    }
  })

}
//////////////MILESTONE 2/////////////////////////////////////////////
/////VOTO/////
function getStars(vote){
vote = Math.round(vote / 2);
var result = "";
for (var i = 0; i < 5; i++) {
  if (i < vote) {
 result += '<i class="fas fa-star"></i>';
  }else {
 result += '<i class="far fa-star"></i>';
  }
}
return result;
}
/////////BANDIERA///////
// function getFlags(flag){
// //
//   var result = "";
// //   // for (var i = 0; i < movies.length; i++) {
//     if (flag == "en") {
//    result += '<img src="../img/en.png" alt="">';
//  }else if (flag == "ja") {
//    result += '<img src="../img/jap.png" alt="">';
//  }else if (flag == "us") {
//    result += '<img src="../img/usa.png" alt="">';
//  }
//   // }
//   // return result;
//   }
function getFlag(lang){
  if (lang === "it" || lang === "en") {
    return `<img class="flag" src="img/${lang}.png">`;

  }
  return lang;
}
//////////////////////////////////////////////////////////////////////////
///////SERIE////////////////
function getSeries(query) {
  $.ajax({
    url:"https://api.themoviedb.org/3/search/tv",
    method: "GET",
    data:{
      api_key: "d7a215969de8ee9ea8bd1af46e9cf6f0",
      query: query
    },
    success: function (data){
      var series = data["results"];

      var target = $("#results ul");
      var template = $("#serie-template").html();
      var compiled = Handlebars.compile(template);

      for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        var vote = serie["vote_average"];
        serie.star = getStars(vote);
        var lang = serie["vote_average"];
        serie.flag = getStars(lang);
        var serieHTML = compiled(serie);
        target.append(serieHTML);
      }
    },
    error: function (err){
      console.log(err);
    }
  });
}
/////////////////MILESTONE 3/////////////
///////////POSTER/////////////////////

function addPoster(data){
  var link = "https://image.tmdb.org/t/p/";
  var dimension = "w185";
  var poster = movie["poster_path"];
  var movie = movies[i];
  var result = link += dimension += poster;
  movie.poster = `<img src="" alt="">`;
 console.log(result);
}

// https://image.tmdb.org/t/p/w185/
// function addPoster(){
//   if (lang === "it" || lang === "en") {
//     return `<img class="flag" src="img/${lang}.png">`;
//   }
//   return lang;
//   // // var poster = movie["poster_path"];
//   // // movie["poster_path"] = addPoster(poster);
//   // // var link = "https://image.tmdb.org/t/p/";
//   // // var dimension = "w185";
//   // // var poster = movie["poster_path"];
//   // // var result = link += dimension += poster;
//   // // return result;
//   // // console.log(result);
//   // var link = "https://image.tmdb.org/t/p/";
//   // var dimension = "w185";
//   // var poster = movie["poster_path"];
//   //
//   // var result = "";
//   // for (var i = 0; i < movies.length; i++) {
//   //   var result = link += dimension += poster;
//   //  //  if (i < vote) {
//   //  // result += '<i class="fas fa-star"></i>';
//   //  //  }else {
//   //  // result += '<i class="far fa-star"></i>';
//   //  //  }
//   //  console.log(result);
//   // }
//   // return result;
//
//   }


function init(){
  addSearchClickListener();
  getStars();
  getFlag();
  addPoster();
}
$(document).ready(init);
