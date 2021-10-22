import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20, 

    },
    logo: {
        height: 20,
        width: 100,
        resizeMode:'contain'
    },
    menuIcon: {
        height: 25,
        width: 25,
        resizeMode:'contain'
    },

})

export default styles