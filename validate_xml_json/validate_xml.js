//Validate json
function validate_json(){
 var input_json = $('#content').val();
 var isjson;
 try{
    isjson = $.parseJSON(input_json);
	}catch(e){
    isjson = false;
 }
 if(isjson)
    $('#result').text("Valid JSON!");
 else
    $('#result').text("Invalid JSON!");
}
//Validate the XML
function validate_xml(){
var input_xml = $('#content').val();
var isXML;
//Validate the XML
 try
  {
  isXML = $.parseXML(input_xml);
 }catch(e){
  isXML = false;
 }
 if(isXML)
 $('#result').text("Valid XML!"); 
 else
  $('#result').text("Invalid XML!");
}
//Onload
window.onload=function(){
$("#xml").click(function() {validate_xml(this);});
$("#json").click(function() {validate_json(this);});
}

