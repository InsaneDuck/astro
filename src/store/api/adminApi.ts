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
  RegistrationApplicationResponse,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";

const adminApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.query<AddAdminResponse, AddAdmin>({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().addAdmin(arg);
        return { data };
      },
    }),
    addModToCommunity: builder.query<
      AddModToCommunityResponse,
      AddModToCommunity
    >({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().addModToCommunity(arg);
        return { data };
      },
    }),
    approveRegistrationApplication: builder.query<
      RegistrationApplicationResponse,
      ApproveRegistrationApplication
    >({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().approveRegistrationApplication(arg);
        return { data };
      },
    }),
    banFromCommunity: builder.query<BanFromCommunityResponse, BanFromCommunity>(
      {
        queryFn: async (arg) => {
          const data = await getLemmyHttp().banFromCommunity(arg);
          return { data };
        },
      },
    ),
    banPerson: builder.query<BanPersonResponse, BanPerson>({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().banPerson(arg);
        return { data };
      },
    }),
    blockCommunity: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().banFromCommunity(arg);
        return { data };
      },
    }),
    blockPerson: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().banFromCommunity(arg);
        return { data };
      },
    }),
    changePassword: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().banFromCommunity(arg);
        return { data };
      },
    }),
    createComment: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().banFromCommunity(arg);
        return { data };
      },
    }),
    createCommentReport: builder.query<
      BanFromCommunityResponse,
      BanFromCommunity
    >({
      queryFn: async (arg) => {
        const data = await getLemmyHttp().banFromCommunity(arg);
        return { data };
      },
    }),
    createPost: builder.query<BanFromCommunityResponse, BanFromCommunity>({
      query: () => "/post",
    }),
  }),
});
