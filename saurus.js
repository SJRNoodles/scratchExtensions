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
            }
        ],
        "menus":{
        },
     };
   }
   pi(){
     return(Math.PI);
   };
   eva(evstring){
      var cmd = evstring;
     eval(cmd);
      return(cmd);
   };
}
Scratch.extensions.register(new sau());
