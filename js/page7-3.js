$.getJSON("./data/page7.json", function(datas) {
    var content = document.getElementById("leftMenu")
    var data = datas[1];
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
