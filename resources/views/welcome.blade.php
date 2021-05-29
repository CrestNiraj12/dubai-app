<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">

        <!-- Primary Meta Tags -->
        <title>{{ $meta_title ?? "The Woolwich Institute"}}</title>
        <meta name="description" content="{{ $meta_description ?? 'Official website for the woolwich institute' }}">
        <meta name="keywords" content="{{ $keywords ?? 'TWI, The Woolwich Institute' }}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ Request::url() }}">
        <meta property="og:title" content="{{ $title ?? 'Official website for the woolwich institute' }}">
        <meta property="og:description" content="{{ $og_description ?? 'Official website for the woolwich institute' }}">
        <meta property="og:image" content="{{ isset($image_path) ? 'http://localhost:8080/storage/'.$image_path : ''}}">
        <meta property="og:image:secure_url" content="{{ isset($image_path) ? 'https://localhost:8080/storage/'.$image_path : ''}}" /> 

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ Request::url() }}">
        <meta property="twitter:title" content="{{ $title ?? 'Official website for the woolwich institute' }}">
        <meta property="twitter:description" content="{{ $twitter_description ?? 'Official website for the woolwich institute' }}">
        <meta property="twitter:image" content="{{ isset($image_path) ? 'https://localhost:8080/storage/'.$image_path : ''}}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
    </head>
    <body class="antialiased">
        <div id="content"></div>
        <script src="/js/app.js"></script>
    </body>
</html>
