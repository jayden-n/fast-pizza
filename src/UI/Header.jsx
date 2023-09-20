import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

const Header = () => {
  return (
    <header>
      <Link to='/'>Fast React</Link>
      <SearchOrder />
      <p>Jayden Nguyen</p>
    </header>
  );
};

export default Header;
