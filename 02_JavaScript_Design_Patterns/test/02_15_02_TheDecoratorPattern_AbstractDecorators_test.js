
TestCase("02_15_02_TheDecoratorPattern_AbstractDecorators", {
	"test 02_15_02_TheDecoratorPattern_AbstractDecorators" : function () {

		// Macbookをモデル化するスーパークラス
		// Macbookシリーズが持っているべき処理（機能拡張）
		var Macbook = new Interface("Macbook",
			[
				"addEngraving",
				"addParallels",
				"add4GBRam",
				"add8GBRam",
				"addCase"
			]
		);

		// MacbookPro

		var MacbookPro = function () {};

		MacbookPro.prototype = {
			addEngraving : function () {},
			addParallels : function () {},
			add4GBRam : function () {},
			add8GBRam : function () {},
			addCase : function () {},
			getPrice : function () {
				return 900.00;
			}
		};

		// Macbookデコレータの抽象デコレータクラス
		var MacbookDecorator = function (macbook){
			Interface.ensureImplements(macbook, Macbook);
			this.macbook = macbook;
		};

		MacbookDecorator.prototype = {
			addEngraving : function () {
				return this.macbook.addEngraving();
			},
			addParallels : function () {
				return this.macbook.addParallels();
			},
			add4GBRam : function () {
				return this.macbook.add4GBRam();
			},
			add8GBRam : function () {
				return this.macbook.add8GBRam();
			},
			addCase : function () {
				return this.macbook.addCase();
			},
			getPrice : function () {
				return this.macbook.getPrice();
			}
		};

		// First, define a way to extend an object a
		// with the properties in object b. We'll use
		// this shortly!
		function extend( a, b ){
			for( var key in b ){
				if( b.hasOwnProperty(key) ){
					a[key] = b[key];
				}
			}
			return a;
		}

		var CaseDecorator = function (macbook){
			this.macbook = macbook;
		};

		// スーパークラスを拡張する
		extend(CaseDecorator, MacbookDecorator);

		CaseDecorator.prototype.addCase = function () {
			return this.macbook.addCase() + "Adding case to macbook";
		};

		CaseDecorator.prototype.getPrice = function () {
			return this.macbook.getPrice() + 45.00;
		};

		var myMacbookPro = new MacbookPro();

		assertSame(900, myMacbookPro.getPrice());

		// デコレータが構成要素を透過的に包み込んでおり、同じインターフェイスを使っているため、面白いことに互いにやり取りする
		myMacbookPro = new CaseDecorator(myMacbookPro);

		assertSame(945, myMacbookPro.getPrice());

	}
});