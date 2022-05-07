import React from 'react'
import { Card, CardGroup, Container, Col } from 'react-bootstrap'
import Carddetail from './Carddetail'
import cData from './CardData';



export default function About() {



    const oData = (val, ind) => {
        console.log(val)
        return (
            <Carddetail
                id={val.id}
                img={val.img}
                title={val.title}
                desc={val.desc}
            />
        );
    }

    return (
        <div>

            {/* <Container> */}
            <h1>
                Products
            </h1>
            {/* <Col className="cardstyle">


                <Carddetail
                    img="https://images.olx.com.pk/thumbnails/184385041-400x300.webp"
                    title="automatic scooty 110cc"
                    desc="165,000" />

                <Carddetail
                    img="https://images.olx.com.pk/thumbnails/180212183-400x300.webp"
                    title="VIVO mobile Covers"
                    desc="150" />

                <Carddetail
                    img="https://static-01.daraz.pk/p/f207ce6d76a30c2c30cca12171884adf.jpg"
                    title="Quartz Watch for men"
                    desc="1,500" />
            </Col>


            <Col className="cardstyle">
                <Carddetail
                    img="https://images.olx.com.pk/thumbnails/147554878-400x300.webp"
                    title="New Diesel Generators"
                    desc="800,000" />

                <Carddetail
                    img="https://static-01.daraz.pk/p/8b544ba47df959f278375533fe974236.png"
                    title="LED Tv"
                    desc="50,000" />

                <Carddetail
                    img="https://images.olx.com.pk/thumbnails/203930350-400x300.webp"
                    title="HONDA CITY"
                    desc="1,985,000" />

                <Carddetail
                    img="https://images.olx.com.pk/thumbnails/192624878-400x300.webp"
                    title="Lenovo ThinkPad"
                    desc="37,000" />
            </Col> */}
            {/* </Container> */}

          


            {cData.map(oData)}

            
        </div>
    )
}
