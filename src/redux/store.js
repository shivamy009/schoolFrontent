import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/UserSlice";
import { studentReducer } from "./student/StudentSlice";
import { noticeReducer } from "./notice/NoticeSlice";
import { sclassReducer } from "./sclass/SclassSlice";
import { teacherReducer } from "./teacher/TeacherSlice";
import { complainReducer } from "./complain/ComplainSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        student: studentReducer,
        teacher: teacherReducer,
        notice: noticeReducer,
        complain: complainReducer,
        sclass: sclassReducer
    },
});

export default store;