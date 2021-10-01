import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as G from "components/shared/styles/goods.style";
import { GF1F3F5 } from "components/shared/common/colors";

const Container = styled.div`
  margin: 0px -16px;
  padding: 0px 16px 24px;
  border-bottom: 8px solid ${GF1F3F5};
`;

const Content = styled.div`
  overflow: auto hidden;
  display: flex;
  white-space: nowrap;
  margin: 0 -16px;
  padding: 0 16px;
`;

const VogoItem = styled(G.VogoItem)`
  margin: 4px 0;
`;

const VogoLook = () => {
  const [vogolook, setVogoLook] = useState([]);
  // console.log(vogolook);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "SCOUTER=xkhvir0ta5f1e");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://devapi.vogoplay.com/api/main/wants?Key=AIzaSyCkr0UI65tFw4YmpfHl9bPPwbS4Ae6I4zA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVogoLook(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div>
        {vogolook.length !== 0 && (
          <Container>
            <G.MainTitle>
              <G.TitleTxtQuestion>VOGO싶다</G.TitleTxtQuestion>
              <G.Btn>더보기</G.Btn>
            </G.MainTitle>
            <Content>
              {vogolook.data.map((item, wantsIdx) => (
                <VogoItem key={item.wantsIdx}>
                  <G.VogoImgWrap>
                    <G.VogoImg src={`${item.imageList[0].image}`} alt='상품' />
                    <G.VogoImg src={`${item.imageList[1].image}`} alt='상품' />
                  </G.VogoImgWrap>
                  <G.TxtWrap>
                    <G.VTxt>{item.title}</G.VTxt>
                    <G.VNumber>
                      <G.VBold>{item.voteTotalCnt}</G.VBold>명 참여중
                    </G.VNumber>
                  </G.TxtWrap>
                </VogoItem>
              ))}
            </Content>
          </Container>
        )}
      </div>
    </>
  );
};

export default VogoLook;
