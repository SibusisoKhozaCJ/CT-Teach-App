export const lesson_data = 
{
    'defaultCode': // default code, if user has not already started coding   
`<head>
  <style>
    h1 {
      font-size: 75px;
    }
    i {
      font-size: 25px;
    }
  </style>
</head>
<body>
    <h1>My Name</h1>
      <h3>Motivation:
        <br><br>
        <i>I want to become a coder</i>
      </h3>
    <h3>Launching Soon...</h3>
    <p>01 January 2000</p>
</body>



` ,
    'kbLayout': '', // not currently in use
    'loadJS': 'https://cdnjs.cloudflare.com/ajax/libs/geopattern/1.2.3/js/geopattern.min.js"></script>', // not currently in use
    'prevLessonID': 'P1Training2', // Lesson ID of previous lesson where to load user's code
    'nextLessonSlug': '', // not currently in use
    'pageDesc': 'Learn how to build your first website with these easy intro lessons to coding.', 
    'pageKeywords': 'coding, code, learn to code, code website, my first website', 
    'pageTitle': 'CodeJIKA - Project 1, Training 3',
    'save_lesson_id': 'P1Training3', // This is id that will be used to store save code in Firebase
  'slides' : [ {
    'slide_number' : 1,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'intro',      
    'html_content' : `
      <div>    
      	<p class='slide-title h1 mt-5'>TRAINING 3</p>
      </div>      
      <div class=''>
        <p class='h1'>Let's<br>
        <strong class='fs-x2 aqua'>ROCK</strong><br>
        this!</p>
        <img class='mt-4 w-20 swiper-lazy' data-src='../img/emoji/72/smiling-face-with-open-mouth-and-tightly-closed-eyes.png' alt=''>
      </div>      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 2,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'snapshot',    
    'html_content' : `
  	<div>
  	  <p class='slide-header h2'>Snapshot</p>
  	  <p class='white fs75'>(These are your missions for today.)</p>
  	</div>      
	<div>       
		<ol class='h4'>
		  <li>Learn <strong>page sections</strong>.</li>
		  <li>Add a LIT <strong>background</strong>.</li>
		  <li>Add a <span class='inline-code font-weight-bold'>&lt;footer&gt;</span></li>
		</ol>
	</div>
	<div>
		<p class='slide-footer white'>How it will look:</p>
		<div class='btn btn-aqua next preview-output'>Preview</div>
	</div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {  	
    'slide_number' : 3,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'mission',
    'html_content' : `
  	<div>
  	  <p class='slide-header h2'>Mission</p>
  	</div>
    <div>
      <p class='h1'>Ace* page<br>
      sections.</p>
      <p class='mt-4 pb-5'>*When you “Ace” something,<br>
      you are amazing at it.</p>
      <p class='h1 dots'>...</p>
    </div>
    <div class='slide-footer'>
      <p class=''>Includes 0 challenges.</p>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 	
    'slide_number' : 4,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
      <div>
  	    <p class='slide-header h6'>BRIEFING : Website Structure</p>
      </div>    
      <div>
        <p>This is a <strong>Desktop</strong> Website Page Structure.</p>
        <img class='swiper-lazy' data-src='../learn/lessons/P001-T03-M-V001/img/desktop-website-page-structure.png' alt=''> 
      </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 5,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
      <div>
  	    <p class='slide-header h6'>BRIEFING : Website Structure</p>
      </div>    
      <div>
        <p class='w-75 pb-4'>and here is a <strong>Mobile</strong> Website Page Structure. </p>
        <img class='w-50 my-auto swiper-lazy' data-src='../learn/lessons/P001-T03-M-V001/img/mobile-website-page-structure.png' alt=''> 
      </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 6,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
  	<div>
  		<p class='h2 yellow pb-3 bold'>OBSERVE:</p>
  		<p class='h3 pb-4'>How is the Desktop PC Structure different then the Mobile?</p>
  		<img class='swiper-lazy' data-src='../img/emoji/72/thinking-face.png' alt=''> 
  	</div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 7,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'bg-pink',    
    'html_content' : `
  	<div>
  		<p class='h2 pb-4 bold'>THINK:</p>
  		<p class='h3 pb-4'>How do you think the sections are created?</p>
  		<img class='swiper-lazy' data-src='../img/emoji/72/thought-balloon.png' alt=''> 
  	</div>   
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 8,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : Website Structure</p>
    </div> 
    <div>
      <p class='h4 pb-4'>STRUCTURE:</p>
      <p class=' pb-4'>Each section is constructed with:</p>
      <ol class='h5'>
        <li><strong class='pink'>CSS boxes</strong> and styles linked to</li>
        <li><strong class='blue'>HTML sections</strong>.</li>
      </ol>
      <img class='w-30 swiper-lazy' data-src='../learn/lessons/P001-T03-M-V001/img/mobile-website-page-structure.png' alt=''>
    </div>   
    <div class='slide-footer tips'>
      <span>Tip:</span> Remember this.
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 9,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'remember',
    'html_content' : `
  	<div>
  	  <p class='slide-header h2'>Remember</p>
  	</div>
    <div>
      <p class='h2'>What is<br>linked?</p>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 10,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : Website Structure</p>
    </div> 
    <div>
      <p class='h3 pb-4'>Here are some common HTML sections:</p>
      <p class='h3 pb-2 blue'>&lt;header&gt;</p>
      <p class='h3 pb-2 pink'>&lt;menu&gt;</p>
      <p class='h3 pb-2 green'>&lt;section&gt;</p>
      <p class='h3 orange'>&lt;footer&gt;</p>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 11,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : Website Structure</p>
    </div> 
    <div>
      <p class='h3 pb-4'>All placed inside the <body> tags.</p>
      <div class='inside-body-tag'>
        <p class='h3 pb-2 blue'>&lt;header&gt;</p>
        <p class='h3 pb-2 pink'>&lt;menu&gt;</p>
        <p class='h3 pb-2 green'>&lt;section&gt;</p>
        <p class='h3 orange'>&lt;footer&gt;</p>
      </div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 12,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : Website Structure</p>
    </div> 
    <div class=''>
      <p class='h3 pb-4'>Like this:</p>
      <div class='text-left mx-auto w-50'>
        <p class='h5 pl-1x pb-1 '>&lt;body&gt;</p>
        <p class='pl-4 pb-1 mb-0  blue'>&lt;header&gt;</p>
        <p class='pl-4 pb-2 mb-0  blue'>&lt;/header&gt;</p>
        <p class='pl-4 pb-1 mb-0  pink'>&lt;menu&gt;</p>
        <p class='pl-4 pb-2 mb-0  pink'>&lt;menu&gt;</p>
        <p class='pl-4 pb-1 mb-0  green'>&lt;section&gt;</p>
        <p class='pl-5 pb-1 mb-0  purple'>&lt;stuff&gt;</p>
        <p class='pl-5 pb-1 mb-0  purple'>&lt;/stuff&gt;</p>
        <p class='pl-4 pb-2 mb-0  green'>&lt;section&gt;</p>
        <p class='pl-4 pb-1 mb-0  orange'>&lt;footer&gt;</p>
        <p class='pl-4 pb-1 mb-0 orange'>&lt;footer&gt;</p>
        <p class='h5 pl-1x pb-0 mb-0  '>&lt;/body&gt;</p>
      </div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 13,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'html_content' : `
    <div>
      <p class='h3 pb-5'>All good so far?</p>
      <img class='swiper-lazy' data-src='../img/emoji/72/smiling-face-with-sunglasses.png' alt=''> 
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 14,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'mission',
    'html_content' : `
    <div>
      <p class='slide-header h2'>Mission</p>
    </div>
    <div>
      <p class='h3 w-75 mx-auto'>Add a <span class='html-code'>&lt;header&gt;</span> with a crazy background.</p>
      <p class='h1 dots'>...</p>
    </div>
    <div class='slide-footer'>
      <p class=''>Includes 4 challenges.</p>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {      
    'slide_number' : 15,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : &lt;header&gt;</p>
    </div> 
    <div class=''>
      <p class='h2 pb-4'>&lt;header&gt;</p>
      <p class='h3'>Logo, Company Name & Menu go here.</p>
    </div>
    <div class='slide-footer tips text-left'>
      <p class='pb-0'>Tips:</p>
      <ol class=''>
        <li>Goes in the &lt;body&gt; section.</li>
        <li>&lt;header&gt; has <u>nothing</u> to do with &lt;head&gt;.</li>
      </ol>
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 16,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : &lt;header&gt;</p>
    </div> 
    <div>
      <div class='text-left w-fit  mx-auto'>
        <p class='h5 pb-2 pl-2'>EXAMPLE:</p>
        <p class='pl-4 blue'>&lt;header&gt;</p>
        <p class='pl-5'>MY COMPANY NAME</p>
        <p class='pl-4 blue'>&lt;/header&gt;</p>
      </div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 17,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>PRE-CHECK : &lt;header&gt;</p>
    </div> 
    <div>
      <div class='h4 pb-4'>Wrap <span class='inline-code'>&lt;h1&gt;</span> and <span class='inline-code'>&lt;p&gt;</span> in a <span class='inline-code'>&lt;header&gt;</span> tag.</div>
      <p class='pb-1 green text-left'>CODE PREVIEW:</p>
        <div class='html-code-box'>
        &lt;header&gt;<br>
        <span class='code-fade'>&nbsp;&nbsp;&lt;h1&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;My Name<br>
        &nbsp;&nbsp;&lt;/h1&gt;<br>
        &nbsp;&nbsp;&lt;h3&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Launching soon...<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;18th June, 2018<br>
        &nbsp;&nbsp;&lt;/p&gt;<br></span>
        &lt;/header&gt;<br>
        </div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 18,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 1,
    'reg' : [ '(<header>|<header [^>]*>)((.|\n)*)\s*(<h1>|<h1 [^>]*>)((.|\n)*)\s*<\/h1>((.|\n)*)\s*<\/header>' ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1 of 1</p>
      </div>
      <div>
        <div class='text-left pb-5'>
          <p class='blue text-uppercase text-left'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Insert a <span class='inline-code'>&lt;header&gt;<span></li>
          </ul>
        </div>

        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>
      <div class='slide-footer tips text-left'>
        <p class='pb-0'>Where:</p>
        <ol class=''>
          <li>Open it before &lt;h1&gt;</li>
          <li>Close it after the &lt;/p&gt; tags</li>
        </ol>
      </div>       
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {    
    'slide_number' : 19,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <p class='h3 green pb-4 bold'>AWESOME!</p>
      <p class='h4 pb-4'>That’s a great first step.</p>
      <img class='swiper-lazy' data-src='../img/emoji/72/clapping-hands-sign-type-4.png' alt=''> 
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 20,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <div class='h3 pb-4 w-75'>Let's give the <spna class='inline-code'>&lt;header&gt;</span> a <strong class='green'>LIT</strong> background.</div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 21,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>PRE-CHECK : linear-gradient</p>
    </div> 
    <div>
      <p class='h4 pb-5'>Like this:</p>
      <p class='pb-1 green text-left'>CODE PREVIEW:</p>
      <div class='html-code-box'>
      background: linear-gradient(100deg, yellow 40%, pink 40%);
      </div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 22,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <p class='h3 pb-4'>I know you are thinking...</p>
      <img class='swiper-lazy' data-src='../img/emoji/72/astonished-face.png' alt=''> 
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 23,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <p class='h3'>Just try it:</p>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 24,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 2,
    'reg' : [ '(<style>|<style [^>]*>)((.|\n)*)\s*header((.|\n)*)\s*{((.|\n)*)\s*}((.|\n)*)\s*<\/style>' ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1 of 3</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a header selector in <span class='inline-code'>&lt;style&gt;</span></li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box'>
          header { <br>
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
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 25,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 3,
    'reg' : [ '(<style>|<style [^>]*>)((.|\n)*)\s*header((.|\n)*)\s*{((.|\n)*)\s*background((.|\n)*)\s*:((.|\n)*)\s*linear-gradient((.|\n)*)\s*}((.|\n)*)\s*<\/style>' ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2 of 3</p>

      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add this first half of the rule:</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box fade-box-top fade-box-bottom'>
          <span class='code-fade'>header {</span> <br>
          &nbsp;&nbsp;background: linear-gradient<br>
          <span class='code-fade'>}</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>      
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 26,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 4,
    'reg' : [ '(<style>|<style [^>]*>)((.|\n)*)\s*header((.|\n)*)\s*{((.|\n)*)\s*background((.|\n)*)\s*:((.|\n)*)\s*linear-gradient((.|\n)*)\s*[(]100deg((.|\n)*)\s*,((.|\n)*)\s*yellow((.|\n)*)\s*40%((.|\n)*)\s*,((.|\n)*)\s*pink((.|\n)*)\s*40%((.|\n)*)\s*[)]((.|\n)*)\s*;((.|\n)*)\s*}((.|\n)*)\s*<\/style>' ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 3 of 3</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Complete the rule with this line:</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box fade-box-top fade-box-bottom'>
          <span class='code-fade'>header { <br>
          &nbsp;&nbsp;background: linear-gradient</span>(100deg, yellow 40%, pink 40%);<br>
          <span class='code-fade'>}</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>  
      <div class='slide-footer tips text-left'>
        <div><span class='red'>TIP:</span> There is no space between <strong class='inline-code'>gradient</strong> and <strong class='inline-code'>(110deg</strong> </div>
      </div>           
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 27,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'debugging',    
    'html_content' : `
    <div>
      <p class='slide-header h2'>Debugging</p>
    </div>    
    <div>
      <p class='h5 pb-4 text-left'>Is a yellow and pink background showing?</p>
      <p class='pb-4 text-left'>If not, then :</p>
      <ul class='tasks faX-ul list-img'>
        <li><img class='swiper-lazy' data-src='../img/emoji/72/white-right-pointing-backhand-index-type-4.png'>Is your header { } in the <span class='inline-code'>&lt;style&gt;</span> section?
        </li>
        <li><img class='swiper-lazy' data-src='../img/emoji/72/white-right-pointing-backhand-index-type-4.png'>Are <span class='inline-code'>&lt;header&gt;</span> opening and <span class='blue'>closing tags</span> correct?
        </li>
        <li><img class='swiper-lazy' data-src='../img/emoji/72/white-right-pointing-backhand-index-type-4.png'>
          <span class='blue'>EXACT code</span> for <nobr>linear-gradient</nobr>&nbsp;:<br>
          <ul class='ls-disc mt-2'>
            <li>Same spaces?</li>
            <li>Same comas?</li>
          </ul>
        </li>
      </ul>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 28,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
    </div>
    <div>
      <p class='h2 pb-4 aqua text-uppercase bold'>Be proud.</p>
      <p class='h4 w-50'>You now have an awesome background</p>
    </div>
    <div class='slide-footer tips'>
      <span class='red'>TIP:</span> If not, ask a friend to or keep learning. 
    </div>     
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 29,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <img class='swiper-lazy' data-src='../img/emoji/72/winking-face.png' alt=''> 
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 30,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <div class='h3 pb-4'>Let’s rock this next <span class='inline-code'>&lt;section&gt;</span></div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 31,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : &lt;section&gt;</p>
    </div> 
    <div>
      <p class='h2 pb-2'><span class="inline-code">&lt;section&gt;</span></p>
      <p class='h5 pb-4 w-75'>is for the <u>main content</u> of your site.</p>
      <p class='fs75 pt-4 text-left'>EXAMPLE:</p>
      <div class='html-code-box'>
        <span class='blue inline-code'>&lt;section&gt;</span><br>
        &nbsp;&nbsp;All my stuff...<br>
        <span class='blue'>&lt;/section&gt;</span>
      </div> 
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 32,   
    'action' : false,
    'challenge' : false,
     'html_content' : `
    <div>
      <p class='h2 pb-0 mb-1'>BTW...</p>
      <p class='fs75 pb-5'>(By the way)</p>
      <p class='h3 w-75'>Were you wondering what "Content" means?</p>
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 33,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'definition',     
     'html_content' : `
    <div>
      <p class='slide-header h2'>DEFINITION</p>
    </div>     
    <div>
      <p class='h4 pb-3'>CONTENT</p>
      <ol  class='h5 w-75'>
        <li>Is the <u>main message</u> of the webpage.</li>
        <li>Can be text, graphics or video.</li>
      </ol>
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 34,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>PRE-CHECK : &lt;section&gt;</p>
    </div> 
    <div>
      <p class='h5 pb-4 w-75'>Wrap the motivation content in the <span class='inline-code'>&lt;section&gt;</span> tag.
</p>
      <p class='fs75 pt-4 text-left green'>PRE-CHECK:</p>
      <div class='html-code-box '>
        &lt;section&gt;<br> 
        &nbsp;&nbsp;<span class='code-fade'>&lt;h3&gt;<br>      
        &nbsp;&nbsp;&nbsp;&nbsp;MOTIVATION:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;&lt;br&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Because...<br>  
        &nbsp;&nbsp;&lt;/h3&gt;</span><br>
        &lt;/section&gt;
      </div> 
    </div>     
    `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 35,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 5,
    'reg' : [ "(<section>|<section [^>]*>)((.|\n)*)\s*(<h3>|<h3 [^>]*>)((.|\n)*)\s*motivation((.|\n)*)\s*<\/h3>((.|\n)*)\s*<\/section>" ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1 of 2</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Place your "Motivation" &lt;h3&gt; within <span class='inline-code'>&lt;section&gt;</span> tags.</li>
          </ul>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>           
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 36,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 6,
    'reg' : [ "(<style>|<style [^>]*>)((.|\n)*)section((.|\n)*)\s*{((.|\n)*)\s*(background|background-color)((.|\n)*)\s*:((.|\n)*)\s*lightgrey;((.|\n)*)\s*<\/style>" ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2 of 2</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Style &lt;section&gt;</b> with a light grey background.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box fade-box-top fade-box-bottom'>
          &nbsp;&nbsp;<span class='code-fade'>}</span> <br>
          &nbsp;&nbsp;section{<br>
          &nbsp;&nbsp;&nbsp;&nbsp;background: lightgrey; <br>
          &nbsp;&nbsp;}<br>
          <span class='code-fade'>&lt;/style&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>  
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 37,   
    'action' : false,
    'challenge' : false,
    'html_content' : `
    <div>
      <div class='h1 pb-4 aqua'>NICE.</div>
      <div class='h3 w-75'>Add a footer to make your Landing Page look more complete.</div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 38,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'mission',
    'html_content' : `
    <div>
      <p class='slide-header h2'>Mission</p>
    </div>
    <div>
      <p class='h3 w-75 mx-auto'>Add and style a <span class='html-code'>&lt;footer&gt;</span></p>
      <p class='h1 dots'>...</p>
    </div>
    <div class='slide-footer'>
      <p class=''>Includes 4 challenges.</p>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {     
    'slide_number' : 39,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : &lt;footer&gt;</p>
    </div> 
    <div class=''>
      <p class='h2 pb-4'>&lt;footer&gt;</p>
      <ol class=''>
        <li>Important <span class='blue'>links</span> & resources are listed here.</li>
        <li><span class='blue'>Copyright</span> symbol is inserted here.</li>
      </ol>
      <p class='fs75 pt-4 text-left'>EXAMPLE:</p>
      <div class='html-code-box'>
        <span class='blue'>&lt;footer&gt;</span><br>
        &nbsp;&nbsp;&amp;copy; 2021 My Name<br>
        <span class='blue'>&lt;/footer&gt;</span>
      </div> 
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 40,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 7,
    'reg' : [ "(<footer>|<footer [^>]*>)((.|\n)*)\s*<\/footer>" ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 1 of 3</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Insert a <span class='inline-code'>&lt;footer&gt;</span> before the closing <span class='inline-code'>&lt;body&gt;</span> tag.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box fade-box-top fade-box-bottom'>
          &nbsp;&nbsp;<span class='code-fade'>&lt;/header&gt;</span> <br>
          &nbsp;&nbsp;&lt;footer&gt;<br>
          &nbsp;&nbsp;&lt;/footer&gt;<br>
          <span class='code-fade'>&lt;/body&gt;</span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>  
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {     
    'slide_number' : 41,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : Copyright</p>
    </div> 
    <div class=''>
      <p class='h2 pb-4'>Copyright</p>
      <ol class='h5 pb-4'>
        <li>Copyright says "You <span class='blue'>can't copy</span> my content without asking me."</li>
        <li>It is normally the <span class='blue'>last line</span> on the website.</li>
      </ol>
      <p class='h0 arial'>&copy;</p>
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {   
    'slide_number' : 42,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>BRIEFING : Copyright</p>
    </div> 
    <div class=''>
      <p class='h2 pb-4'>Copyright</p>
      <p class='h5 pb-1 text-left'>The line should include:</p>
      <ol class='h5 pb-5'>
        <li>Copyright symbol (<span class='blue'>&amp;copy;</span>)</li>
        <li>The <span class='blue'>Year</span></li>
        <li><span class='blue'>Your Name</span></li>
      </ol>
      <p class='h4 arial'>&amp;copy; <span class='green'>=</span> <span class='arial'>&copy;</span></p>
    </div>    
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {    
    'slide_number' : 43,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 8,
    'reg' : [ "(<footer>|<footer [^>]*>)((.|\n)*)\s*&copy;((.|\n)*)\s*([1-9][0-9][0-9][0-9])((.|\n)*)\s*([a-z][a-z][a-z])<\/footer>" ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 2 of 3</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Add a copyright line in the <span class='inline-code'>&lt;footer&gt;</span>.</li>
          </ul>
        </div>
        <p class='fs75 pb-0 text-left'>Like this:</p>
        <div class='html-code-box fade-box-top fade-box-bottom'>
          <span class='code-fade'>&lt;footer&gt;<br></span>          
          &nbsp;&nbsp;&amp;copy; 2021 My Name<br>
          <span class='code-fade'>&lt;/footer&gt;<br></span>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>  
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 44,   
    'action' : false,
    'challenge' : false,
    'js_function' : '',
    'css_class' : 'briefing',     
    'html_content' : `
    <div>
      <p class='slide-header h6'>PRE-CHECK : Footer Style</p>
    </div> 
    <div>
      <div class='h4 pb-4'>Style your <span class='inline-code'>&lt;footer&gt;</span>  with a black background and white text.</div>
      <p class='pb-1 green text-left'>CODE PREVIEW:</p>
        <div class='html-code-box fade-box-top fade-box-bottom'>
        &nbsp;&nbsp;<span class='code-fade'>}<br></span>
        &nbsp;&nbsp;footer {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;background: black;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;color: white;<br>
        &nbsp;&nbsp;}<br>
        <span class='code-fade'>&lt;style&gt;</span>
        </div>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {   
    'slide_number' : 45,     
    'action' : true,
    'challenge' : true,
    'checkpoint_id' : 9,
    'reg' : [ "(<style>|<style [^>]*>)((.|\n)*)footer((.|\n)*)\s*{((.|\n)*)\s*background((.|\n)*)\s*:((.|\n)*)\s*;((.|\n)*)\s*color((.|\n)*)\s*:((.|\n)*)\s*white;((.|\n)*)\s*}((.|\n)*)\s*<\/style>" ], 
    'css_class' : 'challenge cp_yellow', 
    'html_content' : `
      <div>
        <h2 class='mb-0'>Challenge</h2>
        <p class='fs75'>STEP 3 of 3</p>
      </div>
      <div>
        <div class='text-left pb-3'>
          <p class='blue text-uppercase'>Code:</p>
          <ul class='list-none'>
            <li class='tasks'>Using a <span class='inline-code'>footer { }</span>  selector in CSS, make your footer <strong>background black</strong> and the <strong>text white</strong>.</li>
          </ul>
        </div>
        <div class='button-locked'>
          <a class='btn-action swiper-editor'>Let's get Coding <i class='icon-arrow-forward'></i></a> <br>
          <a class='swiper-next skip' style=''>Skip this step</a> 
        </div>
        <div class='button-unlocked'><a class='btn-success swiper-next'>I did it <i class='icon-sentiment-satisfied'></i></a>
        </div>
      </div>  
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, { 
    'slide_number' : 46,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'checkpoint',    
    'html_content' : `
    <div>
      <p class='slide-header h2'>CHECKPOINT</p>
      <p class='fs75'>Your code should look something like this:</p>
    </div>
    <div>
      <p class='fs75 pb-0 text-left'>Like this:</p>
      <div class='html-code-box fade-box-top fade-box-bottom fs75'>
        <span class='code-fade'>&nbsp;&nbsp;}</span><br>
        &nbsp;&nbsp;header {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(110deg, yellow 40%, pink 40%);<br> 
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;section {<br> 
        &nbsp;&nbsp;&nbsp;&nbsp;background: lightgrey;<br> 
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;footer {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;background: black;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;color: white;<br>
        &nbsp;&nbsp;}<br>
        <span class='code-fade'>&lt;/style&gt;</span>
      </div> 
    </div>     
    `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 48,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <div class='h3 pb-4'>CONGRATS!</div>
      <div style='background-color: #6aa2c7;border-radius:50%;margin: 40px auto;width: 200px;height: 200px;'>
        <div class='lesson-instructions '><img style='padding-top:20px;' class='w-75 swiper-lazy mb-3' data-src='../img/lessons/congrats_training_sml.png'></div>
      </div>
      <div class='h3 pb-4'>You've finished<br> Training 3</div>  
    </div>    
    `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 49,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'quiz',    
    'html_content' : `
    <div>
      <p class='slide-header h2'>Quiz</p>
      <p class='fs75'>Question 1 of 2</p>
    </div>  
    <div>
      <p class='h4 pb-4'>What’s the rule for tags?</p>
      <ol class='ls-upper'>
        <li class='html-code-box quiz-question'>
            Open it? Close it.
        </li>
        <li class='html-code-box quiz-question'>
           Do or Die!
        </li>
        <li class='html-code-box quiz-question'>
            Catch whoever you can.
        </li>
        <li class='html-code-box quiz-question'>
            Only close the tag if you have to.
        </li>
      </ol>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 50,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'quiz',    
    'html_content' : `
    <div>
      <p class='slide-header h2'>Quiz</p>
      <p class='fs75'>Question 2 of 2</p>
    </div>  
    <div>
      <p class='h4 pb-4'>How do you write a rule in CSS?</p>
      <ol class='ls-upper'>
        <li class='html-code-box quiz-question'>
            h2 { background: lime; }
        </li>
        <li class='html-code-box quiz-question'>
           &lt;footer&gt; &copy 2021 My Name &lt;/footer&gt; 
        </li>
        <li class='html-code-box quiz-question'>
            section ( color; blue: )
        </li>
        <li class='html-code-box quiz-question'>
            &lt;style&gt; h1 { } &lt;/style&gt;
        </li>
      </ol>
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 51,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <div class='h0 aqua'>YIPPEEE.</div>
      <img class='pt-5 swiper-lazy' data-src='../img/emoji/72/smiling-face-with-open-mouth.png' alt=''> 
    </div>
      `,
    'created_at' : '',  
    'updated_at' : ''
  }, {
    'slide_number' : 52,   
    'action' : false,
    'challenge' : false,
    'css_class' : 'briefing',    
    'html_content' : `
    <div>
      <p class='h3 pb-4 w-75'>Ready for Training 4?</p>
      <a class="btn-primary next"" href="../learn/P1Training4">Start Now</a>
      <a class="btn-primary-alt next check" href='../learn/projects'>Projects Page</a>
    </div>
    `,
    'created_at' : '',  
    'updated_at' : ''
  } ]
}
    
var hintsForCheckPonts = {

}
  
var hints_data =   `


    ` 
 
/// Add custom JS for lesson below here


function previewLessonModal() {
  $.galleryDialog({
    modalName: 'preview-lesson-modal',
    htmlContent: `
    <iframe  srcdoc="
<head>
  <style>
    h1 {
      font-size: 75px;
    }
    i {
      font-size: 25px;
    }
  </style>
</head>
<body>
<header>
    <h1>My Name</h1>
      <h3>Motivation:
        <br><br>
        <i>I want to become a coder</i>
      </h3>
    <h3>Launching Soon...</h3>
    <p>01 January 2000</p>
</header>
</body>

  "></iframe>
    `
  })
}
