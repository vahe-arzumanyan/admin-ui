import React from 'react';


const TypographyList = ({title, description, color, fontSize, fontFamily, lineHeight, fontWeight, id}) => {

    return <div className='G-flex G-align-end ' style={{padding:'25px'}}>
        <div className='G-flex-column G-justify-start' style={{ minWidth:'15%'}}>
            <p>{title} {id+1}</p>
        </div>
        <div style={{margin:'0 30px 0'}} className='G-flex-column'>
            <p style={{
                color: color,
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight: lineHeight,
                fontWeight: fontWeight
            }}>{description}</p>
        </div>
    </div>

};

export default TypographyList;