const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <defs>
      <style>
        {`
          .typewriter-container {
            overflow: hidden;
          }
          
          .letter-a {
            animation: typeA 4s infinite;
            opacity: 0;
            transform: translateX(-8px);
          }
          
          .letter-b {
            animation: typeB 4s infinite;
            opacity: 0;
            transform: translateX(-8px);
          }
          
          .cursor {
            animation: typeCursor 4s infinite;
            opacity: 0;
          }
          
          @keyframes typeA {
            0%, 10% { opacity: 0; transform: translateX(-8px); }
            15%, 70% { opacity: 1; transform: translateX(0); }
            75%, 100% { opacity: 0; transform: translateX(-8px); }
          }
          
          @keyframes typeB {
            0%, 25% { opacity: 0; transform: translateX(-8px); }
            30%, 70% { opacity: 1; transform: translateX(0); }
            75%, 100% { opacity: 0; transform: translateX(-8px); }
          }
          
          @keyframes typeCursor {
            0%, 15% { opacity: 1; }
            16%, 29% { opacity: 0; }
            30%, 70% { opacity: 1; }
            71%, 74% { opacity: 0; }
            75%, 100% { opacity: 1; }
          }
        `}
      </style>
    </defs>

    <g className="typewriter-container" transform="translate(8, 20)">
      {/* Letter A - larger and better positioned */}
      <g className="letter-a">
        <path
          d="M8,10 L20,10 L34,60 L26,60 L23.5,50 L4.5,50 L2,60 L-6,60 L8,10 Z M7,42 L21,42 L14,22 L7,42 Z"
          fill="currentColor"
        />
      </g>

      {/* Letter B - fixed curve alignment */}
      <g className="letter-b">
        <path
          d="M38,10 L38,60 L58,60 C66,60 72,55 72,48 C72,44 69,41 65,40 C68,38 70,34 70,29 C70,22 66,10 56,10 L38,10 Z M46,18 L54,18 C58,18 60,20 60,24 C60,28 58,30 54,30 L46,30 L46,18 Z M46,38 L56,38 C60,38 62,40 62,44 C62,48 60,52 56,52 L46,52 L46,38 Z"
          fill="currentColor"
        />
      </g>

      {/* Typing cursor */}
      <g className="cursor">
        <rect x="76" y="35" width="3" height="20" fill="currentColor" rx="1" />
      </g>
    </g>
  </svg>
);

export default IconLogo;
