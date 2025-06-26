// AdminPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/AdminPage.css'; // 스타일

/* ───────── 사이드바 ───────── */
const AdminSidebar = ({ onSelect, selectedMenu }) => {
  const menus = [
    { key: 'dashboard', label: '대시보드' },
    { key: 'users', label: '사용자 관리' },
    { key: 'posts', label: '게시글 관리' },
    { key: 'stats', label: '통계 및 리포트' },
    { key: 'settings', label: '설정' },
  ];

  return (
    <aside className="admin-sidebar">
      <h2>관리자 페이지</h2>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li
              key={menu.key}
              className={selectedMenu === menu.key ? 'active' : ''}
              onClick={() => onSelect(menu.key)}
              style={{ cursor: 'pointer' }}
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

/* ───────── 메뉴별 더미 컴포넌트 ───────── */
const Dashboard = () => (
  <div>
    <h3>대시보드</h3>
    <p>총 사용자 수: 100명</p>
    <p>총 게시글 수: 500개</p>
    <p>최근 활동 요약...</p>
  </div>
);

const PostManagement = () => (
  <div>
    <h3>게시글 관리</h3>
    {/* 게시글 목록 및 관리 UI */}
  </div>
);

const Stats = () => (
  <div>
    <h3>통계 및 리포트</h3>
    {/* 통계 차트 등 */}
  </div>
);

const Settings = () => (
  <div>
    <h3>설정</h3>
    {/* 관리자 설정 UI */}
  </div>
);

/* ───────── 사용자 관리 ───────── */
const UserManagement = () => {
  const initialUsers = [
    {
      memberId: 1,
      userId: 'hong1234',
      password: 'pass1234',
      name: '홍길동',
      nickname: '길동이',
      email: 'hong@example.com',
      gender: '남성',
      birth: '1990-01-01',
      phone: '010-1234-5678',
    },
    {
      memberId: 2,
      userId: 'kim2024',
      password: 'KimPass!1',
      name: '김철수',
      nickname: '철수짱',
      email: 'kim@example.com',
      gender: '남성',
      birth: '1992-02-02',
      phone: '010-5678-1234',
    },
    {
      memberId: 3,
      userId: 'lee_yeong',
      password: 'Lee!9876',
      name: '이영희',
      nickname: '영희쨩',
      email: 'lee@example.com',
      gender: '여성',
      birth: '1995-03-03',
      phone: '010-0000-0000',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  /* 검색 */
  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase();
    setFilteredUsers(
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(keyword) ||
          u.email.toLowerCase().includes(keyword)
      )
    );
    setEditUserId(null);
  };

  /* 수정 모드 진입 */
  const handleEditClick = (user) => {
    setEditUserId(user.memberId);
    setEditFormData({ ...user });
  };

  /* 수정 입력 */
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* 저장 */
  const handleSaveClick = () => {
    setUsers((prev) =>
      prev.map((u) => (u.memberId === editUserId ? editFormData : u))
    );
    setFilteredUsers((prev) =>
      prev.map((u) => (u.memberId === editUserId ? editFormData : u))
    );
    setEditUserId(null);
  };

  /* 취소 */
  const handleCancelClick = () => setEditUserId(null);

  /* 삭제 + 재인덱싱 */
  const handleDeleteClick = (memberId) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    // 1) 삭제
    const afterDelete = users.filter((u) => u.memberId !== memberId);
    // 2) 재인덱싱
    const reIndexed = afterDelete.map((u, idx) => ({
      ...u,
      memberId: idx + 1,
    }));
    // 3) 상태 반영
    setUsers(reIndexed);

    const keyword = searchTerm.toLowerCase();
    setFilteredUsers(
      reIndexed.filter(
        (u) =>
          u.name.toLowerCase().includes(keyword) ||
          u.email.toLowerCase().includes(keyword)
      )
    );

    if (editUserId === memberId) setEditUserId(null);
  };

  return (
    <div>
      <h3>사용자 관리</h3>

      {/* 검색 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="이름 또는 이메일로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '6px', marginRight: '8px' }}
        />
        <button onClick={handleSearch} style={{ padding: '6px 12px' }}>
          검색
        </button>
      </div>

      {/* 테이블 */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>멤버 ID</th>
            <th>사용자 ID</th>
            <th>비밀번호</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>이메일</th>
            <th>성별</th>
            <th>생년월일</th>
            <th>휴대번호</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length ? (
            filteredUsers.map((user) => (
              <tr key={user.memberId}>
                <td style={cellStyle}>{user.memberId}</td>

                {/* 사용자 ID */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      name="userId"
                      value={editFormData.userId}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.userId
                  )}
                </td>

                {/* 비밀번호 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="password"
                      name="password"
                      value={editFormData.password}
                      onChange={handleEditChange}
                    />
                  ) : (
                    '*'.repeat(user.password.length)
                  )}
                </td>

                {/* 이름 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                {/* 닉네임 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      name="nickname"
                      value={editFormData.nickname}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.nickname
                  )}
                </td>

                {/* 이메일 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.email
                  )}
                </td>

                {/* 성별 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <select
                      name="gender"
                      value={editFormData.gender}
                      onChange={handleEditChange}
                    >
                      <option value="남성">남성</option>
                      <option value="여성">여성</option>
                    </select>
                  ) : (
                    user.gender
                  )}
                </td>

                {/* 생년월일 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="date"
                      name="birth"
                      value={editFormData.birth}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.birth
                  )}
                </td>

                {/* 휴대번호 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.phone
                  )}
                </td>

                {/* 관리 버튼 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <>
                      <button onClick={handleSaveClick} style={{ marginRight: '5px' }}>
                        저장
                      </button>
                      <button onClick={handleCancelClick}>취소</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(user)}
                        style={{ marginRight: '5px' }}
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDeleteClick(user.memberId)}
                        style={{ backgroundColor: '#ff6b6b', color: '#fff' }}
                      >
                        삭제
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: 'center', padding: '10px' }}>
                검색 결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  textAlign: 'center',
};

/* ───────── 메인 AdminPage ───────── */
const AdminPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      // 토큰 제거 등
      navigate('/');
    }
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'posts':
        return <PostManagement />;
      case 'stats':
        return <Stats />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <AdminSidebar onSelect={setSelectedMenu} selectedMenu={selectedMenu} />
      <main className="admin-main" style={{ flexGrow: 1, padding: '20px' }}>
        <header
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>{selectedMenu.toUpperCase()}</h1>
          <button className="logout-btn" onClick={handleLogout}>
            로그아웃
          </button>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPage;
