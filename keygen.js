#!/usr/bin/env node

var forge = require('node-forge');
var btoa = require('btoa');

var pseudorandom_function = forge.md.sha256.create();
var password = process.argv[2];
var salt = process.argv[3];
var iterations = 30000;
var derived_key_length_bytes = 32; // 256-bit
var key = forge.pkcs5.pbkdf2(
  password,
  salt,
  iterations,
  derived_key_length_bytes,
  pseudorandom_function
)
// encode to base64 so we can easily print the key
// (normally it's in binary and can't be printed)
var base64_key = btoa(key);
console.log("base64_key:", base64_key);
