function ObserverList(){
	this.observerList = [];
}

// 追加
ObserverList.prototype.add = function(obj) {
	return this.observerList.push(obj);
};

// // 初期化
// ObserverList.prototype.Empty = function() {
// 	this.observerList = [];
// };

// カウント
ObserverList.prototype.count = function() {
	return this.observerList.length;
};

// 取得
ObserverList.prototype.get = function(index) {
	if( index > -1 && index < this.observerList.length){
		return this.observerList[index];
	}
};

// // 挿入
// ObserverList.prototype.Insert = function(obj, index) {
// 	var pointer = -1;
// 	if( index === 0){
// 		this.observerList.unshift(obj);
// 		pointer = index;
// 	} else if (index == this.observerList.length){
// 		this.observerList.push(obj);
// 		pointer = index;
// 	}
// 	return pointer;
// };

ObserverList.prototype.indexOf = function(obj, startIndex) {
	var i = startIndex;
	while( i < this.observerList.length){
		if(this.observerList[i] === obj){
			return i;
		}
		i++;
	}
	return -1;
};

ObserverList.prototype.removeAt = function(index) {
	this.observerList.splice(index, 1);
};

// ObserverList.prototype.RemoveIndexAt = function(index) {
// 	if(index === 0){
// 		this.observerList.shift();
// 	} else if(index === this.observerList.length - 1) {
// 		this.observerList.pop();
// 	}
// };



