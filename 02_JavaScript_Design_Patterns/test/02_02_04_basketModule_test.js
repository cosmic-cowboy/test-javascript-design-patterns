// 2.2 モジュールパターン(The Module Pattern)
// 2.2.2 モジュールパターン（Module Pattern）
// 実装例：買い物カゴ
TestCase("02_02_04_basketModule", {
	"test basketModule" : function () {
		var basketModule = (function () {
			// 買い物カゴ
			var basket = [];

			return {
				// 商品を追加
				addItem : function (values) {
					basket.push(values);
				},
				// 商品数を取得
				getItemCount : function () {
					return basket.length;
				},
				// 合計金額を取得
				getTotal : function () {
					var itemCount = this.getItemCount();
					var total = 0;
					while(itemCount--){
						total += basket[itemCount].price;
					}
					return total;
				}

			};

		})();

		basketModule.addItem({
			item : "bread",
			price : 0.5
		});
		basketModule.addItem({
			item : "butter",
			price : 0.3
		});

		assertSame(2, basketModule.getItemCount());
		assertSame(0.8, basketModule.getTotal());
		assertUndefined(basketModule.basket);
	}
});