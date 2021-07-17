import './app.sass';
import { Suspense } from 'react';
import Header from './componets/Header/Header';
import Intro from './componets/Intro/Intro';
import DescriptionList  from './componets/DescriptionList/DescriptionList';
import DetailList from './componets/DetailList/DetailList';
import ImageGalary from './componets/ImageGalary/ImageGalary';

function App() {
  return (
    <Suspense fallback="loading">
      <div className="page-wrapper">
        <Header />
        <main>
          <Intro />
          <DescriptionList />
          <DetailList />
          <ImageGalary />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
