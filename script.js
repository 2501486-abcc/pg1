//ボタンが押された時メッセージを受け取る関数
function receiveMessage(){
    let text = document.getElementById("messageInput").value;
    alert(text);
    showMessage(text);
};
//メッセージを表示させる関数
function showMessage(message){
    document.getElementById("message").textContent = message;
};