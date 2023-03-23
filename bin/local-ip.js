#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const getIpAddress = () => {
    var _a;
    const nets = (0, os_1.networkInterfaces)();
    const net = (_a = nets['en0']) === null || _a === void 0 ? void 0 : _a.find(v => v.family === 'IPv4');
    return !!net ? net.address : null;
};
console.log(getIpAddress());
//# sourceMappingURL=local-ip.js.map