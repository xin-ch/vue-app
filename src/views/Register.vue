<template>
  <div class="login">
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true,
              type: 'string',
              min: 3,
              max: 15
            },
            trigger: 'blur',
            messages: {
              required: '用户名不能为空',
              max: '用户名不能大于15个字符',
              min: '用户名不能小于3个字符'
            }
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '注册'
          }
        ],
      },
    }
  },
  methods: {
    submitHandler(e) {
      this.$http.get('/api/zc', { params: this.model }).then(res => {
        if (res.success) {
          console.log('注册成功');
        } else {
          console.log('用户名已存在');
        }
      }).catch(err => {
        console.log(err);
      })
    },
  },
}
</script>
