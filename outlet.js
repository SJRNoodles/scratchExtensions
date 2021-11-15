class compy {
   getInfo(){
     return{
        "id": "compy",
        "name": "outlet",
        "blocks":[
          
           {
            "opcode": "fetchrl",
            "blockType": "reporter",
            "text": "fetch [stringy]",
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
   fetchrl(args){
     return fetch(args.url).then(response => response.text())
   }
}
Scratch.extensions.register(new compy());
