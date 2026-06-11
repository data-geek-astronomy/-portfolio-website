import { useEffect, useState, useRef } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/VoiceGreeting.css";

const VoiceGreeting = () => {
  const { isLoading } = useLoading();
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playedRef = useRef(false);

  // Create the audio element once
  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/greeting.mp3`);
    audio.preload = "auto";
    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
    audio.onpause = () => setIsPlaying(false);
    audio.onerror = () => setIsPlaying(false);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio
      .play()
      .then(() => {
        playedRef.current = true;
        setHasPlayed(true);
        setShowPrompt(false);
      })
      .catch(() => {
        // Autoplay blocked — surface the tap prompt
        if (!playedRef.current) setShowPrompt(true);
      });
  };

  // Attempt autoplay once loading finishes
  useEffect(() => {
    if (isLoading || hasPlayed) return;

    const timer = setTimeout(() => {
      play();
    }, 1000);

    // Fallback: first interaction anywhere triggers the greeting
    const onFirstInteract = () => {
      if (!playedRef.current) play();
      window.removeEventListener("click", onFirstInteract);
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
    window.addEventListener("click", onFirstInteract);
    window.addEventListener("touchstart", onFirstInteract);
    window.addEventListener("keydown", onFirstInteract);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", onFirstInteract);
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
  }, [isLoading, hasPlayed]);

  const handleButtonClick = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      play();
    }
  };

  return (
    <>
      {showPrompt && !hasPlayed && (
        <button className="voice-prompt" onClick={play}>
          <span className="voice-prompt-icon">🔊</span>
          <span>Tap to hear a greeting</span>
        </button>
      )}

      <div className="voice-control">
        <button
          className={`voice-btn ${isPlaying ? "voice-speaking" : ""}`}
          onClick={handleButtonClick}
          title={isPlaying ? "Stop" : "Play greeting"}
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
