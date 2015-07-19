

chrome.browserAction.onClicked.addListener(function(tab) {
  displayTabs();
});

function displayTabs(){
  chrome.tabs.query({
    active : true
  }, function(array_of_Tabs) {
        var tab = array_of_Tabs[0];
        var url = tab.url;
        var x = new XMLHttpRequest();
		    x.open('GET',url,false);
		    x.send();
      if(x.status == 200){
        var dummyDomEle = document.createElement('div');
			     dummyDomEle.innerHTML = x.responseText;
        var linksList = dummyDomEle.getElementsByTagName("a");
        var tabs = linksList.length;
        var count = 0;
        var max_count=100;
        for(i=0;i<tabs;i++){
          var link = String(linksList[i].getAttribute("href"));
          if((link.indexOf("http") == 0) || (link.indexOf("https:")==0)){
            createNewTab(linksList[i].getAttribute("href"));
            count = count+1;
          }
          if(count>=max_count)
             break;
        }
      }
  });
}

function createNewTab(url){
  chrome.tabs.create({'url':url},null);
}
