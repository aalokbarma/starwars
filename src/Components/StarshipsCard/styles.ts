import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    starshipsCardMainContainer: {
        width: '100%',
        height: 308,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#D0D5DD',
        elevation: 1,
        borderRadius: 20,
        overflow: 'hidden',
        marginVertical: 5,
    },
    cardImageContainer: {
        height: '45%',
        overflow: 'hidden',
    },
    cardImage: {
        width: 400,
        height: 170,
        objectFit: 'cover',
    },
    cardDetailsContainer: {
        height: '55%',
        padding: 10,
    },
    topRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    bottomRowContainer: {

    },
    headerLeftColumn: {
        flex: 1,

    },
    headerRightColumn:{

    },
    cardHeading: {
        paddingVertical: 3,
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: "#171725",
    },
    cardSubHeading: {
        paddingVertical: 3,
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: "#A4A9B5",
    },
    rocketIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 6,
        backgroundColor: "#2064FA",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionText: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        color: "#6C7072",
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        textAlign: 'left'
    },
    ratingsText: {
        width: '100%',
        maxWidth: '100%',
        textAlign: 'right',
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: "#A4A9B5",
        paddingRight: 10,
    },

});

export default Styles;