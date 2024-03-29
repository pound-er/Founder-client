import axios from 'axios';

export const axiosBasic = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export const fetchMagazineDetail = async ({ setMagazineDetaildata, id }) => {
  try {
    setMagazineDetaildata(null);
    const response = await axiosBasic.get(`api/magazine/${id}`);
    setMagazineDetaildata(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryIntro = async ({ setCategoryIntroData, title }) => {
  try {
    setCategoryIntroData(null);
    const response = await axiosBasic.get(`api/category/${title}`);
    setCategoryIntroData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchMagazine = async (setMagazineData) => {
  try {
    setMagazineData(null);
    const response = await axiosBasic.get(`api/magazine`);
    setMagazineData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchItemDetail = async ({ setItemDetailData, id }) => {
  try {
    setItemDetailData(null);
    const response = await axiosBasic.get(`api/product/${id}`);
    setItemDetailData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchItemReview = async ({ setItemReview, id }) => {
  try {
    setItemReview(null);
    const response = await axiosBasic.get(`api/product/${id}/review`);
    setItemReview(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchBrandDetail = async ({ setBrandDetailData, id }) => {
  try {
    setBrandDetailData(null);
    const response = await axiosBasic.get(`api/brand/${id}`);
    setBrandDetailData(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserInfo = async ({ setuserData, access }) => {
  try {
    setuserData(null);
    const response = await axiosBasic.get(`api/user`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    setuserData(response.data);
  } catch (error) {
    console.log(error);
  }
};

//필요한 API만들기
/*export const PersonalInfo = async (token) =>
    await API.get('/mypage', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  export const newReview = async (data) =>
    await axios.post('/item/review', data);
  
  //다른 파일에서 사용예시
  /*const myPage = async () => {
    try {
      const PersonalInfoRes = await PersonalInfo(token);*/
