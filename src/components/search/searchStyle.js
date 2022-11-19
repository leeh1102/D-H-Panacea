import * as Constants from '../../util/constants';

const Styles = {
    generalStyle: {
        position: 'relative',
        marginTop: 10,
        marginBottom: 8,

        color: Constants.ORANGE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            m: 1,
        },

    },
    buttonStyle: {
        bgcolor: '#ffffff',
        color: Constants.LIGHT_BLACK,
        borderRadius: 2,
        borderColor: Constants.LIGHT_BLACK,
        ActiveXObject: Constants.ORANGE,
        "&:hover": {
            color: Constants.ORANGE,
            borderColor: Constants.LIGHT_BLACK,
            ActiveXObject: Constants.ORANGE,

        },
    },

    generalDatePickerStyle: {
        bgcolor: '#ffffff',
        borderColor: Constants.ORANGE,

    },

    generalTreatmentDurationStyle: {
        bgcolor: '#ffffff',
        outline: null,
        border: null,
    },

    generalContainerStyle: {
        marginTop: 90,
        width: '86%',
        minwidth: '400px',
        marginLeft: 'calc(50% - 43%)',
        border: '1px solid ',
        borderRadius: 25,



    }

}
export default Styles; 