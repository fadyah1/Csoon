import React from 'react';
import CountdownTimer from './CountdownTimer';

const App = () => {
  return (
    <div>
      <img style={{width:"1488px", height:"752px",position:"fixed"}} src={require('../src/vd/vecteezy_construction-workers-on-a-building_35010701-ezgif.com-video-to-gif-converter (2).gif')} alt="Your image description" />
      <CountdownTimer/>
      <div className="mirror-container">
      <div style={{position: 'fixed',bottom: 0,left: 0,width: '30%',height: '100%',background: 'rgba(0, 0, 0, 0.7)', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.79)"}}/>
      <img style={{width:"680px", height:"850px",position:"fixed",bottom:"30%", right:"62%"}} src={require('../src/vd/Blue Creative Pixel Blank Note Instagram Story Background (4).png')} alt="Your image description" />
      <p style={{position: 'fixed',color:"#BEBEBE",fontSize:"33px", zIndex:5,fontFamily:"bold",fontWeight:"bold",top:"550px",left:"28px"}}>The website is under <br/> construction stay tuned ...</p>
      </div>
    </div>
  );
};

export default App;