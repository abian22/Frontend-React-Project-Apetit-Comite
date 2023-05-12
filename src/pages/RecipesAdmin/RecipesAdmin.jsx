import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Tooltip,
} from "@mui/material";
import { getAllRecipes } from "../../Services/recipeServices";
import { Link, Link as RouterLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { deleteRecipe } from "../../Services/recipeServices";

function RecipesAdmin() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const result = await getAllRecipes();
    setRecipes(result);
  }

  const deleteOneRecipe = async (id) => {
    const query = await deleteRecipe(id);
     getRecipes();
  };

  function displayRecipes() {
    return recipes.map((r, idx) => {
      return (
        <Grid item xs={12} sm={6} md={4} xl={3} key={r.id}>
          <Card
            key={idx}
            sx={{
              maxWidth: "345px",
              padding: "10px",
              margin: "10px",
              flexDirection: "row",
              marginBottom: "40px",
            }}
          >
            <CardActionArea component={RouterLink} to={`/home/recipes/${r.id}`}>
              <Tooltip title="More details">
                <CardMedia component="img" height="140" image={r.img} />
              </Tooltip>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {r.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  {r.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Link to={`${r.id}`}>
                <Tooltip title="Edit">
                  <Button>
                    <EditIcon sx={{ color: "#12BAD0" }} />
                  </Button>
                </Tooltip>
              </Link>
              <Tooltip title="Delete">
                <Button onClick={() => deleteOneRecipe(r.id)}>
                  <CancelIcon sx={{ color: "#ED3A53" }} />
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <>
      <Link to="/home/recipes/admin/add">
        <Tooltip title="Add Recipe">
          <Button
            sx={{
              right: "50%",
              position:"absolute",
              color: "#12BAD0",
              marginTop:"10px"
            }}
          >
            <AddCircleOutlineIcon />
          </Button>
        </Tooltip>
      </Link>
      <br></br> <br></br>
      <div style={{ width: "100%", height: "auto" }}>
        <Grid container sx={{ justifyContent: "start", flexWrap: "wrap" }}>
          {displayRecipes()}
        </Grid>
      </div>
    </>
  );
}

export default RecipesAdmin;
