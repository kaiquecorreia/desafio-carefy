import SQLite from 'react-native-sqlite-storage';
/**
 * Retonar funções de manipulação do banco de dados SQLITE
 */
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
/**
 * Realiza a conexão ao banco de dados SQLITE
 */
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
/**
 * Busca dados no BD
 */
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
/**
 * Delete dados do bd
 */
export const Delete = async Sql => {
  try {
    database = await connection();
    await database.transaction(tx => {
      tx.executeSql(Sql);
    });
    return true;
  } catch (error) {}
};
/**
 * Registra dados no banco de dados
 */
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
