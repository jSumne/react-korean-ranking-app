import { styled } from "../../../../theme";

interface StyledTdProps {
    active: boolean;
}

export const StyledTd = styled.td<StyledTdProps>`
    min-height: 100px;
    display: flex;
    padding: 0 0.4em;
    flex-wrap: wrap;
    align-items: center;
    background-color: ${(props): string => (props.active ? "rgba(0, 0, 0, 0.03)" : "transparent")};
`;

export const StyledImage = styled.img`
    width: 80px;
    height: 80px;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.4);
    margin: 10px;
`;
