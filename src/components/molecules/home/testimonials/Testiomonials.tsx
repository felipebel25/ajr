import AliceCarousel from "react-alice-carousel"

import { Box, NoSsr, useMediaQuery } from "@mui/material"
import { Theme } from "@mui/system";
import { CardRecommend } from "@/components/atoms/cardRecommend/CardRecommend"

import 'react-alice-carousel/lib/alice-carousel.css';
import { styles } from "./stylesTestimonials"
const testimonials = [
    {
        text: "I love that AJR Accounting took the time to learn about my business before presenting an insightful strategic plan. Thanks, AJR Accounting!",
        author: "Lauren B.",
        role: "Owner/Graphic Designer - Left Coast Creativity"
    },
    {
        text: "When our business was in trouble, we didn't know where to turn to for help. Fortunately, we'd heard about AJR Accounting. From our first meeting, I knew we  found the perfect firm.",
        author: "Tony S., President.",
        role: "TGS Plastic"
    },
    {
        text: "At our first meeting, AJR Accounting exhibited trust and loyalty. As a result, I instantly felt at ease and confident that my business was in very capable hands.",
        author: "Jodi W.",
        role: "District Manager - Farmers Insurance"
    },
    {
        text: "Seeing as how my business requires weekly attention, AJR Accounting has exceeded my expectations in keeping my business organized so that I can focus my concentration on my own client's travel plans.",
        author: "David R., Owner",
        role: "Travel Agent"
    },
    {
        text: "AJR Accounting has done an excellent job helping me revitalize my fledgling business and increase my cash flow.",
        author: "Sharmisa T., Owner",
        role: "Bell Rose Used Bookstore"
    },
    {
        text: "Rola, of AJR Accounting, is always available for questions and goes out of her way to complete projects that help my business grow.",
        author: "Alice T",
        role: "Attorney"
    },
]
export const Testimonials = () => {

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
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

