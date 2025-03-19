import React, { useState, useEffect } from "react";

const words = ["Graphic design.", "Meta Ads.", "Website development."];

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 100);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }
    }

    setDisplayText(currentWord.substring(0, charIndex));
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <p>
      We handle <span className="highlight">{displayText}</span>|
    </p>
  );
};

export default TypingEffect;
