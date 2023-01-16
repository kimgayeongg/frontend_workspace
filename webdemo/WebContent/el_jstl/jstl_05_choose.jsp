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
<%
char data ='a';
if(data>='A' && data<='Z')
	out.print("대문자");

else if(data>='a' && data<='z')
	out.print("소문자");
else if(data>='0' && data<='9')
	out.print("숫자");
else
%>
<hr/>
<c:set var ="data" value="a"></c:set>
<c:choose>
<c:when test="${data>='A' && data<='Z' }">
<c:out value="대문자">
</c:when>
</c:out>

<c:when test="${data>='a' && data<='z' }">
<c:out value="소문자">
</c:when>
</c:out>

<c:when test="${data>='A' && data<='Z' }">
<c:out value="대문자">
</c:when>


</c:out>
</c:choose>


</body>
</html>