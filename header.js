function japanese_header(){
  var header = document.getElementById("header")
  header.innerHTML = `<img src="./images/japanese_title.png" class="header-img">\
                      <button class="header-lang" onclick="change_lang(1)" ><p class="lang-text">中文網站入口</p></button>`
}
function japanese_rightMenu(){
  var right = document.getElementById("rightMenu")
  right.innerHTML = `<button type="button" class="btn btn-item" id="btn1" onclick="location.href='#'">自学の活動とは</button>\
                     <button type="button" class="btn btn-item" id="btn2" onclick="location.href='#'">スタッフ紹介</button>\
                     <button type="button" class="btn btn-item" id="btn3" onclick="location.href='#'">活動の紹介</button>\
                     <button type="button" class="btn btn-item" id="btn4" onclick="window.open('https://www.facebook.com/llfc2016/');">イベント紹介</button>\
                     <button type="button" class="btn btn-item" id="btn5" onclick="location.href='./page2.html'">自学スペースと利用時間</button>\
                     <button type="button" class="btn btn-item" id="btn6" onclick="window.open('https://www.facebook.com/thujapanesecorner/?hc_ref=ARRfHSn67p-LvC5zgNZh7o467PE0BHutA3zC1AsPW0lVCL8wFNQ9Ws-v-bKAmLyYtwg&fref=nf')">自学に関係する研究</button>\
                     <button type="button" class="btn btn-item" id="btn7" onclick="location.href='./page1.html'">自律学習実践研究会</button>\
                     <button type="button" class="btn btn-item" id="btn9" onclick="location.href='./page3.html'">お薦めのウェブサイト</button>`
}

function chinese_header(){
  var header = document.getElementById("header")
  header.innerHTML = `<img src="./images/chinese_title.png" class="header-img">\
                      <button class="header-lang" onclick="change_lang(0)"><p class="lang-text">日文網站入口</p></button>`
}
function chinese_rightMenu(){
  var right = document.getElementById("rightMenu")
  right.innerHTML = `<button type="button" class="btn btn-item" id="btn1" onclick="location.href='#'">自學是什麼</button>\
                     <button type="button" class="btn btn-item" id="btn2" onclick="location.href='#'">人員介紹</button>\
                     <button type="button" class="btn btn-item" id="btn3" onclick="location.href='#'">活動介紹</button>\
                     <button type="button" class="btn btn-item" id="btn4" onclick="window.open('https://www.facebook.com/llfc2016/');">項目介紹</button>\
                     <button type="button" class="btn btn-item" id="btn5" onclick="location.href='./page2.html'">自學空間與開放時間</button>\
                     <button type="button" class="btn btn-item" id="btn6" onclick="window.open('https://www.facebook.com/thujapanesecorner/?hc_ref=ARRfHSn67p-LvC5zgNZh7o467PE0BHutA3zC1AsPW0lVCL8wFNQ9Ws-v-bKAmLyYtwg&fref=nf')">自學相關研究</button>\
                     <button type="button" class="btn btn-item" id="btn7" onclick="location.href='./page1.html'">自律學習實踐研究會</button>\
                     <button type="button" class="btn btn-item" id="btn9" onclick="location.href='./page3.html'">推薦網站</button>`
}

function change_lang(l){
  lang = l
  localStorage.setItem("lang",lang.toString())
  update()
}
function update(){
  if(lang == 0){
    if(document.getElementById("header")) japanese_header()
    if(document.getElementById("rightMenu")) japanese_rightMenu()
  }
  else{
    if(document.getElementById("header")) chinese_header()
    if(document.getElementById("rightMenu")) chinese_rightMenu()
  }
}

//init
var lang;
if(localStorage.hasOwnProperty('lang')){
  lang = parseInt(localStorage.getItem("lang"))
}
else{
  localStorage.setItem("lang","0")
  lang = 0
}
update()
console.log(lang)
