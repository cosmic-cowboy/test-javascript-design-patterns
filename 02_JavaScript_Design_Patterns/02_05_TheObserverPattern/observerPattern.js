function extend (extension, obj) {
	for (var key in extension) {
		obj[key] = extension[key];
	}
}
// DOM参照
var controllCheckbox = document.getElementById("mainCheckBox"),
	addBtn = document.getElementById("addNewObserver"),
	container = document.getElementById("observersContainer");


// 具象サブジェクト
// 制御用チェックボックス
extend(new Subject(), controllCheckbox);

// チェックボックスをクリックするとオブザーバに通知
controllCheckbox.onclick = function(){
	controllCheckbox.notify(controllCheckbox.checked);
};

addBtn.onclick = AddNewObserver;


function AddNewObserver () {
	var check = document.createElement("input");
	check.type = "checkbox";

	// 具象オブザーバ
	// 新しく設置されるチェックボックス
	extend(new Observer(), check);

	// updateメソッドをオーバーライド（JavaScriptにそんな機能はないけど、気持ち的に）
	// チェックボックスは更新通知が来たら
	// チェックボックスの値をパラメータの値に設定する
	check.update = function(value){
		this.checked = value;
	};

	// メインサブジェクトのオブザーバのリストに新しいオブザーバを追加する
	controllCheckbox.addObserver(check);

	// コンテナに追加
	container.appendChild(check);
}