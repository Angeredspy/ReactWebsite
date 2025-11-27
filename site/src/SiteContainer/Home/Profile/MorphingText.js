import React, { useState, useEffect } from 'react';
import './MorphingText.css';

const MorphingText = ({ texts, speed = 4500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDissolving, setIsDissolving] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);

  useEffect(() => {
    // Start with first text
    setDisplayText(texts[0]);
    
    const interval = setInterval(() => {
      // Start dissolve animation
      setIsDissolving(true);
      
      // Wait for dissolve to complete, then change text
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        const nextText = texts[(currentIndex + 1) % texts.length];
        setDisplayText('');
        setIsDissolving(false);
        setIsBuilding(true);
        
        // Build new text letter by letter
        let letterIndex = 0;
        const buildInterval = setInterval(() => {
          setDisplayText(nextText.substring(0, letterIndex + 1));
          letterIndex++;
          
          if (letterIndex >= nextText.length) {
            clearInterval(buildInterval);
            setIsBuilding(false);
          }
        }, 60);
        
      }, texts[currentIndex].length * 40 + 300);
      
    }, speed);

    return () => clearInterval(interval);
  }, [texts, speed, currentIndex]);

  const renderAnimatedText = () => {
    const words = displayText.split(' ');
    let charIndex = 0;
    
    return words.map((word, wordIndex) => {
      const wordChars = word.split('').map((char, index) => {
        const currentCharIndex = charIndex + index;
        return (
          <span
            key={`${currentIndex}-${currentCharIndex}`}
            className={`morphing-char ${isDissolving ? 'dissolving' : ''} ${isBuilding ? 'building' : ''}`}
            style={{
              animationDelay: isDissolving ? `${currentCharIndex * 40}ms` : `${currentCharIndex * 60}ms`
            }}
          >
            {char}
          </span>
        );
      });
      
      charIndex += word.length + 1; // +1 for the space
      
      return (
        <span key={`word-${wordIndex}`} className="morphing-word">
          {wordChars}
          {wordIndex < words.length - 1 && (
            <span
              key={`${currentIndex}-space-${wordIndex}`}
              className={`morphing-char ${isDissolving ? 'dissolving' : ''} ${isBuilding ? 'building' : ''}`}
              style={{
                animationDelay: isDissolving ? `${(charIndex - 1) * 40}ms` : `${(charIndex - 1) * 60}ms`
              }}
            >
              {'\u00A0'}
            </span>
          )}
        </span>
      );
    });
  };

  return (
    <div className="morphing-container">
      <div className="morphing-text">
        {renderAnimatedText()}
      </div>
    </div>
  );
};

export default MorphingText;