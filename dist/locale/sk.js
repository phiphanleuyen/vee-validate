!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__vee_validate_locale__sk=n.__vee_validate_locale__sk||{},n.__vee_validate_locale__sk.js=e())}(this,function(){"use strict";var n=function(n){var e=["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"],o=0===(n=1024*Number(n))?0:Math.floor(Math.log(n)/Math.log(1024));return 1*(n/Math.pow(1024,o)).toFixed(2)+" "+e[o]},e={name:"sk",messages:{after:function(n,e){var o=e[0];return"Položka "+n+" musí byť vačšia "+(e[1]?"alebo rovná ":"")+" ako položka "+o+"."},alpha_dash:function(n){return n+" môže obsahovať len písmená, číslice, bodky a podčiarknutie."},alpha_num:function(n){return n+" môže obsahovať len písmená a číslice."},alpha_spaces:function(n){return n+" môže obsahovať len písmená, číslice a medzery."},alpha:function(n){return n+" môže obsahovať len písmená."},before:function(n,e){var o=e[0];return"Položka "+n+" musí byť menšia "+(e[1]?"alebo rovná ":"")+" ako položka "+o+"."},between:function(n,e){return"Položka "+n+" musí byť medzi "+e[0]+" a "+e[1]+"."},confirmed:function(n){return"Hodnota položky "+n+" nie je rovnaká."},credit_card:function(n){return"Položka "+n+" je neplatná."},date_between:function(n,e){return n+" musí byť medzi "+e[0]+" a "+e[1]+"."},date_format:function(n,e){return n+" musí byť vo formáte "+e[0]+"."},decimal:function(n,e){void 0===e&&(e=["*"]);var o=e[0];return"Položka "+n+" musí byť číselná a smie obsahovať "+("*"===o?"":o)+" desatinné miesta."},digits:function(n,e){var o=e[0];return"Položka "+n+" musí obsahovať "+o+" "+(o<5?"čísla":"čísiel")+"."},dimensions:function(n,e){return"Položka "+n+" musí mať "+e[0]+" x "+e[1]+" pixlov."},email:function(n){return"Položka "+n+" musí obsahovať správnu emailovú adresu."},ext:function(n){return n+" nie je platný súbor."},image:function(n){return n+" nie je obrázok."},in:function(n){return"Položka "+n+" má nesprávnu hodnotu."},ip:function(n){return"Položka "+n+" nie je platná IP adresa."},max:function(n,e){return"Položka "+n+" môže obsahovať najviac "+e[0]+" znakov."},max_value:function(n,e){return"Položka "+n+" musí byť maximálne "+e[0]+"."},mimes:function(n){return"Položka "+n+" obsahuje nesprávny typ súboru."},min:function(n,e){var o=e[0];return"Položka "+n+" musí obsahovať minimálne "+o+" "+(o<4?"znaky":"znakov")+"."},min_value:function(n,e){return"Položka "+n+" musí byť minimálne "+e[0]+"."},not_in:function(n){return"Položka "+n+" má nesprávnu hodnotu."},numeric:function(n){return"Položka "+n+" môže obsahovať len číslice."},regex:function(n){return"Formát položky "+n+" je nesprávny."},required:function(n){return"Položka "+n+" je povinná."},size:function(e,o){var a=o[0];return"Položka "+e+" musí byť menej ako "+n(a)+"."},url:function(n){return"Položka "+n+" neobsahuje platnú URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.addLocale(e),e});