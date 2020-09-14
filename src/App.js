import React from 'react';
import UploadForm from './comps/UploadForm';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
