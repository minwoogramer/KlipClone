import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components"

const Wrapper = styled.div`
     background-color:#fff;
         max-width: 100%;
         justify-content:center;
         border-bottom: 1px solid gray;
`
const Nav = styled.nav`
   display:flex;
         justify-content:space-between;
         height: 60px;
         max-width:60%;
         padding:0 20rem;
         font-weight:bold;
         align-items: center;
         transition: top .2s ease-in-out;
         a{
           
         font-size: 14px;
         line-height: 1.5;
         font-family: sans-serif;
         font-weight: 600px;
          color: #333;
          padding:15px 15px;
          text-decoration:none;
         }
`


export default function NavBar(){

  
    return(
              <Wrapper>
              <Nav >
                <h1>
                  <Link href="/">
                      <a >
                          Kakao
                          </a>
                  </Link></h1>
                  <span>
                  <Link href="/coins">
                      <a >
                          Coinlist
                          </a>
                   </Link>
                   <Link href="/login">
                      <a >
                          Login
                          </a>
                   </Link>
                   <Link href="/wallet">
                      <a >
                         Wallet
                          </a>
                   </Link>
                   </span>
                   </Nav>
                      
       
              </Wrapper>
           
      
    );

}