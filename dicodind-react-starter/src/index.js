import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from './dicoding_logo.png';
const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential</li>
      <img src={DicodingLogo} alt="Dicoding Logo" />
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
