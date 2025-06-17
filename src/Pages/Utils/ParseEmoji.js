import emoji from 'emoji-dictionary';

export default function parseEmoji(text) {
  return text.replace(/:([a-zA-Z0-9_+-]+):/g, (match, name) => {
    const found = emoji.getUnicode(name);
    return found || match;
  });
}