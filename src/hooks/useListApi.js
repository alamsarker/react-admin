import { useSelector, useDispatch } from 'react-redux';
import {
  callApi,
  selectApi
} from '../reducers/apiSlice'

const useListApi = ({operationId}) => {

  const { loading, list = {
    data: [],
    page: 5,
    total_pages: 1
  }} = useSelector(selectApi)

  const dispatch = useDispatch()

  return {
    page: list.page,
    totalPages: list.total_pages,
    items: list.data,
    loading,
    goToNextpage: (page) => {
      if( page > 0) {
        console.log('page -> ', page)
        dispatch(callApi({
          operationId,
          output: 'list',
          parameters: {
            page
          }
        }))
      }
    }
  }
}

export default useListApi
