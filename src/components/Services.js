import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <ServiceContainer>
      <div className="container">
        <div className="grid">
          {/* First Service */}
          <div className="services-1">
            <TbTruckDelivery className="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>

          {/* Second Service */}
          <div className="services-2">
            <div className="services-column-2">
              <MdOutlineSecurity className="icon" />
              <h3>Non-contact Shipping</h3>
            </div>
            <div className="services-column-2">
              <GiReceiveMoney className="icon" />
              <h3>Money-back Guaranteed</h3>
            </div>
          </div>

          {/* Third Service */}
          <div className="services-3">
            <RiSecurePaymentLine className="icon" />
            <h3>Super Secure Payment System</h3>
          </div>
        </div>
      </div>
    </ServiceContainer>
  );
};

const ServiceContainer = styled.section`
  padding: 9rem 0;
  background-color: #f9f9f9;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4.8rem;
    align-items: center;


    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .services-1,
  .services-3 {
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
   background-color: #F6F8FA;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
      
      cursor: pointer;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.8rem;
      color: #333;
    }

    .icon {
      font-size: 4rem;
      color: #007bff;
    }
  }

  .services-2 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .services-column-2 {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem 2rem;
      border: 1px solid #ddd;
      border-radius: 1rem;
      background-color: #F6F8FA;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
      }

      .icon {
        font-size: 3.5rem;
        color: #007bff;
      }

      h3 {
        font-size: 1.6rem;
        color: #333;
      }
    }
  }
`;

export default Services;
