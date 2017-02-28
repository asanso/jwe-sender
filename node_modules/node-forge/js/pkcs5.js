/**
 * Password-Based Key-Derivation Function #2 implementation.
 *
 * See RFC 2898 for details.
 *
 * @author Matt Miller
 *
 * Copyright (c) 2010-2013 Digital Bazaar, Inc.
 */
(function() {

var forge = {
  pkcs5 : module.exports || {}
};

forge.pkcs5 = require("./pbkdf2");

})();
