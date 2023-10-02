import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  const btnStyle = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button className={btnStyle} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={btnStyle}>
      {children}
    </Link>
  );
};

export default LinkButton;
