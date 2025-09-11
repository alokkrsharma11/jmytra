import React from 'react'

const PageLayout = ({title, data, w, h}) => {

  return (
    <>
      <div>
        <h1 className='h1'>{title}</h1>
      </div>
      <table style={{width:'100%'}}>
          <tr  style={{width:'100%'}}>
              <td style={{width:'100%'}}>
                   <div className='h3'>{data}</div>
              </td>
          </tr>
      </table>


    </>
  );
}

export default PageLayout;