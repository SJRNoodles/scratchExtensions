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
            "opcode": "deb",
            "blockType": "reporter",
            "text": "debug [input]",
           "arguments":{
              "input":{
                   "type":"string",
                   "defaultValue":"cat is walking"
                },
              }
            },
           {
            "opcode": "gor",
            "blockType": "Boolean",
            "text": "[x] >= [y]",
              "arguments":{
                   "x":{
                       "type":"string",
                       "defaultValue": "0"
                    },
                 "y":{
                       "type":"string",
                       "defaultValue": "50"
                    },
               }
            },
        ],
        "menus":{
        },
     };
   }
   gor({x,y}){
     if(x >= y){
     return(true);
     }else{
     return(false);
     }
   }
   pi(){
     return(Math.PI);
   };
   evr({evrin}){
     
     return(eval(evrin));
   };
   deb({input}){
      
      console.log(input);
      return(input);
   };
   eva({evstring}){
      var cmd = evstring;
      rcmd = cmd;
      console.log(eval(cmd));
   };
}
Scratch.extensions.register(new sau());
