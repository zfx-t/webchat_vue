<template>
    <div class="chat-container">
      <div class="user-list">
        <h3>在线用户</h3>
        <ul>
          <li v-for="user in onlineUsers" :key="user.id" @click="sendUser(user.name)">
            <div class="user-avatar">
<!--              <img :src="user.avatar" :alt="user.name" />-->
            </div>
            <div class="user-info">
              <span class="user-name">{{ user.name }}</span>
              <span class="user-status" :class="{ 'user-status-online': user.status === 'online', 'user-status-offline': user.status === 'offline' }"></span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chatPartnerName: '对方名字',
        
        messages: [],
        newMessage: ''
      };
    },props:['onlineUsers'],
    methods: {
        //传递用户名到聊天框
        sendUser(username){
            this.$bus.$emit('sendUsername',username)
        }

    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    height: 100vh;

  }
  
  .user-list {
    width: 200px;
    background-color: #f2f2f2;
    /*padding: 10px;*/
  }
  
  .user-list h3 {
    margin: 0;
    padding: 10px;
    font-size: 16px;
  }
  
  .user-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .user-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .user-list li:hover {
    background-color: #e5e5e5;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
  }
  
  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
  }
  
  .user-name {
    font-weight: bold;
  }
  
  .user-status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 4px;
  }
  
  .user-status-online {
    background-color: #4caf50;
  }
  
  .user-status-offline {
    background-color: #ccc;
  }

  .chat-window {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    padding: 10px;
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: center;
  }
  
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .message-right {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  
  .message-left {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  
  .message-content {
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    background-color: #dcf8c6;
  }
  
  .chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
  input {
    flex: 1;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    border: none;
    margin-left: 10px;
    cursor: pointer;
  }
  </style>
  