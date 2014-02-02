(function(){

	// プリコンパイルテンプレートとクロージャを使った「キャッシュ」
	var resultTemplate = _.template($("#resultTemplate").html());

	// 検索タグのトピックを購読する。
	pubsubz.subscribe("/search/tags", function(tags){
		$("#searchResults").html("Searched for : " + tags + "");
	});

	// 結果のトピックを購読する。
	pubsubz.subscribe("/search/resultSet", function (results) {
		$("#searchResults").append(resultTemplate(results));
		// $("#searchResults").append(compiled_template(results));
	});

	// 検索クエリを送信し、/search/tagsトピックにタグを発行する。
	$("#flickrSearch").submit(function (e) {
		e.preventDefault();
		var tags = $(this).find("#query").val();
		if(!tags){
			return;
		}
		pubsubz.publish("/search/tags", [$.trim(tags)]);
	});

	pubsubz.subscribe("/search/tags", function( tags ) {
		$.getJSON(
			"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?" ,
			{
				tags: tags,
				tagmode: "any",
				format: "json"
			},
			function( data ){
				if( !data.items.length ) {
					return;
				}
				pubsubz.publish( "/search/resultSet" , data.items );
			}
		);
	});
}());