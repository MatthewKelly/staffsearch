module.exports =
    function filterPeople(people, searchTerm) {
        return people.filter((person) => {
            return person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        });
    }
