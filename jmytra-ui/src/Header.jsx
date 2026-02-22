import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <>
      <div style={{ paddingRight: '0.5rem' }}>
        {/*
          Table header commented out per request. If you need to restore it,
          remove the comment markers below.

          <table style={{width:'100%'}}>
            <thead>
            <tr  style={{width:'100%'}}>
                <td style={{width:'50%'}}>
                    <img src={logo} alt="logo" style={{width: '17rem', height: '10rem', marginLeft: '-3rem'}}/>
                </td>
                <td style={{width:'50%', textAlign: 'right'}}>
                    <div>
                    <h1 className='h1'>{title}</h1>
                    <h5 className='h5'>{subtitle}</h5>
                    </div>
                </td>
            </tr>
            </thead>
          </table>
        */}
      </div>
    </>
  );
};

export default Header;