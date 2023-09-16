import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    planetsCardMainContainer: {
        width: '100%',
        height: 225,
        marginVertical: 20,
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
        borderRadius: 4,
        width: '40%',
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