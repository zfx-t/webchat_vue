<template>
  <div id="chat" class="chat-container">
    <user-list :online-users="onlineUsers" />
    <chat-box />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue';
import ChatBox from '../components/ChatBox.vue';
export default {
  components: {
    UserList,
    ChatBox
  },
  data() {
    return {
        onlineUsers: [
          { id: 1, name: 'User 1', avatar: 'user1.jpg', status: 'online' },
          { id: 2, name: 'User 2', avatar: 'user2.jpg', status: 'online' },
          { id: 3, name: 'User 3', avatar: 'user3.jpg', status: 'offline' }
        ],
      socket:'',
      username:''
    };
  },
  
  created(){
    this.username = this.$route.params.username

    let socket = new WebSocket("ws://localhost:9090/chat/123")
    socket.onopen=function (){
      console.log("连接成功")
    }
  },methods:{
    sendMessage(){

    }
  }
}
</script>

<style>
.chat-container{
  display: flex;
  height: 100vh;

}

</style>