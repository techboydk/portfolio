import React, { useState, useEffect } from "react";

const Typewriter = ({ texts }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum];
      setText(currentText.substring(0, text.length + 1));
      setTypingSpeed(150);
    };

    const handleDeleting = () => {
      const currentText = texts[loopNum];
      setText(currentText.substring(0, text.length - 1));
      setTypingSpeed(75);
    };

    const timer = setTimeout(() => {
      if (text === texts[loopNum] && !isDeleting) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (text === "" && isDeleting) {
        setIsDeleting(false);
        setLoopNum((loopNum + 1) % texts.length);
      }
      if (!isDeleting && text !== texts[loopNum]) {
        handleTyping();
      } else if (isDeleting && text !== "") {
        handleDeleting();
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, texts]);

  return <>{text}</>;
};

export default Typewriter;
