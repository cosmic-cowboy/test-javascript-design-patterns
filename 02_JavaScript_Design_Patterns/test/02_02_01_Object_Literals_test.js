// 2.2 モジュールパターン(The Module Pattern)
// 2.2.1 オブジェクトリテラル（Object Literals）
TestCase("02_02_01_Object Literals", {
	"test object Literals" : function () {

		// オブジェクトリテラル表記を使って定義されたモジュール
		var myModule = {
			myProperty : "someValue",
			myConfig : {
				useCashing : true,
				language : "en"
			},

			myMethod : function () {
				return "Where in the world is Paul Irish today?";
			},

			// 現在の設定に基づいて値を出力
			getUserCashingSetting : function () {
				var cashing = (this.myConfig.useCashing) ? "enable" : "disable";
				return "Cashing is : " + cashing;
			},
			// Configの設定と言語の返却
			setMyConfig : function (newConfig) {
				if(typeof newConfig === "object"){
					this.myConfig = newConfig;
					return this.myConfig.language;
				}
			}
		};

		assertEquals("Where in the world is Paul Irish today?", myModule.myMethod());
		assertEquals("Cashing is : enable", myModule.getUserCashingSetting());

		var newSetting = {
			language : "fr",
			useCashing : false
		};
		assertEquals("fr", myModule.setMyConfig(newSetting));
	}
});