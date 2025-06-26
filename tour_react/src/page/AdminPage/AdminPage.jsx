// 📁 src/pages/AdminPage.jsx
// 돌아가는 코드
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AdminPage.module.css';

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
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // 사용자 목록 조회 (axios)
  const fetchUsers = async (keyword = '') => {
    try {
      const url = keyword
        ? `/api/admin/members/search?keyword=${keyword}`
        : `/api/admin/members`;
      const { data } = await axios.get(url, { withCredentials: true });
      // 'admin' 계정(이메일 또는 닉네임이 'admin')은 목록에서 제외
      const processed = data
        .filter(user => user.email !== 'admin' && user.nickname !== 'admin')
        .map((user) => ({
          ...user,
          role: `ROLE_${user.role}`,
        }));
      setUsers(processed);
      setFilteredUsers(processed);
    } catch (err) {
      alert('사용자 목록 불러오기 실패');
      console.error(err);
    }
  };

  // 사용자 수정 (axios)
  const updateUser = async (userId, updatedUser) => {
    try {
      const payload = {
        ...updatedUser,
        role: updatedUser.role.replace('ROLE_', ''),
      };
      const { data: updated } = await axios.put(`/api/admin/members/${userId}`, payload, {
        withCredentials: true,
      });
      const updatedRole = `ROLE_${updated.role}`;
      setUsers((prev) =>
        prev.map((u) => (u.id === updated.id ? { ...updated, role: updatedRole } : u))
      );
      setFilteredUsers((prev) =>
        prev.map((u) => (u.id === updated.id ? { ...updated, role: updatedRole } : u))
      );
      setEditUserId(null);
    } catch (err) {
      alert('수정 실패');
      console.error(err);
    }
  };

  // 사용자 삭제 (axios)
  const deleteUser = async (userId) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      await axios.delete(`/api/admin/members/${userId}`, { withCredentials: true });
      setUsers((prev) => prev.filter((u) => u.id !== userId));
      setFilteredUsers((prev) => prev.filter((u) => u.id !== userId));
    } catch (err) {
      alert('삭제 실패');
      console.error(err);
    }
  };

  const handleSearch = () => {
    fetchUsers(searchTerm);
  };

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditFormData({ ...user });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    updateUser(editUserId, editFormData);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  useEffect(() => {
    fetchUsers(); // 전체 목록 초기 로딩
  }, []);

  return (
    <div>
      <h3>사용자 관리</h3>
      <div className={styles.searchcontainer}>
        <input
          type="text"
          placeholder="이름/이메일/전화번호"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이메일</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>전화번호</th>
            <th>역할</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>

                <td>
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      name="nickname"
                      value={editFormData.nickname || ''}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.nickname
                  )}
                </td>

                <td>
                  {editUserId === user.id ? (
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={editFormData.phoneNumber || ''}
                      onChange={handleEditChange}
                    />
                  ) : (
                    user.phoneNumber
                  )}
                </td>

                <td>
                  {editUserId === user.id ? (
                    <select
                      name="role"
                      value={editFormData.role || ''}
                      onChange={handleEditChange}
                    >
                      <option value="ROLE_USER">일반</option>
                      <option value="ROLE_ADMIN">관리자</option>
                    </select>
                  ) : (
                    user.role.replace('ROLE_', '')
                  )}
                </td>

                <td>
                  {editUserId === user.id ? (
                    <>
                      <button onClick={handleSaveClick}>저장</button>
                      <button onClick={handleCancelClick}>취소</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(user)}>수정</button>
                      <button onClick={() => deleteUser(user.id)} style={{ marginLeft: 4, color: 'red' }}>삭제</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                사용자 없음
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => (
  <div>
    <h3>대시보드</h3>
    <p>총 사용자 수: ...명</p>
    <p>총 게시글 수: ...개</p>
  </div>
);

const PostManagement = () => <div><h3>게시글 관리</h3></div>;
const Stats = () => <div><h3>통계 및 리포트</h3></div>;
const Settings = () => <div><h3>설정</h3></div>;

const AdminPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      document.cookie = 'token=; path=/; max-age=0';
      navigate('/');
    }
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard': return <Dashboard />;
      case 'users': return <UserManagement />;
      case 'posts': return <PostManagement />;
      case 'stats': return <Stats />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className={styles.admincontainer}>
      <AdminSidebar onSelect={setSelectedMenu} selectedMenu={selectedMenu} />
      <main className={styles.adminmain}>
        <header>
          <h1>{selectedMenu.toUpperCase()}</h1>
          <button className={styles.logoutbtn} onClick={handleLogout}>로그아웃</button>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminPage;
