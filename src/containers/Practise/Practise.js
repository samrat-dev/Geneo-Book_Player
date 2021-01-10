import React, { useRef, useEffect, useState } from 'react';
// import axios from 'axios'; 
import './Practise.scss';

const WelcomePractise = <div style={{ padding: '1rem' }}>
    Practise <br />
    Tutorial Continue at :
    <a target='tutorial'
        >This Link</a> <br />
</div>

export default function Practise(props) {
    // console.log(paramsString)

    return (
        <div className="book">
            {WelcomePractise}

        </div>
    )
}