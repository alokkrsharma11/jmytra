import React from 'react'

const PageLayout = ({title, data}) => {

  return (
    <>
      <div>
        <h1 className='h1'>{title}</h1>
      </div>
      <table style={{width:'100%'}}>
        <thead>
          <tr  style={{width:'100%'}}>
              <td style={{width:'100%'}}>
                   <div className='h5'>{data}</div>
              </td>
          </tr>
        </thead>
      </table>


    </>
  );
}

export default PageLayout;