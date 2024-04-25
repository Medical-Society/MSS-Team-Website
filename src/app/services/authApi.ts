import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/admins/login',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {useLoginMutation} = authApi; 

export default authApi;