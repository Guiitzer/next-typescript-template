import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    margin: 30px auto;
    border-radius: 30px 30px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
    max-height: 800px;
    max-width: 1010px;
`;

export const ProductName = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 30px;
    padding: 25px;
`;
export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DetailsLeft = styled.div`
    margin: 10px;
    background-color: #2a21;
    border-radius: 30px;
`;
export const DetailsRight = styled.div`
    margin: 20px;
    border-radius: 30px;
`;
export const ImageContainer = styled.div`
    background-color: #1c5b;
    text-align: center;
    margin: 0 auto;
    border-radius: 30px;
`;
export const TextDetails = styled.div`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin: 0 auto;
    padding: 30px;
    text-align: justify;
`;
