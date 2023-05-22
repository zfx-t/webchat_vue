<template>
    <div class="chat-container">
      <div class="chat-header">
        {{ chatPartnerName }}
      </div>
      <div class="chat-messages">
        <div v-for="message in messages" :key="message.id" :class="{'message-right': message.isMe, 'message-left': !message.isMe}">
          <div class="message-content">
            {{ message.content }}
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input v-model="newMessage" placeholder="输入消息..." />
        <button @click="sendMessage">发送</button>
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
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({
            id: Date.now(),
            content: this.newMessage.trim(),
            isMe: true
          });
          this.newMessage = '';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
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
  