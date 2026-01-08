/**
 * Audio API Examples
 * Demonstrates various ways to use the R9S audio API (speech, transcription, translation).
 */

import { R9S } from "@r9s/sdk";
import * as fs from "fs";
import * as readline from "readline";

async function textToSpeechBasic() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 1: Basic Text-to-Speech");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const response = await r9s.audioSDK.speech({
    model: "speech-2.6-turbo",
    input: "I am good at k8s",
    voice: "alloy",
    responseFormat: "mp3",
  });

  const outputFile = "tech_talk.mp3";
  // Convert ReadableStream to Response to access arrayBuffer()
  const httpResponse = new Response(response);
  const buffer = Buffer.from(await httpResponse.arrayBuffer());
  fs.writeFileSync(outputFile, buffer);
  console.log(`Audio saved to: ${outputFile}`);
}

async function textToSpeechWithOptions() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 2: Text-to-Speech with Custom Parameters");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const response = await r9s.audioSDK.speech({
    model: "speech-2.6-turbo",
    input: "The quick brown fox jumps over the lazy dog.",
    voice: "nova",
    responseFormat: "mp3",
    speed: 1.0,
  });

  const outputFile = "output_detailed.mp3";
  const httpResponse = new Response(response);
  const buffer = Buffer.from(await httpResponse.arrayBuffer());
  fs.writeFileSync(outputFile, buffer);
  console.log(`High-quality audio saved to: ${outputFile}`);
}

async function textToSpeechFast() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 3: Fast-Paced Speech");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const response = await r9s.audioSDK.speech({
    model: "speech-2.6-turbo",
    input:
      "Daily update: traffic is clear, weather is sunny, meetings start at 10 AM.",
    voice: "echo",
    responseFormat: "mp3",
    speed: 1.2,
  });

  const outputFile = "output_fast.mp3";
  const httpResponse = new Response(response);
  const buffer = Buffer.from(await httpResponse.arrayBuffer());
  fs.writeFileSync(outputFile, buffer);
  console.log(`Fast-paced audio saved to: ${outputFile} (speed: 1.2x)`);
}

async function textToSpeechSlow() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 4: Slow Speech for Language Learning");
  console.log("=".repeat(60));

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const response = await r9s.audioSDK.speech({
    model: "speech-2.6-turbo",
    input: "Practice makes perfect. Repeat after me slowly.",
    voice: "shimmer",
    responseFormat: "mp3",
    speed: 0.75,
  });

  const outputFile = "output_slow.mp3";
  const httpResponse = new Response(response);
  const buffer = Buffer.from(await httpResponse.arrayBuffer());
  fs.writeFileSync(outputFile, buffer);
  console.log(`Slow-paced audio saved to: ${outputFile} (speed: 0.75x)`);
}

async function transcribeAudioBasic() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 5: Basic Audio Transcription");
  console.log("=".repeat(60));

  const audioFilePath = "output_slow.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.transcribe({
    file: {
      fileName: "output_slow.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
  });

  if (typeof response === "string") {
    console.log(`Transcription: ${response}`);
  } else {
    console.log(`Transcription: ${response.text}`);
    if (response.language) {
      console.log(`Detected language: ${response.language}`);
    }
  }
}

async function transcribeAudioWithOptions() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 6: Audio Transcription with Parameters");
  console.log("=".repeat(60));

  const audioFilePath = "output_slow.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.transcribe({
    file: {
      fileName: "output_slow.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
    language: "en",
    temperature: 0,
  });

  if (typeof response === "string") {
    console.log(`Transcription: ${response}`);
  } else {
    console.log(`Transcription: ${response.text}`);
  }
}

async function transcribeAudioWithTimestamps() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 7: Audio Transcription with Word Timestamps");
  console.log("=".repeat(60));

  const audioFilePath = "meeting.wav";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.transcribe({
    file: {
      fileName: "meeting.wav",
      content: audioBuffer,
    },
    model: "gpt-4o-transcribe",
    language: "en",
    responseFormat: "verbose_json",
    timestampGranularities: ["word"],
  });

  if (typeof response === "string") {
    console.log(`Transcription: ${response}`);
  } else {
    console.log(`Transcription: ${response.text}`);
    if (response.words) {
      console.log("\nFirst 5 words with timestamps:");
      response.words.slice(0, 5).forEach((wordInfo: any) => {
        console.log(
          `  ${wordInfo.word} [${wordInfo.start.toFixed(2)}s - ${wordInfo.end.toFixed(2)}s]`
        );
      });
    }
  }
}

async function transcribeAudioSrt() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 8: Generate SRT Subtitles");
  console.log("=".repeat(60));

  const audioFilePath = "video_audio.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.transcribe({
    file: {
      fileName: "video_audio.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
    language: "en",
    responseFormat: "srt",
  });

  const srtFile = "subtitles.srt";
  const srtContent = typeof response === "string" ? response : response.text;
  fs.writeFileSync(srtFile, srtContent, "utf-8");
  console.log(`SRT subtitles saved to: ${srtFile}`);
}

async function transcribeWithPrompt() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 9: Transcription with Technical Terms Prompt");
  console.log("=".repeat(60));

  const audioFilePath = "tech_talk.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.transcribe({
    file: {
      fileName: "tech_talk.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
    language: "en",
    prompt:
      "Technical discussion about Kubernetes, Docker, microservices, API gateway",
    responseFormat: "json",
    temperature: 0,
  });

  if (typeof response === "string") {
    console.log(`Transcription: ${response}`);
  } else {
    console.log(`Transcription: ${response.text}`);
  }
  console.log("Note: The prompt helps improve accuracy for technical terminology");
}

async function translateAudioBasic() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 10: Basic Audio Translation");
  console.log("=".repeat(60));

  const audioFilePath = "german_audio.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.translate({
    file: {
      fileName: "german_audio.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
  });

  if (typeof response === "string") {
    console.log(`English Translation: ${response}`);
  } else {
    console.log(`English Translation: ${response.text}`);
    if (response.language) {
      console.log(`Source language: ${response.language}`);
    }
  }
}

async function translateAudioWithPrompt() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 11: Audio Translation with Prompt");
  console.log("=".repeat(60));

  const audioFilePath = "french_audio.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.translate({
    file: {
      fileName: "french_audio.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
    prompt: "This is about technology",
    responseFormat: "json",
  });

  if (typeof response === "string") {
    console.log(`English Translation: ${response}`);
  } else {
    console.log(`English Translation: ${response.text}`);
  }
}

async function translateMeetingNotes() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 12: Translate Meeting Recording");
  console.log("=".repeat(60));

  const audioFilePath = "meeting_cn.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.translate({
    file: {
      fileName: "meeting_cn.mp3",
      content: audioBuffer,
    },
    model: "gpt-4o-transcribe",
    prompt: "Business meeting, translate clearly",
    responseFormat: "text",
  });

  const translation = typeof response === "string" ? response : response.text;
  console.log(`Meeting Translation:\n${translation}`);
}

async function translateWithPreciseMode() {
  console.log("\n" + "=".repeat(60));
  console.log("Example 13: Precise Translation (Low Temperature)");
  console.log("=".repeat(60));

  const audioFilePath = "legal_audio.mp3";

  if (!fs.existsSync(audioFilePath)) {
    console.log(
      `Warning: Audio file '${audioFilePath}' not found. Skipping this example.`
    );
    return;
  }

  const r9s = new R9S({
    apiKey: process.env.R9S_API_KEY || "",
    serverURL: process.env.R9S_BASE_URL,
  });

  const audioBuffer = fs.readFileSync(audioFilePath);
  const response = await r9s.audioSDK.translate({
    file: {
      fileName: "legal_audio.mp3",
      content: audioBuffer,
    },
    model: "whisper-1",
    prompt: "Legal document reading, translate accurately",
    responseFormat: "json",
    temperature: 0,
  });

  if (typeof response === "string") {
    console.log(`Precise Translation: ${response}`);
  } else {
    console.log(`Precise Translation: ${response.text}`);
  }
  console.log("Note: temperature=0 ensures maximum precision");
}

async function main() {
  const examples = [
    { name: "Basic Text-to-Speech", fn: textToSpeechBasic },
    { name: "Text-to-Speech with Options", fn: textToSpeechWithOptions },
    { name: "Fast-Paced Speech", fn: textToSpeechFast },
    { name: "Slow Speech for Learning", fn: textToSpeechSlow },
    { name: "Basic Audio Transcription", fn: transcribeAudioBasic },
    { name: "Transcription with Parameters", fn: transcribeAudioWithOptions },
    {
      name: "Transcription with Timestamps",
      fn: transcribeAudioWithTimestamps,
    },
    { name: "Generate SRT Subtitles", fn: transcribeAudioSrt },
    { name: "Transcription with Prompt", fn: transcribeWithPrompt },
    { name: "Basic Audio Translation", fn: translateAudioBasic },
    { name: "Translation with Prompt", fn: translateAudioWithPrompt },
    { name: "Translate Meeting Recording", fn: translateMeetingNotes },
    { name: "Precise Translation", fn: translateWithPreciseMode },
  ];

  console.log("\n" + "=".repeat(60));
  console.log("R9S Audio API - All Examples");
  console.log("=".repeat(60));
  console.log("\nAvailable examples:");
  examples.forEach((ex, i) => {
    console.log(`  ${i + 1}. ${ex.name}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "\nSelect an example to run (1-13), or 0 to run all: ",
    async (answer) => {
      rl.close();

      try {
        const choice = answer.trim();

        if (choice === "0") {
          for (const { name, fn } of examples) {
            try {
              await fn();
            } catch (e) {
              console.error(`\nError in ${name}: ${e}`);
            }
          }
        } else if (/^\d+$/.test(choice)) {
          const idx = parseInt(choice) - 1;
          if (idx >= 0 && idx < examples.length) {
            await examples[idx].fn();
          } else {
            console.log("Invalid choice. Running basic text-to-speech example...");
            await textToSpeechBasic();
          }
        } else {
          console.log("Invalid choice. Running basic text-to-speech example...");
          await textToSpeechBasic();
        }
      } catch (e) {
        console.error(`\nError: ${e}`);
      }
    }
  );
}

if (require.main === module) {
  main();
}
