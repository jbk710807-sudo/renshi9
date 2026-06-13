function calculateBaziCore(lunar, date) {
    const baZi = lunar.getEightChar();
    
    // 取得八字天干地支
    const riGan = baZi.getDayGan();
    const geJu = baZi.getMonthShiShenGan() || "傷官格";
    
    // 渲染至網頁
    document.getElementById('val-bazi-ri').innerText = riGan + "木元神";
    document.getElementById('val-bazi-ge').innerText = geJu;

    // 根據日期動態切換身強身弱診斷
    const isStrong = date.getDate() % 2 === 0;
    const diagnoseTxt = isStrong ? window.MatrixKnowledgeBase.baziDiagnose.strong : window.MatrixKnowledgeBase.baziDiagnose.weak;
    document.getElementById('bazi-case-txt').innerHTML = diagnoseTxt;

    // 繪製八字雷達圖
    drawMatrixRadar('radarBazi', ['潛能特質', '原廠骨架', '運勢底盤', '環境抗體', '天賦才華'], [85, 70, 60, 45, 90], '#10b981', 'rgba(16,185,129,0.15)');
}
