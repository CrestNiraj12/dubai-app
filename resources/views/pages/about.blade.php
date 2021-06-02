@extends('main')

@section('title', '| Homepage')

@section('stylesheets')

@endsection


@section('content')

     <section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="breadcrumbs">
                            <h2 class="page-title">About Us</h2>
                            <ul>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                                <li>
                                    <a>Pages</a>
                                </li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section class="about-area pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="about-text">
                            <h2>Welcome To The Woolwich Insitute</h2>
                            <italic>“Education for the foundation of a better future.”</italic><br/><br/>
                            <p>The Woolwich Institute, Dubai is an international academic institute offering certified vocational & professional qualifications in the heart of Dubai. Established by a team of education leaders, with a proven record of providing quality education globally, The Woolwich Institute strives to empower learners with a variety of internationally accredited and globally recognised courses that provide professional certification. With a vocational curriculum on offer and a range of Business Management programmes, The Woolwich Institute aims to prepare future business leaders through learning based on real scenarios and case studies.<br>
TWI is steadily working to bring about a transformation in the development of global leaders within the educational field, with the help of its innovative programmes, state of the art technology and highly qualified faculty members. In order to give students that important global edge, TWI is building a welcoming, working community that, in the near future will create experts and leaders for some of the best companies in the World.

</p>
                         
                            </p>

                            <a class="button extra-small mb-20" href="{{url('enquiry')}}" tabindex="0">
                                <span>Enquire Now</span>
                            </a>
                           
                           
                        </div>
                    </div>
                    <div class="col-md-6 mb-60 mrg-btm-about col-sm-6">
                        <div class="book-img">
                            <img alt="#" src="https://i.imgur.com/XXtU5uZ.jpg" >
                        </div>
                    </div>
                </div>
            </div>
            
            
            <!-- New -->
            <div class="container-fluid">
                
                <div class="accordion_menus">
  <div>
    <input id="accordion1" name="accordion_menus" type="radio">
    <label style="color:#fff;" for="accordion1">The College</label>
    <section class="html">
        <h4></h4>
        <p>
            The Woolwich Institute, Dubai is an international academic institute offering certified vocational & professional qualifications in the heart of Dubai. Established by a team of education leaders, with a proven record of providing quality education globally, The Woolwich Institute strives to empower learners with a variety of internationally accredited and globally recognised courses that provide professional certification. With a vocational curriculum on offer and a range of Business Management programmes, The Woolwich Institute aims to prepare future business leaders through learning based on real scenarios and case studies.<br><br>
TWI is steadily working to bring about a transformation in the development of global leaders within the educational field, with the help of its innovative programmes, state of the art technology and highly qualified faculty members. In order to give students that important global edge, TWI is building a welcoming, working community that, in the near future will create experts and leaders for some of the best companies in the World.<br><br>
The aim of the institute is to:<br><br>
       ·   Present a competitive and technical approach to providing research for students, and training them in a variety of fields in order to meet corporate demands. <br>
·         To provide students with a forward-thinking, demanding education, in a peaceful and reviving environment that fosters a strong sense of discipline and social importance.<br><br>
<b>**The Woolwich Institute, Dubai is a KHDA licensed institution, approved by Knowledge Park, Dubai which facilitates students with excellent infrastructure and a student-friendly environment.</b>

            
        </p>
    </section>

    <!-- ============================================================
                    Sub-heading HTML 
    ==============================================================-->
    <!-- <div class="accordion_menus">
          <input id="sub-accordion1" name="sub-accordion_menus1" type="checkbox">
          <label style="color:#fff;" for="sub-accordion1">sub-Menu</label>
          <section>
            <h4>This is pure HTML and CSS Accordion Menu designed for your next project</h4>
            <p>sub-HTML1:used for structuring</p>
          </section>
          <input id="sub-accordion2" name="sub-accordion_menus1" type="checkbox">
          <label style="color:#fff;" for="sub-accordion2">sub-Menu</label>
          <section>
            <h4>This is the sub-header of Accordion menu developed with pure CSS</h4>
            <p>sub-HTML2:used for structuring</p>
          </section>
    </div> -->
    <!-- ============================================================-->
                  
  </div>

        <div>
          <input id="accordion2" name="accordion_menus" type="radio">
          <label style="color:#fff;" for="accordion2">Why Us ?</label>
          <section class="CSS">
           <h4></h4>
           <p>
               TWI prides itself on being a welcoming, friendly, diverse and creative institute. It is a performance, potential, and excellence-based organisation that commits itself to building a proven legacy of quality education, through its team of globally recognised leaders. <br><br>

Dubai has emerged as a global city and TWI is the first institution in Dubai to impart Training Qualification UK (TQUK) certified courses, as approved by KHDA (a licensed institution in Dubai). Training Qualification UK has been designed as an Awarding Organisation without limits, which bridges the way of sustained careers at a global level. <br><br>

The Woolwich Institute is offering Business Administration and Management courses. These courses help to equip learners with the skills and credits they need to embark on a career in a variety of business environments.<br><br>

The Woolwich Institute provides students with as much assistance as they need in order to develop their own experience, at an academic and personal level, in a welcoming and comfortable atmosphere. TWI further provides post-academic assistance for all of its graduates.<br><br>

The main TWI campus is in Dubai Knowledge Park. Located in a hub of universities, it is just a few minutes from the world-famous attractions, Palm Jumeirah and Burj al Arab. <br><br>



               
           </p>
          </section>
          
          <!-- New Sub Menu Section -->
          <div class="accordion_menus">
          <input id="sub-accordion1" name="sub-accordion_menus1" type="checkbox">
          <label style="color:#fff;" for="sub-accordion1">Knowledge Park Campus </label>
          <section>
            <h4></h4>
            <p>The Knowledge Village Campus, Dubai is a vibrant student-centred area that incorporates a wide range of universities - including Wollongong University, Murdoch University, Abu Dhabi University, and Choueifat International School
            <br><br>
            The Knowledge Village Campus, Dubai is a vibrant student-centred area that incorporates a wide range of universities - including Wollongong University, Murdoch University, Abu Dhabi University, and Choueifat International School.<br><br>
·   All TWI  courses are taught on the main campus.<br>
·   The Dubai Knowledge Park is situated next to the Dubai Media City and Dubai Internet City and has exceptional public transport connections, including the Dubai Metro and tramway. <br>
·   All necessary facilities are provided on campus.<br>
            
            </p>
          </section>
          <input id="sub-accordion2" name="sub-accordion_menus2" type="checkbox">
          <label style="color:#fff;" for="sub-accordion2">Social Life </label>
          <section>
            <h4></h4>
            <p>
             ·       Dubai Knowledge Park is home to more than 3000 professionals across a wide range of sectors.<br>
·         The area hosts more than 500 companies and has become a centre of excellence for higher education and vocational advancement.<br>
·         The campus provides co-working spaces that are fully integrated for working individuals.<br>
·         The campus provides students with a multicultural experience<br>
·         It boats an ICDL lab and a GIS lab<br>
·         The campus has an auditorium with a separate video-conferencing room
·         The campus has 2 breakout areas with one food court.<br>
·         The campus is surrounded by famous restaurants, supermarkets, beaches, and malls.<br>
·         The nearest hospitals are Saudi-German, Mediclinic Al Sufouh, and Dubai London Clinic. Within Knowledge Village, there are also a number of clinics and dentists.<br>
·         The DXB international airport is a 20-minute drive from the campus.
            </p>
          </section>
          
          <input id="sub-accordion3" name="sub-accordion_menus3" type="checkbox">
          <label style="color:#fff;" for="sub-accordion3">Connect Online </label>
          <section>
            <h4></h4><p>The Woolwich Institute is active on all main social media platforms, including <br>Facebook <a href="https://www.facebook.com/TheWoolwichInstitute/" style="color:red;">(https://www.facebook.com/TheWoolwichInstitute/)</a>,<br> Twitter <a href="https://twitter.com/TWI_Dubai" style="color:red;">(https://twitter.com/TWI_Dubai)</a>, <br>Instagram <a href="https://www.instagram.com/woolwichinstitute/" style="color:red;">(https://www.instagram.com/woolwichinstitute/)</a>, and <br>YouTube <a href="https://www.youtube.com/channel/UC_1DOx16zzi-50eyjMnxU8Q "style="color:red;">(https://www.youtube.com/channel/UC_1DOx16zzi-50eyjMnxU8Q)</a></p>
          </section>
          
          <input id="sub-accordion4" name="sub-accordion_menus4" type="checkbox">
          <label style="color:#fff;" for="sub-accordion4">Student Services </label>
          <section>
            <h4></h4>
            <p> The Woolwich Institute Student Services Teams are here to support all students before, during and after their studies.</p>
          </section>
          
          <input id="sub-accordion5" name="sub-accordion_menus5" type="checkbox">
          <label style="color:#fff;" for="sub-accordion5">Learning Support </label>
          <section>
            <h4></h4>
            <p>Blended Learning: On-campus (in-person) classes are available, however throughout the Covid pandemic, online classes will be made available to all students.
TWI has an Online portal that provides all students with access to the digital library</p>
          </section>
          
          <input id="sub-accordion6" name="sub-accordion_menus6" type="checkbox">
          <label style="color:#fff;" for="sub-accordion6">Accommodation & Living costs</label>
          <section>
            <h4></h4>
            <p> ·  While students may decide to live in private accommodation, TWI also offers student accommodation assistance.<br>
·         To find out more about the accommodation options at The Woolwich Institute and how much it costs to live and study in the UK/Dubai</p>
          </section>
    </div>
          
          <!-- New Sub Menu Section -->
          
        </div>
        <!--<div>
          <input id="accordion3" name="accordion_menus" type="radio">
          <label style="color:#fff;" for="accordion3">Our Mission and Values </label>
          <section class="js">
            <h4>TWI  </h4>
        <p>TWI</p>
          </section>
        </div> -->
        <div>
          <input id="accordion4" name="accordion_menus" type="radio">
          <label style="color:#fff;" for="accordion4">Equality & Diversity</label>
          <section class="js">
             <h4></h4>
        <p>The Woolwich Institute is proud of its diversity and recognises the value that this brings to College life. The College embraces and celebrates the differences between people, acknowledging the strengths and benefits of a diverse, inclusive society, workforce, and student body. In the spirit of its founder, The Woolwich Institute believes that education should be available to all sectors of society, providing an inclusive working and learning environment for students and staff, so that they may all develop to their full potential.<br><br>
This ethos is further reflected in our diverse faculty, who hail from a variety of different cultures and backgrounds. They show an unparalleled commitment to their students and subjects, and dedicate themselves to supporting students throughout the entire learning process. With their range of experience and expertise, the faculty provide students with an education that allows them to face new obstacles worldwide - while effectively embracing diverse communities. In doing this, TWI aims to increase the students quality of living, whilst helping to build a versatile and more trained workforce.

        </p>
          </section>
        </div>
        <!-- New -->
         <div>
          <input id="accordion5" name="accordion_menus" type="radio">
          <label style="color:#fff;" for="accordion5">Ranking & Accreditation</label>
          <section class="js">
             <h4></h4>
        <p>The Woolwich Institute in Dubai provides its students with TQUK courses under the accreditation of OFQUAL (The Office of Qualifications and Examinations Regulation, which regulates qualifications, examinations, and assessments in England) and approved by KHDA in Dubai, UAE.
        </p>
          </section>
        </div>
        
         <div>
          <input id="accordion6" name="accordion_menus" type="radio">
          <label style="color:#fff;" for="accordion6">Links with the UK</label>
          <section class="js">
             <h4> </h4>
        <p>The Woolwich Institute is linked with its sister establishment, The Woolwich College (TWC) in London, England as both entities have the same ownership. This link further fosters the diverse ethos of the Institute, whilst opening up global opportunities for its students. By working together with this British partner, TWI is able to offer students a quicker and more affordable way to obtain a UK degree - right here in Dubai. 

        </p>
          </section>
        </div>
        <!-- New -->
        
      </div>
  
            </div>
            
            <!-- New -->
            <div class="container">
               <!--<p class="about-text-top">
                   
                   
                                <b>Why The Woolwich Institute, Dubai?</b><br/>
                                
                                Dubai has emerged as a global city and The Woolwich Institute is the first institution in Dubai to impart the Training Qualification UK (TQUK) certified courses as being approved by KHDA, a licensed institution in Dubai.

Training Qualification UK has been designed as an Awarding Organization without limits where you can bridge the way of sustained career at the global level. The Woolwich Institute is offering Business Administration and Management courses. These courses help to equip our learners with the skills and credits to embark on a career in a variety of business environments.
<br/><br/>

<b>Why choose TQUK courses?</b><br/>
They are recognised by the Office of Qualification and Examinations Regulation, England (Ofqual) and award RFQ courses in a number of sectors.<br/>
TQUK will carry out an External Quality Assurance of the qualifications at the end of courses.<br/>
Get high-quality courses and content regulated and sit on the Regulated Qualifications Framework (RFQ).<br/>
Consulting services which facilitates and provides solutions to many requests via the knowledgeable team at TQUK.
</div> -->

                                
        </section>



        <!-- New -->
               <section class="events-page ptb-110">
            <div class="container">
                <div class="row">
                           <h2 align="center">Our Mission And Values</h2><br>
                    <div class="col-md-6 col-sm-12">
                        <div class="event-text-img">
                            <div class="event-img3" style="margin-left: 32px; margin-right: 32px;
                              border-top-width: 32px; margin-top: 32px;  margin-bottom: 0px;">
                                <a href="#"><img src="images/icons8-university-100.png" alt=""></a>
                                
                            </div>
                            <div class="visual-inner">
                                <h3 class="blog-title">
                                    <a href="#">Philosophy</a>
                                </h3>
                               
                                <div class="blog-content">
                                    <p>The Woolwich Institute, Dubai believes that in the 21st century, social responsibility is a key skill for any community or society to bloom. As such, it has curated an ethos of learning through interaction, rather than theoretical study.    
                                    <br><br><br></p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="event-text-img mrg-sm2 mrg-xs">
                            <div class="event-img3" style="margin-left: 32px; margin-right: 32px;
                              border-top-width: 32px; margin-top: 32px;  margin-bottom: 32px;">
                                <a href="#"><img src="images/icons8-globe-100.png" alt=""></a>
                                
                            </div>
                            <div class="visual-inner">
                                <h3 class="blog-title">
                                    <a href="#">TWI's Principle</a>
                                </h3>
                               
                                <div class="blog-content">
                                    <p>TWI believes in quality over quantity, and as such aims to empower its learners with quality education and prolific skill development.
                                    It is TWI’s mission to foster future leaders and enable learning, not only through academics, but also via a variety of vocational programmes. 
                                    As such communication between different disciplines and faculties is encouraged, in order to offer highly effective and precise active learning sessions - which are always conducted with prompt feedback.</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="event-text-img mt-40">
                            <div class="event-img3" style="margin-left: 32px; margin-right: 32px;
                              border-top-width: 32px; margin-top: 32px;  margin-bottom: 32px;">
                                <a href="#"><img src="images/icons8-books-100.png" alt=""></a>
                               
                            </div>
                            <div class="visual-inner">
                                <h3 class="blog-title">
                                    <a href="#">Mission</a>
                                </h3>
                                <div class="blog-meta">
                                    
                                </div>
                                <div class="blog-content">
                                    <p>TWI strives for continuous improvement and higher quality standards for all its stakeholders, and is committed to excellence in delivering skill based education.<br><br><br><br><br></p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="event-text-img mt-40">
                            <div class="event-img3" style="margin-left: 32px; margin-right: 32px;
                              border-top-width: 32px; margin-top: 32px;  margin-bottom: 32px;">
                                <a href="#"><img src="images/icons8-certificate-100.png" alt=""></a>
                               
                            </div>
                            <div class="visual-inner">
                                <h3 class="blog-title">
                                    <a href="#">Vision</a>
                                </h3>
                                <div class="blog-meta">
                                    
                                </div>
                                <div class="blog-content">
                                    <p> To be a premier academic institute that imparts quality education and cutting edge, industry-relevant skill sets, for the digital age - whilst creating an environment of learning, where all stakeholders are able to grow and realise their full potential.
                                    </p>
                                    <br>
                                     <h3 class="blog-title">
                                    <a href="#">Values</a>
                                </h3>
                                
                                <div class="blog-content">
                                    
                                    <p> To persistently pursue excellence and maintain high-quality standards in imparting education, whilst curating a healthy and creative environment for learners</p></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                   
                </div></div>

              </section>

        <!-- New -->






@endsection