
    
    export const fetchDataFromAPI = (payload) => {

        return {

           type: 'FETCHDATAFROMAPI',
           ...payload,

        };

    };

    export const selectWidget = (payload) => {

        return {

           type: 'SELECTWIDGET',
           ...payload,

        };

    };

    export const inputPincode = (payload) => {

        return {

           type: 'INPUTPINCODE',
           ...payload,

        };

    };

    