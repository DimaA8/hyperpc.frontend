import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl } from 'api/BaseUrl'
import { EndPoints } from 'api/EndPoints'

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
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
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