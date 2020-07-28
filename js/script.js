///////////////////MILESTONE 1////////////////////////////////////
function addSearchClickListener(){
  var target = $("#search");
  target.click(getMovies);
}
function getMovies() {
  var target = $("#query");
  var query = target.val();

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
      var template = $("#movie-template").html();
      var compiled = Handlebars.compile(template);

      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var vote = movie["vote_average"];
        movie["vote_average"] = getStars(vote);
        var movieHTML = compiled(movie);
        target.append(movieHTML);
        // movie["vote_average"] = "prova";
        console.log(movie["vote_average"]);

      }
    },
    error: function (err){
      console.log(err);
    }
  })

}
//////////////MILESTONE 2/////////////////////////////////////////////
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
// function getStars(data){
//   // var movies = data["results"];
//   // var movie = movies[i];
//   var star = $("#star");
//   // console.log(star);
//   if (star <= 2) {
//     $(".star1").removeClass(".hide");
//   }else if (star <= 4) {
//     $(".star1, .star2").removeClass(".hide");
//   }else if (star <= 6) {
//     $(".star1, .star2, .star3").removeClass(".hide");
//   }else if (star <= 8) {
//     $(".star1, .star2, .star3, .star4").removeClass(".hide");
//   }else if (star <= 10) {
//     $(".star1, .star2, .star3, .star4, .star5").removeClass(".hide");
//    }
//   }
//////////////////////////////////////////////////////////////////////////






function init(){
  addSearchClickListener();
  getStars();
}
$(document).ready(init);
