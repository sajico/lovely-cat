import { meow1, meow2, meow3 } from './meow';

export namespace LovelyCat {
    export const meow = meow1;
}
export const meow = meow2;

module.exports.default = { LovelyCat, meow, meow3 };