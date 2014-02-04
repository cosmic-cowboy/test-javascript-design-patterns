$( "#chatForm" ).on( "submit", function(e) {
	e.preventDefault();
	// UIからチャットの詳細を取得する。
	var text = $( "#chatBox" ).val(),
	from = $( "#fromBox" ).val();
	to = $( "#toBox" ).val();
	// チャットからnewMessageトピックにデータを発行する。
	mediator.Publish( "newMessage" , { message: text, from: from, to: to } );
});

// 新規メッセージが到着したら追加する。
function displayChat( data ) {
	var date = new Date(),
	msg = data.from + " said \"" + data.message + "\" to " + data.to;
	$( "#chatResult" )
	.prepend("" + msg + " (" + date.toLocaleTimeString() + ")" + "<br/>");
}

// メッセージのログ出力
function logChat( data ) {
	if ( window.console ) {
	console.log( data );
	}
}

// 送信される新規チャットメッセージをmediatorを介して購読する。
mediator.Subscribe( "newMessage", displayChat );
mediator.Subscribe( "newMessage", logChat );

// 以下の関数は、より高度な実装を使った場合だけ動作する。
function amITalkingToMyself( data ) {
	return data.from === data.to;
}
function iAmClearlyCrazy( data ) {
	$( "#chatResult" ).prepend("" + data.from + " is talking to himself.");
}
mediator.Subscribe( amITalkingToMyself, iAmClearlyCrazy );