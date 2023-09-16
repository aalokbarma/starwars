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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080',
      },
    mainModal: {
        backgroundColor: '#00000060',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      modalContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        width: 321,
        display: 'flex',
      },
      listRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 8,
        width: '100%',
      },
      listIcon: {
        marginRight: 5,
      },
      listText: {
        fontFamily: 'Inter',
        fontWeight: '500',
        letterSpacing: 0.5,
        fontSize: 12,
        lineHeight: 20,
        color: '#f1f1f5,'
      },
      deleteModalContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 4,
        width: '80%',
        display: 'flex',
        padding: 20,
      },
      alertIcon: {
        marginBottom: 20,
      },
      cautionText: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 28,
        color: '#101828'
      },
      confirmationMessage: {
        fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
        color: '#667085',
      },
      buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
      },
      submitButtons: {
        width: '46%',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingVertical: 18,
        borderWidth: 1,
      },
      buttonText: {
        fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
      }
});

export default Styles;