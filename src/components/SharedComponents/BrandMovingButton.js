import styled from 'styled-components';
import Arrow from '../../assets/MagazineDetailPageAssets/Arrow.png';
import Logo from '../../assets/MagazineDetailPageAssets/Logo.png';

const BrandMovingButton = () => {
  return (
    <BrandHome>
      <BrandInfoWrapper>
        <BrandLogo src={Logo} />
        <TextWrapper>
          <BrandName>{`톤 28 (TOUN 28)`}</BrandName>
          <BrandDetail>
            플라스틱을 줄여 동물들을 살리는, 친환경 바를거리
          </BrandDetail>
        </TextWrapper>
      </BrandInfoWrapper>

      <BrandButton>
        <ButtonText>브랜드 홈 방문하기</ButtonText>
        <BrandArrow src={Arrow} />
      </BrandButton>
    </BrandHome>
  );
};

export default BrandMovingButton;

const BrandHome = styled.div`
  position: relative;
  width: 1200px;
  height: 132px;

  margin-top: 80px;
  margin-bottom: 156px;

  background: #fafafa;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
`;
const BrandInfoWrapper = styled.div`
  position: relative;
  margin-bottom: 72px;
`;

const BrandLogo = styled.img`
  margin: 20px 32px 0px 32px;
  position: absolute;
`;

const TextWrapper = styled.div`
  position: absolute;
  align-items: column;
  width: 683px;
  left: 160px;
`;

const BrandName = styled.div`
  font-weight: 700;
  font-size: 28px;
  height: 40px;
  margin-top: 26px;
`;

const BrandDetail = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 26px;
  height: 36px;
`;

const ButtonText = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 13px 21.01px 13px 21.1px;
`;

const BrandArrow = styled.img`
  margin: 15.94px 21.01px 14.83px 30.77px;
`;

const BrandButton = styled.div`
  width: 240px;
  height: 54px;
  position: absolute;
  top: 52px;
  left: 935px;
  border-radius: 4px;
  border: 1px;
  border-style: solid;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;