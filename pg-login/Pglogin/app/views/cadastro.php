<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Cadastro</title>
</head>
<body>

    <form action="../controllers/cadastroController.php" method="POST">
        <h2>Cadastre-se</h2>
        
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome" required><br><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="senha">Senha:</label><br>
        <input type="password" id="senha" name="senha" required><br><br>

        <label for="tipo_usuario">Eu sou:</label><br>
        <select id="tipo_usuario" name="tipo_usuario" required>
            <option value="candidato">Candidato</option>
            <option value="empresa">Empresa</option>
            <option value="admin">Administrador</option>
        </select><br><br>
        
        <input type="submit" value="Cadastrar">
    </form>

</body>
</html>