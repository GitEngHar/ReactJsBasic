/**
 * const , let宣言
 * */

var val1 = "vars"
console.log(val1);

val1 = "var2"; // var変数は値の上書きが可能な変数である
console.log(val1);

var val1 = "re:var"// 再定義が可能である
console.log(val1);

console.log("------let------")

let var2 = "lets"
console.log(var2)

var2 = "let2" // 上書き可能な変数
console.log(var2)

// let var2="let3"// 再宣言は不可能 ERROR
// console.log(var2)

console.log("------const------");

const var3 = "consts"; //プリミティブ
console.log(var3);

// var3 = "var3"; // ERROR, readonlyによるエラー
// console.log(var3)

// const var3 = "var4"; // ERROR
// constオブジェクトは書き換えられる
const var4 = {
    name: "hoge",
    age: 31
}
console.log(var4)

var4.name = "hogehoge"
console.log(var4)

var4.address = "Fukushima"
console.log(var4)

console.log("------array const------");


// 配列についても中身を変更可能になる
const var5 = ["dog","cat"];
console.log(var5);

var5[0] = "bird";
console.log(var5);

var5.push("monkey")
console.log(var5);

/**
 * テンプレート文字列
 * */
const name="hoge";
const age = 12;

// old
const messageOld = "Old MyName is " + name + ". age is " + age;
console.log(messageOld);

// ES5 Template 文字列
const messageNew = `New MyName is ${name}. age is ${age}`;
console.log(messageNew);

/**
 * アロー関数
 * */

// 従来の関数
function old(str){
    return str;
}

const funcOld = function(str){
    return str;
}

console.log(old("old function"));
console.log(funcOld("funcOld"));

/**
 * 引数が1つの場合は () を省略できる
 * */
const newFunc = (str) => {
    return str;
}

const newLittleArgFunc = str => {
    return str;
}

// return と {} を省略
const newLittleReturnFunc = str => str;

console.log(newFunc("newFunc"));
console.log(newLittleArgFunc("newLittleArgFunc"));
console.log(newLittleReturnFunc("newLittleReturnFunc"));

// 計算するやつ
const sumCalcFunc = (num1,num2) => num1 + num2;
const calc = sumCalcFunc(1,4);
console.log(`sum: ${calc}`);

/**
 * Object の返却の場合 複数行になる場合がある。その場合は ({})とするといい
 * 内部的な処理も少し変わっているらしい
 * */
const rtnObject = (num1,num2) => ({
    hoge: num1,
    fuga: num2
})

console.log(rtnObject(1,5));


/**
 * 分割代入
 * */
const myProfile = {
    myname : "hoge",
    myage : 12
};

const messagePro = `myname : ${myProfile.myname}, myage: ${myProfile.myage}`;
console.log(messagePro);

const {myname, myage} = myProfile;
const messagePro2 = `myname2 : ${myname}, myage2: ${myage}`;
console.log(messagePro2);

const myProArray = ["hoge",21];
const oldMyProArrayMessage = `oldMyProArrayMessage >>> myName : ${myProArray[0]} , myAge: ${myProArray[1]}`;
console.log(oldMyProArrayMessage)

// 要素数を変数に割り当てる
const [arrayName,arrayAge] = myProArray;
const myProArrayMessage = `myProArrayMessage >>> name: ${arrayName} , arrayAge: ${arrayAge}`;
console.log(myProArrayMessage);


/**
 * デフォルト値 (引数, 分割代入) << で使う
 * 何もstrに入っていないと => undefined を返す => デフォルト値を設定しておく (Guest)
 * */

const sayHello = (sayHelloStr = "Guest") => {console.log(`こんにちは ${sayHelloStr} さん`)};
sayHello();
sayHello("Har");

const {gender="not setting"} = myProfile;
// myageはコード上部で取得しているので省略
console.log(`${myage}歳 で genderは ${gender}です`);


/**
 * オブジェクト省略記法
 * */
const author = "Har";
const book = "hogeBook";

const bookProfile = {
    author: author,
    book: book
}
// 分割代入と逆になるので少し読みづらさはある
const omissionBookProfile = {author, book}
console.log(bookProfile);
console.log(omissionBookProfile);

/**
 * スプレッド構文 ...
 * */

//配列の展開
const arrayA = [1,2];
console.log(arrayA); //配列で返る
console.log(...arrayA); //数値で返る
console.log( sumCalcFunc(arrayA[0],arrayA[1]) );
console.log( sumCalcFunc(...arrayA) ); //配列を展開して値を渡す.(3つの要素でも2番目までを参照される)

//まとめる
const arrayB = [1,2,3,4,5];
const [num1,num2,...arrayC] = arrayB;
console.log(num1);
console.log(num2);
console.log(arrayC); //配列型で 3~5が取得できる

//配列のコピー
const arrayD = [6,7];
const arrayE = [8,9];
const arrayF = [...arrayD];
console.log(arrayF); //配列の結合 [6,7]
const arrayG = [...arrayD, ...arrayE];
console.log(arrayG); //配列の結合 [6,7,8,9]
const arrayH = arrayD; //参照コピー
arrayH[0] = 1;
console.log(`arrayH: ${arrayH} & arrayD: ${arrayD}`) //arrayDにも同様の変更が加えられている。同じメモリを見てる

/**
 * map や filterを使った配列処理
 * */
const nameArr = ["hoge","fuga","jake"];
for(let index=0; index<nameArr.length; index++){
    console.log(nameArr[index]);
    console.log(`${index}番目は${nameArr[index]}です`);
}

//2番目の引数に配列数が入ってくるしよう
nameArr.map((name, index) => {
    console.log(`map : ${index}番目は${nameArr[index]}です`);
})

//同じ処理をmapでやる
//returnすると新しい配列を作れる
const nameArrB = nameArr.map((name) => {
    return name;
})
console.log(nameArrB);

const nameArrC = nameArr.map((name) => {
    return name === "jake" ? name : `${name}さん`;
});
console.log(nameArrC);

//条件でtrueの場合のみ値を返す
const numArray = [1,2,3,4,5]
const numArrayOdd = numArray.filter((num) => {
    return num % 2 === 1;
})
console.log(numArrayOdd);

