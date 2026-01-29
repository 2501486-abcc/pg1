//追加ページで何度データが入れられているかをカウントする(lengthを使って解決)
// Viewの方はこっちでの内容をむこうでcreateElementで作ったりする。
//localStorage.lengthを使う

// Viewページに来た時に起動
window.onload = initialize;

function initialize(){
    let container = document.body;
    for(let i = 0; i < localStorage.length; i++){
        let ary = localStorage.getItem(i);//localから取り出し
        if(ary === null){retrun}; //空なら終わり

        let data = JSON.parse(ary);//JSONを元に変換
        let title = data[0];//タイトルを取り出して書き込み
        let content = data[1];//内容を取り出して書き込み
        let date = data[2];//保存した日時の取り出し
        //件名
        let h3 = document.createElement("h3");
        h3.textContent = `件名：${title}　保存日時：${date}`;
        h3.classList.add("memo-title");
        //本文
        let p = document.createElement("p");
        p.textContent = content;
        p.classList.add("memo-content")
        // 開閉処理（classの切り替えだけ）
        h3.addEventListener("click", function(){
            h3.classList.toggle("open");
            p.classList.toggle("open");
        });
        container.appendChild(h3);
        container.appendChild(p);
    };
};
//localstorageの一括削除
function delMemo(){
    localStorage.clear();
    window.location.reload();//ページの再読み込み
};  