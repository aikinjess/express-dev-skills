const skills = [
    {id:1, skill: 'HTML', learned: true},
    {id:2, skill: 'CSS', learned: true},
    {id:3, skill: 'Javascript', learned: true},
    {id:4, skill: 'Node.js', learned: true},
    {id:5, skill: 'Mongoose', learned: true},
    {id:6, skill: 'MongoDb', learned: true},
    {id:7, skill: 'PHP', learned: false},
    {id:8, skill: 'Python', learned: false},
    {id:9, skill: 'SQL', learned: false},
    {id:10, skill: 'Ruby', learned: false},
    {id:11, skill: 'React', learned: false},
    {id:12, skill: 'Express', learned: true},
    {id:13, skill: 'J Query', learned: true},
    {id:14, skill: 'GIT', learned: true},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.learned = false;
    skills.push(skill);
  }

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function getAll() {
    return skills
}