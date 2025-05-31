import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <defs>
      <style>
        {`
          .loader-typewriter {
            overflow: hidden;
          }
          
          .loader-letter-a {
            animation: loaderTypeA 3s infinite;
            opacity: 0;
            transform: translateX(-8px);
          }
          
          .loader-letter-b {
            animation: loaderTypeB 3s infinite;
            opacity: 0;
            transform: translateX(-8px);
          }
          
          .loader-cursor {
            animation: loaderTypeCursor 3s infinite;
            opacity: 0;
          }
          
          @keyframes loaderTypeA {
            0%, 15% { opacity: 0; transform: translateX(-8px); }
            20%, 75% { opacity: 1; transform: translateX(0); }
            80%, 100% { opacity: 0; transform: translateX(-8px); }
          }
          
          @keyframes loaderTypeB {
            0%, 30% { opacity: 0; transform: translateX(-8px); }
            35%, 75% { opacity: 1; transform: translateX(0); }
            80%, 100% { opacity: 0; transform: translateX(-8px); }
          }
          
          @keyframes loaderTypeCursor {
            0%, 20% { opacity: 1; }
            21%, 34% { opacity: 0; }
            35%, 75% { opacity: 1; }
            76%, 79% { opacity: 0; }
            80%, 100% { opacity: 1; }
          }
        `}
      </style>
    </defs>

    <g className="loader-typewriter" transform="translate(8, 25)">
      {/* Letter A - larger and cleaner */}
      <g className="loader-letter-a">
        <path
          d="M8,5 L18,5 L30,50 L24,50 L22,42 L6,42 L4,50 L-2,50 L8,5 Z M8,35 L20,35 L14,18 L8,35 Z"
          fill="currentColor"
        />
      </g>

      {/* Letter B - fixed curve alignment */}
      <g className="loader-letter-b">
        <path
          d="M34,5 L34,50 L50,50 C56,50 60,46 60,41 C60,38 58,36 55,35 C57,34 59,31 59,27 C59,22 56,5 47,5 L34,5 Z M40,11 L46,11 C49,11 50,12 50,16 C50,19 49,21 46,21 L40,21 L40,11 Z M40,27 L48,27 C51,27 52,29 52,32 C52,35 51,39 48,39 L40,39 L40,27 Z"
          fill="currentColor"
        />
      </g>

      {/* Typing cursor */}
      <g className="loader-cursor">
        <rect x="64" y="30" width="2.5" height="16" fill="currentColor" rx="1" />
      </g>
    </g>
  </svg>
);

export default IconLoader;
