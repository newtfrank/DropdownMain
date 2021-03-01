import styled from "styled-components";



export const Wrapper = styled.section``;

export const Container = styled.div``;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin: auto;
`;

export const TabsContent = styled.div`
  width: 175px;
  height: 23px;
  background-color: white;
  cursor: pointer;
  outline: none;
  border-bottom: ${({ active }) =>
    active ? "2px solid green" : "2px solid white"};
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  &:hover {
  }
`;

export const ClientContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
margin-bottom:50px;
  display: ${({ activeState }) => (activeState ? "block" : "none")};
  @media all and (max-width: 280px) {
    margin-top: 40px;
  }
`;

export const ClientContent = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 60px;
  height: 100%;

  text-align: center;
  .image {
    width: 350.41px;
    height: 380px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    object-fit: cover;
    @media all and (max-width: 280px) {
      width: 240px;
      height: 172px;
    }
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 20.57px;
  color: #151515;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 23.0536px;
  line-height: 31px;
  letter-spacing: -0.01em;
  color: #264d2d;
  margin-bottom:8px;
`;

export const ContentButtonWrap = styled.div`
  background: #fba633;
  width: 265px;
  margin: auto;
  padding: 16px 57px;
  border-radius: 3rem;
  display:flex;
`;

export const ButtonText = styled.a`
  text-decoration: none;
  font-size: 19.3902px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ButtonIcon = styled.div`
  font-size: 19.3902px;
  color: #ffffff;
  margin-left: 20px;
`;
export const OpenContent = styled.div`
  width: 100%;

  border-top: 0.949818px solid #ababab;
`;

export const ContentWrap = styled.div`
margin-top:10px;
margin-bottom: 10px;
`;

export const ContentText = styled.h4`
  width: 92%;
  height: 34px;
  font-weight: 600;
  font-size: 21px;
  line-height: 28px;
  color: #151515;
  display:flex;
  margin:auto;
 
`;

export const ContentSubText = styled.p`
  font-weight: 500px;
  font-size: 10px;
  line-height: 14px;
  width: 92%;
  margin:auto;
`;

export const ButtonContent = styled.div`
  display: flex;
  font-size: 24.79px;
  align-items: center;
  width:92%;
  margin:auto;
`;

export const BtnText = styled.div`
  font-size: 15.79px;
  font-weight: 400;
  color: #151515;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  margin-left: 10px;
`;

