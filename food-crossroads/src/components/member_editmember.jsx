import React, { Component } from "react";
import "../css/member.css";
import "../css/style.css";
import Axios from "axios";

class EditMember extends Component {
  state = {
    Member: [
      {
        user_email: "email@gmail.com",
        user_pwd: "",
        user_name: "李曉明",
        user_tel: "0900123456",
      },
    ],
  };

  async componentDidMount() {
    var url = `http://localhost:8000/member/list/${this.props.match.params.id}`;
    var result = await Axios.get(url);
    this.state.Member = result.data;
    console.log(result.data);
    this.setState({});
  }

  TelChange = (e) => {
    this.state.Member.user_tel = e.target.value;
    this.setState({});
  };

  NameChange = (e) => {
    this.state.Member.user_name = e.target.value;
    this.setState({});
  };

  okbtnClick = async () => {
    console.log("ok");
    var result = await Axios.put(
      "http://localhost:8000/member/list/1",
      this.state.Member
    );
    //window.location = "/login";
  };

  render() {
    return (
      <React.Fragment>
        <div className="header_page">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="index.html">
                <img src={require("../img/logo.png")} alt="LOGO" />
              </a>
              <div className="nav_icon">
                <a className="nav_a" href="list.html">
                  <i className="fas fa-store"></i>餐廳列表
                </a>
                <a className="nav_a" href="shoppingchar.html">
                  <i className="fas fa-shopping-cart"></i>購物車
                </a>
                <a className="nav_a" href="member_login.html">
                  <i className="fas fa-user-circle"></i>會員登入
                </a>
              </div>
              <div className="rwd_icon">
                <a className="nav_a" href="list.html">
                  <i className="fas fa-store"></i>
                </a>
                <a className="nav_a" href="shoppingchar.html">
                  <i className="fas fa-shopping-cart"></i>
                </a>
                <a className="nav_a" href="member_login.html">
                  <i className="fas fa-user-circle"></i>
                </a>
              </div>
            </nav>
          </header>
        </div>

        <aside className="aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="member.html">會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="booking_manage.html">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="order_manage.html">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
        </aside>

        <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
        <div className="mobile_aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="member.html">會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="booking_manage.html">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="order_manage.html">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
          <label for="aside_menu_chk">
            <i className="fas fa-angle-right"></i>
          </label>
        </div>

        <section id="edit_member">
          <div className="container member_div">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div>
                    <p className="title_member_edit">會員資料修改</p>
                  </div>
                  <div className="form-group form-inline">
                    <label for="name" className="edit_label">
                      姓　　名:
                    </label>
                    <input
                      type="text"
                      className="form-control edit_text"
                      id="name"
                      value={this.state.Member.user_name}
                      name="name"
                      onChange={this.NameChange}
                      required
                    />
                  </div>
                  <div className="form-group form-inline">
                    <label for="email" className="edit_label">
                      信　　箱:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={this.state.Member.user_email}
                      name="email"
                      disabled
                    />
                  </div>
                  <div className="form-group form-inline">
                    <label for="pwd" className="edit_label">
                      密　　碼:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      value={this.state.Member.user_pwd}
                      name="pwd"
                      required
                    />
                    <div className="invalid-feedback">請輸入密碼</div>
                  </div>
                  <div className="form-group form-inline">
                    <label for="tel" className="edit_label">
                      電　　話:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tel"
                      value={this.state.Member.user_tel}
                      name="tel"
                      onChange={this.TelChange}
                      required
                    />
                  </div>
                  <div className="edit_btn_div">
                    <button
                      type="button"
                      onclick="confirm()"
                      className="member_back_btn"
                    >
                      返回
                    </button>
                    <button
                      type="button"
                      onClick={this.okbtnClick}
                      className="member_confirm_btn"
                    >
                      確定修改
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="footer_page">
          <footer>
            <div className="footer_link">
              <a href="#">關於我們</a>
              <a href="#">商家入口</a>
              <a href="#">常見問題</a>
              <a href="#">聯絡我們</a>
            </div>
            <div className="footer_text">
              <p>Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default EditMember;
