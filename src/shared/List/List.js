import React from 'react'

import {
  CDataTable,
  CPagination
} from '@coreui/react'

import Card from './Card'
import useListApi from '../../hooks/useListApi'

const List = props => {
  const {
    page,
    totalPages,
    items,
    loading,
    goToNextpage
  } = useListApi(props.config)

  const body = <>
    <CDataTable {...{
      ...props.config,
      items,
      loading
      }}
      hover
      striped
    />
    <CPagination
      activePage={page}
      onActivePageChange={goToNextpage}
      pages={totalPages}
      doubleArrows={false}
      align="end"
    />
  </>

  return <Card {...{
    ...props,
    body
  }} />
}

export default List;
