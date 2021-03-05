import {useState} from 'react'

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGaunletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGaunletsRecipe);

function Recipes() {
  const [recipe, setRecipe] = useState([]);
  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button onClick={() => setRecipe(elvenGaunletsRecipe)}>Elven Gaunlets Recipe</button>
      <ul>
        {Object.keys(recipe).map((material) => {
          return(
            <li key={material}>{material}: {recipe[material]}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Recipes
