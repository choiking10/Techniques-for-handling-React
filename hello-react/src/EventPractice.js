import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    message: '',
    username: '',
  });
  const handleChnage = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    setForm({
      message: '',
      username: '',
    });
  };
  const handleKeyPress = (e) => {
    alert(form.username + ': ' + form.message);
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름을 입력하세요"
        onChange={handleChnage}
        value={form.username}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={handleChnage}
        onKeyPress={handleKeyPress}
        value={form.message}
      />
      <button onClick={handleClick}> 확인 </button>
    </div>
  );
};

export default EventPractice;
