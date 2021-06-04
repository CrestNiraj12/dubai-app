<style>
    /* Wrapper */
    .icon-button {
        /* background-color: white; */
        border-radius: 2.6rem;
        cursor: pointer;
        display: inline-block;
        font-size: 1.3rem;
        height: 2.6rem;
        line-height: 2.6rem;
        margin: 0 5px;
        position: relative;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 2.6rem;
    }

    /* Circle */
    .icon-button span {
        border-radius: 0;
        display: block;
        height: 0;
        left: 50%;
        margin: 0;
        position: absolute;
        top: 50%;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        width: 0;
    }

    .icon-button:hover span {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 2.6rem;
        margin: -1.3rem;
    }

    /* Icons */
    .icon-button i {
        background: none;
        color: white;
        height: 2.6rem;
        left: 0;
        line-height: 2.6rem;
        position: absolute;
        top: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        width: 2.6rem;
        z-index: 10;
    }





    .twitter span {
        background-color: #4099ff;
    }

    .facebook span {
        background-color: #3B5998;
    }

    .google-plus span {
        background-color: #db5a3c;
    }

    .tumblr span {
        background-color: #34526f;
    }

    .instagram span {
        background-color: #517fa4;
    }

    .youtube span {
        background-color: #bb0000;
    }

    .pinterest span {
        background-color: #cb2027;
    }



    .icon-button .icon-twitter {
        color: #4099ff;
    }

    .icon-button .icon-facebook {
        color: #3B5998;
    }

    .icon-button .fa-tumblr {
        color: #34526f;
    }

    .icon-button .icon-google-plus {
        color: #db5a3c;
    }

    .icon-button .fa-instagram {
        color: #517fa4;
    }

    .icon-button .fa-youtube {
        color: #fff;
    }

    .icon-button .fa-pinterest {
        color: #cb2027;
    }




    .icon-button:hover .icon-twitter,
    .icon-button:hover .icon-facebook,
    .icon-button:hover .icon-google-plus,
    .icon-button:hover .fa-tumblr,
    .icon-button:hover .fa-instagram,
    .icon-button:hover .fa-youtube,
    .icon-button:hover .fa-pinterest {
        color: white;
    }

    @media all and (max-width: 680px) {
        .icon-button {
            border-radius: 1.6rem;
            font-size: 0.8rem;
            height: 1.6rem;
            line-height: 1.6rem;
            width: 1.6rem;
        }

        .icon-button:hover span {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 1.6rem;
            margin: -0.8rem;
        }

        /* Icons */
        .icon-button i {
            height: 1.6rem;
            line-height: 1.6rem;
            width: 1.6rem;
        }

        body {

            padding: 10px;
        }

        .pinterest {
            display: none;
        }

    }
</style>



<br>
<!-- Start footer area -->
<footer class="footer-area">
    <div class="footer-top ptb-110 navy-bg" style=" padding-top: 20px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="footer-logo-address">
                        <div class="footer-logo">
                            <a href="#"><img src="images/TWI Logo 2.png" alt="" style=" width: 200px;"></a>
                        </div>
                        <div class="footer-address">
                            <div class="header-top-info">
                                <ul>
                                    <li>
                                        <a href="tel:+971-585199542">
                                            <i class="icofont icofont-ui-call"></i> Contact Number
                                            <!-- <p> Contact Number : +971-42769068, +971-526473660 </p> -->
                                            +971-585199542
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@thewoolwichinstitute.com">
                                            <i class="icofont icofont-envelope"></i>
                                            info@thewoolwichinstitute.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icofont icofont-location-pin"></i>
                                            G-35, Block 2A, Knowledge Park, Dubai
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-6">
                    <div class="footer-text">
                        <h3>Courses</h3>
                        <ul class="footer-text-all">
                            <!--   <li><a href="{{url('pearson-hnd-hnc')}}">Pearson HND & HNC</a></li> -->
                            <!--   <li><a href="{{url('tquk-hnd-hnc')}}">TQUK HND & HNC </a></li> -->

                            <li><a href="{{url('tquk-lvl-2-ba-rqf')}}">Business Administration UK Qualification, Level
                                    2</a></li>
                            <li><a href="{{url('tquk-lvl-3-ba')}}">Business Administration UK Qualification, Level 3
                                </a></li>
                            <li><a href="{{url('tquk-lvl-3-ba-rqf')}}">Business Management UK Qualification, Level 4 &
                                    5</a></li>

                            <!--  <li><a href="{{url('tquk-det')}}">TQUK DET</a></li> -->
                            <!--    <li><a href="{{url('value-investing')}}">Value Investing</a></li> -->

                        </ul>


                        <!-- New -->

                        <!-- <div class="col-md-2 col-sm-6">
                            <div class="">
                                <div class="">
                                    
                                    <ul>
                                        <li><a href="https://www.facebook.com/TheWoolwichInstitute/"><i class="icofont icofont-social-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/TheWoolwichInstitute/"><i class="icofont icofont-social-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/the-woolwich-institute"><i class="icofont icofont-social-linkedin"></i></a></li>
                                        <li><a href=" https://www.instagram.com/woolwichinstitute/"><i class="icofont icofont-social-instagram"></i></a></li>
                                        <li><a href=" https://www.youtube.com/channel/UC_1DOx16zzi-50eyjMnxU8Q"><i class="icofont icofont-social-youtube"></i></a></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div> -->

                        <!--  <br>
                    <div class="">
                        
                        <a href="https://www.facebook.com/TheWoolwichInstitute/" class="icon-button facebook" style="font-size: 1.8rem;"><i class="fa fa-facebook"></i><span></span></a>
                        <a href="https://twitter.com/TWI_Dubai" class="icon-button twitter" style="font-size: 1.8rem;"><i class="fa fa-twitter"></i><span></span></a>
                     
                        <a href="https://www.linkedin.com/company/the-woolwich-institute" class="icon-button linkedin" style="font-size: 1.8rem;"><i class="fa fa-linkedin"></i><span></span></a>
                        <a href="https://www.instagram.com/woolwichinstitute/" style="color:#fff; font-size: 1.8rem;" class="icon-button instagram"><i  style="color:#fff !important;" class="fa fa-instagram"></i><span></span></a>
                        
                        
                    </div>   -->


                        <!-- <ul>
                                        <li><a href="https://www.facebook.com/TheWoolwichInstitute/"><i class="icofont icofont-social-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/TheWoolwichInstitute/"><i class="icofont icofont-social-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/the-woolwich-institute"><i class="icofont icofont-social-linkedin"></i></a></li>
                                        <li><a href=" https://www.instagram.com/woolwichinstitute/"><i class="icofont icofont-social-instagram"></i></a></li>
                                       
                                        <li><a href=" https://www.youtube.com/channel/UC_1DOx16zzi-50eyjMnxU8Q"><i class="icofont icofont-social-youtube"></i></a></li>
                                    </ul> -->

                        <!-- New -->
                    </div>



                </div>


                <!-- <div class="col-md-2 col-sm-6">
                            <div class="footer-text">
                                <h3>Education</h3>
                                <ul class="footer-text-all">
                                    <li><a href="{{url('mdp')}}">Management Developement Programme</a></li>
                                    <li><a href="{{url('csdp')}}">Competencies And Skill Developement Programme</a></li>
                                    <li><a href="{{url('fdp')}}">Faculty Developement Programme</a></li>
                                    <li><a href="{{url('efg')}}">Empowerment For Growth</a></li>
                                    
                                </ul>
                            </div>
                        </div> -->

                <div class="col-md-2 col-sm-6">
                    <div class="footer-text mrg-sm3 mrg-xs">
                        <h3>Others</h3>
                        <ul class="footer-text-all">
                            <li><a href="{{url('/career')}}">Work with Us</a></li>
                            <li><a href="{{url('/partner-with-us')}}">Partner with Us</a></li>

                            <!-- <li><a href="{{url('summner-activity')}}">Summer Activity Programme</a></li> -->
                            <li><a href="{{url('internship')}}">International Internship</a></li>
                            <li><a href="{{url('blog')}}">Blog</a></li>
                            <li><a href="{{url('news')}}">News</a></li>
                            <li><a href="{{url('downloads')}}">Downloads</a></li>
                        </ul>
                    </div>
                </div>

                <!-- <div class="col-md-2 col-sm-6">
                            <div class="footer-text mrg-xs">
                                <h3>Corporate</h3>
                                <ul class="footer-text-all">
                                    <li><a href="{{url('cds')}}">Compliance And Data Security</a></li>
                                    <li><a href="{{url('banking-finance')}}">Banking Finance</a></li>
                                    
                                </ul>
                            </div>
                        </div> -->
                <!-- <div class="col-md-6 col-sm-6">
                            <div class="footer-text mrg-sm3 mrg-xs">
                               <h3>Contact Us</h3>
                               <form action="#">
                                    <input placeholder="Name*" type="text">
                                    <input class="in-mrg" placeholder="Email*" type="email">
                                    <textarea placeholder="Message*"></textarea>
                                    <button class="submit" type="submit">send</button>
                                </form>
                            </div>
                        </div> -->



                <div class="col-md-2 col-sm-6">
                    <div class="footer-text mrg-xs">
                        <h3>Contact Us</h3>
                        <ul class="footer-text-all">
                            <li><a href="{{url('contact')}}">Contact Us</a></li>
                            <li><a href="{{url('enquiry')}}">Enquire Now</a></li>

                            <li><a href="{{url('applicationform')}}">Apply Now</a></li>
                            <li><a href="{{url('career')}}">Career</a></li>
                            <li><a href="{{url('/coronavirus-info')}}"> Coronavirus Information</a></li>
                            <li><a href="{{url('imp')}}">International Mobility Programme</a></li>
                            <li><a href="{{url('../docs/Data Protection Policy.pdf')}}">Data Protection Policy</a></li>

                        </ul>
                    </div>
                </div>


                <!-- New -->
                <div class="col-md-2 col-sm-6">
                    <div class="footer-text mrg-xs">
                        <h3>Connect with Us</h3>

                        <a href="https://www.facebook.com/TheWoolwichInstitute/" class="icon-button facebook"
                            style="font-size: 1.8rem;"><i class="fa fa-facebook"></i><span></span></a>
                        <a href="https://twitter.com/TWI_Dubai" class="icon-button twitter"
                            style="font-size: 1.8rem;"><i class="fa fa-twitter"></i><span></span></a>

                        <a href="https://www.linkedin.com/company/the-woolwich-institute" class="icon-button linkedin"
                            style="font-size: 1.8rem;"><i class="fa fa-linkedin"></i><span></span></a>
                        <a href="https://www.instagram.com/woolwichinstitute/" style="color:#fff; font-size: 1.8rem;"
                            class="icon-button instagram"><i style="color:#fff !important;"
                                class="fa fa-instagram"></i><span></span></a>

                    </div>
                </div>
                <!-- New -->

            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="footer-bottom-text ptb-20">
                        <p>
                            Copyrights © <a href="#"> The Woolwich Institute, Dubai</a>
                            <!-- Developed By Ashutosh Rajbhandari -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- End footer area -->
<!-- start scrollUp
        ============================================ -->
<div id="toTop">
    <i class="fa fa-chevron-up"></i>
</div>