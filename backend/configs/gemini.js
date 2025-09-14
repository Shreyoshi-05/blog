import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);

async function main(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(
    prompt + " generate a blog in text format on that topic"
  );

  let blogText = result.response.text();

  // ✅ Remove special characters (keep letters, numbers, spaces, and punctuation like . , ? !)
  blogText = blogText.replace(/[^a-zA-Z0-9 .,?!'"()\n]/g, "");

  return blogText;
}

export default main;

