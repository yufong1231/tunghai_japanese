right_menu = `<button type="button" class="btn btn-item" id="btn1" onclick="location.href='#'">自學是什麼</button>\
          <button type="button" class="btn btn-item" id="btn2" onclick="location.href='#'">人員介紹</button>\
          <button type="button" class="btn btn-item" id="btn3" onclick="location.href='#'">活動介紹</button>\
          <button type="button" class="btn btn-item" id="btn4" onclick="window.open('https://www.facebook.com/llfc2016/');">項目介紹</button>\
          <button type="button" class="btn btn-item" id="btn5" onclick="location.href='./page2.html'">自學空間與開放時間</button>\
          <button type="button" class="btn btn-item" id="btn6" onclick="window.open('https://www.facebook.com/thujapanesecorner/?hc_ref=ARRfHSn67p-LvC5zgNZh7o467PE0BHutA3zC1AsPW0lVCL8wFNQ9Ws-v-bKAmLyYtwg&fref=nf')">自學相關研究</button>\
          <button type="button" class="btn btn-item" id="btn7" onclick="location.href='./page1.html'">自律學習實踐研究會</button>\
          <button type="button" class="btn btn-item" id="btn9" onclick="location.href='./page3.html'">推薦網站</button>`;

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
