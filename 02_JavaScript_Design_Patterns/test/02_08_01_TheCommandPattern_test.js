TestCase("02_08_01_TheCommandPattern", {
	"test 02_08_01_TheCommandPattern" : function () {

			var CarManager = {
				requestInfo : function (model, id) {
					return "The information for " + model + " with ID " + id + " is foobar";
				},
				buyVehicle : function (model, id) {
					return "you have successfully purchased Item " + id + ", a " + model ;
				},
				arrangeViewing : function (model, id) {
					return "You have successfully booked a viewing of " + model + "(" + id + ")";
				}
			};

		CarManager.execute = function(name) {
			return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
		};

		assertSame("You have successfully booked a viewing of Ferrari(14523)", CarManager.execute("arrangeViewing", "Ferrari", "14523"));
		assertSame("The information for Ford Mondeo with ID 54323 is foobar", CarManager.execute("requestInfo", "Ford Mondeo", "54323"));
		assertSame("The information for Ford Escort with ID 34232 is foobar", CarManager.execute("requestInfo", "Ford Escort", "34232"));
		assertSame("you have successfully purchased Item 34232, a Ford Escort", CarManager.execute("buyVehicle", "Ford Escort", "34232"));
	}
});