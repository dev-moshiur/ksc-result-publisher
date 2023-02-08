export const reducer = (state, action) => {
  switch (action.type) {
    case "setResult":
      return {
        ...state,
        results: action.value.result,
        type: action.value.type,
      };
    case "changeForm":
      return {
        ...state,
        formType: action.value,
      };
    case "setAdmin":
      return {
        ...state,
        isAdmin: action.value,
        adminChecked: action.value,
      };
    case "changeLoading":
      return {
        ...state,
        loading: action.value,
      };
    case "addSubject":
      return {
        ...state,
        inputSubjects: [...state.inputSubjects, action.value],
      };
    case "removeSubject":
      return {
        ...state,
        inputSubjects: state.inputSubjects.filter(
          (item) => item.name != action.value
        ),
      };
    case "changePopUp":
      return {
        ...state,
        popUp: action.value.name,
        popupMessage: action.value.message,
      };
    case "upDateMarksheet":
      return {
        ...state,
        total: state.total + action.value.subMark,
        fail: state.fail + action.value.fail,
        gpa: state.gpa + action.value.gpa,
        subjInfo: [...state.subjInfo, action.value.subjInfo],
        subjectCount: state.subjectCount + action.value.subjectCount,
      };
    case "imptyMarksheet":
      return {
        ...state,
        total: 0,
        fail: 0,
        gpa: 0,
        subjInfo: [],
        subjectCount: 0,
        type:''
      };
    default:
      break;
  }
};
