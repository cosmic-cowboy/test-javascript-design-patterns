// 2.2 モジュールパターン(The Module Pattern)
// 2.2.2 モジュールパターン（Module Pattern）
// 名前空間、パブリック変数、プライベート変数の扱い
TestCase("02_02_03_simple_template", {
	"test simple template" : function () {
		
		var myNamespace = (function(){

			// プライベートカウンタ
			var myPrivateVar = 0;

			// 引数をログ出力するプライベート関数
			var myPrivateMethod = function (foo) {
				console.log(foo);
			};

			return {

				// パブリック変数
				myPublicVar : "foo",

				// プライベートを利用するパブリック関数
				myPublicFunction : function (bar) {
					// プライベートカウンタをインクリメント
					myPrivateVar ++;
					// barを使ってプライベート関数を呼び出す
					myPrivateMethod(bar);
				}
			};
		})();
	}
});
