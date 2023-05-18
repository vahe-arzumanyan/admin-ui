import React from 'react';
import './style.scss';
import NavBar from "../../nav-bar";

const Typography = () => {
    return <>
        <NavBar name='Typography'/>

        <div className='P-typography-child'>
           <div className='P-typography-info'>
               import React from "react";

               <div>
                   <p className='P-typography-a'>Light Bootstrap Table Heading</p>
                   <p className='P-typography-b'>Created using Montserrat Font Family</p>
               </div>
               <ul className='G-flex-column P-header-title'>
                   <div className='G-flex'>
                       <li>Header 1</li>
                       <li className='G-h1'>The Life of LB Dashboard</li>
                   </div>
                   <div className='G-flex'>
                       <li>Header 2</li>
                       <li className='G-h2'>Created using Montserrat Font Family</li>
                   </div>
                   <div className='G-flex'>
                       <li>Header 3</li>
                       <li className='G-h3'>Created using Montserrat Font Family</li>
                   </div>
                   <div className='G-flex'>
                       <li>Header 4</li>
                       <li className='G-h4'>Created using Montserrat Font Family</li>
                   </div>
                   <div className='G-flex'>
                       <li>Header 5</li>
                       <li className='G-h5'>Created using Montserrat Font Family</li>
                   </div>
                   <div className='G-flex'>
                       <li>Header 6</li>
                       <li className='G-h6'>Created using Montserrat Font Family</li>
                   </div>
               </ul>
               {/*paragraph content*/}
               <div className='G-flex P-typography-paragraph-content' style={{backgroundColor: 'red'}}>
                   <p className='P-typography-paragraph'>Paragraph</p>
                   <div>
                       <p className='P-typography-paragraph-line-a'>I will be the leader of a company that ends up
                           being worth billions of dollars, because I got
                           the answers. I understand culture. I am the nucleus. I think that’s a responsibility
                           that I
                           have, to push possibilities, to show people, this is the level that things could be
                           at.</p>
                       <p className='P-typography-paragraph-line-b'>I will be the leader of a company that ends up
                           being worth billions of dollars, because I got
                           the answers. I understand culture. I am the nucleus. I think that’s a responsibility
                           that I
                           have, to push possibilities, to show people, this is the level that things could be
                           at.</p>
                   </div>
               </div>
               {/* north */}
               <div className='G-align-center P-quote'>
                   <p>Quote</p>
                   <p>-Noaa</p>
               </div>

           </div>
        </div>
    </>
};

export default Typography;