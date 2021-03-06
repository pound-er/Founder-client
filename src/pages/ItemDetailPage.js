import styled, { css } from 'styled-components';
import Modal from '../components/ModalComponents/Modal';
import TopBar from '../components/TopBarComponents/TopBar';
import Weekly from '../assets/ProductCardAssets/Weekly.png';
import Monthly from '../assets/ProductCardAssets/Monthly.png';
import { useParams } from 'react-router-dom';
import ArrowWhite from '../assets/ItemDetailPageAssets/ArrowWhite.png';
import { WidthWrapper } from '../components/WidthWrapper';
import {
  Wrapper,
  ItemWrapper,
  ItemInfo,
  PurchaseButton,
  Line,
  Guide,
  PurchaseText,
  BoughtText,
  ReviewButton,
  ReviewText,
} from '../components/ItemDetailComponents/ItemDetailPresenter';
import { color, fontsize, fontWeight } from '../styles/theme';
import ItemReview from '../components/ItemDetailComponents/ItemReview';
import ItemDetailCategory from '../components/ItemDetailComponents/ItemDetailCategory';
import Item from '../components/ItemDetailComponents/Item';
import BrandMovingButton from '../components/SharedComponents/BrandMovingButton';
import ItemDetaildata from '../assets/json/ItemDetailPage.json';
import { useState, useEffect } from 'react';
import { fetchItemDetail } from '../API';

const ItemDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [itemDetailData, setItemDetailData] = useState(null);
  const itemData = ItemDetaildata;
  const params = useParams();
  const title = params.title;
  const product = params.product;
  const id = params.id;
  const [isSelected, setIsSelected] = useState(true);
  const [brand, setBrand] = useState(true);

  useEffect(() => {
    fetchItemDetail({ setItemDetailData, id });
  }, []);

  if (!itemDetailData) return null;
  console.log(itemDetailData);
  return (
    <>
      <TopBar />
      <WidthWrapper>
        <Wrapper>
          <ItemDetailCategory
            title={title}
            product={product}
            productName={itemDetailData.product.product_name}
          />
          <ItemWrapper>
            <StickerdImage>
              <Img src={itemDetailData.product.product_img} />
              {itemDetailData.product.delivery_cycle === 'weekly' ? (
                <Sticker src={Weekly} />
              ) : (
                <Sticker src={Monthly} />
              )}
            </StickerdImage>
            <ItemInfo>
              <Item product={product} data={itemDetailData.product} />

              <Line />
              <Guide>
                ?????? ????????? ????????? ????????? ??????????????? ?????? ???????????? ??????????????????.
              </Guide>
              <a href={itemDetailData.product.purchase_link}>
                <PurchaseButton>
                  <PurchaseText>???????????? ?????????</PurchaseText>
                  <img src={ArrowWhite} />
                </PurchaseButton>
              </a>
              <BoughtText>?????? ????????? ????????????????</BoughtText>
              <ReviewButton>
                <ReviewText
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  ?????? ????????????
                </ReviewText>
                {modalOpen && (
                  <Modal setOpenModal={setModalOpen} type="WriterModal" />
                )}
              </ReviewButton>
            </ItemInfo>
          </ItemWrapper>
          {itemDetailData.brand != null && (
            <BrandMovingButton
              data={itemDetailData.brand}
              top="0px"
              left="260px"
            />
          )}
          <MenuBarContainer>
            <MenuBar
              onClick={() => setIsSelected(!isSelected)}
              isSelected={isSelected}
            >
              ????????????
            </MenuBar>
            <MenuBar
              onClick={() => setIsSelected(!isSelected)}
              left="28px"
              isSelected={!isSelected}
            >
              ?????? ??????
            </MenuBar>
          </MenuBarContainer>
          {isSelected ? (
            <DetailImage
              src={itemDetailData.product.product_img_detail}
              loading="lazy"
            />
          ) : (
            <ItemReview id={id} />
          )}
        </Wrapper>
      </WidthWrapper>
    </>
  );
};

export default ItemDetailPage;

const MenuBar = styled.span`
  margin-left: ${(props) => props.left || '632px'};
  cursor: pointer;
  font-weight: ${fontWeight[2]};
  font-size: ${fontsize[3]};
  line-height: 36px;
  ${(props) =>
    props.isSelected
      ? css`
          color: ${color.main[2]};
          border-bottom: 3px solid;
        `
      : `
        color: ${color.grey[3]};`}
`;

const MenuBarContainer = styled.div`
  margin-top: 60px;
`;
const StickerdImage = styled.div`
  width: 480px;
  height: 480px;
  margin-right: 72.4px;
  position: relative;
`;

const Img = styled.img`
  width: 480px;
  height: 480px;
`;

const Sticker = styled.img`
  position: absolute;
  top: 19.14px;
  right: 31.75px;
`;

const DetailImage = styled.img`
  width: 1440px;
  height: auto;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
`;
