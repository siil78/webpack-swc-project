import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"

function App() {
  return (
    <>
      <main>
          <section>
            <h1>React App component</h1>
          </section>
        <section className="hero">
        </section>
        <img src={sword} alt="sword" width="250"/>
        <img src={swordSvg} alt="sword" width="250"/>

        <Recipes/>
      </main>
    </>
  )
}

export default App
