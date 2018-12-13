function japanese_header(){
  var header = document.getElementById("header")
  header.innerHTML = `<img src="./images/top_japanese.png" class="header-img">\
                      <button class="header-lang" onclick="change_lang(1)" ><p class="lang-text">中文網站入口</p></button>`
}
function japanese_rightMenu(){
  var right = document.getElementById("rightMenu")
  right.innerHTML = `<button type="button" class="btn btn-item" id="btn1" onclick="location.href='./page1.html'">自学センターとは</button>\
                     <button type="button" class="btn btn-item" id="btn2" onclick="location.href='#'">スタッフ紹介</button>\
                     <button type="button" class="btn btn-item" id="btn3" onclick="location.href='./page3.html'">活動の紹介</button>\
                     <button type="button" class="btn btn-item" id="btn4" onclick="location.href='./page4.html'">自学スペースと利用時間</button>\
                     <button type="button" class="btn btn-item" id="btn5" onclick="window.open('https://www.facebook.com/thujapanesecorner/?hc_ref=ARRfHSn67p-LvC5zgNZh7o467PE0BHutA3zC1AsPW0lVCL8wFNQ9Ws-v-bKAmLyYtwg&fref=nf')">自学に関係する研究</button>\
                     <button type="button" class="btn btn-item" id="btn6" onclick="location.href='./page7.html'">自律学習実践研究会</button>\
                     <button type="button" class="btn btn-item" id="btn7" onclick="location.href='./page3.html'">お薦めのウェブサイト</button>`
}

function chinese_header(){
  var header = document.getElementById("header")
  header.innerHTML = `<img src="./images/top_chinese.png" class="header-img">\
                      <button class="header-lang" onclick="change_lang(0)"><p class="lang-text">日文網站入口</p></button>`
}
function chinese_rightMenu(){
  var right = document.getElementById("rightMenu")
  right.innerHTML = `<button type="button" class="btn btn-item" id="btn1" onclick="location.href='./page1_c.html'">何謂自學中心</button>\
                     <button type="button" class="btn btn-item" id="btn2" onclick="location.href='#'">人員介紹</button>\
                     <button type="button" class="btn btn-item" id="btn3" onclick="location.href='./page3_c.html'">活動介紹</button>\
                     <button type="button" class="btn btn-item" id="btn4" onclick="location.href='./page4_c.html'">自學空間與開放時間</button>\
                     <button type="button" class="btn btn-item" id="btn5" onclick="window.open('https://www.facebook.com/thujapanesecorner/?hc_ref=ARRfHSn67p-LvC5zgNZh7o467PE0BHutA3zC1AsPW0lVCL8wFNQ9Ws-v-bKAmLyYtwg&fref=nf')">自學相關研究</button>\
                     <button type="button" class="btn btn-item" id="btn6" onclick="location.href='./page7.html'">自律學習實踐研究會</button>\
                     <button type="button" class="btn btn-item" id="btn7" onclick="location.href='./page3.html'">推薦網站</button>`
}

function change_lang(l){
  lang = l
  localStorage.setItem("lang",lang.toString())
  change_page()
/*
  update()
  window.location.reload()
*/
}
function change_page(){
  currentPage = window.location.pathname.split('.html')[0].split('/').pop()
  if(currentPage == "index"){
    update()

  }
  else if(currentPage == "page1"){
    location.href='./page1_c.html'
  }
  else if(currentPage == "page1_c"){
    location.href='./page1.html'
  }
  else if(currentPage == "page3") location.href='./page3_c.html'
  else if(currentPage == "page3_c") location.href='./page3.html'
  else if(currentPage == "page3-1") location.href='./page3-1_c.html'
  else if(currentPage == "page3-1_c") location.href='./page3-1.html'
  else if(currentPage == "page3-2") location.href='./page3-2_c.html'
  else if(currentPage == "page3-2_c") location.href='./page3-2.html'
  else if(currentPage == "page3-3") location.href='./page3-3_c.html'
  else if(currentPage == "page3-3_c") location.href='./page3-3.html'
  else if(currentPage == "page3-4") location.href='./page3-4_c.html'
  else if(currentPage == "page3-4_c") location.href='./page3-4.html'


  else if(currentPage == "page4"){
    location.href='./page4_c.html'
  }
  else if(currentPage == "page4_c"){
    location.href='./page4.html'
  }
  window.location.reload()
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
