import React from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
import {useTypography} from "./useTypography";
import TypographyList from "./typography-list";


const Typography = () => {

    const [typographyList] = useTypography()

    return <>
        <NavBar name='Typography'/>

        <div className='P-typography-info-content G-justify-center'>
            <div className='P-typography-info'>
                {typographyList.map(item => (
                    <TypographyList
                        title={item.title}
                        description={item.description}
                        color={item.color}
                        fontSize={item.fontSize}
                        fontFamily={item.fontFamily}
                        lineHeight={item.lineHeight}
                        fontWeight={item.fontWeight}
                        id={item.id}
                    />
                ))}

            </div>
        </div>

    </>
};

export default Typography;