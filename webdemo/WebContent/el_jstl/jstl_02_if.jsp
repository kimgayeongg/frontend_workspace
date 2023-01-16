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
int num =10;
if(num%2==0)
	out.print("event");
if(num%2==1)
	out.print("odd");
%>

<hr/>
<%--
<c:if test="${조건식}" var="변수명" scope"범위">

</c:if/>
var,scoped은 생략할 수 있다.
 --%>
 <c:set var="num" value="10"></c:set>
 <c:if test="${num%2==0}"></c:if>
 <c:out value="${'even'}"/>
 
 <c:if test="${num%2=ㄴ=1}"></c:if>
 <c:out value="${'odd'}"></c:out>
</body>
</html>