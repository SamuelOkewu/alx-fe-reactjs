import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
useNavigate
  return (
    <button onClick={() => deleteRecipe(id)}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
