import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './search/SearchForm';
import SearchResults from './search/SearchResults';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchForm />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
