const getListStudentsIds = (listStudents) =>{
    let listStudentIds = [];
    if(!(listStudents instanceof Array)) {
        return listStudentIds;
    }
    listStudentIds = listStudents.map((student) => student.id);
};

export default getListStudentsIds;
1-get_list_student_ids.js