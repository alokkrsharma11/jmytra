import React from 'react'

const PageLayout = ({title, data, bgimg, w, h}) => {

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
                { bgimg &&
                  <img src={bgimg} alt="image" style={{width: w, height: h, marginLeft: '-3rem'}}/>
                }
              </td>
          </tr>
      </table>


    </>
  );
}

export default PageLayout;