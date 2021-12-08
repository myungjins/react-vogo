import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as S from "components/shared/styles/form.style";
import * as B from "components/shared/styles/button.style";
import { imgRoutes } from "components/shared/common/images";

const Containner = styled.div``;

const Title = styled.p`
  margin: 16px 0 24px;
  font-size: 28px;
  color: ${C.G343A40};
`;

const SForm = styled.form``;

const FormText = styled(S.FormText)`
  height: 56px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const BtnGray = styled(B.BtnGray)`
  margin-top: 16px;
  background-color: ${(props) => props.condition && C.PVOGO};
  border: 1px solid ${(props) => props.condition && C.PVOGO};
  cursor: ${(props) => !props.condition && "auto"};
`;

const FormIcon = styled(S.FormIcon)`
  width: 24px;
  height: 24px;
  background: url("${imgRoutes.common}/ic_view_gray_full.png") no-repeat center/contain;
  background-size: 24px;
`;

const Form = () => {
  return (
    <Containner>
      <Title>로그인</Title>
      <SForm>
        <FormText //
          type='text'
          placeholder='아이디/이메일 입력'
          maxLength={50}
          name='userId'
          autoComplete='on'
        />

        <S.FormIconBox>
          <S.FormLabelingText //
            type='password'
            placeholder='비밀번호 입력'
            name='pwd'
            autoComplete='off'
          />
          <FormIcon />
        </S.FormIconBox>
      </SForm>

      <BtnGray type='button' height56={true}>
        로그인
      </BtnGray>
    </Containner>
  );
};

export default Form;
