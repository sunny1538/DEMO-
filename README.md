[index.html](https://github.com/user-attachments/files/26134002/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Company</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            line-height: 1.6;
            color: #333;
        }

        header {
            background: #0a2540;
            color: #fff;
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header h1 {
            font-size: 24px;
        }

        nav a {
            color: #fff;
            margin-left: 20px;
            text-decoration: none;
            font-size: 16px;
        }

        .hero {
            background: linear-gradient(to right, #007bff, #00c6ff);
            color: #fff;
            padding: 100px 50px;
            text-align: center;
        }

        .hero h2 {
            font-size: 48px;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 20px;
            margin-bottom: 30px;
        }

        .btn {
            background: #fff;
            color: #007bff;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
        }

        .section {
            padding: 60px 50px;
            text-align: center;
        }

        .services {
            display: flex;
            gap: 20px;
            margin-top: 30px;
        }

        .service {
            flex: 1;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }

        .service h3 {
            margin-bottom: 10px;
        }

        footer {
            background: #0a2540;
            color: #fff;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        @media(max-width: 768px) {
            .services {
                flex-direction: column;
            }

            .hero h2 {
                font-size: 32px;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>YourBrand</h1>
    <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
</header>

<section class="hero">
    <h2>Build Your Digital Presence</h2>
    <p>We create modern, responsive, and professional websites for your business.</p>
    <a href="#" class="btn">Get Started</a>
</section>

<section class="section">
    <h2>Our Services</h2>
    <div class="services">
        <div class="service">
            <h3>Web Design</h3>
            <p>Beautiful and user-friendly website designs tailored to your needs.</p>
        </div>
        <div class="service">
            <h3>Development</h3>
            <p>Fast, secure, and scalable web solutions using modern technologies.</p>
        </div>
        <div class="service">
            <h3>SEO Optimization</h3>
            <p>Improve your search rankings and grow your online visibility.</p>
        </div>
    </div>
</section>

<section class="section" style="background:#f4f4f4;">
    <h2>About Us</h2>
    <p>We are a team of passionate developers and designers dedicated to building high-quality digital experiences.</p>
</section>

<footer>
    <p>© 2026 YourBrand. All rights reserved.</p>
</footer>

</body>
</html>
