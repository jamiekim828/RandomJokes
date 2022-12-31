import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { AppDispatch, RootState } from '../redux/store';
import { fetchProductData } from '../redux/thunk/product';

export default function ProductItem() {
  const [showAnswer, setShowAnswer] = useState(false);
  const randomJoke = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  function handleClick() {
    setShowAnswer(true);
  }

  function handleNext() {
    dispatch(fetchProductData());
  }

  return (
    <div className='joke-div'>
      <div className='question'>{randomJoke.setup}</div>
      {showAnswer ? (
        <div className='answer'>{randomJoke.punchline}</div>
      ) : (
        <div className='answer'></div>
      )}

      {!showAnswer ? (
        <Stack spacing={2} direction='row'>
          <Button variant='outlined' onClick={handleClick}>
            Answer
          </Button>
        </Stack>
      ) : (
        <Stack spacing={2} direction='row'>
          <Button
            variant='contained'
            onClick={() => {
              setShowAnswer(false);
              handleNext();
            }}
          >
            Get new joke
          </Button>
        </Stack>
      )}
    </div>
  );
}
