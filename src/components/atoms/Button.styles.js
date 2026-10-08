import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${(props)=>(props.secondary?'#e7e044':'#C0C7D6')};
    border-radius: 50px;
    color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }
`;