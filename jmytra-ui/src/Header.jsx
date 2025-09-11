import logo from './images/img_1.png';
import './Header.css';

const Header = ({title, subtitle}) => {

  return (
    <>

      <div style={{paddingRight: '1rem', maxHeight: '8rem',
      zIndex: 1000,}}>
          <table style={{width:'100%'}}>
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
          </table>
      </div>
    </>
  );
}

export default Header;