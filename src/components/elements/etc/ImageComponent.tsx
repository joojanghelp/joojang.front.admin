import React from 'react';
import styled from 'styled-components';

interface initialProps  {
    image_url: string;
};

const Image = styled.img`
    top-valign: 10px;
    width: 75px;
    border: 0px;
    margin: 1rem;
`;

function imageBox({image_url} : initialProps) {
    return (
        <>
            <Image src={image_url}/>
        </>
    );
}

export default imageBox;