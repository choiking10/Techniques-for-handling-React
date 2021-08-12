import React, { useCallback, useMemo, useRef, useState } from 'react';

function getAverage(numList) {
  console.log('평균값 계산중');
  if (numList.length === 0) {
    return 0;
  }
  return numList.reduce((a, b) => a + b) / numList.length;
}

const Average = () => {
  const [textBox, setTextBox] = useState('');
  const [numList, setNumList] = useState([]);
  const inputEl = useRef(null);

  const handleChange = useCallback((e) => setTextBox(e.target.value), []);
  const handleInsert = useCallback(() => {
    setNumList([...numList, parseInt(textBox)]);
    setTextBox('');
    inputEl.current.focus();
  }, [textBox, numList]);
  const avg = useMemo(() => getAverage(numList), [numList]);
  return (
    <div>
      <input value={textBox} ref={inputEl} onChange={handleChange} />
      <button onClick={handleInsert}>등록</button>
      <ul>
        {numList.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
      <div>{avg}</div>
    </div>
  );
};

export default Average;
