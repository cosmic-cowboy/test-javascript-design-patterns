var pubsubz = {};

(function(q){
	// トピック・イベントチャネル、購読番号
	var topics = {},
		stbUid = -1;

	// 発行
	// 特定のトピック名、カスタム引数を指定する
	// 登録されたトピックの状態が変化した際、公開、ブロードキャストする
	// トピックに紐付けられたアクションが呼び出される
	q.publish = function (topic, args) {
		if(!topics[topic]){
			return false;
		}

		var subscribers = topics[topic],
			len = subscribers ? subscribers.length : 0;

		while(len--){
			// アクションを呼び出している
			subscribers[len].func(topic, args);
		}

		return this;
	};

	// 購読
	// 購読するトピックとトピックが発行されたときのアクション（コールバック関数）を登録
	// 購読ごとにトークンを付与する
	q.subscribe = function (topic, func) {
		if(!topics[topic]){
			topics[topic] = [];
		}

		var token = (++stbUid).toString();
		topics[topic].push({
			token : token,
			func : func
		});
		return token;
	};

	// 購読中止
	// 購読時に付与されたトークンを元にアクションを削除
	q.unsubscribe = function (token) {
		for(var m in topics){
			if(topics[m]){
				for (var i = 0, j = topics[m].length; i < j; i++) {
					if(topics[m][i].token === token){
						topics[m].splice(i, 1);
						return token;
					}
				}
			}
		}
		return this;
	};

}(pubsubz));