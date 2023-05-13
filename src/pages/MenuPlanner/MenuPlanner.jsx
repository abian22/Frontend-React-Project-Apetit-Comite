import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Tooltip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { getMenuPlanner } from "../../Services/menuPlannerServices";
import { deleteRecipeMenuPlanner } from "../../Services/menuPlannerServices";
import AddMenuPlannerButton from "../../components/AddMenuPlannerButton/AddMenuPlannerButton";
import { Link as RouterLink } from "react-router-dom";

function MenuPlanner() {
  const [myMenuPlanner, setMyMenuPlanner] = useState([]);

  async function handleMenuPlanner() {
    const result = await getMenuPlanner();
    setMyMenuPlanner(result);
  }

  const deleteOneRecipeMenuPlanner = async (id) => {
    await deleteRecipeMenuPlanner(id);
    handleMenuPlanner();
  };

  const orderByDays = () => {
    myMenuPlanner.sort((a, b) => {
      if (a.menu_planners.date < b.menu_planners.date) return -1;
      else if (a.menu_planners.date > b.menu_planners.date) return 1;
      return 0;
    });
  };

  useEffect(() => {
    handleMenuPlanner();
  }, []);

  return (
    <>
<Grid
  item
  container
  spacing={4}
  padding={3}
  paddingBottom={5}
>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
  >
    <h1>Your Meal Planner&nbsp;&nbsp;&nbsp;</h1>
    <AddMenuPlannerButton refreshFunction={handleMenuPlanner} />
  </div>
  {myMenuPlanner.map((recipe, idx) => (
    <Grid
      key={idx}
      item
      xs={12}
      sm={12}
      md={12}
      minWidth={320}
      sx={{ display: "flex", width: "90%", justifyContent: "center" }}
    >
      <Card
        sx={{
          width: { xl: "60%", lg: "60%", sm: "60%" },
          maxWidth: "50vw",
          minWidth: "400px",
          height: "110%",
          display: "flex",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
              padding: "10px",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              component="div"
              width="120px"
            >
              {recipe.menu_planners.date}
            </Typography>
          </Box>

          <Tooltip title="More details">
            <CardMedia
              component={RouterLink}
              to={`/home/recipes/${recipe.id}`}
              sx={{
                height: 130,
                maxWidth: 140,
                minWidth: 140,
                flexShrink: 0,
                marginTop: "10px",
                display: "flex",
              }}
              image={recipe.img}
            />
          </Tooltip>
          <CardContent sx={{ flexGrow: 1, maxWidth: 200, minWidth: 200 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5px",
                position:"absolute"
              }}
            >
              {recipe.name}
            </Typography>
          </CardContent>
          <CardActions sx={{ flexDirection: "column", position: "absolute", bottom: 0, right: 0 }}>
            <Tooltip title="Delete">
              <Button
                sx={{
                  color: "#ED3A53",
                  display: "flex",
                  textAlign: "flex-end",
                  alignContent: "flex-end",
                  justifyContent: "flex-end",
                  marginLeft: "0vw",
                }}
                onClick={(e) => deleteOneRecipeMenuPlanner(recipe.id)}
              >
                <CancelIcon />
              </Button>
            </Tooltip>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>

    </>
  );
}

export default MenuPlanner;
