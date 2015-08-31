#!/usr/bin/env node

var atob = require('atob')
var forge = require('node-forge');

var key = atob ( process.argv[2] );
var encoded_message = atob ( process.argv[3] );


var version = encoded_message.substr(0, 1);
var tag = encoded_message.substr(1, 16); // 128 bits
var initialization_vector = encoded_message.substr(17, 12); // 96 bits
var encrypted_message = encoded_message.substr(29);

if (version != "1") {
  throw "invalid version"
}

var decipher = forge.cipher.createDecipher('AES-GCM', key);
decipher.start({
    'iv': initialization_vector,
    'tag': tag
});
decipher.update(forge.util.createBuffer(encrypted_message));
decipher.finish();

var message = decipher.output.toString('utf8');
console.log("message:", message);
