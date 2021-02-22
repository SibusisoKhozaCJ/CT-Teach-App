export const lesson_data = {
  // default code, if user has not already started coding
  defaultCode: `



`,
  kbLayout: '', // not currently in use
  loadJS: '', // not currently in use
  prevLessonID: '', // Lesson ID of previous lesson where to load user's code
  nextLessonSlug: '', // not currently in use
  pageDesc:
    'Learn how to build your first website with these easy intro lessons to coding.',
  pageKeywords: 'coding, code, learn to code, code website, my first website',
  pageTitle: 'CodeJIKA - Project 1, Training 1',
  total_slides: 43, // set how many slides in total
  save_lesson_id: 'P1Training1', // This is id that will be used to store save code in Firebase
  slug: '', // not currently in use
  slides: [
    {
      action: true,
      checkpoint: false,
      html_content: `
      <div class="container">
        <h1 class='yellow'>PROJECT 1</h1>
        <h2 class="mt-2 lesson-title font-weight-normal">YAAAAAYYYYY!</h2>
      </div>
      `,
      js_function: "console.log('I am a DB loaded function')",
      sort_order: 1
    },
    {
      action: true,
      checkpoint: false,
      html_content: `
      <div class="container"><h3 class="lesson-title font-weight-normal  mb-5">Ready to start a<br> new chapter of<br> your life?</h3><div class="mt-5"><img class="w-15 swiper-lazy" data-src="/img/emoji/tongue-and-winking-eye_1f61c.png" alt=""></div></div>
      `,
      js_function: "console.log('I am a DB loaded function')",
      sort_order: 2
    },
    {
      action: true,
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"><h2 class="lesson-title encouraging">SO EXCITED!</h2><div class="mt-5"><img class="w-15 swiper-lazy" data-src="/img/emoji/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-4_1f64c-1f3fd_1f3fd.png" alt=""></div></div>
      `,
      sort_order: 3,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class='container'> <h3 class='lesson-title font-weight-normal '>Let’s start with <br> the page<br> structure.</h3> <div class="mt-5"><img class="w-15 swiper-lazy" data-src="/img/emoji/building-construction_1f3d7.png" alt=""></div></div>
      `,
      sort_order: 4,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-blue',
      html_content: `
      <h2 class="lesson-title mt-2">mission</h3><div class="container"> <h2 class="text-left lesson-title font-weight-normal mb-1 pl-4" style="text-transform: none">Code the <br> website <br><strong>structure</strong> .</h2> <h2 class="lesson-title mt-4">. . .</h2></div><div class="container"> <p class="lesson-instructions">Includes 2 challenges.</p></div>
      `,
      sort_order: 5,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <h3 class="lesson-title font-weight-normal text-left mr-auto">BRIEFING</h3><h3 class="lesson-title blue m-0 text-uppercase">my website<span class="font-weight-normal">:</span></h3><div class="container d-flex justify-content-around bg-editor " style="font-family: consolas;font-size: 22px;"> <div> <div class="d-flex flex-column justify-content-between" style="height: 34%;"> <span>&lt;<span class="blue">head</span>&gt;</span>   <span>&lt;/<span class="blue">head</span>&gt;</span> </div><div class="d-flex flex-column justify-content-between" style="height: 52%;"> <span>&lt;<span style="color:red;">body</span>&gt; </span><span>&lt;/<span style="color:red;">body</span>&gt; </span></div> </div><div> <img class="swiper-lazy swiper-lazy-loaded mb-5" style="max-height: 44vh;" src="/img/lessons/html_skeleton_sml.png"></div></div><div class="container">      <p class="lesson-tip">     <span>Tip:     </span> Remember this.</p>  </div>
      `,
      sort_order: 6,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <h2 class="lesson-title encouraging mb-5">GREAT!</h2> <h3 class="lesson-title font-weight-normal mt-5">Now add a <br> &lt;head&gt; section.</h3></div>
      `,
      sort_order: 7,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: true,
      checkpoint_id: 1,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'checkpoint cp_yellow',
      html_content: `
      <div class="container"> <h2>Challenge</h2> <div style="margin-top:1rem"> <ol style="list-style: none"> <li class="task-1"> Add: <br> <span class="consolas pl-3">&lt;head&gt;</span><br><span class=" consolas pl-3">&lt;/head&gt;</span> <br> In the code editor. </li> </ol> </div> <div style="text-align: left"> <p class="like-this">Like this:</p> </div> <div class="h1-content-area-3"> <p id="attr-type-value" class="m-4" style="color:#f1f1f1;font-size:18px;text-align: left;"> <span class="consolas"><span class="consolas"> &lt;</span>head<span class="consolas">&gt;</span> <br><span class="consolas"> &lt;</span>/head<span class="consolas">&gt;</span> </span> </p> </div> </div><div class="container"> <div class="button-locked"> <a class="btn btn-primary action check swiper-editor" style="">Let's get Coding <i class="icon-arrow_forward"></i></a> <br> <a class="swiper-next skip" style="">Skip this step</a> </div> <div class="button-unlocked"> <a class="btn btn-primary success check swiper-next" style="">I did it <i class="icon-sentiment_satisfied"></i></a> <br> </div> </div><div class="container"> <p class="lesson-tip"> <span>Tip: </span> Swipe left to start.</p> </div>
      `,
      reg: ['<head(.*)>[\\s\\r\\n]*(.*)<\\/head>'],
      sort_order: 8,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <h2 class="lesson-title encouraging mb-5">AWESOME!</h2> <h3 class="lesson-title font-weight-normal mt-5">Next we’ll add a <br> &lt;body&gt; section.</h3></div>
      `,
      sort_order: 9,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: true,
      checkpoint_id: 2,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'checkpoint cp_yellow',
      html_content: `
      <div class="container"> <h2>Challenge</h2> <div style="margin-top:1rem"> <ol style="list-style: none"> <li class="task-1"> After the <span class="consolas">&lt;head&gt;</span> section. </li> <li class="task-1"> Add the <span class="consolas">&lt;body&gt;</span> .</li> </ol> </div> <div style="text-align: left"> <p class="like-this">Like this:</p> </div> <div class="h1-content-area-3"> <p id="attr-type-value" class="m-4" style="color:#f1f1f1;font-size:18px;text-align: left;"> <span class="consolas"><span class="consolas"> &lt;</span>body<span class="consolas">&gt;</span> <br><span class="consolas"> &lt;</span>/body<span class="consolas">&gt;</span> </span> </p> </div> </div> <div class="container"> <div class="button-locked"> <a class="btn btn-primary action check swiper-editor" style="">Let's get Coding <i class="icon-arrow_forward"></i></a> <br> <a class="swiper-next skip" style="">Skip this step</a> </div> <div class="button-unlocked"> <a class="btn btn-primary success check swiper-next" style="">I did it <i class="icon-sentiment_satisfied"></i></a> <br> </div> </div> <div class="container"> <p class="lesson-tip"> <span>Tip: </span> Swipe left to start.</p> </div>
      `,
      reg: ['<body(.*)>[\\s\\r\\n]*(.*)</body>'],
      sort_order: 10,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container mt-2"> <h2 class="lesson-title green">CHECKPOINT</h2> <p class="lesson-instructions ">Your code should look <br> something like this:</p> <p class="lesson-instructions text-left ml-4 font-weight-bold">CODE:</p> <div class="h1-content-area text-left pl-4"> <span class="consolas"> &lt;head&gt; </span> <br><br> <span class="consolas"> &lt;/head&gt; </span> <br><br> <span class="consolas"> &lt;body&gt; </span> <br><br> <span class="consolas"> &lt;/body&gt; </span> </div> </div>
      `,
      sort_order: 11,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <div ><h3 class="lesson-title text-left pl-3">BRIEFING</h3><p class="lesson-instructions text-left pl-5">h1 Tag</p></div> </div> <div class="container mt-5"> <h3 class="lesson-title" style="font-family: consolas !important">&lt;h1&gt; &lt;/h1&gt;</h3> <div > <ol> <li class="task-1"> Is used for the <strong>largest text</strong> on your page. </li> <li class="task-1"> Goes in the <span class="consolas">&lt;body&gt;</span> section. </li> </ol> </div> <div style="text-align: left" class="mt-5"> <p class="text-left pl-4 text-white">Like this:</p> </div> <div class="h1-content-area text-left pl-4"> <span class="consolas blue"> &lt;h1&gt; </span> <br> <span class="pl-3" > Your name</span> <br> <span class="consolas blue"> &lt;/h1&gt; </span> </div> </div>
      `,
      sort_order: 12,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-green',
      html_content: `
      <h2 class="lesson-title mt-2">Remember</h2><div class="container"> <h2 class=" lesson-title font-weight-normal mb-1 text-lowercase"><span class="text-uppercase">W</span>hat is <br> <span style="font-family:consolas"><strong>&lt;h1&gt;</strong></span> for?</h2> </div>
      `,
      sort_order: 13,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: true,
      checkpoint_id: 3,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'checkpoint cp_yellow',
      html_content: `
      <div class="container"> <h2>Challenge</h2> <p class="lesson-instructions">STEP 1</p> <div style="margin-top:0"> <ol style="list-style: none" class="m-0"> <li class="task-1 m-0"><strong class="blue"> CODE:</strong> <br> Type an opening &amp; <br> closing <span class="consolas">&lt;h1&gt;</span> tag. </li><li class="task-1 m-0"><strong class="text-muted"> WHERE:</strong> <br> In the <span class="consolas">&lt;body&gt;</span> section </li> </ol> </div> <div style="text-align: left"> <p class="like-this">Like this:</p> </div> <div class="h1-content-area-3"> <p id="attr-type-value" class="m-4" style="color:#f1f1f1;font-size:18px;text-align: left;"> <span class="consolas">&lt;h1&gt; <br> &lt;/h1&gt;</span> </p> </div> </div><div class="container"> <div class="button-locked"> <a class="btn btn-primary action check swiper-editor" style="">Let's get Coding <i class="icon-arrow_forward"></i></a> <br> <a class="swiper-next skip" style="">Skip this step</a> </div> <div class="button-unlocked"> <a class="btn btn-primary success check swiper-next" style="">I did it <i class="icon-sentiment_satisfied"></i></a> <br> </div> </div>
      `,
      reg: ['<body(.*)>((\\s|)*)<h1(.*)>[\\s\\r\\n]*(.*)</h1>((\\s|)*)</body>'],
      sort_order: 14,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: true,
      checkpoint_id: 4,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'checkpoint cp_yellow',
      html_content: `
      <div class="container"> <h2>Challenge</h2> <p class="lesson-instructions">STEP 2</p> <div style="margin-top:4rem"> <ol style="list-style: none"> <li class="task-1"><strong class="blue"> CODE:</strong> <br> Type your First & Last<br> name between the <br> <span class="consolas">&lt;h1&gt;</span> tags. </li> </ol> </div> </div> <div class="container"> <div class="button-locked"> <a class="btn btn-primary action check swiper-editor" style="">Let's get Coding <i class="icon-arrow_forward"></i></a> <br> <a class="swiper-next skip" style="">Skip this step</a> </div><div class="button-unlocked"> <a class="btn btn-primary success check swiper-next" style="">I did it <i class="icon-sentiment_satisfied"></i></a> <br> </div> </div> <div class="container"> <p class="lesson-tip"> <span>Tip: </span> Check the example in the <span class="consolas text-dark">&lt;h1&gt;</span> briefing.</p> </div>
      `,
      reg: [
        '<body(.*)>((\\s|)*)<h1(.*)>[\\s\\r\\n\\w]*\\w[\\s\\r\\n]*<\\/h1>[\\s\\r\\n]*<\\/body>'
      ],
      sort_order: 15,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <h2 class=" lesson-title font-weight-normal mb-1 text-lowercase "><span class="text-uppercase">W</span>hat are tags?</h2>              <br>             <h2 class=" lesson-title font-weight-normal mb-4 text-lowercase"><span class="text-uppercase">W</span>ant to find out?</h2>             <div><img class="w-15 swiper-lazy" data-src="/img/emoji/thinking-face_1f914.png" alt=""></div>         </div>
      `,
      sort_order: 16,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <div style="display: flex;justify-content:space-between"> <h3 class="lesson-title blue">BRIEFING</h3> <p class="lesson-instructions">Tags</p> </div> </div> <div class="container"> <div class="container"><p class="lesson-instructions mb-3 pl-4 text-left">Think of tags as taps.</p><p class="lesson-instructions mb-2 pl-4 text-left">If you <strong>open</strong> a tap (tag) <strong>close</strong> it.</p><img class="swiper-lazy swiper-lazy-loaded" style="max-width: 70vw;" src="/img/lessons/P001-T01-M-V001-tags-taps.jpg"> </div> </div>
      `,
      sort_order: 17,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <div style="display:flex;justify-content:space-between"> <h3 class="lesson-title blue">BRIEFING</h3> <p class="lesson-instructions">Tags</p> </div> </div><div class="container"> <p class="lesson-instructions mb-5 text-left pl-4">A " / " ( backslash)<br> is used in the<br> closing tag.</p> <div style="text-align: left"> <p class="like-this">Like this:</p> </div> <div class="h1-content-area text-left pl-4"> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: flex-start;"> <p class="lesson-instructions" style="">Open</p> </div> <div class="d-flex flex-column" style="width: 50%;align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;h1&gt; </span> <div style=" align-self: flex-start;"> My name is... .</div> </div> </div> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: flex-start;"> <p class="lesson-instructions">Close</p> </div> <div class="d-flex flex-column" style=" width: 50%; align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;/h1&gt; </span> </div> </div> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: flex-start;"> <p class="lesson-instructions">Open</p> </div> <div class="d-flex flex-column" style=" width: 50%; align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;div&gt; </span> </div> </div> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: start;"> <p class="lesson-instructions">Close</p> </div> <div class="d-flex flex-column" style="width: 50%;align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;/div&gt; </span> </div> </div> </div> </div>
      `,
      sort_order: 18,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container">             <h2 class="lesson-title encouraging  mt-3">GOOD</h2>             <h3 class="lesson-title font-weight-normal mt-5">You learned about tags. </h3><p class="lesson-instructions mt-5">Now let’s move on.</p>         </div>
      `,
      sort_order: 19,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <div style="display: flex;justify-content:space-between"><h3 class="lesson-title blue">BRIEFING</h3><p class="lesson-instructions">h3 Tag</p></div> </div> <div class="container mt-1"> <h3 class="lesson-title consolas">&lt;h3&gt; &lt;/h3&gt;</h3> <div> <ol style="list-style-type: none"> <li class="task-1"> <span style="font-family: consolas">&lt;h3&gt;</span> is used mainly for subtitles.</li> </ol> </div> <div style="text-align: left" class="mt-1"> <p class="text-left pl-4 text-white">Like this:</p> </div> <div class="h1-content-area text-left pl-4"> <span class="consolas"> &lt;body&gt; </span> <br> <span class="consolas ml-3"> &lt;h1&gt;</span> <br> <span class="ml-5">My Name</span><br> <span class="consolas ml-3"> &lt;/h1&gt; </span> <br> <span class="consolas blue ml-3"> &lt;h3&gt; </span> <br> <span class="ml-5">Launching Soon...</span> <br> <span class="consolas blue ml-3"> &lt;/h3&gt; </span> <br> <span class="consolas"> &lt;/body&gt; </span> </div> </div>
      `,
      sort_order: 20,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: false,
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-green',
      html_content: `
      <h2 class="lesson-title ">Remember</h2><div class="container"> <h2 class="lesson-title font-weight-normal text-lowercase"><span class="text-uppercase">W</span>hat is <br> <span style="font-family: consolas" class="font-weight-bold">&lt;h3&gt;</span> for?</h2> </div>
      `,
      sort_order: 21,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: true,
      checkpoint_id: 5,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'checkpoint cp_yellow',
      html_content: `
      <div class="container"> <h2>Challenge</h2> <div style="margin-top:2rem"> <ol style="list-style: none"> <li class="task-1"><strong class="blue"> CODE:</strong> <br> Write: <br> “Launching Soon...” <br>between the <span class="consolas">&lt;h3&gt;</span> tags. </li> </ol></div> <div class="h1-content-area text-left pl-4 text-white"><span class="consolas "> &lt;h3&gt; </span> <br> <span class="ml-4">Launching Soon...</span> <br><span class="consolas"> &lt;/h3&gt; </span> </div> </div> <div class="container"> <div class="button-locked"> <a class="btn btn-primary action check swiper-editor" style="">Let's get Coding <i class="icon-arrow_forward"></i></a> <br> <a class="swiper-next skip" style="">Skip this step</a> </div><div class="button-unlocked"> <a class="btn btn-primary success check swiper-next" style="">I did it <i class="icon-sentiment_satisfied"></i></a> <br> </div> </div> <div class="container"> <p class="lesson-tip"> <span class="text-dark">WHERE :</span> Below <span class="consolas text-dark">&lt;h1&gt;</span>.</p> </div>
      `,
      reg: [
        '</h1(.*)>[\\s\\r\\n]*<h3(.*)>[\\s\\r\\n]*Launching soon\\.\\.\\.[\\s\\r\\n]*<\\/h3>[\\s\\r\\n]*<\\/body>'
      ],
      sort_order: 22,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <div style="display: flex;justify-content:space-between"><h3 class="lesson-title blue">BRIEFING</h3><p class="lesson-instructions">p Tag</p></div> </div> <div class="container mt-1"> <h3 class="lesson-title consolas">&lt;p&gt; &lt;/p&gt;</h3> <div> <ol><li class="task-1"> Stands for “paragraph”. </li> <li class="task-1"> You can have lots of<br> <span style="font-family: consolas">&lt;p&gt;</span> tags in your site.</li> </ol> </div> <div style="text-align: left" class="mt-5"> <p class="text-left pl-4 text-white">Like this:</p> </div> <div class="h1-content-area text-left pl-4"> <span class="consolas"> &lt;body&gt; </span> <br> <span class="consolas blue ml-3"> &lt;p&gt; </span> <br> <span class="ml-5">My stuff...</span> <br> <span class="consolas blue ml-3"> &lt;/p&gt; </span> <br> <span class="consolas"> &lt;/body&gt; </span> </div> </div>
      `,
      sort_order: 23,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-green',
      html_content: `
      <h2 class="lesson-title ">Remember</h2><div class="container"> <h2 class="lesson-title font-weight-normal mt-5 text-lowercase"><span class="text-uppercase">W</span>hat is<br><span style="font-family: consolas;font-weight: bold">&lt;p&gt;</span>  for?</h2> <div style="text-align: left" class="mt-5"> <p class="text-left pl-4 text-white" style="font-size: 16px">EXAMPLE:</p> </div> <div class="h1-content-area text-left pl-4"><span class="consolas blue"> &lt;p&gt; </span> <br> <span class="text-secondary pl-4">10 October, 2021</span> <br><span class="consolas blue"> &lt;/p&gt; </span> </div> </div>
      `,
      sort_order: 24,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      action: true,
      checkpoint: true,
      checkpoint_id: 6,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'checkpoint cp_yellow',
      html_content: `
      <div class="container"> <h2>Challenge</h2> <div style="margin-top:2rem"> <ol style="list-style: none"> <li class="task-1"><strong class="blue"> CODE:</strong> <br> Write a <span class="consolas">&lt;p&gt;</span> with today’s date. </li> </ol> </div><div style="text-align: left"> <p class="like-this">Like this:</p> </div> <div class="h1-content-area text-left pl-4 text-white"> <span class="consolas "> &lt;p&gt; </span> <br> <span class="ml-4">10 May, 2021</span> <br><span class="consolas"> &lt;/p&gt; </span> </div> </div> <div class="container"> <div class="button-locked"> <a class="btn btn-primary action check swiper-editor" style="">Let's get Coding <i class="icon-arrow_forward"></i></a> <br> <a class="swiper-next skip" style="">Skip this step</a> </div><div class="button-unlocked"> <a class="btn btn-primary success check swiper-next" style="">I did it <i class="icon-sentiment_satisfied"></i></a> <br> </div> </div> <div class="container"> <p class="lesson-tip"> <span class="text-dark">WHERE :</span> Below <span class="consolas text-dark">&lt;/h3&gt;</span>.</p> </div>
      `,
      reg: [
        '(<p>|<p [^>]*>)((.|\n)*)s*([1-9]|[0-9][0-9])((.|\n)*)s*([a-z][a-z][a-z])((.|\n)*)s*([0-9][0-9][0-9][0-9])(.|\n)*s*</p>'
      ],
      sort_order: 25,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"><h2 class="lesson-title consolas green mt-2">checkpoint</h2> <p class="lesson-instructions ">Your code should look <br> something like this:</p> </div> <div class="container mt-1"> <div style="text-align: left" class="mt-0"> <ol style="list-style: none" class="mb-0"> <li class="task-1 mb-0"><strong> CODE:</strong> </li> </ol> </div> <div class="h1-content-area text-left pl-4 pt-2 pb-2"  style="line-height:25px"><span class="consolas"> &lt;head&gt;</span><br><span class="consolas"> &lt;/head&gt;</span><br><br> <span class="consolas"> &lt;body&gt; </span> <br> <span class="consolas ml-3"> &lt;h1&gt;</span> <br> <span class="ml-5">My Name</span><br> <span class="consolas ml-3"> &lt;/h1&gt; </span> <br> <span class="consolas blue ml-3"> &lt;h3&gt; </span> <br> <span class="ml-5">Launching Soon...</span> <br> <span class="consolas blue ml-3"> &lt;/h3&gt; </span> <br><span class="consolas ml-3">&lt;p&gt;</span><span>10 May, 2021</span><span class="consolas">&lt;/p&gt; </span><br> <span class="consolas"> &lt;/body&gt; </span> </div> </div>
      `,
      sort_order: 26,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <h2 class="lesson-title consolas green mt-2">checkpoint</h2> <p class="lesson-instructions ">And your website, like this:</p> </div><div class="container"> <div style=" display: flex; flex-direction: column; align-items: flex-start;" class="ml-3"> <h4 class="blue text-left">PREVIEW:</h4> <img style="max-width: 265px ml-0;" src="/img/lessons/p1t1_check_view_sml.png" alt=""> </div> </div>
      `,
      sort_order: 27,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container"> <h2 class="lesson-title mb-5 encouraging">CONGRATS!</h2> <div style="background-color: #6aa2c7;border-radius:50%;margin: 40px auto;width: 200px;height: 200px;"> <div class="lesson-instructions "><img style="padding-top:20px;" class="w-75 swiper-lazy mb-3 swiper-lazy-loaded" src="/img/lessons/congrats_training_sml.png"></div></div> <h3 class="lesson-title font-weight-normal  mt-5">You’ve finished<br> Training 1.</h3> </div>
      `,
      sort_order: 28,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-pink',
      html_content: `
      <h2 class="lesson-title mt-5">think</h2>             <div class="container "> <h2 class="lesson-title font-weight-normal mt-5 text-lowercase"><span class="text-uppercase">W</span>ho do you want to make a website for?</h2> </div>             <div class="container">                 <ol style="list-style: none"> <li class="task-1"><strong> TIP</strong>: A sister, a brother, small business, a celebrity, a project of your own, your class or your school.  </li> </ol>             </div>
      `,
      sort_order: 29,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container">                 <h3 class="lesson-title font-weight-normal">Share your creative work with your friends.</h3>                 <div>                     <img class="w-15 swiper-lazy" data-src="/img/emoji/smiling-face-with-open-mouth.png" alt="">                 </div>                 <div>                                      <div class="mt-5">     <a class="btn btn-share check mt-3" id="whatsapp-code-link" href="" style="width: 80%;font-size: 20px;color: #fff;font-family: 'Rajdhani', sans-serif;">Share with Friends</a>  <br><button class="btn btn-encouraging next check mt-3" style="     width: 80%; " id="gallery" href="">Share to CodeJika Gallery<i class="icon-arrow_forward"></i></button> <div> <a class="swiper-next skip btn btn-primary light cancel mt-4" style="width: auto;font-size: 16px;padding: 3px 10px;color: #fff;font-family: 'Rajdhani', sans-serif;">Skip</a></div> </div>                 </div>               </div>
      `,
      sort_order: 30,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      checkpoint: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="container">     <h3 class="lesson-title font-weight-normal"> Ready to start <br>Training 2? </h3>     <div> <img class="w-15 swiper-lazy" data-src="/img/emoji/smiling-face-with-open-mouth.png" alt=""> </div>     <div style=" /* display: flex; */">         <div class="mt-2" style=" display: flex; flex-direction: column; justify-content: center; align-items: center;">             <br><a class="btn btn-encouraging next check " style="width: 80%;" href="P1Training2">Start Now</a> <a class="btn btn-encouraging next check mt-4" style="width: 80%;" href="m-projects.htm">Projects Page</a><a class="btn btn-primary light cancel mt-4" style=" padding: 3px 10px; font-size: 16px;" href="https://www.codejika.com/">Home</a>  </div>     </div> </div>
      `,
      sort_order: 31,
      updated_at: '2017-09-28T16:09:40.256Z'
    }
  ]
};

var check_points = {
  16: '(<head>|<head [^>]*>)((.|\n)*)s*</head>',
  17: '(<head>|<head [^>]*>)((.|\n)*)s*</head>((.|\n)*)s*(<body>|<body [^>]*>)((.|\n)*)s*</body>',
  23: '(<head>|<head [^>]*>)((.|\n)*)s*</head>((.|\n)*)s*(<body>|<body [^>]*>)((.|\n)*)s*(<h1>|<h1 [^>]*>)((.|\n)*)s*</h1>((.|\n)*)s*</body>',
  24: '(<head>|<head [^>]*>)((.|\n)*)s*</head>((.|\n)*)s*(<body>|<body [^>]*>)((.|\n)*)s*(<h1>|<h1 [^>]*>)((.|\n)*)s*</h1>((.|\n)*)s*</body>',
  32: '(<head>|<head [^>]*>)((.|\n)*)s*</head>((.|\n)*)s*(<body>|<body [^>]*>)((.|\n)*)s*(<h1>|<h1 [^>]*>)((.|\n)*)s*</h1>((.|\n)*)s*(<h3>|<h3 [^>]*>)((.|\n)*)s*Soon...((.|\n)*)s*</h3>((.|\n)*)s*</body>',
  33: '(<head>|<head [^>]*>)((.|\n)*)s*</head>((.|\n)*)s*(<body>|<body [^>]*>)((.|\n)*)s*(<h1>|<h1 [^>]*>)((.|\n)*)s*</h1>((.|\n)*)s*(<h3>|<h3 [^>]*>)((.|\n)*)s*</h3>((.|\n)*)s*</body>',
  36: '(<p>|<p [^>]*>)((.|\n)*)s*(2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030)((.|\n)*)s*</p>'
};

var hintsForCheckPonts = {
  /*  16:"A closing tag has a forward slash <strong>/<strong>",
  17:"Remember to open <span class='html-code'> &ldquo;&lt;&gt;&rdquo;</span> and close <span class='html-code'>&ldquo;&lt;/&gt;&rdquo;</span> your tag. Refer to the previous challenge(step 1) on how to open and close a tag.",
  23:"In the body section. Hint given as tip on bottom of the slide.",
  24:"Example: <strong><span class='html-code'>&lt;h1&gt;</span>John Doe <span class='html-code'>&lt/h1&gt</span></strong>",
  32:"Type your code below the closing <strong><span class='html-code'>&lt/h1&gt;</span></strong> tag.",
  36:"Just below the <strong><span class='html-code'>&lt;/h3&gt;</span></strong> tag"*/
};

var hints_data = `

  <p style="margin-bottom:0px;">Slide: 12</p>
  <pre style="margin-bottom:10px; color:#ccc;">&lt;h1&gt;Nomzamo Mbatha&lt;/h1&gt;</pre>
  <p style="margin-bottom:0px;">Slide: 14</p>
  <pre style="margin-bottom:10px;">&lt;p>Hi! I'm Nomzamo Mbatha, An Actress. Say Hello!&lt;/p&gt;</pre>
  <p style="margin-bottom:0px;">Slide: 19</p>
  <pre style="margin-bottom:10px;">&lt;input type="email"&gt;</pre>
  <p style="margin-bottom:0px;">Slide: 23</p>
  <pre style="margin-bottom:10px;">&lt;input type="submit" &gt;</pre>
  <p style="margin-bottom:0px;">Slide: 27</p>
  <pre>placeholder="Your email"</pre>

`;

/// Add custom JS for lesson below here
