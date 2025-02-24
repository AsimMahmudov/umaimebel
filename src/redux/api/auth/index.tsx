import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProfileUser: build.query<AUTH.GetUserResponse, AUTH.GetUserRequest>({
      query: () => ({
        url: "/user-profiles/",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    postLoginUser: build.mutation({
      query: (data) => ({
        url: `/login/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    postRegisterUser: build.mutation({
      query: (data) => ({
        url: `/register/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetProfileUserQuery,
  usePostLoginUserMutation,
  usePostRegisterUserMutation,
} = api;
