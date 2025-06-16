import React from 'react';
import AerialVideos from './AerialVideos/AerialVideos';
import '../Aerials/AerialVideos/VideoEmbed.css'; 

function Aerials() {
  return (
    <div>
      <h2 className='aerial-title'>Aerials</h2>
      <div className='aerial-page'>
        <AerialVideos />
      </div>
    </div>
  );
}

export default Aerials;