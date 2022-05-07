import React from 'react'
import '../App.css'
export default function Input(props) {
    return (
        <div >

            <input placeholder={props.myplaceHolder} value={props.list} onChange={props.myOnChange} />



        </div>
    )
}
