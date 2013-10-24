function validate_xml(obj){
$('#content').text(obj.value);
var input_xml = $('#content').text();
var isXML;
//Validate the XML
 try
	 {
 	   isXML = $.parseXML(input_xml);			
 }catch(e){
           isXML = false;
 } 
 if(isXML){
   isXML=true;
   alert("true");
}
 else{
   isXML=false; 
   alert("false");
}
}
