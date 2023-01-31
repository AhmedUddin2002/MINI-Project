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
    "Overviews",
    "Sales",
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
    getBranch: build.query({
      query: () => `branch/cse_ds`,
      providesTags: ["Branch"],
    }),
    getIt: build.query({
      query: () => "branch/it",
      providesTags: ["IT"],
    }),
    getCse: build.query({
      query: () => "branch/cse",
      providesTags: ["CSE"],
    }),
    getDs: build.query({
      query: () => "branch/cse_ds",
      providesTags: ["CSE_DS"],
    }),
    getAiml: build.query({
      query: () => "branch/cse_aiml",
      providesTags: ["CSE_AIML"],
    }),
    getIot: build.query({
      query: () => "branch/cse_iot",
      providesTags: ["CSE_IOT"],
    }),
    getCivil: build.query({
      query: () => "branch/civil",
      providesTags: ["CIVIL"],
    }),
    getMech: build.query({
      query: () => "branch/mech",
      providesTags: ["MECH"],
    }),
    getFaculty: build.query({
      query: () => "management/Faculty",
      providesTags: ["Faculty"],
    }),
    getOverviews: build.query({
      query: () => "overviews/overviews",
      providesTags: ["Overviews"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetBranchQuery,
  useGetItQuery,
  useGetCseQuery,
  useGetDsQuery,
  useGetIotQuery,
  useGetAimlQuery,
  useGetCivilQuery,
  useGetMechQuery,
  useGetFacultyQuery,
  useGetDashboardQuery,
  useGetOverviewsQuery,
  useGetSalesQuery,
} = api;