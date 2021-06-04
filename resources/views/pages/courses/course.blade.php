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

    .enroll-card {
        position: absolute;
        bottom: 50px;
        left: 30px;
        padding: 20px 50px;
        background-color: #203860;
    }

    .enroll-card a.btn {
        padding: 10px 20px;
        margin-top: 10px;
        height: 50px;
    }

    @media screen and (max-width: 768px) {
        .enroll-card {
            position: relative;
            bottom: 0;
            left: 0;
            padding: 20px 30px;
        }

        .enroll-card h5 {
            font-size: 14px;
            margin-top: 10px;
        }

        .enroll-card a.btn {
            padding: 0px 15px;
            margin-top: 10px;
            height: 40px;
        }
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
                <div style="position:relative;bottom: 20px">
                    <img src="{{ Voyager::image($course['thumbnail']) }}" class="img-responsive" />
                    <div class="enroll-card">
                        <h5 style="color: #ff4545">Enroll course</h5>
                        <h4 style="color: #fff;">{{$course['title']}}</h4>
                        <p style="color: #fff;">Price:
                            {{ $course['fees'] <=0 ? "Not fixed" : "د.إ " . $course['fees']}}
                        </p>
                        <!--<form style="display: flex">
                            <input name="coupon" type="text" style="background: white" />
                            <input type="submit" class="btn btn-primary" value="Apply Coupon" />
                        </form>-->
                        @if (isset($course['fees']) && $course['fees'] > 0)
                        <a href="/enroll/{{$course['id']}}" class="btn btn-primary">Enroll Now</a>
                        @else
                        <p>Sorry! The price of the course is not fixed at the moment!</p>
                        @endif
                    </div>
                </div>
                {!! $course['content'] !!}
            </div>
        </div>

    </div>

</section>




@endsection