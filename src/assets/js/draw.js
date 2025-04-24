import serviceAxios from "@/utils/request.js";

export const getImg = (params) => {
  return serviceAxios({
    url: "/api/v1/cdntoken",
    params: {
      object_name: params,
      bucket_name: "monadshow",
    },
  });
};
// export const login = (data) => {
//   return serviceAxios({
//     url: "/api/user/login",
//     method: "post",
//     data,
//   });
// };
// 提交建议
export const post_sggestions = (data) => {
  return serviceAxios({
    url: "/suggestions",
    method: "post",
    data
  }).catch(error => {
    throw error;
  });
};

// 获取所有建议
export const get_sggestions = () => {
  return serviceAxios({
    url: "/suggestions",
  });
};

// 获取建议者列表
export const get_contributors = () => {
  return serviceAxios({
    url: "/contributors",
  });
};

// X登录
export const post_login = (firebaseToken) => {
  return serviceAxios({
    url: "/auth/firebase",
    method: "post",
    data: { firebaseToken: firebaseToken }
  });
};

// 获取所有nft
export const get_all_nft = () => {
  return serviceAxios({
    url: "/nft-data",
  });
};

// 获取home页面的nft
export const get_home_nft = () => {
  return serviceAxios({
    url: "/home_nft",
  });
};

// 获取所有视频
export const get_all_videos = () => {
  return serviceAxios({
    url: "/videos",
  });
};

// 获取所有贡献者
export const get_all_succ = () => {
  return serviceAxios({
    url: "/artists",
  });
};

// 获取所有艺术作品
export const get_all_artists = () => {
  return serviceAxios({
    url: "/artworks/list-with-artists",
  });
};

// 获取home底部艺术图
export const get_home_artists = () => {
  return serviceAxios({
    url: "/home-artists",
  });
};