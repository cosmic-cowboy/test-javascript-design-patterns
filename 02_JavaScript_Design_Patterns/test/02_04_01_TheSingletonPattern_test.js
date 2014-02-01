// 2.4 シングルトンパターン
// シングルトンパターンの適用可能性
// 1.インスタンスはひとつで、公開されたアクセスポイントからインスタンスにアクセスできる
// 2.インスタンスがサブクラス化により拡張可能で、拡張されたインスタンスをコードの修正なしで利用できる
TestCase("02_04_01_TheSingletonPattern", {
	"test 02_04_01_TheSingletonPattern" : function () {
		// 正しいシングルトンの生成
		var mySingleton = (function () {
			// シングルトン
			var instance;

			function init() {
				// プライベートメソッドとプロパティ
				function privateMethod(){
					return "I am private";
				}
				var privateVariable = "I am also private";

				var privateRandomNumber = Math.random();

				return {
					// パブリックメソッドとプロパティ
					publicMethod : function () {
						return "The public can see me!";
					},

					publicProperty : "I am also public",

					getRandomNumber : function () {
						return privateRandomNumber;
					}
				};

			}

			// 返却されるインスタンス
			return {
				// すでに存在していればシングルトンインスタンスを返す
				// 存在しなければ、生成
				getInstance : function () {
					if(!instance){
						instance = init();
					}

					return instance;
				}
			};
		})();


		var singleA = mySingleton.getInstance();
		var singleB = mySingleton.getInstance();
		assertTrue(singleA === singleB);
		assertSame(singleA.getRandomNumber(), singleB.getRandomNumber());
		assertSame("The public can see me!", singleA.publicMethod());
		assertSame("The public can see me!", singleB.publicMethod());
		assertSame("I am also public", singleA.publicProperty);
		assertSame("I am also public", singleB.publicProperty);
	},

	"test 02_04_01_TheSingletonPattern_Bad_Singleton" : function () {
		var myBadSingleton = (function () {
			// シングルトン
			var instance;

			function init() {

				var privateRandomNumber = Math.random();

				return {
					getRandomNumber : function () {
						return privateRandomNumber;
					}
				};

			}

			// 返却されるインスタンス
			return {
				// すでに存在していればシングルトンインスタンスを返す
				// 存在しなければ、生成
				getInstance : function () {
					instance = init();
					return instance;
				}
			};
		})();


		var badSingleA = myBadSingleton.getInstance();
		var badSingleB = myBadSingleton.getInstance();
		assertFalse(badSingleA === badSingleB);
		assertNotSame(badSingleA.getRandomNumber(), badSingleB.getRandomNumber());
	},

	"test 02_04_01_TheSingletonPattern_" : function () {
		var SingletonTester = (function () {
			function Singleton (options) {
				options = options || {};

				this.name = "SingletonTester";
				this.pointX = options.pointX || 6;
				this.pointY = options.pointY || 10;
			}

			var instance;

			var _static = {
				name : "SingletonTester",
				getInstance : function (options) {
					if(instance === undefined){
						instance = new Singleton(options);
					}
					return instance;
				}
			};

			return _static;
		})();

		var singletonTester = SingletonTester.getInstance({
			pointX : 5
		});
		singletonTester = SingletonTester.getInstance({
			pointX : 8,
			pointY : 230,
			name : "modifySingletonTester"
		});

		assertSame("SingletonTester", SingletonTester.name);
		assertSame("SingletonTester", singletonTester.name);
		assertSame(5, singletonTester.pointX);
		assertSame(10, singletonTester.pointY);

	}
});