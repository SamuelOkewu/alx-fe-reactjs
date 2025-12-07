// src/components/AddRecipeForm.jsx

import React, { useState } from 'react';

const AddRecipeForm = () => {
  // 1. State for form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // 2. State for validation errors
  const [errors, setErrors] = useState({});

  // 3. Simple form validation logic
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Check for empty fields
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required.';
      isValid = false;
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients list is required.';
      isValid = false;
    } else if (ingredients.split('\n').filter(i => i.trim()).length < 2) {
      // Example validation: Check if ingredients list has at least two items (separated by newlines)
      newErrors.ingredients = 'Please list at least two ingredients.';
      isValid = false;
    }
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 4. Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission (e.g., API call)
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n').filter(i => i.trim()), // Convert textarea to array
        steps: steps.split('\n').filter(s => s.trim()), // Convert textarea to array
      };
      console.log('Recipe Data to be Submitted:', newRecipe);

      // Reset form (optional)
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
      alert('Recipe submitted successfully!');
    } else {
      console.log('Form has validation errors.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
        🍽️ Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border ${
              errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
            } rounded-md focus:border-green-500 focus:outline-none transition duration-150 ease-in-out`}
            placeholder="e.g., Spicy Shrimp Tacos"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
            Ingredients (One per line)
          </label>
          <textarea
            id="ingredients"
            rows="6"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border ${
              errors.ingredients ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
            } rounded-md focus:border-green-500 focus:outline-none resize-none transition duration-150 ease-in-out`}
            placeholder="1 lb shrimp&#10;2 tbsp chili powder&#10;1 cup shredded cabbage"
          ></textarea>
          {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Textarea */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">
            Preparation Steps (Detail each step)
          </label>
          <textarea
            id="steps"
            rows="8"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-3 border ${
              errors.steps ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
            } rounded-md focus:border-green-500 focus:outline-none resize-none transition duration-150 ease-in-out`}
            placeholder="Step 1: Marinate the shrimp...&#10;Step 2: Grill until pink...&#10;Step 3: Assemble the tacos..."
          ></textarea>
          {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:scale-[1.01]"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;