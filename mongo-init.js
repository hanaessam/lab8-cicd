db = db.getSiblingDB('lab6');
db.tasks.drop();
db.tasks.insertMany([
  { id: 1, name: 'Milk', status: 'done' },
  { id: 2, name: 'Eggs', status: 'done' },
  { id: 3, name: 'Bread', status: 'pending' },
  { id: 4, name: 'Butter', status: 'pending' },
  { id: 5, name: 'Orange juice', status: 'pending' },
  { id: 6, name: 'Coffee', status: 'pending' },
  { id: 7, name: 'Tea', status: 'pending' },
  { id: 8, name: 'Sugar', status: 'pending' },
  { id: 9, name: 'Salt', status: 'pending' },
  { id: 10, name: 'Pepper', status: 'pending' },
  { id: 11, name: 'Cheese', status: 'pending' },
  { id: 12, name: 'Yogurt', status: 'pending' },
  { id: 13, name: 'Cereal', status: 'pending' },
  { id: 14, name: 'Pasta', status: 'pending' },
  { id: 15, name: 'Rice', status: 'pending' },
  { id: 16, name: 'Beans', status: 'pending' },
  { id: 17, name: 'Lentils', status: 'pending' },
  { id: 18, name: 'Chicken', status: 'done' },
  { id: 19, name: 'Beef', status: 'pending' },
  { id: 20, name: 'Fish', status: 'done' },
  { id: 21, name: 'Juice', status: 'pending' },
]);

