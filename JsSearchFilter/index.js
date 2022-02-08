// Data

const Students = [
    {
        stuName: "Salam",
        course: "BCA",
        status: "Current"
    },
    {
        stuName: "Yasar",
        course: "BSC",
        status: "Finished"
    },
    {
        stuName: "Tony",
        course: "B.Tech",
        status: "Finished"
    },
    {
        stuName: "Abdul",
        course: "B.com",
        status: "Current"
    },
    {
        stuName: "Stark",
        course: "Ai",
        status: "Current"
    },
    {
        stuName: "Tom",
        course: "Wis.com",
        status: "Discontinued"
    },
    {
        stuName: "Jerry",
        course: "UI/UX",
        status: "Finished"
    },
    {
        stuName: "Stephen Strange",
        course: "MBBS",
        status: "Finished"
    }
]

// alerts

// const alertbox = document.querySelector('.alert');

// search by Name

document.querySelector('.search-bar').addEventListener('keyup', (e) => {

    let searchTerm = e.target.value.replace(/^\s+/, '').replace(/s\+$/, '');

    let filter = searchFunc(searchTerm, Students)
    ShowStudentList(filter)

})

function searchFunc(searchTerm, students) {

    let FillteredArr = [];

    for (i = 0; i < students.length; i++) {

        searchVal = searchTerm.toLowerCase();
        let studentName = students[i].stuName.toLowerCase();

        if (studentName.includes(searchVal)) {
            FillteredArr.push(students[i])
            // setTimeout(() => {
            //     alertbox.classList.remove('alert-on')
            //     alertbox.classList.add('alert-off')
            // })
        }
        // else {
        //     alertbox.classList.add('alert-on')
        //     alertbox.classList.remove('alert-off')
        //     setTimeout(() => {
        //         alertbox.classList.remove('alert-on')
        //         alertbox.classList.add('alert-off')
        //     }, 3000)
        // }
    }
    return FillteredArr;

}




// search by course

document.querySelector('.select-filter').addEventListener('click', (e) => {
    let selectTerm = e.target.value;
    // console.log(selectTerm);
    let selectFilter = selectFilterFunc(selectTerm, Students)
    ShowStudentList(selectFilter)

})

function selectFilterFunc(selectTerm, students) {

    var selectFilteredArr = [];

    students.forEach(student => {

        selectValue = selectTerm.toLowerCase();

        var studentCourse = student.course.toLowerCase();

        if (studentCourse.includes(selectValue)) {
            selectFilteredArr.push(student)
        }
    })

    return selectFilteredArr;

}


// Adding data to list

ShowStudentList(Students)

function ShowStudentList(students) {

    var list = document.querySelector('.list');

    list.innerHTML = "";

    for (i = 0; i < students.length; i++) {
        row = `
                    <tr>
                        <td>${students[i].stuName}</td>
                        <td>${students[i].course}</td>
                        <td>${students[i].status}</td>
                    </tr>
`
        list.innerHTML += row;
    }

}