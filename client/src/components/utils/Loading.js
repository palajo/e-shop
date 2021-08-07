import React from 'react';

function Loading(props) {
  return (
    <section className="section-loading" className={`section-loading ${props.fullheight && 'fullheight'}`}>
      <div className="loading-block">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;