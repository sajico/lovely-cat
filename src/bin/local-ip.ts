#!/usr/bin/env node

import { networkInterfaces } from 'os';

const getIpAddress = (): string | null => {
    const nets = networkInterfaces();
    const net = nets['en0']?.find(v => v.family === 'IPv4');
    return !!net ? net.address : null;
};
console.log(getIpAddress());