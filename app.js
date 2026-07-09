const patterns = [
  {
    title: "I was wondering if...",
    short: "礼貌询问",
    pronunciation: "/aɪ wəz ˈwʌndərɪŋ ɪf/",
    meaning: "我想知道是否……；不直接冒犯地提出请求或问题。",
    usage: "适合请求帮忙、约时间、询问信息，比 Can you...? 更委婉。",
    examples: [
      {
        zh: "我想知道你明天是否有空。",
        answer: "I was wondering if you are free tomorrow."
      },
      {
        zh: "我想知道你是否能帮我看一下这个邮件。",
        answer: "I was wondering if you could take a look at this email."
      },
      {
        zh: "我想知道我们是否可以把会议改到周五。",
        answer: "I was wondering if we could move the meeting to Friday."
      },
      {
        zh: "我想知道你是否知道附近有好吃的餐厅。",
        answer: "I was wondering if you know any good restaurants nearby."
      },
      {
        zh: "我想知道我是否可以问你一个问题。",
        answer: "I was wondering if I could ask you a question."
      }
    ]
  },
  {
    title: "Would you mind...?",
    short: "礼貌请求",
    pronunciation: "/wʊd juː maɪnd/",
    meaning: "你介意……吗？用来提出礼貌请求。",
    usage: "后面常接动名词；回答 No, not at all 表示不介意。",
    examples: [
      {
        zh: "你介意把窗户打开吗？",
        answer: "Would you mind opening the window?"
      },
      {
        zh: "你介意帮我拍张照片吗？",
        answer: "Would you mind taking a photo for me?"
      },
      {
        zh: "你介意把音乐声音调小一点吗？",
        answer: "Would you mind turning the music down a little?"
      },
      {
        zh: "你介意等我五分钟吗？",
        answer: "Would you mind waiting for me for five minutes?"
      },
      {
        zh: "你介意再解释一遍吗？",
        answer: "Would you mind explaining it one more time?"
      }
    ]
  },
  {
    title: "I'm looking forward to...",
    short: "期待某事",
    pronunciation: "/aɪm ˈlʊkɪŋ ˈfɔːrwərd tuː/",
    meaning: "我很期待……",
    usage: "to 是介词，后面接名词或动名词，比如 meeting you。",
    examples: [
      {
        zh: "我很期待见到你。",
        answer: "I'm looking forward to meeting you."
      },
      {
        zh: "我很期待我们的旅行。",
        answer: "I'm looking forward to our trip."
      },
      {
        zh: "我很期待听到你的想法。",
        answer: "I'm looking forward to hearing your ideas."
      },
      {
        zh: "我很期待下周开始新工作。",
        answer: "I'm looking forward to starting my new job next week."
      },
      {
        zh: "我很期待和团队一起合作。",
        answer: "I'm looking forward to working with the team."
      }
    ]
  },
  {
    title: "It depends on...",
    short: "取决于",
    pronunciation: "/ɪt dɪˈpendz ɑːn/",
    meaning: "这取决于……",
    usage: "用来表达结果不确定，需要看某个条件。",
    examples: [
      {
        zh: "这取决于天气。",
        answer: "It depends on the weather."
      },
      {
        zh: "这取决于我们什么时候完成工作。",
        answer: "It depends on when we finish the work."
      },
      {
        zh: "这取决于你的预算。",
        answer: "It depends on your budget."
      },
      {
        zh: "这取决于他是否有时间。",
        answer: "It depends on whether he has time."
      },
      {
        zh: "这取决于你想学多快。",
        answer: "It depends on how fast you want to learn."
      }
    ]
  },
  {
    title: "What do you think about...?",
    short: "询问看法",
    pronunciation: "/wʌt duː juː θɪŋk əˈbaʊt/",
    meaning: "你觉得……怎么样？你对……怎么看？",
    usage: "适合开启讨论，比直接问 Do you like...? 更开放。",
    examples: [
      {
        zh: "你觉得这个计划怎么样？",
        answer: "What do you think about this plan?"
      },
      {
        zh: "你对远程工作怎么看？",
        answer: "What do you think about working from home?"
      },
      {
        zh: "你觉得这家餐厅怎么样？",
        answer: "What do you think about this restaurant?"
      },
      {
        zh: "你对我的想法怎么看？",
        answer: "What do you think about my idea?"
      },
      {
        zh: "你觉得周末去爬山怎么样？",
        answer: "What do you think about going hiking this weekend?"
      }
    ]
  },
  {
    title: "I'm not sure if...",
    short: "不确定",
    pronunciation: "/aɪm nɑːt ʃʊr ɪf/",
    meaning: "我不确定是否……",
    usage: "表达谨慎、不确定或需要确认的态度。",
    examples: [
      {
        zh: "我不确定这是不是正确答案。",
        answer: "I'm not sure if this is the right answer."
      },
      {
        zh: "我不确定他今天会不会来。",
        answer: "I'm not sure if he will come today."
      },
      {
        zh: "我不确定我们是否有足够时间。",
        answer: "I'm not sure if we have enough time."
      },
      {
        zh: "我不确定这个尺寸是否合适。",
        answer: "I'm not sure if this size is right."
      },
      {
        zh: "我不确定我是否理解你的意思。",
        answer: "I'm not sure if I understand what you mean."
      }
    ]
  }
];

const state = {
  patternIndex: 0,
  exampleIndex: 0,
  recognition: null,
  listening: false,
  voices: [],
  preferredVoice: null,
  heardSpeech: false
};

const els = {
  patternCount: document.querySelector("#pattern-count"),
  patternTabs: document.querySelector("#pattern-tabs"),
  patternTitle: document.querySelector("#pattern-title"),
  patternPronunciation: document.querySelector("#pattern-pronunciation"),
  patternMeaning: document.querySelector("#pattern-meaning"),
  patternUsage: document.querySelector("#pattern-usage"),
  speakPattern: document.querySelector("#speak-pattern"),
  promptTitle: document.querySelector("#prompt-title"),
  exampleIndex: document.querySelector("#example-index"),
  exampleTotal: document.querySelector("#example-total"),
  chinesePrompt: document.querySelector("#chinese-prompt"),
  transcript: document.querySelector("#transcript"),
  recordButton: document.querySelector("#record-button"),
  recordLabel: document.querySelector("#record-label"),
  feedback: document.querySelector("#feedback"),
  answerBox: document.querySelector("#answer-box"),
  answerText: document.querySelector("#answer-text"),
  speakAnswer: document.querySelector("#speak-answer"),
  prevExample: document.querySelector("#prev-example"),
  nextExample: document.querySelector("#next-example"),
  showAnswer: document.querySelector("#show-answer")
};

function getPattern() {
  return patterns[state.patternIndex];
}

function getExample() {
  return getPattern().examples[state.exampleIndex];
}

function choosePreferredVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  state.voices = window.speechSynthesis.getVoices();
  const englishVoices = state.voices.filter(voice => /^en[-_]/i.test(voice.lang));
  const preferredNames = [
    "Samantha",
    "Jenny",
    "Aria",
    "Zira",
    "Google US English",
    "Google UK English Female",
    "Microsoft Jenny",
    "Microsoft Aria",
    "Victoria",
    "Karen"
  ];

  state.preferredVoice =
    preferredNames
      .map(name => englishVoices.find(voice => voice.name.toLowerCase().includes(name.toLowerCase())))
      .find(Boolean) ||
    englishVoices.find(voice => /female|woman|natural|premium/i.test(voice.name)) ||
    englishVoices.find(voice => /en-US/i.test(voice.lang)) ||
    englishVoices[0] ||
    null;

  return state.preferredVoice;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    setFeedback("当前浏览器不支持朗读。", "try");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = state.preferredVoice || choosePreferredVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-US";
  }
  utterance.rate = 0.9;
  utterance.pitch = 1.08;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasPattern(transcript, patternTitle) {
  const heard = normalize(transcript);
  const stem = normalize(patternTitle.replace("...", ""));
  return heard.includes(stem);
}

function setFeedback(message, type = "idle") {
  els.feedback.className = `feedback feedback--${type}`;
  els.feedback.textContent = message;
}

function showAnswer(autoSpeak = false) {
  const example = getExample();
  els.answerText.textContent = example.answer;
  els.answerBox.hidden = false;

  if (autoSpeak) {
    speak(example.answer);
  }
}

function resetPractice() {
  els.transcript.textContent = "等待语音输入";
  els.answerBox.hidden = true;
  if (!state.recognition && els.recordButton.disabled) {
    setFeedback("当前浏览器不支持语音识别，可使用 Chrome 或 Edge。", "try");
    return;
  }
  setFeedback("说完后会显示识别结果和参考答案。");
}

function renderTabs() {
  els.patternTabs.innerHTML = "";
  patterns.forEach((pattern, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pattern-tab";
    button.setAttribute("aria-selected", index === state.patternIndex ? "true" : "false");
    button.innerHTML = `<strong>${pattern.title}</strong><small>${pattern.short}</small>`;
    button.addEventListener("click", () => {
      state.patternIndex = index;
      state.exampleIndex = 0;
      render();
      speak(pattern.title.replace("...", ""));
    });
    els.patternTabs.append(button);
  });
}

function render() {
  const pattern = getPattern();
  const example = getExample();

  els.patternCount.textContent = patterns.length;
  els.patternTitle.textContent = pattern.title;
  els.patternPronunciation.textContent = pattern.pronunciation;
  els.patternMeaning.textContent = pattern.meaning;
  els.patternUsage.textContent = pattern.usage;
  els.promptTitle.textContent = pattern.short;
  els.exampleIndex.textContent = state.exampleIndex + 1;
  els.exampleTotal.textContent = pattern.examples.length;
  els.chinesePrompt.textContent = example.zh;
  els.prevExample.disabled = state.exampleIndex === 0;
  els.nextExample.textContent =
    state.exampleIndex === pattern.examples.length - 1 ? "下个句型" : "下一句";

  renderTabs();
  resetPractice();
}

function setupSpeechRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    els.recordButton.disabled = true;
    els.recordLabel.textContent = "不可用";
    setFeedback("当前浏览器不支持语音识别，可使用 Chrome 或 Edge。", "try");
    return;
  }

  const recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    state.listening = true;
    state.heardSpeech = false;
    els.recordButton.classList.add("is-recording");
    els.recordLabel.textContent = "正在听";
    els.transcript.textContent = "Listening...";
    setFeedback("正在听。请允许麦克风权限，并用英文说完整句。", "idle");
  };

  recognition.onresult = event => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join("");
    els.transcript.textContent = transcript;
    state.heardSpeech = transcript.trim().length > 0;

    const last = event.results[event.results.length - 1];
    if (last.isFinal) {
      const ok = hasPattern(transcript, getPattern().title);
      setFeedback(
        ok ? "句型抓住了。听一遍参考答案，再换个说法也可以。" : "再试一次时，把句型开头说清楚。",
        ok ? "good" : "try"
      );
      showAnswer(true);
    }
  };

  recognition.onerror = event => {
    const messages = {
      "not-allowed": "麦克风权限被拒绝了。请在浏览器地址栏里允许麦克风，然后刷新页面。",
      "service-not-allowed": "浏览器阻止了语音识别服务。建议用 Chrome 或 Edge 打开本地预览地址。",
      "no-speech": "没有听到声音。请靠近麦克风，用英文说完整句后再试一次。",
      "audio-capture": "没有检测到可用麦克风。请检查系统输入设备。",
      network: "语音识别服务连接失败。Chrome 的识别服务通常需要联网。",
      aborted: "这次录音已停止，可以再点一次开始说。"
    };
    setFeedback(messages[event.error] || `语音识别没有成功：${event.error}`, "try");
  };

  recognition.onend = () => {
    state.listening = false;
    els.recordButton.classList.remove("is-recording");
    els.recordLabel.textContent = "开始说";
    if (!state.heardSpeech && els.transcript.textContent === "Listening...") {
      els.transcript.textContent = "没有识别到语音";
    }
  };

  state.recognition = recognition;
}

function moveExample(direction) {
  const pattern = getPattern();
  const lastIndex = pattern.examples.length - 1;

  if (direction < 0) {
    state.exampleIndex = Math.max(0, state.exampleIndex - 1);
  } else if (state.exampleIndex < lastIndex) {
    state.exampleIndex += 1;
  } else {
    state.patternIndex = (state.patternIndex + 1) % patterns.length;
    state.exampleIndex = 0;
  }

  render();
}

els.speakPattern.addEventListener("click", () => speak(getPattern().title.replace("...", "")));
els.speakAnswer.addEventListener("click", () => speak(getExample().answer));
els.showAnswer.addEventListener("click", () => showAnswer(true));
els.prevExample.addEventListener("click", () => moveExample(-1));
els.nextExample.addEventListener("click", () => moveExample(1));
els.recordButton.addEventListener("click", () => {
  if (!state.recognition) {
    return;
  }
  if (state.listening) {
    state.recognition.stop();
  } else {
    resetPractice();
    try {
      state.recognition.start();
    } catch (error) {
      setFeedback("语音识别还没有准备好，请等一秒再试。", "try");
    }
  }
});

if ("speechSynthesis" in window) {
  choosePreferredVoice();
  window.speechSynthesis.onvoiceschanged = choosePreferredVoice;
}
setupSpeechRecognition();
render();
