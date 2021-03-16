export const lesson_data = 
{
    "defaultCode": // default code, if user has not already started coding   
`<head>
</head>
<body>
  <h1>My Name</h1>
  <h3>Motivation:</h3>
  <h3>Launching Soon...</h3>
  <p>01 January 2000</p>
</body>



`,
    "kbLayout": "", // not currently in use
    "loadJS": "", // not currently in use
    "prevLessonID": "P1Training1", // Lesson ID of previous lesson where to load user's code
    "nextLessonSlug": "", // not currently in use
    "pageDesc": "Learn how to build your first website with these easy intro lessons to coding.", 
    "pageKeywords": "coding, code, learn to code, code website, my first website", 
    "pageTitle": "CodeJIKA - Project 1, Training 2",
    "save_lesson_id": "P1Training2", // This is id that will be used to store save code in Firebase
  "slides" : [ {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h2 class='lesson-title encouraging mt-5'>Awesome!</h2><div class='container'> <h2 class='lesson-title font-weight-normal text-lowercase'><span class='text-uppercase'>A</span>re you <br>ready to <br><span class='text-uppercase'>Jika*?</span></h2> <div class='mt-4'> <img class='w-15 swiper-lazy' data-src='../../../img/emoji/dancer_woman.png' alt=''> </div> <p class='lesson-instructions mt-3'>*party</p></div>
      `,
      "js_function" : "console.log('I am a DB loaded function')",
      "sort_order" : 1,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "bg-training",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title encouraging mt-2 text-black'>snapshot</h2> <p style='font-size: 18px'>(These are your missions for today.)</p> <ol > <li class='task-1 text-black'>Learn CSS<br>structure.</li> <li class='task-1 text-black'>Add some text in <br>an <span class='consolas'>&lt;h3&gt;</span></li> <li class='task-1 text-black'>Learn &lt;i&gt; & &lt;br&gt;.</li> </ol></div><div class='container'> <p class='lesson-instructions'>How it will look:</p> <a class='btn btn-encouraging next check text-uppercase' style='width:50%' onclick='p1t1Output()'>Preview</a></div>
      `,      
    "js_function" : "console.log('I am a DB loaded function')", 
      "sort_order" : 2,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h4 class='lesson-title font-weight-normal text-white mt-2'>REMEMBER THIS?</h4><h3 class='lesson-title blue'>PAGE STRUCTURE</h3><div class='container d-flex justify-content-around bg-editor ' style='font-family: consolas;font-size: 22px;'> <div> <div class='d-flex flex-column' style=' height: 36%;'> <span>&lt;<span class='blue'>head</span>&gt;</span> <span class='ml-5'>&lt;<span class='pink'>style</span>&gt;</span> <span class='ml-5'>&lt;/<span class='pink'>style</span>&gt;</span> <span>&lt;/<span class='blue'>head</span>&gt;</span> </div><div class='d-flex flex-column justify-content-between' style='height: 52%;'> <span>&lt;<span style='color:red;'>body</span>&gt; </span><span>&lt;/<span style='color:red;'>body</span>&gt; </span></div> </div><div> <img class='swiper-lazy  mb-5' style='max-height: 54vh;' data-src='../img/lessons/html_skeleton_sml.png'></div></div> 
      `,
      "sort_order" : 3,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h4 class='lesson-title font-weight-normal text-white mt-2'>REMEMBER THIS TOO?</h4> <div class='container'> <h2 class='lesson-title pink '>CSS</h2> <p class='lesson-instructions fs-16 mb-4'>Cascading Style Sheets</p> <div style='position: relative' class='bg-editor'> <p class='lesson-instructions' style='position:absolute;top: 53%;left: 10%'>&lt;<span class='pink'>style</span>&gt; <br>&lt;/<span class='pink'>style</span>&gt; </p> <img class='swiper-lazy mb-2 ' style='max-height: 40vh;' data-src='../img/lessons/css-girl.png'> </div> <h3 class='lesson-title font-weight-normal mt-2'> <span class=' pink'>CSS</span> is the  <span class='pink'>STYLE </span> <br> <small> (BLING)</small></h3> </div> 
      `,
      "sort_order" : 4,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "bg-blue",
    "html_content" : `
      <h2 class='lesson-title mt-2'>mission</h3> <div class='container'> <h2 class='text-left lesson-title font-weight-normal mb-1 pl-4' style='text-transform: none'>Learn CSS <br> basics.</h2> <ol class='mt-2'> <li class='task-1'> Add a <span class='consolas'>&lt;style&gt;</span> section.</li> <li class='task-1'> Style the <span class='consolas'>&lt;h1&gt;</span> using CSS.</li> </ol> <h2 class='lesson-title mt-4'>. . .</h2> </div> <div class='container'> <p class='lesson-instructions'>Includes 2 challenges.</p> </div> 
      `,
      "sort_order" : 5,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <div style='display:flex'><h3 class='blue lesson-title text-left font-weight-normal pl-3'>BRIEFING : Style Tag</h3></div> </div>     <div class='container mt-2'> <h3 class='lesson-title' style='font-family: consolas !important'>&lt;style&gt; &lt;/style&gt;</h3> <div class='mt-5'> <ol> <li class='task-1'> All code in the <br><span class='consolas'>&lt;<span class='pink'>style</span>&gt;</span> section is CSS. </li> <li class='task-1'><span class='consolas'>&lt;<span class='pink'>style</span>&gt;</span> goes <br> in the <span class='consolas'>&lt;head&gt;</span>. </li> </ol> </div> <div class='h1-content-area text-left pl-4 d-flex justify-content-around align-items-center'> <div> <span class='consolas '> &lt;head&gt; </span> <br> <span class='pl-3'> <span class='consolas'>&lt;<span class='pink'>style</span>&gt;</span> <br><span class='consolas pl-3'>&lt;<span class='pink'>/style</span>&gt;</span></span> <br> <span class='consolas '> &lt;/head&gt; </span> </div> <div class=''><img class='w-50 swiper-lazy' data-src='../../../img/emoji/Css_style_sunglasses_sml.png' alt=''>  </div> </div> </div> 
      `,
      "sort_order" : 6,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "bg-green",
    "html_content" : `
      <h2 class='lesson-title mt-5'>Remember</h2>     <div class='container'> <h2 class=' lesson-title font-weight-normal mb-1 text-lowercase'><span class='text-uppercase'>W</span>here<br> does the <br><span style='font-family:consolas'><strong>&lt;style&gt; </strong> <br></span> section go?</h2> </div> 
      `,
      "sort_order" : 7,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    
    "challenge_id" : 1,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1'><span class='blue font-weight-bold text-uppercase'> code:</span> <br> Add a <span class='consolas pl-3'>&lt;style&gt;</span> setion. </li> </ol> </div>  </div>     <div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div>     <div class='container'> <p class='lesson-tip'> <span>Tip: </span> Remember to close the <small class='consolas' style='font-size: 18px'>&lt;style&gt; </small> tag.</p> </div> 
      `,
      "reg" : [ "<head>[\\s\\r\\n]*<style>[\\s\\r\\n]*</style>[\\s\\r\\n]*</head>" ],
    "sort_order" : 8,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div style='display:flex' class='mr-auto'><h3 class='blue lesson-title text-left font-weight-normal pl-3'>BRIEFING : CSS</h3></div> <div class='container mt-4'> <h2 class='lesson-title think'>DID YOU <br>KNOW?</h2> <h3 class='lesson-title font-weight-normal mt-5'>css <span class='text-lowercase'> code is <br>slightly different <br>than <span style='     text-transform: uppercase; '>HTML?</span></span></h3> <h4 class='lesson-title font-weight-normal mt-3 text-white mt-5 text-lowercase'><span class='text-uppercase'>CSS</span> uses cute “curly <br>brackets” <strong>{ }</strong> to wrap <br>the style.</h4> </div> 
      `,
      "sort_order" : 9,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div style='display:flex' class='mr-auto'><h3 class='blue lesson-title text-left font-weight-normal pl-3'>BRIEFING : CSS</h3></div><div class='container'> <h2 class='lesson-title think'>MEMORY <br>JOGGER</h2> <h3 class='lesson-title font-weight-normal mt-2'> <span class='text-lowercase'> When you see<br> curly brackets</span></h3> <div> <h1 class='pink ' style='font-size: 8rem;'>{ }</h1> </div>  </div><div class='container'> <h3 class='lesson-title font-weight-normal '><span class='text-lowercase'>...think <span class='text-uppercase'>BLING</span><br> (CSS).</span></h3> </div> 
      `,
      "sort_order" : 10,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title font-weight-normal text-lowercase'><span class='text-uppercase'>R</span>eady to learn <br>some <span class='text-uppercase'>css?</span></h2> <div class='mt-4'> <img class='w-15 swiper-lazy' data-src='../../../img/emoji/spark.png' alt=''> </div> </div> 
      `,
      "sort_order" : 11,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h3 class='lesson-title mr-auto briefing pl-3 font-weight-normal'>BRIEFING : CSS</h3><div> <div class='text-center'> <h2 class='lesson-title pink'>css</h2> <p class='lesson-instructions text-white'>It works like this:</p> </div> </div><div class='container mb-5'> <div class='h1-content-area text-left d-flex justify-content-around p-4 mt-5' style=' position: relative;'> <div class='d-flex flex-column' style='align-items: center;'> <div><h3 class='lesson-title text-transform-none' style='position: absolute;top: -75%;left: 18%;'>Selector</h3></div> <h2 class='lesson-title text-lowercase' style=''>h1</h2><div class='element-border' style=' position: absolute; top: -30%; border: 2px solid; border-radius: 10px; padding: 2.2rem; border-bottom: none; border-bottom-right-radius: 0; border-bottom-left-radius: 0;'></div><div style='position: absolute;font-size: 68px;bottom: -3.5rem;'>↑</div> </div> <div><h2 class='lesson-title pink'>{ }</h2></div> </div> <h3 class='lesson-title text-transform-none mt-5'>Selector is the <br>'name'.</h3> </div> 
      `,
      "sort_order" : 12,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h3 class='lesson-title mr-auto briefing pl-3 font-weight-normal'>BRIEFING : CSS</h3><div>  <div class='text-center'> <h2 class='lesson-title pink'>css</h2> <p class='lesson-instructions text-white'>It works like this:</p> </div> </div><div class='container mt-1'> <div class='' style=''> <img class='swiper-lazy' data-src='../../../img/lessons/slide-14.png' alt='' style='width: 100%;height: 100%;object-fit: cover;'> </div>  </div><div class='container'> <p class='lesson-instructions'>Property &amp; value say <u class='text-underlined'>what</u>.</p> </div> 
      `,
      "sort_order" : 13,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h3 class='lesson-title mr-auto pl-3 font-weight-normal briefing'>BRIEFING : CSS</h3><div class='container'> <div class='  text-center'> <h2 class='lesson-title pink'>css</h2> <p class='lesson-instructions text-white'>It works like this:</p>  </div><div> <img class='swiper-lazy' data-src='../../../img/lessons/slide-15.png' alt='' style='width: 100%;height: 100%;object-fit: cover;'> </div></div><div class='container'> <p class='lesson-instructions'>The whole thing is a “rule”.</p> </div> 
      `,
      "sort_order" : 14,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title encouraging yellow mb-5' style='text-transform: none'>Let’s talk <br>practical...</h2> <h3 class='lesson-title font-weight-normal mb-5' style='text-transform: none'>You want to add <br>CSS styling to<br> the &lt;h1&gt; text. </h3> <div class='mt-4'> <img class='w-15 swiper-lazy' data-src='../../../img/emoji/direct-hit.png' alt=''> </div> </div> 
      `,
      "sort_order" : 15,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h3 class='lesson-title mr-auto pl-3 font-weight-normal briefing'>BRIEFING : CSS</h3><div class='container'> <div class='  text-center'> <h2 class='lesson-title pink'>css</h2> <p class='lesson-instructions text-white'>It works like this:</p>  </div><div class='bg-editor'> <img class='swiper-lazy' data-src='../../../img/lessons/slide-16.png' alt='' style='width: 85%;height: 100%;object-fit: cover;'> </div></div> 
      `,
      "sort_order" : 16,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title font-weight-normal text-lowercase'><span class='text-uppercase'>N</span>ext, you'll add a<br>h1 selector</h2> <div style='text-align: left' class='mt-5'> <p class='text-left pl-4 text-white'>Like this:</p> </div><div class='h1-content-area text-left d-flex justify-content-start p-4' style=' position: relative;'> <div> <h2 class='ml-5 lesson-title text-lowercase' style=''>h1</h2> </div> <div><h2 class='ml-5 lesson-title'>{ }</h2></div> </div> </div> 
      `,
      "sort_order" : 17,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 2,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <p class='lesson-instructions'>Step-1</p> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1'><span class='blue font-weight-bold text-uppercase'> code:</span> <br> Add a <span>h1</span> selector.</li> </ol> </div> </div> <div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div> <div class='container'> <p class='lesson-tip'> <span>Tip: </span> In <small class='consolas' style='font-size: 18px'>&lt;style&gt; </small> section.</p> </div> 
      `,
      "reg" : [ "<head>[\\s\\r\\n]*<style>[\\s\\r\\n]*h1[\\s\\r\\n]*{[\\s\\r\\n]*}[\\s\\r\\n]*</style>[\\s\\r\\n]*</head>" ],
    "sort_order" : 18,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 3,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <p class='lesson-instructions'>Step-2</p> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1'><span class='blue font-weight-bold text-uppercase'> code:</span> <br> Add: </li> </ol> </div> <div class='h1-content-area p-4'> <h3 class='lesson-title text-lowercase m-0 consolas'>font-size: 75px;</h3> </div> </div><div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div><div class='container'> <p class='lesson-tip'> <span>Tip: </span> Between the curly brackets.</p> </div> 
      `,
      "reg" : [ "h1[\\s\\r\\n]*{[\\s\\r\\n]*font-size:75px;[\\s\\r\\n]*}" ],
    "sort_order" : 19,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title consolas green mt-2'>checkpoint</h2> <p class='lesson-instructions '>Your code should look <br>something like this:</p> </div>             <div class='container mt-1'>  <div class='h1-content-area text-left pl-4 pt-2 pb-2' style='line-height:25px;color:#828b92 '><span class='consolas'> &lt;head&gt;</span> <br> <span class='consolas ml-3'> &lt;style&gt;</span> <br><span class='consolas ml-5 text-white'><span>h1</span> { <br> <span class='consolas' style='margin-left:4rem'>font-size: 75px;</span> </span> <br><span class='consolas ml-5 text-white'>}</span><br> <span class='consolas ml-3'> &lt;/style&gt;</span> <br><span class='consolas'> &lt;/head&gt;</span><br><br> <span class='consolas'> &lt;body&gt; </span>      <br><br> <span class=' green extra-code'>. . .</span>  </div></div> 
      `,
      "sort_order" : 20,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 4,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <p class='lesson-instructions'>Step-1</p> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1'><p class='blue text-uppercase font-weight-bold' style=' letter-spacing: 3px; font-size: 18px;'>type :</p> </li> </ol> </div> <div class='h1-content-area p-4 mt-5 consolas'> <h3 class='lesson-title m-0 consolas text-uppercase'>motivation :</h3></div> </div><div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div><div class='container'> <p class='lesson-tip'> <span class='text-muted font-weight-bold text-uppercase'>Where: </span>Place it below the <small class='consolas' style='font-size: 18px'>&lt;h1&gt; </small>tags.</p> </div> 
      `,
      "reg" : [ "</h1>[\\s\\r\\n]*Motivation:[\\s\\r\\n]*" ],
    "sort_order" : 21,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 5,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <p class='lesson-instructions'>Step-2</p> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1 m-0'><p class='blue text-uppercase font-weight-bold m-0' style=' letter-spacing: 3px; font-size: 18px;'>code:</p> </li><li class='task-1 m-0'> <span class='text-uppercase'>W</span>rap it in <span class='consolas'>&lt;h3&gt; </span>tags.</li> </ol> </div> <div style='text-align: left'> <p class='text-left pl-4'>Like this:</p> </div><div class='h1-content-area p-4 mt-1  text-white text-left'> <span class='ml-3'>&lt;h3&gt;</span> <br><span class='ml-5'>MOTIVATION :</span> <br><span class='ml-3'>&lt;/h3&gt;</span> </div> </div><div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div><div class='container'> <p class='lesson-tip'> <span class='font-weight-bold text-uppercase'>Tip: </span>Before the <small class='consolas' style='font-size: 18px'>&lt;/body&gt; </small>closing tag.</p> </div> 
      `,
      "reg" : [ "(.*)<[\\s\\n\\r]*h3[\\s\\n\\r]*>[\\s\\n\\r]*MOTIVATION[\\s\\n\\r]*:[\\s\\n\\r]*<[\\s\\n\\r]*/[\\s\\n\\r]*h3[\\s\\n\\r]*>(.*)" ],
    "sort_order" : 22,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title'> NOW IT’S<br>YOUR TURN. </h3> <div class='mt-5'> <h3 class='lesson-title font-weight-normal'> Tell us why <span class='blue'>you</span><br> want to <span class='blue'>learn</span><br> how to <span class='blue'>code?</span> </h3> </div> <div class='mt-4'> <img class='w-15 swiper-lazy' data-src='../../../img/emoji/female-technologist-type-3_1f469-1f3fc-200d-1f4bb.png' alt=''> </div> </div> 
      `,
      "sort_order" : 23,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title font-weight-normal mt-5 text-lowercase'><span class='text-uppercase'>i</span>t could look<br> something like<br>this:</h3> <div style='text-align: left' class='mt-5'> <p class='text-left pl-4 text-white font-weight-bold' style='font-size: 16px;;'>EXAMPLE:</p> </div> <div class='h1-content-area text-left p-4 pl-4'> I want to learn to code because... </div> </div> 
      `,
      "sort_order" : 24,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 6,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <p class='lesson-instructions'>Step-1</p> <div style='margin-top:2rem'> <ol style='list-style: none'> <li class='task-1'><p class='blue text-uppercase font-weight-bold' style=' letter-spacing: 3px; font-size: 18px;'>type :</p> </li> <li class='task-1'> A <u>short sentence</u> about <strong>why</strong> you are learning <strong>coding</strong>.</li> </ol> </div> </div> <div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div><div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div> <div class='container'> <p class='lesson-tip'> <span class='text-dark'>WHERE :</span> Below “Motivation” inside the <span class='consolas text-dark' style='font-size: 18px'>&lt;h3&gt;</span> tags.</p> </div> 
      `,
      "reg" : [ "MOTIVATION(.*):((\\s|)*)(.*)\\w(.*)((\\s|)*)</h3>" ],
    "sort_order" : 25,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title mb-5 encouraging'>Good job!</h2> <div class='mt-4'> <img class='w-15 swiper-lazy' data-src='../../../img/emoji/lower-left-ballpoint-pen.png' alt=''> </div> </div> 
      `,
      "sort_order" : 26,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title font-weight-normal mt-5 text-lowercase'> <span class='text-uppercase'>l</span>et's learn about<br><span style=' font-style: italic;'>italics</span> and apply<br><span class='text-uppercase'>CSS</span> to your <br>sentence. </h3> </div> 
      `,
      "sort_order" : 27,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "bg-blue",
    "html_content" : `
       <h2 class='lesson-title mt-2'>mission</h2> <div class='container'> <h2 class='text-left lesson-title font-weight-normal mb-1 pl-4' style='text-transform: none'>Learn about<br> italics and how to create a new line.</h2> <h2 class='lesson-title mt-4'>. . .</h2> </div> <div class='container'> <p class='lesson-instructions'>Includes 2 challenges.</p> </div> 
      `,
      "sort_order" : 28,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title font-weight-normal mt-5 text-lowercase'> <span class='text-uppercase'>l</span>et's learn about<br><span style=' font-style: italic;'>italics</span> and apply<br><span class='text-uppercase'>CSS</span> to your <br>sentence. </h3> <div class='mt-4'> <img class='w-25 swiper-lazy' data-src='../../../img/emoji/italic-img.png' alt=''> </div> </div> 
      `,
      "sort_order" : 29,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <div style='display:flex'><h3 class='lesson-title text-left font-weight-normal pl-3'>BRIEFING : <span style='font-family:consolas'>&lt;i&gt;</span> Tag</h3></div> </div><div class='container mt-2'> <p class='lesson-instructions'>Italics Tag</p> <h3 class='lesson-title' style='font-family: consolas !important'>&lt;i&gt; &lt;/i&gt;</h3> <div class='mt-5'> <ol style=' list-style: none;'> <li class='task-1'>The <span class='consolas'>&lt;<span>i</span>&gt;</span> tag stands<br>for <span class='yellow font-weight-bold' style='font-style: italic'>italics<span>. </span></span></li> <li class='task-1'>Italics is text <br> slanted to the side.</li> </ol> </div> <div style='text-align: left' class='mt-5'> <p class='text-left pl-4 text-white font-weight-bold' style='font-size: 16px;;'>EXAMPLE:</p> </div><div class='h1-content-area text-left pl-4'> <div> <span class='consolas '>I &lt;i&gt;</span>LOVE<span class='consolas '>&lt;/i&gt; </span><br>ICECREAM!</div> <div> </div> </div> </div> 
      `,
      "sort_order" : 30,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title font-weight-normal text-lowercase' style=''><span class='text-uppercase'>Y</span>ou can add <span style='font-style: italic'>italics</span><br>to a sentence like <br>this:</h3> <div class='mt-5'> </div> <div style='text-align: left' class='mt-5'> <p class='text-left pl-4 text-white font-weight-bold' style='font-size: 16px;;'>EXAMPLE:</p> </div><div class='h1-content-area text-left pl-4'> <div> <span class='consolas '>&lt;i&gt;</span><br><span class='ml-3'>Because...<span><br><span class='consolas '>&lt;/i&gt; </span></span></span></div> <div> </div> </div> </div>
      `,      
    "js_function" : "console.log('I am a DB loaded function') ",
      "sort_order" : 31,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 7,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoink cp_yellow",
    "html_content" : `
      <h2>Challenge</h2><div class='container'><div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1 m-0'><p class='blue text-uppercase font-weight-bold m-0' style=' letter-spacing: 3px; font-size: 18px;'>code:</p> </li><li class='task-1 m-0 text-black'> <span class='text-uppercase'>p</span>ut your sentence into <span style='font-style:italic;'>italics</span> with the <span class='consolas'>&lt;i&gt; </span>tag.</li> </ol> </div> <div style='text-align: left'> <p class='text-left pl-4 m-0 text-black'>Like this:</p> </div><div class='h1-content-area p-2 mt-0 consolas text-left' style='color:#828b92 '> <span class=''>&lt;h3&gt;</span> <br><span class='ml-3'>MOTIVATION:</span><br><span class='ml-4 text-white'>&lt;i&gt;</span><br><span class='ml-5'>Sentence...</span> <br><span class='ml-4 text-white'>&lt;/i&gt;</span> <br><span class=''>&lt;/h3&gt;</span> </div> </div><div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div><div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div> 
      `,
      "reg" : [ "(.*)[\\s\\r\\n]*<[\\s\\r\\n]*i[\\s\\r\\n]*>[\\s\\r\\n]*(.*)[\\s\\r\\n]*<[\\s\\r\\n]*/[\\s\\r\\n]*i[\\s\\r\\n]*>(.*)" ],
    "sort_order" : 32,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title font-weight-normal text-lowercase' style=''><span class='text-uppercase'>c</span>hange the size of <br>your <span style='font-family:consolas'>&lt;i&gt;</span>text in<br>CSS like this:</h3> <div class='mt-5'> </div> <div style='text-align: left' class='mt-5'> <p class='text-left pl-4 text-white font-weight-bold' style='font-size: 16px;;'>EXAMPLE:</p> </div><div class='h1-content-area text-left pl-4'> <div> <span class='consolas '>i {</span><br><span class='ml-5'>font-size: 25px;<span><br><span class='consolas '>} </span></span></span></div> <div> </div> </div> </div> 
      `,
      "sort_order" : 33,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 8,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1'><span class='blue font-weight-bold text-uppercase'> code:</span> <br>Use CSS to make the<br>size of the italics text 25px. </li> </ol> </div> </div>         <div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div>         <div class='container'> <p class='lesson-tip'> <span>Tip: </span>Start with i { } in style.</p> </div> 
      `,
      "reg" : [ "(.*)i[\\s\\n\\r]*{[\\s\\n\\r]*font-size[\\s\\n\\r]*:[\\s\\n\\r]*25px;[\\s\\n\\r]*}[\\s\\n\\r]*" ],
    "sort_order" : 34,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title encouraging'>Nice!</h2> <div class='mt-5'> <img class='mt-2 w-15 swiper-lazy' data-src='../../../img/emoji/hatching-chick.png' alt=''> </div> </div> 
      `,
      "sort_order" : 35,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div style='display:flex' class='mr-auto'><h3 class='blue lesson-title text-left font-weight-normal pl-3'>BRIEFING : CSS</h3></div><div class='container'> <h2 class='lesson-title think mb-5'>DID YOU<br>KNOW?</h2> <h3 class='lesson-title font-weight-normal mt-2'>In HTML<span class='text-lowercase'> there’s a<br>special symbol to <br>make a new line?</span></h3> </div> 
      `,
      "sort_order" : 36,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div style='display:flex;' class='mr-auto'><h4 class='briefing lesson-title text-left font-weight-normal pl-3 briefing' style='text-transform: none;'>BRIEFING : <span style='font-family:consolas'>&lt;br&gt;</span> Tag</h4></div><div class='container mt-4'> <h3 class='lesson-title text-lowercase font-weight-normal'><span style='font-family:consolas'>&lt;br&gt;</span>= <span class='text-uppercase'>N</span>ew line</h3> <h3 class='lesson-title font-weight-normal mt-5 text-uppercase'>t<span class='' style=' text-transform: none;'>yping <span style='font-family:consolas'>&lt;br&gt;</span> is like <br>hitting the “Enter” <br>key on your <br>keyboard... </span></h3><h3 class='lesson-title font-weight-normal mt-3 text-lowercase'> <span class='text-uppercase'>I</span>t adds a line.</h3><div class='mt-5'> <img class='mt-2 w-15 swiper-lazy' data-src='../../../img/emoji/enter-key-534249_sml.png' alt=''> </div> </div> 
      `,
      "sort_order" : 37,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h3 class='lesson-title'>Where to place <br>the <span style='font-family: consolas'>&lt;br&gt;</span> ? </h3> <p class='lesson-instructions green text-left ml-5 font-weight-bold'>CHECK:</p> <div class='h1-content-area text-left pl-4 briefing'> <span class='consolas  ml-3'> &lt;h3&gt; </span> <br> <span class=' ml-5 consolas'>MOTIVATION:</span> <br><span class='consolas ml-5 text-white'> &lt;br&gt; </span> <span class='consolas text-white'> &lt;br&gt; </span> <br> <span class='consolas ml-5'> &lt;i&gt; </span> <br> <span class=' ml-5 consolas'>Because ...</span> <br> <span class='consolas ml-5'> &lt;/i&gt; </span> <br> <span class='consolas ml-3'> &lt;/h3&gt; </span> </div> <br> </div> 
      `,
      "sort_order" : 38,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : true,
    "challenge" : true,
    "challenge_id" : 9,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "css_class" : "checkpoint cp_yellow",
    "html_content" : `
      <div class='container'> <h2>Challenge</h2> <div style='margin-top:1rem'> <ol style='list-style: none'> <li class='task-1'><strong class='blue'> CODE:</strong> <br>Add <span style='font-family:consolas'>&lt;br&gt;</span><u> twice</u> <br> immediately after <br> <span class='consolas'>MOTIVATION:</span> text. </li> </ol> </div> <div style='text-align: left'> <p class='like-this'>Like this:</p> </div> <div class='h1-content-area-3'> <p id='attr-type-value' class='m-4' style='color:#f1f1f1;font-size:18px;text-align: left;'> <span class='consolas'>&lt;br&gt; <br> &lt;br&gt;</span> </p> </div></div><div class='container'> <div class='button-locked'> <a class='btn btn-primary action check swiper-editor' style=''>Let's get Coding <i class='icon-arrow_forward'></i></a> <br> <a class='swiper-next skip' style=''>Skip this step</a> </div> <div class='button-unlocked'> <a class='btn btn-primary success check swiper-next' style=''>I did it <i class='icon-sentiment_satisfied'></i></a> <br> </div> </div> 
      `,
      "reg" : [ "Motivation:[\\s\\r\\n]*<br>[\\s\\r\\n]*<br>[\\s\\r\\n]*" ],
    "sort_order" : 39,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "action" : false,
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title consolas green mt-2'>EXPLANATION</h2> <p class='lesson-instructions'>When you see 3 <br> green dots in a <br> checkpoint </p> </div><div class='container'> <div style='text-align: left' class='mt-0'> <ol style='list-style: none' class='mb-0'> <li class='task-1 mb-0'><p> Like this:</p> </li> </ol> </div> <div class=''> <div style=' '> <img class='swiper-lazy' data-src='../../../img/lessons/slide-41.png' alt='' style='width: 100%;height: 100%;object-fit: cover;'> </div></div>   <p class='lesson-instructions text-white'>It means there is more code <br> above or below and you are <br> only seeing a part.</p></div> 
      `,
      "sort_order" : 40,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title consolas green mt-2'>checkpoint</h2> <p class='lesson-instructions '>Your code should look <br> something like this:</p> </div><div class='container mt-1'> <div style='text-align: left' class='mt-0'> <ol style='list-style: none' class='mb-0'> <li class='task-1 mb-0'><strong> CODE:</strong> </li> </ol> </div> <div class='h1-content-area text-left pl-4 pt-2 pb-2' style='line-height: 23px;'> <span class='green extra-code'>. . .</span> <br> <span class='consolas'> &lt;h3&gt;</span><br><span class='lesson-instructions ml-3 text-secondary'>MOTIVATION:</span><br><span class='consolas ml-3'> &lt;br&gt; </span> <span class='consolas ml-3'> &lt;br&gt; </span> <br> <span class='consolas ml-3 text-secondary'> &lt;i&gt;</span> <br> <div class='ml-5'> <span class='text-secondary'>I want to learn how <br> to code <br> because...[your <br> reasons].</span> </div> <br> <span class='consolas ml-3 text-secondary'> &lt;/i&gt; </span> <br> <span class='consolas ml-3'> &lt;/h3&gt; <br> <span class='green extra-code'>. . .</span> </span> <br> </div> </div> 
      `,
      "sort_order" : 41,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "challenge" : false,
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <div class='container'> <h2 class='lesson-title mb-5 encouraging'>CONGRATS!</h2> <div style='background-color: #6aa2c7;border-radius:50%;margin: 40px auto;width: 200px;height: 200px;'> <div class='lesson-instructions '><img style='padding-top:20px;' class='w-75 swiper-lazy mb-3' data-src='../img/lessons/congrats_training_sml.png'></div></div> <h3 class='lesson-title font-weight-normal  mt-5'>You've finished<br> Training 2.</h3> </div> 
      `,
      "sort_order" : 42,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
    "created_at" : "2017-08-23T00:55:40.386Z",
    "html_content" : `
      <h2 class='lesson-title think mt-3'>STUCK?</h2><div class='container'> <h3 class='lesson-title consolas mt-2 m-0'>Invite your friends</h3> <p class='lesson-instructions'>to learn how to code.</p> <div class='container '> <p class='lesson-instructions mt-5'>When working together one <br> of the squad will usually <br> figure it out.</p> </div> <div>      <a class='' id='whatsapp-code-link' href='' style=''><img class='w-15 swiper-lazy' data-src='../../../img/emoji/share_blue_sml.png' alt=''></a>      </div> </div><div class='container'> <p class='lesson-tip text-center'> <span>Tip: </span> Whatsapp Groups are great<br> for sharing screenshots and code.</p> </div> 
      `,
      "sort_order" : 43,
    "updated_at" : "2017-09-28T16:09:40.256Z"
  }, {
      "challenge" : false,
      "created_at" : "2017-08-23T00:55:40.386Z",
      "html_content" : `
      <div class="container">     <h3 class="lesson-title font-weight-normal"> Ready to start <br>Training 3? </h3>     <div> <img class="w-15 swiper-lazy" data-src="../../../img/emoji/smiling-face-with-open-mouth.png" alt=""> </div>     <div style=" /* display: flex; */">         <div class="mt-2" style=" display: flex; flex-direction: column; justify-content: center; align-items: center;">             <br><a class="btn btn-encouraging next check " style="width: 80%;" href="../learn/P1Training3">Start Now</a> </div>     </div> </div> 
      `,
      "sort_order" : 31,
      "updated_at" : "2017-09-28T16:09:40.256Z"
    } ]
}
    
var check_points = {
  12:"(<style>|<style [^>]*>)((.|\n)*)\s*<\/style>",
  22:"(<style>|<style [^>]*>)((.|\n)*)\s*h1((.|\n)*)\s*{((.|\n)*)\s*}((.|\n)*)\s*<\/style>",
  23:"(<style>|<style [^>]*>)((.|\n)*)\s*h1((.|\n)*)\s*{((.|\n)*)\s*font-size((.|\n)*)\s*75px;((.|\n)*)\s*}((.|\n)*)\s*<\/style>",
  27:"(<h1>|<h1 [^>]*>)((.|\n)*)\s*<\/h1>((.|\n)*)\s*Motivation",
  28:"(<h3>|<h3 [^>]*>)((.|\n)*)\s*(Motivation|MOTIVATION)((.|\n)*)<\/h3>",
  //28:"<h3>|<h3 [^>]*>)((.|\n)*)(\s*Motivation)((.|\n)*)\s*<\/h3>",
  31:"(<h3>|<h3 [^>]*>)((.|\n)*)\s*Motivation((.|\n)*)\s*<\/h3>",
  37:"(<h3>|<h3 [^>]*>)((.|\n)*)\s*Motivation((.|\n)*)\s*(<i>|<i [^>]*>)((.|\n)*)\s*<\/i>((.|\n)*)\s*<\/h3>",
  39:"(<style>|<style [^>]*>)((.|\n)*)\s*i((.|\n)*)\s*{((.|\n)*)\s*font-size((.|\n)*)\s*:((.|\n)*)\s*25px((.|\n)*)\s*;((.|\n)*)\s*}((.|\n)*)\s*<\/style>",
  44:"(<h3>|<h3 [^>]*>)((.|\n)*)\s*(Motivation:|Motivation)((.|\n)*)\s*(<br>|<br [^>]*>)((.|\n)*)\s*(<br>|<br [^>]*>)((.|\n)*)\s*<\/h3>"
}

