const ClientMessage = ({text, image}) => {
  return (
    <li>
      <div className={"flex flex-row-reverse text-white items-center"}>
        <div className={"bg-amber-50 rounded-3xl"}>
          <img className={"w-10 h-10 rounded-3xl"} src={image}/>
        </div>
        <div className={"m-2 mb-3 p-2 bg-pink-600 w-auto rounded-l-lg rounded-tr-lg"}>
          {text}
        </div>
      </div>
    </li>
  )
}

export default ClientMessage;