$.getJSON("./data/page7.json", function(datas) {
    var page = getValue("page")-1
    var content = document.getElementById("leftMenu")
    var pageNum = 3
    var count = pageNum
    for(var i=datas.length-1-page*count; i>=0&&count>0; i--){
      count = count-1
      var data = datas[i]
      content.innerHTML += `<div class="p1-content-choose" onclick="location.href='./page7-1.html?number=${data['number']}'">\
      						            <span class="p1-content-text">${data['title']}</span>\
      						            <span class="p1-content-date">${data['date']}</span>\
      					            </div>`;
    }
    content.innerHTML += `<div align="center" id="pagination-container"></div>`;
    var pagination = document.getElementById("pagination-container")
    for(var j=1; j<=Math.ceil(datas.length/pageNum); j++){
      pagination.innerHTML += `<button class="pagination-btn" onclick="location.href='./page7.html?page=${j}'">${j}</button>`;
    }
});

function getValue(varname)
{
  var url = window.location.href;
  var qparts = url.split("?");
  if (qparts.length == 0){return "";}
  var query = qparts[1];
  var vars = query.split("&amp;");
  var value = "";
  for (i=0; i<vars.length; i++)
  {
    var parts = vars[i].split("=");
    if (parts[0] == varname)
    {
      value = parts[1];
      break;
    }
  }
  value = unescape(value);
  value.replace(/\+/g," ");
  return value;
}
