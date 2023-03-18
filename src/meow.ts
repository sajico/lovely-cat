const meow3 = (arg: string): string => `にゃ〜ん3 / arg:${arg}`;
module.exports = meow3;
export namespace Meow4 {
    export const meow4 = (arg: string): string => `にゃ〜ん4 / arg:${arg}`;
}
module.exports.Meow4 = Meow4;