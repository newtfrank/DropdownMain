import React from "react";
import {
  ServicesWrapper,
  ServiceTitle,
  ServicesContainer,
  ContentWrapper,
  ContentTitle,
  ContentImage,
  Image,
  ContentDetails,
  ContentDetailText,
  ContentDetailServices,
  ContentDetailButton,
  DetailButton,
  ServicesContentWrapper,
  ContentDetailOButton,
  DetailOButton,
} from "./ServiceStyle";
const ServicesSection = ({ serviceData }) => {
  return (
    <ServicesWrapper>
      <ServiceTitle>Services</ServiceTitle>
      <ServicesContainer>
        {serviceData.map((data, index) => {
          return (
            <ContentWrapper key={data.id}>
              <ContentTitle>{data.title}</ContentTitle>

              <ContentImage background={data.background} type={data.type}>
                <Image src={data.Image} type={data.type} />
              </ContentImage>
              <ContentDetails type={data.type}>
                <ContentDetailText type={data.type}>
                  {data.text}
                </ContentDetailText>
                <ServicesContentWrapper>
                  {data.services.map((service, index) => {
                    return (
                      <ContentDetailServices key={index}>
                        {service.serviceOffer}
                      </ContentDetailServices>
                    );
                  })}
                  <ContentDetailButton>
                    <DetailButton>{data.buttonText}</DetailButton>
                  </ContentDetailButton>
                </ServicesContentWrapper>
              </ContentDetails>
            </ContentWrapper>
          );
        })}
        <ContentDetailOButton>
          <DetailOButton>Start Now</DetailOButton>
        </ContentDetailOButton>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export  {ServicesSection};
