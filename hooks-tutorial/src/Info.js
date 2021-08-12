import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  return (
    <div>
      <input name="name" onChange={onChange} value={state.name} />
      <input name="nickname" onChange={onChange} value={state.nickname} />
      <h1>
        제 이름은 {state.name}이고 닉네임은 {state.nickname} 입니다.
      </h1>
    </div>
  );
};

export default Info;
