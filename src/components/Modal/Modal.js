import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="Modal-overlay" onClick={close} />
          <div className="Modal">
            <p className="title">Help</p>
            <div className="content">
              <p>
                TG버튼을 누르시면<br />
                Nasdaq, Dow Jones, S&P500 종가를<br />
                알림메시지로 보내는<br />
                Telegram채널 안내 페이지가 있습니다.<br />
                <br />
                Business Trends in US를<br />
                클릭하시면<br />
                Google Trends 페이지로<br />
                이동하실 수 있습니다.<br />
                <br />
                Q&A를 통해서<br />
                건의사항 혹은 문의사항<br />
                보내주시면 감사드리겠습니다.<br />
              </p>
            </div>
            <div className="button-wrap">
              <button onClick={close}>Close</button>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
