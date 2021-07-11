
import './App.scss';
import Text from './Text';
import Form from './Form';


import io from "socket.io-client";

const socket = io.connect('/')

function App() {


  return (
    <div className="App">
      <Text socket={socket}></Text>
      <Form socket={socket}></Form>
    </div>
  );
}

export default App;
