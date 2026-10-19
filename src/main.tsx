import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Landing } from './Landing';
import { Introduction } from './Introduction';
import './index.css';

// Landing page by default; Introduction lives at #/intro; study workspace lives at #/app
function Root() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  if (hash === '#/intro' || hash === '#/introduction') {
    return <Introduction />;
  }

  const isWorkspaceRoute =
    hash === '#/app' || hash === '#/admin' || hash === '#/scanner';

  return isWorkspaceRoute ? <App /> : <Landing />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
