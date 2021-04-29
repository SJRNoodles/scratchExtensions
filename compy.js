class compy {
   getInfo(){
     return{
        "id": "compy",
        "name": "Compy",
        "blocks":[
          
           {
            "opcode": "comment",
            "blockType": "command",
            "text": "comment [stringy]",
           "arguments":{
              "stringy":{
                   "type":"string",
                   "defaultValue":""
                },
              }
            },
          
        ],
        "menus":{
        },
     };
   }
   comment(){
     return(true);
   }
}
Scratch.extensions.register(new compy());
