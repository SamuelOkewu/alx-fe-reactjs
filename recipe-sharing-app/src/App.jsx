import { useState } from 'react'

import './App.css'
import store from './store.jsx'
import Recipelist from '.RecipeList.jsx'
import { useCounterStore } from './store.jsx'
import AddRecipeform from '.AddRecipeForm.jsx'




const App = () => {
  
  const count = useCounterStore((state) => state.count);

  return <Othercomponent count={count} />;
}

  
const increment = useCounterStore((state) => state.increment);
const decrement = useCounterStore((state) => state.increment);

  return <div>Count: {count}</div>;


export default App
