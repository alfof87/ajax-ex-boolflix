function functionName() {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie",
    method: "GET",
    data: {
			api_key: "d7a215969de8ee9ea8bd1af46e9cf6f0",
      query: "title"

    },
    success: function(data){
      var title = data["result"]["title"];
      var originalT = data["result"]["original_title"];
      var originalL = data["result"]["original_language"];
      var vote = data["result"]["vote_average"];
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
