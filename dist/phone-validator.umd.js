(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["Phone Validator"] = factory());
})(this, (function () { 'use strict';

    class phoneValidator {
        constructor(apiKey, baseUrl = "https://api.genderapi.io") {
            this.apiKey = apiKey;
            this.baseUrl = baseUrl;
        }

        async validate({number, address = ""}) {
            if(typeof number !== "string" || !number.trim()) {
                return {status:false,errno: 91, errmsg: "Missing number parameter on your request."};
            }

            return await this._postRequest("/api/phone", {
                number,
                address
            });
        }


    }

    // CommonJS Export
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        module.exports = phoneValidator;
    }

    return phoneValidator;

}));
