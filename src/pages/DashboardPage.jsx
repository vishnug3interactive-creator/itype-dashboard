import { Box, Typography } from '@mui/material'
import React from 'react'

function DashboardPage() {
  return (
   <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
      <Typography sx={{fontSize:'2rem'}}>Welcome User</Typography>
   </Box>
  )
}

export default DashboardPage