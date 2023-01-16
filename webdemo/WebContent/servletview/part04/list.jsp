<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
      <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<table>
<tr>
<th>num</th><th>name</th><th>age</th><th>loc</th>
</tr>
<c:forEach items="${requestScope.aList}" var="dto">
<tr>
<td>${dto.num}</td><td>${dto.name}</td>
<td>${dto.age}</td><td>${dto.loc}</td>
</c:forEach>
</table>

</body>
</html>