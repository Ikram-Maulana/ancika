import { Context } from "hono";

export const config = {
  runtime: "edge",
};

export async function welcome(c: Context) {
  return c.text(
    ` _______________________________\n` +
      `/ Hi, welcome to the ancika     \\\n` +
      `| site! There is nothing to see |\n` +
      `\\ here.                         /\n` +
      ` -------------------------------\n` +
      `        \\   ^__^                \n` +
      `         \\  (oo)\\_______        \n` +
      `            (__)\\       )\\/\\    \n` +
      `                ||----w |       \n` +
      `                ||     ||       `
  );
}
