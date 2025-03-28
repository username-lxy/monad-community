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
