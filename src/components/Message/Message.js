const Message = ({text, name, image}) => {
  return (
    <li>
      <div className={"ml-12 text-emerald-400"}>
        {name}
      </div>
      <div className={"flex text-white items-center"}>
        <div className={"bg-amber-50 rounded-3xl"}>
          <img className={"w-10 h-10 rounded-3xl"} src={image}/>
        </div>
        <div className={"m-2 mb-3 p-2 bg-blue-500 w-auto rounded-t-lg rounded-br-lg"}>
          {text}
        </div>
      </div>
    </li>
  )
}

export default Message;