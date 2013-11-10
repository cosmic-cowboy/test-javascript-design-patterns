// 2.3 リビーリングモジュールパターン(The Revealing Module Pattern)

TestCase("02_03_01_TheRevealingModulePattern", {
	"test TheRevealingModulePattern" : function () {
		var myRevealingModule = function () {
			var privateVar = "Ben Cherry";
			var publicVar = "Hey there!";

			function privateFunction() {
				return privateVar;
			}
			function publicSetName(strName) {
				privateVar = strName;
			}
			function publicGetName() {
				return privateFunction();
			}
			
			return {
				setName : publicSetName,
				greeting : publicVar,
				getName : publicGetName
			};
		}();

		assertSame("Hey there!", myRevealingModule.greeting);
		assertSame("Ben Cherry", myRevealingModule.getName());
		myRevealingModule.setName("Paul Kinlan");
		assertSame("Paul Kinlan", myRevealingModule.getName());
	}
});