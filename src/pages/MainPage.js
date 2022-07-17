import React, { useState } from 'react';
import FounderLogo from '../assets/MainPageAssets/logo.png';
import Banner from '../components/MainPageComponents/Banner';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import { Logo } from '../components/FounderLogo';
import { useRecoilState } from 'recoil';
import { loginState, surveyState } from '../recoil';
import data from '../assets/data.json';
import ProductCard from '../components/ProductCard';
import BrandCard from '../components/BrandCard';
import { Container, GridWrapper } from '../components/GridLayout';

const MainPage = () => {
  const title = 'Food';
  const results = data.filter((items) => items.itemType === title);
  const Title = [...new Set(results.map((items) => items.itemTitle))]; //백엔드에서는 title,subtitle data만 따로 전달함
  const subTitle = [...new Set(results.map((items) => items.subTitle))];

  return (
    <>
      <WidthWrapper>
        <Wrapper>
          <Logo src={FounderLogo} />
          <TopBar position={'sticky'} />
          <Banner />
          <Container>
            {subTitle.map((subTitle) => (
              <>
                <SubTitle>{subTitle}</SubTitle>
                {Title.map((title) => (
                  <>
                    <ItemTitle>{title}</ItemTitle>

                    <GridWrapper>
                      {results
                        .filter((items) => items.itemTitle === title)
                        .map(
                          (
                            { itemName, price, rating, custom, schedule },
                            i
                          ) => (
                            <ProductCard
                              itemName={itemName}
                              price={price}
                              rating={rating}
                              custom={custom}
                              schedule={schedule}
                              key={i}
                            />
                          )
                        )}
                    </GridWrapper>
                    <BrandsTitle>{title} 브랜드</BrandsTitle>
                    <BrandCardWrapper>
                      <BrandCard brandName={'밀앤데일리'} />
                    </BrandCardWrapper>
                  </>
                ))}
              </>
            ))}
          </Container>
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default MainPage;

const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  padding: 0px 120px 0px 120px;
  align-items: center;
`;

const SubTitle = styled.div`
  margin-top: 52px;
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

const ItemTitle = styled.div`
  margin-top: 4px;
  margin-bottom: 42.75px;
  color: black;
  font-size: 24px;
  font-weight: 800;
`;

const BrandsTitle = styled.div`
  margin-top: 120px;
  color: black;
  font-size: 28px;
  font-weight: bold;
`;

const BrandCardWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: row;
`;
