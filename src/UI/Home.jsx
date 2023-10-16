import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import StackedCardTestimonials from './Testimonials';

function Home() {
  const userName = useSelector((state) => state.user.username);

  // dsadas
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-4xl">
        The best pizza in town.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {userName}
        </Button>
      )}
      <StackedCardTestimonials />
    </div>
  );
}

export default Home;
