import {
  HigherCategory,
  Category,
  CategoryWrapper,
} from './ItemDetailPresenter';
import { Link } from 'react-router-dom';
import useChangeKorean from '../../hooks/useChangeKorean';
import { useNavigate } from 'react-router-dom';

const ItemDetailCategory = ({ title, product, productName }) => {
  var titleKorean = useChangeKorean(title);
  var titleProduct = useChangeKorean(product);

  const navigate = useNavigate();

  return (
    <>
      <CategoryWrapper>
        <Link to={`/${title}`}>
          <HigherCategory>{titleKorean}</HigherCategory>
        </Link>
        <HigherCategory>{'>'}</HigherCategory>
        <HigherCategory
          onClick={() => {
            navigate(-1);
          }}
        >
          {titleProduct}
        </HigherCategory>
        <HigherCategory>{'>'}</HigherCategory>
        <Category>{productName}</Category>
      </CategoryWrapper>
    </>
  );
};

export default ItemDetailCategory;
