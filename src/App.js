import React, { useState } from 'react';
import Count from './comps/Count';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
//mport SidePost from './comps/SidePost';

function App() {
  const [ selectedimg, setSelectedimg ] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedimg={setSelectedimg}/>
      {selectedimg && <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg}/> }

     <Count />
    </div>
  );
}

export default App;
