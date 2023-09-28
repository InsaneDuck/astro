import {
  AddAdmin,
  AddAdminResponse,
  AddModToCommunity,
  AddModToCommunityResponse,
  ApproveRegistrationApplication,
  BanFromCommunity,
  BanFromCommunityResponse,
  BanPerson,
  BanPersonResponse,
  ChangePassword,
  CommentReportResponse,
  CommentResponse,
  CreateComment,
  CreateCommentReport,
  LoginResponse,
  RegistrationApplicationResponse,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";
import { RootState } from "@/store/store";

const adminApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.query<AddAdminResponse, AddAdmin>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).addAdmin(arg);
        return { data };
      },
    }),
    addModToCommunity: builder.query<
      AddModToCommunityResponse,
      AddModToCommunity
    >({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).addModToCommunity(arg);
        return { data };
      },
    }),
    approveRegistrationApplication: builder.query<
      RegistrationApplicationResponse,
      ApproveRegistrationApplication
    >({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data =
          await getLemmyHttp(user).approveRegistrationApplication(arg);
        return { data };
      },
    }),
    banFromCommunity: builder.query<BanFromCommunityResponse, BanFromCommunity>(
      {
        queryFn: async (arg, { getState }) => {
          const user = (getState() as RootState).auth.currentUser;
          const data = await getLemmyHttp(user).banFromCommunity(arg);
          return { data };
        },
      },
    ),
    banPerson: builder.query<BanPersonResponse, BanPerson>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).banPerson(arg);
        return { data };
      },
    }),
    blockCommunity: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).banFromCommunity(arg);
        return { data };
      },
    }),
    blockPerson: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).banFromCommunity(arg);
        return { data };
      },
    }),
    changePassword: builder.query<LoginResponse, ChangePassword>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).changePassword(arg);
        return { data };
      },
    }),
    createComment: builder.query<CommentResponse, CreateComment>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).createComment(arg);
        return { data };
      },
    }),
    createCommentReport: builder.query<
      CommentReportResponse,
      CreateCommentReport
    >({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        const data = await getLemmyHttp(user).createCommentReport(arg);
        return { data };
      },
    }),

    createPost: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      query: () => "/post",
    }),
  }),
});
