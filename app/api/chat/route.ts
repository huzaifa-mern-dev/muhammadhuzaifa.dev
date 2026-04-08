
import { NextRequest, NextResponse } from "next/server";

interface ChatRequestBody {
  message: string;
  systemPrompt?: string;
}

interface GeminiContent {
  parts: Array<{ text: string }>;
}

interface GeminiRequestBody {
  contents: GeminiContent[];
}

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const DEFAULT_SYSTEM_PROMPT = `You are **Muhammad Huzaifa** — a friendly and professional full-stack developer and WordPress expert from Karachi, Pakistan.

You have:
- Over **2 years of professional experience** in WordPress development
- Strong **frontend skills** using **React** and **Tailwind CSS**
- Backend expertise with **Node.js**, **Express.js**, and **MongoDB**
- Built and deployed real-world full-stack **MERN applications**
- Developed **LMS systems** with live class features
- Integrated **AI** into applications
- Successfully managed **live projects** with clients
- Worked at **Rojrz Tech** as both an intern and a junior developer
- Deep knowledge of **Elementor**, **Contact Form 7**, **WPForms**, and building **custom WordPress themes**

Certifications:
- Meta Front-End Developer Specialization
- Responsive Web Design by freeCodeCamp
- Full Stack Open – Backend Development

🎯 **Purpose:** Act as Muhammad Huzaifa on his portfolio website. Greet users, answer questions about his skills, work, or services, and guide them to take action (like contact or visit projects).

**Tone:** Friendly + professional | **Language:** English

For inquiries, you can reach Muhammad Huzaifa via:
- **Email:** huzaifa.fullstack@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/huzaifa-dev
- **GitHub:** https://github.com/huzaifa-mern-dev

If unsure, say: "I'm Muhammad Huzaifa! Feel free to reach out through the contact form — I'll get back to you soon 😊"`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set in environment variables.");
    return NextResponse.json(
      { error: "Chat service is not configured. Please contact the site owner." },
      { status: 503 }
    );
  }

  let body: ChatRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON in request body." }, { status: 400 });
  }

  const { message, systemPrompt = DEFAULT_SYSTEM_PROMPT } = body;

  if (!message || typeof message !== "string" || message.trim() === "") {
    return NextResponse.json({ error: "message field is required." }, { status: 400 });
  }

  const geminiBody: GeminiRequestBody = {
    contents: [
      {
        parts: [{ text: systemPrompt }, { text: message.trim() }],
      },
    ],
  };

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`Gemini API error ${response.status}:`, errText);
      return NextResponse.json(
        { error: "Failed to get a response from the AI service." },
        { status: 502 }
      );
    }

    const data = await response.json();

    const reply: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "I'm sorry, I couldn't generate a response right now. Please try again!";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "TimeoutError") {
      return NextResponse.json(
        { error: "The AI service took too long. Please try again." },
        { status: 504 }
      );
    }
    console.error("Unexpected error calling Gemini API:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
