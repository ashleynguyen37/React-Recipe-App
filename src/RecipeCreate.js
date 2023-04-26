import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  //When the form is submitted, a new recipe should be created, and the form contents cleared
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }

  const [formData, setFormData] = useState({...initialFormState})

  const changeHandle = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }

  const submitHandle = (event) => {
    event.preventDefault()
    setRecipes([...recipes, formData])
    setFormData({...initialFormState})
  }
  
  return (
    <form name="create" onSubmit={submitHandle}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={changeHandle}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={changeHandle}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="URL"
                onChange={changeHandle}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                onChange={changeHandle}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                onChange={changeHandle}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
