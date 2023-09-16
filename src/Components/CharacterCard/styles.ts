import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    characterCardmainContainer: {
        margin: 10,
        width: 140,
        height: 220,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    characterImage: {
        width: 140,
        height: 140,
        objectFit: 'fill',
        borderRadius: 25,
    },
    descriptionContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: 140,
        paddingLeft: 5,
    },
    charactername: {
        paddingTop: 10,
        paddingBottom: 5,
        color: '#090A0A',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
    },
    characterDescription:{
        color: '#6C7072',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
    }
});

export default Styles;