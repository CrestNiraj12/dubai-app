@extends('main2')

@section('title', $course['title'])

@section('stylesheets')

@endsection


@section('content')

<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #e2eaf0;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #e2eaf0;
    }
</style>
<title> Pathway to British BBA Degree in Dubai, UAE | {{ $course['title'] }}</title>
<meta name="title" content="{{ $course['title'] }}">
<meta name="description" content="{{ $course['meta_description'] }}">
<meta name="keywords" content="{{ $course['keywords'] }}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{ Request::url() }}">
<meta property="og:title" content="Business Administration UK Qualification, Level 3">
<meta property="og:description" content="{{ $course['og_description'] }}">
<meta property="og:image" content="{{ Voyager::image($course['thumbnail']) }}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{{ Request::url() }}">
<meta property="twitter:title" content="{{ $course['title'] }}">
<meta property="twitter:description" content="{{ $course['twitter_description'] }}">
<meta property="twitter:image" content="{{ Voyager::image($course['thumbnail']) }}">



<section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title">{{ $course['title'] }}</h2>
                    <ul>
                        <li>
                            <a class="active" href="/">Home</a>
                        </li>
                        <li>
                            <a>Courses</a>
                        </li>
                        <li>{{ $course['title'] }}</li>
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
                <img src="{{ Voyager::image($course['thumbnail']) }}" class="img-responsive" /><br />
                {!! $course['content'] !!}
            </div>
        </div>

    </div>
</section>

@endsection