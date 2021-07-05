import React from 'react'
import Loader from './Loader'

const Details = ({loading, data}) =>
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
    </>
  )

export default Details
