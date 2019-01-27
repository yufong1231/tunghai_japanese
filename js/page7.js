$.getJSON("./data/page7.json", function(datas) {
    var content = document.getElementById("leftMenu")
    datas.forEach(function(data){
      console.log(data);
      content.innerHTML += `<div class="p1-content-choose" onclick="location.href='${data['link']}'">\
      						        <span class="p1-content-text">${data['title']}</span>\
      						        <span class="p1-content-date">${data['date']}</span>\
      					          </div>`;
    })
});
