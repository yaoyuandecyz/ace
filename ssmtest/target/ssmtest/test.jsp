<%--
  Created by IntelliJ IDEA.
  User: zhen
  Date: 2020/5/19
  Time: 20:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h3>测试成功</h3>
<a href="/UserController/Login">测试</a>
<form action="/UserController/Login" method="post">
    用户姓名:<input type="text" name="uname"><br/>
    <input type="submit" value="submit"/>
</form>

</body>
</html>
