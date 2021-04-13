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
  save_lesson_id: "5-minute-website", // This is id that will be used to store save code in Firebase
  cert_awarded_at: 5, // the checkpoint when to mark lesson as complete
  slug: "", // not currently in use
  show_intro: true,
  show_greetcode: false,
  style: `#lesson-page .btn-main, #lesson-page .btn-primary, #lesson-page .btn-primary-alt, #lesson-page .btn-action, #lesson-page .btn-success {
    width: auto;
    }`,
  slides: [
    {
      slide_number: 1,
      challenge_id: 0,
      action: true,
      challenge: true,
      reg: [
        {
          description: "add <h1> tag",
          rule: "<h1(.*)>",
        },
      ],
      css_class: "challenge cp-peach snap1 hide-help",
      html_content: `
    <div>
        <p class="slide-header h2">CHALLENGE</p>
    </div>
    <div class='white'>
      <p class="h1 white text-left">Hi,... <img class='swiper-lazy' src='/img/emoji/72/waving-hand-sign-type-3.png' alt=''> </p>
      <div class="h2 white text-left">Type <div class='inline-code bg-black p-2'>&lt;h1&gt;</div> in the code editor.</div>
      <p class="h5 pt-3 text-left">Tip: Swipe left <img class='swiper-lazy w-1em' src='/img/emoji/72/leftwards-black-arrow.png' alt=''> or click the button below.</p>

        <div class="">
          <div class="button-locked">
            <div class="content-mobile-only btn btn-primary swiper-editor bg-dark-grey skip check" style="backgroXund-color: #29c1c4!important;">Start typing...</div>
          </div>
          <div class="button-unlocked">
            <a class="btn btn-primary btn-success check swiper-next" style="bacXkground-color: #29c1c4!important;">I did it <i class="icon-sentiment_satisfied"></i></a>
           </div>
        </div>
    </div>
    <div class='white content-mobile-only'>
      <p class=" pt-3 mb-1">Not sure what to do?</p>
      <p class="pt-0X underlineX take-tour pointer bg-aqua2 white" data->Take the Tour</p>
    </div>
    <div class='white content-mobile-only'>
      <div class='button-locked'>
        <a class='swiper-next skip' style=''>Skip this step</a>
      </div>
    </div>
    <div class='white content-desktop-only'>
      <div class='button-locked'>
        <a class='swiper-next skip' style='font-size: 25px'>Skip this step</a>
      </div>
    </div>
    `,
      js_function: "console.log('I am a DB loaded function')",
      sort_order: 1,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 2,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
    <div>
    </div>
      <div>
        <h2 class='lesson-title encouraging yellow mb-2'>GOOD JOB!</h2>
            <p class='lesson-instructions mb-4'>That’s a great start.</p>
            <p class='lesson-instructions mb-5'>
            <div class='mt-5'>
              <img class='w-20 swiper-lazy' src='/img/emoji/72/female-technologist-type-4.png'>
              <img class='w-20 swiper-lazy' src='/img/emoji/72/grinning-face-with-smiling-eyes.png'>
              <img class='w-20 swiper-lazy' src='/img/emoji/72/flexed-biceps-type-3.png'>
            </div>
      </div>
      <div class='slide-footer tips dark-tip'>
        <span>Tip:</span> Swipe up to view the next slide
      </div>
      `,
      tip: "Swipe up to view the next slide",
      sort_order: 11,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 3,
      action: true,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>  <h3 class='lesson-title font-weight-normal  mb-5'>You completed<br> the first step<br> of the famous…</h3> <img style='' class='w-50 swiper-lazy' src='/img/timer_circle.png'> <h1 class='h2 lesson-title font-weight-normal mt-1'>5-Minute <br>Website</h1>  </div>
    `,
      js_function: "console.log('I am a DB loaded function')",
      sort_order: 5,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 4,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>  <h2 class='lesson-title encouraging mb-4'>Awesome!</h2><img class='w-20 swiper-lazy' src='/img/emoji/72/smiling-face-with-open-mouth.png'></div>
      `,
      sort_order: 6,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 5,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class="container"><h3 class='lesson-title font-weight-normal mb-0' style='text-transform: none'>We are going to<br> learn how to code<br> your website using </h3><h2 class='lesson-title mb-5'>HTML</h2><h3 class='lesson-title font-weight-normal mt-5' style='text-transform: none'>What is that?</h3><div><img class='w-20 pr-1  swiper-lazy' src='/img/emoji/thinking-face_1f914.png' alt=''><img class='w-20 pl-1 swiper-lazy' src='/img/emoji/thinking-face_1f914.png' alt=''></div></div>
      `,
      sort_order: 12,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 6,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>  <h2 class='lesson-title blue'>HTML</h2><p class='lesson-instructions fs-16 mb-4'>HyperText Markup Language.</p> <img src='/img/lessons/P001-L00-M-V001-HTML-skeleton.jpg?00' class='swiper-lazy mb-4' style='max-height: 40vh;'><div class='swiper-lazy-preloader'></div><h3 class='lesson-title font-weight-normal mt-4'>HTML is the website <span class='yellow'>STRUCTURE</span><br><small>(SKELETON)</small></h3> </div>
      `,
      sort_order: 13,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 7,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
                          <div class='container'>  <h3 class='lesson-title font-weight-normal mb-5'>It works like this:</h3> <img src='/img/lessons/bold-tags.png' class='swiper-lazy mb-4'><div class='swiper-lazy-preloader'></div> </div>
      `,
      sort_order: 14,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 8,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>      <h2 class='lesson-title font-weight-normal  mb-5' style='text-transform: none'>Ready for a<br> “Challenge?”</h2>               <img class='w-30 swiper-lazy' src='/img/emoji/boxing-glove.png' alt=''><img src="https://code.org/api/hour/begin_codejika.png" alt="HoC tracking pixel"></div>
      `,
      sort_order: 9,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 9,
      challenge_id: 1,
      action: true,
      challenge: true,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'>Type your name after the opening <span class='inline-code'>&lt;h1&gt;</span> tag</li>
            <li class='tasks'>Add a closing <span class='inline-code'>&lt;/h1&gt;</span> tag</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-3 pb-3 mb-5'>
          <span class='code-fade'>&lt;h1&gt;</span><span class="blinking-cursor">|</span>Your Name &lt;/h1&gt;
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Swipe left to start.
      </div>
      `,
      tip: "Swipe left to start.",
      reg: [
        {
          description: "type your name inside <h1> tag",
          rule: "<h1>[\\s\\r\\n]*(.*)[\\s\\r\\n]*<\\/h1>",
        },
        // {
        //   description: "create <p> tag",
        //   rule: "<p(.*)>",
        // },
        // {
        //   description: "create <b> tag",
        //   rule: "<b(.*)>",
        // },
      ],
      sort_order: 15,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 10,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'><h2 class='lesson-title encouraging  mb-5'>GOOD JOB!</h2><h3 class='lesson-title font-weight-normal mb-5'>Now we’ll add <br> some styling with <br><span class='pink' style='font-weight: bold'>CSS</span>.</h3><h3 class='lesson-title font-weight-normal mt-5'>Are you ready?</h3></div>
      `,
      sort_order: 16,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 11,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>                    <h2 class='lesson-title pink '>CSS</h2>                      <p class='lesson-instructions fs-16 mb-4'>Cascading Style Sheets</p>                     <div style='position: relative'>                         <p class='lesson-instructions pink' style='position:absolute;top: 53%;left: 10%'>style='...'</p>                         <img src='/img/lessons/css-girl.png' class='swiper-lazy mb-2' style='max-height: 50vh;'>                     </div>                     <div class='swiper-lazy-preloader'></div>                      <h3 class='lesson-title font-weight-normal mt-2'>                       <span class=' pink' style='margin-left: -25%'>CSS</span> is the <br>                        <span class='yellow' style='margin-left: 25%'>STYLE </span>                       <small> (BLING)</small></h3>                      </div>
      `,
      sort_order: 17,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 12,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>      <h3 class='lesson-title font-weight-normal mb-5'>This will add a beautiful background color to your website.</h3>     <h3 class='lesson-title font-weight-normal mt-5 mb-5'>It’s worth it.<br>I promise.</h3>     <p class='lesson-instructions mb-4'>         <img class='swiper-lazy w-20' src='/img/emoji/ok-hand-sign_1f44c.png'>         <img class='swiper-lazy w-20' src='/img/emoji/grinning-face-with-smiling-eyes_1f601.png'>         <img class='swiper-lazy w-20' src='/img/emoji/ok-hand-sign_1f44c.png'>     </p> </div>
      `,
      sort_order: 18,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 13,
      action: true,
      challenge: true,
      challenge_id: 2,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'>Add a line <span class='underline'>above</span> your <span class='inline-code'>&lt;h1&gt;</span> tags. </li>
            <li class='tasks'>Type <span class='inline-code'>&lt;body&gt;</span> </li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box  pt-2 pb-2 mb-5'>
          <span class="blinking-cursor">|</span>&lt;body&gt;<br>
          <span class='code-fade'>&lt;h1&gt;Your Name&lt;/h1&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Add the &lt;body&gt; tag as the first line.
      </div>
      `,
      tip: "Add the &lt;body&gt; tag as the first line.",
      reg: [
        {
          description: "add <body> tag",
          rule: "<body(.*)>",
        },
      ],
      sort_order: 19,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 14,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'><h2 class='lesson-title encouraging  mb-5'>GOOD!</h2><p class='lesson-instructions mt-5'>Now let's add some<br> style into body.</p></div>
      `,
      sort_order: 20,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 15,
      action: true,
      challenge: true,
      challenge_id: 3,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'>Add <span class='inline-code'>style=" "</span> inside the <span class='inline-code'>&lt;body&gt;</span> tag. Before the <span class='inline-code'>&gt;</span> symbol. </li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body </span><span class="blinking-cursor">|</span>style=" " <span class='code-fade'>&gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Find “ on the quick-keys.
      </div>
      `,
      tip: "Find “ on the quick-keys.",
      reg: [
        {
          description: "add style to body tag",
          rule:
            '<body [\\s\\r\\n]*style[\\s\\r\\n]*=[\\s\\r\\n]*"[s\0-9a-z:;#]*"[\\s\\r\\n]*>[\\s\\r\\n]*(.*)',
        },
      ],
      sort_order: 21,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 16,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'><h2 class='lesson-title encouraging mb-5'>GREAT!</h2> <h3 class='lesson-title mt-5'>Now for the best part.</h3> <div> <img class='swiper-lazy w-20' src='/img/emoji/72/winking-face.png' alt=''> </div> <p class='lesson-instructions mt-5'>(This is where you<br> add your color.)</p> </div>
      `,
      sort_order: 22,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 17,
      action: true,
      challenge: true,
      challenge_id: 4,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'>Add <span class='inline-code'>background: pink;</span> inbetween the quotes of <span class='inline-code'>style=" "</span>. </li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body style="</span><span class="blinking-cursor">|</span>background: pink;<span class='code-fade'>" &gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Notice <strong>:</strong> and <strong>;</strong>
      </div>
      `,
      tip: "Notice <strong>:</strong> and <strong>;</strong>",
      reg: [
        {
          description: "add pink color to body background",
          rule:
            '<body [\\s\\r\\n]*style[\\s\\r\\n]*=[\\s\\r\\n]*"[\\s\\r\\n]*background[\\s\\r\\n]*:[\\s\\r\\n]*(pink|red)[\\s\\r\\n]*;[\\s\\r\\n]*"[\\s\\r\\n]*>[\\s\\r\\n]*(.*)',
        },
      ],
      sort_order: 23,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 18,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
                    <div class='container'></div><div class='container'><h2 class='lesson-title encouraging'>Great!</h2><h3 class='lesson-title font-weight-normal  mb-5'>Now check it in <br> the PREVIEW tab.</h3><p class='lesson-instructions mt-5'>Then come back here.</p>   </div>   <div class='container'><p class='lesson-tip'><span>Tip:</span> Swipe left twice to see Preview tab.</p></div>
      `,
      sort_order: 24,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 19,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'> <h3 class='lesson-title encouraging mb-5 '>CONGRATULATIONS</h3> <div style='background-color: #6aa2c7;border-radius:50%; margin: 40px auto; width: 200px;height: 200px;'> <img class='w-75' style='padding-top:20px;' src='/img/congrats.png'> </div> <h3 class='lesson-title font-weight-normal  mt-5'>You’ve made <br>your first <br>website!</h2> </div>
      `,
      sort_order: 25,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 20,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'><h3 class='lesson-title font-weight-normal  mb-5 w-75'>Want to try a different color for the background?</h3>                 <div style='margin-top: 3rem'>                     <img class='w-15 swiper-lazy' src='/img/emoji/72/grinning-face-with-star-eyes.png' alt=''>                     <img class='w-15 swiper-lazy' src='/img/emoji/72/grinning-face-with-star-eyes.png' alt=''>                     <img class='w-15 swiper-lazy' src='/img/emoji/72/grinning-face-with-star-eyes.png' alt=''>                   </div>                 </div>
      `,
      sort_order: 26,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 21,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'><h3 class='lesson-title font-weight-normal  mb-5'>Which color do you<br> want to try?</h3>                 <div style='margin-top: 1rem'><h3 class='lesson-title font-weight-normal  mb-5'><span style="color:teal">teal</span> <span style="color:violet">violet</span> <br> <span style="color:dodgerblue">dodgerblue</span> <br><span style="color:deeppink">deeppink</span> <br><span style="color:aquamarine">aquamarine</span> <span style="color:gold">gold</span> <br> <span style="color:green">green</span> <span style="color:yellow">yellow</span> </h3> </div> <div style='margin-top: mt-2'><img class='swiper-lazy' src='/img/emoji/72/rainbow.png' alt=''></div>                 </div>
      `,
      sort_order: 27,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 22,
      action: true,
      challenge: true,
      challenge_id: 5,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'>Change  <span class='inline-code'>pink</span> to <span class='inline-code'> red</span> or any color you like.</li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body style="background: </span><span class="blinking-cursor">|</span>red<span class='code-fade'>;" &gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Notice <strong>:</strong> and <strong>;</strong>
      </div>
      `,
      tip: "Notice <strong>:</strong> and <strong>;</strong>",
      reg: [
        {
          description: "change body background color",
          // rule: "body(.*)background:[s\r\n]*(?!pink;)[a-z]"
          rule:
            '<body [\\s\\r\\n]*style[\\s\\r\\n]*=[\\s\\r\\n]*"[\\s\\r\\n]*background[\\s\\r\\n]*:[\\s\\r\\n]*(red)[\\s\\r\\n]*;[\\s\\r\\n]*"[\\s\\r\\n]*>[\\s\\r\\n]*(.*)',
        },
      ],
      sort_order: 28,
      updated_at: "2017-09-28T16:09:40.256Z",
    },



    {
      slide_number: 23,
      action: true,
      challenge: true,
      challenge_id: 6,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'><div class="h2 white text-left">Type <div class='inline-code bg-black p-2'>&lt;h2&gt;</div> in the code editor.</div></li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body style="background: </span><span class="blinking-cursor">|</span>red<span class='code-fade'>;" &gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span><br><span>&lt;h2&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Notice <strong>:</strong> and <strong>;</strong>
      </div>
      `,
      tip: "Notice <strong>:</strong> and <strong>;</strong>",
      reg: [
        {
          description: "add <h2> tag",
          rule: "<h2(.*)>",
        },
      ],
      sort_order: 28,
      updated_at: "2017-09-28T16:09:40.256Z",
    },

    {
      slide_number: 24,
      action: true,
      challenge: true,
      challenge_id: 7,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'><div class="h2 white text-left">Type your last name inside <div class='inline-code bg-black p-2'>&lt;h2&gt;</div> and <div class='inline-code bg-black p-2'>&lt;/h2&gt;</div> in the code editor.</div></li>
            <li class='tasks'><div class="h2 white text-left">Add  <div class='inline-code bg-black p-2'>&lt;p&gt;</div></div></li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body style="background: </span><span class="blinking-cursor">|</span>red<span class='code-fade'>;" &gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span><br><span>&lt;h2&gt;</span><span class="blinking-cursor">|Last name</span> <span>&lt;/h2&gt;</span><br>
          <span>&lt;p&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Notice <strong>:</strong> and <strong>;</strong>
      </div>
      `,
      tip: "Notice <strong>:</strong> and <strong>;</strong>",
      reg: [
        {
          description: "type your name inside <h1> tag",
          rule: "<h2>[\\s\\r\\n]*(.*)[\\s\\r\\n]*<\\/h2>",
        },
        {
          description: "create <p> tag",
          rule: "<p(.*)>",
        }
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    },

    {
      slide_number: 25,
      action: true,
      challenge: true,
      challenge_id: 8,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'><div class="h2 white text-left">Type your school name inside <div class='inline-code bg-black p-2'>&lt;p&gt;</div> and <div class='inline-code bg-black p-2'>&lt;/p&gt;</div> in the code editor.</div></li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body style="background: </span><span class="blinking-cursor">|</span>red<span class='code-fade'>;" &gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span><br><span>&lt;h2&gt;</span><span class="blinking-cursor">|Last name</span> <span>&lt;/h2&gt;</span><br>
          <span>&lt;p&gt;</span><span> School Name <span>&lt;/p&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Notice <strong>:</strong> and <strong>;</strong>
      </div>
      `,
      tip: "Notice <strong>:</strong> and <strong>;</strong>",
      reg: [
        {
          description: "type your name inside <p> tag",
          rule: "<p>[\\s\\r\\n]*(.*)[\\s\\r\\n]*<\\/p>",
        }
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 26,
      action: true,
      challenge: true,
      challenge_id: 9,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp-peach black",
      html_content: `
      <div>
        <p class="slide-header h2 white">CHALLENGE</p>
      </div>
      <div>
         <div class='text-left pb-3'>
          <p class='text-uppercase'>Instructions:</p>
          <ol class='list-numbered'>
            <li class='tasks'><div class="h2 white text-left">Add tag <div class='inline-code bg-black p-2'>&lt;h3&gt;</div> and your favorite sports <div class='inline-code bg-black p-2'>&lt;/h3&gt;</div> in the code editor.</div></li>
          </ol>
        </div>
        <p class='fs75 pb-0 text-left'>Your code will look like this:</p>
        <div class='html-code-box pt-2 pb-2 mb-5'>
          <span class='code-fade'>&lt;body style="background: </span><span class="blinking-cursor">|</span>red<span class='code-fade'>;" &gt;<br>
          &lt;h1&gt;Your Name&lt;/h1&gt;</span><br><span>&lt;h2&gt;</span><span class="blinking-cursor">|Last name</span> <span>&lt;/h2&gt;</span><br>
          <span>&lt;p&gt;</span><span> School Name <span>&lt;/p&gt;</span></br>
          <span>&lt;h3&gt;</span><span>Favorite Sports <span>&lt;/h3&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a>
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips'>
        <span class='red'>TIP:</span> Notice <strong>:</strong> and <strong>;</strong>
      </div>
      `,
      tip: "Notice <strong>:</strong> and <strong>;</strong>",
      reg: [
        {
          description: "type your name inside <h3> tag",
          rule: "<h3>[\\s\\r\\n]*(.*)[\\s\\r\\n]*<\\/h3>",
        }
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    },








    {
      slide_number: 27,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'> <h3 class='lesson-title font-weight-normal mb-5'>Did you check it in the PREVIEW tab?</h3> <div style='margin-top: 1rem'> <h3 class='lesson-title font-weight-normal mb-5'> Did it work? </h3> </div> <div style='margin-top: 3rem'> <h2 class='lesson-title encouraging aqua mb-2'>AWESOME!</h2> <img class='w-15 swiper-lazy' src='/img/emoji/fisted-hand-sign_1f44a.png' alt=''> </div> </div>
      `,
      sort_order: 29,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 28,
      action: true,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>                 <h3 class='lesson-title font-weight-normal'>Share your creative work with your friends.</h3>                 <div>                     <img class='w-15 swiper-lazy' src='/img/emoji/72/smiling-face-with-open-mouth.png' alt=''>                 </div>                 <div>                                      <div class='mt-5'>     <a class='btn btn-share check mt-3' id='whatsapp-code-link' href='' style='width: 80%;font-size: 20px;color: #fff;font-family: 'Rajdhani', sans-serif;'>Share with Friends</a>  <br><button class='btn btn-encouraging next check mt-3' style='width:80%' id='gallery' href=''>Share to CodeJika Gallery<i class='icon-arrow_forward'></i></button> <div class="mt-4"> <a class="swiper-next skip white " style="">Skip this step</a></div> </div>                 </div>               </div>
      `,
      sort_order: 30,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 29,
      action: true,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
     <div class='container '>
       <h2 class='lesson-title font-weight-normal pb-3'>GREAT WORK!</h2>
       <h3 class='lesson-title font-weight-normal'>Get your Hour of Code certificate.</h3>
       <div> <img class='w-15 swiper-lazy' src='/img/emoji/72/smiling-face-with-sunglasses.png' alt=''> </div>
       <div>
         <div class='mt-5'> <a class='btn btn-share check mt-3' href='https://code.org/api/hour/finish' target='_blank' style='width: 80%;font-size: 20px;color: #fff;font-family: ' Rajdhani', sans-serif;'>Get Certificate<i class='icon-arrow_forward'></i></a>
           <div class="mt-4"> <a class='swiper-next skip white ' style=''>Done. What's next?</a></div>
         </div>
       </div>
     </div>
      `,
      sort_order: 30,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
    {
      slide_number: 30,
      challenge: false,
      created_at: "2017-08-23T00:55:40.386Z",
      html_content: `
      <div class='container'>
        <h3 class='lesson-title font-weight-normal'> Are you ready to start <br>Training 1? </h3>
          <div>
            <img class='w-15 swiper-lazy' src='/img/emoji/72/smiling-face-with-open-mouth.png' alt=''>
          </div>
          <div style=' /* display: flex; */'>
            <div class='mt-2' style=' display: flex; flex-direction: column; justify-content: center; align-items: center;'>
              <br>
              <a class='btn btn-encouraging next check' data-click="gt:/codepanel/C001/P001/L002" style='width: 80%;' href='#'>Start Now</a>
              <a class='btn btn-encouraging next check mt-4' data-click="o:projects" style='width: 80%;' href='#'>Projects Page</a>
            </div>
          </div>
        </div>
      `,
      sort_order: 31,
      updated_at: "2017-09-28T16:09:40.256Z",
    },
  ],
};

export default lesson_dataC0001P001T001;

