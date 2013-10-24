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
window.onload=function(){
$("#button1").click(function() {
  validate_xml(this);
});
}
