import "./App.css";
import Instruction from "./components/Instruction/Instruction";
import Frog from "./components/Frog/Frog";
import ShareButton from "./components/ShareButton/ShareButton";

export default function App() {
  return (
      <>
        <Instruction/>
        <Frog/>
          <ShareButton/>
      </>
  )
}