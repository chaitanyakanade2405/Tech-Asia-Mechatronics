<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login and Signup Forms</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form id="login-form" class="active">
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required>
                <div class="password-container">
                    <input type="password" name="password" placeholder="Password" required>
                    <span class="toggle-password">👁️</span>
                </div>
                <button type="submit">Login</button>
                <p><a href="#" id="recover-link">Forgot your password?</a></p>
                <p>Don't have an account? <a href="#" id="signup-link">Signup here</a></p>
            </form>
            <form id="signup-form" class="inactive">
                <h2>Signup</h2>
                <input type="text" name="username" placeholder="Username" required>
                <input type="email" name="email" placeholder="Email" required>
                <div class="password-container">
                    <input type="password" name="password" placeholder="Password" required>
                    <span class="toggle-password">👁️</span>
                </div>
                <button type="submit">Signup</button>
                <p>Already have an account? <a href="#" id="login-link">Login here</a></p>
            </form>
            <form id="recover-form" class="inactive">
                <h2>Recover Password</h2>
                <input type="email" placeholder="Email" required>
                <button type="submit">Recover</button>
                <p>Remembered your password? <a href="#" id="back-to-login-link">Login here</a></p>
            </form>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
