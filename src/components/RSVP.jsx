const RSVP = () => {
  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 20px; font-family: inherit; }
          #rsvp-widget { width: 100%; }
        </style>
      </head>
      <body>
        <div id="rsvp-widget"></div>
        
        <script>
          (function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'oursvp', 'https://www.oursvp.app/widget/widget.js'));
          
          oursvp('init', {
            element: document.getElementById('rsvp-widget'),
            eventId: 'uJvN3nprX6vhs4AWi3Ew',
            showBackBtn: false,
            language: 'english'
          });
        </script>
      </body>
    </html>
  `;

  return (
    <>
      <div className="RSVP-container">
        <div className="Title">R.S.V.P</div>
        <div className="RSVP-details">
          <div className="RSVP-info">
            <div className="RSVP-text">
              <h3>Please RSVP by April 22, 2026</h3>
              <iframe
                srcDoc={iframeContent}
                style={{
                  width: '100%',
                  minHeight: '1000px',
                  border: 'none',
                  overflow: 'hidden'
                }}
                title="RSVP Widget"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RSVP;