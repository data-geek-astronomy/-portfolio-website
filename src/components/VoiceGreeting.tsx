import { useEffect, useState, useRef } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/VoiceGreeting.css";

const GREETING_TEXT = "Hi, I'm Aravind Kumar. Welcome to my portfolio.";

const VoiceGreeting = () => {
  const { isLoading } = useLoading();
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const playedRef = useRef(false);

  const speak = () => {
    if (playedRef.current) return;
    if (!("speechSynthesis" in window)) return;

    playedRef.current = true;
    setHasPlayed(true);
    setShowPrompt(false);

    const utterance = new SpeechSynthesisUtterance(GREETING_TEXT);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to pick a natural-sounding English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find(v => /en-US/i.test(v.lang) && /male|daniel|alex|fred|google us/i.test(v.name)) ||
      voices.find(v => /en-US/i.test(v.lang)) ||
      voices.find(v => /^en/i.test(v.lang));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Attempt autoplay once loading finishes
  useEffect(() => {
    if (isLoading || hasPlayed) return;

    // Ensure voices are loaded (some browsers load them async)
    const tryAutoplay = () => {
      // Browsers often block speech until a user gesture. We attempt anyway,
      // and if blocked we show a small prompt to tap.
      const timer = setTimeout(() => {
        try {
          speak();
          // If after a moment nothing is speaking, surface the prompt
          setTimeout(() => {
            if (!window.speechSynthesis.speaking && !playedRef.current) {
              setShowPrompt(true);
            } else if (!window.speechSynthesis.speaking) {
              setShowPrompt(true);
            }
          }, 600);
        } catch {
          setShowPrompt(true);
        }
      }, 1200);
      return timer;
    };

    let t: ReturnType<typeof setTimeout>;
    if (window.speechSynthesis.getVoices().length > 0) {
      t = tryAutoplay();
    } else {
      window.speechSynthesis.onvoiceschanged = () => { t = tryAutoplay(); };
    }

    // Fallback: first interaction anywhere triggers the greeting
    const onFirstInteract = () => {
      if (!playedRef.current && !muted) speak();
      window.removeEventListener("click", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
    window.addEventListener("click", onFirstInteract);
    window.addEventListener("keydown", onFirstInteract);

    return () => {
      clearTimeout(t);
      window.removeEventListener("click", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
  }, [isLoading, hasPlayed, muted]);

  const replay = () => {
    playedRef.current = false;
    setHasPlayed(false);
    if (!muted) speak();
  };

  const toggleMute = () => {
    if (!muted) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setMuted(!muted);
  };

  return (
    <>
      {showPrompt && !hasPlayed && (
        <button className="voice-prompt" onClick={speak}>
          <span className="voice-prompt-icon">🔊</span>
          <span>Tap to hear a greeting</span>
        </button>
      )}

      <div className="voice-control">
        <button
          className={`voice-btn ${isSpeaking ? "voice-speaking" : ""}`}
          onClick={isSpeaking ? toggleMute : replay}
          title={isSpeaking ? "Stop" : "Replay greeting"}
        >
          <span className="voice-bars">
            <span className="voice-bar" />
            <span className="voice-bar" />
            <span className="voice-bar" />
            <span className="voice-bar" />
          </span>
        </button>
      </div>
    </>
  );
};

export default VoiceGreeting;
