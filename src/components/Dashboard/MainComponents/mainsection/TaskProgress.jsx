import React from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeperator from '../mainsection/RadialSeperator'
import { Box, Button, Typography } from '@mui/material';


function TaskProgress() {
  return (
     <Box sx={{display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        paddingTop:'18px',
        alignItems:'center',
       
    }}>
        <Typography
         
          sx={{ fontWeight: "700", fontSize: "18px", color: "#242530",padding:'5px',fontFamily:'Urbanist' }}
        >
          Overall Task Progress
        </Typography>
        <Box sx={{marginTop:'24px',padding:'10px',width:'177px',height:'177px'}}>
             
      <CircularProgressbarWithChildren
        value={75}
        text={`${75}/100`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
           pathColor: "#922C88D9",
           textColor:'#922C88D9',
         
        })}
      >
        <RadialSeperator
          count={12}
          style={{
            background: "#922C88D9",
            width: "2px",
            height: `${4}%`
          }}
        />
      </CircularProgressbarWithChildren>
        </Box>
       <Box >
         <Button sx={{background:'#922C88',textTransform:'none', width:'186px',height:'37px',borderRadius:'100px',marginTop:'40px',fontFamily:'Urbanist'
           }}  variant="contained" 
          >
          <span >View Here</span> 
          </Button>
       </Box>
    </Box>
  )
}

export default TaskProgress