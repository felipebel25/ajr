import { EventAvailableOutlined } from "@mui/icons-material"
import { Box, IconButton, Theme, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesFourthSection"

const Counter = () => (
  <Box sx={styles.counterContainer}>
    <Box sx={styles.whiteStepFirst} >
      <Typography>1</Typography>
    </Box>
    <Box sx={styles.whiteStep} >
      <Typography>2</Typography>
    </Box>
    <Box sx={styles.blueStep}>
      <Typography color='primary.main' >3</Typography>
    </Box>
  </Box>
)

export const FourthSection = () => {

  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.main} component='article'>
      {isSmallScreen ? <Box >
        <Box sx={styles.imageContainer}>
          <Image
            alt="NFC technology"
            quality={100}
            style={{ width: "100%", height: "100%" }}
            src='/images/home/woman_call.png'
            width={848}
            height={836}
          />
        </Box>
        {isSmallScreen && < Counter />}
        <IconButton sx={styles.calendaryContainer}>
          <EventAvailableOutlined sx={styles.iconCalendary} />
        </IconButton>
        <Typography>{textFourthSectionEn.callUs}</Typography>
      </Box>
        :
        <>
          <Box sx={styles.imageContainer}>
            <Image
              alt="NFC technology"
              quality={100}
              style={{ width: "100%", height: "100%" }}
              src='/images/home/woman_call.png'
              width={848}
              height={836}
            />
          </Box>
          {!isSmallScreen && < Counter />}
        </>
      }
      <Box sx={styles.textContainer}>
        <Box>
          <Typography sx={styles.textContainerTitle} variant="h3" component='h3'>Our Easy 3-Step <br /> Process for Tax Resolution</Typography>
          <Typography sx={styles.subtitle}>{textFourthSectionEn.worryLess}</Typography>
        </Box>
        <Box sx={styles.calendarysContainer}>
          {!isSmallScreen &&
            <>
              <Box >
                <IconButton sx={styles.calendaryContainer}>
                  <EventAvailableOutlined sx={styles.iconCalendary} />
                </IconButton>
                <Typography>{textFourthSectionEn.callUs}</Typography>
              </Box>
              <Box sx={styles.calendaryOpacity} >
                <IconButton sx={styles.calendaryContainer}>
                  <EventAvailableOutlined sx={styles.iconCalendary} />
                </IconButton>
                <Typography>{textFourthSectionEn.callUs}</Typography>
              </Box>
            </>
          }
        </Box>
      </Box>
    </Box >
  )
}



const textFourthSectionEn = {
  ourEasy: "Our Easy 3-Step Process for Tax Resolution",
  worryLess: "Worry Less, Live More",
  callUs: "Call us today for immediate support or set up a consultation that meets your schedule."
}