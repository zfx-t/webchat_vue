<template>
  <div>
    <!-- Loader starts-->
    <div class="loader-wrapper">
      <div class="loader"></div>
    </div>
    <!-- Loader ends-->
    <!-- login page start-->
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <router-link class="logo" to="/login">
                  <!-- 地球图标 -->
                  <img
                    class="img-fluid for-light"
                    src="@/assets/favicon.png"
                  />
                </router-link>
              </div>
              <div class="login-main">
                
                  <h2 class="text-center">聊天室</h2>
                  <p class="text-center">我们一起聊天吧</p>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      v-model="username"
                      name="username"
                      placeholder="请输入自定义昵称"
                      required
                    />
                  </div>
                  <div class="form-group mb-0">
                    <div class="text-end mt-3">
                      <button
                        @click="login()"
                        class="btn btn-primary btn-block w-100"
                        type="submit"
                      >
                        进入聊天室
                      </button>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "login",
  data() {
    return {
      username:''
    };
  },
  methods:{
    login(){
        axios({
          url:'http://localhost:9090/login',
          method:'get',
          params:{
            username:this.username
          }
        }).then(Response=>{
          console.log(Response.data)
          this.$router.push({
            name:'chat',
            params:{
              username:this.username,
              id:123
            }
          })
        })
    }
  }
};
</script>

<style >

</style>