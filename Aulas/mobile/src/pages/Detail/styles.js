import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        padding: 24,
        marginBottom: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 48
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        marginBottom: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
    }, 

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color: '#13131a'
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    }, 

    actions: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: "#e02041",
        borderRadius: 8,
        height: 50,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})