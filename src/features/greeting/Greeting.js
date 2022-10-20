import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayGreeting } from './greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(displayGreeting());
  }, [dispatch]);

  return (
    <div>
      <p>Greeting:</p>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
