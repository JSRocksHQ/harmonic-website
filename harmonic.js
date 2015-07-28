/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":10,"name":"Awesome website","title":"My awesome static website","domain":"http://awesome.com","subtitle":"Powered by Harmonic","author":"Jaydson","description":"This is the description","bio":"Thats me","theme":"harmonic-theme-selfblog","preprocessor":"stylus","posts_permalink":":language/:year/:month/:title","pages_permalink":"pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"en","languages":["en","pt-br"]}};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"en":[{"layout":"post","title":"hello world","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Hello World!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"2014/05/hello-world","lang":"en","default_lang":false}],"pt-br":[{"layout":"post","title":"ola mundo","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Olá mundo!</p>\n","file":"src/posts/hello-world.md","filename":"hello-world","link":"pt-br/2014/05/hello-world","lang":"pt-br","default_lang":true}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return [];
        }
    }]);

    return Harmonic;
})();