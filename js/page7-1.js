$.getJSON("./data/page7.json", function(datas) {
    var number = getValue("number")
    var content = document.getElementById("leftMenu")
    var data = datas[number-1];
    document.title = data['title'];
    content.innerHTML = `<h1 class="p1-content-title">${data['title']}</h1>\
    					           <h2 class="p1-content-date">${data['date']}</h2>\
	                       <object data="${data['pdf']}" type="application/pdf" width="100%" height="600px">\
                						<iframe src="${data['pdf']}" width="100%" height="600px" style="border: none;">\
                							This browser does not support PDFs. Please download the PDF to view it: <a href="${data['pdf']}">Download PDF</a>\
                						</iframe>\
    					           </object>\
                         <div class="p1-content-download"><p>PPT DOWNLOAD</p></div>\
                         <div id="p1-content-download-link"></div>`;
    var downloadlink = document.getElementById("p1-content-download-link");
    if((data['download'])){
      data['download'].forEach(function(d){
        downloadlink.innerHTML += `<a href="${d['link']}" download target="_blank">${d['name']}</a>`;
      })
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
