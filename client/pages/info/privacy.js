import styled from "styled-components";
import Footer from "../../components/home/footer";

const PrivacyContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #ffffff;
`;

const PrivacyWrapper = styled.div`
  width: 100%;
`;

const PrivacyTop = styled.div`
  width: 100%;
  min-height: 35vh;
  background-image: linear-gradient(
      90deg,
      rgba(54, 53, 57, 1) 0%,
      rgba(20, 5, 12, 0.8071603641456583) 86%
    ),
    url("../introbackground.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    color: white;
  }

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 5rem;
  }

  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.5rem;
    font-weight: lighter;
    color: white;
    text-align: center;
  }
`;

const PrivacyInfoWrapper = styled.div`
  width: 45%;
  margin: auto;
  min-height: 60vh;
  margin-bottom: 7rem;
`;

const PrivacyInfoTop = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  @media all and (max-width: 600px) {
    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const PrivacyInfoMiddle = styled.div`
  font-family: "Noto Sans KR", sans-serif;

  width: 100%;
  border: 1px solid #dddddd;
  margin: 2rem auto;
  padding: 1rem;

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrivacyDetail = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  h5 {
    font-size: 1.5em;
  }

  p {
    font-size: 1rem;
  }

  @media all and (max-width: 600px) {
    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyWrapper>
        <PrivacyTop>
          <h4>PRIVACY</h4>
          <h2>개인정보취급방침</h2>
          <h3>
            마리아유외과를 방문해주신 모든 분들께 <br /> 감사의 마음을 전합니다
          </h3>
        </PrivacyTop>
      </PrivacyWrapper>
      <PrivacyInfoWrapper>
        <PrivacyInfoTop>
          <h4>마리아유외과 개인정보취급방침</h4>
          <p>
            마리아유외과(이하 병원)는 귀하의 개인정보 보호를 매우 중요시하며,
            『정보통신망 이용촉진등에 관한법률』상의 개인정보보호 규정 및
            정보통신부가 제정한 『개인정보 보호지침』을 준수하고 있습니다.
            <br />
            "병원"은 개인정보보호방침을 통하여 귀하께서 제공하시는 개인정보가
            어떠한 용도와 방식으로 이용되고 있으며 개인정보호를 위해 어떠한
            조치가 취해지고 있는지 알려드리니다. 본 보호정책은 수시로 내용이
            변경될 수 있으므로 정기적으로 방문하셔서 확인하시기 바랍니다. 본
            개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.
          </p>
        </PrivacyInfoTop>
        <PrivacyInfoMiddle>
          <ol>
            <li>1. "병원"의 개인정보의 수집목적 및 이용목적</li>
            <li>2. 수집하는 개인정보 항목 및 수집방법</li>
            <li>3. 쿠키에 의한 개인정보 수집</li>
            <li>4. 목적외 사용 및 제3자에 대한 제공</li>
            <li>5. 개인정보의 열람 및 정정</li>
            <li>6. 개인정보의 수집, 이용 및 제공에 대한 동의 철회</li>
            <li>7. 개인정보의 보유기간 및 이용기간</li>
            <li>8. 개인정보의 파기절차 및 방법</li>
            <li>9. 개인정보보호를 위한 기술적 대책</li>
            <li>10. 개인정보의 위탁처리</li>
            <li>11. 의견수렴 및 불만처리</li>
            <li>12. 개인정보 관리책임자</li>
          </ol>
        </PrivacyInfoMiddle>
        <PrivacyDetail>
          <h5>1. 개인정보의 수집목적 및 이용목적</h5>
          <p>
            "병원"가 회원님 개인의 정보를 수집하는 목적은 "병원" 사이트를 통하여
            회원님께 최적의 맞춤화된 서비스를 제공해드리기 위한 것입니다.
            "병원"은 각종의 컨텐츠 및 정보를 무료로 서비스해 드리고 있습니다. 이
            때 회원님께서 제공해주신 개인정보를 바탕으로 회원님께 보다 더 유용한
            정보를 선택적으로 제공하는 것이 가능하게 됩니다. <br /> (1) "병원"은
            다음과 같은 목적을 위하여 개인정보를 수집하고 있습니다. <br /> 1)
            서비스제공을 위한 계약의 성립(본인식별 및 본인의사 확인등) <br /> 2)
            기타 새로운 서비스, 신상품이나 이벤트 정보 안내 <br /> (2) 단,
            이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및
            민족, 사상 및 신조, 본적지, 정치적 성향 및 범죄기록, 건강상태 및
            성생활등)는 수집하지 않습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>2. 수집하는 개인정보 항목 및 수집방법</h5>
          <p>
            "병원"은 최초 회원가입을 하실 때 서비스 제공을 위해 가장 필수적인
            개인정보를 받고 있습니다. <br />
            <br />
            (1)수집하는 개인정보 항목 <br /> 회사는 회원가입, 상담, 서비스 신청
            등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br /> 수집항목
            : 이름, 아이디, 비밀번호, 생년월일, 성별, 이메일, 자택전화번호,
            휴대폰번호, 자택주소 <br /> 개인정보 수집방법 : 홈페이지(회원가입)
            <br />
            설문조사나 이벤트 시에 집단적인 통계분석을 위해서나 경품발송을 위한
            목적으로도 개인정보 기재를 요청할 수 있습니다. 이 때에도 기입하신
            해당서비스 제공이나 회원님께 사전에 밝힌 목적 이외의 다른 어떠한
            목적으로도 사용되지 않음을 알려드립니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>3. 쿠키(cookie)에 의한 개인정보 수집</h5>
          <p>
            "병원"은 귀하에 대한 정보를 저장하고 수시로 찾아내는
            '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트가 귀하의 컴퓨터
            브라우저(넷스케이프, 인터넷 익스플로러 등)로 전송하는 소량의
            정보입니다. 귀하께서 웹사이트에 접속을 하면 "병원"의 컴퓨터는 귀하의
            브라우저에 있는 쿠키의 내용을 읽고, 귀하의 추가정보를 귀하의
            컴퓨터에서 찾아 접속에 따른 성명 등의 추가 입력 없이 서비스를 제공할
            수 있습니다. 쿠키는 귀하의 컴퓨터는 식별하지만 귀하를 개인적으로
            식별하지는 않습니다. 또한 귀하는 쿠키에 대한 선택권이 있습니다.
            웹브라우저의 옵션을 조정함으로써 모든 쿠키를 다 받아들이거나, 쿠키가
            설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를 거부할 수 있는
            선택권을 가질 수 있습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>4. 목적외 사용 및 제3자에 대한 제공</h5>
          <p>
            "병원"은 귀하의 개인정보를 개인정보의 수집목적 및 이용목적 에서
            고지한 범위내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는
            타기업, 기관에 제공하지 않습니다. 그러나 보다 나은 서비스 제공을
            위하여 귀하의 개인정보를 제휴사에게 제공하거나 공유할 수 있습니다.
            개인정보를 제공하거나 공유할 경우에는 사전에 귀하께 제휴사가
            누구인지, 제공 또는 공유되는 개인정보항목이 무엇인지, 왜 그러한
            개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게
            보호,관리되는지에 대해 개별적으로 전자우편 및 서면을 고지하여 동의를
            구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는
            제휴사에게 제공하거나 제휴사와 공유하지 않습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>5. 개인정보의 열람 및 정정</h5>
          <p>
            (1) 귀하는 언제든지 등록되어 있는 귀하의 개인정보를 열람하거나
            정정하실 수 있습니다. 개인정보 열람 및 정정을 하고자 할 경우에는
            개인정보수정을 클릭하여 직접 열람 또는 정정하거나 ,
            개인정보관리책임자에게 E-mail로 연락주시면 조치하겠습니다. <br />
            (2) 귀하가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을
            완료하기 전까지 당해 개인정보를 이용하지 않습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>6. 개인정보의 수집, 이용 및 제공에 대한 동의철회</h5>
          <p>
            (1) 회원가입 등을 통해 개인정보의 수집, 이용, 제공에 대해 귀하께서
            동의하신 내용을 귀하는 언제든지 철회할 수 있습니다. 동의철회는
            개인정보관리책임자에게 E-mail 등으로 연락하시면 즉시 개인정보의 삭제
            등 필요한 조치를 하겠습니다. <br /> (2) "병원"은 개인정보의 수집에
            대한 동의철회(회원탈퇴)를 개인정보 수집시 동등한 방법 및 절차로
            행사할 수 있도록 필요한 조치를 하겠습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>7. 개인정보보호기간 및 이용기간</h5>
          <p>
            (1) 귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은
            목적이 달성되면 파기됩니다. <br /> 1) 회원가입정보의 경우,
            회원가입을 탈퇴하거나 회원에서 제명된 때 <br /> 2) 대금지급정보의
            경우, 대금의 완료일 또는 채권소멸시효기간의 만료된 때 <br /> 3)
            배송정보의 경우, 물품 또는 서비스가 인도되거나 제공된 때 <br /> (2)
            위 보유기간에도 불구하고 계속 보유하여야 할 필요가 있을 경우에도
            귀하의 동의를 받겠습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>8. 개인정보의 파기절차 및 방법</h5>
          <p>
            병원는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
            파기절차 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된
            후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타
            관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정
            기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에
            의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지
            않습니다. 파기방법 전자적 파일형태로 저장된 개인정보는 기록을 재생할
            수 없는 기술적 방법을 사용하여 삭제합니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>9. 개인정보보호를 위한 기술적 대책</h5>
          <p>
            "병원"은 귀하의 개인정보를 취급함에 개인정보가 분실, 도난, 누출,
            변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적
            대책을 강구하고 있습니다. <br /> (1) 귀하의 개인정보는 비밀번호에
            의해 보호되며, 파일 및 전송 데이터를 암호화하거나 파일
            잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해
            보호되고 있습니다.
            <br /> (2) "병원"은 백신프로그램을 이용하여 컴퓨터바이러스에 의한
            피해를 방지하기 위한 조치를 취하고 있습니다. 백신프로그램은
            주기적으로 업데이트되며 갑작스런 바이러스가 출현할 경우 백신이
            나오는 즉시 이를 제공함으로써 개인정보가 침해되는 것을 방지하고
            있습니다.
            <br /> (3) "병원"은 암호알고리즘을 이용하여 네트워크 상의 개인정보를
            안전하게 전송할 수 있는 방법을 채택하고 있습니다. <br /> (4) 해킹
            등에 의해 귀하의 개인정보가 유출되는 것을 방지하기 위해,
            외부로부터의 침입을 차단하는 장치를 이용하고 있습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>10. 개인정보의 위탁처리</h5>
          <p>
            "병원"은 서비스 향상을 위해서 귀하의 개인정보를 외부에 위탁하여
            처리할 수 있습니다. <br /> (1) 개인정보의 처리를 위탁하는 경우에는
            미리 그 사실을 귀하에게 고지하겠습니다. <br />
            (2) 개인정보의 처리를 위탁하는 경우에는 위탁계약 등을 통하여
            서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지,
            제3자 제공의 금지 및 사고시의 책임부담 등을 명확히 규정하고 당해
            계약내용을 서면 또는 전자적으로 보관하겠습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>11. 의견수렴 및 불만처리</h5>
          <p>
            "병원"은 개인정보보호와 관련하여 귀하가 의견과 불만을 제기할 수 있는
            창구를 개설(Q&A 및 게시판, 웹메일)하고 있습니다. 개인정보와 관련한
            불만이 있으신 분은 "병원"의 개인정보 관리책임자에게 의견을 주시면
            접수 즉시 조치하여 처리결과를 통보해 드립니다. 또는 정부에서
            설치하여 운영중인
            개인정보침해신고센터(http://www.cyberprivacy.or.kr, 전화 02-1336,
            PC통신 go epivacy)에 불만처리를 신청할 수 있습니다.
          </p>
        </PrivacyDetail>
        <PrivacyDetail>
          <h5>12. 개인정보관리책임자</h5>
          <p>
            회원님 계정의 비밀번호에 대한 보안을 유지할 책임은 회원님 자신에게
            있습니다. "병원"에서 메일 또는 기타 방법으로 회원님께 비밀번호를
            질문하는 경우는 절대 없으므로 어떠한 경우에도 비밀번호를 알려주지
            마십시오. 로그온(log-on)한 상태에서는 주위의 다른 사람에게
            개인정보가 유출되지 않도록 주의를 기울이시기 바랍니다. <br />
            개인정보 관리 및 책임자 문의 담당자 : 김정경 <br /> 연락처: 053) 252
            - 6875 <br /> 상기 개인정보취급방침은 2014년 7월 21일부터
            시행합니다.
          </p>
        </PrivacyDetail>
      </PrivacyInfoWrapper>
      <Footer />
    </PrivacyContainer>
  );
};

export default Privacy;
