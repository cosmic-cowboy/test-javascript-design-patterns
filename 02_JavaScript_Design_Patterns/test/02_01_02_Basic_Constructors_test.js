// 2.1 コンストラクタパターン(The Constructor Pattern)

// 2.1.2 基本的なコンストラクタ（Basic Constructor）
TestCase("02_01_02_Basic_Constructor",{
	"test create new instances" : function(){
		function Car (model, year, miles) {
			this.model = model;
			this.year  = year;
			this.miles = miles;

			this.toString = function  () {
				return this.model + " has done " + this.miles + " miles";
			};
		}

		// 新しいインスタンス作成(create new instances)
		var civic  = new Car("Honda Civic", 2009, 20000);
		var mondeo = new Car("Ford Mondeo", 2010, 5000);

		assertEquals("Honda Civic has done 20000 miles", civic.toString());
		assertEquals("Ford Mondeo has done 5000 miles", mondeo.toString());
	}
});

