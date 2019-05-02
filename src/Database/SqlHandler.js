import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

error = err => {
  console.log('error: ', err);
  console.log('error: ', err.message);
  return false;
};

success = () => {
  console.log('Conectado ao banco de dados');
};

connection = async () => {
  return SQLite.openDatabase(
    {
      name: 'database.db',
      Location: 'default',
      createFromLocation: 1,
    },
    success,
    error,
  );
};

export const Read = async Sql => {
  database = await connection();
  let data = [];
  await database.transaction(tx => {
    tx.executeSql(Sql, [], (tx, results) => {
      const rows = results.rows;

      for (let i = 0; i < rows.length; i++) {
        data.push({
          ...rows.item(i),
        });
      }
    });
  });
  // await database.closeDatabase();
  return data;
};
