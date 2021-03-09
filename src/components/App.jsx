import "../styles/index.scss";
import Recipes from "./Recipes";
import Whatever from "./Whatever";
// import sword from "../images/swc-sword.png"
// import swordSvg from "../images/sword.svg"

function App() {
  return (
    <>
      <main>
          <section>
            <h1>Hello from webpacking React with refresh</h1>
          </section>
        <section className="hero">
        </section>
        {/* <img src={sword} alt="sword" width="250"/>
        <img src={swordSvg} alt="sword" width="250"/> */}

        <Recipes/>
        <Whatever/>
      </main>
    </>
  )
}

export default App
