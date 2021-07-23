import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
//mport SidePost from './comps/SidePost';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
     
    </div>
  );
}

export default App;
