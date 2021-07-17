import './app.sass';
import { Suspense } from 'react';

import Header from './componets/Header/Header';
import Intro from './componets/Intro/Intro';
import DescriptionList  from './componets/DescriptionList/DescriptionList';
import DetailList from './componets/DetailList/DetailList';
import ImageGalary from './componets/ImageGalary/ImageGalary';
import RegistrationTravel from './componets/RegistrationTravel/RegistrationTravel';
import Footer from './componets/Footer/Footer';
import ScrollTop from './componets/ScrollTop/ScrollTop';

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
          <RegistrationTravel />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </Suspense>
  );
}

export default App;
