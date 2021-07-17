import './app.sass';
import { Suspense } from 'react';
import Header from './componets/Header/Header';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="page-wrapper">
        <Header />
      </div>
    </Suspense>
  );
}

export default App;
