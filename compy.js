class compy {
   getInfo(){
     return{
        "id": "compy",
        "name": "Compy",
        "blocks":[
          
           {
            "opcode": "fetch",
            "blockType": "command",
            "text": "fetch from url [stringy]",
           "arguments":{
              "stringy":{
                   "type":"string",
                   "defaultValue":"https://mikedev101.github.io/cloudlink/fetch_test"
                },
              }
            },
          
        ],
        "menus":{
        },
     };
   }
   comment(args){
     return fetch(args.url).then(response => response.text())
   }
}
Scratch.extensions.register(new compy());
