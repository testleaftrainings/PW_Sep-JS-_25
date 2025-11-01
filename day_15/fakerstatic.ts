import { faker} from "@faker-js/faker"

export class FakerData{

static getFirstName(){
    return faker.person.firstName()
}

}