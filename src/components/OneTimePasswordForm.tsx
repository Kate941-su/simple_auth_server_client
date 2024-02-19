import { useState, ChangeEvent, useRef, useEffect } from 'react';



const OneTimePasswordForm = () => {
  // パスワードを格納するstate

  const passwordLength = 6;
  const [password, setPassword] = useState<Array<string>>(Array(passwordLength).fill(''));

  // 入力された文字を処理する関数
  const handleInputChange = (index: number, value: string) => {
    // 入力が数字かどうかを確認し、数字であればstateを更新
    if (/^\d*$/.test(value)) {
      const newPassword = [...password];
      newPassword[index] = value;
      setPassword(newPassword);

      // 次の入力フィールドに自動フォーカス
      if (index < passwordLength - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // 入力フィールドの参照を格納するref
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  // 初回レンダリング時に各入力フィールドの参照を設定
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, passwordLength);
  }, [passwordLength]);

  return (
    <form>
      {password.map((char, index) => (
        <input
          key={index}
          id={`input-${index}`}
          type="text"
          maxLength={1}
          value={char}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          ref={(input) => (inputRefs.current[index] = input as HTMLInputElement)}
        />
      ))}
    </form>
  );
};

export default OneTimePasswordForm;