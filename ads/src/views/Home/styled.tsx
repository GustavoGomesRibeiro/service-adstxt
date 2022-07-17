import styled from 'styled-components';

export const Container = styled.div`
      display: flex;
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
`;
export const Text = styled.p``;


export const ContentText = styled.div``;

export const Content = styled.div`

  `;

export const Title = styled.h2``;

export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const AreaButton = styled.div`
    padding: 10px 0px;
`;

export const ButtonToConfirm = styled.button``;
export const ButtonToSend = styled.button`
    margin-left: 10px;
`;

export const Errors = styled.div`
    margin: 0 20px;
`;
export const Reports = styled.div`
    min-width: 500px;
    height: 300px;
    padding: 10px;
    background: #e9e9e9;
`;