import { DragDropContext, DraggableLocation, DropResult } from "react-beautiful-dnd";
import React, { useState } from "react";
import images, { RestaurantImages } from "../../assets/images/images";
import ImageRow from "./ImageRow/ImageRow";
import { StyledTable } from "./styles";

interface ImageGroups {
    [key: string]: { images: RestaurantImages; name: string };
}
const imageGroups: ImageGroups = {
    "row-1": { images: [], name: "🤤" },
    "row-2": { images: [], name: "🙂" },
    "row-3": { images: [], name: "😐" },
    "row-4": { images: [], name: "🙁" },
    "row-5": { images: [...images], name: "🤢" },
};

const reorder = <T extends {}>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Grid = (): JSX.Element => {
    const [state, setState] = useState({ imageGroups: imageGroups });

    const getList = (id: string): RestaurantImages => {
        return state.imageGroups[id].images;
    };

    const move = (
        source: RestaurantImages,
        destination: RestaurantImages,
        droppableSource: DraggableLocation,
        droppableDestination: DraggableLocation,
    ): typeof imageGroups => {
        const sourceClone = [...source];
        const destClone = [...destination];
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = { ...state.imageGroups };
        result[droppableSource.droppableId].images = sourceClone;
        result[droppableDestination.droppableId].images = destClone;

        return result;
    };

    function onDragEnd(result: DropResult): void {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const imageGroupsNew = reorder(
                getList(destination.droppableId),
                result.source.index,
                destination.index,
            );

            const newState = {
                imageGroups: {
                    ...state.imageGroups,
                    [destination.droppableId]: {
                        images: imageGroupsNew,
                        name: state.imageGroups[destination.droppableId].name,
                    },
                },
            };

            setState({ ...newState });
        } else {
            const resultFromMove = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination,
            );

            setState({ imageGroups: { ...resultFromMove } });
        }
    }

    const imageRowsList = Object.keys(state.imageGroups).map(
        (group, index): JSX.Element => {
            return (
                <ImageRow
                    {...state.imageGroups[group]}
                    even={index % 2 === 0}
                    key={group}
                    id={group}
                />
            );
        },
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <StyledTable>
                <tbody>{imageRowsList}</tbody>
            </StyledTable>
        </DragDropContext>
    );
};

export default Grid;
