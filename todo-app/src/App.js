import React, { useCallback, useReducer, useRef } from 'react';
import TodoTemplates from './components/TodoTemplates';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulk = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `test ${i}`,
      checked: false,
    });
  }
  return array;
};

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulk);
  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    dispatch({
      type: 'INSERT',
      todo: { id: nextId.current, text, checked: false },
    });
    nextId.current += 1;
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id: id });
  }, []);
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id: id });
  }, []);
  return (
    <TodoTemplates>
      <TodoInsert onInsert={onInsert}> </TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplates>
  );
};

export default App;
