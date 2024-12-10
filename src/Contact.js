import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

  const {isAuthenticated, user}= useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading "> contacts </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0698604121394!2d100.59509607485285!3d13.592543986782912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a74a91f3a989%3A0xa49c82b4c86422c1!2sRacha%20Market!5e0!3m2!1sen!2sin!4v1733299417071!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xqakndrk" method="POST" className="contact-inputs">
          <input text="text" placeholder="username" value={isAuthenticated ? user.name : ""} name="username" required autoComplete="off"/>
          <input text="email" name=" email" value={isAuthenticated ? user.email : ""}  placeholder="email" required autoComplete="off" />
         <textarea placeholder="Enter your message" name="Message"  cols="30"rows="10" required autoComplete="off"></textarea>
         <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
};

export default Contact;
 