function add(){
    const ulElement = document.getElementById("ul");//ul要素を取得
    const inputElement = document.getElementById("input");//入力を受け取る
    const input = inputElement.value;
    const divElement = document.createElement("div");//div要素をつくる
    divElement.setAttribute("id","div");//div要素にidをつける
    const liElement = document.createElement("li");//li要素を作る
    liElement.textContent = input;//liに入力された文字を入れる
    const buttonElement = document.createElement("button");//button要素を作る
    buttonElement.setAttribute("onclick","del()");//ボタン要素に属性をつける
    buttonElement.textContent = "削除";

    ulElement.appendChild(divElement);
    divElement.appendChild(liElement);
    divElement.appendChild(buttonElement);

    inputElement.value = "";//入力された文字をリセットする
}

function del(){
    const ulElement = document.getElementById("ul");
    const divElement = document.getElementById("div");
    ulElement.removeChild(divElement);//要素を削除する
}
