const building = {
    numberOfFloors : 3,
    numberOfApartmentByFloor : {
        firstFloor: 2,
        secondFloor: 2,
        thirdFloor: 1,
    },

nameOfTenants : ["Sarah", "David", "Artem"],
numberOfRoomsRent: {
    Sarah: [3, 3990],
    David: [2, 3400],
    Artem: [4, 4000]
    },
}

console.log(building.numberOfFloors)

console.log("apartments on the first floor: ", building.numberOfApartmentByFloor.firstFloor)
console.log("apartments on the second floor: ", building.numberOfApartmentByFloor.secondFloor)

console.log("second tenant: ", building.nameOfTenants[1])
console.log("Artem has this many rooms: ", building.numberOfRoomsRent.Artem[0])

const SarahRent = building.numberOfRoomsRent.Sarah[1]
const DavidRent = building.numberOfRoomsRent.David[1]

const ArtemRent = 4000

if (SarahRent + DavidRent > ArtemRent) {
    building.numberOfRoomsRent.Artem[1] = 4100
}

console.log(building)