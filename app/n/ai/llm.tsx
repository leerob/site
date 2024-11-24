'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const networkStructure = {
  inputNodes: ['San', 'Francisco', 'is', 'a'],
  hiddenLayers: [
    Array(4).fill('hidden1'),
    Array(4).fill('hidden2'),
    Array(4).fill('hidden3'),
  ],
  outputNode: 'city',
};

const nodePositions = {
  xGap: 100,
  yGap: 30,
  radius: 12,
  startX: 60,
};

export function LLM() {
  const [activeConnections, setActiveConnections] = React.useState<string[]>(
    []
  );
  const [activeNodes, setActiveNodes] = React.useState<string[]>([]);
  const [confidence, setConfidence] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [sentence, setSentence] = React.useState<string[]>([]);
  const [speed, setSpeed] = React.useState(1);
  const [predictedWord, setPredictedWord] = React.useState('');
  const [showOutput, setShowOutput] = React.useState(false);

  React.useEffect(() => {
    if (!isPlaying) return;

    let step = 0;
    const totalSteps = 5; // Number of animation phases

    const timer = setInterval(
      () => {
        step = (step + 1) % totalSteps;

        // Reset animation when reaching the end
        if (step === 0) {
          setActiveConnections([]);
          setActiveNodes([]);
          setConfidence(0);
          setShowOutput(false);

          // Move to next word
          const newCurrentWordIndex = currentWordIndex + 1;

          if (newCurrentWordIndex >= networkStructure.inputNodes.length) {
            setCurrentWordIndex(0);
            setSentence([]);
          } else {
            setCurrentWordIndex(newCurrentWordIndex);
          }

          return;
        }

        // Animate through the network
        const newActiveNodes = [];
        // @ts-ignore
        const newActiveConnections = [];

        // Add input node
        if (step >= 1) {
          newActiveNodes.push(
            `input-${networkStructure.inputNodes[currentWordIndex]}`
          );
        }

        // Add hidden layer 1 nodes and connections
        if (step >= 2) {
          networkStructure.hiddenLayers[0].forEach((_, i) => {
            newActiveNodes.push(`hidden1-${i}`);
            newActiveConnections.push(`input-hidden1-${i}`);
          });
        }

        // Add hidden layer 2 nodes and connections
        if (step >= 3) {
          networkStructure.hiddenLayers[1].forEach((_, i) => {
            newActiveNodes.push(`hidden2-${i}`);
            newActiveConnections.push(`hidden1-hidden2-${i}`);
          });
        }

        // Add hidden layer 3 nodes and connections
        if (step >= 4) {
          networkStructure.hiddenLayers[2].forEach((_, i) => {
            newActiveNodes.push(`hidden3-${i}`);
            newActiveConnections.push(`hidden2-hidden3-${i}`);
          });
          newActiveNodes.push('output');
          newActiveConnections.push('hidden3-output');
          setConfidence(95 - currentWordIndex * 5);
          setSentence((prev) => {
            const newSentence = [
              ...prev,
              networkStructure.inputNodes[currentWordIndex],
            ];
            return newSentence.length > 4 ? newSentence.slice(-4) : newSentence;
          });
          setShowOutput(true);

          // Set the predictedWord here
          if (currentWordIndex + 1 < networkStructure.inputNodes.length) {
            setPredictedWord(networkStructure.inputNodes[currentWordIndex + 1]);
          } else {
            setPredictedWord(''); // End of sentence
          }
        }

        setActiveNodes(newActiveNodes);
        setActiveConnections((prevConnections) => {
          // @ts-ignore
          const newConnections = [...prevConnections, ...newActiveConnections];
          return Array.from(new Set(newConnections));
        });
      },
      (step === 4 ? 1500 : 1000) / speed
    );

    return () => clearInterval(timer);
  }, [isPlaying, currentWordIndex, speed]);

  const renderNetwork = () => {
    const canvasWidth = 650;
    const canvasHeight = 200;
    const centerY = canvasHeight / 2;
    const scale = 0.9;

    return (
      <svg
        width={canvasWidth}
        height={canvasHeight}
        viewBox={`0 0 580 ${canvasHeight}`}
      >
        <g
          transform={`scale(${scale}) translate(${
            ((1 - scale) * canvasWidth) / 2 / scale
          }, ${((1 - scale) * canvasHeight) / 2 / scale})`}
        >
          {/* Render all connections first */}
          {networkStructure.hiddenLayers[0].map((_, hiddenIdx) => {
            const connectionId = `input-hidden1-${hiddenIdx}`;
            return (
              <motion.line
                key={`input-h1-${hiddenIdx}`}
                x1={nodePositions.startX}
                y1={centerY}
                x2={nodePositions.startX + nodePositions.xGap}
                y2={hiddenIdx * nodePositions.yGap + 40}
                stroke={
                  activeConnections.includes(connectionId)
                    ? 'rgb(37, 99, 235)'
                    : '#ddd'
                }
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: activeConnections.includes(connectionId) ? 1 : 0,
                }}
                transition={{ duration: 0.5 / speed }}
              />
            );
          })}

          {/* Connections between hidden layers */}
          {networkStructure.hiddenLayers.slice(0, -1).map((layer, layerIdx) => {
            return layer.map((_, nodeIdx) => {
              return networkStructure.hiddenLayers[layerIdx + 1].map(
                (_, nextNodeIdx) => {
                  const connectionId = `hidden${layerIdx + 1}-hidden${layerIdx + 2}-${nextNodeIdx}`;
                  return (
                    <motion.line
                      key={`h${layerIdx + 1}-h${layerIdx + 2}-${nodeIdx}-${nextNodeIdx}`}
                      x1={
                        nodePositions.startX +
                        nodePositions.xGap * (layerIdx + 1)
                      }
                      y1={nodeIdx * nodePositions.yGap + 40}
                      x2={
                        nodePositions.startX +
                        nodePositions.xGap * (layerIdx + 2)
                      }
                      y2={nextNodeIdx * nodePositions.yGap + 40}
                      stroke={
                        activeConnections.includes(connectionId)
                          ? 'rgb(37, 99, 235)'
                          : '#ddd'
                      }
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{
                        pathLength: activeConnections.includes(connectionId)
                          ? 1
                          : 0,
                      }}
                      transition={{ duration: 0.5 / speed }}
                    />
                  );
                }
              );
            });
          })}

          {/* Connections to output node */}
          {networkStructure.hiddenLayers[2].map((_, hiddenIdx) => {
            const connectionId = 'hidden3-output';
            return (
              <motion.line
                key={`h3-output-${hiddenIdx}`}
                x1={nodePositions.startX + nodePositions.xGap * 3}
                y1={hiddenIdx * nodePositions.yGap + 40}
                x2={nodePositions.startX + nodePositions.xGap * 4}
                y2={centerY}
                stroke={
                  activeConnections.includes(connectionId)
                    ? 'rgb(37, 99, 235)'
                    : '#ddd'
                }
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: activeConnections.includes(connectionId) ? 1 : 0,
                }}
                transition={{ duration: 0.5 / speed }}
              />
            );
          })}

          {/* Input Node */}
          <AnimatePresence mode="wait">
            <motion.g
              key={networkStructure.inputNodes[currentWordIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.circle
                cx={nodePositions.startX}
                cy={centerY}
                r={nodePositions.radius}
                fill={
                  activeNodes.includes(
                    `input-${networkStructure.inputNodes[currentWordIndex]}`
                  )
                    ? 'rgb(251, 146, 60)'
                    : '#fcd34d'
                }
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <motion.text
                x={nodePositions.startX - 20}
                y={centerY}
                className="text-sm font-medium"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {networkStructure.inputNodes[currentWordIndex]}
              </motion.text>
            </motion.g>
          </AnimatePresence>

          {/* Hidden Layer Nodes */}
          {networkStructure.hiddenLayers.map((layer, layerIdx) => {
            return layer.map((_, nodeIdx) => {
              const nodeId = `hidden${layerIdx + 1}-${nodeIdx}`;
              return (
                <motion.circle
                  key={nodeId}
                  cx={
                    nodePositions.startX + nodePositions.xGap * (layerIdx + 1)
                  }
                  cy={nodeIdx * nodePositions.yGap + 40}
                  r={nodePositions.radius}
                  fill={
                    activeNodes.includes(nodeId)
                      ? 'rgb(37, 99, 235)'
                      : '#93c5fd'
                  }
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              );
            });
          })}

          {/* Output Node */}
          <g>
            <motion.circle
              cx={nodePositions.startX + nodePositions.xGap * 4}
              cy={centerY}
              r={nodePositions.radius}
              fill={
                activeNodes.includes('output') ? 'rgb(30, 58, 138)' : '#93c5fd'
              }
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <AnimatePresence>
              {showOutput && (
                <motion.text
                  key={predictedWord}
                  x={nodePositions.startX + nodePositions.xGap * 4 + 35}
                  y={centerY}
                  className="text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {predictedWord ? `${predictedWord} (${confidence}%)` : ''}
                </motion.text>
              )}
            </AnimatePresence>
          </g>
        </g>
      </svg>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 relative bg-white border border-gray-200 rounded-md">
      <div className="flex flex-col items-center space-y-4">
        <div className="scale-90 h-[250px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">{renderNetwork()}</AnimatePresence>
        </div>
        <div className="text-sm text-gray-600 self-start">
          Output: {sentence.length > 0 ? sentence.join(' ') : ''}
        </div>
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
            key={s}
            className={`px-2 py-1 text-xs rounded ${speed === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
            onClick={() => setSpeed(s)}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
