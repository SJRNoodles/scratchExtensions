class sobj {
   getInfo(){
     return{
        "id": "sobj",
        "name": "Scrobj",
        "blocks":[
            {
            "opcode": "spos",
            "blockType": "command",
            "text": "set position of [string] to x [num1] y [num2]",
            "arguments":{
                "num1":{
                "type": "number",
                "defaultValue":"0"
                },
                
                "num2":{
                "type": "number",
                "defaultValue":"0"
                },
                
                "string":{
                "type": "string",
                "defaultValue":"Sprite1"
                },
              },
            }
        ],
        "menus":{
        },
     };
   }
   spos({string, num1, num2}){
   string.x = num1;
   string.y = num2;
   };
}
Scratch.extensions.register(new sobj());
