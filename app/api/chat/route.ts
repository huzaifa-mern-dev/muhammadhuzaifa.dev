/**
 * app/api/chat/route.ts — Secure Gemini AI Chatbot Route Handler
 *
 * SECURITY NOTE:
 * The original main.js called the Gemini API directly from the browser
 * with a hardcoded API key — publicly visible to anyone in the page source.
 *
 * This Route Handler runs 100% on the server. The API key is read from
 * process.env.GEMINI_API_KEY and NEVER sent to the client.
 *
 * ─── Setup Required ───────────────────────────────────────────────────────
 * 1. Create a .env.local file in the project root (git-ignored).
 * 2. Add your NEW key (revoke the old one!):
 *    GEMINI_API_KEY=AIzaSy...your_new_key_here
 * 3. Restart the dev server after adding the env var.
 * ──────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── Constants ───────────────────────────────────────────────────────────────
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

// The system persona — migrated from the original hardcoded prompt in main.js.
// Consider moving this to a lib/data/chatbot-prompt.ts file for easier editing.
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

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Validate that the API key is configured
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set in environment variables.");
    return NextResponse.json(
      { error: "Chat service is not configured. Please contact the site owner." },
      { status: 503 }
    );
  }

  // 2. Parse the request body
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

  // 3. Build the Gemini API request
  //    Structure: first part = system persona context, second part = user message
  const geminiBody: GeminiRequestBody = {
    contents: [
      {
        parts: [{ text: systemPrompt }, { text: message.trim() }],
      },
    ],
  };

  // 4. Call the Gemini API from the server
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
      // Recommended: set a timeout to avoid hanging requests
      // (Node 18+ fetch supports AbortSignal)
      signal: AbortSignal.timeout(15_000), // 15 second timeout
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

    // 5. Extract the reply text from the Gemini response structure
    const reply: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "I'm sorry, I couldn't generate a response right now. Please try again!";

    // 6. Return the reply to the client
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

// Block all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
