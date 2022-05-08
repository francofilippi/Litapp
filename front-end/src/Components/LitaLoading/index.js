import React from 'react';
import ContentLoader from "react-content-loader";

import './LitaLoading.css';

export default function LitaLoading(props) {
  return (
    <div className='container-loader'>
      <ContentLoader
        speed={2}
        width={359}
        height={312}
        style={{ width: '100%', position: 'absolute'}}
        viewBox="0 0 359 312"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width="359" height="72" />
        <rect x="0" y="91" rx="0" ry="0" width="359" height="72" />
        <rect x="0" y="183" rx="0" ry="0" width="359" height="72" />
      </ContentLoader>
    </div>

  );
}
