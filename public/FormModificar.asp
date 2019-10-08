<!--#include file="Conexion.asp"-->
<%
Dim Con
Set Con = new Conexion
%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Modificar</title>
  </head>
  <body>
  <%
  If Con.Conectar Then
    %>
<h2>Conexion establecida</h2>
<h3>Inserta matricula y nuevo nombre</h3>
  <form method="post" action="Modificar.asp">
      <input type="text" name="matricula" placeholder="Matricula" />
      <input type="text" name="nombre" placeholder="Nombre" />
      <input type="submit" value="Enviar datos" />
    </form>
     <%
  Else
   %>
<h2>Error de conexion</h2>
     <%
  End if
%>
  
  </body>
</html>
