import { Box } from "@mui/material"

export const AnimatedBackground = () => {
  return (
    <Box>
      <svg
        className="BgAnimation__svg"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          d="M0,300 Q150,350 300,300 T600,300 T900,300"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,300 Q150,350 300,300 T600,300 T900,300; 
                    M0,300 Q150,250 300,300 T600,300 T900,300; 
                    M0,300 Q150,350 300,300 T600,300 T900,300"
          />
        </path>
        <path
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="2"
          d="M0,320 Q150,370 300,320 T600,320 T900,320"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,320 Q150,370 300,320 T600,320 T900,320; 
                    M0,320 Q150,270 300,320 T600,320 T900,320; 
                    M0,320 Q150,370 300,320 T600,320 T900,320"
          />
        </path>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ff8a00', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#e52e71', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0abcf9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2c69d1', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};