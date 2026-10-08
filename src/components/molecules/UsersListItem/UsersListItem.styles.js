import styled from 'styled-components';

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background-color: lightgray;
    }
`;

export default Wrapper;