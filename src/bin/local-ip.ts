#!/usr/bin/env node

import { networkInterfaces } from 'os';
const ip: string = Object.entries(networkInterfaces())
    .map(([_, nics]) => nics).flat()
    .filter(nic => !nic?.internal && nic?.family === 'IPv4')
    .map(nic => nic?.address ?? '')
    .filter(ip => !ip.startsWith('169.254.'))
    .slice(0, 1).join('');
console.log(ip);