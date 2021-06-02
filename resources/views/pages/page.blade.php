@extends('main')

@section('title', '| Homepage')

@section('stylesheets')

@endsection


@section('content')
<title>Pathway to British BBA Degree in Dubai, UAE | {{ $page['title'] }}</title>
<meta name="title" content="{{ $page['title'] }}">
<meta name="description" content="{{ $page['meta_description'] }}">
<meta name="keywords" content="{{ $page['keywords'] }}">

@if ($page['hasBreadcrumb'])
<section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative"
    style="{{ ($page['slug'] === 'imp' || $page['slug'] === 'career') ? 'background-image: url(/images/impimage.jpg)' : '' }}">
    <div class=" container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title">{{ $page['title'] }}</h2>
                    <ul>
                        <li>
                            <a class="active" href="/">Home</a>
                        </li>
                        <li>{{ $page['title'] }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
@endif

{!! $page['content'] !!}


@endsection