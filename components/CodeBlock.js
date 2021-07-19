import React from 'react';
import { nanoid } from 'nanoid';

export const CopyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    shapeRendering="geometricPrecision"
  >
    <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" />
  </svg>
);

export const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    shapeRendering="geometricPrecision"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Code = ({ children }) => {
  const textRef = React.useRef(null);
  const copyFunction = () => {
    setCopy(true);
    navigator.clipboard.writeText(textRef.current.textContent);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  const [copy, setCopy] = React.useState(false);
  return (
    <div className="relative">
      <button
        className="absolute right-2"
        aria-label="Copy to Clipboard"
        onClick={() => copyFunction()}
        type="button"
      >
        {copy ? <CheckIcon /> : <CopyIcon />}
      </button>
      <div ref={textRef}>{children}</div>
    </div>
  );
};

export default Code;
