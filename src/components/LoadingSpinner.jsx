// LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader">Loading...</div>
      <style jsx>{`
        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
        }
        .loader {
          color: #000;
          font-size: 11px;
          text-indent: -9999em;
          margin: 55px auto;
          position: relative;
          width: 10em;
          height: 10em;
          box-shadow: inset 0 0 0 1em;
          transform: translateZ(0);
        }
        .loader:before,
        .loader:after {
          position: absolute;
          content: "";
        }
        .loader:before {
          width: 5.2em;
          height: 10.2em;
          background: #fff;
          border-radius: 10.2em 0 0 10.2em;
          top: -0.1em;
          left: -0.1em;
          transform-origin: 5.2em 5.1em;
          animation: load2 2s infinite ease 1.5s;
        }
        .loader:after {
          width: 5.2em;
          height: 10.2em;
          background: #fff;
          border-radius: 0 10.2em 10.2em 0;
          top: -0.1em;
          left: 5.1em;
          transform-origin: 0px 5.1em;
          animation: load2 2s infinite ease;
        }
        @keyframes load2 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;