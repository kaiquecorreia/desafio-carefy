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
  try {
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

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const Delete = async Sql => {
  try {
    database = await connection();
    await database.transaction(tx => {
      tx.executeSql(Sql);
    });
    // await database.closeDatabase();
    return true;
  } catch (error) {}
};
export const Store = async (sql, table) => {
  try {
    database = await connection();
    let data = [];
    await database.transaction(tx => {
      tx.executeSql(sql);
      tx.executeSql(
        `SELECT * FROM ${table} ORDER BY id DESC LIMIT 1`,
        [],
        (tx, results) => {
          const rows = results.rows;

          for (let i = 0; i < rows.length; i++) {
            data.push({
              ...rows.item(i),
            });
          }
        },
      );
    });

    return data;
  } catch (error) {}
};
