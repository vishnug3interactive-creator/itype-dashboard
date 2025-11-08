
import { Box, Typography } from "@mui/material";
import SpeedIcon from "../../../../assets/images/mainicons/speed.png";
import AccuracyIcon from "../../../../assets/images/mainicons/Accuracy.png";
import TextIcon from '../../../../assets/images/mainicons/texticon.png'
import GameIcon from '../../../../assets/images/mainicons/gameicon.png'
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/joy/CircularProgress";
import MeterCard from "./MeterCard";
import React from "react";


const meters = [
  {
    id: 1,
    title: "Speed Drills",
    content: "Measuring your learning outcome.",
    icon: SpeedIcon,
    value:16,
    color:'#01A8DF'

  },
  {
    id: 2,
    title: "Accuracy Drills",
    content: "Measuring your learning outcome.",
    icon: AccuracyIcon,
    value:51,
    color:'#E52293'
  },
  {
    id: 3,
    title: "Text Drills",
    content: "Practice improves your touch typing.",
     icon: TextIcon,
     value:76,
     color:'#FF6928'
  },
   {
    id: 3,
    title: "Games",
    content: "Learning and having fun at the same time.",
     icon: GameIcon,
     value:100,
     color:'#93C83C'
  },
];

function MetersComponent({ meter }) {
  return (
    <>
      <Box >
        
            <Box sx={{padding:'20px'}}>
              {meters.map((p) => (
                <MeterCard key={p.id} meters={p} />
              ))}
              
        </Box>
         {/* <Divider /> */}
      </Box>
    </>
  );
}

export default MetersComponent;
