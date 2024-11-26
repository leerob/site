'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Token {
  text: string;
  attention: number[];
}

interface Step {
  id: number;
  description: string;
  tokens: Token[];
}

const steps: Step[] = [
  {
    id: 1,
    description: 'Input Sequence',
    tokens: [
      { text: 'The', attention: [0, 0, 0] },
      { text: 'cat', attention: [0, 0, 0] },
      { text: 'sat', attention: [0, 0, 0] },
      { text: 'on', attention: [0, 0, 0] },
      { text: 'the', attention: [0, 0, 0] },
      { text: 'mat', attention: [0, 0, 0] },
      { text: 'because', attention: [0, 0, 0] },
      { text: 'it', attention: [0, 0, 0] },
      { text: 'was', attention: [0, 0, 0] },
      { text: 'tired', attention: [0, 0, 0] },
    ],
  },
  {
    id: 2,
    description: 'Self-Attention for "mat"',
    tokens: [
      { text: 'The', attention: [0, 0.05, 0] },
      { text: 'cat', attention: [0, 0.1, 0] },
      { text: 'sat', attention: [0, 0.15, 0] },
      { text: 'on', attention: [0, 0.2, 0] },
      { text: 'the', attention: [0, 0.1, 0] },
      { text: 'mat', attention: [0, 0.4, 0] },
      { text: 'because', attention: [0, 0, 0] },
      { text: 'it', attention: [0, 0, 0] },
      { text: 'was', attention: [0, 0, 0] },
      { text: 'tired', attention: [0, 0, 0] },
    ],
  },
  {
    id: 3,
    description: 'Self-Attention for "it"',
    tokens: [
      { text: 'The', attention: [0, 0, 0.05] },
      { text: 'cat', attention: [0, 0, 0.2] },
      { text: 'sat', attention: [0, 0, 0.1] },
      { text: 'on', attention: [0, 0, 0.05] },
      { text: 'the', attention: [0, 0, 0.05] },
      { text: 'mat', attention: [0, 0, 0.15] },
      { text: 'because', attention: [0, 0, 0.1] },
      { text: 'it', attention: [0, 0, 0.3] },
      { text: 'was', attention: [0, 0, 0] },
      { text: 'tired', attention: [0, 0, 0] },
    ],
  },
];

export function SelfAttention() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [speed, setSpeed] = React.useState(1);

  React.useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === steps.length) {
          return 1;
        }
        return prev + 1;
      });
    }, 4000 / speed);

    return () => clearInterval(timer);
  }, [isPlaying, speed]);

  const renderStep = () => {
    const step = steps[currentStep - 1];

    return (
      <motion.div
        key={step.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full"
      >
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {step.tokens.map((token, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`text-lg md:text-base font-mono mb-2 border-2 rounded p-1 ${
                  token.attention[currentStep - 1] > 0
                    ? 'border-blue-600'
                    : 'border-gray-300'
                }`}
                style={{
                  backgroundColor: `rgba(59, 130, 246, ${Math.pow(token.attention[currentStep - 1], 0.5)})`,
                }}
              >
                {token.text}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: `${Math.max(10, token.attention[currentStep - 1] * 100)}px`,
                }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className="w-1 bg-blue-600"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.15 }}
                className="text-xs text-gray-600 mt-1"
              >
                {token.attention[currentStep - 1].toFixed(2)}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-[80ch] mx-auto p-4 sm:p-8 relative bg-white border border-gray-200 rounded-md">
      <div className="flex flex-col items-center space-y-12">
        <div className="h-[250px] flex items-center justify-center scale-75 sm:scale-100">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-4 mb-58 sm:mb-0 sm:bottom-4 left-4">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-sm text-gray-600"
        >
          {steps[currentStep - 1].description}
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-1">
        <button
          className="p-[2px] rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          )}
        </button>
        {[0.5, 1, 1.5, 2].map((s) => (
          <button
            key={`speed-${s}`}
            className={`px-2 py-1 text-xs rounded ${
              speed === s
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            } hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onClick={() => setSpeed(s)}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
