<template>
  <div class="top-info">
    <div class="w1000-center h30">
      <div class="fl">
        <span v-if="this.hideHeader">Hi，欢迎来到90彩票！</span>
        <span v-else="hideHeader" style="cursor: pointer; color: #f33;" @click="goHome">返回首页</span>
      </div>
      <div class="fr">
        <ul>
          <li>
            <span class="user-pic">
              <img :src="`http://${userInfo.avatar}`" alt="">
            </span>
            <span class="user-id">{{userInfo.username || '未登录'}}</span>
            <span class="user-level">0</span>
          </li>
          <li  class="myAccount">
            <span>我的账户</span>
            <div class="accountList">
              <i></i>
              <a href="">投注记录</a>
              <a href="">交易记录</a>
              <a href="javascript:;" @click="jumpInfoMain">个人信息</a>
              <a href="">安全中心</a>
              <a href="">代理中心</a>
            </div>
          </li>
          <li>
            <span>余额:</span>
            <span style="border: 1px dotted #6b6b6b; padding: 0 3px;">
              <span v-if="!flag">{{userInfo.money}}</span>
              <span v-else>已隐藏</span>
              <span @click="toggle">{{show}}</span>
            </span>
          </li>
          <li>
            <span>充值</span>
          </li>
          <li>
            <span>提现</span>
          </li>
          <li>
            <span @click="logOut">退出</span>
          </li>
          <li>
            <span class="online-service">在线客服</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {removeToken, removeUserInfo} from '../../utils/auth'

  export default {
  	data() {
  		return {
        show: '显示',
        flag: true,
      }
    },
	  methods: {
		  async logOut() {
			  let res = await this.axios.get('/v1/LoginOut')
			  this.$dialog.alert({
				  message: res.data.message
			  }).then(() => {
				  removeToken()
				  removeUserInfo()
          this.$store.commit('removeUserInfo')
//				  this.$router.push('/login')
          window.location.reload()
			  });
		  },
      jumpInfoMain() {
		    this.$router.push('/main')
      },
      toggle() {
		    this.flag = !this.flag
		    if (this.flag) {
		      this.show = '显示'
        } else {
          this.show = '隐藏'
        }
      },
      goHome() {
		    this.$router.push('/home')
      }
    },
	  computed: {
		  ...mapGetters([
			  'userInfo'
		  ])
	  },
    props: ['hideHeader']
  }
</script>

<style lang="scss" scoped>
  .top-info {
    font-size: 13px;
    background: #f8f8f8;
    color: #666;
    .h30 {
      height: 30px;
      line-height: 30px;
      .fr {
        li {
          display: inline-block;
          margin-left: 20px;
          cursor: pointer;
          .accountList {
            display: none;
            position: absolute;
            background-color: #fff;
            color: #333;
            border: 1px solid #ccc;
            padding: 5px;
            margin-left: -16px;
            z-index: 20;
            a{
              color: #333;
              display: block;
              padding: 0 5px;
              width: 80px;
              text-align: center;
              line-height: 24px;
            }
          }
          .user-pic {
            margin-right: 5px;
            img {
              width: 22px;
              height: 22px;
              vertical-align: middle;
              border-radius: 50%;
              margin-bottom: 3px;
            }
          }
          .user-level {
            margin-left: 10px;
            padding: 2px 7px;
            background: #ffba00;
            color: #fff;
            text-shadow: 1px 1px 1px #333;
            border-radius: 2px;
          }
          .online-service {
            display: inline-block;
            height: 24px;
            line-height: 24px;
            padding: 0 3px;
            border-radius: 3px;
            background-color: #e4393c;
            color: #fff;
          }
        }
        .myAccount:hover {
          text-decoration: underline;
          color: #f33;
          .accountList {
            display: block!important;
            box-shadow: 4px 4px 8px rgba(0,0,0,.3);
            i {
              position: absolute;
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-bottom: 5px solid #fff;
              margin-left: 36px;
              margin-top: -10px;
            }
            a:hover {
              text-decoration: underline;
              color: #f33;
            }
          }
        }
      }
    }
  }
</style>
