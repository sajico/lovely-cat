export * from './meow';
const meow1 = (arg: string): string => `にゃ〜ん1 / arg:${arg}`;
module.exports = meow1;
export namespace Meow2 {
    export const meow2 = (arg: string): string => `にゃ〜ん2 / arg:${arg}`;
}
module.exports.Meow2 = Meow2;