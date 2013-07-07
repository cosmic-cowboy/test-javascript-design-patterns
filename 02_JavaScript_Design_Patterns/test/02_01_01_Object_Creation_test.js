// 2.1 コンストラクタパターン(The Constructor Pattern)

// 2.1.1 オブジェクト作成
TestCase("02_01_01_Object_Creation",{
	"test set Properties By Dot syntax" : function(){
		var newObject = {};

		// プロパティの設定(set properties)
		newObject.someKey = "Hello, world";
		// プロパティの取得(get properties)
		assertEquals("Hello, world", newObject.someKey);
		assertEquals("Hello, world", newObject["someKey"]);
	},

	"test set Properties By Square bracket syntax" : function(){
		var newObject = {};

		// プロパティの設定(set properties)
		newObject["bracket"] = "Hello, bracket";
		newObject["bracket With Doudle quotation"] = "Hello, bracket with double quotation";
		// プロパティの取得(get properties)
		assertEquals("Hello, bracket", newObject.bracket);
		assertEquals("Hello, bracket", newObject["bracket"]);

		assertEquals("Hello, bracket with double quotation", newObject["bracket With Doudle quotation"]);
	},

	"test set Properties By Object.defineProperty" : function(){
		var newObject = {};

		// ECMAScript 5 only compatible approaches
		// プロパティの設定（3. Object.defineProperty）
		Object.defineProperty(newObject, "keyDefineProperty",{
			value : "for more control of the property's behavior",
			writbale : true,
			enumerable : true,
			configurable : true
		});

		// プロパティ設定の簡易表記
		var defineProp = function (obj, key, value) {
			config = {};
			config.value = value;
			Object.defineProperty(obj, key, config);
		};
		// プロパティの設定(set properties)
		var person = Object.create(null);
		defineProp(person, "car", "Delorean");
		defineProp(person, "dateOfBirth", "1981");
		defineProp(person, "hasBeard", false);

		// プロパティの取得(get properties)
		assertEquals("for more control of the property's behavior", newObject.keyDefineProperty);
		assertEquals("for more control of the property's behavior", newObject["keyDefineProperty"]);
		assertEquals("Delorean", person.car);
		assertEquals("Delorean", person["car"]);
		assertEquals("1981", person.dateOfBirth);
		assertEquals("1981", person["dateOfBirth"]);
		assertFalse(person.hasBeard);
		assertFalse(person["hasBeard"]);

	},

	"test set Properties By Object.defineProperties" : function(){
		var newObject = {};

		// ECMAScript 5 only compatible approaches
		// プロパティの設定（3. Object.defineProperty）
		Object.defineProperties(newObject, {
			someKey : {
				value : "Hello, world",
				writbale : true
			},
			anotherKey : {
				value : "Foo, bar",
				writbale : false
			}
		});

		// プロパティの取得(get properties)
		assertEquals("Hello, world", newObject.someKey);
		assertEquals("Hello, world", newObject["someKey"]);
		assertEquals("Foo, bar", newObject.anotherKey);
		assertEquals("Foo, bar", newObject["anotherKey"]);
	}
});