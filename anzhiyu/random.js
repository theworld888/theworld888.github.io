var posts=["2023/03/15/Axios/","2023/04/04/Data内置对象/","2023/03/15/ES6/","2023/03/15/Promise/","2023/04/06/Redux/","2023/04/07/TypeScript学习笔记/","2023/03/27/html面试题/","2023/03/27/js面试题/","2023/03/15/react基础/","2023/03/15/webpack/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};