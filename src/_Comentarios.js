class AllComments extends React.Component {
  constructor(props) {
    super(props);
    const userComments = [
      {
        userName: "Andres Hilario Vidal",
        userFoto: "media/img/users/dark97.jpg",
        userComment: "HolaaaaaaaX2"
      },
      {
        userName: "Andres Hilario Vidal",
        userFoto: "media/img/users/dark97.jpg",
        userComment: "Holaaaaaaax3"
      }
    ];
    const ThreadsComments = [
      {
        userName: "Andres Hilario Vidal",
        userFoto: "media/img/users/dark97.jpg",
        userComment:
          "Holaaaaaaasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddddddd",
        userTC: userComments,
        idComponent: 1
      },
      {
        userName: "Andres Hilario Vidal",
        userFoto: "media/img/users/dark97.jpg",
        userComment: "Holaaaaaaa",
        userTC: userComments,
        idComponent: 2
      }
    ];
    this.state = {
      userThr: ThreadsComments
    };
  }

  render() {
    return (
      <div className="col-12 pl-lg-4">
        {this.state.userThr.map(comment => (
          <UserThread
            userFoto={comment.userFoto}
            userName={comment.userName}
            userComment={comment.userComment}
            userComments={comment.userTC}
            idC={comment.idComponent}
          />
        ))}
      </div>
    );
  }
}

/*Componente usuario superior */
class UserThread extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.userFoto);

    this.state = {
      responding: false,
      userFoto: props.userFoto,
      userName: props.userName,
      userComment: props.userComment,
      userComments: props.userComments,
      idComp: props.idC
    };
    this.handleRespond = this.handleRespond.bind(this);
    this.handleCancelRespond = this.handleCancelRespond.bind(this);
  }

  handleRespond() {
    this.setState({
      responding: true
    });
    const id = "#iptRes" + this.state.idComp;
    console.log(id);
    sleep(30).then(() => {
      $(id).focus();
    });
  }
  handleCancelRespond() {
    this.setState({
      responding: false
    });
  }
  render() {
    return (
      <div className="row container-fluid thread-user mb-3">
        <div className="col-12">
          <div className="row user-comment d-flex align-items-center">
            <div className="col-12 ">
              <img
                className="photoP border rounded-circle m-0"
                src={this.state.userFoto}
                alt="Foto"
              />
            </div>
            <div className="col-12 ">
              <h6>
                <strong>{this.state.userName}</strong>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7  pl-lg-4">
          <div className="row">
            <div className="col-12 ">
              <div className="row">
                <p className="mb-0  col-12 textito">{this.state.userComment}</p>
              </div>

              <div className="row lk-answer pl-lg-3 mt-1 pt-0 mb-3">
                <div className="col-4">
                  <a href="#" onClick={this.handleRespond}>
                    Responder
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 pl-1 pl-lg-4 pr-0 user-thread-comments">
              <div className="col-12 pr-0 mr-0 ">
                <div className="row user-comment">
                  <div className="col-12 ">
                    {this.state.userComments.map(comment => (
                      <UserComments
                        userFoto={comment.userFoto}
                        userName={comment.userName}
                        userComment={comment.userComment}
                      />
                    ))}
                  </div>
                </div>
                {this.state.responding ? (
                  <div className="row ipt-respond ">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 col-lg-6 pr-0">
                          <textarea
                            type="text"
                            id={"iptRes" + this.state.idComp}
                            className="form-control md-textarea mr-0 pl-0"
                            rows="3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 btns">
                      <div className="row">
                        <div className="col-12 col-lg-2 mt-1">
                          <button class="btn btn-info">Aceptar</button>
                        </div>
                        <div className="col-12 col-lg-2 mt-1">
                          <button
                            className="btn  btn-danger"
                            onClick={this.handleCancelRespond}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*Fin componente usuario superior */

/*Componente comentarios*/
class UserComments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-12 ">
        <div className="row">
          <div className="col-12 ">
            <img
              className="photoP border rounded-circle m-0"
              src={this.props.userFoto}
              alt="Foto"
            />
          </div>
          <div className="col-12 d-flex align-items-center">
            <h6>{this.props.userName}</h6>
          </div>
          <div className="col-12 pl-4 pr-0">
            <p className="mb-0  col-12 textito">{this.props.userComment}</p>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("Seted");
  }
}
