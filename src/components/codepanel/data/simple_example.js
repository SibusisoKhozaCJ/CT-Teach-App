export const lesson_data = {
  title: "Example Trainning",
  description: "Short description for trainning",
  default_code: "<h1>hello world</h1>",
  sort_order: 0,
  trainningId: "T0",
  projectId: "P0",
  courseId: "C0",
  slides: [
    {
      action: false,
      title: "Welcome",
      type: "briefing",
      challenge: false,
      sort_order: 0,
      html_content: `
      <p class="slide__text">
        You can put all slides content directly inslide
        <span class="slide__inline-code">html_content</span>
        <span class="slide__text-color--red">field</span>
      </p>
      <p> class="slide__text">
        It will render on one level with title and challenge buttons inside
        flex container with column direction
      </p>
      `,
    },
    {
      action: true,
      title: "Challenge",
      type: "challenge",
      challenge: true,
      challenge_id: 0,
      sort_order: 1,
      html_content: `
      <div class="slide__container">
        <h3 class="slide__subtile">
          Instructions
        </h3>
        It's challenge expample
        <ol class="slide__challenge-list">
          <li class="slide__challenge-item">
            Add <span class="slide__inline-code">&lt;h1&gt;</span> tag
          </li>
          <li class="slide__challenge-item">
            Add <span class="slide__inline-code">&lt;a&gt;</span> tag
          </li>
          <li class="slide__challenge-item">
            Add <span class="slide__inline-code">&lt;p&gt;</span> tag
          </li>
        </ol>
      `,
      reg: [
        {
          description: "Type <h1> in code editor",
          rule: "<h1(.*)>",
          type: "regexp",
          tip: "You can use quick keyboard on mobile for < and >"
        },
        {
          description: "Type <a> in code editor",
          rule: "<a(.*)>",
          type: "regexp",
          tip: "Type <a> below <h1>"
        },
        {
          description: "Type <p> in code editor",
          rule: "<p(.*)>",
          type: "regexp",
          tip: "Type <p> below <a>"
        }
      ]
    },
    {
      action: false,
      title: "Misson",
      type: "mission",
      challenge: false,
      sort_order: 2,
      html_content: `
        <p class="slide__text">
          Use <span class="slide__inline-code">&lt;button&gt;</span> tag
          instead of <span class="slide__inline-code">&lt;a&gt;</span> for
          buttons and links
        </p>
        <button class="slide__btn" data-click="e:https://en.wikipedia.org/wiki/HTML">
          HTML on Wiki
        </button>
      `,
    },
    {
      action: false,
      title: "Buttons and modals ",
      type: "mission",
      challenge: false,
      sort_order: 3,
      html_content: `
        <p class="slide__text">
          This button will open projects modal
        </p>
        <button class="slide__btn" data-click="m:projects">
          Projects
        </button>
      `,
    },
    {
      action: false,
      title: "Images and emoji",
      type: "briefing",
      challenge: false,
      sort_order: 4,
      html_content: `
        <p class="slide__text">
          You can use emoji
        </p>
        <div class="slide__center">
          <img class="slide__emoji" src="/img/emoji/72/grinning-face-with-star-eyes.png" alt="">
        </div>
        <p class="slide__text">
          And images
        </p>
        <img class="slide__img" src="/img/congrats.png" alt="">
      `,
    },
    {
      action: false,
      title: "Code",
      type: "briefing",
      challenge: false,
      sort_order: 5,
      html_content: `
        <p class="slide__text">
          You can use code in slides
        </p>
        <pre class="slide__code">
for(let i = 1; i < 5; i++) {
  <span class="slide__code-color--white">console</span>.log(i);
}
        </pre>
      `,
    },
    {
      action: false,
      type: "briefing",
      challenge: false,
      sort_order: 4,
      html_content: `
        <p class="slide__text">
          Slide without title
        </p>
        <p class="slide__text">
          Just text slide
        </p>
      `,
    },
  ]
};

export default lesson_data;
