function functionName() {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie?api_key=d7a215969de8ee9ea8bd1af46e9cf6f0&query=ritorno+al+futuro",
    method: "GET",
    data: {
      "page": page,
      "total_reulsts": total_reulsts,
      "total_pages": total_pages,
      "results": results
    },
    success: function(){
      var title = data["title"];
      var originalT = data["original_title"];
      var originalL = data["original_language"];
      var vote = data["vote_average"];
      console.log(title);
    },
    error: function(error){
      console.log("error", error);
    }
  });
}
// Di conseguenza quando andata a fare la success dell'ajax avete un data
// che contiene solo le seguenti chiavi: page, total_reulsts, total_pages,
// results




function init(){
  functionName();
}
$(document).ready(init);
