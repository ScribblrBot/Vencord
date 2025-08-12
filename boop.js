// ==UserScript==
// @name         Boop Command Replacer
// @description  Replaces "-b" with "Boop" and sends it instead
// @version      1.0.0
// @author       You
// ==/UserScript==

import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { getByProps } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const sendMessageMod = findByProps("sendMessage");

let unpatch;

export default {
  onLoad() {
    unpatch = before("sendMessage", sendMessageMod, (args) => {
      const [channelId, message] = args;

      if (message.content.trim() === "-b") {
        // Replace the message content
        message.content = "Boop";
      }
    });
  },

  onUnload() {
    unpatch?.();
  },
};
