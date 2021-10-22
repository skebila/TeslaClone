import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontWeight: '500',
        fontSize: 40
    },
    subTitle: {
        fontSize: 16,
        color:'#5c5e62'
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }

})

export default styles;