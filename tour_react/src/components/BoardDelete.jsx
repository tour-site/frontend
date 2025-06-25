import React from 'react';
import '../assets/css/BoardDelete.css';

const DeleteButton = ({postId, onDelete})=>{
    const handleDelete = () => {
        const confirm = window.confirm('정말 이 게시글을 삭제하시겠습니까?');
        if (confirm){
            //postList 에서 해당 글 제거 
            const postList = JSON.parse(localStorage.getItem('postList')) || [];
            const updatedList = postList.filter(p=> p.id !== postId);
            localStorage.setItem('postList', JSON.stringify(updatedList));

            if(onDelete){
                onDelete();
            }
        }
    };
    return(
         <button onClick={handleDelete} className="delete-button">
        삭제
        </button>
    )
}
export default DeleteButton;