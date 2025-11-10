import { Box, Button } from "@mui/material";
import React from "react";
import Giftbg from "../../../../assets/images/sidebaricons/GiftBG.png";

function PrizeComponent() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        // height: "213px",
        marginBottom: "1rem",
        backgroundImage: `url(${Giftbg})`,
        // backgroundPositionX: "70px",
        // backgroundPositionY: "30px",
        objectFit:'cover',
        backgroundColor: "#922C88",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "48px",
        paddingBottom: "16px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-34.5px",
          left: "0",
          right: "0",
          margin: "auto",
          width: "69px",
          height: "69px",
          borderRadius: "100px",
          background: "#FFC63A",
          display: "flex",
          zIndex: "100",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid #fff",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.5 21V27C4.49994 28.1478 4.93849 29.2523 5.72593 30.0874C6.51336 30.9225 7.59016 31.4252 8.736 31.4925L9 31.5H16.5V21H4.5ZM19.5 21V31.5H27C28.1478 31.5001 29.2523 31.0615 30.0874 30.2741C30.9225 29.4866 31.4252 28.4098 31.4925 27.264L31.5 27V21H19.5ZM22.9995 3C20.9895 3 19.1925 3.912 18 5.346C17.4305 4.66006 16.7259 4.09871 15.93 3.6969C15.1341 3.2951 14.2641 3.06145 13.374 3.0105L12.999 3H12.9C11.8657 3 10.8737 3.41089 10.1423 4.14228C9.41089 4.87368 9 5.86566 9 6.9C9 7.524 9.1125 8.121 9.3165 8.6745L9.4515 9H9C7.85218 8.99994 6.74773 9.43849 5.91261 10.2259C5.07749 11.0134 4.57484 12.0902 4.5075 13.236L4.5 13.5V18H16.5V9H19.5V18H31.5V13.5C31.5001 12.3522 31.0615 11.2477 30.2741 10.4126C29.4866 9.57749 28.4098 9.07484 27.264 9.0075L27 9H26.55C26.838 8.3595 27 7.65 27 6.9C27.0001 5.90819 26.6223 4.95362 25.9435 4.23051C25.2646 3.50739 24.3358 3.07006 23.346 3.0075L23.1 3H22.9995ZM22.9995 6H23.1C23.3387 6 23.5676 6.09482 23.7364 6.2636C23.9052 6.43239 24 6.6613 24 6.9C24 7.45695 23.7788 7.9911 23.3849 8.38492C22.9911 8.77875 22.457 9 21.9 9H19.536C19.6565 8.16694 20.073 7.40516 20.7094 6.8542C21.3457 6.30324 22.1578 5.99999 22.9995 6ZM12.9 6H13.0005C14.6805 6 16.083 7.182 16.4205 8.76L16.4655 9H14.1C13.543 9 13.0089 8.77875 12.6151 8.38492C12.2212 7.9911 12 7.45695 12 6.9C12 6.68655 12.0759 6.48007 12.2141 6.31741C12.3523 6.15475 12.5439 6.04651 12.7545 6.012L12.9 6Z"
            fill="#242530"
          />
        </svg>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          marginTop: "32px",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 700,fontFamily:'Urbanist' }}>
          You didn’t claim your prize
        </span>
        <span style={{ fontSize: "12px",fontWeight:'500', opacity: 0.9, marginTop: "8px",fontFamily:'Urbanist' }}>
          Tap the button below to claim <br></br> your prize!
        </span>
      </Box>

      <Button
        sx={{
          marginTop:'0.938rem',
          background: "#FFC63A",
          width: "168px",
          height: "37px",
          textTransform: "none",
          borderRadius: "100px",
          fontWeight: 800,
          fontSize: "14px",
          fontFamily:'Urbanist',
          color: "#242530",
          "&:hover": {
            background: "#FFD65E",
          },
        }}
      >
        Claim Prize
      </Button>
    </Box>
  );
}

export default PrizeComponent;
