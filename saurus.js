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
            }
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
   eva({evstring}){
      var cmd = evstring;
     eval(cmd);
      return(eval(evstring));
      rcmd = cmd;
      console.log(rcmd);
   };
}
Scratch.extensions.register(new sau());
