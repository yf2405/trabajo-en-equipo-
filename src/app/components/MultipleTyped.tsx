"use client";

import React, { useEffect, useState } from 'react';

const words = ['Hola!', 'Bienvenido a mi sitio web', 'React es increíble!', 'Programación es divertida!'];

const MultipleTypedManual = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentWord = words[currentWordIndex];

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <h1>
        HOLA MUNDO
      {displayedText}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default MultipleTypedManual;