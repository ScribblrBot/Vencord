// ==UserScript==
// @name         Boop Command Replacer
// @description  Replaces "-b" with "Boop" before sending a message
// @version      1.0.0
// @author       You
// ==/UserScript==

type Message = {
  content: string;
  [key: string]: any;
};

type SendMessageArgs = [string, Message];

export default {
  onLoad() {
    // Dynamically require Vendetta modules at runtime to avoid bundler errors
    // @ts-ignore
    const patcher = require("@vendetta/patcher");
    // @ts-ignore
    const metro = require("@vendetta/metro");

    const { before } = patcher;
    const { findByProps } = metro;

    const sendMessageModule = findByProps("sendMessage");

    // Patch sendMessage before it runs
    this._unpatch = before("sendMessage", sendMessageModule, (args: SendMessageArgs) => {
      const [, message] = args;

      if (typeof message?.content === "string" && message.content.trim() === "-b") {
        message.content = "Boop";
      }
    });
  },

  onUnload() {
    this._unpatch?.();
  },

  _unpatch: null as (() => void) | null,
};
