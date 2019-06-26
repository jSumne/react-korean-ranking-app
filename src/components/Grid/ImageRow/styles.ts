import { lighten } from "polished";
import { styled } from "../../../theme";

export const StyledTh = styled.th`
    width: 100px;
    text-align: center;
    font-size: 2.4em;
    margin: 0;
    border-right: 2px solid ${(props): string => props.theme.shadeLight};
`;

interface StyledTrProps {
    even: boolean;
}

export const StyledTr = styled.tr<StyledTrProps>`
    background-color: ${(props): string =>
        props.theme.accentLight && lighten(props.even ? 0.2 : 0.29, props.theme.accentLight)};
`;
