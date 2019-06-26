import { Draggable, Droppable } from "react-beautiful-dnd";
import { StyledImage, StyledTd } from "./styles";
import React from "react";
import { RestaurantImages } from "../../../../assets/images/images";

interface ImageTrayProps {
    images: RestaurantImages;
    id: string;
}

const ImageTray = (props: ImageTrayProps): JSX.Element => {
    const images = props.images.map(
        (image, index): JSX.Element => {
            return (
                <Draggable draggableId={image.alt} index={index} key={image.alt}>
                    {(provided, snapshot): JSX.Element => (
                        <StyledImage
                            {...image}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        />
                    )}
                </Draggable>
            );
        },
    );

    return (
        <Droppable droppableId={props.id} direction="horizontal">
            {(provided, snapshot): JSX.Element => (
                <StyledTd
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    active={snapshot.isDraggingOver}
                >
                    {images}
                    {provided.placeholder}
                </StyledTd>
            )}
        </Droppable>
    );
};

export default ImageTray;
