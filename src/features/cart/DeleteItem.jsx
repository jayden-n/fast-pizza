import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Remove
    </Button>
  );
};

export default DeleteItem;
