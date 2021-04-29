export function wrapperEmojiInHtmlString(emoji) {
    return `
      <html lang="en">
          <head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <title>Profile emoji</title>
              <style type="text/css">
                  body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  .fa {
                    font-size: 120px;
                    line-height: 148px;
                  }
                  @media (max-width: 91px) {
                      .fa {
                          font-size: 60px;
                          line-height: 70px;
                      }
                  }
              </style>
          </head>
          <body>
              <i class="fa">${emoji}</i>
          </body>
      </html>
    `
}

export function writeContentToIframe(iframe, content) {
    iframe.open();
    iframe.write(content);
    iframe.close();
}