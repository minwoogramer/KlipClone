import type { NextPage } from 'next'
import styled from "styled-components"


const Section =styled.div`

 transform: translateY(0px);
 transition: transform 0.75s ease-in 0s;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background:ivory;
`
const SubTitle = styled.div`
    line-height: 20px;
 
`
const Title = styled.h3`
     max-width: 816px;
    min-height: auto;
    padding-top: 72px;
    margin: 0 auto 72px;
    text-align: center;
    font-family:sans-serif;
`



const Home: NextPage = () => {
  return (
   
        <Section>
      <SubTitle>AI/블록체인</SubTitle>
      <Title>내손안의 지갑, Klip</Title>
      <div>
        <strong>공유하기</strong>
        <ul>
          <li>
            카톡
          </li>
          <li>
            페이스북
          </li>
          <li>
            트위터
          </li>
          <li>
            링크
          </li>
        </ul>
      </div>
      </Section>

   
   
  )
}

export default Home
