@extends('main')

@section('title', '| Blog')

@section('stylesheets')

@endsection


@section('content')
<style>
    .d-flex {
        display: flex;
    }

    .justify-content-between {
        justify-content: space-between;
    }

    .invalid-feedback {
        color: red;
        margin-top: 5px;
    }

    @media screen and (max-width: 600px) {

        h4,
        h6 {
            font-size: 13px;
        }
    }
</style>

<title> Pathway to British BBA Degree in Dubai, UAE | Enroll</title>

<section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title">Enroll Course</h2>
                    <h4 style="color:#fff;margin-top: 10px">{{ $course['title'] }}</h4>
                    <ul>
                        <li>
                            <a class="active" href="/">Home</a>
                        </li>
                        <li>Enroll</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-area pt-10" style="margin-bottom: 50px">
    <div>
        <div class="container" style="margin-top: 50px">
            <div class="row">

                <div class="col-md-5 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3" style='margin-bottom: 30px'>
                        <span class="text-muted">
                            Applied Course
                        </span>
                    </h4>
                    <ul class="list-group mb-3 sticky-top">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <span>
                                <img src={{Voyager::image($course['thumbnail'])}}
                                    style="width: 50px; margin: 5px 10px 5px 0" />
                            </span>
                            <div style="padding-right: 5%">
                                <h6 class="my-0">
                                    {{$course['title']}}
                                </h6>
                            </div>
                            <span class="text-muted" style="min-width:72px">
                                د.إ {{ number_format($course['fees'], 2) }}
                            </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>
                                د.إ {{number_format($course['fees'], 2) }}
                            </strong>
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 order-md-1">
                    <div id="content">
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

</section>









@endsection