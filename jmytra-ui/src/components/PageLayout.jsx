import React from 'react'

const PageLayout = ({title, data, sidebarOpen, icon}) => {

  return (
    <>
      <div>
        {sidebarOpen === undefined ? (
          <h2 className='h3'><span style={{width: 28, height: 28, display: 'inline-flex', alignItems: 'center', marginRight: '0.5rem', paddingTop: '0.5rem', verticalAlign: 'top'}}>{icon}</span><b>{title}</b></h2>
        ): (sidebarOpen ? (
          <h2 className='h3' style={{ marginLeft: '12%'}}><span style={{width: 28, height: 28, display: 'inline-flex', alignItems: 'center', marginRight: '0.5rem', paddingTop: '0.5rem', verticalAlign: 'top'}}>{icon}</span><b>{title}</b></h2>  
        ): (
          <h2 className='h3' style={{ marginLeft: '12%'}}><span style={{width: 28, height: 28, display: 'inline-flex', alignItems: 'center', marginRight: '0.5rem', paddingTop: '0.5rem', verticalAlign: 'top'}}>{icon}</span><b>{title}</b></h2>
        ))} 
        
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