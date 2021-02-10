var rcmd = '';
class sau {
   getInfo(){
     return{
        "id": "sau",
        "name": "Saurus / Very experimental blocks",
        "blocks":[
            {
            "opcode": "pi",
            "blockType": "reporter",
            "text": "pi",
            },
           {
            "opcode": "eva",
            "blockType": "command",
            "text": "eval [evstring]",
           "arguments":{
              "evstring":{
                   "type":"string",
                   "defaultValue":"javascript goes here"
                },
              }
            },
           {
            "opcode": "evr",
            "blockType": "reporter",
            "text": "eval report [evrin]",
              "arguments":{
                   "evrin":{
                       "type":"string",
                       "defaultValue": "js goes here"
                    },
               }
            },
           {
            "opcode": "ghtm",
            "blockType": "reporter",
            "text": "html request [hmr]",
           "arguments":{
              "hmr":{
                   "type":"string",
                   "defaultValue":"https://youtube.com"
                },
              }
            },
        ],
        "menus":{
        },
     };
   }
   pi(){
     return(Math.PI);
   };
   evr({evrin}){
     
     return(eval(evrin));
   };
   ghtm({hmr}){
      function makeHttpObject() {
        try {return new XMLHttpRequest();}
        catch (error) {}
        try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
        try {return new ActiveXObject("Microsoft.XMLHTTP");}
        catch (error) {}

        throw new Error("Could not create HTTP request object.");
      }

      var request = makeHttpObject();
      request.open("GET", hmr, true);
      request.send(null);
      request.onreadystatechange = function() {
        if (request.readyState == 4)
          return(request.responseText);
        };
   };
   eva({evstring}){
      var cmd = evstring;
      rcmd = cmd;
      console.log(eval(cmd));
   };
}
Scratch.extensions.register(new sau());
