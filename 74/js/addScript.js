//ページ遷移時に起動
window.onload=initialize;
//追加すると最初のページに戻る関数
function mouvePage(){
    window.location.href="index.html";
};
//宣言
let count = localStorage.length;//連続で追加する時のため　この処理を入れることで上書きがされない
//追加ボタンが押されるとlocalstorageにメモの件名、内容を追加する
function initialize(){
    let btn = document.getElementById("addMemo");
    // Viewの方はこっちでの内容をむこうでcreateElementで作ったりする。
    //最初にカウントでlocalstorageから件名を取り出してその件名を使って内容を取り出す
    btn.addEventListener('click',function(){
        let sub = document.getElementById("subject").value;//件名
        let con = document.getElementById("content").value;//内容
        //値が空じゃないかを確認する
        if(sub==""||con==""){
            alert("タイトル又は内容が入力がされていません。");
            return;
        };
        //保存した日時を記録
        let fullDate = new Date();
        let date = `${fullDate.getFullYear()}年${fullDate.getMonth()+1}月${fullDate.getDate()}日`;
        let ary = [];
        ary.push(sub,con,date);//配列に格納
        console.log(ary);
        alert(`以下の内容が保存されました。\n件名:${sub}\n本文:${con}\n日時:${date}`);
        localStorage.setItem(count,JSON.stringify(ary));//配列をJSON形式に変換
        count++;
        sub = "";
        con = "";
        mouvePage();
    })
};
