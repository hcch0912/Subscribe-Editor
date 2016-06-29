
function addText(){

   $('#uploadFile').trigger('click');

   var file = document.getElementById('uploadFile').files[0];
   var all   = $.when(file);   
   all.done(function(){
   	console.log("here");
    if (file) {
        // create reader
        console.log("yes");
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e) {

         document.getElementById("content").innerHTML=e.target.result;
        };
    }
	});
}