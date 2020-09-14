import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadForm from './comps/UploadForm';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Navbar from './comps/layout/Navbar';
import Navbar from './comps/auth/SignIn';
import Navbar from './comps/auth/SignUp';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
