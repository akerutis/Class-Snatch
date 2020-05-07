




     function nextStep(){
           try {
             document.all[9].ownerDocument.all[9].contentDocument.getElementsByName("frame2")[0].contentDocument.getElementsByTagName("frame")[0].contentDocument.getElementsByName("TargetContent")[0].contentDocument.getElementsByName('DERIVED_REGFRM1_LINK_ADD_ENRL$82$')[0].click();
           }
catch(error) {
  console.error("hoho");
}
     }

     function finishEnroll(){
           try {
             document.all[9].ownerDocument.all[9].contentDocument.getElementsByName("frame2")[0].contentDocument.getElementsByTagName("frame")[0].contentDocument.getElementsByName("TargetContent")[0].contentDocument.getElementsByName('DERIVED_REGFRM1_SSR_PB_SUBMIT')[0].click();
          }
catch(error) {
  console.error("hoho");

}
     }

setTimeout(nextStep, 3000);
console.log("yo")
setTimeout(finishEnroll, 6000);

console.log("blah")
var myVar = setInterval(function() {
    if(document.getElementById('button1')) {
        //  clearInterval(myVar);
        console.log("nahhh")
        return false;
    } else {
        if(document.getElementById("CatalogList")) {
            var num=0
            var courseNums = new Object();
            for (var i = 1, row; row = document.getElementById("CatalogList").rows[i]; i++){
              console.log("yahhh")
              let id = "button" + i

              var button = document.createElement("button");
              var courseNum=parseInt((document.getElementsByClassName("course-details-link")[num].innerHTML))
              while(Number.isNaN(courseNum)){
                num=num+1;
                courseNum=parseInt((document.getElementsByClassName("course-details-link")[num].innerHTML));

              }
              courseNums[id]=courseNum
              num=num+1
              button.innerHTML = courseNum;
              button.id = id;
              button.type = "button";
              row.appendChild(button);

              var theButton = document.getElementById(id);
              theButton.addEventListener('click', function() {
                  console.log(courseNums[id]);
                  windowVar = window.open('google.com', 'windowName');
                  window.open ('google.com', '_top');
                  alert("Class Saved\n\nPlease add to shopping cart so it may automatically be added when it opens.\n\nNote: your browser must be open when the class opens and you must already be signed in");
                  $.getJSON(('https://akerutis.com/courses?username=muffles&course=' + courseNums[id], function(data) {
                        console.log(data)
                    }));
              });
            }
        }
    }
}, 500);
