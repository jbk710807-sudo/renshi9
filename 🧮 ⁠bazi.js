// 處理八字與畫圖邏輯
function calculateBaziCore(lunar, date) {
    const baZi = lunar.getEightChar();
    const riGan = baZi.getDayGan();
    const geJu = baZi.getMonthShiShenGan() || "傷官格";
    
    // 渲染 UI
    document.getElementById('val-bazi-ri').innerText = riGan + "水能量";
    document.getElementById('val-bazi-ge').innerText = geJu;

    // 動態判斷身強身弱文案
    const isStrong = date.getDate() % 2 === 0;
    document.getElementById('bazi-case-txt').innerHTML = isStrong ? MatrixKnowledgeBase.baziDiagnose.strong : MatrixKnowledgeBase.baziDiagnose.weak;

    // 繪製八字雷達
    drawMatrixRadar('radarBazi', ['潛能特質', '原廠骨架', '運勢底盤', '環境抗體', '天賦才華'], [85, 70, 60, 45, 90], '#10b981', 'rgba(16,185,129,0.15)');
}
