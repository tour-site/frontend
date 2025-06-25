// 📁 src/components/SignupModal.jsx
import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './css/Modal.css';
import './css/datepicker-custom.css';

const SignupModal = ({ closeModal, switchToLogin }) => {
  const [form, setForm] = useState({
    name: '',
    nickname: '',
    password: '',
    confirm: '',
    emailId: '',
    emailDomain: 'naver.com',
    customDomain: '',
    gender: '',
    birthday: '',
    phoneNumber: '',
  });

  const [birthdayDate, setBirthdayDate] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatBirthdayToMMDD = (dateStr) => {
    if (!dateStr || !dateStr.includes('-')) return '';
    const [, month, day] = dateStr.split('-');
    return `${month}-${day}`;
  };

  const getFullEmail = () => {
    return `${form.emailId}@${
      form.emailDomain === 'custom' ? form.customDomain : form.emailDomain
    }`;
  };

  const handleSubmit = async () => {
    if (!form.name) {
      setError('이름을 입력해주세요!');
      return;
    }
    if (!form.emailId) {
      setError('이메일 아이디를 입력해주세요!');
      return;
    }
    if (!form.password) {
      setError('비밀번호를 입력해주세요!');
      return;
    }
    if (form.password !== form.confirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await axiosInstance.post('/api/member/signup', {
        name: form.name,
        nickname: form.nickname,
        password: form.password,
        email: getFullEmail(),
        gender: form.gender,
        birthday: formatBirthdayToMMDD(form.birthday),
        phoneNumber: form.phoneNumber,
      });

      alert('회원가입 성공! 로그인해주세요.');
      switchToLogin(); // ✅ 로그인 모달로 전환
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || '회원가입에 실패했습니다.');
    }
  };

  const handleBirthdayChange = (date) => {
    setBirthdayDate(date);
    if (date) {
      const iso = date.toISOString().split('T')[0];
      setForm((prev) => ({ ...prev, birthday: iso }));
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>회원가입</h2>

        <input name="name" className="input-field" placeholder="이름" value={form.name} onChange={handleChange} />
        <input name="nickname" className="input-field" placeholder="닉네임" value={form.nickname} onChange={handleChange} />
        <input name="password" type="password" className="input-field" placeholder="비밀번호" value={form.password} onChange={handleChange} />
        <input name="confirm" type="password" className="input-field" placeholder="비밀번호 확인" value={form.confirm} onChange={handleChange} />

        {/* 이메일 */}
        <div className="email-container" style={{ display: 'flex', gap: '6px' }}>
          <input
            name="emailId"
            className="input-field"
            placeholder="이메일 아이디"
            value={form.emailId}
            onChange={handleChange}
            style={{ flex: 1 }}
          />
          <span>@</span>
          <select
            name="emailDomain"
            className="input-field"
            value={form.emailDomain}
            onChange={handleChange}
            style={{ flex: 1 }}
          >
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="kakao.com">kakao.com</option>
            <option value="nate.com">nate.com</option>
            <option value="custom">직접 입력</option>
          </select>
        </div>

        {form.emailDomain === 'custom' && (
          <input
            name="customDomain"
            className="input-field"
            placeholder="직접 도메인 입력 (예: example.com)"
            value={form.customDomain}
            onChange={handleChange}
          />
        )}

        {/* 성별 */}
        <select name="gender" className="input-field" value={form.gender} onChange={handleChange}>
          <option value="">성별 선택</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>

        {/* 생일 */}
        <DatePicker
          locale={ko}
          selected={birthdayDate}
          onChange={handleBirthdayChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="생일 선택"
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          maxDate={new Date()}
          minDate={new Date('1900-01-01')}
          yearDropdownItemNumber={100}
          className="input-field"
        />

        {/* 전화번호 */}
        <input
          name="phoneNumber"
          className="input-field"
          placeholder="전화번호 (예: 010-1234-5678)"
          value={form.phoneNumber}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, '');
            let formatted = raw;
            if (raw.length <= 3) {
              formatted = raw;
            } else if (raw.length <= 7) {
              formatted = raw.replace(/(\d{3})(\d{1,4})/, '$1-$2');
            } else {
              formatted = raw.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
            }
            setForm({ ...form, phoneNumber: formatted });
          }}
        />

        {error && <p className="error-message">{error}</p>}

        <div className="button-group">
          <button onClick={handleSubmit}>가입하기</button>
          <button onClick={switchToLogin}>로그인하기</button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
