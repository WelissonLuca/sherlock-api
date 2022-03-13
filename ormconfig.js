module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  migrations: [
    process.env.NODE_ENV === 'develop'
      ? './src/shared/infra/typeorm/migrations/**.ts'
      : './dist/shared/infra/typeorm/migrations/**.js',
  ],
  entities: [
    process.env.NODE_ENV === 'develop'
      ? './src/modules/*/infra/typeorm/entities/**.entity.ts'
      : './dist/modules/*/infra/typeorm/entities/**.js',
  ],
  cli: {
    migrationsDir:
      process.env.NODE_ENV === 'develop'
        ? './src/shared/infra/typeorm/migrations'
        : './dist/shared/infra/typeorm/migrations',
    entities:
      process.env.NODE_ENV === 'develop'
        ? './src/modules/*/infra/typeorm/entities/'
        : './dist/modules/*/infra/typeorm/entities/',
  },
};
