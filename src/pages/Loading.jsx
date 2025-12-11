import React, { useState, useEffect } from "react";
import { Flex, Progress, Typography } from "antd";
import { color, transform } from "motion";

const Loading = () => {
  
  const styles = {
    color: "red",
    transform: "scale(4)",
  };

  const conicColors = {
    '0%': '#a855f7',    // purple-500
    '50%': '#c026d3',   // fuchsia-600
    '100%': '#e879f9',  // fuchsia-400
  };

  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (loading < 100) {
      const timer = setTimeout(() => setLoading(loading + 5), 100); // smooth increment
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap={24}
      style={{
        width: "100vw",
        height: "100vh",
        textTransform: "capitalize",
        backgroundColor: '#0d0d0d'
      }}
    >
      <Progress
        style={styles}
        percent={loading}
        strokeColor={conicColors}
        type="circle"
        format={(percent) => <span style={{ color: '#e879f9', fontWeight: 'bold' }}>{percent}%</span>}
      />
      <div style={{
        color: '#e879f9',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        AVUSALA CHETAN
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </Flex>
  );
};

export default Loading;
