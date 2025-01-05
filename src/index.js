/*
* udemy : https://www.udemy.com/course/modern_javascipt_react_beginner/learn/lecture/42549084#overview
* sandbox : https://codesandbox.io/p/sandbox/clever-monad-z6zdfc
* */
// import "./style.css";

const onCkickAdd = () => {
    const inpuText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = ""; //テキストボックスの値を初期化する
    createIncompleteTodo(inpuText)
};

const createIncompleteTodo = (todo) => {
    // liを作る
    const li = document.createElement("li");
    //divタグ
    const div = document.createElement("div");
    div.className = "list-row";
    //pタグ
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;
    // listにliを追加
    const incompleteList = document.getElementById("incomplete-list");
    /**
     * buttonの生成
     * */
    // 完了ボタンの追加
    const completeButton = document.createElement("button");
    completeButton.innerText="完了";
    completeButton.addEventListener("click",()=>{
        // 完了ボタンが押された要素のli配下の完了と削除ボタンを削除する
        const moveTarget = completeButton.closest("li");
        // 削除ボタンを削除する
        completeButton.nextElementSibling.remove();
        // 完了ボタンを削除する
        completeButton.remove();
        // 戻すボタンを生成する
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click",() => {
            // Todoのテキスト情報を取得する
            const backText = backButton.previousElementSibling.innerText;
            createIncompleteTodo(backText);
            // 親liを削除
            backButton.closest("li").remove();
        })
        // 一番最初の子要素であるdivを取得
        moveTarget.firstElementChild.appendChild(backButton);
        // 移動先となる要素を取得
        // liタグをappendした時点で DOM は complete-listに要素が移動する
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(moveTarget);
    })

    // 削除ボタンの追加
    const deleteButton = document.createElement("button");
    deleteButton.innerText="削除";
    deleteButton.addEventListener("click",() => {
        // ul 配下の liタグを探す (親タグで一番最初のliタグを対象とする)
        const deleteTarget = deleteButton.closest("li");
        // ドキュメントの全ての要素から対象を削除する
        document.getElementById("incomplete-list").removeChild(deleteTarget);
        alert("削除");
    })

    // liタグにdiv.pを追加
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    incompleteList.appendChild(li);
};

// idでElementを取得する
// addEventListenerはEventをリッスンする
document.getElementById("add-button").addEventListener("click",onCkickAdd);

