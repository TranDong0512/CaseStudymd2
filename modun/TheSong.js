"use strict";
exports.__esModule = true;
exports.TheSong = void 0;
var TheSong = /** @class */ (function () {
    function TheSong(id, name, composing) {
        this._id = id;
        this._name = name;
        this._composing = composing;
    }
    Object.defineProperty(TheSong.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TheSong.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TheSong.prototype, "composing", {
        get: function () {
            return this._composing;
        },
        set: function (value) {
            this._composing = value;
        },
        enumerable: false,
        configurable: true
    });
    return TheSong;
}());
exports.TheSong = TheSong;
