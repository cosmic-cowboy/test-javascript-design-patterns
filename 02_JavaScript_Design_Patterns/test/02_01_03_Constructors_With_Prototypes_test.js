// 2.1 コンストラクタパターン(The Constructor Pattern)

// 2.1.3 プロトタイプを使ったコンストラクタ（Constructors With Prototypes）
TestCase("02_01_03_Constructors_With_Prototypes",{ 
	"test create new instances With Prototypes" : function(){

		function Car (model, year, miles) {
			this.model = model;
			this.year  = year;
			this.miles = miles;
		}

		Car.prototype.toString = function  () {
			return this.model + " has done " + this.miles + " miles";
		};

		// 新しいインスタンス作成(create new instances)
		var civic  = new Car("Honda Civic", 2009, 20000);
		var mondeo = new Car("Ford Mondeo", 2010, 5000);

		assertEquals("Honda Civic has done 20000 miles", civic.toString());
		assertEquals("Ford Mondeo has done 5000 miles", mondeo.toString());

	}
});

