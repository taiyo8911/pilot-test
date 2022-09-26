'use strict';

// カウントアップタイマー
const startTime = Date.now();
let timer_id;

function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    timer.textContent = `${m}:${s}:${ms}`;

    timer_id = setTimeout(() => {
        countUp();
    }, 10);
}

countUp();

// タイマーの停止はgame.jsへ