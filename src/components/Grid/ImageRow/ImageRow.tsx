import { StyledTh, StyledTr } from "./styles";
import ImageTray from "./ImageTray/ImageTray";
import React from "react";
import { RestaurantImages } from "../../../assets/images/images";

interface ImageRowProps {
    even: boolean;
    images: RestaurantImages;
    id: string;
    name: string;
}

const ImageRow = (props: ImageRowProps): JSX.Element => {
    return (
        <StyledTr even={props.even}>
            <StyledTh>{props.name}</StyledTh>
            <ImageTray images={props.images} id={props.id} />
        </StyledTr>
    );
};

export default ImageRow;
