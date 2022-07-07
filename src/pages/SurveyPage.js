import styled from "styled-components";
import Survey from "../components/SurveyComponents/Survey";
import { WidthWrapper } from "../components/WidthWrapper";
import Founder from '../assets/SharedAssets/Founder.png';
import ChatBot from '../assets/SurveyAssets/Chatbot.png';

const SurveyPage = () =>{

    return(
        <>
        <WidthWrapper>
        <Wrapper>
        <Image src={Founder}/>
        <Image src={ChatBot} left ="401.37px" width="201.97px"/>
        <Survey/>
        </Wrapper>
        </WidthWrapper>
        </>
    );


}

export default SurveyPage;

const Image = styled.img`
  position : absolute;
  left: ${(props)=>props.left || "120px"};
  top: 51px;
  width: ${(props)=>props.width || "257px"};
  height: 42px;
  padding-bottom : 68px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
  position : relative;
`;