var React = require("react");

class Layout extends React.Component {
  render() {
    console.log(this.props.cookieUserId);
    let cookieLogin = this.props.cookieLogin ? "Logout" : "Login";
    let url = this.props.cookieLogin ? "/logout" : "/";

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/custom.css" />
          <script
            src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
            type="text/javascript"
            charset="utf-8"
          ></script>
          <script
            src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
            type="text/javascript"
            charset="utf-8"
          ></script>
        </head>
        <body>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
              Appointment Tracker
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href={url} tabIndex="-1">
                    {cookieLogin}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {this.props.children}
          <div
            style={{ width: "640px", height: "480px" }}
            id="mapContainer"
          ></div>
          <script src="/maps.js" type="text/javascript"></script>

        </body>
      </html>
    );
  }
}

module.exports = Layout;
