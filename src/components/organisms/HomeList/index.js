import React from "react";
import {Card} from '../../molecules'
import { Text } from "../../atoms";
import {FlatList} from 'react-native'

const FAKE_DATA = [
    {
        id: 0,
        image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwFpk3o0Xz-bsRzf0kGMKLJmUVnEQ1zCFVQ&usqp=CAU'
    },
    {
        id:1,
        image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMPz-woOT-luVGT44UaFJn4JzqczmWZq1TQ&usqp=CAU'
    }
]

export const HomeList = () => {
    return(
        <FlatList
            horizontal
            data={FAKE_DATA}
            renderItem={({item}) => <Card item={item}/>}
            keyExtractor={(item) => String(item.id)}
        />
    )
}