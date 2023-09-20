import AliceCarousel from "react-alice-carousel"

import { Box, NoSsr, useMediaQuery } from "@mui/material"
import { Theme } from "@mui/system";
import { CardRecommend } from "@/components/atoms/cardRecommend/CardRecommend"

import 'react-alice-carousel/lib/alice-carousel.css';
import { styles } from "./stylesTestimonials"
const testimonials = [
    {
        text: "I’ve been with AJR Accounting who has been doing our taxes. She is Professional & Patient, & Trustworthy. She can help with loans, notary & more. She makes you comfortable & keeps you updated with any changes...",
        author: "Carmen Perez",
        // role: "Owner/Graphic Designer - Left Coast Creativity"
    },
    {
        text: "Best service ever. Very professional family oriented Buisness. Very helpful I have never had a problem all my personal and Buisness transactions are right on point. Give them five stars all the way. Thank you for your services.",
        author: "Yesenia Munoz",
        // role: "TGS Plastic"
    },
    {
        text: "Best Place To Be For Personal And Business AJR LITERALLY DOES IT ALL",
        author: "Lenny Muñoz",
        // role: "District Manager - Farmers Insurance"
    },
    {
        text: "Great service, friendly  and very knowledgeable.",
        author: "Tony Reyes",
        // role: "Travel Agent"
    },
    {
        text: "The Best service, good professional environment and That's why I recommend this office.",
        author: "Fabian Sarango",
        // role: "Bell Rose Used Bookstore"
    },
    {
        text: "Great service. 🤗",
        author: "Marines Munoz",
        // role: "Attorney"
    },
]
export const Testimonials = () => {

    return (
        <Box component='main' sx={styles.main}>
            {/* {isSmallScreen ? */}
            <NoSsr>
                <AliceCarousel
                    disableButtonsControls
                    autoPlayInterval={3000}
                    animationDuration={1000}
                    responsive={responsive}
                    
                    {...settings}
                >
                        {testimonials.map((testimonial) => (
                            <CardRecommend
                                key={testimonial.author}
                                {...testimonial}
                            />
                        ))}
                </AliceCarousel>
            </NoSsr>
            {/* // : */}
            {/* // <> */}
            {/* //     {testimonials.map((testimonial) => ( */}
            {/* //         <CardRecommend */}
            {/* //             key={testimonial.author}
                //             {...testimonial}
                //         />
                //     ))}
                // </> */}
            {/* // } */}

        </Box>
    )
}
const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoPlay: true,

};
const responsive = {
    0: {
        items: 1,
        itemsFit: 'contain'

    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};

