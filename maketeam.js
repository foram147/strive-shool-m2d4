function makeTeam(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("addName").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("addName").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  for(var i=2; i<=15 ; i++){
      if(i%2===0){
    var select = document.getElementById("tmMem");
    var option = document.createElement("OPTION");
	select.options.add(option);
	option.text = i;
	option.value = i;
}
}