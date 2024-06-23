import { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(1500).emit('message', value, () => {
      setIsLoading(false);
      console.info('emitted', value)
    });
  }

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}