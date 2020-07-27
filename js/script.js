function functionName() {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie?api_key=d7a215969de8ee9ea8bd1af46e9cf6f0&query=ritorno+al+futuro",
    method: "GET",
    data: {
      "title":
      "original_title":
      "original_language":
      "vote_average":
    },
    success: function(){

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
