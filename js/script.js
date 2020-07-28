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
        var movieHTML = compiled(movie);
        target.append(movieHTML);
        console.log(target);
      }
    },
    error: function (err){
      console.log(err);
    }
  })
}
//////////////MILESTONE 2/////////////////////////////////////////////

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

}
$(document).ready(init);
