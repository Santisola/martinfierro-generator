import React from 'react';
import { createRoot } from 'react-dom/client';
import { GeneratorForm } from '../components/GeneratorForm';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GeneratorForm />
  </React.StrictMode>
);
