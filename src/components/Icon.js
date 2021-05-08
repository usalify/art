import React from 'react';
import variables from '../variables';

export default function Icon({ negative }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M152.6 87.9l-110.3 22V129l110.3 18.7V87.9zm317-63.4L360.9 46.3v136.8l108.7 18.5V24.5z"
        fill={variables.accent}
      />
      <path
        d="M360.9 238.2V286c0 38.9-8.5 67.3-25.4 85.4-16.9 18.1-43.2 27.2-78.7 27.2-35.4 0-61.6-9.1-78.7-27.2-17-18.1-25.6-46.6-25.6-85.4v-83.1L42.3 184.2v91.7c0 70.8 17.2 123.7 51.6 158.8 34.4 35.2 88.7 52.8 162.9 52.8 73.3 0 127.2-17.6 161.5-52.9 34.3-35.2 51.5-88.1 51.5-158.7v-19.3l-108.9-18.4z"
        fill={negative ? variables.light : variables.dark}
      />
    </svg>
  );
}
