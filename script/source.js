'use strict';

/* ----------- テーブルの設定 ----------- */

const TABLE_ROW = 5; // テーブルの行数
const TABLE_COLUMN = 5; // テーブルの列数
const SQUARES = TABLE_ROW * TABLE_COLUMN; // マス目の総数


/* ----------- マス目の配列データ作成 ----------- */

let numbers = [];
// 1からマス目の総数のデータを配列にする
for (let i = 0; i < SQUARES; i++) {
    numbers.push(i + 1);
}


/* ----------- 配列をシャッフル ----------- */

// https://gray-code.com/javascript/shuffle-for-item-of-array/
for (let i = (numbers.length - 1); 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1)); // 0〜(i+1)の範囲で値を取得
    // 要素の並び替えを実行
    let tmp = numbers[i];
    numbers[i] = numbers[r];
    numbers[r] = tmp;
}


/* ----------- HTMLソースの生成 ----------- */

// table要素を生成
const table = document.createElement('table');

// tr部分(行)のループ
for (let i = 0; i < TABLE_ROW; i++) {
    // tr要素を生成
    const tr = document.createElement('tr');
    // td部分(列)のループ
    for (let j = 0; j < TABLE_COLUMN; j++) {
        // td要素を生成
        const td = document.createElement('td');
        // td要素にテキストを追加
        td.textContent = numbers[j];
        // td要素に属性を追加
        // https://web-tsuku.life/setattribute/
        td.setAttribute('onclick', 'getNum(this)'); // onclick属性の付与
        td.setAttribute('id', numbers[j]); // id属性の付与
        // td要素をtr要素の子要素に追加
        tr.appendChild(td);
    }
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    // 配列から数値を削除することで重複を防ぐ
    numbers.splice(0, TABLE_COLUMN);
}


// 生成したtable要素を追加する
document.getElementById('table').appendChild(table);