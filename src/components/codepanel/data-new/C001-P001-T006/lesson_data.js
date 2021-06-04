//P2Training2
const lesson_dataC0001P001T006 = {
  defaultCode: ``,
  kbLayout: "",
  loadJS: "",
  prevLessonID: "P2Training1",
  nextLessonSlug: "",
  pageDesc:
    "Learn how to make your first website in only 5 minutes with this easy intro lesson to coding.",
  pageKeywords:
    "coding, code, training 1, learn to code, code website, my first website",
  pageTitle: "CodeJIKA - Project 2 Training 2",
  save_lesson_id: "P2Training2",
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
      action: false,
      checkpoint: false,
      css_class: 'intro',
      'html_content': `
        <div>    
          <p class='slide-title h1 mt-5'>TRAINING 2</p>
        </div>      
        <div class="my-auto">
          <p class='h1'>Let's<br>
          <strong class='fs-x2 aqua'>ROCK</strong><br>
          this!</p>
          <img class='mt-4 w-20 swiper-lazy' src='/img/emoji/72/smiling-face-with-open-mouth-and-tightly-closed-eyes.png' alt=''>
        </div>      `,
    }, {
      slide_number: 2,
      action: false,
      checkpoint: false,
      css_class: 'snapshot',
      'html_content': `
      <div>
        <p class='slide-header h2'>Snapshot</p>
        <p class='white fs75'>(These are your missions for today.)</p>
      </div>      
    <div class="my-auto">       
      <ol class='h4 text-left'>
        <li>Learn how to center everything.</li>
        <li>Learn <i>italics</i>.</li>
        <li>Add a section with your birthday.</li>
      </ol>
    </div>
        `,
    }, {
      slide_number: 3,
      action: false,
      checkpoint: false,
      
      css_class: 'mission',
      'html_content': `
      <div>
        <p class='slide-header h2'>Mission</p>
      </div>
      <div>
        <p class='h2'>Center everything.</p>
        <p class='h1 dots'>...</p>
      </div>
      <div class='slide-footer'>
        <p class=''>Includes 2 challenges.</p>
      </div>
        `,
    }, {
      slide_number: 4,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div>
        <p class='slide-header h6'></p>
      </div> 
      <div class="my-auto">
        <p class='h4 pb-4'>We'll use <strong>two ways</strong> to get eveything in the middle:</p>
        <ol class='h5 text-left'>
          <li>First, <span class='html-code'><span class="blue">margin</span>: auto;</span><br>to center everything inside <span class='html-code'>&lt;header&gt;</span>.</li>
          <li>Center all <strong>text</strong> with:<br><span class='html-code'><span class="blue">text-align</span>: center;</span></li>
        </ol>
      </div>   
         
        `,
    }, {
      slide_number: 5,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
        <div>
          <p class='slide-header h6'>BRIEFING : margin: auto;</p>
        </div>    
        <div class="my-auto">
          <p class='h2 pb-4'><span class="html-code">margin: auto;</span></p>
          <p class='h5 pb-4'>Margins are awesome.<br>But with this one you can even "Center" elements.</p>
          <img class=' swiper-lazy w-50' src='/img/lessons/C001-P002-T002/margin-auto.png' alt=''> 
        </div>    
        `,
    }, {
      slide_number: 6,
      action: true,
      challenge: true,
      challenge_id: 0,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Center the <span class='inline-code'>&lt;header&gt;</span> using <span class='inline-code'>margin.</span></li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        margin: 0 auto;
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
          description: "Cente the <header> using margin.",
          rule: "(<style>|<style [^>]*>)((.|\n)*)header((.|\n)*)\s*{((.|\n)*)\s*(margin)((.|\n)*)\s*:((.|\n)*)\s*0((.|\n)*)\s*auto((.|\n)*)\s*;((.|\n)*)\s*<\/style>",
        },
      ],
      tip: "In the header selector in <style>",
    }, {
      slide_number: 7,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
        <div>
          <p class='slide-header h6'>BRIEFING : text-align:</p>
        </div>    
        <div class="my-auto">
          <p class='h2 pb-4'><span class="html-code">text-align:</span></p>
          <p class='h5 pb-4'>Tells the text where to "lean".</p>
          <img class=' swiper-lazy pb-4 w-50' src='/img/lessons/C001-P002-T002/text-align.PNG' alt=''>
          <p class='h5 pb-4'>Left, Right or Center.</p>
        </div>    
        `,
      
      
    }, {
      slide_number: 8,
      action: true,
      challenge: true,
      challenge_id: 1,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Center text in the <span class='inline-code'>&lt;header&gt;</span> section.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        text-align:
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
          description: "Center text in the header section.",
          rule: "(<style>|<style [^>]*>)((.|\n)*)header((.|\n)*)\s*{((.|\n)*)\s*(text-align)((.|\n)*)\s*:((.|\n)*)\s*center((.|\n)*)\s*;((.|\n)*)\s*<\/style>",
        },
      ],
      tip: "Close the element with a ; (semicolon)."
    }, {
      slide_number: 9,
      action: false,
      checkpoint: false,
      css_class: 'checkpoint',
      'html_content': `
      <div>
        <p class='slide-header h2'>CHECKPOINT</p>
        <p class="fs75 white">Your code should look something like this:</p>
      </div>
    <div class='html-code-box my-auto'>
      <span class='html-code fade-box-top fade-box-bottom'>
        <span class="code-fade">&lt;head&gt;<br>
          &nbsp;&lt;style&gt;<br>
          &nbsp;&nbsp;header{<br>
          &nbsp;&nbsp;background: lightblue;<br>
          &nbsp;&nbsp;border: solid blue;<br>
          &nbsp;&nbsp;border-width: 10px 0px 10px 0px;</span><br>
          &nbsp;&nbsp;margin:0 auto;<br>
          &nbsp;&nbsp;text-align: center;<br>
          <span class="code-fade">&nbsp;}<br>
          &nbsp;&lt;/style&gt;<br>
          &lt;/head&gt;</span><br>
      
        </span>
      </span>
      </div>
      `,
      
      
    }, {
      slide_number: 10,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
    <div class="my-auto">
        <p class="h2 pb-4 aqua text-uppercase bold"><strong>MISSION COMPLETE</strong></p>
        <img class='swiper-lazy' src='/img/emoji/72/flexed-biceps.png' alt=''> 
        <img class='swiper-lazy' src='/img/emoji/72/thumbs-up-sign.png' alt=''> 
        <p class="h4 pt-5">You managed that like a BOSS!!!</p>
    </div>
      `,
      
      
    }, {
      slide_number: 11,
      action: false,
      checkpoint: false,
      css_class: 'mission',
      'html_content': `
      <div>
        <p class='slide-header h2'>Mission</p>
      </div>
     
      <div>
      <ol class="h3 text-left">
        <li>Decide on your dream job.</li>
        <li>Learn about italics.</li>
      </ol>
      <p class='h1 dots'>...</p>
      </div>
      <div class='slide-footer'>
        <p class=''>Includes 4 challenges.</p>
      </div>
        `, 
    }, {
      slide_number: 12,
      action: false,
      checkpoint: false,
      
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <div class='h3 pb-4'>What's your Dream?</div>
        <p class='h5 pb-4'>We are excited about you learning skills to make it a reality.</p>
      <img class='swiper-lazy' src='/img/emoji/72/rocket.png' alt=''>
        </div>
        `,
    }, {
      slide_number: 13,
      action: false,
      checkpoint: false,
      css_class: 'play',
      'html_content': `
      <div>
        <p class='slide-header h2'>THINK</p>
      </div>
      <div class="my-auto">
        <p class='h3 pb-4'>What do you want to do when you grow up?</p>
      <img class='swiper-lazy' src='/img/emoji/72/thinking-face.png' alt=''>	
      <img class='swiper-lazy' src='/img/emoji/72/thought-balloon.png' alt=''>	
      <img class='swiper-lazy' src='/img/emoji/72/building-construction.png' alt=''>	
      </div>  
        `,
    }, {
      slide_number: 14,
      action: true,
      challenge: true,
      challenge_id: 2,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Add your dream job or future profession. After the  <span class='inline-code'>&lt;h1&gt;</span> in <span class='inline-code'>&lt;header&gt;.</span></li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        &lt;h1&gt;<br>&nbsp;Aspiring Mechanical Engineer<br>&lt;/h1&gt;
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
          description: ">Add your dream job or future profession. After the h1 in header",
          rule: "((.|\n)*)\s*<\/h1>((.|\n)*)\s*<h1>((.|\n)*)\s*([a-z][a-z][a-z])((.|\n)*)\s*<\/h1>((.|\n)*)\s*(<\/header>|<\/header [^>]*>)((.|\n)*)\s*<\/body>",
        },
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    }, {
      slide_number: 15,
      action: false,
      checkpoint: false,
      
      css_class: 'briefing',
      'html_content': `
      <div>
        <p class='slide-header h6'>BRIEFING : Italic Tag</p>
      </div> 
      <div class='my-auto'>
        <p class='h2 pb-4 html-code'><span class="html-code">&lt;i&gt;&nbsp;&nbsp;&lt;/i&gt;</span></p>
        <p class='h5'>The <span class="inline-code">&lt;i&gt;</span> tag stands for <i style="color:#ffb100;">italics</i>.<br>Italics is text slanted to the side.</p>
      <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        <span class="code-fade">I</span> &lt;i&gt; <span class="code-fade">LOVE</span> &lt;/i&gt <span class="code-fade">ICECREAM!</span>
      </div> 
        `,
    }, {
      slide_number: 16,
      action: true,
      challenge: true,
      challenge_id: 3,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Add italics to your dream job by using <span class="html-code">&lt;i&gt;</span>.</span></li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box fade-box-bottom fade-box-top'>
        &lt;h1&gt;<br>
        &nbsp;&lt;i&gt;<br>
        &nbsp;&nbsp;Aspiring Mechanical Engineer<br>
        &nbsp;&lt;/i&gt;<br>
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
          //description: "type your name inside <h1> tag",
          rule: "((.|\n)*)\s*<i>((.|\n)*)\s*(<\/i>|<\/i [^>]*>)((.|\n)*)\s*",
        },
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    }, {
      slide_number: 17,
      action: false,
      checkpoint: false,
      
      css_class: 'briefing',
      'html_content': `
      <div>
        <p class='slide-header h6'>BRIEFING : Italic Tag</p>
      </div> 
      <div class='my-auto'>
        <p class='h2 pb-4 html-code'><span class="html-code">&lt;i&gt;&nbsp;&nbsp;&lt;/i&gt;</span></p>
        <p class='h5'>FYI: These are other ways to <span style="color:#00c4ff;">style specific words.</span></p>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
        &lt;em&gt; <span class="code-fade">(emphasized text)</span><br>
      &lt;strong&gt; <span class="code-fade">(important text)</span><br>
      &lt;mark&gt; <span class="code-fade">(marked/highlight text)</span>
      </div> 
        `,

    }, {
      slide_number: 18,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <p class="h2 pb-4 aqua text-uppercase bold"><strong >AWESOME!</strong></p> 
        <p class="h4 pt-5">You aced those italics.</p>
      </div>
      `,
    }, {
      slide_number: 19,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <p class="h4 pt-5">Now increase your <span class="html-code">&lt;h1&gt;</span> font to give the website some charecter.</p>
      </div>
      `,

    }, {
      slide_number: 20,
      action: true,
      challenge: true,
      challenge_id: 4,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Create a <span class="inline-code">h1{ }</span> rule. Use: <span class="html-code">font-size</span>(to make it 3x the size.)</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
          h1{<br>
          &nbsp;font-size: 3em;<br>
          }
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
          description: "Create a h1{ } rule. Use: font-size(to make it 3x the size.)",
          rule: "(<style>|<style [^>]*>)((.|\n)*)h1((.|\n)*)\s*{((.|\n)*)\s*(font-size)((.|\n)*)\s*:((.|\n)*)\s*3em((.|\n)*)\s*;((.|\n)*)\s*<\/style>*",
        },
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    }, {
      slide_number: 21,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <p class="h2 pb-4 aqua text-uppercase bold"><strong>NICE!</strong></p> 
      </div>
      `,
    }, {
      slide_number: 22,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <p class='h3 pb-4'>Remember <span class="html-code">&lt;br&gt;</span>?</p><br>
        <p class='h4 pb-4'>We need a couple of them to space things a little.</p>
      </div>
        `,
    }, {
      slide_number: 23,
      action: false,
      checkpoint: false,
      
      css_class: 'briefing',
      'html_content': `
      <div>
        <p class='slide-header h6 white'>BRIEFING : &lt;br&gt; Tag</p>
      </div> 
      <div class='my-auto'>
    <span class="h3 pb-4"><span class="html-code">&lt;br&gt; tag = New Line</span></span><br><br>
    <span class="h5">Typing &lt;br&gt; is like hitting the "Enter" key on your keyboard.<br>It adds a line.</span><br><br>
    <img class='swiper-lazy' style="width: 25%;" src='/img/lessons/C001-P002-T002/enter-key.png' alt=''>
    </div>
        `,
      
      
    }, {
      slide_number: 24,
      action: true,
      challenge: true,
      challenge_id: 5,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
      <h2 class='mb-0'>Challenge</h2>
      <p class='fs75'></p>
    </div>
    <div  class='my-auto'>
    <div>
      <div class='text-left pb-3'>
        <p class='blue text-uppercase'>Code:</p>
        <ul class='list-none'>
          <li class='tasks'>Add <span class="html-code">&lt;br&gt;</span></li>
        </ul>
    <ol>
    <li>After <span class="html-code">&lt;header&gt;</span> opening tag.</li>
    <li>Twice after <span class="html-code">&lt;/i&gt;</span>.</li>
    <li>After <span class="html-code">&lt;/header&gt;</span> closing tag.</li>
    </ol>
      </div>

      <div class='button-locked'>
        <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
        <a class='swiper-next skip' style=''>Skip this step</a> 
      </div>
      <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
      </div>
    </div>
    </div>
      `,
      reg: [
        {
          description: "Add a breakline <br>",
          rule: "((.|\n)*)\s*(<\/i>)((.|\n)*)\s*(<br>)((.|\n)*)\s*(<br>)((.|\n)*)\s*<\/header>((.|\n)*)\s*(<br>)",
        },
      ],
      updated_at: "2017-09-28T16:09:40.256Z",
    }, {
      slide_number: 25,
      action: false,
      checkpoint: false,
      css_class: "checkpoint",
      'html_content': `
      <div>
        <p class='slide-header h2'>CHECKPOINT</p>
     <p class="fs75 white">Your code should look something like this:</p>
      </div>

    <div class='html-code-box my-auto'>
    <span class='html-code fade-box-top fade-box-bottom'>
    &lt;body&gt;<br>
    &nbsp;&lt;header&gt;<br>
      &nbsp;<span class="aqua">&lt;br&gt;</span><br>
      &nbsp;&nbsp;&lt;h1&gt;Thandi Ndlovu &lt;/h1&gt;<br>
      &nbsp;&nbsp;&lt;i&gt;Aspiring Mechanical Engineer &lt;/i&gt;<br>
      &nbsp;&lt;<span class="aqua">&lt;br&gt;&lt;br&gt;</span><br>
    &nbsp;&lt;header&gt;<br>
    &nbsp;<span class="aqua">&lt;br&gt;</span><br>
    &lt;body&gt;
    </span>
    </span>
    </div>
      `,
    }, {
      slide_number: 26,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
    <div class="my-auto">
      <p class="h2 pb-4 aqua text-uppercase bold"><strong>Yabadabadoo!</strong></p> 
      <p class="h4 pt-5">Now add some details about yourself.</p>
      </div>
      `,
    }, {
      slide_number: 27,
      action: false,
      checkpoint: false,
      
      css_class: 'mission',
      'html_content': `
      <div>
        <p class='slide-header h2'>Mission</p>
      </div>
      <div>
        <p class='h2 w-75 mx-auto'>Create a new section with:</p>
        <ul class="h4 text-left">
          <li class="">A title</li>
          <li>Your date of birth and</li>
          <li>Other details.</li>
        </ul>
        <p class='h1 dots'>...</p>
      </div>
      <div class='slide-footer'>
        <p class=''>Includes 4 challenges.</p>
      </div>
        `,
    }, {
      slide_number: 28,
      action: true,
      challenge: true,
      challenge_id: 6,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1</p>
      </div>
      <div class='my-auto'>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>As a title, type "DETAILS" between an opening and closing <span class="inline-code">&lt;h3&gt;</span> tag.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
         &lt;h3&gt;<br>
		 &nbsp;DETAILS<br>
		 &lt;/h3&gt;
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
          description: "As a title, type DETAILS between an opening and closing h3 tag.",
          rule: "((.|\n)*)\s*<h3>((.|\n)*)\s*(DETAILS)((.|\n)*)\s*<\/h3>",
        },
      ],
      tip: "Put this below the <br> tag and before the </body> closing tag.",
      updated_at: "2017-09-28T16:09:40.256Z",
    }, {
      slide_number: 29,
      action: true,
      challenge: true,
      challenge_id: 7,
      created_at: "2017-08-23T00:55:40.386Z",
      css_class: "challenge cp_yellow",
      html_content: `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2</p>
      </div>
      <div class='my-auto'>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a <span class="inline-code">&lt;p&gt;</span> with your Date of Birth in it.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
         &lt;p&gt;<br>
		 &nbsp;Date of Birth: 27 July 2006<br>
		 &lt;/p&gt;
		 </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
	  <div class='slide-footer tips text-left'>
        <div><span class='red'>TIP:</span> Below the <span class="inline-code">&lt;h3&gt;</span> tag.</div>
      </div>
      `,
      reg: [
        {
          description: "Add a <p> with your Date of Birth in it.",
          rule: "((.|\n)*)\s*<\/h3>((.|\n)*)\s*<p>((.|\n)*)\s*([1-9]|[0-3][0-9])((.|\n)*)\s*([a-z][a-z][a-z])((.|\n)*)\s*([0-9][0-9][0-9][0-9])((.|\n)*)\s*<\/p>",
        },
      ],
    }, {
      slide_number: 30,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <p class="h2 pb-4 aqua text-uppercase bold"><strong>FANATSTIC!</strong></p> 
      <p class="h4 pt-5">Now two more lines.</p>
      </div>
      `,
    }, {
      slide_number: 31,
      action: true,
      challenge: true,
      challenge_id: 8,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Add another <span class="inline-code">&lt;p&gt;</span> with your School name in it.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
         &lt;p&gt;<br>
		 &nbsp;School: Sandrigham Secondary<br>
		 &lt;/p&gt;
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
          description: "Add another <p> with your School name in it.",
          rule: "((.|\n)*)\s*<\/p>((.|\n)*)\s*<p>((.|\n)*)\s*School((.|\n)*)\s*([a-z][a-z][a-z])((.|\n)*)\s*<\/p>",
        },
      ],
    }, {
      slide_number: 32,
      action: true,
      challenge: true,
      challenge_id: 9,
      created_at: "2017-08-23T00:55:40.386Z",
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
            <li class='tasks'>Add one last <span class="inline-code">&lt;p&gt;</span> with your Grade in it.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
         &lt;p&gt;<br>
		 &nbsp;Grade: 9<br>
		 &lt;/p&gt;
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
          description: "Add one last <> with your Grade in it..",
          rule: "((.|\n)*)\s*<p>((.|\n)p*)\s*<\/p>((.|\n)*)\s*<p>((.|\n)*)\s*<\/p>((.|\n)*)\s*<p>((.|\n)*)\s*Grade((.|\n)*)\s*[0-9]((.|\n)*)\s*<\/p>",
        },
      ],
    }, {
      slide_number: 33,
      action: false,
      checkpoint: false,
      css_class: "checkpoint",
      'html_content': `
      <div>
        <p class='slide-header h2'>CHECKPOINT</p>
      
      <p class="fs75 white">Your code should look something like this:</p>
      </div>
    <div class='html-code-box my-auto'>
    <span class='html-code '>
    &lt;header&gt;<br>
      &nbsp;&lt;br&gt;<br>
       &nbsp;&nbsp;&lt;h3&gt;<br>
             &nbsp;&nbsp;&nbsp;DETAILS<br>
          &nbsp;&nbsp;&lt;/h3&gt;<br>
       &nbsp;&nbsp;&lt;p&gt;<br>
       Date of Birth: 27 July 2006<br>
       &nbsp;&nbsp;&lt;/p&gt;<br>
       &nbsp;&nbsp;&lt;p&gt;<br>
       School: Sandringham Secondary<br>
       &nbsp;&nbsp;&lt;/p&gt;<br>
       &nbsp;&nbsp;&lt;p&gt;<br>&nbsp;Grade: 9<br>&nbsp;&lt;/p&gt;
    </span>
        </div>
      `,
    }, {
      slide_number: 34,
      checkpoint: false,
      action: false,
      css_class: 'briefing',
      'html_content': `
      <div class="my-auto">
        <p class='h3 pb-4'>Ready for Training 3?</p>
        <img class='swiper-lazy' src='/img/emoji/72/winking-face.png' alt=''>
      </div>
        `,
    }, {
      slide_number: 35,
      action: false,
      checkpoint: false,
      css_class: 'briefing',
      'html_content': `
      <div class='my-auto'>
          <p class='h3 pb-4 w-75'>Lets Go...</p>
          <a class='btn btn-encouraging next check' data-click="gt:/codepanel/C001/P002/T003" style='width: 80%;' href='#'>Start Now</a>
          <a class='btn btn-encouraging next check mt-4' data-click="o:projects" style='width: 80%;' href='#'>Projects Page</a>
       </div>
      `,
    },

  ],
};

export default lesson_dataC0001P001T006;

