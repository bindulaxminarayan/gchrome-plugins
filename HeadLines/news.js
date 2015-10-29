document.addEventListener('DOMContentLoaded', function() {
	var currentDate = new Date();
	var storedDate = Date.parse(localStorage.getItem("time"));
	if( (currentDate - storedDate)>1800000 || (localStorage.getItem("links")==null)){
		var links=[];
		var content=[];
        var searchUrl = 'https://news.google.com/';
		var x = new XMLHttpRequest();
		x.open('GET', searchUrl,false);
		x.send(null);
		if(x.status==200){
			var dummyDomEle = document.createElement('div');
			dummyDomEle.innerHTML = x.responseText;
			var orderList = document.createElement('ul');
			var titleHeaders = dummyDomEle.getElementsByClassName("esc-lead-article-title");
			for(i=0;i<titleHeaders.length;i++){
				var list = document.createElement('li');
				var link = document.createElement('a');
				var href = titleHeaders[i].getElementsByTagName("a")[0].getAttribute("href");
				var linkTitle = titleHeaders[i].getElementsByTagName("span")[0].innerHTML;
				link.setAttribute("href",href);
				links[i]=href;
				link.setAttribute("target","_blank");
				link.innerHTML=linkTitle;
				content[i]=linkTitle;
				list.appendChild(link);
				orderList.appendChild(list);
			}
			localStorage.setItem("time",new Date());
			localStorage.setItem("links", JSON.stringify(links));
			localStorage.setItem("linkContent",JSON.stringify(content));
			document.getElementById("lastUpdated").innerHTML=currentDate;
			document.getElementById("newsList").appendChild(orderList);
		}
	}else{
		var orderList = document.createElement('ul');
		var links = JSON.parse(localStorage.getItem("links"));
		var content = JSON.parse(localStorage.getItem("linkContent"));
		for(i=0;i<links.length;i++){
			var list = document.createElement('li');
			var link = document.createElement('a');
			var href = links[i];
			var linkTitle = content[i];
			link.setAttribute("href",href);
			link.setAttribute("target","_blank");
			link.innerHTML=linkTitle;
			list.appendChild(link);
			orderList.appendChild(list);
		}
		document.getElementById("lastUpdated").innerHTML=new Date(storedDate);
		document.getElementById("newsList").appendChild(orderList);
	}
});

function reload(){
alert("hi");
}
