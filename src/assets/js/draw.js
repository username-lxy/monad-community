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
  console.log('提交建议:', { twitter, suggestion });
  return serviceAxios({
    url: "/suggestions",
    method: "post",
    data
  }).catch(error => {
    console.error('提交建议失败:', error);
    throw error;
  });
};

// 获取所有建议
export const get_sggestions = () => {
  return serviceAxios({
    url: "/suggestions",
  });
};