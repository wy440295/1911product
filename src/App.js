import React from 'react';
import './style/test.less';
import { Button } from 'antd';


function App() {
  return (
    <div className="App">
      123456
      <div className="box">
        你好呀
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      </div>
    </div>
  );
}

export default App;
