import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from '../type/product'

export const productAPI = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
	tagTypes: ['Product'],
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], null>({
			query: () => ({
				url: '/products',
			}),
			providesTags: (result) => ['Product'],
		}),
	}),
})
