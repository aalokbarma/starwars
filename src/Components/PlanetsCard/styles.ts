import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    planetsCardMainContainer: {
        width: '100%',
        height: 225,
        marginVertical: 5,
    },
    cardImage: {
        width: '100%',
        borderRadius: 16,
        height: 150,
        objectFit: "cover",
    },
    cardDetailsContainer: {
        paddingHorizontal: 3,
        paddingVertical: 5,
    },
    headingText: {
        fontFamily: "Inter",
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 16,
        paddingVertical: 10,
        color: '#090A0A'
    },
    descriptionText: {
        fontFamily: "Inter",
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        color: '#6C7072'
    },
    threeDotsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: "flex-end",
        paddingRight: 15,
        marginBottom: -40,
        marginTop: 15,
        zIndex: 100,
    },
});

export default Styles;