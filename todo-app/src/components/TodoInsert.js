import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('할 일을 입력하세요');
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
