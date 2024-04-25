import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const DoctorsApi = createApi({
    reducerPath: 'DoctorsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getAllDoctors: builder.query({
            query: ({page, limit} : {page: number, limit: number}) => {
                const token = Cookies.get('token');
                return {
                    url: `doctors?page=${page}&limit=${limit}`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            }
        }),
        getPendingDoctors: builder.query({
            query: ({page, limit} : {page: number, limit: number}) => {
                const token = Cookies.get('token');
                return {
                    url: `doctors/?searchTerm=PENDING&page=${page}&limit=${limit}`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            }
        }),
        getAcceptedDoctors: builder.query({
            query: ({page, limit} : {page: number, limit: number}) => {
                const token = Cookies.get('token');
                return {
                    url: `doctors/?searchTerm=ACCEPTED&page=${page}&limit=${limit}`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            }
        }),
        getRejectedDoctors: builder.query({
            query: ({page, limit} : {page: number, limit: number}) => {
                const token = Cookies.get('token');
                return {
                    url: `doctors/?searchTerm=REJECTED&page=${page}&limit=${limit}`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            }
        }),
        getDoctorById: builder.query({
            query: (id: string) => {
                const token = Cookies.get('token');
                return {
                    url: `doctors/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            }
        }),
    }),
});

export const {useGetAllDoctorsQuery, useGetPendingDoctorsQuery, useGetAcceptedDoctorsQuery, useGetRejectedDoctorsQuery, useGetDoctorByIdQuery} = DoctorsApi;

export default DoctorsApi;