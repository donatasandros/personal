import type { AVATARS } from "@/config/avatars";

export const DEFAULT_RESPONSES = [
  "That's interesting!",
  "Tell me more about that.",
  "I see what you mean.",
  "Cool! What else is on your mind?",
  "Interesting perspective!",
  "Please elaborate.",
  "That's interesting...",
  "Go on...",
  "Hmm, I'd like to hear more.",
  "That makes sense!",
  "Oh, really?",
  "That’s a good point!",
  "Elaborate on that!",
  "I’d love to hear more!",
  "That’s an interesting take!",
  "Huh, never thought about it that way.",
  "That’s a unique perspective!",
  "Tell me more about your thoughts on this.",
  "I see! What makes you think so?",
  "That’s a great observation!",
  "Hmm, do you have more details?",
  "Oh wow, that’s unexpected!",
  "That’s intriguing!",
  "I didn’t think of it like that!",
  "Good insight!",
  "Very cool!",
  "I like where you're going with this.",
  "Nice thought!",
];

export const AUTO_RESPONSES = [
  {
    keywords: ["hello", "hi", "hey"],
    responses: ["Hello there!", "Hi! How are you?", "Hey! Nice to meet you!"],
  },
  {
    keywords: ["help", "support"],
    responses: ["How can I help you?", "Need assistance with something?"],
  },
  {
    keywords: ["thanks", "thank you"],
    responses: ["You're welcome!", "No problem.", "Anytime!", "Glad to help."],
  },
  {
    keywords: ["windows", "xp"],
    responses: [
      "Windows XP was released in 2001!",
      "I miss the old Windows XP days.",
      "Ah, the good old days!",
      "Running in compatibility mode.",
    ],
  },
  {
    keywords: ["blue screen", "bsod", "crash", "fatal error"],
    responses: [
      "STOP: 0x0000000A (IRQL_NOT_LESS_OR_EQUAL)",
      "A fatal exception 0E has occurred...",
      "System unstable. Rebooting...",
      "Please contact your system administrator.",
      "Error: Stack Overflow.",
      "A problem has been detected and Windows has been shut down...",
      "Please restart your computer.",
    ],
  },
  {
    keywords: ["cool", "awesome", "great", "nice"],
    responses: [
      "Affirmative!",
      "Roger that!",
      "Acknowledged.",
      "That's the spirit!",
      "User feedback received.",
    ],
  },
  {
    keywords: [
      "is it",
      "do you",
      "can you",
      "are you",
      "does it",
      "have you",
      "will it",
      "did you",
    ],
    responses: ["Affirmative.", "Negative.", "Processing...", "Standby..."],
  },
  {
    keywords: ["yes", "yup", "yeah", "okay", "ok"],
    responses: ["Acknowledged.", "Confirmed.", "Roger.", "Understood."],
  },
  {
    keywords: ["no", "nope", "nah", "never"],
    responses: ["Denied.", "Access denied.", "Unsuccessful.", "Error 404."],
  },
];

export const ONLINE_USERS: {
  id: string;
  name: string;
  status: string;
  avatar: (typeof AVATARS)[number];
}[] = [
  {
    id: "dce122a5-ad42-4650-9fd5-908e2811f30f",
    name: "WebMaster99",
    status: "online",
    avatar: "creative",
  },
  {
    id: "f5d96e77-0b04-45b6-90bd-7ec80cfb77a4",
    name: "XxCoolDude2003xX",
    status: "away",
    avatar: "developer",
  },
  {
    id: "7c0dddf0-e5b4-4d57-8d9a-6455317cda3e",
    name: "Dark_Liquid",
    status: "busy",
    avatar: "casual",
  },
  {
    id: "dc15932a-222c-4364-8579-478d91141376",
    name: "System",
    status: "online",
    avatar: "professional",
  },
];

export const INITIAL_MESSAGES = [
  {
    id: "1",
    sender: "System",
    content: "Welcome to Messenger! This is a live chat simulation.",
    timestamp: new Date(),
  },
  {
    id: "2",
    sender: "WebMaster99",
    content:
      "Hey there! Cool portfolio site! What operating system are you using?",
    timestamp: new Date(),
  },
];
