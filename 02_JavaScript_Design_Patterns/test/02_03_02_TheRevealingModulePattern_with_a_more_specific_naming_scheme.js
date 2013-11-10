// 2.3 リビーリングモジュールパターン(The Revealing Module Pattern)

TestCase("02_03_02_TheRevealingModulePattern_with_a_more_specific_naming_scheme", {
	"test TheRevealingModulePattern" : function () {
		var myRevealingModule = function () {
			var privateCounter = 0;

			// 非公開　カウントアップ
			function privateFunction() {
				privateCounter++;
				return privateCounter;
			}
			// 公開　カウントアップ
			function publicIncrement() {
				return privateFunction();
			}
			// 公開　カウントアップを呼び出す
			function publicFunction() {
				return publicIncrement();
			}
			// 公開　カウント数を取得
			function publicGetCount() {
				return privateCounter;
			}
			
			return {
				start : publicFunction,
				increment : publicIncrement,
				count : publicGetCount
			};
		}();

		assertSame(1, myRevealingModule.start());
		assertSame(2, myRevealingModule.increment());
		assertSame(2, myRevealingModule.count());
	}
});