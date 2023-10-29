// HTML要素btnがクリックされたときにイベント処理を実行する
document.getElementById('btn').addEventListener('click',textContent)

// ボタンをクリックした2秒後に文字変更する
function textContent(){
    setTimeout ( function(){
     document.getElementById('text').textContent ='ボタンをクリックしました';
    },2000); 
 }