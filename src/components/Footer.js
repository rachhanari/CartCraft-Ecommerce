import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </div>

      <footer>
        <div className="grid grid-four-column">
          <div className="footer-about">
            <h3>TrendCart Store</h3>
            <p>Are you looking for shopping-related content? I can help with tips, promotional ideas, or product descriptions tailored to your needs. Let me know the specifics!</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="SUBSCRIBE" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <a href='https://discord.com/channels/@me'>
              <div>
                <FaDiscord className="icons" />
              </div>
              </a>

              <a href='https://www.instagram.com/rachha_narendra_/?hl=en'>
              <div>
                <FaInstagram className="icons" />
              </div>
              </a>

              <a href='https://github.com/rachhanari'>
                <div>
                  <FaGithub className="icons" />
                </div>
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 123456789</h3>
          </div>
        </div>

        
        <div className="footer-bottom--section">
        <hr />
          <div className="container grid grid-two-column">
            <p>© {new Date().getFullYear()} TrendCart Store | All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }

    footer {
        padding: 14rem 0 9rem 15rem;
        
        background-color: ${({ theme }) => theme.colors.footer_bg};

        h3 {
            color: ${({ theme }) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }

        p {
            color: ${({ theme }) => theme.colors.white};
        }

        .footer-social--icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.colors.white};
                transition: all 0.3s ease;

                .icons {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 2.4rem;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                &:hover {
                    background-color: ${({ theme }) => theme.colors.white};

                    .icons {
                        color: ${({ theme }) => theme.colors.footer_bg};
                    }
                }
            }
        }
    }

    .footer-bottom--section {
    padding-top: 4.8rem;

    hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
        width: 100vw;
        margin-left:-15rem;
    }
}

    @media (max-width: ${({ theme }) => theme.colors.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;

            .grid div:last-child {
                justify-self: center;
            }
        }

        footer {
            padding: 9rem 0 9rem 0;
        }
    }
`;

export default Footer;
