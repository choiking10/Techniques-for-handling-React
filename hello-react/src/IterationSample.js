import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [handleId, setHandleId] = useState(5);
  const handleClick = () => {
    setNames([...names, { id: handleId, text: inputText }]);
    setHandleId(handleId + 1);
    setInputText('');
  };
  const onRemove = (id) => {
    setNames(names.filter((name) => name.id !== id));
    console.log(names.filter((name) => name.id !== id));
    console.log(id);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleClick() : null)}
      />
      <button onClick={handleClick}>등록하기</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
