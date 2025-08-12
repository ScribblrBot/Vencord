// ==UserScript==
// @name         Boop Command Replacer
// @description  Replaces "-b" with "Boop" before sending a message
// @version      1.0.0
// @author       You
// ==/UserScript==

import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

interface Message {
  content: string;
  [key: string]: any;
}

interface SendMessageArgs {
  0: string; // channelId
  1: Message;
}

const sendMessageModule = findByProps("sendMessage");

let unpatch: (() => void) | undefined;

export default {
  onLoad() {
    unpatch = before("sendMessage", sendMessageModule, (args: SendMessageArgs) => {
      const [channelId, message] = args;

      if (typeof message?.content === "string" && message.content.trim() === "-b") {
        message.content = "Boop";
      }
    });
  },

  onUnload() {
    unpatch?.();
  },
};
