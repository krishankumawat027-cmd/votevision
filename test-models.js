require('dotenv').config();

async function listModels() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.error("No API key");
    return;
  }
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
  const data = await res.json();
  if (data.models) {
    console.log(data.models.map(m => m.name).join("\n"));
  } else {
    console.log(data);
  }
}

listModels();
