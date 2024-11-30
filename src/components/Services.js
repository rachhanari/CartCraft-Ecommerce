import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServiceContainer>
      <div className="container">
        <div className="grid grid-three-column">
          {/* Service Card 1 */}
          <div className="services-1">
            <div className="icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and on time.</p>
          </div>

          {/* Service Card 2 */}
          <div className="services-2">
            <div className="icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Safe and secure payment options for peace of mind.</p>
          </div>

          {/* Service Card 3 */}
          <div className="services-3">
            <div className="icon">⭐</div>
            <h3>Quality Products</h3>
            <p>We ensure top-notch quality for all our products.</p>
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
    cursor: pointer;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4.8rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .services-1,
  .services-2,
  .services-3 {
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.8rem;
      color: #333;
    }

    p {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: #555;
      text-align: center;
    }

    .icon {
      font-size: 4rem;
      color: #007bff;
    }
  }
`;

export default Services;
