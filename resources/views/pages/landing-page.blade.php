@extends('main')

@section('title', '| Homepage')




@section('stylesheets')

@endsection


@section('content')
<!-- Start of slider area -->
<div class="slider-area">
    <div class="slider-active">

        @foreach ($carousel as $citem)
        <div class="slider-all">
            <img src="{{ Voyager::image($citem['image']) }}" alt="">
            <div class="slider-text-wrapper">
                <div class="table">
                    <div class="table-cell">
                        <div class="slider-text animated">
                            <h1>{{ $citem['heading'] }}</h1>
                            <p>{{ $citem['description'] }}</p><br />
                            <a class="button extra-small mb-20" href="{{ $citem['link'] }}">
                                <span>{{ $citem['buttonText'] ?? "Read More" }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
<!-- End of slider area -->
<!-- Start page content --><br>
<section class="service-area white-bg ptb-110">
    <!-- Demo Section    -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="service-all white-bg">

                    <div class="row">
                        <div class="container-fluid">

                            <h2>About The Woolwich Institute</h2>
                            <p>The Woolwich Institute, Dubai is an international academic institute offering certified
                                vocational qualifications in the heart of Dubai. Established by team of education
                                leaders with a proven record of providing quality education globally. The Woolwich
                                Institute strives at empowering learners with a variety of internationally accredited
                                and globally recognized courses with professional certification.
                                <br>
                                The Woolwich Institute, Dubai is a KHDA licensed institution, approved by Knowledge
                                Park, Dubai which facilitates students with excellent infrastructure and student
                                friendly environment.</p>
                            <a class="button extra-small mb-20" href="/about">
                                <span>Read More</span>
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="service-from navy-bg"
                    style="/* padding-top: 87px; *//* padding-bottom: 70px; */padding-top: 0px;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;">
                    <!-- <img align="center" src="images/TWI Logo 2.png" style="
                             width: 200px;
                             padding-right: 0px;
                             border-bottom-width: 7px;
                             padding-bottom: 30px;
                             padding-top: 30px;
                             margin-top: 32px;
                             ">   -->

                    <img align="center" src="https://i.imgur.com/rOuuoep.jpg" width="100%" height="100%" style="
                            /* width: 200px;
                             padding-right: 0px;
                             border-bottom-width: 7px;
                             padding-bottom: 30px;
                             padding-top: 30px;
                             margin-top: 32px; */
                             ">
                </div>
                <!-- <div class="service-from navy-bg" style="padding-top: 87px;padding-bottom: 70px;"> -->
                <!-- <img align="center" src="images/TWI Logo 2.png" style="
                             width: 200px;
                             padding-right: 0px;
                             border-bottom-width: 7px;
                             padding-bottom: 30px;
                             padding-top: 30px;
                             margin-top: 32px;
                             ">   -->

                <!-- <img align="center" src="https://i.imgur.com/XXtU5uZ.jpg" width="100%" height="100%" style="
                            /* width: 200px;
                             padding-right: 0px;
                             border-bottom-width: 7px;
                             padding-bottom: 30px;
                             padding-top: 30px;
                             margin-top: 32px; */
                             ">  -->

                <!--    <img align="center" src="https://i.imgur.com/rOuuoep.jpg" width="100%" height="100%" style="
                            /* width: 200px;
                             padding-right: 0px;
                             border-bottom-width: 7px;
                             padding-bottom: 30px;
                             padding-top: 30px;
                             margin-top: 32px; */
                             ">
                        </div> -->
            </div>
        </div>
    </div>
</section>

<div class="container-fluid">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center pt-110 mb-60">
                    <h1 class="uppercase">Our Mission & Vision</h1>
                    <p></p>
                    <div class="separator my mtb-15">
                        <i class="icofont icofont-hat-alt"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="news-are">
                    <div class="news-img">
                        <img src="images/mission.jpg" alt="" class="responsive">

                    </div>
                    <div class="img-text gray-bg">
                        <h3><a href="#">Mission</a></h3>
                        <p>Commited to excellence in delivering Skill based Education, TWI strives for continuous
                            improvement and Higher Quality standards for all its stakeholders.</p>
                        <a class="button extra-small" href="/about">
                            <span>Read More</span>
                        </a><br>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="news-are mrg-xs">
                    <div class="news-img">
                        <img src="images/col-bg-2.jpg" class="responsive" style="/*height: 224px;*/" alt="">

                    </div>
                    <div class="img-text gray-bg" style="padding-bottom: 14px; padding-top: 10px;">
                        <h3><a href="#">Vision</a></h3>
                        <p>To be a premier institute imparting Quality Education and Cutting-Edge industry relevant
                            Skill sets for the digital age.</p>
                        <a class="button extra-small" href="/about">
                            <span>Read More</span>
                        </a><br><br><br>
                    </div>
                </div>
            </div>
            <div class="col-md-4 hidden-sm">
                <div class="news-are mrg-xs">
                    <div class="news-img">
                        <img src="images/value.jpg" class="responsive" style=" /*height: 216px;*/" alt="">

                    </div>
                    <div class="img-text gray-bg">
                        <h3><a href="#">Values</a></h3>
                        <p>Persistently pursuing Excellence. Maintaining High Quality Standards in imparting Education.
                            Creating Healthy and Creative environments for learners.</p>
                        <a class="button extra-small" href="/about">
                            <span>Read More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div><br><br><br><br>




<div class="counter-area bg-2 bg-opacity bg-relative ptb-110" style="background: url('images/life-title-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-3 text-center">
                <div class="counter-bottom2">
                    <div class="counter-img">
                        <img src="images/icons/1.png" alt="">
                    </div>
                    <div class="counter-all">
                        <div class="counter-next2">
                            <h2>Teachers</h2>
                        </div>
                        <div class="counter cnt-two">
                            <h1>34</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3  text-center">
                <div class="counter-bottom2 mrg-xs">
                    <div class="counter-img">
                        <img src="images/icons/2.png" alt="">
                    </div>
                    <div class="counter-all">
                        <div class="counter-next2">
                            <h2>Students</h2>
                        </div>
                        <div class="counter cnt-two">
                            <h1>3554</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3  text-center">
                <div class="counter-bottom2 mrg-xs">
                    <div class="counter-img">
                        <img src="images/icons/3.png" alt="">
                    </div>
                    <div class="counter-all">
                        <div class="counter-next2">
                            <h2>Research</h2>
                        </div>
                        <div class="counter cnt-two">
                            <h1>354</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3  text-center">
                <div class="counter-bottom2 mrg-xs">
                    <div class="counter-img">
                        <img src="images/icons/4.png" alt="">
                    </div>
                    <div class="counter-all">
                        <div class="counter-next2">
                            <h2>Awards</h2>
                        </div>
                        <div class="counter cnt-two">
                            <h1>44</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="testimonial-area ptb-110">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-3">
                <div class="testimonial-text">
                    <h2>Our Student Say</h2>
                </div>
            </div>
            <div class="col-md-9 col-sm-9">
                <div class="slider-active2">
                    <div class="testimonial-all">
                        <div class="testimonial-peragraph">
                            <p>From the very first day at TWI, I was amazed by the environment and teaching cultures.
                                The helpful staff and fellow students were always there for me to acknowledge the
                                interesting areas of business and administration.
                                A fantastic opportunity for me to develop career and leadership skills via International
                                internship organized by The Woolwich Institute.</p>
                        </div>
                        <div class="testimonial-img">
                            <img alt="" src="images/TWI Logo.png" style="width: 546px;">
                            <div class="img-title navy-bg">
                                <h3>Diploma in Business Administration, Level 2 </h3>
                                <p>Adrian Robertson</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-all">
                        <div class="testimonial-peragraph">
                            <p>Learning aspect of the TWI has always been friendlier and supportive for me.
                                Opportunity to get a UK degree in Dubai was an amazing new experience which gives a
                                competitive edge in my career not only at the national but at global level.
                                This TQUK accredited course helped me to embark on my business insights just within the
                                short time span of 10 months.

                            </p>
                        </div>
                        <div class="testimonial-img">
                            <img alt="" src="images/TWI Logo.png" style="width: 546px;">
                            <div class="img-title navy-bg">
                                <h3>
                                    Diploma in Business Administration, Level 3
                                </h3>
                                <p>Lisa Crighton</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-all">
                        <div class="testimonial-peragraph">
                            <p>The atmosphere at TWI is quite different and optimistic than other colleges. At the peak
                                time of my career where I was in dilemma to choose a path, the summer activity programme
                                at TWI introduced me with international experience and exposure through a variety of
                                workshops.
                                This new opportunity has given me a new vision of an optimistic outlook toward things in
                                a very self-confident way.
                            </p>
                        </div>
                        <div class="testimonial-img">
                            <img alt="" src="images/TWI Logo.png" style="width: 546px;">
                            <div class="img-title navy-bg">
                                <h3>Summer activity programme</h3>
                                <p>Sanna Lennon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End page content -->




@endsection