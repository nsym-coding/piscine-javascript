var clone1 = {}
var clone2 = {}
var samePerson = person

Object.assign(clone1, person)
Object.assign(clone2, person)


person.age = 78
person.country = 'FR'
