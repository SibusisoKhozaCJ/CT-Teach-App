//P2Training1
const lesson_dataC0001P001T005 = {
  defaultCode: ``,
  kbLayout: "",
  loadJS: "",
  prevLessonID: "",
  nextLessonSlug: "",
  pageDesc:
    "Learn how to make your first website in only 5 minutes with this easy intro lesson to coding.",
  pageKeywords:
    "coding, code, training 1, learn to code, code website, my first website",
  pageTitle: "CodeJIKA - Project 2 Training 2",
  save_lesson_id: "P1Training3",
  cert_awarded_at: 5,
  slug: "",
  show_intro: true,
  show_greetcode: false,
  style: `#lesson-page .btn-main, #lesson-page .btn-primary, #lesson-page .btn-primary-alt, #lesson-page .btn-action, #lesson-page .btn-success {
    width: auto;
    }`,
  slides: [
    {
      slide_number: 1,
      action: true,
      challenge: false,
      html_content: `
      <div class="my-auto">
      <div class="container">
        <h1 class='yellow'>PROJECT 2</h1>
        <h2 class="mt-2 lesson-title font-weight-normal">YAAAAAYYYYY!</h2>
      </div>
      </div>
      `,
      js_function: "console.log('I am a DB loaded function')",
    },{
      slide_number: 2,
      action: false,
      checkpoint: false,
      css_class: 'definition',
      html_content: `
      <div>
          <p class='slide-header h2'>VISION</p>
      </div>     
      <div class="my-auto">
        <p class='h4 pb-3'>In Project 2 you'll create a <span class="blue">CV Website.</span></p>
        <ol  class='h5 text-left'>
          <li>You'll build it with HTML.</li>
          <li>Style it with CSS.</li>
          <li>and there's a <span class="blue">suprise</span> at the end.</li>
        </ol>
      </div>
    `,

    },{
      slide_number: 3,
      action: false,
      checkpoint: false,

      css_class: 'briefing',
      html_content: `
      <div>
        <p class='slide-header h2 blue'>PREVIEW</p>
      </div>
      <div class="my-auto">
        <p class='h4 pb-3'>Your CV Website will look like this:</p>
      <img class='swiper-lazy w-50' src='/img/lessons/C001-P002-T001/project2-final-preview.png' alt=''>
      </div>
        `,
    }, {
      slide_number: 4,
      action: false,
      checkpoint: false,
      css_class: 'snapshot',
      html_content: `
      <div>
        <p class='slide-header h2'>Snapshot</p>
        <p class='white fs75'>(These are your missions for today.)</p>
      </div>   
      <div class="my-auto">
        <ol  class='h4 text-left'>
        <li>Review the Website Structer.</li>
        <li>Add the <span class='html-code'>&lt;header&gt;</span> section and a border.</li>
        </ol> 
      </div>
        `,
    }, {
      slide_number: 5,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      html_content: `
      <div>
          <p class='slide-header h2 blue'>START</p>
      </div>
      <div class="my-auto">  
      <div>
        <p class='h4 pb-3'>Start by setting up the skeleton of code.</p>
        <img class='swiper-lazy w-50' src='/img/lessons/C001-P002-T001/html-skeleton-structure.PNG' alt=''>
      </div>
      </div>
        `,
      tip: "You learnt this in your last project.",
    }, {
      slide_number: 6,
      action: true,
      challenge: true,
      challenge_id: 0,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add this part:</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
          &lt;head&gt;<br>
          &nbsp&nbsp&lt;style&gt;<br>
          &nbsp&nbsp&lt;/style&gt;<br>
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
          description: "Add the head and style tag.",
          rule: "(<head>|<head [^>]*>)((.|\n)*)\s*(<style>|<style [^>]*>)((.|\n)*)\s*<\/style>((.|\n)*)\s*<\/head>",
        },
      ],

    }, {
      slide_number: 7,
      action: true,
      challenge: true,
      challenge_id: 1,

      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Now add the <span class='inline-code'>&lt;body&gt;</span> section.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
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
          description: "Add the body section.",
          rule: "((.|\n)*)\s*<\/head>((.|\n)*)\s*(<body>|<body [^>]*>)((.|\n)*)\s*<\/body>",
        },
      ],

    }, {
      slide_number: 8,
      action: false,
      checkpoint: false,
      css_class: 'checkpoint',
      html_content: `
      <div>
        <p class='slide-header h2'>CHECKPOINT</p>
        <p class="fs75 white">Your code should look something like this:</p>
      </div>
      <div class='text-left mx-auto w-50 my-auto'>
        <span class='html-code'>
          <p class='h4 pb-1 mb-0  blue'>&lt;head&gt;</p>
          <p class='h4 pl-5 pb-1 mb-0 white'>&lt;style&gt;</p>
          <p class='h4 pl-5 pb-1 mb-0 white'>&lt;/style&gt;</p>
          <p class='h4 pl-1 pb-2 mb-0  blue'>&lt;/head&gt;</p>
          <p class='h4 pl-1x pb-1 red'>&lt;body&gt;</p>
          <p class='h4 pl-1x pb-0 mb-0  red'>&lt;/body&gt;</p>
        </span>
      </div>
      `,
    }, {
      slide_number: 9,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      html_content: `
      <div>
        <p class='slide-header h6'>BRIEFING : &lt;header&gt; Tag</p>
      </div> 
      <div class="my-auto">
      <p class="h4 pb-3">The <span class='html-code'>&lt;header&gt;</span> of a website usually includes:</p>
        <ol class="h4 w-75 text-left">
          <li>Company name</li>
          <li>Logo &</li>
          <li>Menu</li>
        </ol>
      </div>
        `,
        tip: "Don't get confused. It's not the <head>. The <header> goes in the <body> section.",
    }, {
      slide_number: 10,
      action: true,
      challenge: true,
      challenge_id: 2,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a <span class='inline-code'>&lt;header&gt;</span>:</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
			  &lt;header&gt;<br>
			  &lt;/header&gt;
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
          description: "Add a <header>.",
          rule: "((.|\n)*)\s*(<body>|<body [^>]*>)((.|\n)*)\s*(<header>|<header [^>]*>)((.|\n)*)\s*(<\/header>)((.|\n)*)\s*<\/body>",
        },
      ],
    }, {
      slide_number: 11,
      action: true,
      challenge: true,
      challenge_id: 3,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add your name in all-caps(Capital Letters) in an <span class='html-code'>&lt;h1&gt;</span> in <span class='html-code'>&lt;header&gt;</span>.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        &lt;h1&gt;<br>
        &nbsp;Thandi Ndlovu <br>
        &lt;/h1&gt;
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
          description: "Add your name in all-caps(Capital Letters) in an <h1> in <header>.",
          rule: "((.|\n)*)\s*(<body>|<body [^>]*>)((.|\n)*)\s*(<header>|<header [^>]*>)((.|\n)*)\s*<h1>((.|\n)*)\s*[A-Z][A-Z][A-Z]((.|\n)*)\s*<\/h1>((.|\n)*)\s*(<\/header>)((.|\n)*)\s*<\/body>((.|\n)*)\s*",
        },
      ],

    }, {
      slide_number: 12,
      action: false,
      checkpoint: false,

      html_content: `
      <div class="my-auto">
        <p class='h3 pb-5'><span class="red"><b>TIP:</b></span><br> Don't forget to close your tags.</p>
      </div>
        `,
    }, {
      slide_number: 13,
      checkpoint: false,
      action: false,
      css_class: 'briefing',
      html_content: `
      <div>
          <p class='slide-header h2 blue'>GOOD JOB!</p>
      </div>
      <div class="my-auto">
        <p class='h3 pb-5'>You'll be a pro in no time!</p>
        <img class='swiper-lazy' src='/img/emoji/72/smiling-face-with-sunglasses.png' alt=''> 
      </div>
        `,
    }, {
      slide_number: 14,
      action: false,
      checkpoint: false,
      css_class: 'mission',
      html_content: `
      <div>
        <p class='slide-header h2'>Mission</p>
      </div>
      <div class="my-auto">
      <div>
        <p class='h3 w-75 mx-auto'>Style your <span class='html-code'>&lt;header&gt;</span>.</p>
        <p class='h1 dots'>...</p>
      </div>
      <div class='slide-footer'>
        <p class=''>Includes 4 challenges.</p>
      </div>
      </div>
        `,
    }, {
      slide_number: 15,
      checkpoint: false,
      action: false,
      css_class: 'briefing',
      html_content: `
      <div class="my-auto">
        <p class='h3 pb-5'>You got this.</p>
        <img class='swiper-lazy' src='/img/emoji/72/face-with-stuck-out-tongue-and-winking-eye.png' alt=''>
        <img class='swiper-lazy' src='/img/emoji/72/face-with-stuck-out-tongue-and-tightly-closed-eyes.png' alt=''>
        <img class='swiper-lazy' src='/img/emoji/72/flexed-biceps.png' alt=''>	  
      </div>
        `,
    }, {
      slide_number: 16,
      action: true,
      challenge: true,
      challenge_id: 4,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a CSS selector called <span class="inline-code">header.</span></li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        <span class="code-fade">&lt;style&gt;</span><br>
        &nbsp;header{<br>&nbsp&nbsp} <br>
        <span class="code-fade">&lt;/style&gt;</span>
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
          description: "Add aCSS selector called header.",
          rule: "((.|\n)*)\s*(<style>|<style [^>]*>)((.|\n)*)\s*header((.|\n)*)\s*{((.|\n)*)\s*}((.|\n)*)\s*<\/style>((.|\n)*)\s*",
        },
      ],
    }, {
      slide_number: 17,
      action: true,
      challenge: true,
      challenge_id: 5,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a lightblue background to the <span class="inline-code">header</span> element.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        background: lightblue;
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
          description: "Add a lightblue background to the header element.",
          rule: "(<style>|<style [^>]*>)((.|\n)*)header((.|\n)*)\s*{((.|\n)*)\s*(background|background-color)((.|\n)*)\s*:((.|\n)*)\s*lightblue;((.|\n)*)\s*<\/style>",
        },
      ],

    }, {
      slide_number: 18,
      action: true,
      challenge: true,
      challenge_id: 6,

      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 3</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a simple blue border to <span class="inline-code">header</span>.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        border: solid blue;
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
          description: "Add a simple blue border to header.",
          rule: "(<style>|<style [^>]*>)((.|\n)*)header((.|\n)*)\s*{((.|\n)*)\s*(border)((.|\n)*)\s*:((.|\n)*)\s*solid((.|\n)*)\s*blue;((.|\n)*)\s*<\/style>",
        },
      ],

    }, {
      slide_number: 19,
      action: false,
      checkpoint: false,
      css_class: 'play',
      html_content: `
      <div>
        <p class='slide-header h2'>THINK</p>
      </div>
      <div class="my-auto" >
        <p class='h3 pb-4'>If you want a border only on the TOP and the BOTTOM.</p>
        <p class='h4 pb-1 w-75'><u>Not</u> all the way around.</p>
      <img class='swiper-lazy' src='/img/emoji/72/thought-balloon.png' alt=''>	
      </div>  
        `,
    }, {
      slide_number: 20,
      action: false,
      checkpoint: false,

      css_class: 'briefing',
      html_content: `
      <div>
        <p class='slide-header h6'>BRIEFING : Top and Bottom Border</p>
      </div> 
      <div class="my-auto">
      <p class="h5 pb-3">The <span class='html-code'>border-width:</span></p>
      <img class='swiper-lazy w-50' src='/img/lessons/C001-P002-T001/border-top-bottom.PNG' alt=''>
      </div>
        `,
    }, {
      slide_number: 21,
      action: true,
      challenge: true,
      challenge_id: 7,
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 4</p>
      </div>
      <div class="my-auto">
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a top and bottom border to <span class="inline-code">header</span>.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        border-width: 10px 0px 10px 0px;
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
          description: "Add a top and bottom border to header.",
          rule: "(<style>|<style [^>]*>)((.|\n)*)header((.|\n)*)\s*{((.|\n)*)\s*(border-width)((.|\n)*)\s*:((.|\n)*)\s*10px((.|\n)*)\s*0px((.|\n)*)\s*10px((.|\n)*)\s*0px;((.|\n)*)\s*<\/style>",
        },
      ],

    }, {
      slide_number: 22,
      checkpoint: false,
      action: false,
      css_class: 'briefing',
      html_content: `
      <div class="my-auto">
        <p class='h3 pb-5'>How did you do?</p>
        <img class='swiper-lazy' src='/img/emoji/72/thinking-face.png' alt=''><br>
        <p class='h3 pb-5 pt-5'>EXCITING!!!</p>
        <p class='h3 pb-5'>Go to the next slide and compare your code.</p> 
      </div>
        `,
    }, {
      slide_number: 23,
      action: false,
      checkpoint: false,
      css_class: 'checkpoint',
      html_content: `
      <div>
        <p class='slide-header h2'>CHECKPOINT</p>
      
      <p class="fs75 white">Your code should look something like this:</p>
      </div>
      <div class='html-code-box my-auto'>
        <span class='html-code'>
          &lt;head&gt;<br> 
          &nbsp;&lt;style&gt;<br> 
          &nbsp;&nbsp;header {<br>
          &nbsp;&nbsp;background: lightblue;<br>
          &nbsp;&nbsp;border: solid blue;<br>
          &nbsp;&nbsp;border-width: 10px 0px 10px 0px;<br>
          &nbsp;&nbsp;}<br>
          &nbsp;&lt;/style&gt;<br>
          &lt;/head&gt;<br><br>
          &lt;body&gt;<br>
          &nbsp;&lt;header&gt;<br>
          &nbsp;&nbsp;&lt;h1&gt;Thandi Ndlovu&lt;/h1&gt;<br>
          &nbsp;&lt;/header&gt;<br>
          &lt;/body&gt;
        </span>
      </div>
      `,
    }, {
      slide_number: 24,
      action: false,
      checkpoint: false,
      css_class: 'checkpoint',
      html_content: `
      <div>
        <p class='slide-header h2'>FABULOUS</p>
      </div>
      <div class="my-auto">
        <p class='h3 pb-5 white'>Now your code looks like a bomb...</p>
        <img class='swiper-lazy' src='/img/emoji/72/bomb.png' alt=''>
      </div>
      `,
    }, {
      slide_number: 25,
      action: false,
      checkpoint: false,
      css_class: 'checkpoint',
      html_content: `
      <div>
        <p class='slide-header h2'>CHECKPOINT</p>
      <p class="fs75 white">Your code should look something like this:</p>
      </div>
    <div class="my-auto">
    <p class='slide-header h5'>WEB CHECK:</p>
    <img class='swiper-lazy w-50' src='/img/lessons/C001-P002-T001/web-check-1.png' alt=''>
    </div>
    
      `,
    }, {
      slide_number: 26,
      checkpoint: false,
      action: false,
      css_class: 'briefing',
      html_content: `
      <div class="my-auto">
        <p class='h3 pb-4'>Did you know?</p>
      <p class='h4 pb-4'>The best way to learn code is <span class="pink"><strong>with friends</strong></span>?</p>
        <img class='swiper-lazy' src='/img/emoji/72/smiling-face-with-sunglasses.png' alt=''>
        <img class='swiper-lazy' src='/img/emoji/72/smiling-face-with-sunglasses.png' alt=''>
        <img class='swiper-lazy' src='/img/emoji/72/smiling-face-with-sunglasses.png' alt=''><br><br>
      <p class='h5 pb-4'>When it gets complicated you can help each other.</p>
      </div>
        `,
    }, {
      slide_number: 27,
      checkpoint: false,
      action: false,
      css_class: 'briefing',
      html_content: `
      <div class="my-auto">
        <p class='h3 pb-4'>Ready for Training 2?</p>
        <img class='swiper-lazy' src='/img/emoji/72/winking-face.png' alt=''>
      </div>
        `,
    }, {
      slide_number: 28,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      html_content: `
      <div class='my-auto'>
          <p class='h3 pb-4 w-75'>Lets Go...</p>
          <a class='btn btn-encouraging next check' data-click="gt:/codepanel/C001/P002/T002" style='width: 80%;' href='#'>Start Now</a>
          <a class='btn btn-encouraging next check mt-4' data-click="o:projects" style='width: 80%;' href='#'>Projects Page</a>
       </div>
      `,
    },


  ],
};

export default lesson_dataC0001P001T005;

