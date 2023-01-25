import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
