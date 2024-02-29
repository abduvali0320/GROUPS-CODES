function count_text(text) {
  const obj = {};
  // Har bir harfni tekshirish
  for (const char of text) {
    const lower_letter = char.toLowerCase();

    obj[lower_letter] = (obj[lower_letter] || 0) + 1;
  }
  return obj;
}
const text = "salom olam hello world";
const result = count_text(text);
console.log(result);
