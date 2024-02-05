import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './shared/scrolltotop/scrolltotop';
import Header from './shared/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import Aboutus from './pages/about-us/about-us';
import Advertise from './pages/advertise/advertise';
import Promotion from './shared/promotion/promotion';
import Dailynews from './pages/daily-news/daily-news';
import Research from './pages/research/research';
import Latestproject from './shared/latest-project/latest-project';
import Ecosystem from './shared/ecosystem/ecosystem';
import Allresearch from './shared/all-research/all-research';
import News from './pages/news/news';
import Article from './pages/article/article';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/advertise" element={<Advertise />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/dailynews" element={<Dailynews />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/latestproject" element={<Latestproject />}></Route>
          <Route path="/ecosystem" element={<Ecosystem />}></Route>
          <Route path="/allResearch" element={<Allresearch />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/article" element={<Article />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
