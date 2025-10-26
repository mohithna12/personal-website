import React, { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [specks, setSpecks] = useState<Array<{id: number, left: number, size: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    const newSpecks = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: (i / 50) * 100, // Evenly distribute across the width
      size: Math.random() * 4 + 2,
      duration: Math.random() * 40 + 30, // Slower: 30-70 seconds instead of 10-30
      delay: (i / 50) * 5, // Evenly distribute delays
    }));
    setSpecks(newSpecks);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {specks.map((speck) => (
        <div
          key={speck.id}
          className="animated-speck"
          style={{
            left: `${speck.left}%`,
            width: `${speck.size}px`,
            height: `${speck.size}px`,
            animationDuration: `${speck.duration}s`,
            animationDelay: `${speck.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
