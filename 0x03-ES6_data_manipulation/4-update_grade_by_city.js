function updateStudentGradeByCity(students, city, newGrades) {
    const studentsInCity = students.filter((student) => student.location === city);
    return studentsInCity.map((student) => {
        const filteredGrades = newGrades.filter((grades) => grades.studentId === student.id);
        if(filteredGrades.length > 0) {
            return {
            ...student,
            grade: filteredGrades[0].grade,
            };
        }
        return {
        ...student,
        grade: 'N/A',
        };
    });
}

export default updateStudentGradeByCity;
