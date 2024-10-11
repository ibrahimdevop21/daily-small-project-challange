// import React from 'react';
import Example from './components/Example';

const bool = true;
const str1 = 'just';
const style = {
  padding: '10px',
  margin: '20px',
  background: '#234',
  color: '#fff',
  border: '1px solid gray',
  borderRadius: '15px',
};
function App() {
  return (
    <div style={style}>
      <Example
        toggleBoolean={!bool}
        math={(100 + 20) / 3}
        str={str1 + ' another ' + 'string'}
      />
    </div>
  );
}

export default App;
/*
    <>
      <Bag>
        <Apple color='red' number='44' />
      </Bag>
      <Bag
        style={{
          color: 'tomato',
          border: '2px solid green',
          fontSize: '40px',
        }}
      >
        Hi there
      </Bag>
      <Bag>
        <Pear friend='Bob' />
      </Bag>
      <div
        style={{
          background: '#FFF',
          width: '250px',
          height: '250px',
          border: '2px solid blue',
          margin: '20px',
          borderRadius: '15px',
        }}
      >
        <Example toggleBoolean={!bool} />
      </div>
    </>
  );
*/

