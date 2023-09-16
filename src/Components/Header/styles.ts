import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    headerMainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#181818',
        paddingRight: 20
    },
    appLogo: {
        width: 67,
        height: 28,
        objectFit: 'contain',
    },
    notificationButtonContainer: {
        
    },
    notificationIcon: {
        width: 32,
        height: 32,
    }
});

export default Styles;