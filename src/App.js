import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import TextContainer from './component/textContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from './redux/setpropertiesSlice';
import PropertyDetailsPage from './pages/propertydetailsPage'
import LoadingSpinner from './component/loading';

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.properties.isLoading);


  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <Router>
      <TextContainer/>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Properties/:id" exact element={<PropertyDetailsPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
