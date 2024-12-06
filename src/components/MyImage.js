import React, { useState } from 'react';
import styled from 'styled-components';

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="side-photos">
        {imgs.map((curEle, index) => (
          <figure key={index}>
            <img
              src={curEle.url}
              alt={curEle.filename}
              className="side-photo"
              onClick={() => setMainImage(curEle)} 
            />
          </figure>
        ))}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 1rem;

  .main-screen {
    display: grid;
    place-items: center;

    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .side-photos {
    display: flex;
    flex-direction: column; /* Default to vertical layout */
    gap: 1rem;

    figure {
      margin: 0;
    }

    img {
      max-width: 100%;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      border: 2px solid transparent;
      transition: border-color 0.3s;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr; /* Stack the main and side images in a column on small screens */
    
    .side-photos {
      flex-direction: row; /* Horizontal layout for mobile */
      overflow-x: auto;
    }
  }
`;

export default MyImage;
