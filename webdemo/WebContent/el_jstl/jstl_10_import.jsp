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
<%--
    <jsp:include />액션태그와 같은 기능을 처리한다.
 --%>
 
 <p>before</p>
 <c:import url="jstl_10+top.jsp">
 <c:param name="data" value="10" />
 </c:import>

</body>
</html>