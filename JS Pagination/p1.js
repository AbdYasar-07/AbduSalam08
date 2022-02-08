var Users = [
    {
        id: 1,
        fName: "Abdul",
        lName: "Salam"
    },
    {
        id: 2,
        fName: "tony",
        lName: "stark"
    },
    {
        id: 3,
        fName: "Abdul",
        lName: "Yasar"
    },
    {
        id: 4,
        fName: "Edwin",
        lName: "John"
    },
    {
        id: 5,
        fName: "michele",
        lName: "Stark"
    },
    {
        id: 6,
        fName: "John",
        lName: "cena"
    },
    {
        id: 7,
        fName: "Aven",
        lName: "Gers"
    },
    {
        id: 8,
        fName: "Robert",
        lName: "Downey"
    },
    {
        id: 9,
        fName: "Captain",
        lName: "America"
    },
    {
        id: 10,
        fName: "Black",
        lName: "Widow"
    },
    {
        id: 11,
        fName: "Hawk",
        lName: "Eye"
    },
    {
        id: 12,
        fName: "Scarellet",
        lName: "Johanson"
    },
    {
        id: 13,
        fName: "Morgan",
        lName: "Stark"
    },
    {
        id: 14,
        fName: "Arjun",
        lName: "Reddy"
    },
    {
        id: 15,
        fName: "Adithya",
        lName: "Varma"
    },
    {
        id: 16,
        fName: "Kabir",
        lName: "Singh"
    },
    {
        id: 17,
        fName: "Black",
        lName: "Panther"
    },
    {
        id: 18,
        fName: "Winter",
        lName: "Soldier"
    },
    {
        id: 19,
        fName: "lorem",
        lName: "Ipsum"
    },
    {
        id: 20,
        fName: "Steve",
        lName: "Rogers"
    },
    {
        id: 20,
        fName: "Wanda",
        lName: "Witch"
    },
    {
        id: 21,
        fName: "Vision",
        lName: "Wanda"
    },
    {
        id: 22,
        fName: "Wanda",
        lName: "Vision"
    },
    {
        id: 23,
        fName: "Jarvis",
        lName: "Ai"
    },
    {
        id: 24,
        fName: "Friday",
        lName: "Ai"
    },
    {
        id: 25,
        fName: "Odin",
        lName: "Thor"
    }
]

var state = {
    'queryset': Users,
    'page': 1,
    'row': 2,
    'window': 6
}

function pagination(queryset, page, row) {

    var trimStart = (page - 1) * row;

    var trimEnd = trimStart + row;

    var trimmedData = queryset.slice(trimStart, trimEnd);

    var pages = Math.ceil(queryset.length / row);

    return {
        'queryset': trimmedData,
        'pages': pages,
    }

}
 
// Pagination buttons

function paginationButtons(pages) {

    var wrapper = document.querySelector('.btn-wrapper');
    wrapper.innerHTML = '';

    var maxLeft = (state.page - Math.floor(state.window / 4));
    var maxRight = (state.page + Math.floor(state.window / 4));

    console.log(maxLeft,maxRight);

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)

        maxRight = pages

        if (maxLeft < 1) {
            maxLeft = 1
        }
    }

    for (var page = maxLeft; page <= maxRight; page++) {

        wrapper.innerHTML += `<button value=${page} class="page-btn btn btn-primary m-2">${page}</button>`

    }
    if (state.page != 1) {
        
        wrapper.innerHTML = `<button value=${1} class="page-btn btn btn-primary m-2"><< First</button>` + wrapper.innerHTML
    
    }
    if (state.page != pages) {
        
        wrapper.innerHTML += `<button value=${pages} class="page-btn btn btn-primary m-2">Last >></button>`

    }
    
    var pageBtn = document.querySelectorAll('.page-btn');

    pageBtn.forEach(btn => {

        btn.addEventListener('click', (e) => {

            var list = document.querySelector('tbody');

            list.innerHTML = '';

            state.page = Number(e.target.value);

            DisplayUsers();

        })

    })

}

// displaying users

DisplayUsers()

function DisplayUsers() {

    var list = document.querySelector('#Users-List');

    var data = pagination(state.queryset, state.page, state.row);

    // list.innerHTML = '';

    var usersArr = data.queryset;

    for (var i = 1 in usersArr) {
        row = `
        <tr>
                        <td>${usersArr[i].id}</td>
                        <td>${usersArr[i].fName}</td>
                        <td>${usersArr[i].lName}</td>
        </tr>
        `
        list.innerHTML += row;
    }
    paginationButtons(data.pages)
}