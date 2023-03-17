import { CoffeeRefactor1679013504123 } from 'src/migrations/1679013504123-CoffeeRefactor';
import { DataSource } from 'typeorm';

/* typeorm-cli.config.ts */
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1679013504123],
});
