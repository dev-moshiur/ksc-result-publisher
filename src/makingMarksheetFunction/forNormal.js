import { upDateMarksheet } from "../features/resultSheet/resulSlice";

const ForNormal = (item, mark, dispatch) => {
  const { name, max } = item;

  if (mark <= max / 1 && mark >= Math.floor((max / 5) * 4)) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 0,
        gpa: 5,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: 5,
          subGreate: "A+",
          subMarks: mark,
        },
      })
    );
  } else if (
    mark < Math.floor((max / 5) * 4) &&
    mark >= Math.floor((max / 10) * 7)
  ) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 0,
        gpa: 4,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: 4,
          subGreate: "A",
          subMarks: mark,
        },
      })
    );
  } else if (
    mark < Math.floor((max / 10) * 7) &&
    mark >= Math.floor((max / 10) * 6)
  ) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 0,
        gpa: 3.5,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: 3.5,
          subGreate: "A-",
          subMarks: mark,
        },
      })
    );
  } else if (
    mark < Math.floor((max / 10) * 6) &&
    mark >= Math.floor((max / 10) * 5)
  ) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 0,
        gpa: 3,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: 3,
          subGreate: "B",
          subMarks: mark,
        },
      })
    );
  } else if (
    mark < Math.floor((max / 10) * 5) &&
    mark >= Math.floor((max / 10) * 4)
  ) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 0,
        gpa: 2,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: 2,
          subGreate: "C",
          subMarks: mark,
        },
      })
    );
  } else if (mark < Math.floor((max / 10) * 4) && mark >= Math.floor(max / 3)) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 0,
        gpa: 1,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: 1,
          subGreate: "D",
          subMarks: mark,
        },
      })
    );
  } else if (mark < Math.floor(max / 3) && mark >= 0) {
    dispatch(
      upDateMarksheet({
        subMark: mark / 1,
        fail: 1,
        gpa: 0,
        subjectCount: 1,
        subjInfo: {
          subject: name,
          subGpa: "",
          subGreate: "F",
          subMarks: mark,
        },
      })
    );
  } else {
  }
};

export default ForNormal;
