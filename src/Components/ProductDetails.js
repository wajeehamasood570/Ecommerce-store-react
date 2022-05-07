import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import  cData   from './CardData'

export default function ProductDetails() {

    const [data, setdata] = useState("");

const { id } = useParams();

const record  = cData.find(item => item.id == id)
console.log(record);

// useEffect((id) => {
//      setdata(cData.find(item => item.id == id));
//      console.log(data);
// })

// const record = data;

// console.log(params.id);

// console.log(record.id);

// useEffect(() => {
//     console.log('hi');
// });

    return (
        <>
          
                <div className="productdetail">


                    <div >
                        
                    <Container style={{
                        margin:'50px'
                    }}>
                   <img className="details" src= {record.img} /> 
                    <h3> {record.title}</h3>
                    <h3> {record.desc}</h3>
                    </Container>
                    </div>

           
           </div>
           
           
        </>
    )
}
