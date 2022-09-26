'use strict';

/* ----------- ゲームのメイン機能 ----------- */

// 正誤判定用カウンター
let ans = 1;


// テーブルの要素(数字)をクリックした時の関数
function getNum(elem) {
    // クリック要素のidを取得
    const CLICK = elem.id;

    // 終了かどうか判定する
    if (CLICK == SQUARES) {
        document.getElementById('message').textContent = 'CLEAR';
        elem.style.fontWeight = "bold"; // 最後の要素を太文字にする
        clearTimeout(timer_id); // タイマーを止める
    }
    else {
        // 正誤判定
        if (CLICK == ans) {
            // 「NG」表示を削除
            document.getElementById('message').textContent = '';
            // 太文字にする
            elem.style.fontWeight = "bold";
            // 正解の値をインクリメント
            ans++;
        }
        else if (CLICK != ans) {
            document.getElementById('message').textContent = 'NG';
        }
    }
}