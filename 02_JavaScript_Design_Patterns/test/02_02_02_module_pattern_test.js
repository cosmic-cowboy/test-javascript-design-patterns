// 2.2 モジュールパターン(The Module Pattern)
// 2.2.2 モジュールパターン（Module Pattern）
TestCase("02_02_02_Module Pattern", {
	"test Module Pattern" : function () {

		var testModule = (function () {
			var counter = 0;
			return {
				// 増加に関する
				incrementCounter : function () {
					return ++counter;
				},

				// カウンターのリセット
				resetCounter : function () {
					console.log("counter value priop to reset :" + counter);
					counter = 0;
					return counter;
				}
			};
		})();

		assertEquals(1,testModule.incrementCounter());
		assertEquals(2,testModule.incrementCounter());
		assertEquals(0,testModule.resetCounter());

	}
});