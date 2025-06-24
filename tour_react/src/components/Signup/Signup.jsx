import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = ({ closeModal }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    nickname: '',
    email: '',
    gender: '',
    birth: '',
    tel: '',
    emailCode: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [serverCode, setServerCode] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    if (id === 'password') {
      checkPasswordStrength(value);
      if (form.passwordConfirm && value !== form.passwordConfirm) {
        setPasswordError('비밀번호가 다릅니다.');
      } else {
        setPasswordError('');
      }
    }

    if (id === 'passwordConfirm') {
      if (value !== form.password) {
        setPasswordError('비밀번호가 다릅니다.');
      } else {
        setPasswordError('');
      }
    }
  };

  const checkPasswordStrength = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasLength = password.length >= 8;

    const score = [hasUpper, hasLower, hasNumber].filter(Boolean).length;
    let strength = '약함';
    if (hasLength && score >= 2) strength = '보통';
    if (hasLength && score === 3) strength = '강함';

    setPasswordStrength(strength);
  };

  const handleCheckId = () => {
    if (!form.username.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (form.username === 'existingUser') {
      alert('이미 존재하는 아이디입니다.');
      setIsIdChecked(false);
    } else {
      alert('사용 가능한 아이디입니다.');
      setIsIdChecked(true);
    }
  };

  const handleSendEmail = () => {
    if (!form.email.trim()) {
      alert('이메일을 입력하세요.');
      return;
    }

    const code = '123456';
    setServerCode(code);
    setEmailSent(true);
    alert(`인증 코드가 ${form.email}으로 발송되었습니다. (테스트용 코드: ${code})`);
  };

  const handleVerifyEmail = () => {
    if (form.emailCode === serverCode) {
      alert('이메일 인증이 완료되었습니다.');
      setEmailVerified(true);
    } else {
      alert('인증 코드가 일치하지 않습니다.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isIdChecked) {
      alert('아이디 중복 확인을 해주세요.');
      return;
    }

    if (!emailVerified) {
      alert('이메일 인증을 완료해주세요.');
      return;
    }

    alert('회원가입이 완료되었습니다!\n이제 로그인해주세요.');
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={styles.signupcontainer}>
      <h2>회원가입</h2>
      <form className={styles.signupform} onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label htmlFor="username">아이디</label>
          <div className="input-row">
            <input id="username" type="text" value={form.username} onChange={handleChange} required />
            <button type="button" onClick={handleCheckId}>중복 확인</button>
          </div>
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" value={form.password} onChange={handleChange} required />
          <small style={{ color: passwordStrength === '강함' ? 'green' : passwordStrength === '보통' ? 'orange' : 'red' }}>
            비밀번호 강도: {passwordStrength}
          </small>
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input id="passwordConfirm" type="password" value={form.passwordConfirm} onChange={handleChange} required />
          {passwordError && <small style={{ color: 'red' }}>{passwordError}</small>}
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="name">이름</label>
          <input id="name" type="text" value={form.name} onChange={handleChange} required />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" type="text" value={form.nickname} onChange={handleChange} required />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="email">이메일</label>
          <div className="input-row">
            <input id="email" type="email" value={form.email} onChange={handleChange} required />
            <button type="button" onClick={handleSendEmail}>인증 코드 발송</button>
          </div>
        </div>

        {emailSent && (
          <div className={styles.formgroup}>
            <label htmlFor="emailCode">인증 코드 입력</label>
            <div className="input-row">
              <input id="emailCode" type="text" value={form.emailCode} onChange={handleChange} required />
              <button type="button" onClick={handleVerifyEmail}>인증 확인</button>
            </div>
          </div>
        )}

        <div className={styles.formgroup}>
          <label htmlFor="gender">성별</label>
          <select id="gender" value={form.gender} onChange={handleChange} required>
            <option value="">선택</option>
            <option value="남성">남성</option>
            <option value="여성">여성</option>
          </select>
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="birth">생년월일</label>
          <input id="birth" type="date" value={form.birth} onChange={handleChange} required />
        </div>

        <div className={styles.formgroup}>
          <label htmlFor="tel">휴대폰 번호</label>
          <input id="tel" type="tel" value={form.tel} onChange={handleChange} required />
        </div>

        <div className={styles.formactions}>
          <button type="submit" className={styles.submitbtn}>회원가입</button>
          <button type="button" className={styles.closebtn} onClick={handleClose}>닫기</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
