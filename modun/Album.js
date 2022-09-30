"use strict";
exports.__esModule = true;
exports.Album = void 0;
var Album = /** @class */ (function () {
    function Album(id, name) {
        this._listTheSong = [];
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Album.prototype, "listTheSong", {
        get: function () {
            return this._listTheSong;
        },
        set: function (value) {
            this._listTheSong = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.add = function (t) {
        this._listTheSong.push(t);
    };
    Album.prototype.findAll = function () {
        for (var i = 0; i < this._listTheSong.length; i++) {
            if (this._listTheSong.length == 0) {
                return "khong co bai hat nao ";
            }
        }
        return this.listTheSong;
    };
    Album.prototype.findById = function (id) {
        for (var i = 0; i < this._listTheSong.length; i++) {
            if (this._listTheSong[i].id == id) {
                return this._listTheSong[i];
            }
        }
        return -1;
    };
    Album.prototype.findByIndex = function (name) {
        return;
    };
    Album.prototype.findByName = function (name) {
        for (var i = 0; i < this._listTheSong.length; i++) {
            if (this._listTheSong[i].name == name) {
                return i;
            }
        }
        return -1;
    };
    return Album;
}());
exports.Album = Album;
