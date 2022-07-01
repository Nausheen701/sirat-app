
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { useState } from "react"
import {sliderItems} from "../data"

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: lavender;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white; 
    // background-color: #fff7f7; 
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex  *  -100}vw);
        // moves slides across the x-axis
`
const Slide = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img `
    height: 80%
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;

`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
        const [slideIndex, setSlideIndex] = useState(0)

        const handleClick = (direction) => {

            if(direction==="left")  {
                setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
            }
        }
    return (
        <Container> 
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>  
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}> 
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
    
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                    </Slide>
                ))} 

                {/* <Slide bg="lightblue"> 
                <ImgContainer>
                    <Image src="https://static.wixstatic.com/media/ca849f_f6b370fcf0bc42bdb90413db34075188~mv2.jpg/v1/fill/w_1480,h_1973,al_c,q_90/ca849f_f6b370fcf0bc42bdb90413db34075188~mv2.webp"/>
                </ImgContainer>

                <InfoContainer>
                    <Title>POPULAR PRINTS</Title>
                    <Desc>Unique prints to create personalized greeting cards!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>

                <Slide bg="coral"> 
                <ImgContainer>
                    <Image src="https://static.wixstatic.com/media/ca849f_afe14472c12548ef8cea1a132ea92fb7~mv2.jpg/v1/fill/w_1480,h_1110,al_c,q_90/ca849f_afe14472c12548ef8cea1a132ea92fb7~mv2.webp"/>
                </ImgContainer>

                <InfoContainer>
                    <Title>SEASONAL FAVORITES</Title>
                    <Desc>Unique prints to create personalized greeting cards!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide> */}

              
            </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}> 
                <ArrowRightOutlined/> 
            </Arrow>

            
        </Container> 
            
       
    )
}

export default Slider

