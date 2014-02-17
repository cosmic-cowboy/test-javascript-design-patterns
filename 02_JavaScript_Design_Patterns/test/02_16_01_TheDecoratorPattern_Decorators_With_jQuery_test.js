// jQueryを使ったデコレータ（jQuery.extend()）
// 実行時もしくはある一点で動的に、2つ以上のオブジェクト（とそれらのプロパティ）を1つのオブジェクトに拡張（またはマージ）する
TestCase("02_16_01_TheDecoratorPattern_Decorators_With_jQuery", {
	"test 02_16_01_TheDecoratorPattern_Decorators_With_jQuery" : function () {

		// 機能を追加していくオブジェクト
		var decoratorApp = decoratorApp || {};

		// これから使用するオブジェクトを定義する
		decoratorApp = {

			// 初期設定オブジェクト
			defaults: {
				validate: false,
				limit: 5,
				name: "foo",
				welcome: function () {
					return( "welcome!" );
				}
			},

			// 機能拡張オブジェクト
			options: {
				validate: true,
				name: "bar",
				helloWorld: function () {
					return( "hello world" );
				}
			},

			// 設定用オブジェクト
			settings: {},

			printObj: function ( obj ) {
				var arr = [],
				next;
				$.each( obj, function ( key, val ) {
					next = key + ": ";
					next += $.isPlainObject(val) ? printObj( val ) : val;
					arr.push( next );
				} );
				console.log( "{ " + arr.join(", ") + " }");
			}
		};

		// defaultsを明示的に変更することなく、defaultsとoptionsをマージする。
		decoratorApp.settings = $.extend({}, decoratorApp.defaults, decoratorApp.options);

		// decoratorApp.settings
		decoratorApp.printObj(decoratorApp.settings);
		assertTrue(decoratorApp.settings.validate);
		assertSame(5, decoratorApp.settings.limit);
		assertSame("bar", decoratorApp.settings.name);
		assertSame("welcome!", decoratorApp.settings.welcome());
		assertSame("hello world", decoratorApp.settings.helloWorld());

		// decoratorApp.options
		decoratorApp.printObj(decoratorApp.options);
		assertTrue(decoratorApp.options.validate);
		assertUndefined(decoratorApp.options.limit);
		assertSame("bar", decoratorApp.options.name);
		assertUndefined(decoratorApp.options.welcome);
		assertSame("hello world", decoratorApp.options.helloWorld());

		// decoratorApp.defaults
		decoratorApp.printObj(decoratorApp.defaults);
		assertSame(false, decoratorApp.defaults.validate);
		assertSame(5, decoratorApp.defaults.limit);
		assertSame("foo", decoratorApp.defaults.name);
		assertSame("welcome!", decoratorApp.defaults.welcome());
		assertUndefined(decoratorApp.defaults.helloWorld);


	}
});