import React from 'react'
import {
  CButton
} from '@coreui/react'
import Loader from './Loader'

const Details = ({loading, data, backUrl}) =>
  loading ? <Loader/> : (
    <>
      {
        data.length === 0 ? <div>Do Data found</div> : (
          <table className="table table-striped table-hover">
            <tbody>
              {
                data.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td><strong>{value}</strong></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
      <CButton href={backUrl} type="button" color="light">Cancel</CButton>
    </>
  )

export default Details
