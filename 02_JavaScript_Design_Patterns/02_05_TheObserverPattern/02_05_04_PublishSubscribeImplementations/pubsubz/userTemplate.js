(function(){
	// 新規ユーザのトピックを購読する。
	// レビューを送信したユーザのリストにユーザを追加する。
	pubsubz.subscribe("/new/user", function(e, data){
		var compiledTemplate;
		if(data){
			compiledTemplate = _.template($("#userTemplate").html());
			$("#users").append(compiledTemplate(data));
		}
	});

	// 新規レーティングのトピックを購読する。タイトルとレーティングで構成される。
	// レーティングはユーザレーティングのリストに新規追加される。
	pubsubz.subscribe("/new/rating", function (e, data) {
		var compiledTemplate;
		if(data){
			compiledTemplate = _.template($("#ratingsTemplate").html());
			$("#ratings").append(compiledTemplate(data));
		}
	});

	$("#add").on("click", function (e) {
		e.preventDefault();
		var strUser = $("#twitter_handle").val(),
		strMovie = $("#movie_seen").val(),
		strRating = $("#movie_rating").val();
		// 新規ユーザがいることをアプリケーションに知らせる。
		pubsubz.publish( "/new/user", { name: strUser } );
		// 新規レーティングがあることをアプリケーションに知らせる。
		pubsubz.publish( "/new/rating", { title: strMovie, rating: strRating});
	});
}());