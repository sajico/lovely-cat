import { meow } from './meow_';

export namespace LovelyCat {
    export const meow = (arg: string): string => `にゃ〜ん! arg:${arg}`;
}
export const meow2 = meow;

module.exports.default = { LovelyCat, meow2 };