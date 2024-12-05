import React from 'react';
import styled from 'styled-components';

const MyImage = ({ imgs }) => {
  // Check if imgs is defined and an array
  if (!Array.isArray(imgs) || imgs.length === 0) {
    return <p>No images available</p>; 
  }

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curEle, index) => (
          <figure key={index}>
            <img
              src={curEle.url}
              alt={curEle.filename}
              className="box-image--style"
            />
          </figure>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default MyImage;
