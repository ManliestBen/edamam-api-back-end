import axios from "axios"

function search(req, res) {
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.body.recipeQuery}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
  .then(response => {
    res.json(response.data.hits)
  })
}

export {
  search
}