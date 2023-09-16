import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    detailsPopupContainer: {
        width: 321,
        height: 388,
        borderRadius: 20,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: '45%',
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
    },
    detailsContainer: {
        width: '100%',
        height: '55%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headingSection: {
        width: '100%',
        height: '31%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    cardHeading: {
        color: '#090A0A',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
    },
    cardSubHeading: {
        color: '#0062FF',
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    },
    descriptionSection: {
        width: '100%',
        height: '62%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardDescription: {
        fontFamily: 'Manrope',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        color: '#191D23',
        width: '100%',
        textAlign: 'left'
    },
    submitButtonContainer: {
        width: '100%',
        borderRadius: 8,
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0062FF'
    },
    gotItText: {
        fontFamily: 'Manrope',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: '#ffffff',
    }
});

export default Styles;