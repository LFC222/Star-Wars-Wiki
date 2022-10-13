/* eslint-disable prettier/prettier */
import React from 'react'
import {
    CardContainer,
    CardImage,
} from './style'

export const Card = ({item}) => {
    return (
        <CardContainer>
            <CardImage source={{uri:item.image_url}}/>
        </CardContainer>
    )
}
