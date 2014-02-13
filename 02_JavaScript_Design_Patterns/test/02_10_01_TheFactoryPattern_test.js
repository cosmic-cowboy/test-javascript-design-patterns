TestCase("02_10_01_TheFactoryPattern", {
	"test 02_10_01_TheFactoryPattern" : function () {
		function Car(options){
			// デフォルト
			this.doors = options.doors || 4;
			this.state = options.state || "brand new";
			this.color = options.color || "silver";

		}

		// トラッククラス
		function Truck(options){
			// デフォルト
			this.state = options.state || "used";
			this.wheelsize = options.wheelsize || "large";
			this.color = options.color || "blue";

		}

		function VehicleFactory (argument) {}
		VehicleFactory.prototype.vehicleClass = Car;

		VehicleFactory.prototype.createVehicle = function (options) {
			// デフォルト car
			if(options.vehicleType === "truck"){
				this.vehicleClass = Truck;
			}
			return new this.vehicleClass(options);
		};


		// ここからがインスタンス作成
		var carFactory = new VehicleFactory();

		var car = carFactory.createVehicle({
			color : "yellow",
			doors : 6
		});

		assertTrue(car instanceof Car);
		assertSame("yellow",car.color);
		assertSame("brand new",car.state);
		assertSame(6,car.doors);

		var truck = carFactory.createVehicle({
			vehicleType : "truck",
			color : "red",
			state : "like new",
			wheelsize : "small"
		});

		assertTrue(truck instanceof Truck);
		assertSame("red",truck.color);
		assertSame("like new",truck.state);
		assertSame("small",truck.wheelsize);

	},

	"test 02_10_01_TheFactoryPattern_use_subclass" : function () {
		// 車クラス

		function Car(options){
			// デフォルト
			this.doors = options.doors || 4;
			this.state = options.state || "brand new";
			this.color = options.color || "silver";

		}

		// トラッククラス
		function Truck(options){
			// デフォルト
			this.state = options.state || "used";
			this.wheelsize = options.wheelsize || "large";
			this.color = options.color || "blue";

		}

		function VehicleFactory (argument) {}
		VehicleFactory.prototype.vehicleClass = Car;

		VehicleFactory.prototype.createVehicle = function (options) {
			// デフォルト car
			if(options.vehicleType === "truck"){
				this.vehicleClass = Truck;
			}
			return new this.vehicleClass(options);
		};

		function TruckFactory(){}
		TruckFactory.prototype = new VehicleFactory();
		TruckFactory.prototype.vehicleClass = Truck;

		var truckFactory = new TruckFactory();
		var myBigTruck = truckFactory.createVehicle({
								state : "omg... so bad",
								color : "pink",
								wheelsize : "so big"
							});

		assertTrue(myBigTruck instanceof Truck);
		assertSame("pink",myBigTruck.color);
		assertSame("omg... so bad",myBigTruck.state);
		assertSame("so big",myBigTruck.wheelsize);

	},

	"test 02_10_01_TheFactoryPattern_abstractVehicleFactory" : function () {


		// 車クラス

		function Car(options){
			// デフォルト
			this.doors = options.doors || 4;
			this.state = options.state || "brand new";
			this.color = options.color || "silver";

		}

		// トラッククラス
		function Truck(options){
			// デフォルト
			this.state = options.state || "used";
			this.wheelsize = options.wheelsize || "large";
			this.color = options.color || "blue";
		}

		Car.prototype.drive = function(){};
		Car.prototype.breadDown = function(){};
		Truck.prototype.drive = function(){};
		Truck.prototype.breadDown = function(){};

		var AbstractVehicleFactory = (function(){

			var types = {};

			return {
				getVehicle : function (type, customizations) {
					var Vehicle = types[type];

					return (Vehicle) ? new Vehicle(customizations) : null;
				},

				registerVehicle : function(type, vehicle){

					var proto = vehicle.prototype;
					if(proto.drive && proto.breadDown){
						types[type] = vehicle;
					}

					return AbstractVehicleFactory;
				}
			};
		})();

		AbstractVehicleFactory.registerVehicle("car", Car);
		AbstractVehicleFactory.registerVehicle("truck", Truck);

		var car = AbstractVehicleFactory.getVehicle("car",{
			color : "lime green",
			state : "like new"
		});
		var truck = AbstractVehicleFactory.getVehicle("truck",{
			wheelsize : "medium",
			color : "neon yellow"
		});

		assertTrue(car instanceof Car);
		assertSame("lime green",car.color);
		assertSame("like new",car.state);
		assertSame(4,car.doors);

		assertTrue(truck instanceof Truck);
		assertSame("neon yellow",truck.color);
		assertSame("used",truck.state);
		assertSame("medium",truck.wheelsize);
	}
});