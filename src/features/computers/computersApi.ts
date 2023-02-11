import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl, EndPoints } from 'api'

export interface Computer {
  id: number,
  image: {
    src: string;
    alt: string;
  };
  name: string;
  price: string | number;
  stock: number;
  reviewsCount: number;
  board: string;
  videocard: string;
  procGen: string;
  styling: string;
}

export const computersApi = createApi({
  reducerPath: 'computers',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints(build) {
    return {
      getComputers: build.query<Computer[], void>({
        query: () => EndPoints.COMPUTERS
      })
    }
  },
})

export const { useGetComputersQuery } = computersApi