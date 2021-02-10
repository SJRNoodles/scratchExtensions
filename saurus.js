var rcmd = '';

	var scr = scr;
	if (!scr) {
		scr = document.createElement("script");
		scr.type="text/javascript";
		scr.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
		document.body.appendChild(scr);
	}

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
      $.ajax({ url: "'" + hmr + "'", success: function(data) { return(data); } });
   };
   eva({evstring}){
      var cmd = evstring;
      rcmd = cmd;
      console.log(eval(cmd));
   };
}
Scratch.extensions.register(new sau());
