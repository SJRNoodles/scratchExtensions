class sau {
   getInfo(){
     return{
        "id": "sau",
        "name": "Saurus Extension",
        "blocks":[
            {
            "opcode": "pi",
            "blockType": "command",
            "text": "pi",
            }
        ],
        "menus":{
        },
     };
   }
   pi(){
     return(Math.PI);
   };
}
Scratch.extensions.register(new sau());
