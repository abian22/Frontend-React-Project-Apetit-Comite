import React from 'react'
import Header from '../../components/Header/Header'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';

function MenuPlanner() {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


    function displayMenuPlanner() {
        
        {return days.map((day) => (
            
          <Grid key={day} item xs={12} sm={12} md={12} sx={{display:"flex", justifyContent:"center",}}>
            <Card sx={{ width:{xl:"60%", lg:"60%", sm:"100%"}, height:"110%", display:"flex"}}>
              <Box sx={{ display: 'flex',height: '100%' }}>
                <Box sx={{ flexGrow: 1 }}>
                </Box>
                <Box sx={{ display: 'flex',  justifyContent:"center", marginTop:"50px", padding:"10px"}}>
                  <Typography  variant="h5" textAlign="center" component="div" width="120px">
                    {day}
                  </Typography>
                </Box>
                <CardMedia
                  sx={{ height: 130, width: 140, flexShrink: 0, marginTop:"10px", display:"flex"}}
                  image="https://upload.wikimedia.org/wikipedia/commons/9/96/Lagarto_ocelado_Sierra_Sur_Ja%C3%A9n_2019_24J_01.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary"sx={{display:"flex",justifyContent:"center", alignItems:"center", marginBottom:"5px"}}>
                    RECIPE NAME
                  </Typography>
                  <Typography variant="body2" color="text.secondary"sx={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "100px", overflowY: "auto", marginBottom: "5px" }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions  sx={{ flexDirection: 'column' }}>
                  <Button sx={{color:"black"}}>
                    <CancelIcon/>
                  </Button>
                  <Button  sx={{ marginTop: '50px', color:"black" }}><EditIcon/></Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
    }


  return (
    <>
    <Header />
    <Grid container spacing={4} padding={3} paddingBottom={5}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"100%"}}>
        <h1>Your 7-Day Meal Planner</h1>
      </div>
      {displayMenuPlanner()}
      </Grid>
    </>
  );
    }
export default MenuPlanner