right_menu = `<button type="button" class="btn btn-item" id="btn1" onclick="location.href='#'">自学の活動とは</button>\
          <button type="button" class="btn btn-item" id="btn2" onclick="location.href='#'">スタッフ紹介</button>\
          <button type="button" class="btn btn-item" id="btn3" onclick="location.href='#'">活動の紹介</button>\
          <button type="button" class="btn btn-item" id="btn4" onclick="window.open('https://www.facebook.com/llfc2016/');">イベント紹介</button>\
          <button type="button" class="btn btn-item" id="btn5" onclick="window.open('https://www.facebook.com/kigarukissatenn/')">自学スペースと利用時間</button>\
          <button type="button" class="btn btn-item" id="btn6" onclick="window.open('https://www.facebook.com/thujapanesecorner/?hc_ref=ARRfHSn67p-LvC5zgNZh7o467PE0BHutA3zC1AsPW0lVCL8wFNQ9Ws-v-bKAmLyYtwg&fref=nf')">自学に関係する研究</button>\
          <button type="button" class="btn btn-item" id="btn7" onclick="location.href='./page1.html'">自律学習実践研究会</button>\
          <button type="button" class="btn btn-item" id="btn8" onclick="location.href='./page2.html'">情報リンク</button>\
          <button type="button" class="btn btn-item" id="btn9" onclick="location.href='./page3.html'">お薦めのウェブサイト</button>\
          <button type="button" class="btn btn-item btn10" onclick="location.href='#'">質問コーナー</button>\
          <button type="button" class="btn btn-item btn10" onclick="location.href='#'">問い合わせ先</button>`;

document.write(right_menu);

var name = $(document).attr('title');
if(name == 'Page1'){
  $('#btn7').css({"text-decoration":"underline"})
}
if(name == 'Page2'){
  $('#btn8').css({"text-decoration":"underline"})
}
if(name == 'Page3'){
  $('#btn9').css({"text-decoration":"underline"})
}
