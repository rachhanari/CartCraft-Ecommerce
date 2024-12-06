import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button"

const ListView = ({ products=[]}) => {


    return (
        <Wrapper className="section">
            <div className="container grid">
                {
                    products.map((curEle) => {
                        const { id, name, image, price, description } = curEle;
                        return (
                            <div className="card grid grid-two-column">
                                <figure>
                                    <img src={image} alt={name} />
                                </figure>

                                <div className="card-data">
                                    <h3>{name}</h3>
                                    <p><FormatPrice price={price} /></p>

                                    <p>{description.slice(0, 80)}....</p>

                                    <NavLink to={`/singleproduct/${id}`}>
                                        <Button className="btn">
                                            Read More
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </Wrapper>
    );
};


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    display: grid;
    gap: 3rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.1);
    }

    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 22rem;
      border-radius: 1rem;
      transition: all 0.3s ease-in-out;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .card-data {
      padding: 2rem;

      h3 {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: 1rem;
        text-transform: capitalize;
      }

      p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.textLight};
        margin-bottom: 1.5rem;
      }

      .card-data--price {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.helper};
        margin-bottom: 1rem;
        font-weight: bold;
      }
    }

    .btn {
      margin-top: 2rem;
      padding: 1rem 2.5rem;
      font-size: 1.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 0.5rem;
      text-transform: uppercase;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;


export default ListView;
