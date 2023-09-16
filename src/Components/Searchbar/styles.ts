import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    searchbarContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: '100%',
        height: 'auto',
        backgroundColor: '#181818',
    },
    mainSearchbar: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBarInput: {
        color: '#555',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 25,
        paddingBottom: 7,
        flex: 1,
    },
    searchIcon: {
        height: 20,
        width: 20,
        objectFit: 'contain',
    }
});

export default Styles;