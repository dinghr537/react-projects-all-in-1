import { useEffect, useRef, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import classNames from 'classnames'
import {v4 as uuidV4} from 'uuid'
import dayjs from 'dayjs'
import axios from 'axios'

// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

function useGetList() {
  const [commentList, setCommentList] = useState([])
  useEffect(()=>{
    async function getList() {
      const res = await axios.get('http://localhost:3004/list')
      setCommentList(res.data)
    }
    getList()
  }, [])
  return {
    commentList,
    setCommentList
  }
}

function Item({ item, onDel }) {
  return (
    <div className="reply-item">
      {/* 头像 */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt=""
            src={item.user.avatar}
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* 用户名 */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* 评论内容 */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* 评论时间 */}
            <span className="reply-time">{item.ctime}</span>
            {/* 评论数量 */}
            <span className="reply-time">点赞数:{item.like}</span>
            {user.uid === item.user.uid && 
              <span onClick={() => onDel(item.rpid)} className="delete-btn">
              删除
              </span>}
            

          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  
  const [type, setType] = useState('hot')
  const [content, setContent] = useState('')
  const inputRef = useRef(null)
  const {commentList, setCommentList} = useGetList()

  const handleDelete = (id) => {
    // console.log(id)
    setCommentList(commentList.filter(item => item.rpid !== id))
  }

  const handleTabChange = (type) => {
    console.log(type)
    setType(type)
    if (type === 'hot') {
      // based on like
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      // based on time
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }
  
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidV4(),
        user: {
          uid: '36080105',
          avatar: '',
          uname: '许嵩',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD HH:mm'),
        like: 88,
      }
    ])
    //清空输入框
    setContent('')
    inputRef.current.focus()
  }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item => 
            <span 
              key={item.type} 
              onClick={() => handleTabChange(item.type)} 
              // className={`nav-item ${type === item.type && 'active'}`}
              className={classNames('nav-item', {active: type === item.type})}>
                {item.text}
            </span>)}
            
            
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              value={content}
              ref={inputRef}
              onChange={(e)=>setContent(e.target.value)}
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item=> <Item key={item.id} item={item} onDel={handleDelete} />)}
          
        </div>
      </div>
    </div>
  )
}

export default App