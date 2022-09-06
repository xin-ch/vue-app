module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error("webpack-dev-server is not defined");
  }

  let userpoor = [
    {
      username: "admin",
      password: "123456",
    },
  ];
  middlewares.unshift({
    //`name`是可选的
    name: "user-classPlan",
    path: "/api/zc",
    middleware: (req, res) => {
      const { username } = req.query;
      const length = userpoor.filter((v) => v.username === username).length;
      if (length > 0) {
        res.json({
          success: false,
          message: "用户名已存在",
        });
      } else {
        res.json({
          success: true,
          message: "注册成功",
        });
      }
    },


  });


  middlewares.unshift({
        //登录接口
        name: "user-login",
        path: "/api/login",
        middleware: (req, res) => {
        let tokenKey='qwertyuiopp'
          const { username,password } = req.query;
          if(username==='admin'&& password==='123456'){
            res.json({
              code:1,
              message:'登录成功',
              token:tokenKey +'-'+username+(new Date().getTime() + 60*60*1000)
            })
          }else{
            res.json({
              code:0,
              message:'账号或密码错误',
            })
          }
        },
  })
  return middlewares;
};
