#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const ip = Object.entries((0, os_1.networkInterfaces)())
    .map(([_, nics]) => nics).flat()
    .filter(nic => !(nic === null || nic === void 0 ? void 0 : nic.internal) && (nic === null || nic === void 0 ? void 0 : nic.family) === 'IPv4')
    .map(nic => { var _a; return (_a = nic === null || nic === void 0 ? void 0 : nic.address) !== null && _a !== void 0 ? _a : ''; })
    .filter(ip => !ip.startsWith('169.254.'))
    .slice(0, 1).join('');
console.log(ip);
//# sourceMappingURL=local-ip.js.map