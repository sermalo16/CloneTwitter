import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {Home} from './components/Home/Home';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Widgets} from './components/Widgets/Widgets';

function App() {
  return (
    <div className="App">
      
      {/* sidebar */}
      <Sidebar/>
      

      {/*content */}
      <Home/>

      {/* widgets */}
      <Widgets/>


      <GlobalStyles/>
    </div>
  );
}

export default App;
