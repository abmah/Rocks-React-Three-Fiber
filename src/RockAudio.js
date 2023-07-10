import React, { useEffect, useRef, useState } from 'react';

const RockAudio = ({ playAudio }) => {
  const audioRef = useRef(null);
  const [fadeVolume, setFadeVolume] = useState(0);
  const fadeDuration = 2000; // Fading duration in milliseconds

  useEffect(() => {
    if (playAudio) {
      // Fading up audio
      const interval = setInterval(() => {
        setFadeVolume((prevVolume) => {
          const newVolume = prevVolume + (1 / fadeDuration) * 100;
          if (newVolume >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newVolume;
        });
      }, fadeDuration / 100);

      return () => {
        clearInterval(interval);
      };
    } else {
      // Fading down audio
      const interval = setInterval(() => {
        setFadeVolume((prevVolume) => {
          const newVolume = prevVolume - (1 / fadeDuration) * 100;
          if (newVolume <= 0) {
            clearInterval(interval);
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset audio playback position
            return 0;
          }
          return newVolume;
        });
      }, fadeDuration / 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [playAudio]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = fadeVolume / 100;
      if (playAudio && audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  }, [fadeVolume, playAudio]);

  return (
    <audio ref={audioRef} src="rocks.mp3" preload="auto" />
  );
};

export default RockAudio;
