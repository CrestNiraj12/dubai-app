<!-- Start of header area -->
<header class="header-area">
    <div class="header-top navy-bg ptb-20">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="header-top-info">
                        <ul>
                            <li>
                                <a href="tel:+971-585199542">
                                    <i class="icofont icofont-ui-call"></i>
                                    Contact Number +971-585199542
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@thewoolwichinstitute.com">
                                    <i class="icofont icofont-envelope"></i>
                                    info@thewoolwichinstitute.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 hidden-xs">
                    <div class="header-top-right f-right">
                        <div class="header-top-social f-right" style="height: 39px; margin-top: 7px;">
                            <p>Follow Us :</p>
                            <ul>
                                <li><a href="https://www.facebook.com/TheWoolwichInstitute/"><i
                                            class="icofont icofont-social-facebook"></i></a></li>
                                <li><a href="https://twitter.com/TWI_Dubai"><i
                                            class="icofont icofont-social-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/the-woolwich-institute"><i
                                            class="icofont icofont-social-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/woolwichinstitutedubai/"><i
                                            class="icofont icofont-social-instagram"></i></a></li>
                                <li><a href=" https://www.youtube.com/channel/UC_1DOx16zzi-50eyjMnxU8Q"><i
                                            class="icofont icofont-social-youtube"></i></a></li>
                            </ul>
                        </div>
                        <!-- <div class="header-top-language f-left">
                                    <ul>
                                        <li><a href="#" data-toggle="dropdown">English<i class="icofont icofont-simple-down"></i></a>
                                            <ul class="dropdown-menu">
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </div> -->

                        <!-- New -->
                        <a class="button extra-small mb-0" href="{{url('enquiry')}}" tabindex="-1">
                            <span>Enquire Now</span>
                        </a>

                        <a class="button extra-small mb-0" href="{{url('applicationform')}}" tabindex="-1"
                            style="background-color: #bc2234;">
                            <span>Apply Now</span>
                        </a>
                        <!-- New -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom stick-h2">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="logo" style="padding-top: 8px; padding-bottom: 8px;">
                        <a href="{{url('/')}}"><img src="/images/TWI Logo.png" style="width: 200px;"
                                alt="The Woolwich Institute Dubai"> </a>
                    </div>
                </div>
                <div class="col-md-8 hidden-sm hidden-xs">
                    <div class="menu-area f-right">
                        <nav>

                            {!! $navigations !!}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- mobile-menu-area start -->

<div class="mobile-menu-area">
    <div class="container">
        <div class="row">
            <div class="hidden-lg hidden-md col-sm-12 col-xs-12">
                <div class="mobile-menu">
                    <nav id="dropdown">
                        {!! $navigations !!}
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class="mobile-menu-area">
            <div class="container">
                <div class="row">
                    <div class="hidden-lg hidden-md col-sm-12 col-xs-12">
                        <div class="mobile-menu">
                            <nav id="dropdown">
                                  <ul>
                                       
                                        <li><a href="{{url('about')}}">ABOUT US </a></li>
                                         <li ><a href="#">EDUCATION</a>

                                            <ul>
                                                 <li><a href="{{url('mdp')}}">Management Developement Programme</a></li>
                                                <li><a href="{{url('csdp')}}">Competencies And Skill Developement Programme</a></li>
                                                <li><a href="{{url('fdp')}}">Faculty Developement Programme</a></li>
                                                <li><a href="{{url('efg')}}">Empowerment For Growth</a></li>
                                            </ul>



                                         </li>
                                        <li class="coloumn-one"><a href="#">CORPORATE</a>
                                            <ul>
                                                <li><a href="{{url('cds')}}">Compliance And Data Security</a></li>
                                                <li><a href="{{url('banking-finance')}}">Banking Finance</a></li>
                                                
                                            </ul>
                                        </li>
                                        <li><a href="news-page.html">ACTIVITY PROGRAMME</a>

                                               <ul>
                                                 <li><a href="{{url('imp')}}">International Mobility Programme</a></li>
                                                <li><a href="{{url('summer-activity')}}">Summer Activity Programme</a></li>
                                                <li><a href="{{url('internship')}}">International Internship</a></li>
                                                
                                            </ul>  
                                        </li>
                                        <li><a href="{{url('campus-life')}}">CAMPUS LIFE</i> </a>

                                            <ul>
                                                <li><a href="{{url('gallery')}}">Gallery</a></li>
                                            </ul>
                                        
                                        </li>
                                        <li><a href="{{url('contact')}}">CONTACT US</a></li>
                                    </ul>
                              
                            </nav>
                        </div>                  
                    </div>
                </div>
            </div>
        </div> -->
<!-- mobile-menu-area end -->
<!-- End of header area -->