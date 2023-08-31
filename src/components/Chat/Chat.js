import {useState} from "react";
import Messages from "../Messages/Messages";
import ClientMessage from "../ClientMessage/ClientMessage";

import me from '../../../src/data/images/me.jpg';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [crutch, setCrutch] = useState(0);
  const addToMessages = (name) => {
    setCrutch(crutch + 1);
    setMessages((x) => {
      return [...x, name]
    })
  }
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <Messages messages={messages}/>
      <div className={"fixed w-[inherit] bottom-0 flex bg-gray-700 p-5 shadow-2xl text-white h-16 justify-between items-center"}>
        <input className={"bg-gray-700 w-full"} placeholder={"Write a message..."} onChange={handleChange} value={message}/>
        <button className={"bg-orange-600 rounded-lg h-8 w-16"} onClick={() => addToMessages(<ClientMessage text={message} image={me} key={crutch}/>)}>Send</button>
      </div>
    </>
  )
}

export default Chat;