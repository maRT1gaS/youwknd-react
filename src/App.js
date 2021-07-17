import './app.sass';
import { Suspense } from 'react';
import Header from './componets/Header/Header';
import Intro from './componets/Intro/Intro';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="page-wrapper">
        <Header />
        <main>
          <Intro />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
