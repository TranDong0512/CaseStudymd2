"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(id, userName, userPass) {
        this._id = id;
        this._userName = userName;
        this._userPass = userPass;
    }
    Object.defineProperty(Account.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "userPass", {
        get: function () {
            return this._userPass;
        },
        set: function (value) {
            this._userPass = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
