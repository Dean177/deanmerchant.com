import React from 'react';

export function Email(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068A1.485 1.485 0 011.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
    </svg>
  );
}

export function GitHub(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
  );
}

export function Twitter(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#1da1f2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
    </svg>
  );
}

export function Insta(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <linearGradient
        id="a"
        x1="43"
        x2="469"
        y1="469"
        y2="43"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffd600"></stop>
        <stop offset="0.5" stopColor="#ff0100"></stop>
        <stop offset="1" stopColor="#d800b9"></stop>
      </linearGradient>
      <linearGradient
        id="b"
        x1="163"
        x2="349"
        y1="349"
        y2="163"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6400"></stop>
        <stop offset="0.5" stopColor="#ff0100"></stop>
        <stop offset="1" stopColor="#fd0056"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="370.9"
        x2="414.4"
        y1="141.1"
        y2="97.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f30072"></stop>
        <stop offset="1" stopColor="#e50097"></stop>
      </linearGradient>
      <path
        fill="url(#a)"
        d="M510 150c-1-27-5-45-11-62-7-17-17-32-30-45s-28-23-45-30c-17-6-35-10-62-11-28-2-36-2-106-2s-78 0-106 2c-27 1-45 5-62 11-17 7-32 17-45 30S20 71 13 88c-6 17-10 35-11 62-2 28-2 36-2 106s0 78 2 106c1 27 5 45 11 62 7 17 17 32 30 45s28 23 45 30c17 6 35 10 62 11 28 2 36 2 106 2s78 0 106-2c27-1 45-5 62-11 34-14 61-41 75-75 6-17 10-35 11-62 2-28 2-36 2-106s0-78-2-106zm-46 209c-1 25-5 39-8 48-9 22-27 40-49 49-9 3-23 7-48 8-27 2-35 2-103 2s-76 0-103-2c-25-1-39-5-48-8-11-5-21-11-29-20-9-8-15-18-20-29-3-9-7-23-8-48-2-27-2-35-2-103s0-76 2-103c1-25 5-39 8-48 5-11 11-21 20-29 8-9 18-15 29-20 9-3 23-7 48-8 27-2 35-2 103-2s76 0 103 2c25 1 39 5 48 8 11 5 21 11 29 20 9 8 15 18 20 29 3 9 7 23 8 48 2 27 2 35 2 103s0 76-2 103zm0 0"
      ></path>
      <path
        fill="url(#b)"
        d="M256 125a131 131 0 100 262 131 131 0 000-262zm0 216a85 85 0 110-170 85 85 0 010 170zm0 0"
      ></path>
      <path
        fill="url(#c)"
        d="M423 119a31 31 0 11-61 0 31 31 0 0161 0zm0 0"
      ></path>
    </svg>
  );
}