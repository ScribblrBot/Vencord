import { VencordPlugin } from "@vencord/plugin";

export default class BoopPlugin extends VencordPlugin {
  onLoad() {
    const { messages } = this.vencord;

    // Hook into the message sending process
    messages.beforeSendMessage(({ content, cancel, send }) => {
      if (content === "-b") {
        cancel(); // prevent sending the original message
        send("Boop"); // send "Boop" instead
      }
    });
  }
}
