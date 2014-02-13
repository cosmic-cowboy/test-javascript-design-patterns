TestCase("02_12_01_TheMixinPattern_Sub_classing", {
	"test 02_12_01_TheMixinPattern_Sub_classing" : function () {

		// 基底オブジェクト base object
		var Person = function(firstName, lastName){
			this.firstName = firstName;
			this.lastName = lastName;
			this.gender = "male";
		};

		var clark = new Person("Clark", "kent");

		// サブクラスコンストラクタ subclass constructor
		var Superhero = function(firstName, lastName, powers){
			Person.call(this, firstName, lastName);
			this.powers = powers;
		};

		Superhero.prototype = Object.create(Person.prototype);
		var superman = new Superhero("Clark", "kent", ["flight", "heat-vision"]);

		assertTrue(clark instanceof Person);
		assertSame("Clark",clark.firstName);
		assertSame("kent",clark.lastName);
		assertSame("male",clark.gender);

		assertTrue(superman instanceof Superhero);
		assertSame("Clark",superman.firstName);
		assertSame("kent",superman.lastName);
		assertSame("male",superman.gender);
		assertSame("flight",superman.powers[0]);
		assertSame("heat-vision",superman.powers[1]);

	}
});