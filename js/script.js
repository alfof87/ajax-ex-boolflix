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
      console.log(data);
      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var movieHTML = compiled(movie);
        target.append(movieHTML);

      }
    },
    error: function (err){
      console.log(err);
    }
  })

}
//////////////MILESTONE 2/////////////////////////////////////////////
function getStars(data){
  // var movies = data["results"];
  // var movie = movies[i];
  var star = $("#star");
  // console.log(star);
if (star <= 2) {
  $(".star1").removeClass(".hide");
}else if (star <= 4) {
  $(".star1, .star2").removeClass(".hide");
}else if (star <= 6) {
  $(".star1, .star2, .star3").removeClass(".hide");
}else if (star <= 8) {
  $(".star1, .star2, .star3, .star4").removeClass(".hide");
}else if (star <= 10) {
  $(".star1, .star2, .star3, .star4, .star5").removeClass(".hide");
 }
}
// function functionName() {
//   $.ajax({
//     url: "https://api.themoviedb.org/3/search/movie",
//     method: "GET",
//     data: {
// 			api_key: "d7a215969de8ee9ea8bd1af46e9cf6f0",
//       query: "title"
//
//     },
//     success: function(data){
//
//       var title = data["result"]["title"];
//       var originalT = data["result"]["original_title"];
//       var originalL = data["result"]["original_language"];
//       var vote = data["result"]["vote_average"];
//       for (var i = 0; i < result.length; i++) {
//         var element = $(".film");
//         if (result[i] == 1) {
//           element.append(result[i]);
//         }
//       }
//     },
//     error: function(error){
//       console.log("error", error);
//     }
//
//   });
// }






function init(){
  addSearchClickListener();
  getStars();
}
$(document).ready(init);
