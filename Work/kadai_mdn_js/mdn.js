var dateName = new Date([2022, 8, 22]);

// メソッドを実行した結果を変数に格納
var year = dateName.getFullYear();
var month = dateName.getMonth() + 1;
var day = dateName.getDate();

console.log(year + "年" + month + '月' + day + '日');