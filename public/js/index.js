
function addText(){

   $('#uploadFile').trigger('click');

   $('#uploadFile').on('change',function(){
   

       var file = document.getElementById('uploadFile').files[0];

     var all   = $.when(file);   
     all.done(function(){
      
        if (file) {
          // create reader
         
          var reader = new FileReader();
          reader.readAsText(file);
          reader.onload = function(e) {
            document.getElementById("content").innerHTML=e.target.result;
          };
        }
    });

  
  });

}