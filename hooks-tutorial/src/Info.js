import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log('마운트가 완료되었습니다.');
  }, []);

  useEffect(() => {
    console.log('이름 변경');
    return () => {
      console.log('cleanup');
    };
  }, [name]);

  useEffect(() => {
    console.log('nickName 변경');
  }, [nickName]);

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setNickName(e.target.value)} value={nickName} />
      <h1>
        제 이름은 {name}이고 닉네임은 {nickName} 입니다.
      </h1>
    </div>
  );
};

export default Info;
