TestCase("02_15_01_TheDecoratorPattern_PseudoClassicalDecorators", {
	"test 02_15_01_TheDecoratorPattern_PseudoClassicalDecorators" : function () {

		// reminderに備えるべきメソッド（summary, placeOrder）を定義する
		// インターフェイスを利用してコードの安定性を高める
		var reminder = new Interface("List", ["summary", "placeOrder"]);

		// 実装するオブジェクト
		var properties = {
			name : "Remember to buy the milk",
			date : "05/06/2016",
			actions : {
				summary : function () {
					return "Remember to buy the milk, we are almost out!";
				},
				placeOrder : function () {
					return "Ordering milk from your local grocery store";
				}
			}
		};


		function Todo(config){
			// インタフェースを介して、期待するメソッドが宣言されていることを確認する
			Interface.ensureImplements(config.actions, reminder);

			this.name = config.name;
			this.methods = config.actions;
		}

		var todoItem = new Todo(properties);

		assertSame("Remember to buy the milk, we are almost out!",todoItem.methods.summary());
		assertSame("Ordering milk from your local grocery store",todoItem.methods.placeOrder());
		assertSame("Remember to buy the milk", todoItem.name);
		assertUndefined(todoItem.date);

	}
});