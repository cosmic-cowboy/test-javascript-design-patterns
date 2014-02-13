TestCase("02_14_01_TheDecoratorPattern", {
	"test 02_14_01_TheDecoratorPattern_Decorating_Constructors_With_New Functionality" : function () {

		function vehicle (vehicleType) {
			this.vehicleType = vehicleType || "car";
			this.model = "default";
			this.license = "00000-000";
		}
		// 基本構成（car）
		var testInstance = new vehicle("car");
		assertTrue(testInstance instanceof vehicle);
		assertSame("car", testInstance.vehicleType);
		assertSame("default", testInstance.model);
		assertSame("00000-000", testInstance.license);

		// 修飾構成
		var truck = new vehicle("truck");
		// vehicle(truck)を修飾する新機能
		truck.setModel = function (modelName) {
			this.model = modelName;
		};
		truck.setColor = function (modelcolor) {
			this.color = modelcolor;
		};

		truck.setModel("CAT");
		truck.setColor("blue");

		assertTrue(truck instanceof vehicle);
		assertSame("truck", truck.vehicleType);
		assertSame("CAT", truck.model);
		assertSame("blue", truck.color);

		// 基本構成（car）vehicleが修飾されていないことを確認
		var secondInstance = new vehicle("car");
		assertTrue(secondInstance instanceof vehicle);
		assertSame("car", secondInstance.vehicleType);
		assertSame("default", secondInstance.model);
		assertSame("00000-000", secondInstance.license);

	},
	"test 02_14_01_TheDecoratorPattern_ Decorating_Objects_With_Multiple_Decorators" : function () {

		// 標準装備の値段
		function MacBook () {
			this.cost = function () {
				return 997;
			};
			this.screenSize = function () {
				return 11.6;
			};
		}

		// メモリ追加
		function Memory (macBook) {
			var v = macBook.cost();
			macBook.cost = function(){
				return v + 75;
			};
		}

		// 彫刻追加
		function Engraving (macBook) {
			var v = macBook.cost();
			macBook.cost = function(){
				return v + 200;
			};
		}

		// 保険追加
		function Insurance (macBook) {
			var v = macBook.cost();
			macBook.cost = function(){
				return v + 250;
			};
		}

		var mb = new MacBook();
		Memory(mb);
		Engraving(mb);
		Insurance(mb);

		assertSame(1522, mb.cost());
		assertSame(11.6, mb.screenSize());

	}
});
