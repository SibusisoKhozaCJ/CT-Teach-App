const lesson_dataC0001P001T001 = {
  // default code, if user has not already started coding
  defaultCode: ``,
  kbLayout: "", // not currently in use
  loadJS: "", // not currently in use
  prevLessonID: "", // Lesson ID of previous lesson where to load user's code
  nextLessonSlug: "", // not currently in use
  pageDesc:
    "Learn how to make your first website in only 5 minutes with this easy intro lesson to coding.",
  pageKeywords:
    "coding, code, 5-minute-website, learn to code, code website, my first website",
  pageTitle: "CodeJIKA - 5-Minute Website",
  save_lesson_id: "P1Training1", // This is id that will be used to store save code in Firebase
  cert_awarded_at: 5, // the checkpoint when to mark lesson as complete
  slug: "", // not currently in use
  show_intro: true,
  show_greetcode: false,
  style: `#lesson-page .btn-main, #lesson-page .btn-primary, #lesson-page .btn-primary-alt, #lesson-page .btn-action, #lesson-page .btn-success {
    width: auto;
    }`,
  slides:[
    {
      slide_number: 1,
      action: true,
      challenge: false,
      html_content: `
      <div class="my-auto">
      <div class="container">
        <h1 class='yellow'>PROJECT 1</h1>
        <h2 class="mt-2 lesson-title font-weight-normal">YAAAAAYYYYY!</h2>
      </div>
      </div>
      `,
      js_function: "console.log('I am a DB loaded function')",
      sort_order: 1
    },
    {
      slide_number: 2,
      action: false,
      challenge: false,
      css_class: "briefing",
      html_content: `
      <div class="my-auto">
      <div class="container"><h3 class="lesson-title font-weight-normal  mb-5">Ready to start a<br> new chapter of<br> your life?</h3><div class="mt-5"><img class="w-15 swiper-lazy" src="/img/emoji/tongue-and-winking-eye_1f61c.png" alt=""></div></div>
      </div>
      `,
      js_function: "console.log('I am a DB loaded function')",
      sort_order: 2
    },
    {
      slide_number: 3,
      action: true,
      challenge: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container"><h2 class="lesson-title encouraging">SO EXCITED!</h2><div class="mt-5"><img class="w-15 swiper-lazy" src="/img/emoji/person-raising-both-hands-in-celebration_emoji-modifier-fitzpatrick-type-4_1f64c-1f3fd_1f3fd.png" alt=""></div></div>
      </div>
      `,
      sort_order: 3,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 4,
      action: true,
      challenge: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class='container'> <h3 class='lesson-title font-weight-normal '>Let’s start with <br> the page<br> structure.</h3> <div class="mt-5"><img class="w-15 swiper-lazy" src="/img/emoji/building-construction_1f3d7.png" alt=""></div></div>
      </div>
      `,
      sort_order: 4,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 5,
      action: false,
      challenge: false,
      css_class: "mission",
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div>
        <p class='slide-header h2'>Mission</p>
      </div>
    <div>
      <p class='h1'>Code the website <strong>structure</strong>.</p>
      <p class='h1 dots'>...</p>
    </div>
    <div class='slide-footer'>
      <p class=''>Includes 2 challenges.</p>
    </div>
    `,
      js_function: "console.log('I am a DB loaded function')",
      //sort_order: 5,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 6,
      action: false,
      challenge: false,
      css_class : "briefing",
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div>
          <p class='slide-header h6'>BRIEFING : Website Structure</p>
      </div>    
      <div class="my-auto">
      <div class='container'>  <h2 class='lesson-title blue'>HTML</h2><p class='lesson-instructions fs-16 mb-4'>HyperText Markup Language.</p> <img src='/img/lessons/P001-L00-M-V001-HTML-skeleton.jpg?00' class='swiper-lazy mb-4' style='max-height: 40vh;'><div class='swiper-lazy-preloader'></div><h3 class='lesson-title font-weight-normal mt-4'>HTML is the website <span class='yellow'>STRUCTURE</span><br><small>(SKELETON)</small></h3> </div>
      </div>
      `,
      //sort_order: 6,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 7,
      challenge: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container"> <h2 class="lesson-title encouraging mb-5">GREAT!</h2> <h3 class="lesson-title font-weight-normal mt-5">Now add a <br> &lt;head&gt; section.</h3></div>
      </div>
      `,
      sort_order: 7,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 8,
      challenge_id: 1,
      action: true,
      challenge: true,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <p class="slide-header h2">CHALLENGE</p>
      </div>
      <div class="my-auto">
      <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ol class='list-none'>
          <li>Add <span class="html-code">head</span> in the editor section.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
        &lt;head&gt; <br>
        &lt;/head&gt;
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
        </div>
      `,
      reg: [
        {
          description: "Add head in the editor section.",
          rule: "<head(.*)>[\\s\\r\\n]*(.*)<\\/head>",
        },
      ],
      sort_order: 15,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 9,
      action: false,
      challenge: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container"> <h2 class="lesson-title encouraging mb-5">AWESOME!</h2> <h3 class="lesson-title font-weight-normal mt-5">Next we’ll add a <br> &lt;body&gt; section.</h3></div>
      </div>
      `,
      sort_order: 9,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 10,
      challenge_id: 2,
      action: true,
      challenge: true,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <p class="slide-header h2">CHALLENGE</p>
      </div>
      <div class="my-auto">
      <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ol class='list-none'>
          <li>Add a <b>body section</b> below your head section.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
        <span class="code-fade">&lt;head&gt;<br>&lt;/head&gt;<br></span>
			  &lt;body&gt;<br>&lt;/body&gt;
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
        </div>
      `,
      tip: "Check the structure slide.",
      reg: [
        {
          description: "Add a body section below your head section.",
          rule: "<body(.*)>[\\s\\r\\n]*(.*)</body>",
        },
      ],
      sort_order: 15,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 11,
      action: false,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "checkpoint",
      html_content: `
      <div>
      <p class='slide-header h2'>CHECKPOINT</p>
      <p class='fs75 white'>Your code should look something like this:</p>
    </div>
    <div class="my-auto">
      <p class='fs75 pb-0 text-left white'>EXAMPLE:</p>
      <div class='html-code-box'>
      &lt;head&gt;<br>&lt;/head&gt; <br>
      &lt;body&gt;<br>&lt;/body&gt;
      </div> 
    </div>  
      `,
      //sort_order: 17,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 12,
      challenge: false,
      action: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div>
      <p class='slide-header h6'>BRIEFING : h1 tag</p>
    </div>    
    <div class="my-auto">
  <p class='h2 pb-4'><span class="html-code">&lt;h1&gt; &lt;/h1&gt;</span></p>
      <ol class="h4 text-left">
    <li>Is used for the <strong>largest text</strong> o your page.</li>
    <li>goes in the body section.</li>
  </ol>
  <p class='pb-0 text-left'>Like this:</p>
  <div class='html-code-box'>
  &lt;h1&gt;<br>Your Name<br>&lt;/h1&gt;
    </div>
    </div>
      `,
      sort_order: 12,
      updated_at: '2017-09-28T16:09:40.256Z',
    },
    {
      slide_number: 13,
      action: false,
      challenge: false,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-green',
      html_content: `
      <h2 class="lesson-title mt-2">Remember</h2>
      <div class="my-auto">
      <p class="h2 white">What is <span class="html-code bold">&lt;h1&gt;</span> used for?</p>
      </div>
      `,
      sort_order: 13,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 14,
      challenge_id: 3,
      action: true,
      challenge: true,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <p class="slide-header h2">CHALLENGE</p>
      </div>
      <div class="my-auto">
      <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ol class='list-none'>
          <li>Type an opening & closing <span class="html-code"><strong>&lt;h1&gt;</strong></span> tag.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
        <span class="code-fade">&lt;body&gt;<br></span> 
			  &nbsp;&lt;h1&gt;&nbsp;&lt;/h1&gt;<br>
			  <span class="code-fade">&lt;/body&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
        </div>
      `,
      reg: [
        {
          description: "Type an opening & closing <h1> tag.",
          rule: "<body(.*)>[\\s\\r\\n]*<h1(.*)>[\\s\\r\\n]*</h1(.*)>[\\s\\r\\n]*</body(.*)>",
        },
      ],
      //sort_order: 15,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 15,
      challenge_id: 4,
      action: true,
      challenge: true,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <p class="slide-header h2">CHALLENGE</p>
      </div>
      <div class="my-auto">
      <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ol class='list-none'>
          <li>Type your first and last name between the <span class="html-code"><strong>&lt;h1&gt;</strong></span> tags.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
        <span class="code-fade">&lt;body&gt;<br>
			  &nbsp;&lt;h1&gt;</span> Joey Green <span class="code-fade">&lt;/h1&gt;<br>
			 &lt;/body&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
        </div>
      `,
      reg: [
        {
          description: "Type your first and last name between the <h1> tags.",
          rule: "((.|\n)*)\s*<body>((.|\n)*)\s*<h1(.*)>((.|\n)*)\s*[a-z][a-z][a-z]((.|\n)*)\s*<\\/h1>((.|\n)*)\s*</body>((.|\n)*)\s*",
        },
      ],
      //sort_order: 15,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 16,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container">
      <p class="h2 pb-4">Now you're going to learn about tags.</p>
      <div><img class="w-15 swiper-lazy" src="/img/emoji/thinking-face_1f914.png" alt=""></div>         </div>
      </div>
      `,
      sort_order: 16,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 17,
      css_class: "briefing",
      challenge: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div>
      <p class='slide-header h6'>BRIEFING : Tags</p>
    </div> 
    <div class="my-auto">
      
      <div class="container">
      <p class=" mb-3 pl-4 text-left">Think of tags as taps.</p>
      <p class=" mb-2 pl-4 text-left">If you <strong>open</strong> a tap (tag) <strong>close</strong> it.</p>
      <img class="swiper-lazy swiper-lazy-loaded" style="max-width: 70vw;" src="/img/lessons/P001-T01-M-V001-tags-taps.jpg">
      </div> 
      </div>
      `,
      sort_order: 17,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 18,
      challenge: false,
      action: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div>
      <p class='slide-header h6'>BRIEFING : Tags</p>
    </div>    
    <div class="my-auto">
  <p class="lesson-instructions mb-5 text-left pl-4">A " / " ( backslash)<br> is used in the<br> closing tag.</p>
  <div class='html-code-box'>
  <div class="h1-content-area text-left pl-4"> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: flex-start;"> <p class="lesson-instructions" style="">Open</p> </div> <div class="d-flex flex-column" style="width: 50%;align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;h1&gt; </span> <div style=" align-self: flex-start;"> My name is... .</div> </div> </div> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: flex-start;"> <p class="lesson-instructions">Close</p> </div> <div class="d-flex flex-column" style=" width: 50%; align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;/h1&gt; </span> </div> </div> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: flex-start;"> <p class="lesson-instructions">Open</p> </div> <div class="d-flex flex-column" style=" width: 50%; align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;div&gt; </span> </div> </div> <div class="d-flex justify-content-around align-items-center"> <div class="lesson-instructions blue" style="width: 50%;display: flex;justify-content: start;"> <p class="lesson-instructions">Close</p> </div> <div class="d-flex flex-column" style="width: 50%;align-items: center;"> <span class="consolas" style=" align-self: flex-start;"> &lt;/div&gt; </span> </div> </div> </div>
    </div>
    </div>
      `,
      sort_order: 12,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 19,
      challenge: false,
      action: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container">
      <h2 class="lesson-title encouraging  mt-3">GOOD</h2>             <h3 class="lesson-title font-weight-normal mt-5">You learned about tags. </h3><p class="lesson-instructions mt-5">Now let’s move on.</p>         </div>
      </div>
      `,
      sort_order: 19,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 20,
      challenge: false,
      action: false,
      css_class: "briefing",
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div>
      <p class='slide-header h6'>BRIEFING : h3 tag</p>
    </div> 
    <div class="my-auto">
     <div class="container mt-1"> <h3 class="lesson-title consolas">&lt;h3&gt; &lt;/h3&gt;</h3> <div> <ol style="list-style-type: none"> <li class="task-1"> <span style="font-family: consolas">&lt;h3&gt;</span> is used mainly for subtitles.</li> </ol> </div> <div style="text-align: left" class="mt-1"> <p class="text-left pl-4 text-white">Like this:</p> </div>
     <div class="my-auto">
      <div class='html-code-box '>
      &lt;body&gt;<br>
      &nbsp;&lt;h1&gt;<br>&nbsp;&nbsp;My Name <br>&nbsp;&lt;/h1&gt;<br>
      &nbsp;&lt;h3&gt;<br>&nbsp;&nbsp;Launchong Soon...<br>&nbsp;&lt;/h3&gt;<br>
      &lt;/body&gt;
      </div>
      </div>
      `,
      sort_order: 20,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 21,
      action: false,
      challenge: false,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-green',
      html_content: `
      <h2 class="lesson-title mt-2">Remember</h2>
      <div class="my-auto">
      <p class="h2 white">What is <span class="html-code bold">&lt;h3&gt;</span> used for?</p>
      </div>
      `,
      sort_order: 22,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 22,
      challenge_id: 5,
      action: true,
      challenge: true,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <p class="slide-header h2">CHALLENGE</p>
      </div>
      <div class="my-auto">
      <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ol class='list-none'>
          <li>Write: <b>"Launching Soon..."</b> between <span class="html-code">&lt;h3&gt;</span> tags.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
        <span class="code-fade">&lt;body&gt;<br>
			  &nbsp;&lt;h1&gt; Joey Green &lt;/h1&gt;<br></span>
			  &nbsp;&lt;h3&gt; Launching Soon... &lt;/h3&gt;<br>
			  <span class="code-fade">&lt;/body&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
        </div>
      `,
      reg: [
        {
          description: 'Write: "Launching Soon..." between <h3> tags.',
          rule: "[\\s\\r\\n]*<h3(.*)>[\\s\\r\\n]*Launching Soon...[\\s\\r\\n]*</h3(.*)>",
        },
      ],
      //sort_order: 15,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 23,
      challenge: false,
      action: false,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-green',
      html_content: `
      <h2 class="lesson-title mt-2">Remember</h2>
      <div class="my-auto">
      <p class="h2 white">What is <span class="html-code bold">&lt;p&gt;</span> used for?</p>
      <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
			 &lt;p&gt;<br>
       &nbsp;10 October, 2021<br>
       &lt;/p&gt;
        </div>
      </div>
      `,
      sort_order: 24,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
     {
      slide_number: 24,
      challenge_id: 5,
      action: true,
      challenge: true,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <p class="slide-header h2">CHALLENGE</p>
      </div>
      <div class="my-auto">
      <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ol class='list-none'>
          <li>Write a  <span class="html-code"><strong>&lt;p&gt;</strong></span> with todays's date.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box '>
        &lt;p&gt;<br>&nbsp;&nbsp;10 October, 2019<br>&lt;/p&gt;
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
        </div>
      `,
      reg: [
        {
          description: "Write a <p> with todays's date.",
          rule: "(<p>|<p [^>]*>)((.|\n)*)\s*([1-9]|[0-9][0-9])((.|\n)*)\s*([a-z][a-z][a-z])((.|\n)*)\s*([0-9][0-9][0-9][0-9])(.|\n)*\s*<\/p>",
        },
      ], 
    },
    {
      slide_number: 25,
      action: false,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "checkpoint",
      html_content: `
      <div>
      <p class='slide-header h2'>CHECKPOINT</p>
      <p class='fs75 white'>Your code should look something like this:</p>
    </div>
    <div class="my-auto">
      <p class='fs75 pb-0 text-left white'>EXAMPLE:</p>
      <div class='html-code-box'>
      <div class="consolas ml-3"> &lt;h1&gt;</span> <br> <span class="ml-5">My Name</span><br> <span class="consolas ml-3"> &lt;/h1&gt; </span> <br> <span class="consolas blue ml-3"> &lt;h3&gt; </span> <br> <span class="ml-5">Launching Soon...</span> <br> <span class="consolas blue ml-3"> &lt;/h3&gt; </span> <br><span class="consolas ml-3">&lt;p&gt;</span><span>10 May, 2021</span><span class="consolas">&lt;/p&gt; </span><br> <span class="consolas"> &lt;/body&gt; </span> </div>
      </div> 
    </div>  
      `,
      //sort_order: 17,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 26,
      action: false,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "checkpoint",
      html_content: `
      <div>
      <p class='slide-header h2'>CHECKPOINT</p>
      <p class='fs75 white'>Your code should look something like this:</p>
    </div>
    <div class="my-auto">
    <img style="max-width: 265px ml-0;" src="/img/lessons/p1t1_check_view_sml.png" alt="">
      </div> 
    </div>  
      `,
      //sort_order: 17,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 27,
      challenge: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container"> <h2 class="lesson-title mb-5 encouraging">CONGRATS!</h2> <div style="background-color: #6aa2c7;border-radius:50%;margin: 40px auto;width: 200px;height: 200px;"> <div class="lesson-instructions "><img style="padding-top:20px;" class="w-75 swiper-lazy mb-3 swiper-lazy-loaded" src="/img/lessons/congrats_training_sml.png"></div></div> <h3 class="lesson-title font-weight-normal  mt-5">You’ve finished<br> Training 1.</h3> </div>
      </div>
      `,
      sort_order: 28,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 28,
      created_at: '2017-08-23T00:55:40.386Z',
      css_class: 'bg-pink',
      html_content: `
      <div class="my-auto">
      <h2 class="lesson-title mt-5">think</h2>             <div class="container "> <h2 class="lesson-title font-weight-normal mt-5 text-lowercase"><span class="text-uppercase">W</span>ho do you want to make a website for?</h2> </div>             <div class="container">                 <ol style="list-style: none"> <li class="task-1"><strong> TIP</strong>: A sister, a brother, small business, a celebrity, a project of your own, your class or your school.  </li> </ol>             </div>
      </div>
      `,
      sort_order: 29,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 29,
      challenge: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="container">                 <h3 class="lesson-title font-weight-normal">Share your creative work with your friends.</h3>
      </div>
      `,
      sort_order: 30,
      updated_at: '2017-09-28T16:09:40.256Z'
    },
    {
      slide_number: 30,
      challenge: false,
      created_at: '2017-08-23T00:55:40.386Z',
      html_content: `
      <div class="my-auto">
      <div class="my-auto">
      <p class='h3 pb-4 w-75'>Ready for Training 2?</p>
      <p class='h3 pb-4 w-75'>Lets Go...</p>
      <a class='btn btn-encouraging next check' data-click="gt:/codepanel/C001/P001/T002" style='width: 80%;' href='#'>Start Now</a>
      <a class='btn btn-encouraging next check mt-4' data-click="o:projects" style='width: 80%;' href='#'>Projects Page</a>
      </div>
      </div>
      `,
      sort_order: 31,
      updated_at: '2017-09-28T16:09:40.256Z'
    }
  ],
};

export default lesson_dataC0001P001T001;

