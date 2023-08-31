import {messagesData} from "./messagesData";
import Message from "../Message/Message";
import {people} from "../../data/people";

import userLogo_1 from '../../data/images/userLogo_1.png';
import feel from '../../data/images/feel.jpg';

const Messages = ({messages}) => {
  return (
    <ul className={"bg-gray-900 p-1 flex-grow text-white mt-16 mb-16"}>
      {messagesData.map((x, index) => <Message text={x.text} name={people[x.person_id].name} image={userLogo_1} key={index} />)}
      {messages}
      <Message text={"Ohh..."} name={"Joseph"} image={feel}/>
    </ul>
  )
}

export default Messages;