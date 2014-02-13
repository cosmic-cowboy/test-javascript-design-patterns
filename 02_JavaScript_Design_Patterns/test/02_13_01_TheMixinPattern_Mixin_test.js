TestCase("02_13_01_TheMixinPattern_Mixin", {
	"test 02_13_01_TheMixinPattern_Mixin" : function () {

		// ユーティリティ関数群
		var myMixins = {
			moveUp : function(){
				return "move up";
			},
			moveDown : function(){
				return "move down";
			},
			stop : function(){
				return "stop";
			}
		};

		function carAnimator(){
			this.moveLeft = function () {
				return "move left";
			};
		}

		function personAnimator(){
			this.moveRandomly = function () {
				return "move randomly";
			};
		}

		// ミックスインで拡張
		_.extend(carAnimator.prototype, myMixins);
		_.extend(personAnimator.prototype, myMixins);

		var myCarAnimator = new carAnimator();

		assertTrue(myCarAnimator instanceof carAnimator);
		assertSame("move up",myCarAnimator.moveUp());
		assertSame("move down",myCarAnimator.moveDown());
		assertSame("stop",myCarAnimator.stop());
		assertSame("move left",myCarAnimator.moveLeft());

		var myPersonAnimator = new personAnimator();

		assertTrue(myPersonAnimator instanceof personAnimator);
		assertSame("move up",myPersonAnimator.moveUp());
		assertSame("move down",myPersonAnimator.moveDown());
		assertSame("stop",myPersonAnimator.stop());
		assertSame("move randomly",myPersonAnimator.moveRandomly());

	},
	"test 02_13_01_TheMixinPattern_Mixin_asdf" : function () {


		var Car = function (settings) {
			this.model = settings.model || "no model provided";
			this.color = settings.color || "no color provided";
		};

		var Mixin = function () {};

		// ユーティリティ（ミックスイン）
		Mixin.prototype = {
			driveForward : function () {
				return "drive forward";
			},
			driveBackward : function () {
				return "drive backward";
			},
			driveSideWays : function () {
				return "drive sideways";
			}
		};

		// 既存オブジェクトを拡張して他のオブジェクトのメソッドを追加する
		function augment(receivingClass, givingClass){
			if(arguments[2]){
				for (var i = 0, len = arguments.length; i < len; i++) {
					receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
				}
			} else {
				for(var methodName in givingClass.prototype){
					// 同名のメソッドをreceivingClassが持っているか確認
					if(!Object.hasOwnProperty(receivingClass.prototype, methodName)){
						receivingClass.prototype[methodName] = givingClass.prototype[methodName];
					}
				}
			}
		}

		// 指定されたメソッドを拡張する
		augment(Car, Mixin, "driveForward", "driveBackward");
		var myCar = new Car({
			model : "Ford Escort",
			color : "blue"
		});

		// Mixinに宣言されたメソッドをすべて拡張する
		augment(Car, Mixin);
		var mySportsCar = new Car({
			model : "Porsche",
			color : "red"
		});

		assertTrue(myCar instanceof Car);
		assertSame("Ford Escort", myCar.model);
		assertSame("blue", myCar.color);
		assertSame("drive forward", myCar.driveForward());
		assertSame("drive backward", myCar.driveBackward());

		assertTrue(mySportsCar instanceof Car);
		assertSame("Porsche", mySportsCar.model);
		assertSame("red", mySportsCar.color);
		assertSame("drive forward", mySportsCar.driveForward());
		assertSame("drive backward", mySportsCar.driveBackward());
		assertSame("drive sideways", mySportsCar.driveSideWays());
	}
});