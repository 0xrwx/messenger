import './input.css';
import TopBar from "./components/TopBar/TopBar";
import Chat from "./components/Chat/Chat";


function App() {
  return (
    <div className={"mx-auto w-[48rem] flex flex-col min-h-screen shadow-2xl shadow-inner"}>
      <TopBar/>
      <Chat/>
    </div>
  );
}

export default App;
