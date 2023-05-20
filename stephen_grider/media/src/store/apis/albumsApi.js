import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
  reducerPath: 'albums',
  // Pre-configured version of 'fetch'
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: 'albums', // will be joined together with the baseUrl
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});
