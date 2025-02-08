
const students = [
  {
    id: 1,
    name: "Albus",
    house: "Gryffindor"
  },
  {
    id: 2, 
    name: "Sirius",
    house: "Gryffindor"
  },
  {
    id: 3, 
    name: "Horace",
    house: "Slytherin"
  },
  {
    id: 4, 
    name: "Gilderoy",
    house: "Ravenclaw"
  },
  {
    id: 5, 
    name: "Silvanus",
    house: "Hufflepuff"
  },
  {
    id: 6, 
    name: "Sybill",
    house: "Ravenclaw"
  },
  {
    id: 7, 
    name: "Dolores",
    house: "Slytherin"
  },
]

//houses array
const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]

//expelled students array
const moldyVoldyArmy = [];

//Util function
const renderToDom = (divId, toRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = toRender;
}

const showFormButton = document.getElementById("showFormButton")
const studentForm = document.getElementById("studentForm")

showFormButton.addEventListener("click", () => {
  studentForm.style.display = "block"
})

//function to get a random house out of the 4 houses 
const randomHouse = () => {
  rando = Math.floor(Math.random() * houses.length)
  return houses[rando]
}

//studentCards
const studentsDom = (arr) => {
  let domString = ""

  arr.forEach((student) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="studentCard">
          <div class="header-name">${student.name}</div>
          <div class="card-body">
          <h5 class="card-title">House</h5>
          <p class="card-text">${student.house}</p>
          <div class="dark-btn">
          <button type="button" class="btn btn-primary expel-btn" id="getOut--${student.id}">Expel</button>
          </div>
        </div>
      </div>
    </div>`
  })
  renderToDom("#studentApp", domString)
}

//Create
const form = document.querySelector("form")

const createStudent = (e) => {
  e.preventDefault()

    const newStudent = {
      id: students.length + 1,
      name: document.querySelector("#name").value,
      house: randomHouse()
    }
    students.push(newStudent)
    studentsDom(students)
    form.reset()
  }
  form.addEventListener("submit", createStudent)

const studentApp = document.querySelector("#studentApp")

//expel students
const moldyVoldyStudentsDom = (arr) => {
  let domString = ""

  for (const student of arr) {
    domString += `
      <div class="dark-card" style="width: 18rem;">
          <div class="dark-welcome">
          <div class="drk-welcome">Welcome to the Moldy Voldy Army!!
          </div>
          </div>
          <h6 class="dark-name-title">Name</h6>
          <div class="dark-name">${student.name} is thy name</div>
          <div class="dark-body">
          <h5 class="dark-title">House</h5>
          <p class="dark-text">${student.house}</p>
        </div>
      </h6>
    `
  }

  renderToDom("#darkArmyApp", domString)
}

//getting the students into the darkArmyApp
  studentApp.addEventListener("click", (e) => {
    if (e.target.id.includes("getOut")) {
      const [, id] = e.target.id.split("--")
      const index = students.findIndex((e) => e.id === Number (id))
      const moldyVoldyStudent = students[index]
      students.splice(index, 1)
      moldyVoldyArmy.push(moldyVoldyStudent)
      studentsDom(students)
      moldyVoldyStudentsDom(moldyVoldyArmy)
    }
  })

//filtering the students by houses with buttons
const filter = (students, houseString) => {
  const houseArray = []

  for (const student of students) {
    if (student.house === houseString) {
      houseArray.push(student)
    }
  }
  return houseArray
}

const ravenButton = document.querySelector("#rav-btn")
const slytButton = document.querySelector("#sly-btn")
const gryffButton = document.querySelector("#gryff-btn")
const huffButton = document.querySelector("#huff-btn")
const allHousesButton = document.querySelector("#all-houses-btn")

ravenButton.addEventListener("click", () => {
  const ravHouse = filter(students, "Ravenclaw")
  studentsDom(ravHouse)
})

slytButton.addEventListener("click", () => {
  const slytHouse = filter(students, "Slytherin")
  studentsDom(slytHouse)
})

gryffButton.addEventListener("click", () => {
  const gryffHouse = filter(students, "Gryffindor")
  studentsDom(gryffHouse)
})

huffButton.addEventListener("click", () => {
  const huffHouse = filter(students, "Hufflepuff")
  studentsDom(huffHouse)
})

allHousesButton.addEventListener("click", () => {
  studentsDom(students)
})



//"Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"









const startApp = () => {
  studentsDom(students);
}

startApp();
