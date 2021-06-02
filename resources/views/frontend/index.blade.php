@extends('frontend.main')

@section('title', '| Homepage')

@section('stylesheets')

@endsection


@section('content')
 <!-- ################# Slider Starts Here#######################--->
     <div class="slider">
        <!-- Set up your HTML -->
        <div class="owl-carousel ">
            <div class="slider-img">
                <div class="item">
                    <div class="slider-img"><img src="assets/images/slider/slider-1.jpg" alt=""></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                <div class="slider-captions">
                                    <h1 class="slider-title">Study Dental Nursing, Pharmacy Technician at The Woolwich College</h1>
                                    <!--<p class="slider-text hidden-xs">The Woolwich College is a friendly, dynamic institute based in Barnard Close, Woolwich. We are experienced in offering Dental Nursing, Pharmacy Technician, Health and Social Care, Business & IT courses and now offer Tuition from key stage 1 to key stage 4.</p> -->
                                    <a href="#" class="btn btn-success hidden-xs" style="background: #1488CC; background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  border-bottom: none !important;
                                background: linear-gradient(to right, #2B32B2, #1488CC);   border:none;">View All Courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"><img src="assets/images/slider/slider-2.jpg" alt=""></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">Diploma in
Dental Nursing Level 3</h1>
                                <p class="slider-text hidden-xs"></p>
                                <a href="#" class="btn btn-success hidden-xs" style="background: #1488CC; background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  border-bottom: none !important;
                                background: linear-gradient(to right, #2B32B2, #1488CC);  border:none;">Schedule A Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"> <img src="assets/images/slider/slider-3.jpg" alt=""></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">Diploma in
Pharmaceutical Science Level 2 and Level 3</h1>
                                <p class="slider-text hidden-xs"></p>
                                <a href="#" class="btn btn-success hidden-xs" style="background: #1488CC; background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  border-bottom: none !important;
                                background: linear-gradient(to right, #2B32B2, #1488CC); border:none; ">Join Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
        <!-- ################# Key Features Starts Here#######################--->
    <div class="key-features">
        <div class="container">
            <div class="row key-row no-margin">
                <div class="box c1" style="background-color: #1f3860;">
                   <img src="{{url('img/icons/service-icon3.png')}}" style="width: 40px; padding-bottom: 10px;">
                    <p>Dental Nursing Courses</p>
                </div>
                <div class="box c2" style="background: #e52d27; background: -webkit-linear-gradient(to right, #b31217, #e52d27);background: linear-gradient(to right, #b31217, #e52d27);">
                     <img src="{{url('img/icons/service-icon5.png')}}" style="width: 40px; padding-bottom: 10px;">
                    <p>Pharmacy Courses</p>
                </div>
                <div class="box c1" style="background: #e52d27; background: -webkit-linear-gradient(to right, #b31217, #e52d27);background: linear-gradient(to right, #b31217, #af0600);">
                    <i class="fas fa-globe-americas"></i>
                    <p>Business Courses</p>
                </div>
               <!-- <div class="box c2">
                    <i class="fas fa-feather-alt"></i>
                    <p>Animation</p>
                </div> -->
                <div class="box c1" style="background-color: #1f3860;">
                     <i class="fas fa-feather-alt"></i>
                    <p>English Courses</p>
                </div>
            </div>
        </div>
    </div>
    
<!-- ################# popular Cources Starts Here#######################--->
<div class="popular-cources">
    <div class="container">
        <div class="session-title row">
            <h2 style="color: #1f3860;" align="left">SELF-FUNDED COURSES STARTING IN 2020</h2>
            <p align="left">The Woolwich College officially welcomes applications for 2020 intake in General English Courses and Level 2 Diploma in Pharmacy Science and NVQ in Pharmacy Service Skills.</p>
        </div>
        <div class="row courc-ro">
            <div class="col-md-4">
                <div class="courc-card">
                    <img src="img/x1.png" alt="">
                    <div class="cource-det">
                        <h6>Dental Nursing Courses</h6>
                        <ul>
                            <li><i class="fas fa-graduation-cap"></i><b>Qualification:</b> Level 3  <span>Available</span></li>
                            <li><i class="far fa-calendar-plus"></i> <b>Duration:</b> 18 months</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="courc-card">
                    <img src="img/5797.jpg" alt="">
                    <div class="cource-det">
                        <h6>Pharmaceutical Science Course</h6>
                        <ul>
                            <li><i class="fas fa-graduation-cap"></i><b>Qualification:</b> Level 3 <span>Available</span></li>
                            <li><i class="far fa-calendar-plus"></i> <b>Duration:</b> 12 Months</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="courc-card">
                    <img src="img/cc4.jpg" alt="">
                    <div class="cource-det">
                        <h6>Pharmacy Service Skills </h6>
                        <ul>
                            <li><i class="fas fa-graduation-cap"></i><b>Qualification:</b> Level 3 <span>Available</span></li>
                            <li><i class="far fa-calendar-plus"></i><b>Duration:</b>  12 Months</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- New -->
             <div class="col-md-4">
                <div class="courc-card">
                    <img src="img/pharmacy-2.jpg" alt="">
                    <div class="cource-det">
                        <h6>Pharmacy Science & Pharmacy Service Skills Combined</h6>
                        <ul>
                            <li><i class="fas fa-graduation-cap"></i><b>Qualification:</b>Level 3<span>Available</span></li>
                            <li><i class="far fa-calendar-plus"></i><b>Duration:</b>  12 Months</li>
                        </ul>
                    </div>
                </div>
            </div>

             <div class="col-md-4">
                <div class="courc-card">
                    <img src="img/cob1.png" alt="">
                    <div class="cource-det">
                        <h6>General English Language Courses</h6>
                        <ul>
                            <li><i class="fas fa-graduation-cap"></i><b>
                                Just pay £6 per session</b> 
                                 <span>Fee: £40</span></li>
                            <li><i class="far fa-calendar-plus"></i><b>Start Date: Every Monday </b>  </li>
                        </ul>
                    </div>
                </div>
            </div>

             <div class="col-md-4">
                <div class="courc-card">
                    <img src="img/6408.jpg" alt="">
                    <div class="cource-det" style="padding-bottom: 34px;">
                        <h6>Functional Skill Courses</h6>
                        <ul>
                            <li><i class="fas fa-graduation-cap"></i><b>Qualification:</b> Entry 1 to Level 2<span>Available</span></li>
                        

                        </ul>
                    </div>
                </div>
            </div>
            <!-- New -->
        </div>
    </div>
</div>  
         

        
  <!-- ################# University Number Starts Here#######################--->


    <div class="doctor-message">
        <div class="inner-lay">
            <div class="container">
               <div class="row session-title">
                   <h2>The Woolwich College in numbers</h2>
                 <!--  <p>We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities.
But you can read the following facts in order to make sure of all pluses of our clinic:</p> -->
               </div>
                <div class="row">
                    <div class="col-sm-3 numb">
                        <h3>12+</h3>
                        <span>YEARS OF EXPERIENCE</span>
                    </div>
                    <div class="col-sm-3 numb">
                        <h3>20+</h3>
                        <span>Professional Courses</span>
                    </div>
                    <div class="col-sm-3 numb">
                        <h3>52+</h3>
                        <span>QUALIFIED STUFF</span>
                    </div>
                    <div class="col-sm-3 numb">
                        <h3>18+</h3>
                        <span>Diploma CERTIFICATIONS</span>
                    </div>
                </div>
            </div>

        </div>

    </div>     
         
         
         
          
<!-- ################# Our Instructors Starts Here#######################--->    

          
 <!-- ################# Our Blog Starts Here#######################---> 
 
                   
<!--<div class="our-blog">
    <div class="container">
         <div class="session-title row">
            <h2>Our Blog</h2>
        </div>
        
        <div class="row-blog row">
            <div class="col-md-10 vbf mx-auto">
                <div class="blog-card row">
                
                        <div class="col-2">
                           <div class="date-box">
                                <span>Jun</span>
                                <p>3</p>
                                <small>2019</small>
                           </div>
                           
                        </div>
                        <div class="col-7 setv">
                            <h4>Photo Exibition in the Library</h4>
                            <ul>
                                <li>8:00 - 12:00</li>
                                <li>Forest, Avenue, Aenean egestas</li>
                            </ul>
                        </div>
                        <div class="col-3 img-cv">
                            <img src="assets/images/cources/cource-1.jpg" alt="">
                        </div>
                    </div>
                    
                 <div class="blog-card row">
                
                        <div class="col-2">
                           <div class="date-box">
                                <span>Jun</span>
                                <p>2</p>
                                <small>2019</small>
                           </div>
                           
                        </div>
                        <div class="col-7 setv">
                            <h4>Photo Exibition in the Library</h4>
                            <ul>
                                <li>8:00 - 12:00</li>
                                <li>Forest, Avenue, Aenean egestas</li>
                            </ul>
                        </div>
                        <div class="col-3 img-cv">
                            <img src="assets/images/cources/cource-2.jpg" alt="">
                        </div>
                    </div>
                    
                    
                 <div class="blog-card row">
                
                        <div class="col-2">
                           <div class="date-box">
                                <span>Jun</span>
                                <p>4</p>
                                <small>2019</small>
                           </div>
                           
                        </div>
                        <div class="col-7 setv">
                            <h4>Photo Exibition in the Library</h4>
                            <ul>
                                <li>8:00 - 12:00</li>
                                <li>Forest, Avenue, Aenean egestas</li>
                            </ul>
                        </div>
                        <div class="col-3 img-cv">
                            <img src="assets/images/cources/cource-3.jpg" alt="">
                        </div>
                    </div>
                    
                    
                 <div class="blog-card row">
                
                        <div class="col-2">
                           <div class="date-box">
                                <span>Jun</span>
                                <p>6</p>
                                <small>2019</small>
                           </div>
                           
                        </div>
                        <div class="col-7 setv">
                            <h4>Photo Exibition in the Library</h4>
                            <ul>
                                <li>8:00 - 12:00</li>
                                <li>Forest, Avenue, Aenean egestas</li>
                            </ul>
                        </div>
                        <div class="col-3 img-cv">
                            <img src="assets/images/cources/cource-2.jpg" alt="">
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</div> -->
          
  <!-- ################# Our Footer Starts Here#######################---> 





@endsection