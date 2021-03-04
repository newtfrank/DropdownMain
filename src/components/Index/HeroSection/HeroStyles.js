import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImageSmall from "../../../assets/backgroundIcons/Union.svg";
import bgImageBig from "../../../assets/backgroundIcons/BigUnion.svg";
export const HeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(249, 180, 40, 0.4) 0%,
    rgba(249, 180, 40, 0.2627) 32.81%,
    rgba(249, 180, 40, 0) 100%
  );
  margin-bottom: 80px;
  @media all and (min-width: 1000px){
    min-height: 1050px;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const BgWrap = styled.div`
  position: absolute;
  right: 0;
`;

export const BgImage = styled.div`
  background: url(${bgImageSmall}) no-repeat;
  height: 273px;
  width: 130px;

  @media all and (min-width: 768px) {
    background: url(${bgImageSmall}) no-repeat;
    background-size: contain;
    height: 501px;
    width: 240px;
    position: relative;
    top: 40px;
  }

  @media all and (min-width: 1056px) {
    background: url(${bgImageBig}) no-repeat;
    background-size: contain;
    height: 501.31px;
    width: 503.59px;
    top: 20px;
  }
`;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  left: 4vw;
  @media all and (min-width: 581px) {
    left: 11vw;
  }
  @media all and (min-width: 1000px) {
    left: 12vw;
  }
`;

export const Logo = styled.img`
  width: 95px;
  height: 95px;
  position: relative;
  left: 4vw;
  @media all and (min-width: 768px) {
    left: 20px;
    margin-top: 60px;
  }
  @media all and (min-width: 1000px) {
    width: 129px;
    height: 129px;
  }
`;

export const CompanyName = styled.span`
  color: #264d2d;
  font-weight: 600;
  font-size: 35px;
  text-align: center;
  margin-top: 13px;
  height: 35.66px;
  width: 144.94px;

  @media all and (min-width: 1000px) {
    width: 180px;
    height: 48px;
    font-size: 55px;
  }
`;

export const ContentSection = styled.div`
  position: relative;
  left: 7vw;

  @media all and (min-width: 581px) {
    left: 12vw;
  }
`;

export const Content = styled.h4`
  width: 290px;
  height: 193px;
  font-weight: 600;
  font-size: 33.66px;
  line-height: 43.16px;
  margin-top: 48px;
  @media all and (min-width: 581px) {
    width: 390px;

    height: 163px;
  }
  @media all and (min-width: 717px) {
    width: 617px;
  }
  @media all and (min-width: 768px) {
    height: 73px;
  }
  @media all and (min-width: 1000px) {
    font-size: 50px;
    height: 128px;
    width: 717px;
    line-height: 64px;
  }
`;

export const ContentSubText = styled.p`
  margin-top: 23px;
  font-weight: 400;
  font-style: italic;
  font-size: 18px;
  line-height: 23.98px;
  height: 18px;
  width: 290px;

  @media all and (min-width: 1000px) {
    font-size: 27px;
    width: 561px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 78px;
  text-align: center;

  @media all and (min-width: 768px) {
    text-align: left;
    position: relative;
    left: 11vw;
    margin-top: 90px;
  }
  @media all and (min-width: 1000px) {
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 19.46px;
  line-height: 26.51px;
  color: #ffffff;
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  padding: 16px 61px;
  border-radius: 2rem;
`;
