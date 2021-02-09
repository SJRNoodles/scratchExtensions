class sau {
   getInfo(){
     return{
        "id": "sau",
        "name": "Saurus Extension",
        "blocks":[
            {
            "opcode": "pi",
            "blockType": "reporter",
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
