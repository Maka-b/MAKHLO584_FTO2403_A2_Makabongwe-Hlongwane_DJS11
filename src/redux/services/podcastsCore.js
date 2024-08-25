// redux/PodCoreApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const PodCoreApi = createApi({
  reducerPath: 'PodCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://podcast-api.netlify.app',
  }),
  endpoints: (builder) => ({
    getAllPodcasts: builder.query({
      query: () => '',
      // Adjust the query endpoint as needed
    }),
    getShowInfo : builder.query({
      query : (podId)=>`/id/${podId}`
    }),
   
    // Define other endpoints here
  }),
});

export const { useGetAllPodcastsQuery, useGetShowInfoQuery, useGetShowsBySearchQuery } = PodCoreApi;
