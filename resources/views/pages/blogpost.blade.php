@extends('main')

@section('title', '| Homepage')

@section('stylesheets')

@endsection


@section('content')
<title> Pathway to British BBA Degree in Dubai, UAE | {{ $post['title'] }}</title>
<meta name="title" content="{{ $post['title'] }}">
<meta name="description" content="{{ $post['meta_description'] }}">
<meta name="keywords" content="{{ $post['keywords'] }}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{ Request::url() }}">
<meta property="og:title" content="Business Administration UK Qualification, Level 3">
<meta property="og:description" content="{{ $post['og_description'] }}">
<meta property="og:image" content="{{ Voyager::image($post['thumbnail']) }}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{{ Request::url() }}">
<meta property="twitter:title" content="{{ $post['title'] }}">
<meta property="twitter:description" content="{{ $post['twitter_description'] }}">
<meta property="twitter:image" content="{{ Voyager::image($post['thumbnail']) }}">

<section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title">{{ $post['title'] }}</h2>
                    <ul>
                        <li>
                            <a class="active" href="/">Home</a>
                        </li>
                        <li><a href="/blog">Blog</a></li>
                        <li>{{ $post['title'] }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-area pt-10">
    <div class="container">
        <div class="row">
            <div class="col-md-12"><br /><br />
                <img src="{{ Voyager::image($post['thumbnail']) }}" class="img-responsive" style="width: 100%" /><br />
                {!! $post['content'] !!}
            </div>
        </div>

    </div>
</section>









@endsection