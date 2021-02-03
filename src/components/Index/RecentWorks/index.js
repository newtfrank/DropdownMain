import React from "react";
import ArrowTo from "../../../assets/Icons/ArrowTo.svg";
import {
  WorkContainer,
  WorkWrapper,
  ContentContainer,
  ContentWrapper,
  ImageWrapper,
  Image,
  LinkWrapper,
  LinkTo,
  Arrow,
  WorkTitle,
} from "./workStyles";
const RecentWork = ({recentData}) => {
  return (
    <WorkContainer>
    <WorkTitle>Recent works</WorkTitle>
      <WorkWrapper>
    {recentData.map((data, index)=>{
        return(
            <ContentContainer colorSet={data.color} area={data.area} key={data.id}>
            <ContentWrapper area={data.area}>
            <ImageWrapper>
            <Image area={data.area} src={data.Image}/>
          </ImageWrapper>
          <LinkWrapper area={data.area}>
            <LinkTo >
              {data.name} <Arrow src={ArrowTo}/>
            </LinkTo>
          </LinkWrapper>
            </ContentWrapper>
          
        </ContentContainer>
        )
    })}
        
      </WorkWrapper>
    </WorkContainer>
  );
};

export default RecentWork;
