//ページが読み込まれた時発動
window.onload=initialize;

function initialize(){
    let count = document.getElementById("cnt");
    count.textContent = `記録件数：${localStorage.length}`;
    //ボタンが押された時に反応
    let btn = document.getElementsByTagName('button');
    for(let elem of btn){
        elem.addEventListener('click', function() {
            let val = this.value; //クリックされた要素の値を獲得する
            if(val==1){
                window.location.href ="AddPage.html"
            }else{
                window.location.href ="ViewPage.html"
            };
        });
    };
};