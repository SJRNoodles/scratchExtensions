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
            "text": "recent command",
            }
        ],
        "menus":{
        },
     };
   }
   pi(){
     return(Math.PI);
   };
   evr(){
     
     return(rcmd);
   };
   eva({evstring}){
      var cmd = evstring;
     eval(cmd);
      return(cmd);
      rcmd = cmd;
      console.log(rcmd);
   };
}
Scratch.extensions.register(new sau());
