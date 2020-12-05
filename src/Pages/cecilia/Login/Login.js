import React from "react";
import './Login.scss';

class LoginCecilia extends React.Component {
  constructor() {  //state 초기화 
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPw: true
    };
  }

  //로그인 함수 
  // //id
  // handleIdChange = (e) => {
  //   this.setState({
  //     id: e.target.value // 이벤트가 일어나는곳(e)에서 value값을 가져와 state를 변경 시킨다. 
  //   })
  // }

  // //pw
  // handlePwChange = (e) => {
  //   this.setState({
  //     pw: e.target.value
  //   })
  // }

  // id & pw 함수 합치기 
  handleIdPwChange = (e) => {
    //비구조화 (구조분해할당)
    const { id, value } = e.target;  // const {다른부분1,다른부분2} = 겹치는부분;
    this.setState({
      [id]: value //state초기화 할때도 id라는 키를 사용했기때문에, 이건 비구조화의 id라는 것을 알려주기위해 대괄호 사용 [id]
    });
  }

  //pw보여지는 함수 
  showPw = () => {
    this.setState({
      hiddenPw: !this.state.hiddenPw // !는 반대를 의미한다. 
    });
  };

  // 아이디 비번 유효성 검사 함수
  checkValidation = (e) => {
    e.preventDefault();  //로그인 클릭하고 잘못적었어도 내가 적은 값들이 사라지지 않게 해줌. 
    const { id, pw } = this.state;
    const checkId = id.includes('@');
    const checkPw = pw.length >= 4;
    if (checkId && checkPw === true) {
      alert("미현이 최고! 로그인 성공!")
      this.props.history.push('/main-cecilia')
    }
    if (!checkId) {
      alert("@없으면 로그인못해요!");
    }
    if (!checkPw) {
      alert("해킹당하지않으려면 4자리 이상으로 설정하시죠!")
    }
    // 1. event default
    // 2. 구조분해 할당
    // 3. 불리언으로 변수 설정 (id @포함, pw 4자리 이상)
    // 4. 조건 맞으면 alert성공, main으로 이동
    // 5. 조건 (!사용) 하나만 맞는 경우 alert
  };

  // 로그인 버튼누르면 메인으로 이동 
  // goToMain = () => {
  //   this.props.history.push('/main-cecilia');
  //   // if (response.message === "valid user") {
  //   //   this.props.history.push('/Main');
  //   // } else {
  //   //   alert("등록되지않은 회원입니다. 회원가입을 해주세요."")
  //   // }
  // }
  render() {
    //console로 setState가 잘되는지 확인 
    // console.log(this.state.id, this.state.pw);

    // 비구조화 ! render안에 적어준 애들은 return 아래 애들에게 적용된다. 전역변수로 사용하고 싶다면 컴포넌트 밖에 쓰면됨!
    const { id, pw, hiddenPw } = this.state;
    const activeBtn = (id.length && pw.length) > 0;

    return (
      <div className="Login">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <header>Instargram</header>
        <div className="loginIdContainer">
          <input
            id="id"  //여기서 "id"는 state 초기화 부분의 id와 같은거임 !
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={id} // 비구조화 데려온거임 원래는 this.state.id
            onChange={this.handleIdPwChange}  // handleIdChange()라고 적으면 render읽다가 바로 실행해버림. 
          // onChange={()=>this.handleIdChange()} Arrow function은 콜백함수기 때문에 함수호출()까지 적어줘야함
          />
        </div>
        <div className="loginPwContainer">
          <input
            id="pw"
            type={hiddenPw ? "password" : "text"}  // 삼항연산자 조건  {조건 ? true결과 : false결과}
            placeholder="비밀번호"
            onChange={this.handleIdPwChange}
            value={pw} // 비구조화 데려온거임 원래는 this.state.pw
          />
          <span className="showPw"
            onClick={this.showPw}>{hiddenPw ? "show" : "hide"}
          </span>
        </div>
        <button
          className={activeBtn ? "active" : ""}
          onClick={this.goToMain}
          onClick={this.checkValidation}
        >로그인</button>

        <a href="https://www.instagram.com/accounts/password/reset/">아직 회원이 아니신가요?</a>
      </div >

    );
  }
}

export default LoginCecilia;
