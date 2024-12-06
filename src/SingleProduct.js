import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/Productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  const {
    id: storeId,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  if (isSingleLoading) {
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container clasname="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage imgs={image} />
          </div>

          <div className="product_data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <p className="product-data-price product-data-real-price">
              Deal of the Day:
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="icons">
              <div className="product-data-warranty">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-data-warranty">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-data-warranty">
                <MdSecurity className="warranty-icon" />
                <p>2 Year warranty</p>
              </div>
            </div>
            <hr />
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"} </span>
              </p>

              <p>
                ID: <span>{id}</span>
              </p>

              <p>
                Brand: <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 6rem 2rem;
  }

  .grid {
    display: grid;
    gap: 3rem;

    &.grid-two-column {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    background-color: #f9f9f9;
  }

  .icons {
    display: flex;
  }

  .product_data {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    hr {
      width: 100%;
      border: none;
      border-top: 1px solid #ddd;
      margin: 1.5rem 0;
      background-color: black; /* Optional background color for soft shadow */
      height: 2px; /* Thickness */
      border-radius: 4px; /* Smooth edges */
    }

    h2 {
      font-size: 2.8rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    .product-data-price {
      font-size: 1.8rem;

      del {
        color: ${({ theme }) => theme.colors.textSecondary};
        margin-right: 1rem;
      }
    }

    .product-data-real-price {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.btn};
    }

    .product-data-warranty {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.1rem;
      font-size: 1.6rem;
      margin: 2rem 1rem;

      .warranty-icon {
        background-color: ${({ theme }) => theme.colors.bgLight};
        border-radius: 50%;
        width: 4.5rem;
        height: 4.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.btn};
        padding: 1rem;
      }

      p {
        margin-top: 0.5rem;
        text-align: left;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .product_data {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.4rem;
      }

      .product-data-price {
        font-size: 1.6rem;
      }

      .product-data-real-price {
        font-size: 1.8rem;
      }

      .product-data-warranty {
        font-size: 1.4rem;
        gap: 1rem;

        .warranty-icon {
          width: 4rem;
          height: 4rem;
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export default SingleProduct;
