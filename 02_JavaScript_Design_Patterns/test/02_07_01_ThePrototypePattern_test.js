TestCase("02_07_01_ThePrototypePattern", {
	"test 02_07_01_ThePrototypePattern" : function () {

		// prototype
		var myCar = {
			name : "Ford Escort",

			drive : function () {
				return "Weee. i'm driving";
			},

			panic : function () {
				return "Wait. How do you stop this thing?";
			}
		};

		var yourCar = Object.create(myCar);

		assertSame("Ford Escort", yourCar.name);
		assertSame("Weee. i'm driving", yourCar.drive());
		assertSame("Wait. How do you stop this thing?", yourCar.panic());
	},

	"test 02_07_01_ThePrototypePattern_secondParameter" : function () {

		var nextId = (function () {
			var counter = 0;

			return function(){
				return counter++;
			};
		})();
		// prototype
		var vehicle = {
			getModel : function () {
				return this.model;
			}
		};

		var car = Object.create(vehicle, {
			id : {
				value : nextId(),
				enumerable : true
			},

			model : {
				value : "Ford",
				enumerable : true
			}
		});
		
		assertSame("Ford", car.getModel());
	},

	"test 02_07_01_ThePrototypePattern_not_use_prototype" : function () {

		// prototype
		var vehiclePrototype = {
			init : function (carModel) {
				this.model = carModel;
			},

			getModel : function () {
				return this.model;
			}
		};

		function vehicle(model){
			function F() {}
			F.prototype = vehiclePrototype;
			var f = new F();
			f.init(model);
			return f;
		}


		var car = vehicle("Ford Escort");
		
		assertSame("Ford Escort", car.getModel());
	}


});
