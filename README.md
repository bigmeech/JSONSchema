### A Sample Schema Object

```
var sampleSchema = {
    name:{type:String},
    regionIds:[{ type:Number }],
    users:{
        type:Object,
        items:{

        }
    }
}

```


### Now use the schema to validate the JSON

```
var schema = new JSONSchema();
schema.createSchema("nameSchema", sampleSchema)
schema.useSchema("nameSchema")
var validator = schema.getValidator("nameSchema")
validator.validate({"name":"hello"},{
    caseSensitive:true,
    preserveStructure:true
})

```
