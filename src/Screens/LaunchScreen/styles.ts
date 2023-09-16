import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    launchScreenContainer: {
        backgroundColor: '#181818',
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    launchHeader: {
        flex: 0.3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    launchLogo:{
        width: 199,
        height: 92,
        objectFit: 'contain',
    },
    launchContent: {
        flex: 0.7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    launchImage: {
        width: 311,
        height: 218,
        objectFit: 'contain',
    },
    launchDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    launchHeadertext :{
        fontFamily: "Open Sans",
        fontSize: 22,
        lineHeight: 24,
        fontWeight: "700",
        width: 301,
        textAlign: 'left',
        color: '#ffffff',
        paddingVertical: 15,
        letterSpacing: 0.14,
    },
    launchParaText: {
        opacity: 0.8,
        color: '#ffffff',
        fontFamily: "Open Sans",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
        letterSpacing: 0.14,
        width: 301,
    }, 
});

export default Styles;