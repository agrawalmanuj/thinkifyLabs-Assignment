const INITIAL_STATE = {
    widgetData:null,
    inputPinCodeValue:"",
    isSelectedWidgetWidget:false
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
       
           case "FETCHDATAFROMAPI":
           return {
              ...state,widgetData:action.data

           };

           case "SELECTWIDGET":
           return {
              ...state,isSelectedWidgetWidget:!state.isSelectedWidgetWidget

           };

           case "INPUTPINCODE":
           return {
            ...state,inputPinCodeValue:action.value

           };

         default: return state;

    }

};

export default reducer;