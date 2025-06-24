import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminPage.module.css'; // 스타일 파일

const AdminSidebar = ({ onSelect, selectedMenu }) => {
  const menus = [
    { key: 'dashboard', label: '대시보드' },
    { key: 'users', label: '사용자 관리' },
    { key: 'posts', label: '게시글 관리' },
    { key: 'stats', label: '통계 및 리포트' },
    { key: 'settings', label: '설정' },
  ];

  return (
    <aside className={styles.adminsidebar}>
      <h2>관리자 페이지</h2>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li
              key={menu.key}
              className={`${styles.menuItem} ${selectedMenu === menu.key ? styles.active : ''}`}
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

const Dashboard = () => (
  <div>
    <h3>대시보드</h3>
    <p>총 사용자 수: 100명</p>
    <p>총 게시글 수: 500개</p>
    <p>최근 활동 요약...</p>
  </div>
);

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

  // 검색 처리
  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase();
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
    );
    setFilteredUsers(result);
    setEditUserId(null); // 검색 시 편집 초기화
  };

  // 수정 버튼 클릭
  const handleEditClick = (user) => {
    setEditUserId(user.memberId);
    setEditFormData({ ...user });
  };

  // 입력값 변경 처리
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 저장 버튼 클릭
  const handleSaveClick = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.memberId === editUserId ? { ...editFormData } : user
      )
    );
    setFilteredUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.memberId === editUserId ? { ...editFormData } : user
      )
    );
    setEditUserId(null);
  };

  // 취소 버튼 클릭
  const handleCancelClick = () => {
    setEditUserId(null);
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = (memberId) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const newUsers = users.filter((user) => user.memberId !== memberId);
      setUsers(newUsers);
      setFilteredUsers(newUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      ));
      if (editUserId === memberId) {
        setEditUserId(null);
      }
    }
  };

  return (
    <div>
      <h3>사용자 관리</h3>

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
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.memberId}>
                <td style={cellStyle}>{user.memberId}</td>

                {/* 수정 모드일 때는 input, 아니면 텍스트 출력 */}
                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="text"
                      name="userId"
                      value={editFormData.userId}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.userId
                  )}
                </td>

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

                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="text"
                      name="nickname"
                      value={editFormData.nickname}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.nickname
                  )}
                </td>

                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.email
                  )}
                </td>

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

                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <input
                      type="tel"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.phone
                  )}
                </td>

                <td style={cellStyle}>
                  {editUserId === user.memberId ? (
                    <>
                      <button
                        onClick={handleSaveClick}
                        style={{ marginRight: '5px' }}
                      >
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

const AdminPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      // 토큰 등 제거 작업 가능
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
    <div className={styles.admincontainer} style={{ display: 'flex', minHeight: '100vh' }}>
      <AdminSidebar onSelect={setSelectedMenu} selectedMenu={selectedMenu} />
      <main className={styles.adminmain} style={{ flexGrow: 1, padding: '20px' }}>
        <header
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>{selectedMenu.toUpperCase()}</h1>
          <button className={styles.logoutbtn} onClick={handleLogout}>
            로그아웃
          </button>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPage;