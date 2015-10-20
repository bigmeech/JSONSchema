
/***
 * @name JSONSchema
 * @description Schema Contructor for setting up Schema objects and validators
 * @param {string} schemaName
 * @param {object} data
 * @returns {function} validator
 */
function JSONSchema(schema, data){
    this.schemas = {};
    this.curSchema = {};
}

/***
 * @name useSchema
 * @description changes the currently selected schema to the name you supply
 * @param {string} schemaName
 * @returns {function} validator
 */
JSONSchema.prototype.useSchema = function(name){
    this.curSchema = this.schemas[name];
};

/***
 * @name useSchema
 * @description changes the currently selected schema to the name you supply
 * @param {string} schemaName
 * @param {object} schemaObject
 * @returns {function} validator
 */
JSONSchema.prototype.createSchema = function(schemaName, schemaObject){
    this.curSchema = this.schemas[schemaName] = schemaObject
};
JSONSchema.prototype.getValidator = function(schemaName){
    var schema = this.schemas[schemaName]
    if(schema){ return new Validator(schema); }
    else{ throw new Error('Could not find Schema with name: '+ schemaName); }
};

function Validator(schema){
    this.schema = schema;
    this._errors = []
    this._validator = function(data, schema){
        for(var key in schema){
            console.log(schema[key].type(data[key]));
        }
    }
}

Validator.prototype.validate = function(data, options){
    //console.log(data, options)
    //console.log(this.schema);
    this._validator(data, this.schema);
};

Validator.prototype.checkType = function(obj){
    var text = Function.prototype.toString.call(obj.constructor)
    return text.match(/function (.*)\(/)[1]
};