"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
    }
    return Server;
}());
exports.default = new Server().app;
//# sourceMappingURL=Server.js.map