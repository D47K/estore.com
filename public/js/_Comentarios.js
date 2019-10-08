var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllComments = function (_React$Component) {
  _inherits(AllComments, _React$Component);

  function AllComments(props) {
    _classCallCheck(this, AllComments);

    var _this = _possibleConstructorReturn(this, (AllComments.__proto__ || Object.getPrototypeOf(AllComments)).call(this, props));

    var userComments = [{
      userName: "Andres Hilario Vidal",
      userFoto: "media/img/users/dark97.jpg",
      userComment: "HolaaaaaaaX2"
    }, {
      userName: "Andres Hilario Vidal",
      userFoto: "media/img/users/dark97.jpg",
      userComment: "Holaaaaaaax3"
    }];
    var ThreadsComments = [{
      userName: "Andres Hilario Vidal",
      userFoto: "media/img/users/dark97.jpg",
      userComment: "Holaaaaaaasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddddddd",
      userTC: userComments,
      idComponent: 1
    }, {
      userName: "Andres Hilario Vidal",
      userFoto: "media/img/users/dark97.jpg",
      userComment: "Holaaaaaaa",
      userTC: userComments,
      idComponent: 2
    }];
    _this.state = {
      userThr: ThreadsComments
    };
    return _this;
  }

  _createClass(AllComments, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "col-12 pl-lg-4" },
        this.state.userThr.map(function (comment) {
          return React.createElement(UserThread, {
            userFoto: comment.userFoto,
            userName: comment.userName,
            userComment: comment.userComment,
            userComments: comment.userTC,
            idC: comment.idComponent
          });
        })
      );
    }
  }]);

  return AllComments;
}(React.Component);

/*Componente usuario superior */


var UserThread = function (_React$Component2) {
  _inherits(UserThread, _React$Component2);

  function UserThread(props) {
    _classCallCheck(this, UserThread);

    var _this2 = _possibleConstructorReturn(this, (UserThread.__proto__ || Object.getPrototypeOf(UserThread)).call(this, props));

    console.log(props.userFoto);

    _this2.state = {
      responding: false,
      userFoto: props.userFoto,
      userName: props.userName,
      userComment: props.userComment,
      userComments: props.userComments,
      idComp: props.idC
    };
    _this2.handleRespond = _this2.handleRespond.bind(_this2);
    _this2.handleCancelRespond = _this2.handleCancelRespond.bind(_this2);
    return _this2;
  }

  _createClass(UserThread, [{
    key: "handleRespond",
    value: function handleRespond() {
      this.setState({
        responding: true
      });
      var id = "#iptRes" + this.state.idComp;
      console.log(id);
      sleep(30).then(function () {
        $(id).focus();
      });
    }
  }, {
    key: "handleCancelRespond",
    value: function handleCancelRespond() {
      this.setState({
        responding: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row container-fluid thread-user mb-3" },
        React.createElement(
          "div",
          { className: "col-12" },
          React.createElement(
            "div",
            { className: "row user-comment d-flex align-items-center" },
            React.createElement(
              "div",
              { className: "col-12 " },
              React.createElement("img", {
                className: "photoP border rounded-circle m-0",
                src: this.state.userFoto,
                alt: "Foto"
              })
            ),
            React.createElement(
              "div",
              { className: "col-12 " },
              React.createElement(
                "h6",
                null,
                React.createElement(
                  "strong",
                  null,
                  this.state.userName
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-12 col-lg-7  pl-lg-4" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-12 " },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "p",
                  { className: "mb-0  col-12 textito" },
                  this.state.userComment
                )
              ),
              React.createElement(
                "div",
                { className: "row lk-answer pl-lg-3 mt-1 pt-0 mb-3" },
                React.createElement(
                  "div",
                  { className: "col-4" },
                  React.createElement(
                    "a",
                    { href: "#", onClick: this.handleRespond },
                    "Responder"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col-12 pl-1 pl-lg-4 pr-0 user-thread-comments" },
              React.createElement(
                "div",
                { className: "col-12 pr-0 mr-0 " },
                React.createElement(
                  "div",
                  { className: "row user-comment" },
                  React.createElement(
                    "div",
                    { className: "col-12 " },
                    this.state.userComments.map(function (comment) {
                      return React.createElement(UserComments, {
                        userFoto: comment.userFoto,
                        userName: comment.userName,
                        userComment: comment.userComment
                      });
                    })
                  )
                ),
                this.state.responding ? React.createElement(
                  "div",
                  { className: "row ipt-respond " },
                  React.createElement(
                    "div",
                    { className: "col-12" },
                    React.createElement(
                      "div",
                      { className: "row" },
                      React.createElement(
                        "div",
                        { className: "col-12 col-lg-6 pr-0" },
                        React.createElement("textarea", {
                          type: "text",
                          id: "iptRes" + this.state.idComp,
                          className: "form-control md-textarea mr-0 pl-0",
                          rows: "3"
                        })
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 btns" },
                    React.createElement(
                      "div",
                      { className: "row" },
                      React.createElement(
                        "div",
                        { className: "col-12 col-lg-2 mt-1" },
                        React.createElement(
                          "button",
                          { "class": "btn btn-info" },
                          "Aceptar"
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "col-12 col-lg-2 mt-1" },
                        React.createElement(
                          "button",
                          {
                            className: "btn  btn-danger",
                            onClick: this.handleCancelRespond
                          },
                          "Cancelar"
                        )
                      )
                    )
                  )
                ) : ""
              )
            )
          )
        )
      );
    }
  }]);

  return UserThread;
}(React.Component);
/*Fin componente usuario superior */

/*Componente comentarios*/


var UserComments = function (_React$Component3) {
  _inherits(UserComments, _React$Component3);

  function UserComments(props) {
    _classCallCheck(this, UserComments);

    return _possibleConstructorReturn(this, (UserComments.__proto__ || Object.getPrototypeOf(UserComments)).call(this, props));
  }

  _createClass(UserComments, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "col-12 " },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-12 " },
            React.createElement("img", {
              className: "photoP border rounded-circle m-0",
              src: this.props.userFoto,
              alt: "Foto"
            })
          ),
          React.createElement(
            "div",
            { className: "col-12 d-flex align-items-center" },
            React.createElement(
              "h6",
              null,
              this.props.userName
            )
          ),
          React.createElement(
            "div",
            { className: "col-12 pl-4 pr-0" },
            React.createElement(
              "p",
              { className: "mb-0  col-12 textito" },
              this.props.userComment
            )
          )
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Seted");
    }
  }]);

  return UserComments;
}(React.Component);