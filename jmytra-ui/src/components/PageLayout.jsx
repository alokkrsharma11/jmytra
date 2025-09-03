import React from 'react'

const PageLayout = ({title, data, image}) => {

  return (
    <>
      <div>
        <h1 className='h1'>{title}</h1>
      </div>
      <table style={{width:'100%'}}>
          <tr  style={{width:'100%'}}>
              <td style={{width:'50%'}}>
                   <div className='h3'>{data}</div>
              </td>
              <td style={{width:'50%', textAlign: 'right'}}>
                  <img src={image} alt="image" style={{width: '35rem', height: '18rem', marginLeft: '-3rem'}}/>
              </td>
          </tr>
      </table>


    </>
  );
}

export default PageLayout;