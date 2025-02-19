import React from 'react';
import { Map } from "react-kakao-maps-sdk";



function KakaoMap(props) {

  
  return (
    <Map
      center={{ lat: 37.48197988243028, lng: 126.89814204687781 }}
      style={{ width: '1000px', height: '400px' }}
      level={3}
    />  
  );
}

export default KakaoMap;
