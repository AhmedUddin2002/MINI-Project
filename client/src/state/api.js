import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "IT",
    "CSE",
    "CSE_DS",
    "CSE_AIML",
    "CSE_IOT",
    "CIVIL",
    "MECH",
    "Faculty",
  ],
//   endpoints: (build) => ({
//     getUser: build.query({
//       query: (id) => `general/user/${id}`,
//       providesTags: ["User"],
//     }),
//     getProducts: build.query({
//       query: () => "client/products",
//       providesTags: ["Products"],
//     }),
//     getCustomers: build.query({
//       query: () => "client/customers",
//       providesTags: ["Customers"],
//     }),
//     getTransactions: build.query({
//       query: ({ page, pageSize, sort, search }) => ({
//         url: "client/transactions",
//         method: "GET",
//         params: { page, pageSize, sort, search },
//       }),
//       providesTags: ["Transactions"],
//     }),
//     getGeography: build.query({
//       query: () => "client/geography",
//       providesTags: ["Geography"],
//     }),
//     getSales: build.query({
//       query: () => "sales/sales",
//       providesTags: ["Sales"],
//     }),
//     getAdmins: build.query({
//       query: () => "management/admins",
//       providesTags: ["Admins"],
//     }),
//     getUserPerformance: build.query({
//       query: (id) => `management/performance/${id}`,
//       providesTags: ["Performance"],
//     }),
//     getDashboard: build.query({
//       query: () => "general/dashboard",
//       providesTags: ["Dashboard"],
//     }),
//   }),
endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getIt: build.query({
      query: () => "branch/it",
      providesTags: ["It"],
    }),
    getCse: build.query({
      query: () => "branch/cse",
      providesTags: ["Cse"],
    }),
    getCse_ds: build.query({
      query: () => "branch/cse_ds",
      providesTags: ["Cse_ds"],
    }),
    getCse_aiml: build.query({
      query: () => "branch/cse_aiml",
      providesTags: ["Cse_aiml"],
    }),
    getCse_iot: build.query({
      query: () => "branch/cse_iot",
      providesTags: ["Cse_iot"],
    }),
    getCivil: build.query({
      query: () => "branch/civil",
      providesTags: ["Civil"],
    }),
    getMech: build.query({
      query: () => "branch/mech",
      providesTags: ["Mech"],
    }),
    getFaculty: build.query({
      query: () => "management/Faculty",
      providesTags: ["Faculty"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetItQuery,
  useGetCseQuery,
  useGetCse_dsQuery,
  useGetCse_iotQuery,
  useGetCse_aimlQuery,
  useGetMechQuery,
  useGetFacultyQuery,
  useGetDashboardQuery,
} = api;